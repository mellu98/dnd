/**
 * Monster types for the bestiary and combat hub.
 */

import type { EntryNode } from '../data/5e/entries-types'

export interface MonsterAction {
  name: string
  description: EntryNode[]
  attackBonus?: number
  damageDice?: string
  damageType?: string
  recharge?: string
}

export interface MonsterTrait {
  name: string
  description: EntryNode[]
}

export interface MonsterStatBlock {
  id: string
  name: string
  source: string
  challengeRating: number
  size: string
  type: string
  alignment: string
  armorClass: number
  hitPoints: number
  hitDice: string
  speed: string
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
  savingThrows?: Record<string, string>
  skills?: Record<string, string>
  damageVulnerabilities?: string[]
  damageResistances?: string[]
  damageImmunities?: string[]
  conditionImmunities?: string[]
  senses: string[]
  languages: string[]
  passivePerception: number
  traits: MonsterTrait[]
  actions: MonsterAction[]
  reactions?: MonsterAction[]
  legendaryActions?: MonsterAction[]
}
