/**
 * Monster adapter — maps 5etools monster JSON to MonsterStatBlock.
 */

import type { MonsterStatBlock, MonsterAction } from '../../types/monster'
import { normalizeId } from './id-normalizer'
import { parseEntries } from './entries-parser'

/** Raw 5etools monster record */
export interface FiveeMonster {
  name: string
  source: string
  page?: number
  size: string[]
  type: { type: string; tags?: string[]; swarm?: string; custom?: string } | string
  alignment: string[]
  ac: (number | { ac: number; from?: string[]; condition?: string })[]
  hp: { average: number; formula: string }
  speed: Record<string, number>
  str: number
  dex: number
  con: number
  int: number
  wis: number
  cha: number
  save?: Record<string, string>
  skill?: Record<string, string>
  vulnerable?: string[]
  resist?: string[]
  immune?: string[]
  conditionImmune?: string[]
  senses?: string[]
  passive: number
  languages?: string[]
  cr: string | number
  trait?: Array<{ name: string; entries: unknown[]; recharge?: string }>
  action?: Array<{ name: string; entries: unknown[]; recharge?: string }>
  bonus?: Array<{ name: string; entries: unknown[] }>
  reaction?: Array<{ name: string; entries: unknown[] }>
  legendary?: Array<{ name: string; entries: unknown[]; recharge?: string }>
  mythic?: Array<{ name: string; entries: unknown[] }>
  lair?: Array<{ name: string; entries: unknown[] }>
  environment?: string[]
  srd?: boolean
  basicRules?: boolean
  reprintedAs?: string[]
}

/** Parse CR string to number */
function parseCR(cr: string | number): number {
  if (typeof cr === 'number') return cr
  if (cr.includes('/')) {
    const [num, den] = cr.split('/').map(Number)
    return num / den
  }
  return Number(cr) || 0
}

/** Parse AC from 5etools format */
function parseAC(ac: FiveeMonster['ac']): number {
  if (ac.length === 0) return 10
  const first = ac[0]
  if (typeof first === 'number') return first
  return first.ac ?? 10
}

/** Format speed */
function formatSpeed(speed: Record<string, number>): string {
  const parts: string[] = []
  for (const [type, amount] of Object.entries(speed)) {
    if (type === 'walk') {
      parts.push(`${amount} ft.`)
    } else {
      parts.push(`${type} ${amount} ft.`)
    }
  }
  return parts.join(', ') || '30 ft.'
}

/** Format alignment */
function formatAlignment(alignment: string[]): string {
  if (!alignment.length) return 'Unaligned'
  return alignment.join(', ')
}

/** Format size */
function formatSize(size: string[]): string {
  const sizeMap: Record<string, string> = {
    T: 'Tiny', S: 'Small', M: 'Medium', L: 'Large', H: 'Huge', G: 'Gargantuan',
  }
  return size.map((s) => sizeMap[s] ?? s).join(', ') || 'Medium'
}

/** Format type */
function formatType(type: FiveeMonster['type']): string {
  if (typeof type === 'string') return type
  return type.type ?? 'Unknown'
}

/** Parse action/trait entries */
function parseActionEntries(raw: { name: string; entries: unknown[]; recharge?: string }): MonsterAction {
  const description = parseEntries(raw.entries)

  // Try to extract attack bonus and damage from first entry
  let attackBonus: number | undefined
  let damageDice: string | undefined
  let damageType: string | undefined

  if (raw.entries.length > 0 && typeof raw.entries[0] === 'string') {
    const text = raw.entries[0]
    // Match {@hit X} pattern
    const hitMatch = text.match(/\{@hit (\d+)\}/)
    if (hitMatch) attackBonus = Number(hitMatch[1])

    // Match {@damage XdY} pattern
    const dmgMatch = text.match(/\{@damage ([^}]+)\}/)
    if (dmgMatch) damageDice = dmgMatch[1]

    // Match damage type (e.g., "slashing damage", "fire damage")
    const typeMatch = text.match(/(\w+) damage/)
    if (typeMatch) damageType = typeMatch[1]
  }

  return {
    name: raw.name,
    description,
    attackBonus,
    damageDice,
    damageType,
    recharge: raw.recharge,
  }
}

/** Map a raw 5etools monster to MonsterStatBlock */
export function mapMonster(raw: FiveeMonster): MonsterStatBlock {
  return {
    id: normalizeId(raw.name),
    name: raw.name,
    source: raw.source,
    challengeRating: parseCR(raw.cr),
    size: formatSize(raw.size),
    type: formatType(raw.type),
    alignment: formatAlignment(raw.alignment),
    armorClass: parseAC(raw.ac),
    hitPoints: raw.hp?.average ?? 0,
    hitDice: raw.hp?.formula ?? '',
    speed: formatSpeed(raw.speed),
    strength: raw.str,
    dexterity: raw.dex,
    constitution: raw.con,
    intelligence: raw.int,
    wisdom: raw.wis,
    charisma: raw.cha,
    savingThrows: raw.save,
    skills: raw.skill,
    damageVulnerabilities: raw.vulnerable,
    damageResistances: raw.resist,
    damageImmunities: raw.immune,
    conditionImmunities: raw.conditionImmune,
    senses: raw.senses ?? [],
    languages: raw.languages ?? [],
    passivePerception: raw.passive,
    traits: (raw.trait ?? []).map((t) => ({
      name: t.name,
      description: parseEntries(t.entries),
    })),
    actions: (raw.action ?? []).map(parseActionEntries),
    reactions: (raw.reaction ?? []).map(parseActionEntries),
    legendaryActions: (raw.legendary ?? []).map(parseActionEntries),
  }
}
