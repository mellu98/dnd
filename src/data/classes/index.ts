import type { ClassDefinition } from '../../types'
import { barbarian } from './barbarian'
import { bard } from './bard'
import { cleric } from './cleric'
import { druid } from './druid'
import { fighter } from './fighter'
import { monk } from './monk'
import { paladin } from './paladin'
import { ranger } from './ranger'
import { rogue } from './rogue'
import { sorcerer } from './sorcerer'
import { warlock } from './warlock'
import { wizard } from './wizard'

export const classes: ClassDefinition[] = [
  barbarian, bard, cleric, druid, fighter, monk,
  paladin, ranger, rogue, sorcerer, warlock, wizard,
]

export function getClassById(id: string): ClassDefinition | undefined {
  return classes.find(c => c.id === id)
}

export { barbarian, bard, cleric, druid, fighter, monk, paladin, ranger, rogue, sorcerer, warlock, wizard }
