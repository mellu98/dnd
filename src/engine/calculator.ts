import type { AbilityName, CalculatedStats, Character, CharacterAbilityScores, SkillName } from '../types'
import { abilityModifier } from '../utils/modifiers'
import { proficiencyBonus } from '../utils/proficiency-bonus'
import { skills } from '../data/skills'
import { aggregateBonuses } from './bonus-aggregator'
import { computeMaxHp } from './hp-calculator'

const allAbilities: AbilityName[] = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']

export function calculateAllStats(character: Character): CalculatedStats {
  const aggregated = aggregateBonuses({
    raceId: character.raceId,
    subraceId: character.subraceId ?? undefined,
    classId: character.classId,
    subclassId: character.subclassId ?? undefined,
    backgroundId: character.backgroundId,
    level: character.level,
    chosenAbilityBonuses: character.chosenAbilityBonuses,
  })

  // Compute final ability scores (base + racial bonuses)
  const finalAbilityScores = { ...character.abilityScores } as CharacterAbilityScores
  for (const bonus of aggregated.abilityBonuses) {
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
    armorClass: 10 + abilityModifiers.DEX,
    initiative: abilityModifiers.DEX,
    speed: aggregated.speed,
    passivePerception: 10 + skillModifiers.perception,
    allProficiencies: aggregated.proficiencies,
    allFeatures: aggregated.features,
    hp: { max: maxHp, current: currentHp, temporary: character.hp.temporary },
    darkvision: aggregated.darkvision,
  }
}
