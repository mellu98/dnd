import { beforeEach, describe, expect, it } from 'vitest'
import { loadStorage } from './storage'

const STORAGE_KEY = 'dnd5e-characters'

describe('storage migration', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('returns default storage when empty', () => {
    const storage = loadStorage()
    expect(storage.version).toBe(10)
    expect(storage.characters).toEqual([])
    expect(storage.activeCharacterId).toBeNull()
  })

  it('migrates v1 characters to v10 preserving the legacy subrace as raceVariantId', () => {
    const v1Data = {
      version: 1,
      characters: [
        {
          id: 'test-1',
          name: 'Vecchio Eroe',
          raceId: 'elf',
          subraceId: 'high-elf',
          classId: 'barbarian',
          subclassId: null,
          backgroundId: 'acolyte',
          level: 1,
          abilityScores: { STR: 14, DEX: 16, CON: 12, INT: 10, WIS: 10, CHA: 8 },
          hp: { max: 12, current: 12, temporary: 0 },
          skillProficiencies: ['perception'],
          chosenLanguages: ['Elvish'],
          chosenAbilityBonuses: [{ ability: 'DEX', value: 2 }],
          alignment: 'neutral good',
          personalityTraits: '',
          ideals: '',
          bonds: '',
          flaws: '',
          equipment: [],
          notes: '',
          createdAt: '2024-01-01',
          updatedAt: '2024-01-01',
          imageUrl: null,
        },
      ],
      activeCharacterId: 'test-1',
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(v1Data))

    const storage = loadStorage()
    expect(storage.version).toBe(10)
    expect(storage.characters).toHaveLength(1)

    const char = storage.characters[0]
    const legacyChar = char as unknown as Record<string, unknown>
    expect(char.id).toBe('test-1')
    expect(char.raceVariantId).toBe('high-elf')
    expect(char.classFeatureChoices).toEqual([])
    expect(char.backgroundAbilityChoices).toBeNull()
    expect(legacyChar.subraceId).toBeUndefined()
    expect(legacyChar.chosenAbilityBonuses).toBeUndefined()
    expect(char.preparedSpells).toEqual([])
    expect(char.activeConditions).toEqual([])
    expect(char.exhaustionLevel).toBe(0)
    expect(char.inspiration).toBe(false)
    expect(char.currency).toEqual({ cp: 0, sp: 0, ep: 0, gp: 0, pp: 0 })
    expect(char.initiativeTracker).toEqual([])
    expect(char.activeInitiativeId).toBeNull()
  })

  it('migrates v3 storage to v10 with new fields', () => {
    const v3Data = {
      version: 3,
      characters: [
        {
          id: 'test-2',
          name: 'Nuovo Eroe',
          raceId: 'human',
          classId: 'fighter',
          subclassId: null,
          backgroundId: 'soldier',
          backgroundAbilityChoices: { primary: 'STR', secondary: 'DEX' },
          level: 1,
          abilityScores: { STR: 15, DEX: 14, CON: 13, INT: 10, WIS: 10, CHA: 8 },
          hp: { max: 0, current: 0, temporary: 0 },
          skillProficiencies: [],
          chosenLanguages: [],
          alignment: 'lawful good',
          personalityTraits: '',
          ideals: '',
          bonds: '',
          flaws: '',
          equipment: [],
          notes: '',
          createdAt: '2026-01-01',
          updatedAt: '2026-01-01',
          imageUrl: null,
        },
      ],
      activeCharacterId: 'test-2',
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(v3Data))

    const storage = loadStorage()
    expect(storage.version).toBe(10)
    expect(storage.characters).toHaveLength(1)
    const char = storage.characters[0]
    expect(char.raceVariantId).toBeNull()
    expect(char.classFeatureChoices).toEqual([])
    expect(char.backgroundAbilityChoices).toEqual({
      mode: 'plus2_plus1',
      primary: 'STR',
      secondary: 'DEX',
    })
    expect(char.knownSpells).toEqual([])
    expect(char.preparedSpells).toEqual([])
    expect(char.activeConditions).toEqual([])
    expect(char.exhaustionLevel).toBe(0)
    expect(char.inspiration).toBe(false)
    expect(char.initiativeTracker).toEqual([])
    expect(char.activeInitiativeId).toBeNull()
  })

  it('migrates string equipment to typed items and preserves v8 defaults', () => {
    const v3Data = {
      version: 3,
      characters: [
        {
          id: 'test-3',
          name: 'Eroe con Gear',
          raceId: 'human',
          classId: 'fighter',
          subclassId: null,
          backgroundId: 'soldier',
          backgroundAbilityChoices: null,
          level: 1,
          abilityScores: { STR: 15, DEX: 14, CON: 13, INT: 10, WIS: 10, CHA: 8 },
          hp: { max: 10, current: 10, temporary: 0 },
          skillProficiencies: [],
          chosenLanguages: [],
          alignment: '',
          personalityTraits: '',
          ideals: '',
          bonds: '',
          flaws: '',
          equipment: ['Torcia', 'Corda 15m'],
          notes: '',
          createdAt: '2026-01-01',
          updatedAt: '2026-01-01',
          imageUrl: null,
        },
      ],
      activeCharacterId: 'test-3',
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(v3Data))

    const storage = loadStorage()
    expect(storage.version).toBe(10)
    const char = storage.characters[0]
    expect(char.equipment).toHaveLength(2)
    expect(char.raceVariantId).toBeNull()
    expect(char.classFeatureChoices).toEqual([])
    expect(char.equipment[0]).toMatchObject({
      id: 'gear-0',
      name: 'Torcia',
      nameIT: 'Torcia',
      category: 'gear',
      quantity: 1,
      equipped: false,
    })
    expect(char.currency).toEqual({ cp: 0, sp: 0, ep: 0, gp: 0, pp: 0 })
  })

  it('migrates v7 characters by adding table-play fields', () => {
    const v7Data = {
      version: 7,
      characters: [
        {
          id: 'test-4',
          name: 'Eroe v7',
          raceId: 'human',
          classId: 'wizard',
          subclassId: null,
          backgroundId: 'sage',
          backgroundAbilityChoices: null,
          level: 3,
          abilityScores: { STR: 8, DEX: 14, CON: 12, INT: 17, WIS: 13, CHA: 10 },
          hp: { max: 18, current: 18, temporary: 0 },
          skillProficiencies: ['arcana', 'history'],
          chosenLanguages: [],
          alignment: 'neutral',
          personalityTraits: '',
          ideals: '',
          bonds: '',
          flaws: '',
          equipment: [
            {
              id: 'gear-0',
              name: 'Spellbook',
              nameIT: 'Libro degli Incantesimi',
              category: 'gear',
              quantity: 1,
              equipped: false,
            },
          ],
          equippedArmorId: null,
          equippedShieldId: null,
          knownSpells: ['fire-bolt', 'magic-missile'],
          expendedSpellSlots: {},
          asiChoices: [],
          deathSaves: { successes: 0, failures: 0 },
          isStabilized: false,
          spentHitDice: 0,
          expertiseSkills: [],
          notes: '',
          createdAt: '2026-04-01',
          updatedAt: '2026-04-07',
          imageUrl: null,
        },
      ],
      activeCharacterId: 'test-4',
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(v7Data))

    const storage = loadStorage()
    expect(storage.version).toBe(10)
    const char = storage.characters[0]
    expect(char.raceVariantId).toBeNull()
    expect(char.classFeatureChoices).toEqual([])
    expect(char.knownSpells).toEqual(['fire-bolt', 'magic-missile'])
    expect(char.preparedSpells).toEqual(['fire-bolt', 'magic-missile'])
    expect(char.activeConditions).toEqual([])
    expect(char.exhaustionLevel).toBe(0)
    expect(char.inspiration).toBe(false)
    expect(char.currency).toEqual({ cp: 0, sp: 0, ep: 0, gp: 0, pp: 0 })
    expect(char.initiativeTracker).toEqual([])
    expect(char.activeInitiativeId).toBeNull()
  })

  it('migrates v9 characters to v10 with race variants and class feature choices', () => {
    const v9Data = {
      version: 9,
      characters: [
        {
          id: 'test-5',
          name: 'Chierico Draconico',
          raceId: 'dragonborn',
          raceVariantId: 'topaz',
          classId: 'cleric',
          subclassId: 'life',
          classFeatureChoices: [{ groupId: 'divine-order', optionId: 'protector' }],
          backgroundId: 'wayfarer',
          backgroundAbilityChoices: { mode: 'plus1_plus1_plus1', abilities: ['WIS', 'CON', 'CHA'] },
          level: 1,
          abilityScores: { STR: 13, DEX: 10, CON: 14, INT: 8, WIS: 15, CHA: 12 },
          hp: { max: 9, current: 9, temporary: 0 },
          skillProficiencies: ['insight'],
          chosenLanguages: [],
          alignment: '',
          personalityTraits: '',
          ideals: '',
          bonds: '',
          flaws: '',
          equipment: [],
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
          currency: { cp: 0, sp: 0, ep: 0, gp: 0, pp: 0 },
          initiativeTracker: [],
          activeInitiativeId: null,
          notes: '',
          createdAt: '2026-04-01',
          updatedAt: '2026-04-07',
          imageUrl: null,
        },
      ],
      activeCharacterId: 'test-5',
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(v9Data))

    const storage = loadStorage()
    expect(storage.version).toBe(10)
    expect(storage.characters[0].raceVariantId).toBe('topaz')
    expect(storage.characters[0].classFeatureChoices).toEqual([{ groupId: 'divine-order', optionId: 'protector' }])
  })

  it('returns default for unknown versions', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 99, characters: [] }))
    const storage = loadStorage()
    expect(storage.version).toBe(10)
    expect(storage.characters).toEqual([])
  })
})
