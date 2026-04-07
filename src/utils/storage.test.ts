import { describe, it, expect, beforeEach } from 'vitest'
import { loadStorage } from './storage'

const STORAGE_KEY = 'dnd5e-characters'

describe('storage migration', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('returns default storage when empty', () => {
    const storage = loadStorage()
    expect(storage.version).toBe(3)
    expect(storage.characters).toEqual([])
    expect(storage.activeCharacterId).toBeNull()
  })

  it('migrates v1 characters to v3', () => {
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
    expect(storage.version).toBe(3)
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
  })

  it('handles v3 storage without migration', () => {
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
    expect(storage.version).toBe(3)
    expect(storage.characters).toHaveLength(1)
    expect(storage.characters[0].name).toBe('Nuovo Eroe')
    expect(storage.characters[0].backgroundAbilityChoices).toEqual({
      primary: 'STR',
      secondary: 'DEX',
    })
  })

  it('returns default for unknown versions', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 99, characters: [] }))
    const storage = loadStorage()
    expect(storage.version).toBe(3)
    expect(storage.characters).toEqual([])
  })
})
