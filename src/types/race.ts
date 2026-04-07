import type { Feature, Proficiency, Sourced } from './common'

export interface Species extends Sourced {
  id: string
  name: string
  nameIT: string
  speed: number
  size: 'Small' | 'Medium'
  sizeIT: string
  features: Feature[]
  /** Species proficiencies (weapons, armor, skills, tools, languages) */
  proficiencies: Proficiency[]
  languages: string[]
  languagesIT: string[]
  darkvision: number
  /** Flavor-only variant names (e.g. ["Alto Elfo", "Elfo dei Boschi", "Drow"]) — no mechanical differences */
  variants?: string[]
}

// Backward compat alias
export type Race = Species
