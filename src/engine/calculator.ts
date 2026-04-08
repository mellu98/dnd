import type { AbilityName, CalculatedStats, Character, CharacterAbilityScores, SkillName } from '../types'
import { abilityModifier } from '../utils/modifiers'
import { proficiencyBonus } from '../utils/proficiency-bonus'
import { skills } from '../data/skills'
import { aggregateBonuses } from './bonus-aggregator'
import { computeMaxHp } from './hp-calculator'
import { getArmorById, getShieldById } from '../data/equipment'
import { getRaceById } from '../data/races'
import { getClassById } from '../data/classes'

const allAbilities: AbilityName[] = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']

/**
 * Calculates Armor Class dynamically based on equipped armor, shield, class
 * (Unarmored Defense for Barbarian/Monk/Sorcerer Draconic), and magical bonuses.
 */
function calculateArmorClass(character: Character, modifiers: Record<AbilityName, number>): number {
  const armorId = character.equippedArmorId
  const shieldId = character.equippedShieldId
  const classId = character.classId
  const subclassId = character.subclassId

  // No armor equipped → Unarmored Defense variants
  if (!armorId) {
    if (classId === 'barbarian') return 10 + modifiers.DEX + modifiers.CON
    if (classId === 'monk') return 10 + modifiers.DEX + modifiers.WIS
    // Sorcerer: Draconic Bloodline — Draconic Resilience
    if (classId === 'sorcerer' && subclassId === 'draconic') return 13 + modifiers.DEX
    return 10 + modifiers.DEX
  }

  // Armor equipped
  const armor = getArmorById(armorId)
  if (!armor) return 10 + modifiers.DEX // fallback — unknown armor id

  let ac = armor.ac
  const dexCap = armor.dexModifier ?? Infinity
  ac += Math.min(modifiers.DEX, dexCap)

  // Shield bonus (data-driven)
  if (shieldId) {
    const shield = getShieldById(shieldId)
    if (shield) ac += shield.shieldBonus
  }

  // Magical armor bonus (equipped item in category 'armor' with magicalBonus)
  const magicalItem = character.equipment.find((e) => e.equipped && e.magicalBonus != null && e.category === 'armor')
  if (magicalItem?.magicalBonus) ac += magicalItem.magicalBonus

  return ac
}

