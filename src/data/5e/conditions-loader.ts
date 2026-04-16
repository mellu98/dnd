/**
 * Conditions loader — loads condition/disease data from 5etools.
 * Provides condition descriptions for tooltips and reference.
 */

import type { EntryNode } from './entries-types'
import { parseEntries } from './entries-parser'
import { normalizeId } from './id-normalizer'

interface ConditionData {
  name: string
  source: string
  entries: EntryNode[]
}

let _conditions: Map<string, ConditionData> | null = null

async function loadConditions(): Promise<void> {
  if (_conditions) return

  const raw = await import('./raw/conditionsdiseases.json')
  const data = (raw as { default: Record<string, unknown[]> }).default

  const map = new Map<string, ConditionData>()

  // Parse conditions
  if (data.condition) {
    for (const c of data.condition as Array<{ name: string; source?: string; entries: unknown[] }>) {
      map.set(normalizeId(c.name), {
        name: c.name,
        source: c.source ?? 'PHB',
        entries: parseEntries(c.entries),
      })
    }
  }

  // Parse diseases
  if (data.disease) {
    for (const d of data.disease as Array<{ name: string; source?: string; entries: unknown[] }>) {
      map.set(normalizeId(d.name), {
        name: d.name,
        source: d.source ?? 'DMG',
        entries: parseEntries(d.entries),
      })
    }
  }

  _conditions = map
}

export async function getCondition(name: string): Promise<ConditionData | undefined> {
  await loadConditions()
  return _conditions?.get(normalizeId(name))
}

export async function getAllConditions(): Promise<ConditionData[]> {
  await loadConditions()
  return Array.from(_conditions?.values() ?? [])
}
