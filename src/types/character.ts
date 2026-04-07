import type { AbilityName, Feature, Proficiency, SkillName } from './common'

export interface CharacterAbilityScores {
  STR: number
  DEX: number
  CON: number
  INT: number
  WIS: number
  CHA: number
}

export interface HpState {
  max: number
  current: number
  temporary: number
}

export interface BackgroundAbilityChoices {
  primary: AbilityName
  secondary: AbilityName
}

export interface Character {
  id: string
  name: string
  raceId: string
  classId: string
  subclassId: string | null
  backgroundId: string
  backgroundAbilityChoices: BackgroundAbilityChoices | null
  level: number
  abilityScores: CharacterAbilityScores
  hp: HpState
  skillProficiencies: SkillName[]
  chosenLanguages: string[]
  alignment: string
  personalityTraits: string
  ideals: string
  bonds: string
  flaws: string
  equipment: string[]
  notes: string
  createdAt: string
  updatedAt: string
  imageUrl: string | null
}

export interface CalculatedStats {
  finalAbilityScores: CharacterAbilityScores
  abilityModifiers: Record<AbilityName, number>
  proficiencyBonus: number
  skillModifiers: Record<SkillName, number>
  skillProficiencies: SkillName[]
  savingThrowModifiers: Record<AbilityName, number>
  savingThrowProficiencies: AbilityName[]
  armorClass: number
  initiative: number
  speed: number
  passivePerception: number
  allProficiencies: Proficiency[]
  allFeatures: Feature[]
  hp: HpState
  darkvision: number
}
