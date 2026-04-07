import type { ClassDefinition } from '../../types'

export const rogue: ClassDefinition = {
  id: 'rogue',
  name: 'Rogue',
  nameIT: 'Ladro',
  hitDie: 'd8',
  primaryAbility: ['DEX'],
  savingThrows: ['DEX', 'INT'],
  skillChoices: {
    choose: 4,
    from: [
      'acrobatics',
      'athletics',
      'deception',
      'insight',
      'intimidation',
      'investigation',
      'perception',
      'performance',
      'persuasion',
      'sleight_of_hand',
      'stealth',
    ],
  },
  armorProficiencies: [{ type: 'armor', value: 'Light Armor', valueIT: 'Armature Leggere' }],
  weaponProficiencies: [
    { type: 'weapon', value: 'Simple Weapons', valueIT: 'Armi Semplici' },
    { type: 'weapon', value: 'Hand Crossbows', valueIT: 'Balestre a Mano' },
    { type: 'weapon', value: 'Longswords', valueIT: 'Spade Lunghe' },
    { type: 'weapon', value: 'Rapiers', valueIT: 'Stocchi' },
    { type: 'weapon', value: 'Shortswords', valueIT: 'Spade Corte' },
  ],
  toolProficiencies: [{ type: 'tool', value: "Thieves' Tools", valueIT: 'Arnesi da Scasso' }],
  features: [
    {
      name: 'Expertise',
      nameIT: 'Maestria',
      description:
        "Choose two of your skill proficiencies or one skill and thieves' tools. Your proficiency bonus is doubled for checks using them.",
      descriptionIT:
        'Scegli due competenze nelle abilita o una abilita e gli arnesi da scasso. Il tuo bonus di competenza e raddoppiato per le prove che le usano.',
      level: 1,
    },
    {
      name: 'Sneak Attack',
      nameIT: 'Attacco Furtivo',
      description:
        'Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage or an ally is within 5 feet of the target.',
      descriptionIT:
        'Una volta per turno, puoi infliggere 1d6 danni extra a una creatura che colpisci se hai vantaggio o un alleato e entro 1,5 metri dal bersaglio.',
      level: 1,
    },
    {
      name: "Thieves' Cant",
      nameIT: 'Gergo dei Ladri',
      description:
        "You know Thieves' Cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation.",
      descriptionIT:
        'Conosci il Gergo dei Ladri, un mix segreto di dialetto, gergo e codice che ti permette di nascondere messaggi in conversazioni apparentemente normali.',
      level: 1,
    },
    {
      name: 'Cunning Action',
      nameIT: 'Azione Astuta',
      description: 'You can take a bonus action on each of your turns to Dash, Disengage, or Hide.',
      descriptionIT: "Puoi compiere un'azione bonus in ogni tuo turno per Scattare, Svincolarti o Nasconderti.",
      level: 2,
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
      level: 10,
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
      id: 'thief',
      name: 'Thief',
      nameIT: 'Furfante',
      features: [
        {
          name: 'Fast Hands',
          nameIT: 'Mani Veloci',
          description:
            "You can use Cunning Action to make a Sleight of Hand check, use thieves' tools to disarm a trap or open a lock, or take the Use an Object action.",
          descriptionIT:
            "Puoi usare Azione Astuta per effettuare una prova di Rapidita di Mano, usare gli arnesi da scasso o compiere l'azione Usare un Oggetto.",
          level: 3,
        },
        {
          name: 'Second-Story Work',
          nameIT: 'Lavoro al Secondo Piano',
          description:
            'You gain the ability to climb faster than normal; climbing no longer costs you extra movement. Additionally, when you make a running jump, the distance increases by a number of feet equal to your DEX modifier.',
          descriptionIT:
            'Puoi arrampicarti piu velocemente del normale; arrampicarti non costa piu movimento extra. Inoltre, quando fai un salto in corsa, la distanza aumenta di un numero di piedi pari al tuo modificatore di DES.',
          level: 3,
        },
      ],
      proficiencies: [],
    },
    {
      id: 'assassin',
      name: 'Assassin',
      nameIT: 'Assassino',
      features: [
        {
          name: 'Bonus Proficiencies',
          nameIT: 'Competenze Bonus',
          description: 'You gain proficiency with the disguise kit and the poisoner\'s kit.',
          descriptionIT: 'Ottieni competenza con il kit da travestimento e il kit del fabbricante di veleni.',
          level: 3,
        },
        {
          name: 'Assassinate',
          nameIT: 'Assassinare',
          description: 'You have advantage on attack rolls against creatures that haven\'t taken a turn. Any hit against a surprised creature is a critical hit.',
          descriptionIT: 'Hai vantaggio sui tiri per colpire contro creature che non hanno ancora agito. Ogni colpo contro una creatura sorpresa e un colpo critico.',
          level: 3,
        },
      ],
      proficiencies: [],
    },
    {
      id: 'arcane-trickster',
      name: 'Arcane Trickster',
      nameIT: 'Imbroglione Arcano',
      features: [
        {
          name: 'Spellcasting',
          nameIT: 'Incantesimi',
          description: 'You learn to cast wizard spells using Intelligence as your spellcasting ability.',
          descriptionIT: 'Impari a lanciare incantesimi da mago usando Intelligenza come caratteristica da incantatore.',
          level: 3,
        },
        {
          name: 'Mage Hand Legerdemain',
          nameIT: 'Legerdemania di Mano del Mago',
          description: 'Your Mage Hand can perform sleight of hand, pick locks, disarm traps, and is invisible.',
          descriptionIT: 'La tua Mano del Mago puo compiere azioni di rapidita di mano, scassinare serrature, disattivare trappole ed e invisibile.',
          level: 3,
        },
      ],
      proficiencies: [],
    },
  ],
  subclassLevel: 3,
  startingEquipment: [
    ['Rapier', 'Shortsword'],
    ['Shortbow + 20 arrows', 'Shortsword'],
    ["Burglar's pack", "Dungeoneer's pack", "Explorer's pack"],
    ['Leather armor', 'Two daggers', "Thieves' tools"],
  ],
}
