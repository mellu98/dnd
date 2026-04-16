/**
 * Name generator — uses 5etools names.json to generate random character names.
 */

import { normalizeId } from './id-normalizer'

interface NameData {
  name: string
  female: string[]
  male: string[]
  // Some races have a 'notes' field with usage info
  notes?: string
}

let _names: Map<string, NameData> | null = null

async function loadNames(): Promise<void> {
  if (_names) return

  const raw = await import('./raw/names.json')
  const data = (raw as unknown as { default: { name: NameData[] } }).default

  const map = new Map<string, NameData>()
  for (const entry of data.name ?? []) {
    map.set(normalizeId(entry.name), entry)
  }

  _names = map
}

function randomFrom(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)]
}

/**
 * Generate a random name for a given race and optional gender.
 * @param race - Race ID or name (e.g., "elf", "dwarf", "human")
 * @param gender - "male", "female", or undefined for random
 */
export async function generateName(race: string, gender?: 'male' | 'female'): Promise<string | null> {
  await loadNames()

  const raceId = normalizeId(race)
  const data = _names?.get(raceId)
  if (!data) return null

  const g = gender ?? (Math.random() > 0.5 ? 'male' : 'female')
  const list = g === 'female' ? data.female : data.male

  if (!list || list.length === 0) return null

  return randomFrom(list)
}

/**
 * Generate multiple names at once.
 */
export async function generateNames(
  race: string,
  count: number,
  gender?: 'male' | 'female',
): Promise<string[]> {
  const names: string[] = []
  for (let i = 0; i < count; i++) {
    const name = await generateName(race, gender)
    if (name) names.push(name)
  }
  return names
}

/**
 * Get available races for name generation.
 */
export async function getAvailableNameRaces(): Promise<string[]> {
  await loadNames()
  return Array.from(_names?.keys() ?? [])
}
