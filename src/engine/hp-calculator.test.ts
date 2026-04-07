import { describe, it, expect } from 'vitest'
import { computeMaxHp } from './hp-calculator'

describe('computeMaxHp', () => {
  it('returns max hit die + conMod for level 1', () => {
    expect(computeMaxHp('d10', 3, 1)).toBe(13)
    expect(computeMaxHp('d8', -1, 1)).toBe(7) // min 7 (8 - 1)
  })

  it('adds average HP + conMod for subsequent levels', () => {
    // d10, con=+3, level 2: 10+3 + (6+3) = 22
    expect(computeMaxHp('d10', 3, 2)).toBe(22)
    // d8, con=+0, level 3: 8+0 + (5+0) + (5+0) = 18
    expect(computeMaxHp('d8', 0, 3)).toBe(18)
  })

  it('handles negative con modifier', () => {
    // d8, con=-3, level 3: 8-3=5 + (5-3)=2 + (5-3)=2 = 9
    expect(computeMaxHp('d8', -3, 3)).toBe(9)
  })

  it('enforces minimum 1 hp at level 1', () => {
    expect(computeMaxHp('d6', -10, 1)).toBe(1)
  })

  it('clamps level 2+ hp subtractions — overall minimum is 1', () => {
    // d6, con=-5, level 2: 6-5=1 + max(1, 4-5)=1 → then overall Math.max(1, 1+(-1)) = 1
    // The function applies Math.max to the total, not per sub-level
    expect(computeMaxHp('d6', -5, 2)).toBe(1)
  })
})
