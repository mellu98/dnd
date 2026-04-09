import { describe, expect, it } from 'vitest'
import { getSpellsByClass } from './index'

describe('cleric spell list', () => {
  it('includes core cleric staples across early spell levels', () => {
    const clericSpells = getSpellsByClass('cleric')
    const spellIds = new Set(clericSpells.map((spell) => spell.id))

    expect(clericSpells.length).toBeGreaterThan(35)
    expect(spellIds.has('guidance')).toBe(true)
    expect(spellIds.has('spare-the-dying')).toBe(true)
    expect(spellIds.has('guiding-bolt')).toBe(true)
    expect(spellIds.has('aid')).toBe(true)
    expect(spellIds.has('spirit-guardians')).toBe(true)
    expect(spellIds.has('greater-restoration')).toBe(true)
  })
})
