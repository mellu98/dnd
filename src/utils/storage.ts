import type { Character } from '../types'

interface StorageSchema {
  version: number
  characters: Character[]
  activeCharacterId: string | null
}

const STORAGE_KEY = 'dnd5e-characters'

const defaultStorage: StorageSchema = {
  version: 1,
  characters: [],
  activeCharacterId: null,
}

export function loadStorage(): StorageSchema {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultStorage
    return JSON.parse(raw) as StorageSchema
  } catch {
    return defaultStorage
  }
}

export function saveStorage(data: StorageSchema): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function generateId(): string {
  return crypto.randomUUID()
}
