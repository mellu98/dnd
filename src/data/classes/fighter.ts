import type { ClassDefinition } from '../../types'

export const fighter: ClassDefinition = {
  id: 'fighter',
  name: 'Fighter',
  nameIT: 'Guerriero',
  hitDie: 'd10',
  primaryAbility: ['STR'],
  savingThrows: ['STR', 'CON'],
  skillChoices: {
    choose: 2,
    from: [
      'acrobatics',
      'animal_handling',
      'athletics',
      'history',
      'insight',
      'intimidation',
      'perception',
      'survival',
    ],
  },
  armorProficiencies: [
    { type: 'armor', value: 'All Armor', valueIT: 'Tutte le Armature' },
    { type: 'armor', value: 'Shields', valueIT: 'Scudi' },
  ],
  weaponProficiencies: [
    { type: 'weapon', value: 'Simple Weapons', valueIT: 'Armi Semplici' },
    { type: 'weapon', value: 'Martial Weapons', valueIT: 'Armi da Guerra' },
  ],
  toolProficiencies: [],
  features: [
    {
      name: 'Fighting Style',
      nameIT: 'Stile di Combattimento',
      description:
        'You adopt a particular style of fighting as your specialty, such as Archery, Defense, Dueling, Great Weapon Fighting, Protection, or Two-Weapon Fighting.',
      descriptionIT:
        "Adotti uno stile di combattimento come specialita, come Tiro con l'Arco, Difesa, Duello, Combattimento con Arma a Due Mani, Protezione o Combattimento con Due Armi.",
      level: 1,
    },
    {
      name: 'Second Wind',
      nameIT: 'Secondo Vento',
      description:
        'You can use a bonus action to regain hit points equal to 1d10 + your fighter level, once per short rest.',
      descriptionIT:
        "Puoi usare un'azione bonus per recuperare PF pari a 1d10 + il tuo livello da guerriero, una volta per riposo breve.",
      level: 1,
    },
    {
      name: 'Action Surge',
      nameIT: 'Azione Impetuosa',
      description:
        'You can push yourself beyond your normal limits for a moment. You can take one additional action on your turn, once per short rest.',
      descriptionIT:
        "Puoi spingerti oltre i tuoi limiti normali. Puoi compiere un'azione aggiuntiva nel tuo turno, una volta per riposo breve.",
      level: 2,
    },
    {
      name: 'Ability Score Improvement',
      nameIT: 'Miglioramento dei Punteggi di Caratteristica',
      level: 4,
      type: 'ASI',
    },
    {
      name: 'Extra Attack',
      nameIT: 'Attacco Extra',
      description:
        'You can attack twice, instead of once, whenever you take the Attack action on your turn.',
      descriptionIT:
        'Puoi attaccare due volte, invece che una, ogni volta che compi l\'azione di Attacco nel tuo turno.',
      level: 5,
    },
    {
      name: 'Ability Score Improvement',
      nameIT: 'Miglioramento dei Punteggi di Caratteristica',
      level: 6,
      type: 'ASI',
    },
    {
      name: 'Ability Score Improvement',
      nameIT: 'Miglioramento dei Punteggi di Caratteristica',
      level: 8,
      type: 'ASI',
    },
    {
      name: 'Indomitable',
      nameIT: 'Indomito',
      description:
        'You can reroll a saving throw that you fail. You must use the new roll. Once per long rest.',
      descriptionIT:
        'Puoi ritirare un tiro salvezza che hai fallito. Devi usare il nuovo risultato. Una volta per riposo lungo.',
      level: 9,
    },
    {
      name: 'Extra Attack',
      nameIT: 'Attacco Extra',
      description:
        'You can attack three times, instead of twice, whenever you take the Attack action on your turn.',
      descriptionIT:
        'Puoi attaccare tre volte, invece che due, ogni volta che compi l\'azione di Attacco nel tuo turno.',
      level: 11,
    },
    {
      name: 'Indomitable',
      nameIT: 'Indomito',
      description:
        'You can use Indomitable twice between rests.',
      descriptionIT:
        'Puoi usare Indomito due volte tra un riposo e l\'altro.',
      level: 13,
    },
    {
      name: 'Ability Score Improvement',
      nameIT: 'Miglioramento dei Punteggi di Caratteristica',
      level: 12,
      type: 'ASI',
    },
    {
      name: 'Improved Second Wind',
      nameIT: 'Secondo Vento Migliorato',
      description:
        'When you use Second Wind, you can also add one superiority die to the damage of your next weapon attack on this turn.',
      descriptionIT:
        'Quando usi Secondo Vento, puoi anche aggiungere un dado di superiorita ai danni del tuo prossimo attacco con arma in questo turno.',
      level: 15,
    },
    {
      name: 'Ability Score Improvement',
      nameIT: 'Miglioramento dei Punteggi di Caratteristica',
      level: 14,
      type: 'ASI',
    },
    {
      name: 'Extra Attack',
      nameIT: 'Attacco Extra',
      description:
        'You can attack four times, instead of three, whenever you take the Attack action on your turn.',
      descriptionIT:
        'Puoi attaccare quattro volte, invece che tre, ogni volta che compi l\'azione di Attacco nel tuo turno.',
      level: 17,
    },
    {
      name: 'Indomitable',
      nameIT: 'Indomito',
      description:
        'You can use Indomitable three times between rests.',
      descriptionIT:
        'Puoi usare Indomito tre volte tra un riposo e l\'altro.',
      level: 17,
    },
    {
      name: 'Survive',
      nameIT: 'Sopravvivenza',
      description:
        'When you are below half your hit points and take damage, you can use your reaction to halve the damage.',
      descriptionIT:
        'Quando sei sotto meta dei tuoi punti ferita e subisci danni, puoi usare la tua reazione per dimezzarli.',
      level: 18,
    },
    {
      name: 'Ability Score Improvement',
      nameIT: 'Miglioramento dei Punteggi di Caratteristica',
      level: 16,
      type: 'ASI',
    },
    {
      name: 'Strike the Foe',
      nameIT: 'Colpisci il Nemico',
      description:
        'When you hit a creature with a weapon attack, you can deal extra damage equal to your fighter level.',
      descriptionIT:
        'Quando colpisci una creatura con un attacco con arma, puoi infliggere danni extra pari al tuo livello da guerriero.',
      level: 20,
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
      id: 'champion',
      name: 'Champion',
      nameIT: 'Campione',
      features: [
        {
          name: 'Improved Critical',
          nameIT: 'Critico Migliorato',
          description: 'Your weapon attacks score a critical hit on a roll of 19 or 20.',
          descriptionIT: 'I tuoi attacchi con arma ottengono un colpo critico con un tiro di 19 o 20.',
          level: 3,
        },
        {
          name: 'Remarkable Athlete',
          nameIT: 'Atleta Straordinario',
          description: 'You can add half your proficiency bonus (rounded up) to any STR, DEX, or CON check that does not already use it. You can add your full proficiency bonus to running long jump distance.',
          descriptionIT: 'Puoi aggiungere meta del tuo bonus di competenza (arrotondato per eccesso) a qualsiasi prova di FOR, DES o CON che non lo utilizzi gia. Puoi aggiungere il tuo bonus di competenza completo alla distanza del salto in lungo da corsa.',
          level: 6,
        },
        {
          name: 'Additional Fighting Style',
          nameIT: 'Stile di Combattimento Aggiuntivo',
          description: 'You can choose a second option from the Fighting Style class feature.',
          descriptionIT: 'Puoi scegliere una seconda opzione dal tratto di classe Stile di Combattimento.',
          level: 10,
        },
        {
          name: 'Superior Critical',
          nameIT: 'Critico Superiore',
          description: 'Your weapon attacks score a critical hit on a roll of 18-20.',
          descriptionIT: 'I tuoi attacchi con arma ottengono un colpo critico con un tiro di 18-20.',
          level: 15,
        },
        {
          name: 'Survivor',
          nameIT: 'Sopravvissuto',
          description: 'At the start of each of your turns, you regain hit points equal to 5 + your CON modifier if you have no more than half of your hit points left.',
          descriptionIT: 'All\'inizio di ciascuno dei tuoi turni, recuperi punti ferita pari a 5 + il tuo modificatore di COS se non hai piu di meta dei tuoi punti ferita.',
          level: 18,
        },
      ],
      proficiencies: [],
    },
    {
      id: 'battle-master',
      name: 'Battle Master',
      nameIT: 'Maestro di Battaglia',
      features: [
        {
          name: 'Combat Superiority',
          nameIT: 'Superiorita in Combattimento',
          description: 'You learn maneuvers and gain superiority dice (d8). You can use them to perform special combat techniques.',
          descriptionIT: 'Impari delle manovre e ottieni dadi di superiorita (d8). Puoi usarli per eseguire tecniche di combattimento speciali.',
          level: 3,
        },
        {
          name: 'Student of War',
          nameIT: 'Studente di Guerra',
          description: 'You gain proficiency with one type of artisan\'s tools of your choice.',
          descriptionIT: 'Ottieni competenza con un tipo di arnesi da artigiano a tua scelta.',
          level: 3,
        },
        {
          name: 'Know Your Enemy',
          nameIT: 'Conosci il Tuo Nemico',
          description: 'If you spend at least 1 minute observing or interacting with a creature outside combat, you learn certain information about its capabilities.',
          descriptionIT: 'Se passi almeno 1 minuto a osservare o interagire con una creatura fuori dal combattimento, apprendi alcune informazioni sulle sue capacita.',
          level: 6,
        },
        {
          name: 'Improved Combat Superiority',
          nameIT: 'Superiorita in Combattimento Migliorata',
          description: 'Your superiority dice turn from d8s into d10s.',
          descriptionIT: 'I tuoi dadi di superiorita da d8 diventano d10.',
          level: 10,
        },
        {
          name: 'Relentless',
          nameIT: 'Implacabile',
          description: 'When you roll initiative and have no superiority dice remaining, you regain 1 superiority die.',
          descriptionIT: 'Quando tiri iniziativa e non hai piu dadi di superiorita rimanenti, recuperi 1 dado di superiorita.',
          level: 15,
        },
        {
          name: 'Additional Maneuver',
          nameIT: 'Manovra Aggiuntiva',
          description: 'You learn two additional maneuvers of your choice. Your superiority dice increase to d12.',
          descriptionIT: 'Impari due manovre aggiuntive a tua scelta. I tuoi dadi di superiorita aumentano a d12.',
          level: 18,
        },
      ],
      proficiencies: [],
    },
    {
      id: 'eldritch-knight',
      name: 'Eldritch Knight',
      nameIT: 'Cavaliere Arcano',
      features: [
        {
          name: 'Spellcasting',
          nameIT: 'Incantesimi',
          description: 'You learn to cast wizard spells using Intelligence as your spellcasting ability.',
          descriptionIT: 'Impari a lanciare incantesimi da mago usando Intelligenza come caratteristica da incantatore.',
          level: 3,
        },
        {
          name: 'Weapon Bond',
          nameIT: 'Legame con l\'Arma',
          description: 'You can bond with a weapon, allowing you to summon it to your hand as a bonus action.',
          descriptionIT: 'Puoi legarti a un\'arma, permettendoti di evocarla nella tua mano come azione bonus.',
          level: 3,
        },
        {
          name: 'War Magic',
          nameIT: 'Magia di Guerra',
          description: 'When you use your action to cast a cantrip, you can make one weapon attack as a bonus action.',
          descriptionIT: 'Quando usi la tua azione per lanciare un trucchetto, puoi effettuare un attacco con arma come azione bonus.',
          level: 7,
        },
        {
          name: 'Eldritch Strike',
          nameIT: 'Colpo Arcano',
          description: 'When you hit a creature with a weapon attack, that creature has disadvantage on the next saving throw it makes against a spell you cast before the end of your next turn.',
          descriptionIT: 'Quando colpisci una creatura con un attacco con arma, quella creatura ha svantaggio sul prossimo tiro salvezza che effettua contro un incantesimo che lanci prima della fine del tuo prossimo turno.',
          level: 10,
        },
        {
          name: 'Improved War Magic',
          nameIT: 'Magia di Guerra Migliorata',
          description: 'When you use your action to cast a spell of 3rd level or lower, you can make one weapon attack as a bonus action.',
          descriptionIT: 'Quando usi la tua azione per lanciare un incantesimo di 3° livello o inferiore, puoi effettuare un attacco con arma come azione bonus.',
          level: 15,
        },
        {
          name: 'Arcane Charge',
          nameIT: 'Carica Arcana',
          description: 'You can teleport up to 30 feet to an unoccupied space you can see before or after you use your Action Surge.',
          descriptionIT: 'Puoi teletrasportarti fino a 9 metri in uno spazio non occupato che puoi vedere prima o dopo aver usato Azione Impetuosa.',
          level: 18,
        },
      ],
      proficiencies: [],
    },
  ],
  subclassLevel: 3,
  startingEquipment: [
    ['Chain mail', 'Leather armor + longbow + 20 arrows'],
    ['A martial weapon + shield', 'Two martial weapons'],
    ['Light crossbow + 20 bolts', 'Two handaxes'],
    ["Dungeoneer's pack", "Explorer's pack"],
  ],
}
