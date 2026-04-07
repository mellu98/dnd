import { describe, it, expect } from 'vitest'
import { abilityModifier, formatModifier } from './modifiers'

describe('abilityModifier', () => {
  it('returns correct modifier for common scores', () => {
    expect(abilityModifier(10)).toBe(0)
    expect(abilityModifier(11)).toBe(0)
    expect(abilityModifier(12)).toBe(1)
    expect(abilityModifier(13)).toBe(1)
    expect(abilityModifier(14)).toBe(2)
    expect(abilityModifier(15)).toBe(2)
    expect(abilityModifier(18)).toBe(4)
    expect(abilityModifier(20)).toBe(5)
  })

  it('returns negative modifiers for low scores', () => {
    expect(abilityModifier(9)).toBe(-1)
    expect(abilityModifier(8)).toBe(-1)
    expect(abilityModifier(6)).toBe(-2)
    expect(abilityModifier(4)).toBe(-3)
    expect(abilityModifier(3)).toBe(-4)
    expect(abilityModifier(2)).toBe(-4)
    expect(abilityModifier(1)).toBe(-5)
  })

  it('handles extreme scores', () => {
    expect(abilityModifier(30)).toBe(10)
    expect(abilityModifier(100)).toBe(45)
  })
})

describe('formatModifier', () => {
  it('adds + prefix to positive values', () => {
    expect(formatModifier(0)).toBe('+0')
    expect(formatModifier(3)).toBe('+3')
  })

  it('keeps - prefix for negative values', () => {
    expect(formatModifier(-1)).toBe('-1')
    expect(formatModifier(-4)).toBe('-4')
  })
})
