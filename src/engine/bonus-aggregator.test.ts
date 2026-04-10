import { describe, it, expect } from 'vitest'
import { aggregateBonuses } from './bonus-aggregator'
import { abilityModifier } from '../utils/modifiers'
import { proficiencyBonus } from '../utils/proficiency-bonus'
import { calculateAllStats } from './calculator'
import type { Character, SkillName } from '../types'
import { it as translations } from '../i18n/it'

function makeCharacter(overrides: Partial<Character>): Character {
  return {
    id: 'test',
    name: 'Test',
    raceId: 'human',
    raceVariantId: null,
    speciesChoiceSelections: [
      { groupId: 'human-size', optionId: 'medium' },
      { groupId: 'human-skillful', optionId: 'stealth' },
      { groupId: 'human-versatile', optionId: 'skilled' },
    ],
    classId: 'fighter',
    subclassId: null,
    classFeatureChoices: [],
    backgroundId: 'guard',
    backgroundAbilityChoices: null,
    level: 1,
    abilityScores: { STR: 10, DEX: 10, CON: 10, INT: 10, WIS: 10, CHA: 10 },
    hp: { max: 0, current: 0, temporary: 0 },
    skillProficiencies: [],
    chosenLanguages: [],
    alignment: '',
    personalityTraits: '',
    ideals: '',
    bonds: '',
    flaws: '',
    equipment: [],
    equippedArmorId: null,
    equippedShieldId: null,
    knownSpells: [],
    preparedSpells: [],
    expendedSpellSlots: {},
    asiChoices: [],
    deathSaves: { successes: 0, failures: 0 },
    activeConditions: [],
    exhaustionLevel: 0,
    inspiration: false,
    isStabilized: false,
    spentHitDice: 0,
    expertiseSkills: [],
    currency: { cp: 0, sp: 0, ep: 0, gp: 0, pp: 0 },
    initiativeTracker: [],
    activeInitiativeId: null,
    notes: '',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    imageUrl: null,
    ...overrides,
  }
}

describe('aggregateBonuses', () => {
  it('aggregates species features (no ability bonuses)', () => {
    const agg = aggregateBonuses({
      raceId: 'human',
      speciesChoiceSelections: [
        { groupId: 'human-size', optionId: 'medium' },
        { groupId: 'human-skillful', optionId: 'acrobatics' },
        { groupId: 'human-versatile', optionId: 'alert' },
      ],
    })
    expect(agg.backgroundAbilityBonuses.length).toBe(0)
    expect(agg.speed).toBe(30)
    expect(agg.speciesFeatures.length).toBeGreaterThan(0)
  })

  it('aggregates class features separately from subclass features', () => {
    const agg = aggregateBonuses({ classId: 'cleric', subclassId: 'life', level: 1 })
    expect(agg.classFeatures.some((feature) => feature.name === 'Spellcasting')).toBe(true)
    expect(agg.subclassFeatures.some((feature) => feature.name === 'Disciple of Life')).toBe(true)
    expect(agg.featFeatures).toEqual([])
  })

  it('aggregates background proficiencies and ASI', () => {
    const agg = aggregateBonuses({
      backgroundId: 'acolyte',
      backgroundAbilityChoices: { mode: 'plus2_plus1', primary: 'WIS', secondary: 'INT' },
    })
    expect(agg.proficiencies.length).toBeGreaterThanOrEqual(2)
    expect(agg.backgroundAbilityBonuses.length).toBe(2)
    expect(agg.backgroundAbilityBonuses[0].value).toBe(2)
    expect(agg.backgroundAbilityBonuses[1].value).toBe(1)
  })

  it('includes origin feat from background in the feat bucket', () => {
    const agg = aggregateBonuses({ backgroundId: 'acolyte' })
    expect(agg.featFeatures.some((feature) => feature.name === 'Magic Initiate (Cleric)')).toBe(true)
    expect(agg.classFeatures.some((feature) => feature.name === 'Magic Initiate (Cleric)')).toBe(false)
  })

  it('combines multiple sources including species variants', () => {
    const agg = aggregateBonuses({
      raceId: 'dragonborn',
      raceVariantId: 'topaz',
      speciesChoiceSelections: [],
      classId: 'fighter',
      backgroundId: 'guard',
      backgroundAbilityChoices: { mode: 'plus2_plus1', primary: 'STR', secondary: 'WIS' },
    })
    expect(agg.backgroundAbilityBonuses.length).toBe(2)
    expect(agg.features.length).toBeGreaterThan(0)
    expect(agg.speciesFeatures.some((feature) => feature.name === 'Topaz Resistance')).toBe(true)
  })

  it('supports the 2024 +1/+1/+1 background distribution', () => {
    const agg = aggregateBonuses({
      backgroundId: 'acolyte',
      backgroundAbilityChoices: { mode: 'plus1_plus1_plus1', abilities: ['WIS', 'INT', 'CHA'] },
    })

    expect(agg.backgroundAbilityBonuses).toEqual([
      { ability: 'WIS', value: 1 },
      { ability: 'INT', value: 1 },
      { ability: 'CHA', value: 1 },
    ])
  })

  it('uses Lucky as the Wayfarer origin feat', () => {
    const agg = aggregateBonuses({ backgroundId: 'wayfarer' })
    expect(agg.featFeatures.some((feature) => feature.name === 'Lucky')).toBe(true)
  })

  it('applies Divine Order Protector proficiencies for clerics', () => {
    const agg = aggregateBonuses({
      classId: 'cleric',
      classFeatureChoices: [{ groupId: 'divine-order', optionId: 'protector' }],
      level: 1,
    })

    expect(agg.proficiencies.some((proficiency) => proficiency.type === 'armor' && proficiency.value === 'Heavy Armor')).toBe(true)
    expect(agg.proficiencies.some((proficiency) => proficiency.type === 'weapon' && proficiency.value === 'Martial Weapons')).toBe(true)
  })

  it('applies Human 2024 species choices for size, skill, and feat', () => {
    const agg = aggregateBonuses({
      raceId: 'human',
      speciesChoiceSelections: [
        { groupId: 'human-size', optionId: 'small' },
        { groupId: 'human-skillful', optionId: 'stealth' },
        { groupId: 'human-versatile', optionId: 'alert' },
      ],
    })

    expect(agg.size).toBe('Small')
    expect(agg.sizeIT).toBe('Piccola')
    expect(agg.proficiencies.some((proficiency) => proficiency.type === 'skill' && proficiency.value === 'stealth')).toBe(true)
    expect(agg.featFeatures.some((feature) => feature.name === 'Alert')).toBe(true)
  })
})

