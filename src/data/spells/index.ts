import type { Spell } from '../../types'

import { wizardSpells } from './wizard-spells'
import { clericSpells } from './cleric-spells'
import { druidSpells } from './druid-spells'
import { bardSpells } from './bard-spells'
import { sorcererSpells } from './sorcerer-spells'
import { warlockSpells } from './warlock-spells'
import { paladinSpells } from './paladin-spells'
import { rangerSpells } from './ranger-spells'

const classSpellMap: Record<string, Spell[]> = {
  wizard: wizardSpells,
  cleric: clericSpells,
  druid: druidSpells,
  bard: bardSpells,
  sorcerer: sorcererSpells,
  warlock: warlockSpells,
  paladin: paladinSpells,
  ranger: rangerSpells,
}

export function getSpellsByClass(classId: string): Spell[] {
  return classSpellMap[classId] ?? []
}

export function getSpellById(id: string, classId?: string): Spell | undefined {
  if (classId) return getSpellsByClass(classId).find((s) => s.id === id)

  for (const spells of Object.values(classSpellMap)) {
    const found = spells.find((s) => s.id === id)
    if (found) return found
  }
  return undefined
}
