import type { Race, Subrace } from '../../types'

import { human } from './human'
import { elf } from './elf'
import { dwarf } from './dwarf'
import { halfling } from './halfling'
import { gnome } from './gnome'
import { halfElf } from './half-elf'
import { halfOrc } from './half-orc'
import { tiefling } from './tiefling'
import { dragonborn } from './dragonborn'

export const races: Race[] = [
  human,
  elf,
  dwarf,
  halfling,
  gnome,
  halfElf,
  halfOrc,
  tiefling,
  dragonborn,
]

export function getRaceById(id: string): Race | undefined {
  return races.find(r => r.id === id)
}

export function getSubraceById(raceId: string, subraceId: string): Subrace | undefined {
  const race = getRaceById(raceId)
  if (!race) return undefined
  return race.subraces.find(s => s.id === subraceId)
}

export { human, elf, dwarf, halfling, gnome, halfElf, halfOrc, tiefling, dragonborn }
