/**
 * Edition converter — maps 2014 rules to 2024 (and vice versa).
 *
 * Uses the `reprintedAs` field from 5etools data to find the 2024
 * version of a 2014 entity.
 *
 * This is used to:
 * - Show 2024 versions of spells/feats/monsters when viewing 2014 content
 * - Convert existing characters from 2014 to 2024 rules
 * - Allow toggling between editions in the UI
 */

import { resolveReprint, is2024 } from './filters'

export interface EditionPair {
  name2014: string
  name2024: string | null
  source2014: string | null
  source2024: string | null
}

/**
 * Build a mapping of 2014 -> 2024 entity pairs from raw data.
 * Uses the `reprintedAs` field to find 2024 versions.
 */
export function buildEditionMap<T extends { name: string; source: string; reprintedAs?: string[] }>(
  entries: T[],
): Map<string, EditionPair> {
  const byName = new Map<string, T[]>()
  for (const entry of entries) {
    if (!byName.has(entry.name)) byName.set(entry.name, [])
    byName.get(entry.name)!.push(entry)
  }

  const map = new Map<string, EditionPair>()

  for (const [name, variants] of byName) {
    const v2014 = variants.filter((v) => !is2024(v))
    const v2024 = variants.filter(is2024)

    for (const oldEntry of v2014) {
      const reprint = oldEntry.reprintedAs?.[0]
      const newName = reprint?.split('|')[0] ?? null
      const newSource = reprint?.split('|')[1] ?? null

      map.set(`${name}|${oldEntry.source}`, {
        name2014: name,
        name2024: newName,
        source2014: oldEntry.source,
        source2024: newSource,
      })
    }

    for (const newEntry of v2024) {
      map.set(`${name}|${newEntry.source}`, {
        name2014: null as unknown as string,
        name2024: name,
        source2014: null,
        source2024: newEntry.source,
      })
    }
  }

  return map
}

/**
 * Get the 2024 version of a 2014 entity name.
 */
export function get2024Version<T extends { name: string; source: string; reprintedAs?: string[] }>(
  name: string,
  source: string,
  allEntries: T[],
): T | null {
  const entry = allEntries.find((e) => e.name === name && e.source === source)
  if (!entry) return null
  if (is2024(entry)) return entry
  return resolveReprint(entry, allEntries) ?? null
}

/**
 * Get the 2014 version of a 2024 entity.
 * (reverse lookup — harder since 2014 doesn't reference 2024)
 */
export function get2014Version<T extends { name: string; source: string }>(
  name: string,
  _source: string,
  allEntries: T[],
): T | null {
  // Find entries with the same name but 2014 source
  return allEntries.find((e) => e.name === name && !is2024(e as { edition?: string })) ?? null
}
