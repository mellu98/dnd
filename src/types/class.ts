import type { AbilityName, DieType, Feature, Proficiency, SkillName, Sourced } from './common'

export interface Subclass {
  id: string
  name: string
  nameIT: string
  features: Feature[]
  proficiencies: Proficiency[]
}

export interface ClassFeatureChoiceOption {
  id: string
  name: string
  nameIT: string
  description?: string
  descriptionIT?: string
  features?: Feature[]
  proficiencies?: Proficiency[]
}

export interface ClassFeatureChoiceGroup {
  id: string
  name: string
  nameIT: string
  level: number
  options: ClassFeatureChoiceOption[]
}

export interface ClassFeatureChoiceSelection {
  groupId: string
  optionId: string
}

export interface ClassDefinition extends Sourced {
  id: string
  name: string
  nameIT: string
  hitDie: DieType
  primaryAbility: AbilityName[]
  savingThrows: AbilityName[]
  skillChoices: {
    choose: number
    from: SkillName[]
  }
  armorProficiencies: Proficiency[]
  weaponProficiencies: Proficiency[]
  toolProficiencies: Proficiency[]
  features: Feature[]
  subclasses: Subclass[]
  subclassLevel: number
  featureChoices?: ClassFeatureChoiceGroup[]
  spellcasting?: {
    ability: AbilityName
    knownType: 'prepared' | 'known' | 'all'
  }
  /** Maps character level → array of available slots per spell level (index 0 = 1st-level slots, etc.) */
  spellSlotTable?: Record<number, number[]>
  startingEquipment: string[][]
}
