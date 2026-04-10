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

export interface SpeciesChoiceOption extends Sourced {
  id: string
  name: string
  nameIT: string
  description?: string
  descriptionIT?: string
  size?: 'Small' | 'Medium'
  sizeIT?: string
  features?: Feature[]
  /** Choice-specific proficiencies (skills, tools, armor, weapons, languages) */
  proficiencies?: Proficiency[]
  languages?: string[]
  languagesIT?: string[]
  featIds?: string[]
}

export interface SpeciesChoiceGroup extends Sourced {
  id: string
  name: string
  nameIT: string
  /** Single choice required to complete character creation for this species */
  required?: boolean
  options: SpeciesChoiceOption[]
}

export interface SpeciesChoiceSelection {
  groupId: string
  optionId: string
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
  /** Structured species-specific choices such as Human skill/feat selection */
  choiceGroups?: SpeciesChoiceGroup[]
}

// Backward compat alias
export type Race = Species
