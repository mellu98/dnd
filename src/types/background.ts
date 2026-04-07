import type { Feature, Proficiency } from './common'

export interface Background {
  id: string
  name: string
  nameIT: string
  skillProficiencies: Proficiency[]
  toolProficiencies: Proficiency[]
  languages: number
  feature: Feature
  equipment: string[]
  equipmentIT: string[]
}
