import type { AbilityName, DieType, Feature, Proficiency, SkillName } from './common'

export interface Subclass {
  id: string
  name: string
  nameIT: string
  features: Feature[]
  proficiencies: Proficiency[]
}

export interface ClassDefinition {
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
  spellcasting?: {
    ability: AbilityName
    knownType: 'prepared' | 'known' | 'all'
  }
  startingEquipment: string[][]
}
