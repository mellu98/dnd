import type { AbilityName, Feature, Proficiency } from './common'

export interface Background {
  id: string
  name: string
  nameIT: string
  description: string
  descriptionIT: string
  /** ASI: choose 1 from primary for +2, choose 1 from secondary for +1 */
  abilityScoreOptions: {
    primary: AbilityName[]
    secondary: AbilityName[]
  }
  skillProficiencies: Proficiency[]
  toolProficiency: Proficiency
  originFeat: Feature
  equipment: string[]
  equipmentIT: string[]
}
