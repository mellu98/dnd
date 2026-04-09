import type {
  AbilityName,
  AbilityScoreBonus,
  BackgroundAbilityChoices,
  ClassFeatureChoiceSelection,
  DieType,
  Feature,
  Proficiency,
  SkillName,
} from '../types'
import { getRaceById } from '../data/races'
import { getClassById } from '../data/classes'
import { getBackgroundById } from '../data/backgrounds'
import { getBackgroundAbilityBonuses } from '../utils/background-ability-choices'
import { resolveSpecies } from '../utils/species-resolution'
import { resolveClassFeatureChoiceEffects } from '../utils/class-feature-choices'

export interface AggregateParams {
  raceId?: string
  raceVariantId?: string
  classId?: string
  subclassId?: string
  classFeatureChoices?: ClassFeatureChoiceSelection[] | null
  backgroundId?: string
  backgroundAbilityChoices?: BackgroundAbilityChoices | null
  level?: number
}

export interface AggregatedBonuses {
  proficiencies: Proficiency[]
  features: Feature[]
  speciesFeatures: Feature[]
  classFeatures: Feature[]
  subclassFeatures: Feature[]
  featFeatures: Feature[]
  languages: string[]
  languagesIT: string[]
  speed: number
  darkvision: number
  hitDie: DieType | null
  savingThrows: AbilityName[]
  skillChoices: { choose: number; from: SkillName[] } | null
  backgroundAbilityBonuses: AbilityScoreBonus[]
}

function dedupeByKey<T>(items: T[], getKey: (item: T) => string): T[] {
  const seen = new Set<string>()
  return items.filter((item) => {
    const key = getKey(item)
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

export function aggregateBonuses(params: AggregateParams): AggregatedBonuses {
  const result: AggregatedBonuses = {
    proficiencies: [],
    features: [],
    speciesFeatures: [],
    classFeatures: [],
    subclassFeatures: [],
    featFeatures: [],
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

  if (params.raceId) {
    const race = getRaceById(params.raceId)
    const resolvedSpecies = resolveSpecies(race, params.raceVariantId)

    if (resolvedSpecies) {
      result.speciesFeatures.push(...resolvedSpecies.features)
      result.proficiencies.push(...resolvedSpecies.proficiencies)
      result.speed = resolvedSpecies.speed
      result.darkvision = resolvedSpecies.darkvision
      result.languages = [...resolvedSpecies.languages]
      result.languagesIT = [...resolvedSpecies.languagesIT]
    }
  }

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
      result.classFeatures.push(...cls.features.filter((feature) => feature.level <= level))

      const classFeatureChoiceEffects = resolveClassFeatureChoiceEffects({
        classDefinition: cls,
        selections: params.classFeatureChoices,
        level,
      })
      result.classFeatures.push(...classFeatureChoiceEffects.features)
      result.proficiencies.push(...classFeatureChoiceEffects.proficiencies)

      if (params.subclassId) {
        const subclass = cls.subclasses.find((candidate) => candidate.id === params.subclassId)
        if (subclass) {
          result.subclassFeatures.push(...subclass.features.filter((feature) => feature.level <= level))
          result.proficiencies.push(...subclass.proficiencies)
        }
      }
    }
  }

  if (params.backgroundId) {
    const background = getBackgroundById(params.backgroundId)
    if (background) {
      result.proficiencies.push(...background.skillProficiencies)
      if (background.toolProficiency && background.toolProficiency.value !== 'None') {
        result.proficiencies.push(background.toolProficiency)
      }
      result.featFeatures.push(background.originFeat)
      result.backgroundAbilityBonuses.push(
        ...getBackgroundAbilityBonuses(background, params.backgroundAbilityChoices),
      )
    }
  }

  result.speciesFeatures = dedupeByKey(result.speciesFeatures, (feature) => `${feature.name}-${feature.level}`)
  result.classFeatures = dedupeByKey(result.classFeatures, (feature) => `${feature.name}-${feature.level}`)
  result.subclassFeatures = dedupeByKey(result.subclassFeatures, (feature) => `${feature.name}-${feature.level}`)
  result.featFeatures = dedupeByKey(result.featFeatures, (feature) => `${feature.name}-${feature.level}`)
  result.features = [
    ...result.speciesFeatures,
    ...result.classFeatures,
    ...result.subclassFeatures,
    ...result.featFeatures,
  ]
  result.proficiencies = dedupeByKey(result.proficiencies, (proficiency) => `${proficiency.type}-${proficiency.value}`)
  result.languages = dedupeByKey(result.languages, (language) => language)
  result.languagesIT = dedupeByKey(result.languagesIT, (language) => language)
  result.backgroundAbilityBonuses = dedupeByKey(
    result.backgroundAbilityBonuses,
    (bonus) => `${bonus.ability}-${bonus.value}`,
  )

  return result
}
