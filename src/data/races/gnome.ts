import type { Species } from '../../types'

export const gnome: Species = {
  id: 'gnome',
  name: 'Gnome',
  nameIT: 'Gnomo',
  speed: 25,
  size: 'Small',
  sizeIT: 'Piccola',
  darkvision: 60,
  features: [
    {
      name: 'Gnome Cunning',
      nameIT: 'Astuzia Gnomesca',
      description: 'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.',
      descriptionIT: 'Hai vantaggio a tutti i tiri salvezza su Intelligenza, Saggezza e Carisma contro la magia.',
      level: 1,
    },
  ],
  proficiencies: [],
  languages: ['Common', 'Gnomish'],
  languagesIT: ['Comune', 'Gnomesco'],
  variants: [
    {
      id: 'forest-gnome',
      name: 'Forest Gnome',
      nameIT: 'Gnomo delle Foreste',
      features: [
        {
          name: 'Natural Illusionist',
          nameIT: 'Illusionista Naturale',
          description: 'You know the minor illusion cantrip. Intelligence is your spellcasting ability for it.',
          descriptionIT: 'Conosci il trucchetto illusione minore. Intelligenza è la tua caratteristica da incantatore.',
          level: 1,
        },
        {
          name: 'Speak with Small Beasts',
          nameIT: 'Parlare con le Piccole Bestie',
          description: 'Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts.',
          descriptionIT: 'Attraverso suoni e gesti, puoi comunicare idee semplici con bestie di taglia Piccola o inferiore.',
          level: 1,
        },
      ],
    },
    {
      id: 'rock-gnome',
      name: 'Rock Gnome',
      nameIT: 'Gnomo delle Rocce',
      features: [
        {
          name: "Artificer's Lore",
          nameIT: 'Sapere dell’Artefice',
          description: 'Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you add double your proficiency bonus.',
          descriptionIT: 'Quando effettui una prova di Intelligenza (Storia) relativa a oggetti magici, alchemici o tecnologici, aggiungi il doppio del tuo bonus di competenza.',
          level: 1,
        },
        {
          name: 'Tinker',
          nameIT: 'Inventore',
          description: 'You have proficiency with tinker’s tools and can use them to assemble tiny clockwork devices.',
          descriptionIT: 'Hai competenza con gli strumenti da inventore e puoi usarli per assemblare minuscoli congegni a orologeria.',
          level: 1,
        },
      ],
      proficiencies: [
        { type: 'tool', value: "Tinker's Tools", valueIT: 'Strumenti da Inventore' },
      ],
    },
  ],
}
