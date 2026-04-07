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
    // Hill Dwarf variant
    {
      name: 'Dwarven Toughness',
      nameIT: 'Robustezza Nanica',
      description: 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level (Hill Dwarf variant).',
      descriptionIT: 'Il tuo massimo di punti ferita aumenta di 1, e aumenta di 1 ogni volta che guadagni un livello (variante Nano delle Colline).',
      level: 1,
    },
    // Mountain Dwarf variant
    {
      name: 'Dwarven Armor Training',
      nameIT: 'Addestramento Armatura Nanica',
      description: 'You gain proficiency with light and medium armor (Mountain Dwarf variant).',
      descriptionIT: 'Ottieni competenza con armature leggere e medie (variante Nano delle Montagne).',
      level: 1,
    },
  ],
  proficiencies: [
    { type: 'weapon', value: 'Battleaxe', valueIT: 'Ascia da Battaglia' },
    { type: 'weapon', value: 'Handaxe', valueIT: 'Accetta' },
    { type: 'weapon', value: 'Light Hammer', valueIT: 'Martello Leggero' },
    { type: 'weapon', value: 'Warhammer', valueIT: 'Martello da Guerra' },
    { type: 'armor', value: 'Light Armor', valueIT: 'Armatura Leggera' },
    { type: 'armor', value: 'Medium Armor', valueIT: 'Armatura Media' },
    { type: 'tool', value: "Smith's Tools", valueIT: 'Strumenti da Fabbro' },
    { type: 'tool', value: "Brewer's Supplies", valueIT: 'Strumenti da Birraio' },
    { type: 'tool', value: "Mason's Tools", valueIT: 'Strumenti da Muratore' },
    { type: 'language', value: 'Dwarvish', valueIT: 'Nanico' },
  ],
  languages: ['Common', 'Dwarvish'],
  languagesIT: ['Comune', 'Nanico'],
  variants: ['Nano delle Colline', 'Nano delle Montagne'],
}
