import type { ClassDefinition } from '../../types'

export const wizard: ClassDefinition = {
  id: 'wizard',
  name: 'Wizard',
  nameIT: 'Mago',
  hitDie: 'd6',
  primaryAbility: ['INT'],
  savingThrows: ['INT', 'WIS'],
  skillChoices: {
    choose: 2,
    from: ['arcana', 'history', 'insight', 'investigation', 'medicine', 'religion'],
  },
  armorProficiencies: [],
  weaponProficiencies: [
    {
      type: 'weapon',
      value: 'Daggers, Darts, Slings, Quarterstaffs, Light Crossbows',
      valueIT: 'Pugnali, Dardi, Fionde, Bastoni, Balestre Leggere',
    },
  ],
  toolProficiencies: [],
  features: [
    {
      name: 'Spellcasting',
      nameIT: 'Incantesimi',
      description:
        'You can cast wizard spells using Intelligence as your spellcasting ability. You prepare spells from your spellbook each day.',
      descriptionIT:
        'Puoi lanciare incantesimi da mago usando Intelligenza come caratteristica da incantatore. Prepari gli incantesimi dal tuo libro degli incantesimi ogni giorno.',
      level: 1,
    },
    {
      name: 'Arcane Recovery',
      nameIT: 'Recupero Arcano',
      description:
        'Once per day during a short rest, you can recover expended spell slots with a combined level equal to or less than half your wizard level (rounded up).',
      descriptionIT:
        'Una volta al giorno durante un riposo breve, puoi recuperare slot incantesimo spesi con un livello combinato pari o inferiore alla meta del tuo livello da mago (arrotondato per eccesso).',
      level: 1,
    },
    {
      name: 'Ability Score Improvement',
      nameIT: 'Miglioramento dei Punteggi di Caratteristica',
      level: 4,
      type: 'ASI',
    },
    {
      name: 'Ability Score Improvement',
      nameIT: 'Miglioramento dei Punteggi di Caratteristica',
      level: 8,
      type: 'ASI',
    },
    {
      name: 'Ability Score Improvement',
      nameIT: 'Miglioramento dei Punteggi di Caratteristica',
      level: 12,
      type: 'ASI',
    },
    {
      name: 'Ability Score Improvement',
      nameIT: 'Miglioramento dei Punteggi di Caratteristica',
      level: 16,
      type: 'ASI',
    },
    {
      name: 'Ability Score Improvement',
      nameIT: 'Miglioramento dei Punteggi di Caratteristica',
      level: 19,
      type: 'ASI',
    },
  ],
  subclasses: [
    {
      id: 'evocation',
      name: 'School of Evocation',
      nameIT: 'Scuola di Evocazione',
      features: [
        {
          name: 'Evocation Savant',
          nameIT: "Sapiente dell'Evocazione",
          description: 'The gold and time you must spend to copy an evocation spell into your spellbook is halved.',
          descriptionIT:
            "L'oro e il tempo necessari per copiare un incantesimo di evocazione nel tuo libro degli incantesimi sono dimezzati.",
          level: 2,
        },
        {
          name: 'Sculpt Spells',
          nameIT: 'Scolpire Incantesimi',
          description:
            'You can create pockets of relative safety within the effects of your evocation spells. Chosen creatures automatically succeed on saving throws against the spell and take no damage.',
          descriptionIT:
            "Puoi creare zone di sicurezza relativa all'interno degli effetti dei tuoi incantesimi di evocazione. Le creature scelte hanno automaticamente successo nei tiri salvezza e non subiscono danni.",
          level: 2,
        },
      ],
      proficiencies: [],
    },
    {
      id: 'abjuration',
      name: 'School of Abjuration',
      nameIT: 'Scuola di Abiurazione',
      features: [
        {
          name: 'Abjuration Savant',
          nameIT: 'Sapiente dell\'Abiurazione',
          description: 'The gold and time you must spend to copy an abjuration spell into your spellbook is halved.',
          descriptionIT: 'L\'oro e il tempo necessari per copiare un incantesimo di abiurazione nel tuo libro degli incantesimi sono dimezzati.',
          level: 2,
        },
        {
          name: 'Arcane Ward',
          nameIT: 'Ward Arcano',
          description: 'You can weave magic around yourself for protection. The ward has HP equal to twice your wizard level + your INT modifier.',
          descriptionIT: 'Puoi intrecciare magia attorno a te per protezione. Il ward ha PF pari al doppio del tuo livello da mago + il tuo modificatore di INT.',
          level: 2,
        },
      ],
      proficiencies: [],
    },
    {
      id: 'conjuration',
      name: 'School of Conjuration',
      nameIT: 'Scuola di Congiurazione',
      features: [
        {
          name: 'Conjuration Savant',
          nameIT: 'Sapiente della Congiurazione',
          description: 'The gold and time you must spend to copy a conjuration spell into your spellbook is halved.',
          descriptionIT: 'L\'oro e il tempo necessari per copiare un incantesimo di congiurazione nel tuo libro degli incantesimi sono dimezzati.',
          level: 2,
        },
        {
          name: 'Minor Conjuration',
          nameIT: 'Congiurazione Minore',
          description: 'You can use your action to conjure an invisible, inanimate object within 10 feet that is 3 feet or smaller and weighs no more than 10 pounds.',
          descriptionIT: 'Puoi usare la tua azione per congiurare un oggetto inanimato e invisibile entro 3 metri che sia di 90 cm o piu piccolo e pesi non piu di 4,5 kg.',
          level: 2,
        },
      ],
      proficiencies: [],
    },
    {
      id: 'divination',
      name: 'School of Divination',
      nameIT: 'Scuola di Divinazione',
      features: [
        {
          name: 'Divination Savant',
          nameIT: 'Sapiente della Divinazione',
          description: 'The gold and time you must spend to copy a divination spell into your spellbook is halved.',
          descriptionIT: 'L\'oro e il tempo necessari per copiare un incantesimo di divinazione nel tuo libro degli incantesimi sono dimezzati.',
          level: 2,
        },
        {
          name: 'Portent',
          nameIT: 'Presagio',
          description: 'You gain the ability to peer into the future. Roll 2d20 at the end of a long rest and record the results to replace future attack rolls, saving throws, or ability checks.',
          descriptionIT: 'Ottieni la capacita di scrutare nel futuro. Tira 2d20 alla fine di un riposo lungo e registra i risultati per sostituire tiri per colpire, tiri salvezza o prove di caratteristica futuri.',
          level: 2,
        },
      ],
      proficiencies: [],
    },
    {
      id: 'illusion',
      name: 'School of Illusion',
      nameIT: 'Scuola di Illusione',
      features: [
        {
          name: 'Illusion Savant',
          nameIT: 'Sapiente dell\'Illusione',
          description: 'The gold and time you must spend to copy an illusion spell into your spellbook is halved.',
          descriptionIT: 'L\'oro e il tempo necessari per copiare un incantesimo di illusione nel tuo libro degli incantesimi sono dimezzati.',
          level: 2,
        },
        {
          name: 'Improved Minor Illusion',
          nameIT: 'Illusione Minore Migliorata',
          description: 'You learn the minor illusion cantrip. When casting it, you can create both a sound and an image simultaneously.',
          descriptionIT: 'Impari il trucchetto illusione minore. Quando lo lanci, puoi creare contemporaneamente sia un suono che un\'immagine.',
          level: 2,
        },
      ],
      proficiencies: [],
    },
    {
      id: 'necromancy',
      name: 'School of Necromancy',
      nameIT: 'Scuola di Necromanzia',
      features: [
        {
          name: 'Necromancy Savant',
          nameIT: 'Sapiente della Necromanzia',
          description: 'The gold and time you must spend to copy a necromancy spell into your spellbook is halved.',
          descriptionIT: 'L\'oro e il tempo necessari per copiare un incantesimo di necromanzia nel tuo libro degli incantesimi sono dimezzati.',
          level: 2,
        },
        {
          name: 'Grim Harvest',
          nameIT: 'Raccolto Funesto',
          description: 'When you kill one or more creatures with a spell of 1st level or higher, you regain hit points equal to twice the spell\'s level (or three times for necromancy spells).',
          descriptionIT: 'Quando uccidi una o piu creature con un incantesimo di 1° livello o superiore, recuperi PF pari al doppio del livello dell\'incantesimo (o il triplo per incantesimi di necromanzia).',
          level: 2,
        },
      ],
      proficiencies: [],
    },
  ],
  subclassLevel: 2,
  spellcasting: { ability: 'INT', knownType: 'all' },
  // PHB 2024 Wizard spell slot table (index 0 = 1st-level slots, etc.)
  spellSlotTable: {
    1: [2],
    2: [3],
    3: [4, 2],
    4: [4, 3],
    5: [4, 3, 2],
    6: [4, 3, 3],
    7: [4, 3, 3, 1],
    8: [4, 3, 3, 2],
    9: [4, 3, 3, 3, 1],
    10: [4, 3, 3, 3, 2],
    11: [4, 3, 3, 3, 2, 1],
    12: [4, 3, 3, 3, 2, 1],
    13: [4, 3, 3, 3, 2, 1, 1],
    14: [4, 3, 3, 3, 2, 1, 1],
    15: [4, 3, 3, 3, 2, 1, 1, 1],
    16: [4, 3, 3, 3, 2, 1, 1, 1],
    17: [4, 3, 3, 3, 2, 1, 1, 1, 1],
    18: [4, 3, 3, 3, 3, 1, 1, 1, 1],
    19: [4, 3, 3, 3, 3, 2, 1, 1, 1],
    20: [4, 3, 3, 3, 3, 2, 2, 1, 1],
  },
  startingEquipment: [
    ['Quarterstaff', 'Dagger'],
    ['Component pouch', 'Arcane focus'],
    ["Scholar's pack", "Explorer's pack"],
    ['Spellbook'],
  ],
}
