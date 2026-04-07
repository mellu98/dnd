import type { Species } from '../../types'

export const halfElf: Species = {
  id: 'half-elf',
  name: 'Half-Elf',
  nameIT: 'Mezzelfo',
  speed: 30,
  size: 'Medium',
  sizeIT: 'Media',
  darkvision: 60,
  features: [
    {
      name: 'Fey Ancestry',
      nameIT: 'Retaggio Fatato',
      description: 'You have advantage on saving throws against being charmed, and magic can\'t put you to sleep.',
      descriptionIT: 'Hai vantaggio ai tiri salvezza contro l\'essere affascinato e la magia non può addormentarti.',
      level: 1,
    },
  ],
  proficiencies: [],
  languages: ['Common', 'Elvish'],
  languagesIT: ['Comune', 'Elfico'],
  variants: [],
}
