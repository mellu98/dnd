import type {
  AbilityScoreBonus,
  BackgroundAbilityChoices,
  DieType,
  Feature,
  Proficiency,
  SkillName,
} from '../types'
import { getRaceById } from '../data/races'
import { getClassById } from '../data/classes'
import { getBackgroundById } from '../data/backgrounds'
import { getBackgroundAbilityBonuses } from '../utils/background-ability-choices'

export interface AggregateParams {
  raceId?: string
  classId?: string
  subclassId?: string
  backgroundId?: string
  backgroundAbilityChoices?: BackgroundAbilityChoices | null
  level?: number
}

export interface AggregatedBonuses {
  proficiencies: Proficiency[]
  features: Feature[]
  languages: string[]
  languagesIT: string[]
  speed: number
  darkvision: number
  hitDie: DieType | null
  savingThrows: AbilityName[]
  skillChoices: { choose: number; from: SkillName[] } | null
  backgroundAbilityBonuses: AbilityScoreBonus[]
}

export function aggregateBonuses(params: AggregateParams): AggregatedBonuses {
  const result: AggregatedBonuses = {
    proficiencies: [],
    features: [],
    languages: [],
    languagesIT: [],
    speed: 30,
    darkvision: 0,
    hitDie: null,
    savingThrows: [],
    skillChoices: null,
    backgroundAbilityBonuses: [],
  }

  const level = params.level ?? 1

  // Species (race) traits — no ability bonuses in 2024
  if (params.raceId) {
    const race = getRaceById(params.raceId)
    if (race) {
      result.features.push(...race.features)
      result.proficiencies.push(...(race as any).proficiencies || [])
      result.speed = race.speed
      result.darkvision = race.darkvision
      result.languages = [...race.languages]
      result.languagesIT = [...race.languagesIT]
    }
  }

  // Class bonuses
  if (params.classId) {
    const cls = getClassById(params.classId)
    if (cls) {
      result.hitDie = cls.hitDie
      result.savingThrows = [...cls.savingThrows]
      result.skillChoices = cls.skillChoices
      result.proficiencies.push(
        ...(cls as any).armorProficiencies || [],
        ...(cls as any).weaponProficiencies || [],
        ...(cls as any).toolProficiencies || [],
      )
      result.features.push(...cls.features.filter(f => f.level <= level))

      // Subclass bonuses
      if (params.subclassId) {
        const subclass = cls.subclasses.find(s => s.id === params.subclassId)
        if (subclass) {
          result.features.push(...subclass.features.filter(f => f.level <= level))
          result.proficiencies.push(...(subclass as any).proficiencies || [])
        }
      }
    }
  }

  // Background bonuses — includes ASI, skills, tool, origin feat
  if (params.backgroundId) {
    const bg = getBackgroundById(params.backgroundId)
    if (bg) {
      result.proficiencies.push(...bg.skillProficiencies)
      if (bg.toolProficiency && bg.toolProficiency.value !== 'None') {
        result.proficiencies.push(bg.toolProficiency)
      }
      result.features.push(bg.originFeat)

      result.backgroundAbilityBonuses.push(
        ...getBackgroundAbilityBonuses(bg, params.backgroundAbilityChoices),
      )
    }
  }

  return result
}
