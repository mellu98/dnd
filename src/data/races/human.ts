import type { Race } from '../../types'

export const human: Race = {
  id: 'human',
  name: 'Human',
  nameIT: 'Umano',
  speed: 30,
  size: 'Medium',
  sizeIT: 'Media',
  darkvision: 0,
  abilityBonuses: [
    { ability: 'STR', value: 1 },
    { ability: 'DEX', value: 1 },
    { ability: 'CON', value: 1 },
    { ability: 'INT', value: 1 },
    { ability: 'WIS', value: 1 },
    { ability: 'CHA', value: 1 },
  ],
  features: [],
  proficiencies: [],
  languages: ['Common', 'One extra language of your choice'],
  languagesIT: ['Comune', 'Una lingua extra a scelta'],
  subraces: [],
}
