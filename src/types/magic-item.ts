/**
 * Magic item types.
 */

import type { EntryNode } from '../data/5e/entries-types'

export type MagicItemRarity = 'common' | 'uncommon' | 'rare' | 'very rare' | 'legendary' | 'artifact' | 'unknown'

export interface MagicItem {
  id: string
  name: string
  type: string
  rarity: MagicItemRarity
  requiresAttunement: boolean
  attunementRestriction?: string
  bonusSpellAttack?: number
  bonusSpellSaveDc?: number
  bonusWeapon?: number
  bonusArmor?: number
  description: EntryNode[]
  weight?: number
  value?: number // in copper pieces
  source: string
}
