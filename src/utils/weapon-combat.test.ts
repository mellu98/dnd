import { describe, expect, it } from 'vitest'
import { getWeaponCombatSummary, isWeaponProficient } from './weapon-combat'
import { getWeaponById } from '../data/equipment'
import type { Proficiency } from '../types'

describe('weapon combat helpers', () => {
  it('uses finesse weapons with the best melee ability modifier', () => {
    const rapier = getWeaponById('rapier')
    expect(rapier).toBeDefined()

    const summary = getWeaponCombatSummary({
      weapon: rapier!,
      classId: 'rogue',
      abilityModifiers: { STR: 1, DEX: 4, CON: 2, INT: 0, WIS: 0, CHA: 1 },
      proficiencyBonus: 2,
      proficiencies: [{ type: 'weapon', value: 'Martial Weapons', valueIT: 'Armi da Guerra' }],
    })

    expect(summary.attackAbility).toBe('DEX')
    expect(summary.attackBonus).toBe(6)
    expect(summary.damage).toBe('1d8+4 perforante')
  })

  it('recognizes category and specific-name weapon proficiencies', () => {
    const longbow = getWeaponById('longbow')
    const handCrossbow = getWeaponById('hand-crossbow')
    expect(longbow).toBeDefined()
    expect(handCrossbow).toBeDefined()

    const martial: Proficiency[] = [{ type: 'weapon', value: 'Martial Weapons', valueIT: 'Armi da Guerra' }]
    const specific: Proficiency[] = [{ type: 'weapon', value: 'Hand Crossbows', valueIT: 'Balestre a Mano' }]

    expect(isWeaponProficient(longbow!, martial)).toBe(true)
    expect(isWeaponProficient(handCrossbow!, specific)).toBe(true)
  })

  it('shows alternate versatile damage when available', () => {
    const longsword = getWeaponById('longsword')
    expect(longsword).toBeDefined()

    const summary = getWeaponCombatSummary({
      weapon: longsword!,
      classId: 'fighter',
      abilityModifiers: { STR: 3, DEX: 1, CON: 2, INT: 0, WIS: 0, CHA: 0 },
      proficiencyBonus: 3,
      proficiencies: [{ type: 'weapon', value: 'Martial Weapons', valueIT: 'Armi da Guerra' }],
    })

    expect(summary.damage).toBe('1d8+3 tagliente')
    expect(summary.alternateDamage).toBe('1d10+3 tagliente')
  })
})