describe('utility functions', () => {
  it('computes correct ability modifiers', () => {
    expect(abilityModifier(10)).toBe(0)
    expect(abilityModifier(12)).toBe(1)
    expect(abilityModifier(15)).toBe(2)
    expect(abilityModifier(8)).toBe(-1)
  })

  it('returns correct proficiency values', () => {
    expect(proficiencyBonus(1)).toBe(2)
    expect(proficiencyBonus(5)).toBe(3)
    expect(proficiencyBonus(9)).toBe(4)
    expect(proficiencyBonus(13)).toBe(5)
    expect(proficiencyBonus(17)).toBe(6)
  })
})

describe('calculateAllStats', () => {
  it('returns a complete stats object', () => {
    const stats = calculateAllStats(makeCharacter({
      raceId: 'elf',
      raceVariantId: 'wood-elf',
      classId: 'barbarian',
      backgroundId: 'acolyte',
      backgroundAbilityChoices: { mode: 'plus2_plus1', primary: 'WIS', secondary: 'INT' },
      abilityScores: { STR: 14, DEX: 16, CON: 12, INT: 10, WIS: 10, CHA: 8 },
      skillProficiencies: ['acrobatics', 'perception'],
      chosenLanguages: ['Elvish'],
    }))
    expect(stats.speed).toBeGreaterThanOrEqual(35)
    expect(stats.passivePerception).toBeGreaterThanOrEqual(10)
    expect(stats.armorClass).toBeGreaterThanOrEqual(10)
    expect(stats.proficiencyBonus).toBe(2)
    expect(stats.speciesFeatures.some((feature) => feature.name === 'Fleet of Foot')).toBe(true)
  })

  it('adds proficiency bonus to proficient skills', () => {
    const stats = calculateAllStats(makeCharacter({
      raceId: 'human',
      classId: 'fighter',
      backgroundId: 'criminal',
      backgroundAbilityChoices: { mode: 'plus2_plus1', primary: 'DEX', secondary: 'INT' },
      abilityScores: { STR: 14, DEX: 12, CON: 12, INT: 10, WIS: 10, CHA: 8 },
      skillProficiencies: ['acrobatics'],
    }))
    expect(stats.skillModifiers.acrobatics).toBe(4)
    expect(stats.skillModifiers.perception).toBe(0)
  })

  it('adds shield bonus from inventory data even when no armor is equipped', () => {
    const stats = calculateAllStats(makeCharacter({
      classId: 'fighter',
      abilityScores: { STR: 14, DEX: 12, CON: 12, INT: 10, WIS: 10, CHA: 8 },
      equipment: [
        {
          id: 'shield',
          name: 'Shield',
          nameIT: 'Scudo',
          category: 'shield',
          quantity: 1,
          equipped: false,
          shieldBonus: 2,
        },
      ],
      equippedShieldId: 'shield',
    }))

    expect(stats.armorClass).toBe(13)
  })

  it('does not apply monk unarmored defense when the shield bonus comes from inventory data', () => {
    const stats = calculateAllStats(makeCharacter({
      classId: 'monk',
      abilityScores: { STR: 10, DEX: 16, CON: 12, INT: 10, WIS: 18, CHA: 8 },
      equipment: [
        {
          id: 'shield',
          name: 'Shield',
          nameIT: 'Scudo',
          category: 'shield',
          quantity: 1,
          equipped: false,
          shieldBonus: 2,
        },
      ],
      equippedShieldId: 'shield',
    }))

    expect(stats.armorClass).toBe(15)
  })

  it('applies background ASI to final ability scores', () => {
    const stats = calculateAllStats(makeCharacter({
      raceId: 'human',
      classId: 'fighter',
      backgroundId: 'guard',
      backgroundAbilityChoices: { mode: 'plus2_plus1', primary: 'STR', secondary: 'WIS' },
      abilityScores: { STR: 14, DEX: 12, CON: 12, INT: 10, WIS: 10, CHA: 8 },
    }))
    expect(stats.finalAbilityScores.STR).toBe(16)
    expect(stats.abilityModifiers.STR).toBe(3)
    expect(stats.finalAbilityScores.WIS).toBe(11)
  })

  it('adds shield bonus even when no armor is equipped', () => {
    const stats = calculateAllStats(makeCharacter({
      raceId: 'human',
      classId: 'fighter',
      backgroundId: 'guard',
      backgroundAbilityChoices: { mode: 'plus2_plus1', primary: 'DEX', secondary: 'WIS' },
      abilityScores: { STR: 10, DEX: 14, CON: 12, INT: 10, WIS: 10, CHA: 8 },
      equippedArmorId: null,
      equippedShieldId: 'shield',
    }))

    expect(stats.armorClass).toBe(15)
  })

  it('does not keep monk unarmored defense when a shield is equipped', () => {
    const stats = calculateAllStats(makeCharacter({
      raceId: 'human',
      classId: 'monk',
      backgroundId: 'guard',
      backgroundAbilityChoices: { mode: 'plus2_plus1', primary: 'DEX', secondary: 'WIS' },
      abilityScores: { STR: 10, DEX: 14, CON: 12, INT: 10, WIS: 14, CHA: 8 },
      equippedArmorId: null,
      equippedShieldId: 'shield',
    }))

    expect(stats.armorClass).toBe(15)
  })

  it('surfaces species, class, subclass, and feat sections distinctly', () => {
    const stats = calculateAllStats(makeCharacter({
      raceId: 'dragonborn',
      raceVariantId: 'topaz',
      classId: 'cleric',
      classFeatureChoices: [{ groupId: 'divine-order', optionId: 'protector' }],
      subclassId: 'life',
      backgroundId: 'wayfarer',
      backgroundAbilityChoices: { mode: 'plus1_plus1_plus1', abilities: ['WIS', 'CON', 'CHA'] },
      abilityScores: { STR: 13, DEX: 10, CON: 14, INT: 8, WIS: 15, CHA: 12 },
    }))

    expect(stats.speciesFeatures.some((feature) => feature.name === 'Topaz Resistance')).toBe(true)
    expect(stats.classFeatures.some((feature) => feature.name === 'Spellcasting')).toBe(true)
    expect(stats.subclassFeatures.some((feature) => feature.name === 'Disciple of Life')).toBe(true)
    expect(stats.activeFeats.some((feat) => feat.id === 'lucky')).toBe(true)
  })
})

describe('i18n', () => {
  it('has translations for all skills', () => {
    const skillKeys: SkillName[] = [
      'acrobatics',
      'animal_handling',
      'arcana',
      'athletics',
      'deception',
      'history',
      'insight',
      'intimidation',
      'investigation',
      'medicine',
      'nature',
      'perception',
      'performance',
      'persuasion',
      'religion',
      'sleight_of_hand',
      'stealth',
      'survival',
    ]
    for (const skill of skillKeys) {
      expect(translations[`skill_${skill}` as keyof typeof translations]).toBeDefined()
    }
  })
})
