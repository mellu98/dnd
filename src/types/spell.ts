import type { Sourced } from './common'

export interface CantripScaling {
  /** Damage string per tier: [lvl 1-4, lvl 5-10, lvl 11-16, lvl 17+] */
  damageTiers: [string, string, string, string]
  /** Optional effect description per tier (e.g. for non-damage cantrips) */
  effectIT?: [string, string, string, string]
}

export interface Spell extends Sourced {
  id: string
  name: string
  nameIT: string
  level: number // 0 = cantrip
  school: string
  schoolIT: string
  castingTime: string
  castingTimeIT: string
  range: string
  rangeIT: string
  components: {
    v: boolean
    s: boolean
    m?: string
    mIT?: string
  }
  duration: string
  durationIT: string
  concentration: boolean
  description: string
  descriptionIT: string
  ritual?: boolean
  cantripScaling?: CantripScaling
}
