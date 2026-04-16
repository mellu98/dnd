import type { AbilityName, CalculatedStats, Character, CharacterAbilityScores, SkillName } from '../types'
import { abilityModifier } from '../utils/modifiers'
import { proficiencyBonus } from '../utils/proficiency-bonus'
import { skills } from '../data/skills'
import { aggregateBonuses } from './bonus-aggregator'
import { computeMaxHp } from './hp-calculator'
import { getArmorById, getShieldById } from '../data/equipment'
import { getRaceById } from '../data/races'
import { getClassById } from '../data/classes'
import { feats } from '../data/feats'
import { resolveSpecies } from '../utils/species-resolution'

const allAbilities: AbilityName[] = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']
const featById = new Map(feats().map((feat) => [feat.id, feat]))
const featByName = new Map(feats().map((feat) => [feat.name, feat]))

function getEquippedShieldBonus(character: Character): number {
  const shieldId = character.equippedShieldId
  if (!shieldId) return 0

  const dataShieldBonus = getShieldById(shieldId)?.shieldBonus
  if (typeof dataShieldBonus === 'number') return dataShieldBonus

  const equippedShield = character.equipment.find((item) => item.id === shieldId && item.category === 'shield')
  return equippedShield?.shieldBonus ?? 0
}

/**
 * Calculates Armor Class dynamically based on equipped armor, shield, class
 * (Unarmored Defense for Barbarian/Monk/Sorcerer Draconic), and magical bonuses.
 */
function calculateArmorClass(character: Character, modifiers: Record<AbilityName, number>): number {
  const armorId = character.equippedArmorId
  const classId = character.classId
  const subclassId = character.subclassId
  const shieldBonus = getEquippedShieldBonus(character)

  let ac: number

  if (!armorId) {
    if (classId === 'barbarian') {
      ac = 10 + modifiers.DEX + modifiers.CON
    } else if (classId === 'monk') {
      ac = shieldBonus === 0 ? 10 + modifiers.DEX + modifiers.WIS : 10 + modifiers.DEX
    } else if (classId === 'sorcerer' && subclassId === 'draconic') {
      ac = 13 + modifiers.DEX
    } else {
      ac = 10 + modifiers.DEX
    }
  } else {
    const armor = getArmorById(armorId)
    if (!armor) {
      ac = 10 + modifiers.DEX
    } else {
      ac = armor.ac
      const dexCap = armor.dexModifier ?? Infinity
      ac += Math.min(modifiers.DEX, dexCap)
    }
  }

  ac += shieldBonus

  const magicalItem = character.equipment.find((equipmentItem) => equipmentItem.equipped && equipmentItem.magicalBonus != null && equipmentItem.category === 'armor')
  if (magicalItem?.magicalBonus) ac += magicalItem.magicalBonus

  return ac
}

