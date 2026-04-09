import type { Species } from '../../types'

export const dwarf: Species = {
  id: 'dwarf',
  name: 'Dwarf',
  nameIT: 'Nano',
  speed: 25,
  size: 'Medium',
  sizeIT: 'Media',
  darkvision: 60,
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
    { type: 'tool', value: "Smith's Tools", valueIT: 'Strumenti da Fabbro' },
    { type: 'tool', value: "Brewer's Supplies", valueIT: 'Strumenti da Birraio' },
    { type: 'tool', value: "Mason's Tools", valueIT: 'Strumenti da Muratore' },
    { type: 'language', value: 'Dwarvish', valueIT: 'Nanico' },
  ],
  languages: ['Common', 'Dwarvish'],
  languagesIT: ['Comune', 'Nanico'],
  variants: [
    {
      id: 'hill-dwarf',
      name: 'Hill Dwarf',
      nameIT: 'Nano delle Colline',
      features: [
        {
          name: 'Dwarven Toughness',
          nameIT: 'Robustezza Nanica',
          description: 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.',
          descriptionIT: 'Il tuo massimo di punti ferita aumenta di 1, e aumenta di 1 ogni volta che guadagni un livello.',
          level: 1,
        },
      ],
    },
    {
      id: 'mountain-dwarf',
      name: 'Mountain Dwarf',
      nameIT: 'Nano delle Montagne',
      features: [
        {
          name: 'Dwarven Armor Training',
          nameIT: 'Addestramento Armatura Nanica',
          description: 'You gain proficiency with light and medium armor.',
          descriptionIT: 'Ottieni competenza con armature leggere e medie.',
          level: 1,
        },
      ],
      proficiencies: [
        { type: 'armor', value: 'Light Armor', valueIT: 'Armature Leggere' },
        { type: 'armor', value: 'Medium Armor', valueIT: 'Armature Medie' },
      ],
    },
  ],
}
