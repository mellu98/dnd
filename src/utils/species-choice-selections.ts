import type {
  Feature,
  Proficiency,
  Species,
  SpeciesChoiceGroup,
  SpeciesChoiceOption,
  SpeciesChoiceSelection,
} from '../types'

function getSelectionMap(selections: SpeciesChoiceSelection[] | null | undefined): Map<string, string> {
  return new Map((selections ?? []).map((selection) => [selection.groupId, selection.optionId]))
}

export function getSpeciesChoiceGroups(species?: Species | null): SpeciesChoiceGroup[] {
  return species?.choiceGroups ?? []
}

export function getSelectedSpeciesChoiceOption(
  species: Species | null | undefined,
  selections: SpeciesChoiceSelection[] | null | undefined,
  groupId: string,
): SpeciesChoiceOption | null {
  if (!species) return null

  const group = species.choiceGroups?.find((candidate) => candidate.id === groupId)
  if (!group) return null

  const optionId = getSelectionMap(selections).get(groupId)
  if (!optionId) return null

  return group.options.find((option) => option.id === optionId) ?? null
}

export function hasRequiredSpeciesChoices(
  species?: Species | null,
  selections?: SpeciesChoiceSelection[] | null,
): boolean {
  const groups = getSpeciesChoiceGroups(species).filter((group) => group.required !== false)
  if (groups.length === 0) return true

  const selectionMap = getSelectionMap(selections)
  return groups.every((group) => group.options.some((option) => option.id === selectionMap.get(group.id)))
}

export function upsertSpeciesChoice(
  selections: SpeciesChoiceSelection[] | null | undefined,
  nextSelection: SpeciesChoiceSelection,
): SpeciesChoiceSelection[] {
  const filtered = (selections ?? []).filter((selection) => selection.groupId !== nextSelection.groupId)
  return [...filtered, nextSelection]
}

export function resolveSpeciesChoiceEffects(params: {
  species?: Species | null
  selections?: SpeciesChoiceSelection[] | null
}): {
  size?: Species['size']
  sizeIT?: string
  features: Feature[]
  proficiencies: Proficiency[]
  languages: string[]
  languagesIT: string[]
  featIds: string[]
} {
  const { species, selections } = params
  if (!species) {
    return {
      features: [],
      proficiencies: [],
      languages: [],
      languagesIT: [],
      featIds: [],
    }
  }

  const selectionMap = getSelectionMap(selections)

  const result: {
    size?: Species['size']
    sizeIT?: string
    features: Feature[]
    proficiencies: Proficiency[]
    languages: string[]
    languagesIT: string[]
    featIds: string[]
  } = {
    features: [],
    proficiencies: [],
    languages: [],
    languagesIT: [],
    featIds: [],
  }

  for (const group of species.choiceGroups ?? []) {
    const optionId = selectionMap.get(group.id)
    const option = group.options.find((candidate) => candidate.id === optionId)
    if (!option) continue

    if (option.size) result.size = option.size
    if (option.sizeIT) result.sizeIT = option.sizeIT
    if (option.features?.length) result.features.push(...option.features)
    if (option.proficiencies?.length) result.proficiencies.push(...option.proficiencies)
    if (option.languages?.length) result.languages.push(...option.languages)
    if (option.languagesIT?.length) result.languagesIT.push(...option.languagesIT)
    if (option.featIds?.length) result.featIds.push(...option.featIds)
  }

  return result
}