export function calculateAllStats(character: Character): CalculatedStats {
  // Resolve species size (sizeIT) — defaults to "Media" if species not found
  const race = getRaceById(character.raceId)
  const sizeIT = race?.sizeIT ?? 'Media'

  const aggregated = aggregateBonuses({
    raceId: character.raceId,
    classId: character.classId,
    subclassId: character.subclassId ?? undefined,
    backgroundId: character.backgroundId,
    level: character.level,
    backgroundAbilityChoices: character.backgroundAbilityChoices,
  })

  // Compute final ability scores (base + background ASI bonuses + class ASI choices)
  const finalAbilityScores = { ...character.abilityScores } as CharacterAbilityScores
  for (const bonus of aggregated.backgroundAbilityBonuses) {
    finalAbilityScores[bonus.ability] += bonus.value
  }
  // Apply ASI ability bonuses from explicit character choices (level-up ASIs)
  for (const choice of character.asiChoices ?? []) {
    if (choice.type === 'ability' && choice.abilityBonuses) {
      for (const b of choice.abilityBonuses) {
        finalAbilityScores[b.ability] = Math.min(20, finalAbilityScores[b.ability] + b.value)
      }
    }
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

  // Detect Jack of All Trades (Bard level 2 feature)
  const hasJackOfAllTrades = aggregated.features.some(
    (f) => f.name === 'Jack of All Trades',
  )

  // Compute skill modifiers with Expertise and Jack of All Trades
  const expertiseSet = new Set<SkillName>(character.expertiseSkills)
  const skillModifiers = {} as Record<SkillName, number>
  for (const skill of skills) {
    const mod = abilityModifiers[skill.ability]
    const isProficient = skillProfSet.has(skill.id)
    const hasExpertise = expertiseSet.has(skill.id)

    if (hasExpertise) {
      // Expertise: double proficiency bonus
      skillModifiers[skill.id] = mod + profBonus * 2
    } else if (isProficient) {
      skillModifiers[skill.id] = mod + profBonus
    } else if (hasJackOfAllTrades) {
      // Jack of All Trades: half proficiency (rounded down) on non-proficient skills
      skillModifiers[skill.id] = mod + Math.floor(profBonus / 2)
    } else {
      skillModifiers[skill.id] = mod
    }
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
  // currentHp is recalculated below after applying feat bonuses

  // Spell slot tracker
  const cls = getClassById(character.classId)
  const slotArray = cls?.spellSlotTable?.[character.level] ?? []
  const spellSlots = slotArray.map((max, idx) => {
    const spellLevel = idx + 1
    const expended = character.expendedSpellSlots?.[spellLevel] ?? 0
    return { level: spellLevel, max, expended: Math.min(expended, max) }
  })

  // Apply feat bonuses from ASI choices + background origin feat
  let initiativeBonus = abilityModifiers.DEX
  let speed = aggregated.speed
  let toughBonus = 0

  // Monk Unarmored Movement — speed bonus when no armor equipped
  // PHB 2024 scaling: lvl 2 +10ft, lvl 6 +15ft, lvl 10 +20ft, lvl 14 +25ft, lvl 18 +30ft
  if (character.classId === 'monk' && !character.equippedArmorId) {
    const monkSpeedBonus = character.level >= 18 ? 30
      : character.level >= 14 ? 25
      : character.level >= 10 ? 20
      : character.level >= 6 ? 15
      : character.level >= 2 ? 10
      : 0
    speed += monkSpeedBonus
  }

  // Collect all active feat IDs: from ASI choices + background origin feat (if mechanical)
  const activeFeatIds: string[] = []
  for (const choice of character.asiChoices ?? []) {
    if (choice.type === 'feat' && choice.featId) {
      activeFeatIds.push(choice.featId)
    }
  }
  // Background origin feat — map known feat names to ids
  const bgOriginFeatNameToId: Record<string, string> = {
    Alert: 'alert',
    Tough: 'tough',
    Mobile: 'mobile',
    Musician: 'musician',
    Crafter: 'crafter',
    Skilled: 'skilled',
    Healer: 'healer',
    'Tavern Brawler': 'tavern_brawler',
    'Savage Attacker': 'savage_attacker',
    Skulker: 'skulker',
    'Fey Touched': 'fey_touched',
    'Magic Initiate (Cleric)': 'magic_initiate_cleric',
    'Magic Initiate (Wizard)': 'magic_initiate_wizard',
  }
  for (const feat of aggregated.features) {
    if (feat.name in bgOriginFeatNameToId) {
      activeFeatIds.push(bgOriginFeatNameToId[feat.name])
    }
  }

  for (const featId of activeFeatIds) {
    if (featId === 'alert') initiativeBonus += 5
    if (featId === 'mobile') speed += 10
    if (featId === 'tough') toughBonus += character.level * 2
  }

  // Apply Tough bonus to HP
  const finalMaxHp = maxHp + toughBonus
  const finalCurrentHp = Math.min(character.hp.current, finalMaxHp)

  return {
    finalAbilityScores,
    abilityModifiers,
    proficiencyBonus: profBonus,
    skillModifiers,
    skillProficiencies,
    savingThrowModifiers,
    savingThrowProficiencies,
    armorClass: calculateArmorClass(character, abilityModifiers),
    initiative: initiativeBonus,
    speed,
    passivePerception: 10 + skillModifiers.perception,
    allProficiencies: aggregated.proficiencies,
    allFeatures: aggregated.features,
    hp: { max: finalMaxHp, current: finalCurrentHp, temporary: character.hp.temporary },
    darkvision: aggregated.darkvision,
    sizeIT,
    spellSlots,
  }
}
