export type AbilityName = 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA'
export type BackgroundAbilityChoiceMode = 'plus2_plus1' | 'plus1_plus1_plus1'

export type SourceBook = 'PHB 2024' | 'XGE' | 'TCE' | 'MPMM' | 'PHB 2014' | 'DMG' | string

export interface Sourced {
  source?: SourceBook
  isLegacy?: boolean
}

export type SkillName =
  | 'acrobatics'
  | 'animal_handling'
  | 'arcana'
  | 'athletics'
  | 'deception'
  | 'history'
  | 'insight'
  | 'intimidation'
  | 'investigation'
  | 'medicine'
  | 'nature'
  | 'perception'
  | 'performance'
  | 'persuasion'
  | 'religion'
  | 'sleight_of_hand'
  | 'stealth'
  | 'survival'

export type DieType = 'd6' | 'd8' | 'd10' | 'd12'

export interface AbilityScoreBonus {
  ability: AbilityName
  value: number
}

export interface Feature extends Sourced {
  name: string
  nameIT: string
  description?: string
  descriptionIT?: string
  level: number
  type?: 'ASI' | string
}

export interface ASIChoice {
  /** The class feature level this choice resolves */
  level: number
  type: 'ability' | 'feat'
  /** Populated when type === 'ability' */
  abilityBonuses?: { ability: AbilityName; value: number }[]
  /** Populated when type === 'feat' */
  featId?: string
}

export interface Proficiency {
  type: 'skill' | 'saving_throw' | 'armor' | 'weapon' | 'tool' | 'language'
  value: string
  valueIT: string
}
