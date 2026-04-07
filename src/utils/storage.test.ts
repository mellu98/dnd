import { describe, it, expect, beforeEach } from 'vitest'
import { loadStorage } from './storage'

const STORAGE_KEY = 'dnd5e-characters'

describe('storage migration', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('returns default storage when empty', () => {
    const storage = loadStorage()
    expect(storage.version).toBe(4)
    expect(storage.characters).toEqual([])
    expect(storage.activeCharacterId).toBeNull()
  })

  it('migrates v1 characters to v4', () => {
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
    expect(storage.version).toBe(4)
    expect(storage.characters).toHaveLength(1)

    const char = storage.characters[0]
    expect(char.id).toBe('test-1')
    expect(char.name).toBe('Vecchio Eroe')
    expect(char.raceId).toBe('elf')
    // subraceId and chosenAbilityBonuses should be removed
    expect((char as any).subraceId).toBeUndefined()
    expect((char as any).chosenAbilityBonuses).toBeUndefined()
    // backgroundAbilityChoices should be null
    expect(char.backgroundAbilityChoices).toBeNull()
    // v4 fields — defaults
    expect(char.equippedArmorId).toBeNull()
    expect(char.equippedShieldId).toBeNull()
    expect(char.knownSpells).toEqual([])
  })

  it('migrates v3 storage to v4 with new fields', () => {
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
    expect(storage.version).toBe(4)
    expect(storage.characters).toHaveLength(1)
    const char = storage.characters[0]
    expect(char.name).toBe('Nuovo Eroe')
    expect(char.backgroundAbilityChoices).toEqual({
      primary: 'STR',
      secondary: 'DEX',
    })
    // New v4 fields added with safe defaults
    expect(char.equippedArmorId).toBeNull()
    expect(char.equippedShieldId).toBeNull()
    expect(char.knownSpells).toEqual([])
  })

  it('migrates v3 string equipment to v4 EquipmentItem[]', () => {
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
    expect(storage.version).toBe(4)
    const char = storage.characters[0]
    expect(char.equipment).toHaveLength(2)
    expect(char.equipment[0]).toMatchObject({
      id: 'gear-0',
      name: 'Torcia',
      nameIT: 'Torcia',
      category: 'gear',
      quantity: 1,
      equipped: false,
    })
    expect(char.equipment[1]).toMatchObject({
      id: 'gear-1',
      name: 'Corda 15m',
      category: 'gear',
    })
  })

  it('passes through v4 storage unchanged', () => {
    const v4Data = {
      version: 4,
      characters: [
        {
          id: 'test-4',
          name: 'Eroe v4',
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
          notes: '',
          createdAt: '2026-04-01',
          updatedAt: '2026-04-07',
          imageUrl: null,
        },
      ],
      activeCharacterId: 'test-4',
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(v4Data))

    const storage = loadStorage()
    expect(storage.version).toBe(4)
    const char = storage.characters[0]
    expect(char.knownSpells).toEqual(['fire-bolt', 'magic-missile'])
    expect(char.equippedArmorId).toBeNull()
    expect(char.equipment[0].name).toBe('Spellbook')
  })

  it('returns default for unknown versions', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 99, characters: [] }))
    const storage = loadStorage()
    expect(storage.version).toBe(4)
    expect(storage.characters).toEqual([])
  })
})
