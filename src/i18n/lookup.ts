import { it, type TranslationKey } from './it'

export function t(key: TranslationKey): string {
  return it[key]
}

export function getSkillTranslation(skill: string): string {
  const key = `skill_${skill}` as TranslationKey
  return it[key] ?? skill
}

export function getAbilityFull(ability: string): string {
  const key = `${ability}_full` as TranslationKey
  return it[key] ?? ability
}
