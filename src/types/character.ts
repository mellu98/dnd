import type { AbilityName, ASIChoice, Feature, Proficiency, SkillName } from './common'
import type { EquipmentItem } from './equipment'

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

export interface DeathSaves {
  successes: number
  failures: number
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
  equipment: EquipmentItem[]
  equippedArmorId: string | null
  equippedShieldId: string | null
  knownSpells: string[]
  /** Tracks how many slots have been expended per spell level (key = spell level 1-9) */
  expendedSpellSlots: Record<number, number>
  /** ASI choices made at class feature levels */
  asiChoices: ASIChoice[]
  /** Death saving throws (only relevant when hp.current === 0) */
  deathSaves: DeathSaves
  /** Whether the character is stabilized */
  isStabilized: boolean
  /** Hit dice spent (used for short rest recovery) */
  spentHitDice: number
  /** Skills with Expertise (double proficiency bonus) */
  expertiseSkills: SkillName[]
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
  /** Creature size derived from species (e.g. "Media", "Piccola") */
  sizeIT: string
  /** Spell slot tracker per spell level */
  spellSlots: { level: number; max: number; expended: number }[]
}
