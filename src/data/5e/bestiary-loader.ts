/**
 * Bestiary loader — loads and indexes 5etools monster data.
 *
 * Lazy-loads the bestiary JSON to avoid bloating the initial bundle.
 * Provides getMonsterById(), searchMonsters(), and getMonstersByCR().
 */

import type { MonsterStatBlock } from '../../types/monster'
import type { FiveeMonster } from './monster-adapter'
import { mapMonster } from './monster-adapter'

let _monsterPool: Map<string, MonsterStatBlock> | null = null
let _monsterList: MonsterStatBlock[] | null = null
let _loading: Promise<void> | null = null

/**
 * Load the bestiary JSON lazily.
 */
async function loadBestiary(): Promise<void> {
  if (_monsterPool || _loading) return _loading ?? Promise.resolve()

  _loading = (async () => {
    try {
      const raw = await import('./raw/bestiary-mm.json')
      const monsters = (raw as unknown as { default: { monster: FiveeMonster[] } }).default?.monster ?? []

      const pool = new Map<string, MonsterStatBlock>()
      const list: MonsterStatBlock[] = []

      for (const rawMonster of monsters) {
        const monster = mapMonster(rawMonster)
        pool.set(monster.id, monster)
        list.push(monster)
      }

      _monsterPool = pool
      _monsterList = list
    } catch (err) {
      console.error('Failed to load bestiary:', err)
      throw err
    } finally {
      _loading = null
    }
  })()

  return _loading
}

/**
 * Get monster by ID.
 */
export async function getMonsterById(id: string): Promise<MonsterStatBlock | undefined> {
  await loadBestiary()
  return _monsterPool?.get(id)
}

/**
 * Get all loaded monsters (lazy).
 */
export async function getAllMonsters(): Promise<MonsterStatBlock[]> {
  await loadBestiary()
  return _monsterList ?? []
}

/**
 * Search monsters by name.
 */
export async function searchMonsters(query: string): Promise<MonsterStatBlock[]> {
  await loadBestiary()
  const q = query.toLowerCase()
  return (_monsterList ?? []).filter(
    (m) => m.name.toLowerCase().includes(q) || m.id.includes(q),
  )
}

/**
 * Get monsters filtered by CR range.
 */
export async function getMonstersByCR(minCR: number, maxCR: number): Promise<MonsterStatBlock[]> {
  await loadBestiary()
  return (_monsterList ?? []).filter(
    (m) => m.challengeRating >= minCR && m.challengeRating <= maxCR,
  )
}

/**
 * Get monsters filtered by type.
 */
export async function getMonstersByType(type: string): Promise<MonsterStatBlock[]> {
  await loadBestiary()
  const t = type.toLowerCase()
  return (_monsterList ?? []).filter((m) => m.type.toLowerCase().includes(t))
}

/**
 * Get monster count.
 */
export async function getMonsterCount(): Promise<number> {
  await loadBestiary()
  return _monsterList?.length ?? 0
}

/**
 * Clear the cache (for testing).
 */
export function clearBestiaryCache(): void {
  _monsterPool = null
  _monsterList = null
  _loading = null
}
