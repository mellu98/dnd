import type {
  ASIChoice,
  AbilityName,
  Character,
  ClassFeatureChoiceSelection,
  CurrencyPouch,
  SkillName,
} from '../types'
import { normalizeBackgroundAbilityChoices } from './background-ability-choices'

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

type LegacyCharacter = Omit<
  Partial<Character>,
  | 'equipment'
  | 'knownSpells'
  | 'preparedSpells'
  | 'expendedSpellSlots'
  | 'asiChoices'
  | 'deathSaves'
  | 'isStabilized'
  | 'spentHitDice'
  | 'expertiseSkills'
  | 'activeConditions'
  | 'exhaustionLevel'
  | 'inspiration'
  | 'currency'
  | 'initiativeTracker'
  | 'activeInitiativeId'
  | 'classFeatureChoices'
> & {
  equipment?: unknown
  knownSpells?: unknown
  preparedSpells?: unknown
  expendedSpellSlots?: unknown
  asiChoices?: unknown
  deathSaves?: unknown
  isStabilized?: unknown
  spentHitDice?: unknown
  expertiseSkills?: unknown
  activeConditions?: unknown
  exhaustionLevel?: unknown
  inspiration?: unknown
  currency?: unknown
  initiativeTracker?: unknown
  activeInitiativeId?: unknown
  subraceId?: unknown
  classFeatureChoices?: unknown
}

interface StorageSchemaV3 {
  version: 3
  characters: LegacyCharacter[]
  activeCharacterId: string | null
}

interface StorageSchemaV4 {
  version: 4
  characters: LegacyCharacter[]
  activeCharacterId: string | null
}

interface StorageSchemaV5 {
  version: 5
  characters: Character[]
  activeCharacterId: string | null
}

interface StorageSchemaV6 {
  version: 6
  characters: Character[]
  activeCharacterId: string | null
}

interface StorageSchemaV7 {
  version: 7
  characters: Character[]
  activeCharacterId: string | null
}

interface StorageSchemaV8 {
  version: 8
  characters: Character[]
  activeCharacterId: string | null
}

interface StorageSchemaV9 {
  version: 9
  characters: Character[]
  activeCharacterId: string | null
}

interface StorageSchemaV10 {
  version: 10
  characters: Character[]
  activeCharacterId: string | null
}

const STORAGE_KEY = 'dnd5e-characters'

const EMPTY_CURRENCY: CurrencyPouch = {
  cp: 0,
  sp: 0,
  ep: 0,
  gp: 0,
  pp: 0,
}

