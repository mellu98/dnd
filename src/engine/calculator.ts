import type { AbilityName, CalculatedStats, Character, CharacterAbilityScores, SkillName } from '../types'
import { abilityModifier } from '../utils/modifiers'
import { proficiencyBonus } from '../utils/proficiency-bonus'
import { skills } from '../data/skills'
import { aggregateBonuses } from './bonus-aggregator'
import { computeMaxHp } from './hp-calculator'
import { getArmorById } from '../data/equipment'

const allAbilities: AbilityName[] = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']

/**
 * Calculates Armor Class dynamically based on equipped armor, shield, class
 * (Unarmored Defense for Barbarian/Monk), and magical bonuses.
 */
function calculateArmorClass(character: Character, modifiers: Record<AbilityName, number>): number {
  const armorId = character.equippedArmorId
  const shieldId = character.equippedShieldId
  const classId = character.classId

  // No armor equipped → Unarmored Defense
  if (!armorId) {
    if (classId === 'barbarian') return 10 + modifiers.DEX + modifiers.CON
    if (classId === 'monk') return 10 + modifiers.DEX + modifiers.WIS
    return 10 + modifiers.DEX
  }

  // Armor equipped
  const armor = getArmorById(armorId)
  if (!armor) return 10 + modifiers.DEX // fallback — unknown armor id

  let ac = armor.ac
  const dexCap = armor.dexModifier ?? Infinity
  ac += Math.min(modifiers.DEX, dexCap)

  // Shield bonus
  if (shieldId === 'shield') ac += 2

  // Magical armor bonus (equipped item in category 'armor' with magicalBonus)
  const magicalItem = character.equipment.find((e) => e.equipped && e.magicalBonus != null && e.category === 'armor')
  if (magicalItem?.magicalBonus) ac += magicalItem.magicalBonus

  return ac
}

export function calculateAllStats(character: Character): CalculatedStats {
  const aggregated = aggregateBonuses({
    raceId: character.raceId,
    classId: character.classId,
    subclassId: character.subclassId ?? undefined,
    backgroundId: character.backgroundId,
    level: character.level,
    backgroundAbilityChoices: character.backgroundAbilityChoices,
  })

  // Compute final ability scores (base + background ASI bonuses)
  const finalAbilityScores = { ...character.abilityScores } as CharacterAbilityScores
  for (const bonus of aggregated.backgroundAbilityBonuses) {
    finalAbilityScores[bonus.ability] += bonus.value
  }

  // Compute modifiers
  const abilityModifiers = {} as Record<AbilityName, number>
  for (const ability of allAbilities) {
    abilityModifiers[ability] = abilityModifier(finalAbilityScores[ability])
  }

  // Proficiency bonus
  const profBonus = proficiencyBonus(character.level)

  // Collect all skill proficiencies from character choices + background
  const skillProfSet = new Set<SkillName>(character.skillProficiencies)
  for (const prof of aggregated.proficiencies) {
    if (prof.type === 'skill') {
      const skillId = prof.value.toLowerCase().replace(/\s+/g, '_') as SkillName
      skillProfSet.add(skillId)
    }
  }
  const skillProficiencies = Array.from(skillProfSet)

  // Compute skill modifiers
  const skillModifiers = {} as Record<SkillName, number>
  for (const skill of skills) {
    const mod = abilityModifiers[skill.ability]
    const isProficient = skillProfSet.has(skill.id)
    skillModifiers[skill.id] = mod + (isProficient ? profBonus : 0)
  }

  // Saving throws
  const savingThrowProficiencies = aggregated.savingThrows
  const savingThrowModifiers = {} as Record<AbilityName, number>
  for (const ability of allAbilities) {
    const mod = abilityModifiers[ability]
    const isProficient = savingThrowProficiencies.includes(ability)
    savingThrowModifiers[ability] = mod + (isProficient ? profBonus : 0)
  }

  // HP
  let maxHp = character.hp.max
  if (aggregated.hitDie) {
    maxHp = computeMaxHp(aggregated.hitDie, abilityModifiers.CON, character.level)
  }
  const currentHp = Math.min(character.hp.current, maxHp)

  return {
    finalAbilityScores,
    abilityModifiers,
    proficiencyBonus: profBonus,
    skillModifiers,
    skillProficiencies,
    savingThrowModifiers,
    savingThrowProficiencies,
    armorClass: calculateArmorClass(character, abilityModifiers),
    initiative: abilityModifiers.DEX,
    speed: aggregated.speed,
    passivePerception: 10 + skillModifiers.perception,
    allProficiencies: aggregated.proficiencies,
    allFeatures: aggregated.features,
    hp: { max: maxHp, current: currentHp, temporary: character.hp.temporary },
    darkvision: aggregated.darkvision,
  }
}
