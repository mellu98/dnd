import type { Species } from '../../types'

import { human } from './human'
import { elf } from './elf'
import { dwarf } from './dwarf'
import { halfling } from './halfling'
import { gnome } from './gnome'
import { halfElf } from './half-elf'
import { halfOrc } from './half-orc'
import { tiefling } from './tiefling'
import { dragonborn } from './dragonborn'

export const races: Species[] = [
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

export function getRaceById(id: string): Species | undefined {
  return races.find(r => r.id === id)
}

export { human, elf, dwarf, halfling, gnome, halfElf, halfOrc, tiefling, dragonborn }
