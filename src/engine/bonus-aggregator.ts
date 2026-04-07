import type { AbilityName, AbilityScoreBonus, DieType, Feature, Proficiency, SkillName } from '../types'
import { getRaceById, getSubraceById } from '../data/races'
import { getClassById } from '../data/classes'
import { getBackgroundById } from '../data/backgrounds'

export interface AggregateParams {
  raceId?: string
  subraceId?: string
  classId?: string
  subclassId?: string
  backgroundId?: string
  level?: number
  chosenAbilityBonuses?: AbilityScoreBonus[]
}

export interface AggregatedBonuses {
  abilityBonuses: AbilityScoreBonus[]
  proficiencies: Proficiency[]
  features: Feature[]
  languages: string[]
  languagesIT: string[]
  speed: number
  darkvision: number
  hitDie: DieType | null
  savingThrows: AbilityName[]
  skillChoices: { choose: number; from: SkillName[] } | null
}

export function aggregateBonuses(params: AggregateParams): AggregatedBonuses {
  const result: AggregatedBonuses = {
    abilityBonuses: [],
    proficiencies: [],
    features: [],
    languages: [],
    languagesIT: [],
    speed: 30,
    darkvision: 0,
    hitDie: null,
    savingThrows: [],
    skillChoices: null,
  }

  const level = params.level ?? 1

  // Race bonuses
  if (params.raceId) {
    const race = getRaceById(params.raceId)
    if (race) {
      result.abilityBonuses.push(...race.abilityBonuses)
      result.features.push(...race.features)
      result.proficiencies.push(...race.proficiencies)
      result.speed = race.speed
      result.darkvision = race.darkvision
      result.languages = [...race.languages]
      result.languagesIT = [...race.languagesIT]

      // Subrace bonuses
      if (params.subraceId) {
        const subrace = getSubraceById(params.raceId, params.subraceId)
        if (subrace) {
          result.abilityBonuses.push(...subrace.abilityBonuses)
          result.features.push(...subrace.features)
          result.proficiencies.push(...subrace.proficiencies)
        }
      }
    }
  }

  // Chosen ability bonuses (Half-Elf etc.)
  if (params.chosenAbilityBonuses) {
    result.abilityBonuses.push(...params.chosenAbilityBonuses)
  }

  // Class bonuses
  if (params.classId) {
    const cls = getClassById(params.classId)
    if (cls) {
      result.hitDie = cls.hitDie
      result.savingThrows = [...cls.savingThrows]
      result.skillChoices = cls.skillChoices
      result.proficiencies.push(
        ...cls.armorProficiencies,
        ...cls.weaponProficiencies,
        ...cls.toolProficiencies,
      )
      result.features.push(...cls.features.filter(f => f.level <= level))

      // Subclass bonuses
      if (params.subclassId) {
        const subclass = cls.subclasses.find(s => s.id === params.subclassId)
        if (subclass) {
          result.features.push(...subclass.features.filter(f => f.level <= level))
          result.proficiencies.push(...subclass.proficiencies)
        }
      }
    }
  }

  // Background bonuses
  if (params.backgroundId) {
    const bg = getBackgroundById(params.backgroundId)
    if (bg) {
      result.proficiencies.push(...bg.skillProficiencies, ...bg.toolProficiencies)
      result.features.push({
        ...bg.feature,
        level: 1,
      })
    }
  }

  return result
}