function dedupeByKey<T>(items: T[], getKey: (item: T) => string): T[] {
  const seen = new Set<string>()
  return items.filter((item) => {
    const key = getKey(item)
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

export function calculateAllStats(character: Character): CalculatedStats {
  const race = getRaceById(character.raceId)
  const cls = getClassById(character.classId)
  const resolvedSpecies = resolveSpecies(race, character.raceVariantId)

  const aggregated = aggregateBonuses({
    raceId: character.raceId,
    raceVariantId: character.raceVariantId ?? undefined,
    speciesChoiceSelections: character.speciesChoiceSelections,
    classId: character.classId,
    subclassId: character.subclassId ?? undefined,
    classFeatureChoices: character.classFeatureChoices,
    backgroundId: character.backgroundId,
    level: character.level,
    backgroundAbilityChoices: character.backgroundAbilityChoices,
  })

  const sizeIT = aggregated.sizeIT ?? resolvedSpecies?.sizeIT ?? race?.sizeIT ?? 'Media'

  const finalAbilityScores = { ...character.abilityScores } as CharacterAbilityScores
  for (const bonus of aggregated.backgroundAbilityBonuses) {
    finalAbilityScores[bonus.ability] += bonus.value
  }
  for (const choice of character.asiChoices ?? []) {
    if (choice.type === 'ability' && choice.abilityBonuses) {
      for (const bonus of choice.abilityBonuses) {
        finalAbilityScores[bonus.ability] = Math.min(20, finalAbilityScores[bonus.ability] + bonus.value)
      }
    }
  }

  const abilityModifiers = {} as Record<AbilityName, number>
  for (const ability of allAbilities) {
    abilityModifiers[ability] = abilityModifier(finalAbilityScores[ability])
  }

  const profBonus = proficiencyBonus(character.level)

  const spellcasting = cls?.spellcasting
    ? {
        ability: cls.spellcasting.ability,
        modifier: abilityModifiers[cls.spellcasting.ability],
        attackBonus: abilityModifiers[cls.spellcasting.ability] + profBonus,
        saveDC: 8 + abilityModifiers[cls.spellcasting.ability] + profBonus,
        knownType: cls.spellcasting.knownType,
      }
    : null

  const skillProfSet = new Set<SkillName>(character.skillProficiencies)
  for (const proficiency of aggregated.proficiencies) {
    if (proficiency.type === 'skill') {
      const skillId = proficiency.value.toLowerCase().replace(/\s+/g, '_') as SkillName
      skillProfSet.add(skillId)
    }
  }
  const skillProficiencies = Array.from(skillProfSet)

  const hasJackOfAllTrades = aggregated.classFeatures.some((feature) => feature.name === 'Jack of All Trades')

  const expertiseSet = new Set<SkillName>(character.expertiseSkills)
  const skillModifiers = {} as Record<SkillName, number>
  for (const skill of skills) {
    const mod = abilityModifiers[skill.ability]
    const isProficient = skillProfSet.has(skill.id)
    const hasExpertise = expertiseSet.has(skill.id)

    if (hasExpertise) {
      skillModifiers[skill.id] = mod + profBonus * 2
    } else if (isProficient) {
      skillModifiers[skill.id] = mod + profBonus
    } else if (hasJackOfAllTrades) {
      skillModifiers[skill.id] = mod + Math.floor(profBonus / 2)
    } else {
      skillModifiers[skill.id] = mod
    }
  }

  const savingThrowProficiencies = aggregated.savingThrows
  const savingThrowModifiers = {} as Record<AbilityName, number>
  for (const ability of allAbilities) {
    const mod = abilityModifiers[ability]
    const isProficient = savingThrowProficiencies.includes(ability)
    savingThrowModifiers[ability] = mod + (isProficient ? profBonus : 0)
  }

  let maxHp = character.hp.max
  if (aggregated.hitDie) {
    maxHp = computeMaxHp(aggregated.hitDie, abilityModifiers.CON, character.level)
  }

  const slotArray = cls?.spellSlotTable?.[character.level] ?? []
  const spellSlots = slotArray.map((max, idx) => {
    const spellLevel = idx + 1
    const expended = character.expendedSpellSlots?.[spellLevel] ?? 0
    return { level: spellLevel, max, expended: Math.min(expended, max) }
  })

  let initiativeBonus = abilityModifiers.DEX
  let speed = aggregated.speed
  let toughBonus = 0

  if (character.classId === 'monk' && !character.equippedArmorId) {
    const monkSpeedBonus = character.level >= 18 ? 30
      : character.level >= 14 ? 25
      : character.level >= 10 ? 20
      : character.level >= 6 ? 15
      : character.level >= 2 ? 10
      : 0
    speed += monkSpeedBonus
  }

  const activeFeatIds = new Set<string>()
  for (const choice of character.asiChoices ?? []) {
    if (choice.type === 'feat' && choice.featId) {
      activeFeatIds.add(choice.featId)
    }
  }
  for (const feature of aggregated.featFeatures) {
    const feat = featByName.get(feature.name)
    if (feat) activeFeatIds.add(feat.id)
  }

  for (const featId of activeFeatIds) {
    if (featId === 'alert') initiativeBonus += 5
    if (featId === 'mobile') speed += 10
    if (featId === 'tough') toughBonus += character.level * 2
  }

  const activeFeats = dedupeByKey(
    Array.from(activeFeatIds)
      .map((featId) => featById.get(featId))
      .filter((feat): feat is NonNullable<typeof feat> => feat != null),
    (feat) => feat.id,
  )

  const finalMaxHp = maxHp + toughBonus
  const finalCurrentHp = Math.min(character.hp.current, finalMaxHp)

  const speciesFeatures = [...aggregated.speciesFeatures].sort((a, b) => a.level - b.level)
  const classFeatures = [...aggregated.classFeatures].sort((a, b) => a.level - b.level)
  const subclassFeatures = [...aggregated.subclassFeatures].sort((a, b) => a.level - b.level)
  const allFeatures = [...aggregated.features].sort((a, b) => a.level - b.level)

  // Convert species/class/background languages into proficiency entries so they render
  const languageProficiencies = aggregated.languagesIT.map((lang, i) => ({
    type: 'language' as const,
    value: aggregated.languages[i] ?? lang,
    valueIT: lang,
  }))

  // Merge with existing proficiencies and deduplicate
  const allProficiencies = dedupeByKey(
    [...aggregated.proficiencies, ...languageProficiencies],
    (p) => `${p.type}-${p.value}`,
  )

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
    allProficiencies,
    allFeatures,
    speciesFeatures,
    classFeatures,
    subclassFeatures,
    activeFeats,
    hp: { max: finalMaxHp, current: finalCurrentHp, temporary: character.hp.temporary },
    darkvision: aggregated.darkvision,
    sizeIT,
    spellSlots,
    spellcasting,
  }
}
