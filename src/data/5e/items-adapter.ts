/**
 * Items adapter — maps 5etools items JSON to app types.
 * Handles both base items (weapons, armor, gear) and magic items.
 */

import type { MagicItem } from '../../types/magic-item'
import type { EntryNode } from '../entries-types'
import { normalizeId } from '../id-normalizer'
import { parseEntries } from '../entries-parser'

/** Raw 5etools magic item record */
export interface FiveeItem {
  name: string
  source: string
  page?: number
  type: string | { type: string; typeName?: string }
  rarity: string
  reqAttune?: boolean | string
  reqAttuneTags?: unknown[]
  wondrous?: boolean
  weight?: number
  value?: number
  bonusSpellAttack?: string
  bonusSpellSaveDc?: string
  bonusWeapon?: string
  bonusAc?: string
  focus?: string[]
  chargeType?: string
  charges?: number
  recharge?: string
  entries: unknown[]
  srd?: boolean
  reprintedAs?: string[]
}

/** Parse attunement requirement */
function parseAttunement(req: boolean | string | undefined): { required: boolean; restriction?: string } {
  if (!req) return { required: false }
  if (typeof req === 'boolean') return { required: true }
  return { required: true, restriction: req }
}

/** Parse bonus string like "+1" or "+2" to number */
function parseBonus(value: string | undefined): number | undefined {
  if (!value) return undefined
  const match = value.match(/([+-]?\d+)/)
  return match ? Number(match[1]) : undefined
}

/** Map a raw 5etools item to MagicItem */
export function mapMagicItem(raw: FiveeItem): MagicItem {
  const attunement = parseAttunement(raw.reqAttune)
  const description = parseEntries(raw.entries)

  return {
    id: normalizeId(raw.name),
    name: raw.name,
    type: typeof raw.type === 'string' ? raw.type : raw.type.typeName ?? raw.type.type,
    rarity: (raw.rarity?.toLowerCase() ?? 'unknown') as MagicItem['rarity'],
    requiresAttunement: attunement.required,
    attunementRestriction: attunement.restriction,
    bonusSpellAttack: parseBonus(raw.bonusSpellAttack),
    bonusSpellSaveDc: parseBonus(raw.bonusSpellSaveDc),
    bonusWeapon: parseBonus(raw.bonusWeapon),
    bonusArmor: parseBonus(raw.bonusAc),
    description,
    weight: raw.weight,
    value: raw.value,
    source: raw.source,
  }
}
