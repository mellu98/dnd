import { describe, expect, it } from 'vitest'
import { getWeaponById, weapons } from './weapons'

const OFFICIAL_2024_WEAPON_IDS = [
  'club',
  'dagger',
  'greatclub',
  'handaxe',
  'javelin',
  'light-hammer',
  'mace',
  'quarterstaff',
  'sickle',
  'spear',
  'dart',
  'light-crossbow',
  'shortbow',
  'sling',
  'battleaxe',
  'flail',
  'glaive',
  'greataxe',
  'greatsword',
  'halberd',
  'lance',
  'longsword',
  'maul',
  'morningstar',
  'pike',
  'rapier',
  'scimitar',
  'shortsword',
  'trident',
  'war-pick',
  'warhammer',
  'whip',
  'blowgun',
  'hand-crossbow',
  'heavy-crossbow',
  'longbow',
  'musket',
  'pistol',
] as const

describe('2024 weapon table', () => {
  it('contains the full PHB 2024 weapon roster with coherent metadata', () => {
    const officialWeapons = weapons.filter((weapon) => weapon.source === 'PHB 2024')

    expect(officialWeapons).toHaveLength(OFFICIAL_2024_WEAPON_IDS.length)
    expect(new Set(officialWeapons.map((weapon) => weapon.id))).toEqual(new Set(OFFICIAL_2024_WEAPON_IDS))

    for (const weapon of officialWeapons) {
      expect(weapon.damageDice.length).toBeGreaterThan(0)
      expect(weapon.damageTypeIT.length).toBeGreaterThan(0)
      expect(weapon.attackType === 'melee' || weapon.attackType === 'ranged').toBe(true)
      expect(weapon.category === 'simple' || weapon.category === 'martial').toBe(true)
      expect(weapon.mastery).not.toBe('')
      expect(weapon.masteryIT).not.toBe('')
    }
  })

  it('keeps firearm data aligned with the 2024 table', () => {
    expect(getWeaponById('musket')).toMatchObject({
      attackType: 'ranged',
      category: 'martial',
      damageDice: '1d12',
      mastery: 'slow',
      source: 'PHB 2024',
    })

    expect(getWeaponById('pistol')).toMatchObject({
      attackType: 'ranged',
      category: 'martial',
      damageDice: '1d10',
      mastery: 'vex',
      source: 'PHB 2024',
    })
  })

  it('keeps the net as legacy content instead of mixing it into the 2024 core table', () => {
    expect(getWeaponById('net')).toMatchObject({
      isLegacy: true,
      source: 'PHB 2014',
      attackType: 'ranged',
    })
  })
})
