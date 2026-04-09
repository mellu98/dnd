import type { AbilityName, BackgroundAbilityChoiceMode, Feature, Proficiency, Sourced } from './common'

export interface Background extends Sourced {
  id: string
  name: string
  nameIT: string
  description: string
  descriptionIT: string
  /** ASI: choose +2/+1 or +1/+1/+1 from the allowed pools */
  abilityScoreOptions: {
    primary: AbilityName[]
    secondary: AbilityName[]
    triple?: AbilityName[]
  }
  abilityScoreModes?: BackgroundAbilityChoiceMode[]
  skillProficiencies: Proficiency[]
  toolProficiency: Proficiency
  originFeat: Feature
  equipment: string[]
  equipmentIT: string[]
}
