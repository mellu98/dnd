export type AbilityName = 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA'

export type SkillName =
  | 'acrobatics' | 'animal_handling' | 'arcana' | 'athletics'
  | 'deception' | 'history' | 'insight' | 'intimidation'
  | 'investigation' | 'medicine' | 'nature' | 'perception'
  | 'performance' | 'persuasion' | 'religion' | 'sleight_of_hand'
  | 'stealth' | 'survival'

export type DieType = 'd6' | 'd8' | 'd10' | 'd12'

export interface AbilityScoreBonus {
  ability: AbilityName
  value: number
}

export interface Feature {
  name: string
  nameIT: string
  description: string
  descriptionIT: string
  level: number
  type?: string
}

export interface Proficiency {
  type: 'skill' | 'saving_throw' | 'armor' | 'weapon' | 'tool' | 'language'
  value: string
  valueIT: string
}
