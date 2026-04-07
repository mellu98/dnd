import type { Race } from '../../types'

export const halfling: Race = {
  id: 'halfling',
  name: 'Halfling',
  nameIT: 'Halfling',
  speed: 25,
  size: 'Small',
  sizeIT: 'Piccola',
  darkvision: 0,
  abilityBonuses: [
    { ability: 'DEX', value: 2 },
  ],
  features: [
    {
      name: 'Lucky',
      nameIT: 'Fortunato',
      description: 'When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.',
      descriptionIT: 'Quando ottieni un 1 sul d20 per un tiro per colpire, una prova di caratteristica o un tiro salvezza, puoi ripetere il tiro e devi usare il nuovo risultato.',
      level: 1,
    },
    {
      name: 'Brave',
      nameIT: 'Coraggioso',
      description: 'You have advantage on saving throws against being frightened.',
      descriptionIT: 'Hai vantaggio ai tiri salvezza contro l\'essere spaventato.',
      level: 1,
    },
    {
      name: 'Halfling Nimbleness',
      nameIT: 'Agilità Halfling',
      description: 'You can move through the space of any creature that is of a size larger than yours.',
      descriptionIT: 'Puoi muoverti attraverso lo spazio di qualsiasi creatura di taglia superiore alla tua.',
      level: 1,
    },
  ],
  proficiencies: [],
  languages: ['Common', 'Halfling'],
  languagesIT: ['Comune', 'Halfling'],
  subraces: [
    {
      id: 'lightfoot',
      name: 'Lightfoot',
      nameIT: 'Piedelesto',
      abilityBonuses: [
        { ability: 'CHA', value: 1 },
      ],
      features: [
        {
          name: 'Naturally Stealthy',
          nameIT: 'Furtività Naturale',
          description: 'You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.',
          descriptionIT: 'Puoi tentare di nasconderti anche quando sei oscurato solo da una creatura di almeno una taglia superiore alla tua.',
          level: 1,
        },
      ],
      proficiencies: [],
    },
    {
      id: 'stout',
      name: 'Stout',
      nameIT: 'Tozzo',
      abilityBonuses: [
        { ability: 'CON', value: 1 },
      ],
      features: [
        {
          name: 'Stout Resilience',
          nameIT: 'Resilienza del Tozzo',
          description: 'You have advantage on saving throws against poison, and you have resistance against poison damage.',
          descriptionIT: 'Hai vantaggio ai tiri salvezza contro il veleno e resistenza ai danni da veleno.',
          level: 1,
        },
      ],
      proficiencies: [],
    },
  ],
}
