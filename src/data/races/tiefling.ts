import type { Race } from '../../types'

export const tiefling: Race = {
  id: 'tiefling',
  name: 'Tiefling',
  nameIT: 'Tiefling',
  speed: 30,
  size: 'Medium',
  sizeIT: 'Media',
  darkvision: 60,
  abilityBonuses: [
    { ability: 'CHA', value: 2 },
    { ability: 'INT', value: 1 },
  ],
  features: [
    {
      name: 'Hellish Resistance',
      nameIT: 'Resistenza Infernale',
      description: 'You have resistance to fire damage.',
      descriptionIT: 'Hai resistenza ai danni da fuoco.',
      level: 1,
    },
    {
      name: 'Infernal Legacy',
      nameIT: 'Retaggio Infernale',
      description: 'You know the thaumaturgy cantrip. At 3rd level you can cast hellish rebuke as a 2nd-level spell once per long rest, and at 5th level darkness once per long rest. Charisma is your spellcasting ability.',
      descriptionIT: 'Conosci il trucchetto taumaturgia. Al 3° livello puoi lanciare rimprovero infernale come incantesimo di 2° livello una volta per riposo lungo, e al 5° livello oscurità una volta per riposo lungo. Carisma è la tua caratteristica da incantatore.',
      level: 1,
    },
  ],
  proficiencies: [],
  languages: ['Common', 'Infernal'],
  languagesIT: ['Comune', 'Infernale'],
  subraces: [],
}
