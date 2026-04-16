/**
 * Edition filtering utilities.
 *
 * 5etools uses a mix of signals to distinguish 2024 (One D&D) from 2014 (Classic):
 * - edition: "one" = 2024
 * - edition: "classic" = 2014
 * - source codes: XPHB/XDMG = 2024, PHB/DMG = 2014
 * - reprintedAs field on 2014 entries points to their 2024 version
 */

import { is2024Source } from './sources'

export interface ReprintChain {
  name: string
  source: string
  reprintedAs?: string[]
}

/**
 * Check if an entry is 2024 edition based on its fields.
 */
export function is2024(entry: { source?: string; edition?: string }): boolean {
  if (entry.edition === 'one') return true
  if (entry.edition === 'classic') return false
  if (entry.source && is2024Source(entry.source)) return true
  return false
}

/**
 * Check if an entry is 2014 edition.
 */
export function is2014(entry: { source?: string; edition?: string }): boolean {
  if (entry.edition === 'classic') return true
  if (entry.edition === 'one') return false
  if (entry.source) return !is2024Source(entry.source)
  return false
}

/**
 * Filter an array to only 2024 entries, with fallback to 2014
 * when no 2024 version exists.
 *
 * Uses reprintedAs to detect which 2014 entries have 2024 replacements.
 */
export function prefer2024<T extends { name: string; source?: string; edition?: string; reprintedAs?: string[] }>(
  entries: T[],
): T[] {
  const byName = new Map<string, T[]>()

  for (const entry of entries) {
    const key = entry.name.toLowerCase()
    if (!byName.has(key)) byName.set(key, [])
    byName.get(key)!.push(entry)
  }

  const result: T[] = []

  for (const [, variants] of byName) {
    const has2024 = variants.some(is2024)
    if (has2024) {
      result.push(...variants.filter(is2024))
    } else {
      result.push(...variants)
    }
  }

  return result
}

/**
 * Resolve a reprint chain: given a 2014 entry, find its 2024 version.
 * Returns the 2024 version if found, otherwise returns the original.
 */
export function resolveReprint<T extends { name: string; source?: string; reprintedAs?: string[] }>(
  entry: T,
  allEntries: T[],
): T {
  if (!entry.reprintedAs || entry.reprintedAs.length === 0) return entry

  const target = entry.reprintedAs[0] // first reprint is usually the latest
  const found = allEntries.find((e) => e.name === target || `${e.name}|${e.source}` === target)
  return found ?? entry
}
