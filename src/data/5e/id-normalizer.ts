/**
 * ID normalizer — converts 5etools names to stable snake_case IDs.
 *
 * "Fireball" -> "fireball"
 * "Misty Step" -> "misty_step"
 * "Tough" -> "tough"
 * "Great Weapon Master" -> "great_weapon_master"
 */

export function normalizeId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '')
}

export function normalizeIdWithPrefix(name: string, prefix: string): string {
  return `${prefix}_${normalizeId(name)}`
}
