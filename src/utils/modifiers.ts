import type { AbilityName, CharacterAbilityScores } from '../types'

export function abilityModifier(score: number): number {
  return Math.floor((score - 10) / 2)
}

export function formatModifier(mod: number): string {
  return mod >= 0 ? `+${mod}` : `${mod}`
}

export function getHighestStat(scores: CharacterAbilityScores): AbilityName {
  return Object.entries(scores).reduce<{ key: AbilityName; value: number }>(
    (best, [key, value]) => (value > best.value ? { key: key as AbilityName, value } : best),
    { key: 'STR', value: scores.STR },
  ).key
}
