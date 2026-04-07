import { describe, it, expect } from 'vitest'
import { aggregateBonuses } from './bonus-aggregator'
import { abilityModifier } from '../utils/modifiers'
import { proficiencyBonus } from '../utils/proficiency-bonus'
import { calculateAllStats } from './calculator'
import type { SkillName } from '../types'
import { it as translations } from '../i18n/it'

describe('aggregateBonuses', () => {
  it('aggregates species features (no ability bonuses)', () => {
    const agg = aggregateBonuses({ raceId: 'human' })
    // Species in 2024 have no ability bonuses, just features
    expect(agg.backgroundAbilityBonuses.length).toBe(0)
    expect(agg.speed).toBe(30)
  })

  it('aggregates class features', () => {
    const agg = aggregateBonuses({ classId: 'barbarian' })
    expect(agg.features.length).toBeGreaterThanOrEqual(2) // Rage, Unarmored Defense at level 1
  })

  it('aggregates background proficiencies and ASI', () => {
    const agg = aggregateBonuses({
      backgroundId: 'acolyte',
      backgroundAbilityChoices: { primary: 'WIS', secondary: 'INT' },
    })
    expect(agg.proficiencies.length).toBeGreaterThanOrEqual(2)
    expect(agg.backgroundAbilityBonuses.length).toBe(2)
    expect(agg.backgroundAbilityBonuses[0].value).toBe(2)
    expect(agg.backgroundAbilityBonuses[1].value).toBe(1)
  })

  it('includes origin feat from background', () => {
    const agg = aggregateBonuses({ backgroundId: 'acolyte' })
    expect(agg.features.some((f) => f.name === 'Magic Initiate (Cleric)')).toBe(true)
  })

  it('combines multiple sources', () => {
    const agg = aggregateBonuses({
      raceId: 'elf',
      classId: 'fighter',
      backgroundId: 'guard',
      backgroundAbilityChoices: { primary: 'STR', secondary: 'WIS' },
    })
    expect(agg.backgroundAbilityBonuses.length).toBe(2)
    expect(agg.features.length).toBeGreaterThan(0)
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
    const stats = calculateAllStats({
      id: 'test',
      raceId: 'elf',
      classId: 'barbarian',
      backgroundId: 'acolyte',
      backgroundAbilityChoices: { primary: 'WIS', secondary: 'INT' },
      level: 1,
      abilityScores: { STR: 14, DEX: 16, CON: 12, INT: 10, WIS: 10, CHA: 8 },
      hp: { max: 0, current: 0, temporary: 0 },
      skillProficiencies: ['acrobatics', 'perception'],
      chosenLanguages: ['Elvish'],
      name: 'Test',
      subclassId: null,
      alignment: '',
      personalityTraits: '',
      ideals: '',
      bonds: '',
      flaws: '',
      equipment: [],
      equippedArmorId: null,
      equippedShieldId: null,
      knownSpells: [],
      expendedSpellSlots: {},
      notes: '',
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
      imageUrl: null,
    })
    expect(stats.speed).toBeGreaterThanOrEqual(25)
    expect(stats.passivePerception).toBeGreaterThanOrEqual(10)
    expect(stats.armorClass).toBeGreaterThanOrEqual(10)
    expect(stats.proficiencyBonus).toBe(2)
  })

  it('adds proficiency bonus to proficient skills', () => {
    const stats = calculateAllStats({
      id: 'test',
      name: 'Test',
      raceId: 'human',
      classId: 'fighter',
      subclassId: null,
      backgroundId: 'criminal', // criminal gives stealth + deception, no perception
      backgroundAbilityChoices: { primary: 'DEX', secondary: 'INT' },
      level: 1,
      abilityScores: { STR: 14, DEX: 12, CON: 12, INT: 10, WIS: 10, CHA: 8 },
      hp: { max: 0, current: 0, temporary: 0 },
      skillProficiencies: ['acrobatics'],
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
      expendedSpellSlots: {},
      notes: '',
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
      imageUrl: null,
    })
    // acrobatics is DEX-based, DEX 12 + 2 (background primary DEX) = 14 → mod +2, prof +2 → +4
    expect(stats.skillModifiers['acrobatics']).toBe(4)
    // perception without prof, WIS 10 → mod +0 (no ASI to WIS in this build)
    expect(stats.skillModifiers['perception']).toBe(0)
  })

  it('applies background ASI to final ability scores', () => {
    const stats = calculateAllStats({
      id: 'test',
      name: 'Test',
      raceId: 'human',
      classId: 'fighter',
      subclassId: null,
      backgroundId: 'guard',
      backgroundAbilityChoices: { primary: 'STR', secondary: 'WIS' },
      level: 1,
      abilityScores: { STR: 14, DEX: 12, CON: 12, INT: 10, WIS: 10, CHA: 8 },
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
      expendedSpellSlots: {},
      notes: '',
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
      imageUrl: null,
    })
    // STR 14 + 2 (background primary) = 16 → mod +3
    expect(stats.finalAbilityScores.STR).toBe(16)
    expect(stats.abilityModifiers.STR).toBe(3)
    // WIS 10 + 1 (background secondary) = 11 → mod +0
    expect(stats.finalAbilityScores.WIS).toBe(11)
  })
})

// Translation test spot-check
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
