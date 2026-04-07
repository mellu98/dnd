import type { ClassDefinition } from '../../types'

export const cleric: ClassDefinition = {
  id: 'cleric',
  name: 'Cleric',
  nameIT: 'Chierico',
  hitDie: 'd8',
  primaryAbility: ['WIS'],
  savingThrows: ['WIS', 'CHA'],
  skillChoices: {
    choose: 2,
    from: ['history', 'insight', 'medicine', 'persuasion', 'religion'],
  },
  armorProficiencies: [
    { type: 'armor', value: 'Light Armor', valueIT: 'Armature Leggere' },
    { type: 'armor', value: 'Medium Armor', valueIT: 'Armature Medie' },
    { type: 'armor', value: 'Shields', valueIT: 'Scudi' },
  ],
  weaponProficiencies: [{ type: 'weapon', value: 'Simple Weapons', valueIT: 'Armi Semplici' }],
  toolProficiencies: [],
  features: [
    {
      name: 'Spellcasting',
      nameIT: 'Incantesimi',
      description: 'You can cast cleric spells using Wisdom as your spellcasting ability.',
      descriptionIT: 'Puoi lanciare incantesimi da chierico usando Saggezza come caratteristica da incantatore.',
      level: 1,
    },
    {
      name: 'Divine Domain',
      nameIT: 'Dominio Divino',
      description: 'Choose one domain related to your deity. Your domain grants you additional spells and features.',
      descriptionIT:
        'Scegli un dominio legato alla tua divinita. Il dominio ti concede incantesimi e capacita aggiuntive.',
      level: 1,
    },
    {
      name: 'Channel Divinity',
      nameIT: 'Incanalare Divinita',
      description:
        "You gain the ability to channel divine energy directly from your deity, using it to fuel magical effects. You can use Turn Undead and your domain's Channel Divinity option.",
      descriptionIT:
        "Puoi incanalare l'energia divina dalla tua divinita per alimentare effetti magici. Puoi usare Scacciare Non Morti e l'opzione del tuo dominio.",
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
      id: 'life',
      name: 'Life Domain',
      nameIT: 'Dominio della Vita',
      features: [
        {
          name: 'Disciple of Life',
          nameIT: 'Discepolo della Vita',
          description:
            "Your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points, the creature regains additional HP equal to 2 + the spell's level.",
          descriptionIT:
            "I tuoi incantesimi di cura sono piu efficaci. Quando usi un incantesimo di 1° livello o superiore per ripristinare PF, la creatura recupera PF aggiuntivi pari a 2 + il livello dell'incantesimo.",
          level: 1,
        },
      ],
      proficiencies: [{ type: 'armor', value: 'Heavy Armor', valueIT: 'Armature Pesanti' }],
    },
    {
      id: 'light',
      name: 'Light Domain',
      nameIT: 'Dominio della Luce',
      features: [
        {
          name: 'Warding Flare',
          nameIT: 'Bagliore Protettivo',
          description: 'When you are attacked by a creature within 30 feet, you can use your reaction to impose disadvantage on the attack roll.',
          descriptionIT: 'Quando vieni attaccato da una creatura entro 9 metri, puoi usare la tua reazione per dare svantaggio al tiro per colpire.',
          level: 1,
        },
      ],
      proficiencies: [],
    },
    {
      id: 'trickery',
      name: 'Trickery Domain',
      nameIT: 'Dominio dell\'Inganno',
      features: [
        {
          name: 'Blessing of the Trickster',
          nameIT: 'Benedizione dell\'Ingannatore',
          description: 'You can use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks for 1 hour.',
          descriptionIT: 'Puoi usare la tua azione per toccare una creatura consenziente diversa da te per darle vantaggio sulle prove di Destrezza (Furtività) per 1 ora.',
          level: 1,
        },
      ],
      proficiencies: [],
    },
    {
      id: 'war',
      name: 'War Domain',
      nameIT: 'Dominio della Guerra',
      features: [
        {
          name: 'War Priest',
          nameIT: 'Sacerdote Guerriero',
          description: 'You can make a weapon attack as a bonus action a number of times equal to your WIS modifier per long rest (minimum once).',
          descriptionIT: 'Puoi effettuare un attacco con arma come azione bonus per un numero di volte pari al tuo modificatore di SAG per riposo lungo (minimo una volta).',
          level: 1,
        },
      ],
      proficiencies: [
        { type: 'armor', value: 'Heavy Armor', valueIT: 'Armature Pesanti' },
        { type: 'weapon', value: 'Martial Weapons', valueIT: 'Armi da Guerra' },
      ],
    },
  ],
  subclassLevel: 1,
  spellcasting: { ability: 'WIS', knownType: 'prepared' },
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
    ['Mace', 'Warhammer'],
    ['Scale mail', 'Leather armor', 'Chain mail'],
    ['Light crossbow + 20 bolts', 'Any simple weapon'],
    ["Priest's pack", "Explorer's pack"],
    ['Shield', 'Holy symbol'],
  ],
}