const defaultStorage: StorageSchemaV10 = {
  version: 10,
  characters: [],
  activeCharacterId: null,
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function normalizeCurrency(value: unknown): CurrencyPouch {
  if (!isRecord(value)) return { ...EMPTY_CURRENCY }

  return {
    cp: typeof value.cp === 'number' ? value.cp : 0,
    sp: typeof value.sp === 'number' ? value.sp : 0,
    ep: typeof value.ep === 'number' ? value.ep : 0,
    gp: typeof value.gp === 'number' ? value.gp : 0,
    pp: typeof value.pp === 'number' ? value.pp : 0,
  }
}

function normalizeEquipment(equipment: unknown): Character['equipment'] {
  if (!Array.isArray(equipment)) return []

  return equipment.map((item, index) => {
    if (isRecord(item) && typeof item.id === 'string' && typeof item.name === 'string' && typeof item.category === 'string') {
      return {
        id: item.id,
        name: item.name,
        nameIT: typeof item.nameIT === 'string' ? item.nameIT : item.name,
        category: item.category as Character['equipment'][number]['category'],
        quantity: typeof item.quantity === 'number' ? item.quantity : 1,
        weight: typeof item.weight === 'number' ? item.weight : undefined,
        value: typeof item.value === 'number' ? item.value : undefined,
        ac: typeof item.ac === 'number' ? item.ac : undefined,
        dexModifier: typeof item.dexModifier === 'number' ? item.dexModifier : undefined,
        strength: typeof item.strength === 'number' ? item.strength : undefined,
        stealthDisadvantage: item.stealthDisadvantage === true,
        shieldBonus: typeof item.shieldBonus === 'number' ? item.shieldBonus : undefined,
        equipped: item.equipped === true,
        magicalBonus: typeof item.magicalBonus === 'number' ? item.magicalBonus : undefined,
        ammoCount: typeof item.ammoCount === 'number' ? item.ammoCount : undefined,
        source: typeof item.source === 'string' ? item.source : undefined,
        isLegacy: item.isLegacy === true,
      }
    }

    return {
      id: `gear-${index}`,
      name: String(item),
      nameIT: String(item),
      category: 'gear' as const,
      quantity: 1,
      equipped: false,
    }
  })
}

function normalizeExpendedSpellSlots(value: unknown): Record<number, number> {
  if (!isRecord(value)) return {}

  const normalized: Record<number, number> = {}
  for (const [key, amount] of Object.entries(value)) {
    const level = Number(key)
    if (Number.isInteger(level) && typeof amount === 'number') {
      normalized[level] = amount
    }
  }

  return normalized
}

function normalizeInitiativeTracker(value: unknown): Character['initiativeTracker'] {
  if (!Array.isArray(value)) return []

  return value.flatMap((entry, index) => {
    if (!isRecord(entry) || typeof entry.name !== 'string' || typeof entry.initiative !== 'number') {
      return []
    }

    return [{
      id: typeof entry.id === 'string' ? entry.id : `initiative-${index}`,
      name: entry.name,
      initiative: entry.initiative,
      notes: typeof entry.notes === 'string' ? entry.notes : '',
    }]
  })
}

function normalizeASIChoices(value: unknown): ASIChoice[] {
  if (!Array.isArray(value)) return []

  return value.flatMap((choice) => {
    if (!isRecord(choice) || typeof choice.level !== 'number' || (choice.type !== 'ability' && choice.type !== 'feat')) {
      return []
    }

    const normalized: ASIChoice = {
      level: choice.level,
      type: choice.type,
    }

    if (Array.isArray(choice.abilityBonuses)) {
      normalized.abilityBonuses = choice.abilityBonuses.flatMap((bonus) => {
        if (!isRecord(bonus) || typeof bonus.ability !== 'string' || typeof bonus.value !== 'number') {
          return []
        }

        return [{ ability: bonus.ability as AbilityName, value: bonus.value }]
      })
    }

    if (typeof choice.featId === 'string') {
      normalized.featId = choice.featId
    }

    return [normalized]
  })
}

function normalizeExpertiseSkills(value: unknown): SkillName[] {
  if (!Array.isArray(value)) return []
  return value.filter((skill): skill is SkillName => typeof skill === 'string')
}

function normalizeClassFeatureChoices(value: unknown): ClassFeatureChoiceSelection[] {
  if (!Array.isArray(value)) return []

  return value.flatMap((selection) => {
    if (!isRecord(selection) || typeof selection.groupId !== 'string' || typeof selection.optionId !== 'string') {
      return []
    }

    return [{ groupId: selection.groupId, optionId: selection.optionId }]
  })
}

function withCharacterDefaults(character: LegacyCharacter): Character {
  const normalizedKnownSpells = Array.isArray(character.knownSpells)
    ? character.knownSpells.filter((spellId): spellId is string => typeof spellId === 'string')
    : []

  const normalizedPreparedSpells = Array.isArray(character.preparedSpells)
    ? character.preparedSpells.filter((spellId): spellId is string => typeof spellId === 'string')
    : normalizedKnownSpells

  const raceVariantId = typeof character.raceVariantId === 'string'
    ? character.raceVariantId
    : typeof character.subraceId === 'string'
      ? character.subraceId
      : null

  return {
    ...(character as Character),
    raceVariantId,
    classFeatureChoices: normalizeClassFeatureChoices(character.classFeatureChoices),
    backgroundAbilityChoices: normalizeBackgroundAbilityChoices(character.backgroundAbilityChoices),
    equipment: normalizeEquipment(character.equipment),
    knownSpells: normalizedKnownSpells,
    preparedSpells: normalizedPreparedSpells,
    expendedSpellSlots: normalizeExpendedSpellSlots(character.expendedSpellSlots),
    asiChoices: normalizeASIChoices(character.asiChoices),
    deathSaves:
      isRecord(character.deathSaves)
        && typeof character.deathSaves.successes === 'number'
        && typeof character.deathSaves.failures === 'number'
        ? {
            successes: character.deathSaves.successes,
            failures: character.deathSaves.failures,
          }
        : { successes: 0, failures: 0 },
    activeConditions: Array.isArray(character.activeConditions)
      ? character.activeConditions.filter((condition): condition is string => typeof condition === 'string')
      : [],
    exhaustionLevel:
      typeof character.exhaustionLevel === 'number'
        ? Math.max(0, Math.min(6, character.exhaustionLevel))
        : 0,
    inspiration: character.inspiration === true,
    isStabilized: character.isStabilized === true,
    spentHitDice: typeof character.spentHitDice === 'number' ? character.spentHitDice : 0,
    expertiseSkills: normalizeExpertiseSkills(character.expertiseSkills),
    currency: normalizeCurrency(character.currency),
    initiativeTracker: normalizeInitiativeTracker(character.initiativeTracker),
    activeInitiativeId: typeof character.activeInitiativeId === 'string' ? character.activeInitiativeId : null,
  }
}

function migrateV1toV3(old: StorageSchemaV1): StorageSchemaV3 {
  return {
    version: 3,
    characters: old.characters.map((character) => ({
      id: character.id,
      name: character.name,
      raceId: character.raceId,
      raceVariantId: character.subraceId,
      classId: character.classId,
      subclassId: character.subclassId,
      classFeatureChoices: [],
      backgroundId: character.backgroundId,
      backgroundAbilityChoices: null,
      level: character.level,
      abilityScores: character.abilityScores,
      hp: character.hp,
      skillProficiencies: character.skillProficiencies,
      chosenLanguages: character.chosenLanguages,
      alignment: character.alignment,
      personalityTraits: character.personalityTraits,
      ideals: character.ideals,
      bonds: character.bonds,
      flaws: character.flaws,
      equipment: character.equipment,
      equippedArmorId: null,
      equippedShieldId: null,
      knownSpells: [],
      preparedSpells: [],
      expendedSpellSlots: {},
      asiChoices: [],
      deathSaves: { successes: 0, failures: 0 },
      activeConditions: [],
      exhaustionLevel: 0,
      inspiration: false,
      isStabilized: false,
      spentHitDice: 0,
      expertiseSkills: [],
      currency: { ...EMPTY_CURRENCY },
      notes: character.notes,
      createdAt: character.createdAt,
      updatedAt: character.updatedAt,
      imageUrl: character.imageUrl,
    })),
    activeCharacterId: old.activeCharacterId,
  }
}

function migrateV3toV4(v3: StorageSchemaV3): StorageSchemaV4 {
  return {
    version: 4,
    characters: v3.characters.map((character) => ({
      ...character,
      equipment: normalizeEquipment(character.equipment),
      equippedArmorId: character.equippedArmorId ?? null,
      equippedShieldId: character.equippedShieldId ?? null,
      knownSpells: Array.isArray(character.knownSpells) ? character.knownSpells : [],
      preparedSpells: Array.isArray(character.preparedSpells) ? character.preparedSpells : [],
      expendedSpellSlots: normalizeExpendedSpellSlots(character.expendedSpellSlots),
      asiChoices: Array.isArray(character.asiChoices) ? character.asiChoices : [],
      activeConditions: Array.isArray(character.activeConditions) ? character.activeConditions : [],
      exhaustionLevel: typeof character.exhaustionLevel === 'number' ? character.exhaustionLevel : 0,
      inspiration: character.inspiration === true,
      currency: normalizeCurrency(character.currency),
    })),
    activeCharacterId: v3.activeCharacterId,
  }
}

function migrateV4toV5(v4: StorageSchemaV4): StorageSchemaV5 {
  return {
    version: 5,
    characters: v4.characters.map(withCharacterDefaults),
    activeCharacterId: v4.activeCharacterId,
  }
}

function migrateV5toV6(v5: StorageSchemaV5): StorageSchemaV6 {
  return {
    version: 6,
    characters: v5.characters.map((character) =>
      withCharacterDefaults({
        ...character,
        deathSaves: character.deathSaves,
        isStabilized: character.isStabilized,
        spentHitDice: character.spentHitDice,
      }),
    ),
    activeCharacterId: v5.activeCharacterId,
  }
}

function migrateV6toV7(v6: StorageSchemaV6): StorageSchemaV7 {
  return {
    version: 7,
    characters: v6.characters.map((character) =>
      withCharacterDefaults({
        ...character,
        expertiseSkills: character.expertiseSkills,
      }),
    ),
    activeCharacterId: v6.activeCharacterId,
  }
}

function migrateV7toV8(v7: StorageSchemaV7): StorageSchemaV8 {
  return {
    version: 8,
    characters: v7.characters.map(withCharacterDefaults),
    activeCharacterId: v7.activeCharacterId,
  }
}

function migrateV8toV9(v8: StorageSchemaV8): StorageSchemaV9 {
  return {
    version: 9,
    characters: v8.characters.map(withCharacterDefaults),
    activeCharacterId: v8.activeCharacterId,
  }
}

function migrateV9toV10(v9: StorageSchemaV9): StorageSchemaV10 {
  return {
    version: 10,
    characters: v9.characters.map((character) => withCharacterDefaults(character as LegacyCharacter)),
    activeCharacterId: v9.activeCharacterId,
  }
}

export function loadStorage(): StorageSchemaV10 {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultStorage

    const parsed: unknown = JSON.parse(raw)
    if (!isRecord(parsed) || typeof parsed.version !== 'number') return defaultStorage

    if (parsed.version === 1) {
      const v3 = migrateV1toV3(parsed as unknown as StorageSchemaV1)
      const v4 = migrateV3toV4(v3)
      const v5 = migrateV4toV5(v4)
      const v6 = migrateV5toV6(v5)
      const v7 = migrateV6toV7(v6)
      const v8 = migrateV7toV8(v7)
      const v9 = migrateV8toV9(v8)
      return migrateV9toV10(v9)
    }

    if (parsed.version === 3) {
      const v4 = migrateV3toV4(parsed as unknown as StorageSchemaV3)
      const v5 = migrateV4toV5(v4)
      const v6 = migrateV5toV6(v5)
      const v7 = migrateV6toV7(v6)
      const v8 = migrateV7toV8(v7)
      const v9 = migrateV8toV9(v8)
      return migrateV9toV10(v9)
    }

    if (parsed.version === 4) {
      const v5 = migrateV4toV5(parsed as unknown as StorageSchemaV4)
      const v6 = migrateV5toV6(v5)
      const v7 = migrateV6toV7(v6)
      const v8 = migrateV7toV8(v7)
      const v9 = migrateV8toV9(v8)
      return migrateV9toV10(v9)
    }

    if (parsed.version === 5) {
      const v6 = migrateV5toV6(parsed as unknown as StorageSchemaV5)
      const v7 = migrateV6toV7(v6)
      const v8 = migrateV7toV8(v7)
      const v9 = migrateV8toV9(v8)
      return migrateV9toV10(v9)
    }

    if (parsed.version === 6) {
      const v7 = migrateV6toV7(parsed as unknown as StorageSchemaV6)
      const v8 = migrateV7toV8(v7)
      const v9 = migrateV8toV9(v8)
      return migrateV9toV10(v9)
    }

    if (parsed.version === 7) {
      const v8 = migrateV7toV8(parsed as unknown as StorageSchemaV7)
      const v9 = migrateV8toV9(v8)
      return migrateV9toV10(v9)
    }

    if (parsed.version === 8) {
      const v9 = migrateV8toV9(parsed as unknown as StorageSchemaV8)
      return migrateV9toV10(v9)
    }

    if (parsed.version === 9) {
      return migrateV9toV10(parsed as unknown as StorageSchemaV9)
    }

    if (parsed.version === 10) {
      return {
        version: 10,
        characters: Array.isArray(parsed.characters)
          ? parsed.characters.map((character) => withCharacterDefaults(character as LegacyCharacter))
          : [],
        activeCharacterId: typeof parsed.activeCharacterId === 'string' ? parsed.activeCharacterId : null,
      }
    }

    return defaultStorage
  } catch {
    return defaultStorage
  }
}

export function saveStorage(data: StorageSchemaV10): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function generateId(): string {
  return crypto.randomUUID()
}
