import type { Character } from '../types'

interface StorageSchemaV1 {
  version: 1
  characters: {
    id: string
    name: string
    raceId: string
    subraceId: string | null
    classId: string
    subclassId: string | null
    backgroundId: string
    level: number
    abilityScores: Character['abilityScores']
    hp: Character['hp']
    skillProficiencies: Character['skillProficiencies']
    chosenLanguages: Character['chosenLanguages']
    chosenAbilityBonuses: { ability: string; value: number }[]
    alignment: string
    personalityTraits: string
    ideals: string
    bonds: string
    flaws: string
    equipment: string[]
    notes: string
    createdAt: string
    updatedAt: string
    imageUrl: string | null
  }[]
  activeCharacterId: string | null
}

interface StorageSchemaV3 {
  version: 3
  characters: Character[]
  activeCharacterId: string | null
}

const STORAGE_KEY = 'dnd5e-characters'

const defaultStorage: StorageSchemaV3 = {
  version: 3,
  characters: [],
  activeCharacterId: null,
}

function migrateV1toV3(old: StorageSchemaV1): StorageSchemaV3 {
  return {
    version: 3,
    characters: old.characters.map(c => ({
      id: c.id,
      name: c.name,
      raceId: c.raceId,
      classId: c.classId,
      subclassId: c.subclassId,
      backgroundId: c.backgroundId,
      backgroundAbilityChoices: null,
      level: c.level,
      abilityScores: c.abilityScores,
      hp: c.hp,
      skillProficiencies: c.skillProficiencies,
      chosenLanguages: c.chosenLanguages,
      alignment: c.alignment,
      personalityTraits: c.personalityTraits,
      ideals: c.ideals,
      bonds: c.bonds,
      flaws: c.flaws,
      equipment: c.equipment,
      notes: c.notes,
      createdAt: c.createdAt,
      updatedAt: c.updatedAt,
      imageUrl: c.imageUrl,
    })),
    activeCharacterId: old.activeCharacterId,
  }
}

export function loadStorage(): StorageSchemaV3 {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultStorage
    const parsed = JSON.parse(raw)
    if (parsed.version === 1) {
      return migrateV1toV3(parsed as StorageSchemaV1)
    }
    if (parsed.version === 3) {
      return parsed as StorageSchemaV3
    }
    // Unknown version — return default
    return defaultStorage
  } catch {
    return defaultStorage
  }
}

export function saveStorage(data: StorageSchemaV3): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function generateId(): string {
  return crypto.randomUUID()
}
