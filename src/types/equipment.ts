export type EquipmentCategory = 'armor' | 'shield' | 'weapon' | 'gear' | 'consumable'

export interface EquipmentItem {
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

export interface ArmorData {
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

export interface ShieldData {
  id: string
  name: string
  nameIT: string
  shieldBonus: number
  weight: number
  value: number
}
