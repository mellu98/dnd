import type { AbilityName, Proficiency } from '../types'
import type { WeaponData } from '../types/equipment'
import { formatModifier } from './modifiers'

function normalizeLabel(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

function singularize(value: string): string {
  if (value.endsWith('ves')) return `${value.slice(0, -3)}f`
  if (value.endsWith('ies')) return `${value.slice(0, -3)}y`
  if (value.endsWith('s')) return value.slice(0, -1)
  return value
}

function hasProperty(weapon: WeaponData, property: string): boolean {
  return weapon.properties.includes(property)
}

function isMonkWeapon(weapon: WeaponData): boolean {
  return weapon.id === 'unarmed-strike' || weapon.id === 'shortsword' || (weapon.category === 'simple' && !hasProperty(weapon, 'two-handed'))
}

export function isWeaponRanged(weapon: WeaponData): boolean {
  return weapon.attackType === 'ranged'
}

export function getWeaponAbility(
  weapon: WeaponData,
  abilityModifiers: Record<AbilityName, number>,
  classId: string,
): AbilityName {
  if (isWeaponRanged(weapon)) return 'DEX'

  if (hasProperty(weapon, 'finesse')) {
    return abilityModifiers.DEX > abilityModifiers.STR ? 'DEX' : 'STR'
  }

  if (classId === 'monk' && isMonkWeapon(weapon)) {
    return abilityModifiers.DEX > abilityModifiers.STR ? 'DEX' : 'STR'
  }

  return 'STR'
}

export function isWeaponProficient(weapon: WeaponData, proficiencies: Proficiency[]): boolean {
  const normalizedName = singularize(normalizeLabel(weapon.name))

  return proficiencies.some((proficiency) => {
    if (proficiency.type !== 'weapon') return false

    const value = normalizeLabel(proficiency.value)
    if (value.includes('simple weapon') && weapon.category === 'simple') return true
    if (value.includes('martial weapon') && weapon.category === 'martial') return true

    return value
      .split(',')
      .map((entry) => singularize(entry.trim()))
      .includes(normalizedName)
  })
}

function getVersatileDamage(weapon: WeaponData): string | null {
  const versatile = weapon.properties.find((property) => property.startsWith('versatile_'))
  if (!versatile) return null
  return versatile.replace('versatile_', '')
}

export interface WeaponCombatSummary {
  attackBonus: number
  attackAbility: AbilityName
  damage: string
  alternateDamage: string | null
  isProficient: boolean
  isRanged: boolean
}

export function getWeaponCombatSummary(params: {
  weapon: WeaponData
  classId: string
  abilityModifiers: Record<AbilityName, number>
  proficiencyBonus: number
  proficiencies: Proficiency[]
}): WeaponCombatSummary {
  const { weapon, classId, abilityModifiers, proficiencyBonus, proficiencies } = params
  const attackAbility = getWeaponAbility(weapon, abilityModifiers, classId)
  const abilityModifier = abilityModifiers[attackAbility]
  const isProficient = isWeaponProficient(weapon, proficiencies)
  const attackBonus = abilityModifier + (isProficient ? proficiencyBonus : 0)
  const damageBonus = weapon.damageDice === '—' ? '' : formatModifier(abilityModifier)
  const damageType = weapon.damageTypeIT ? ` ${weapon.damageTypeIT.toLowerCase()}` : ''
  const damage = weapon.damageDice === '—'
    ? 'Speciale'
    : `${weapon.damageDice}${damageBonus}${damageType}`
  const versatileDamage = getVersatileDamage(weapon)

  return {
    attackBonus,
    attackAbility,
    damage,
    alternateDamage:
      versatileDamage && weapon.damageDice !== '—'
        ? `${versatileDamage}${damageBonus}${damageType}`
        : null,
    isProficient,
    isRanged: isWeaponRanged(weapon),
  }
}
