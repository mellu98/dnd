import type { Race } from '../../types'

export const dwarf: Race = {
  id: 'dwarf',
  name: 'Dwarf',
  nameIT: 'Nano',
  speed: 25,
  size: 'Medium',
  sizeIT: 'Media',
  darkvision: 60,
  abilityBonuses: [
    { ability: 'CON', value: 2 },
  ],
  features: [
    {
      name: 'Dwarven Resilience',
      nameIT: 'Resilienza Nanica',
      description: 'You have advantage on saving throws against poison, and you have resistance against poison damage.',
      descriptionIT: 'Hai vantaggio ai tiri salvezza contro il veleno e resistenza ai danni da veleno.',
      level: 1,
    },
    {
      name: 'Stonecunning',
      nameIT: 'Affinità con la Pietra',
      description: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient and add double your proficiency bonus.',
      descriptionIT: 'Quando effettui una prova di Intelligenza (Storia) relativa all\'origine di lavori in pietra, sei considerato competente e aggiungi il doppio del bonus di competenza.',
      level: 1,
    },
  ],
  proficiencies: [
    { type: 'weapon', value: 'Battleaxe', valueIT: 'Ascia da Battaglia' },
    { type: 'weapon', value: 'Handaxe', valueIT: 'Accetta' },
    { type: 'weapon', value: 'Light Hammer', valueIT: 'Martello Leggero' },
    { type: 'weapon', value: 'Warhammer', valueIT: 'Martello da Guerra' },
    { type: 'tool', value: "Smith's Tools, Brewer's Supplies, or Mason's Tools (choose one)", valueIT: 'Strumenti da Fabbro, da Birraio o da Muratore (scegline uno)' },
    { type: 'language', value: 'Dwarvish', valueIT: 'Nanico' },
  ],
  languages: ['Common', 'Dwarvish'],
  languagesIT: ['Comune', 'Nanico'],
  subraces: [
    {
      id: 'hill-dwarf',
      name: 'Hill Dwarf',
      nameIT: 'Nano delle Colline',
      abilityBonuses: [
        { ability: 'WIS', value: 1 },
      ],
      features: [
        {
          name: 'Dwarven Toughness',
          nameIT: 'Robustezza Nanica',
          description: 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.',
          descriptionIT: 'Il tuo massimo di punti ferita aumenta di 1, e aumenta di 1 ogni volta che guadagni un livello.',
          level: 1,
        },
      ],
      proficiencies: [],
    },
    {
      id: 'mountain-dwarf',
      name: 'Mountain Dwarf',
      nameIT: 'Nano delle Montagne',
      abilityBonuses: [
        { ability: 'STR', value: 2 },
      ],
      features: [],
      proficiencies: [
        { type: 'armor', value: 'Light Armor', valueIT: 'Armatura Leggera' },
        { type: 'armor', value: 'Medium Armor', valueIT: 'Armatura Media' },
      ],
    },
  ],
}
