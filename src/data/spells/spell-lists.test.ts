import { describe, expect, it } from 'vitest'
import { getSpellsByClass } from './index'

describe('official spell lists', () => {
  it('completes the bard list against SRD 5.2', () => {
    const spells = getSpellsByClass('bard')
    expect(spells).toHaveLength(129)
    expect(spells.some((spell) => spell.name === 'Vicious Mockery' && spell.nameIT === 'Scherno Feroce')).toBe(true)
    expect(spells.some((spell) => spell.name === 'Power Word Heal')).toBe(true)
  })

  it('completes the paladin list against SRD 5.2', () => {
    const spells = getSpellsByClass('paladin')
    expect(spells).toHaveLength(38)
    expect(spells.some((spell) => spell.name === 'Divine Smite')).toBe(true)
    expect(spells.some((spell) => spell.name === 'Greater Restoration')).toBe(true)
  })

  it('completes the ranger list against SRD 5.2', () => {
    const spells = getSpellsByClass('ranger')
    expect(spells).toHaveLength(48)
    expect(spells.some((spell) => spell.name === "Hunter's Mark")).toBe(true)
    expect(spells.some((spell) => spell.name === 'Tree Stride')).toBe(true)
  })

  it('completes the sorcerer list against SRD 5.2', () => {
    const spells = getSpellsByClass('sorcerer')
    expect(spells).toHaveLength(138)
    expect(spells.some((spell) => spell.name === 'Sorcerous Burst')).toBe(true)
    expect(spells.some((spell) => spell.name === 'Gate')).toBe(true)
  })
})
