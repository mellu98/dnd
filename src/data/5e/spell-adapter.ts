/**
 * Spell adapter — maps 5etools spell JSON to the app's Spell type.
 */

import type { Spell, CantripScaling } from '../../types/spell'
import type { EntryNode } from './entries-types'
import { normalizeId } from './id-normalizer'
import { t, schoolAbbreviations } from '../../i18n/game-terms'
import { parseEntries, entriesToPlainText } from './entries-parser'
import { translateSpellName } from '../../i18n/spell-names'

/** Raw 5etools spell record */
export interface FiveeSpell {
  name: string
  source: string
  page?: number
  level: number
  school: string
  time: Array<{ number: number; unit: string }>
  range: {
    type: string
    distance?: { type: string; amount: number }
  }
  components: { v?: boolean; s?: boolean; m?: string }
  duration: Array<{
    type: string
    duration?: { type: string; amount: number }
    concentration?: boolean
  }>
  entries: unknown[]
  entriesHigherLevel?: unknown[]
  meta?: { ritual?: boolean; concentration?: boolean }
  scalingLevelDice?: {
    label: string
    scaling: Record<string, string>
  }
  damageInflict?: string[]
  savingThrow?: string[]
  ritual?: boolean
  srd?: boolean
  srd52?: boolean
  basicRules?: boolean
  basicRules2024?: boolean
  reprintedAs?: string[]
  edition?: string
}

/** Format casting time in Italian */
function formatCastingTime(time: FiveeSpell['time']): string {
  if (!time.length) return ''
  const unitMap: Record<string, string> = {
    action: 'azione',
    bonus: 'azione bonus',
    reaction: 'reazione',
    minute: 'minuto',
    hour: 'ora',
    day: 'giorno',
    special: 'speciale',
  }

  const parts: string[] = []
  for (const t of time) {
    const unit = unitMap[t.unit] ?? t.unit
    if (t.number === 1) {
      // "1 azione" -> "1 azione"
      parts.push(`1 ${unit}`)
    } else {
      parts.push(`${t.number} ${unit}s`)
    }
  }
  return parts.join(', ')
}

/** Format range in Italian */
function formatRange(range: FiveeSpell['range']): string {
  if (range.type === 'self') return 'Personale (su di sé)'
  if (range.type === 'touch') return 'Contatto'
  if (range.type === 'special') return 'Speciale'
  if (range.distance) {
    const feet = range.distance.amount
    const meters = Math.round(feet * 0.3048 * 10) / 10
    return `${feet} piedi (${meters} m)`
  }
  return range.type
}

/** Format duration */
function formatDuration(duration: FiveeSpell['duration']): string {
  if (!duration.length) return ''
  const typeMap: Record<string, string> = {
    instantaneous: 'Istantaneo',
    timed: '', // handled below
    special: 'Speciale',
    concentration: 'Concentrazione',
    until: 'Fino a',
  }

  const parts: string[] = []
  for (const d of duration) {
    if (d.type === 'timed' && d.duration) {
      const unitMap: Record<string, string> = {
        round: 'round',
        minute: 'minuto',
        hour: 'ora',
        day: 'giorno',
        week: 'settimana',
        year: 'anno',
        feet: 'piedi',
        special: '',
      }
      const unit = unitMap[d.duration.type] ?? d.duration.type
      const amt = d.duration.amount
      const plural = amt > 1 && unit !== 'round' ? 'i' : ''
      parts.push(`${amt} ${unit}${plural}`)
    } else if (d.type === 'concentration') {
      parts.push('Concentrazione')
    } else if (d.concentration) {
      parts.push('Concentrazione')
    } else {
      const translated = typeMap[d.type] ?? d.type
      if (translated) parts.push(translated)
    }
  }
  return parts.join(', ') || 'Istantaneo'
}

/** Check if spell has concentration */
function hasConcentration(duration: FiveeSpell['duration'], meta?: FiveeSpell['meta']): boolean {
  if (meta?.concentration) return true
  return duration.some((d) => d.type === 'concentration' || d.concentration)
}

/** Check if spell is a ritual */
function isRitual(meta?: FiveeSpell['meta'], ritual?: boolean): boolean {
  return meta?.ritual === true || ritual === true
}

/** Build cantrip scaling from 5etools data */
function buildCantripScaling(spell: FiveeSpell): CantripScaling | undefined {
  if (spell.level !== 0) return undefined
  if (!spell.scalingLevelDice?.scaling) return undefined

  // Extract damage values for tiers
  const scaling = spell.scalingLevelDice.scaling
  const tiers: [string, string, string, string] = [
    scaling['1'] ?? '0',
    scaling['5'] ?? scaling['1'] ?? '0',
    scaling['11'] ?? scaling['5'] ?? scaling['1'] ?? '0',
    scaling['17'] ?? scaling['11'] ?? scaling['5'] ?? scaling['1'] ?? '0',
  ]

  return { damageTiers: tiers }
}

/** Map a raw 5etools spell to the app's Spell type */
export function mapSpell(raw: FiveeSpell): Spell {
  const id = normalizeId(raw.name)
  const schoolFull = schoolAbbreviations[raw.school] ?? raw.school
  const schoolIT = t(schoolFull)

  // Parse description entries to plain text for now
  // (EntriesRenderer handles the rich rendering)
  const descriptionRaw = [...(raw.entries ?? [])]
  if (raw.entriesHigherLevel) {
    descriptionRaw.push(...raw.entriesHigherLevel)
  }

  return {
    id,
    name: raw.name,
    nameIT: translateSpellName(raw.name),
    level: raw.level,
    school: schoolFull,
    schoolIT,
    castingTime: formatCastingTime(raw.time),
    castingTimeIT: formatCastingTime(raw.time),
    range: formatRange(raw.range),
    rangeIT: formatRange(raw.range),
    components: {
      v: raw.components.v ?? false,
      s: raw.components.s ?? false,
      m: raw.components.m,
    },
    duration: formatDuration(raw.duration),
    durationIT: formatDuration(raw.duration),
    concentration: hasConcentration(raw.duration, raw.meta),
    ritual: isRitual(raw.meta, raw.ritual),
    description: entriesToPlainText(descriptionRaw),
    descriptionIT: entriesToPlainText(descriptionRaw),
    source: raw.source,
    isLegacy: raw.source === 'PHB' || raw.edition === 'classic',
    cantripScaling: buildCantripScaling(raw),
  }
}

/** Parse a spell's entries into EntryNode[] for rich rendering */
export function parseSpellEntries(raw: FiveeSpell): EntryNode[] {
  const allEntries = [...(raw.entries ?? [])]
  if (raw.entriesHigherLevel) {
    allEntries.push(...raw.entriesHigherLevel)
  }
  return parseEntries(allEntries)
}
