import type { Spell } from '../../types'
import { generatedSrdSpellCatalog } from './srd-generated-catalog'

function normalizeSpellName(value: string): string {
  return value
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

export function buildClassSpellList(classId: string, overrides: Spell[]): Spell[] {
  const overrideByName = new Map(
    overrides.map((spell) => [normalizeSpellName(spell.name), spell] as const),
  )

  return generatedSrdSpellCatalog
    .filter((spell) => spell.classIds.includes(classId))
    .map((spell) => overrideByName.get(normalizeSpellName(spell.name)) ?? spell)
}
