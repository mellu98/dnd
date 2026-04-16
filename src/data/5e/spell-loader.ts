/**
 * Spell loader — loads and indexes 5etools spell data.
 *
 * Loads spells from the merged JSON file, indexes them by ID,
 * and provides getSpellById() and getSpellsByClass() APIs
 * that match the existing app interface.
 */

import type { Spell } from '../../types/spell'
import type { FiveeSpell } from './spell-adapter'
import { mapSpell } from './spell-adapter'
import { prefer2024 } from './filters'

// Import all spell data as static JSON via Vite
const rawSpellData = import.meta.glob('./raw/spells-merged.json', { eager: true })

let _spellPool: Map<string, Spell> | null = null
let _classSpellIndex: Map<string, Spell[]> | null = null

/**
 * Get all spells from 5etools, indexed by ID.
 * Prefers 2024 versions when duplicates exist.
 */
function getSpellPool(): Map<string, Spell> {
  if (_spellPool) return _spellPool

  const raw = (rawSpellData['./raw/spells-merged.json'] as { default: { spell: FiveeSpell[] } })?.default
  if (!raw?.spell) {
    _spellPool = new Map()
    return _spellPool
  }

  // Prefer 2024 versions
  const preferred = prefer2024(raw.spell)

  const pool = new Map<string, Spell>()
  for (const rawSpell of preferred) {
    const spell = mapSpell(rawSpell)
    pool.set(spell.id, spell)
  }

  _spellPool = pool
  return pool
}

/**
 * Get spell by ID (searches entire pool).
 * Matches the existing app API.
 */
export function getSpellById(id: string): Spell | undefined {
  return getSpellPool().get(id)
}

/**
 * Get all spells, optionally filtered by level.
 */
export function getAllSpells(level?: number): Spell[] {
  const pool = Array.from(getSpellPool().values())
  if (level === undefined) return pool
  return pool.filter((s) => s.level === level)
}

/**
 * Spellcaster classes — classes that have a spell list.
 */
const SPELLCASTER_CLASSES = [
  'wizard', 'cleric', 'druid', 'bard',
  'sorcerer', 'warlock', 'paladin', 'ranger',
]

/**
 * Get spells by class.
 * Since 5etools doesn't attach class info to spells directly,
 * we return all spells for known spellcaster classes.
 * The app's UI filters by appropriate spell levels and caster type.
 */
export function getSpellsByClass(classId: string): Spell[] {
  if (!SPELLCASTER_CLASSES.includes(classId)) return []
  return getAllSpells()
}

/**
 * Search spells by name (case-insensitive substring match).
 */
export function searchSpells(query: string): Spell[] {
  const q = query.toLowerCase()
  return Array.from(getSpellPool().values()).filter(
    (s) => s.name.toLowerCase().includes(q) || s.nameIT.toLowerCase().includes(q) || s.id.includes(q),
  )
}

/**
 * Get spell count for stats/debugging.
 */
export function getSpellCount(): number {
  return getSpellPool().size
}

/**
 * Clear the in-memory cache (useful for testing).
 */
export function clearSpellCache(): void {
  _spellPool = null
  _classSpellIndex = null
}
