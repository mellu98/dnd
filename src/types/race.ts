import type { AbilityName, AbilityScoreBonus, Feature, Proficiency } from './common'

export interface Subrace {
  id: string
  name: string
  nameIT: string
  abilityBonuses: AbilityScoreBonus[]
  features: Feature[]
  proficiencies: Proficiency[]
}

export interface Race {
  id: string
  name: string
  nameIT: string
  speed: number
  size: 'Small' | 'Medium'
  sizeIT: string
  abilityBonuses: AbilityScoreBonus[]
  features: Feature[]
  proficiencies: Proficiency[]
  languages: string[]
  languagesIT: string[]
  subraces: Subrace[]
  darkvision: number
  chooseAbilityBonuses?: {
    choose: number
    value: number
    exclude: AbilityName[]
  }
}
