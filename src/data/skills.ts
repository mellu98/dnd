import type { AbilityName, SkillName } from '../types'

export interface SkillDefinition {
  id: SkillName
  ability: AbilityName
  nameIT: string
}

export const skills: SkillDefinition[] = [
  { id: 'acrobatics', ability: 'DEX', nameIT: 'Acrobazia' },
  { id: 'animal_handling', ability: 'WIS', nameIT: 'Addestrare Animali' },
  { id: 'arcana', ability: 'INT', nameIT: 'Arcano' },
  { id: 'athletics', ability: 'STR', nameIT: 'Atletica' },
  { id: 'deception', ability: 'CHA', nameIT: 'Inganno' },
  { id: 'history', ability: 'INT', nameIT: 'Storia' },
  { id: 'insight', ability: 'WIS', nameIT: 'Intuizione' },
  { id: 'intimidation', ability: 'CHA', nameIT: 'Intimidire' },
  { id: 'investigation', ability: 'INT', nameIT: 'Indagare' },
  { id: 'medicine', ability: 'WIS', nameIT: 'Medicina' },
  { id: 'nature', ability: 'INT', nameIT: 'Natura' },
  { id: 'perception', ability: 'WIS', nameIT: 'Percezione' },
  { id: 'performance', ability: 'CHA', nameIT: 'Intrattenere' },
  { id: 'persuasion', ability: 'CHA', nameIT: 'Persuasione' },
  { id: 'religion', ability: 'INT', nameIT: 'Religione' },
  { id: 'sleight_of_hand', ability: 'DEX', nameIT: 'Rapidita di Mano' },
  { id: 'stealth', ability: 'DEX', nameIT: 'Furtivita' },
  { id: 'survival', ability: 'WIS', nameIT: 'Sopravvivenza' },
]

export function getSkillAbility(skillId: SkillName): AbilityName {
  return skills.find(s => s.id === skillId)!.ability
}
