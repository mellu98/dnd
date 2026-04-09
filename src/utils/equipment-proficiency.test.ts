import { describe, expect, it } from 'vitest'
import { getArmorById } from '../data/equipment'
import { isArmorProficient, isShieldProficient } from './equipment-proficiency'

describe('equipment-proficiency', () => {
  it('recognizes heavy armor proficiency by category', () => {
    const chainMail = getArmorById('chain-mail')
    expect(chainMail).toBeDefined()

    expect(isArmorProficient(chainMail!, [{ type: 'armor', value: 'Heavy Armor', valueIT: 'Armature Pesanti' }])).toBe(true)
  })

  it('recognizes shield proficiency', () => {
    expect(isShieldProficient([{ type: 'armor', value: 'Shields', valueIT: 'Scudi' }])).toBe(true)
    expect(isShieldProficient([{ type: 'armor', value: 'Light Armor', valueIT: 'Armature Leggere' }])).toBe(false)
  })
})
