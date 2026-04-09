import type {
  AbilityName,
  AbilityScoreBonus,
  Background,
  BackgroundAbilityChoiceMode,
  BackgroundAbilityChoices,
} from '../types'

const DEFAULT_BACKGROUND_ABILITY_MODES: BackgroundAbilityChoiceMode[] = ['plus2_plus1', 'plus1_plus1_plus1']
const VALID_ABILITIES: AbilityName[] = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']

function isAbilityName(value: unknown): value is AbilityName {
  return typeof value === 'string' && VALID_ABILITIES.includes(value as AbilityName)
}

export function getBackgroundAbilityModes(background?: Background | null): BackgroundAbilityChoiceMode[] {
  if (!background) return [...DEFAULT_BACKGROUND_ABILITY_MODES]
  return background.abilityScoreModes?.length
    ? [...background.abilityScoreModes]
    : [...DEFAULT_BACKGROUND_ABILITY_MODES]
}

export function getBackgroundTripleOptions(background?: Background | null): AbilityName[] {
  if (!background) return []

  return background.abilityScoreOptions.triple
    ? [...background.abilityScoreOptions.triple]
    : Array.from(new Set([...background.abilityScoreOptions.primary, ...background.abilityScoreOptions.secondary]))
}

export function normalizeBackgroundAbilityChoices(value: unknown): BackgroundAbilityChoices | null {
  if (!value || typeof value !== 'object') return null

  const candidate = value as Record<string, unknown>

  if (candidate.mode === 'plus2_plus1' && isAbilityName(candidate.primary) && isAbilityName(candidate.secondary)) {
    return {
      mode: 'plus2_plus1',
      primary: candidate.primary,
      secondary: candidate.secondary,
    }
  }

  if (candidate.mode === 'plus1_plus1_plus1' && Array.isArray(candidate.abilities)) {
    const abilities = candidate.abilities.filter(isAbilityName)
    if (abilities.length === 3) {
      return {
        mode: 'plus1_plus1_plus1',
        abilities: [abilities[0], abilities[1], abilities[2]],
      }
    }
  }

  if (isAbilityName(candidate.primary) && isAbilityName(candidate.secondary)) {
    return {
      mode: 'plus2_plus1',
      primary: candidate.primary,
      secondary: candidate.secondary,
    }
  }

  return null
}

export function isBackgroundAbilityChoicesValid(
  background?: Background | null,
  value?: BackgroundAbilityChoices | null,
): boolean {
  if (!background || !value) return false

  const modes = getBackgroundAbilityModes(background)
  if (!modes.includes(value.mode)) return false

  if (value.mode === 'plus2_plus1') {
    return (
      value.primary !== value.secondary
      && background.abilityScoreOptions.primary.includes(value.primary)
      && background.abilityScoreOptions.secondary.includes(value.secondary)
    )
  }

  const tripleOptions = getBackgroundTripleOptions(background)
  return (
    value.abilities.length === 3
    && new Set(value.abilities).size === 3
    && value.abilities.every((ability) => tripleOptions.includes(ability))
  )
}

export function getBackgroundAbilityBonuses(
  background?: Background | null,
  value?: BackgroundAbilityChoices | null,
): AbilityScoreBonus[] {
  if (!isBackgroundAbilityChoicesValid(background, value)) return []

  if (!value) return []

  if (value.mode === 'plus2_plus1') {
    return [
      { ability: value.primary, value: 2 },
      { ability: value.secondary, value: 1 },
    ]
  }

  return value.abilities.map((ability) => ({ ability, value: 1 }))
}
