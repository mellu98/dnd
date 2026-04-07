import type { Race } from '../../types'

export const halfElf: Race = {
  id: 'half-elf',
  name: 'Half-Elf',
  nameIT: 'Mezzelfo',
  speed: 30,
  size: 'Medium',
  sizeIT: 'Media',
  darkvision: 60,
  abilityBonuses: [
    { ability: 'CHA', value: 2 },
  ],
  chooseAbilityBonuses: {
    choose: 2,
    value: 1,
    exclude: ['CHA'],
  },
  features: [
    {
      name: 'Fey Ancestry',
      nameIT: 'Retaggio Fatato',
      description: 'You have advantage on saving throws against being charmed, and magic can\'t put you to sleep.',
      descriptionIT: 'Hai vantaggio ai tiri salvezza contro l\'essere affascinato e la magia non può addormentarti.',
      level: 1,
    },
    {
      name: 'Skill Versatility',
      nameIT: 'Versatilità nelle Abilità',
      description: 'You gain proficiency in two skills of your choice.',
      descriptionIT: 'Ottieni competenza in due abilità a tua scelta.',
      level: 1,
    },
  ],
  proficiencies: [],
  languages: ['Common', 'Elvish', 'One extra language of your choice'],
  languagesIT: ['Comune', 'Elfico', 'Una lingua extra a scelta'],
  subraces: [],
}
