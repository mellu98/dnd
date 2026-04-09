import { describe, expect, it } from 'vitest'
import { getBackgroundById } from '.'

describe('background data', () => {
  it('aligns Wayfarer to the 2024 ruleset', () => {
    const wayfarer = getBackgroundById('wayfarer')

    expect(wayfarer).toBeDefined()
    expect(wayfarer?.originFeat.name).toBe('Lucky')
    expect(wayfarer?.abilityScoreOptions.primary).toEqual(['DEX', 'WIS', 'CHA'])
    expect(wayfarer?.abilityScoreOptions.secondary).toEqual(['DEX', 'WIS', 'CHA'])
    expect(wayfarer?.skillProficiencies.map((proficiency) => proficiency.value)).toEqual(['insight', 'stealth'])
    expect(wayfarer?.toolProficiency.value).toBe("Thieves' Tools")
  })
})
