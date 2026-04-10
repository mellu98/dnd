import type { Species } from '../../types'

export const halfElf: Species = {
  id: 'half-elf',
  name: 'Half-Elf',
  nameIT: 'Mezzelfo',
  source: 'PHB 2014',
  isLegacy: true,
  speed: 30,
  size: 'Medium',
  sizeIT: 'Media',
  darkvision: 60,
  features: [
    {
      name: 'Fey Ancestry',
      nameIT: 'Retaggio Fatato',
      description: 'You have advantage on saving throws against being charmed, and magic can’t put you to sleep.',
      descriptionIT: 'Hai vantaggio ai tiri salvezza contro la condizione Affascinato e la magia non può farti addormentare.',
      level: 1,
      source: 'PHB 2014',
      isLegacy: true,
    },
    {
      name: 'Legacy Species',
      nameIT: 'Specie Legacy',
      description: 'Half-Elf is legacy content. The 2024 core species list doesn’t include Half-Elf among the base species options.',
      descriptionIT: 'Il Mezzelfo è contenuto legacy. Nel ruleset base 2024 il Mezzelfo non è incluso tra le specie principali selezionabili.',
      level: 1,
      source: 'PHB 2014',
      isLegacy: true,
    },
  ],
  proficiencies: [],
  languages: ['Common', 'Elvish'],
  languagesIT: ['Comune', 'Elfico'],
  variants: [],
}
