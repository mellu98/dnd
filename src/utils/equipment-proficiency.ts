import type { Proficiency } from '../types'
import type { ArmorData } from '../types/equipment'

function normalizeLabel(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

export function isArmorProficient(armor: ArmorData, proficiencies: Proficiency[]): boolean {
  return proficiencies.some((proficiency) => {
    if (proficiency.type !== 'armor') return false
    const value = normalizeLabel(proficiency.value)

    if (value.includes('light armor') && armor.category === 'light') return true
    if (value.includes('medium armor') && armor.category === 'medium') return true
    if (value.includes('heavy armor') && armor.category === 'heavy') return true

    return value.includes(normalizeLabel(armor.name))
  })
}

export function isShieldProficient(proficiencies: Proficiency[]): boolean {
  return proficiencies.some((proficiency) => {
    if (proficiency.type !== 'armor') return false
    return normalizeLabel(proficiency.value).includes('shield')
  })
}
