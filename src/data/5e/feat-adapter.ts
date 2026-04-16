/**
 * Feat adapter — maps 5etools feat JSON to the app's Feat type.
 */

import type { Feat } from '../../types/feat'
import { normalizeId } from './id-normalizer'
import { t } from '../../i18n/game-terms'
import { entriesToPlainText } from './entries-parser'

/** Raw 5etools feat record */
export interface FiveeFeat {
  name: string
  source: string
  page?: number
  category?: string
  prerequisite?: unknown[]
  ability?: Array<Record<string, number>>
  additionalSpells?: unknown[]
  resist?: string[]
  senses?: string[]
  entries: unknown[]
  repeatable?: boolean
  reprintedAs?: string[]
  edition?: string
}

/** Map a raw 5etools feat to the app's Feat type */
export function mapFeat(raw: FiveeFeat): Feat {
  const id = normalizeId(raw.name)
  const description = entriesToPlainText(raw.entries)

  // Extract a short mechanic summary from the first entry
  let mechanicIT: string | undefined
  if (raw.entries.length > 0) {
    const first = raw.entries[0]
    if (typeof first === 'string') {
      mechanicIT = first.length > 120 ? first.slice(0, 120) + '...' : first
    }
  }

  return {
    id,
    name: raw.name,
    nameIT: t(raw.name),
    description,
    descriptionIT: description,
    mechanicIT,
    source: raw.source,
    isLegacy: raw.source === 'PHB' || raw.edition === 'classic',
  }
}
