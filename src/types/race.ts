import type { Feature, Proficiency, Sourced } from './common'

export interface SpeciesVariantMechanics {
  family?: string
  familyIT?: string
  damageType?: string
  damageTypeIT?: string
  resistanceType?: string
  resistanceTypeIT?: string
  breathShape?: 'cone' | 'line'
  breathAreaFeet?: number
  breathAreaIT?: string
}

export interface SpeciesVariant extends Sourced {
  id: string
  name: string
  nameIT: string
  description?: string
  descriptionIT?: string
  speed?: number
  size?: 'Small' | 'Medium'
  sizeIT?: string
  darkvision?: number
  features?: Feature[]
  /** Variant-specific proficiencies (weapons, armor, skills, tools, languages) */
  proficiencies?: Proficiency[]
  languages?: string[]
  languagesIT?: string[]
  mechanics?: SpeciesVariantMechanics
}

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
  /** Structured variants/lineages/subraces with optional mechanical differences */
  variants?: SpeciesVariant[]
}

// Backward compat alias
export type Race = Species
