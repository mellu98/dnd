import { describe, it, expect } from 'vitest'
import { proficiencyBonus } from './proficiency-bonus'

describe('proficiencyBonus', () => {
  it('returns correct bonus for each level', () => {
    expect(proficiencyBonus(1)).toBe(2)
    expect(proficiencyBonus(4)).toBe(2)
    expect(proficiencyBonus(5)).toBe(3)
    expect(proficiencyBonus(8)).toBe(3)
    expect(proficiencyBonus(9)).toBe(4)
    expect(proficiencyBonus(12)).toBe(4)
    expect(proficiencyBonus(13)).toBe(5)
    expect(proficiencyBonus(16)).toBe(5)
    expect(proficiencyBonus(17)).toBe(6)
    expect(proficiencyBonus(20)).toBe(6)
  })

  it('clamps out-of-range levels', () => {
    expect(proficiencyBonus(0)).toBe(2)
    expect(proficiencyBonus(-1)).toBe(2)
    expect(proficiencyBonus(21)).toBe(6)
    expect(proficiencyBonus(100)).toBe(6)
  })
})
