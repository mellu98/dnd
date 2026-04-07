import type { Sourced } from './common'

export type EquipmentCategory = 'armor' | 'shield' | 'weapon' | 'gear' | 'consumable'

export interface EquipmentItem extends Sourced {
  id: string
  name: string
  nameIT: string
  category: EquipmentCategory
  quantity: number
  weight?: number
  value?: number
  // Armor specific
  ac?: number
  dexModifier?: number
  strength?: number
  stealthDisadvantage?: boolean
  // Shield specific
  shieldBonus?: number
  // General
  equipped: boolean
  magicalBonus?: number
}

export interface ArmorData extends Sourced {
  id: string
  name: string
  nameIT: string
  ac: number
  dexModifier?: number
  strength?: number
  stealthDisadvantage?: boolean
  weight: number
  value: number
  category: 'light' | 'medium' | 'heavy'
}

export interface WeaponData extends Sourced {
  id: string
  name: string
  nameIT: string
  damageDice: string
  damageType: string
  damageTypeIT: string
  properties: string[]
  propertiesIT: string[]
  weight: number
  value: number
  category: 'simple' | 'martial'
}

export interface ShieldData extends Sourced {
  id: string
  name: string
  nameIT: string
  shieldBonus: number
  weight: number
  value: number
}
