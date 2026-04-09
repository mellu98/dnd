import type {
  ClassDefinition,
  ClassFeatureChoiceGroup,
  ClassFeatureChoiceOption,
  ClassFeatureChoiceSelection,
  Feature,
  Proficiency,
} from '../types'

function getSelectionMap(selections: ClassFeatureChoiceSelection[] | null | undefined): Map<string, string> {
  return new Map((selections ?? []).map((selection) => [selection.groupId, selection.optionId]))
}

export function getClassFeatureChoiceGroups(
  classDefinition?: ClassDefinition | null,
  maxLevel = Number.POSITIVE_INFINITY,
): ClassFeatureChoiceGroup[] {
  if (!classDefinition?.featureChoices?.length) return []
  return classDefinition.featureChoices.filter((group) => group.level <= maxLevel)
}

export function getSelectedClassFeatureChoiceOption(
  classDefinition: ClassDefinition | null | undefined,
  selections: ClassFeatureChoiceSelection[] | null | undefined,
  groupId: string,
): ClassFeatureChoiceOption | null {
  if (!classDefinition) return null

  const group = classDefinition.featureChoices?.find((candidate) => candidate.id === groupId)
  if (!group) return null

  const optionId = getSelectionMap(selections).get(groupId)
  if (!optionId) return null

  return group.options.find((option) => option.id === optionId) ?? null
}

export function hasRequiredClassFeatureChoices(
  classDefinition?: ClassDefinition | null,
  selections?: ClassFeatureChoiceSelection[] | null,
  maxLevel = 1,
): boolean {
  const groups = getClassFeatureChoiceGroups(classDefinition, maxLevel)
  if (groups.length === 0) return true

  const selectionMap = getSelectionMap(selections)
  return groups.every((group) => group.options.some((option) => option.id === selectionMap.get(group.id)))
}

export function upsertClassFeatureChoice(
  selections: ClassFeatureChoiceSelection[] | null | undefined,
  nextSelection: ClassFeatureChoiceSelection,
): ClassFeatureChoiceSelection[] {
  const filtered = (selections ?? []).filter((selection) => selection.groupId !== nextSelection.groupId)
  return [...filtered, nextSelection]
}

export function resolveClassFeatureChoiceEffects(params: {
  classDefinition?: ClassDefinition | null
  selections?: ClassFeatureChoiceSelection[] | null
  level?: number
}): {
  features: Feature[]
  proficiencies: Proficiency[]
} {
  const { classDefinition, selections, level = Number.POSITIVE_INFINITY } = params
  if (!classDefinition) return { features: [], proficiencies: [] }

  const groups = getClassFeatureChoiceGroups(classDefinition, level)
  const selectionMap = getSelectionMap(selections)

  const features: Feature[] = []
  const proficiencies: Proficiency[] = []

  for (const group of groups) {
    const optionId = selectionMap.get(group.id)
    const option = group.options.find((candidate) => candidate.id === optionId)
    if (!option) continue

    if (option.features?.length) features.push(...option.features)
    if (option.proficiencies?.length) proficiencies.push(...option.proficiencies)
  }

  return { features, proficiencies }
}
