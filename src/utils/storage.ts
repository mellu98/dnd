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
  characters: any[]
  activeCharacterId: string | null
}

interface StorageSchemaV4 {
  version: 4
  characters: any[]
  activeCharacterId: string | null
}

interface StorageSchemaV5 {
  version: 5
  characters: Character[]
  activeCharacterId: string | null
}

const STORAGE_KEY = 'dnd5e-characters'

const defaultStorage: StorageSchemaV5 = {
  version: 5,
  characters: [],
  activeCharacterId: null,
}

function migrateV1toV3(old: StorageSchemaV1): StorageSchemaV3 {
  return {
    version: 3,
    characters: old.characters.map((c) => ({
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
      equipment: c.equipment.map((s: string, i: number) => ({
        id: `gear-${i}`,
        name: s,
        nameIT: s,
        category: 'gear' as const,
        quantity: 1,
        equipped: false,
      })),
      equippedArmorId: null,
      equippedShieldId: null,
      knownSpells: [],
      expendedSpellSlots: {},
      asiChoices: [],
      notes: c.notes,
      createdAt: c.createdAt,
      updatedAt: c.updatedAt,
      imageUrl: c.imageUrl,
    })),
    activeCharacterId: old.activeCharacterId,
  }
}

/**
 * Migrates v3 data to v4.
 * Key changes:
 * - equipment: string[] → EquipmentItem[]  (strings become gear items)
 * - equippedArmorId, equippedShieldId, knownSpells added with safe defaults
 */
function migrateV3toV4(v3: StorageSchemaV3): StorageSchemaV4 {
  return {
    version: 4,
    characters: v3.characters.map((c: any) => ({
      ...c,
      equipment: Array.isArray(c.equipment)
        ? c.equipment.map((item: unknown, i: number) => {
            // Already an EquipmentItem object — pass through
            if (typeof item === 'object' && item !== null && 'category' in item) {
              return item
            }
            // Legacy string → convert to gear EquipmentItem
            return {
              id: `gear-${i}`,
              name: String(item),
              nameIT: String(item),
              category: 'gear' as const,
              quantity: 1,
              equipped: false,
            }
          })
        : [],
      equippedArmorId: c.equippedArmorId ?? null,
      equippedShieldId: c.equippedShieldId ?? null,
      knownSpells: Array.isArray(c.knownSpells) ? c.knownSpells : [],
      expendedSpellSlots:
        c.expendedSpellSlots != null && typeof c.expendedSpellSlots === 'object' ? c.expendedSpellSlots : {},
      asiChoices: [],
    })),
    activeCharacterId: v3.activeCharacterId,
  }
}

/**
 * Migrates v4 data to v5.
 * Key changes:
 * - asiChoices: [] added to all characters
 */
function migrateV4toV5(v4: StorageSchemaV4): StorageSchemaV5 {
  return {
    version: 5,
    characters: v4.characters.map((c: any) => ({
      ...c,
      asiChoices: Array.isArray(c.asiChoices) ? c.asiChoices : [],
    })) as Character[],
    activeCharacterId: v4.activeCharacterId,
  }
}

export function loadStorage(): StorageSchemaV5 {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultStorage
    const parsed = JSON.parse(raw)

    if (parsed.version === 1) {
      const v3 = migrateV1toV3(parsed as StorageSchemaV1)
      const v4 = migrateV3toV4(v3)
      return migrateV4toV5(v4)
    }
    if (parsed.version === 3) {
      const v4 = migrateV3toV4(parsed as StorageSchemaV3)
      return migrateV4toV5(v4)
    }
    if (parsed.version === 4) {
      return migrateV4toV5(parsed as StorageSchemaV4)
    }
    if (parsed.version === 5) {
      return parsed as StorageSchemaV5
    }
    // Unknown version — return default (safe fallback)
    return defaultStorage
  } catch {
    return defaultStorage
  }
}

export function saveStorage(data: StorageSchemaV5): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function generateId(): string {
  return crypto.randomUUID()
}
