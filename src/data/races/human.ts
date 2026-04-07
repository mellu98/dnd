import type { Species } from '../../types'

export const human: Species = {
  id: 'human',
  name: 'Human',
  nameIT: 'Umano',
  speed: 30,
  size: 'Medium',
  sizeIT: 'Media',
  darkvision: 0,
  features: [
    {
      name: 'Heroic Surge',
      nameIT: 'Slancio Eroico',
      description: 'When you take the Attack action on your turn, you can make one additional attack as part of that action. Once you use this trait, you can\'t use it again until you finish a long rest.',
      descriptionIT: 'Quando compi l\'azione di Attacco nel tuo turno, puoi effettuare un attacco aggiuntivo come parte di quell\'azione. Una volta usato questo tratto, non puoi usarlo di nuovo finche non completi un riposo lungo.',
      level: 1,
    },
  ],
  proficiencies: [],
  languages: ['Common'],
  languagesIT: ['Comune'],
  variants: [],
}
