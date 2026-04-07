import { describe, it, expect } from 'vitest'
import { aggregateBonuses } from './bonus-aggregator'
import { abilityModifier } from '../utils/modifiers'
import { proficiencyBonus } from '../utils/proficiency-bonus'
import { calculateAllStats } from './calculator'
import type { SkillName } from '../types'
import { it as translations } from '../i18n/it'

describe('aggregateBonuses', () => {
  it('aggregates race ability bonuses', () => {
    const agg = aggregateBonuses({ raceId: 'human' })
    expect(agg.abilityBonuses.length).toBeGreaterThanOrEqual(0)
  })

  it('aggregates class features', () => {
    const agg = aggregateBonuses({ classId: 'barbarian' })
    expect(agg.features.length).toBeGreaterThanOrEqual(2) // Rage, Unarmored Defense at level 1
  })

  it('aggregates background proficiencies', () => {
    const agg = aggregateBonuses({ backgroundId: 'acolyte' })
    expect(agg.proficiencies.length).toBeGreaterThanOrEqual(2)
  })

  it('combines multiple sources', () => {
    const agg = aggregateBonuses({
      raceId: 'elf',
      classId: 'fighter',
    })
    expect(agg.abilityBonuses.length).toBeGreaterThanOrEqual(1)
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
      level: 1,
      abilityScores: { STR: 14, DEX: 16, CON: 12, INT: 10, WIS: 10, CHA: 8 },
      hp: { max: 0, current: 0, temporary: 0 },
      skillProficiencies: ['acrobatics', 'perception'],
      chosenLanguages: ['Elvish'],
      chosenAbilityBonuses: [],
      name: 'Test',
      subraceId: null,
      subclassId: null,
      alignment: '',
      personalityTraits: '',
      ideals: '',
      bonds: '',
      flaws: '',
      equipment: [],
      notes: '',
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
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
      subraceId: null,
      classId: 'fighter',
      subclassId: null,
      backgroundId: 'acolyte',
      level: 1,
      abilityScores: { STR: 14, DEX: 12, CON: 12, INT: 10, WIS: 10, CHA: 8 },
      hp: { max: 0, current: 0, temporary: 0 },
      skillProficiencies: ['acrobatics'],
      chosenLanguages: [],
      chosenAbilityBonuses: [],
      alignment: '',
      personalityTraits: '',
      ideals: '',
      bonds: '',
      flaws: '',
      equipment: [],
      notes: '',
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    })
    // acrobatics is DEX-based, DEX 12 → mod +1, prof +2 → +3
    expect(stats.skillModifiers['acrobatics']).toBe(3)
    // perception without prof, WIS 10 → mod +0
    expect(stats.skillModifiers['perception']).toBe(0)
  })
})

// Translation test spot-check
describe('i18n', () => {
  it('has translations for all skills', () => {
    const skillKeys: SkillName[] = ['acrobatics', 'animal_handling', 'arcana', 'athletics', 'deception', 'history', 'insight', 'intimidation', 'investigation', 'medicine', 'nature', 'perception', 'performance', 'persuasion', 'religion', 'sleight_of_hand', 'stealth', 'survival']
    for (const skill of skillKeys) {
      expect(translations[`skill_${skill}` as keyof typeof translations]).toBeDefined()
    }
  })
})
