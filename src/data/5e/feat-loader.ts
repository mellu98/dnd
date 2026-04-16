/**
 * Feat loader — loads and indexes 5etools feat data.
 *
 * Provides getFeatById() and getAllFeats() APIs that match
 * the existing app interface.
 */

import type { Feat } from '../../types/feat'
import type { FiveeFeat } from './feat-adapter'
import { mapFeat } from './feat-adapter'
import { prefer2024 } from './filters'

// Import feat data as static JSON via Vite
const rawFeatData = import.meta.glob('./raw/feats.json', { eager: true })

let _featPool: Map<string, Feat> | null = null
let _featList: Feat[] | null = null

/**
 * Get all feats, preferring 2024 versions.
 */
function getFeatPool(): Map<string, Feat> {
  if (_featPool) return _featPool

  const raw = (rawFeatData['./raw/feats.json'] as { default: { feat: FiveeFeat[] } })?.default
  if (!raw?.feat) {
    _featPool = new Map()
    return _featPool
  }

  // Prefer 2024 versions
  const preferred = prefer2024(raw.feat)

  const pool = new Map<string, Feat>()
  const list: Feat[] = []

  for (const rawFeat of preferred) {
    const feat = mapFeat(rawFeat)
    pool.set(feat.id, feat)
    list.push(feat)
  }

  _featPool = pool
  _featList = list
  return pool
}

/**
 * Get feat by ID.
 * Matches the existing app API.
 */
export function getFeatById(id: string): Feat | undefined {
  return getFeatPool().get(id)
}

/**
 * Get all feats.
 */
export function getAllFeats(): Feat[] {
  getFeatPool() // ensure loaded
  return _featList ?? []
}

/**
 * Search feats by name.
 */
export function searchFeats(query: string): Feat[] {
  const q = query.toLowerCase()
  return Array.from(getFeatPool().values()).filter(
    (f) => f.name.toLowerCase().includes(q) || f.nameIT.toLowerCase().includes(q) || f.id.includes(q),
  )
}

/**
 * Get feat count.
 */
export function getFeatCount(): number {
  return getFeatPool().size
}
