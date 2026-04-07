import type { ClassDefinition } from '../../types'

export const paladin: ClassDefinition = {
  id: 'paladin',
  name: 'Paladin',
  nameIT: 'Paladino',
  hitDie: 'd10',
  primaryAbility: ['STR', 'CHA'],
  savingThrows: ['WIS', 'CHA'],
  skillChoices: {
    choose: 2,
    from: ['athletics', 'insight', 'intimidation', 'medicine', 'persuasion', 'religion'],
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
      name: 'Divine Sense',
      nameIT: 'Percezione del Divino',
      description: 'You can detect the presence of celestials, fiends, and undead within 60 feet, a number of times equal to 1 + CHA modifier per long rest.',
      descriptionIT: 'Puoi percepire la presenza di celestiali, demoni e non morti entro 18 metri, un numero di volte pari a 1 + modificatore di CAR per riposo lungo.',
      level: 1,
    },
    {
      name: 'Lay on Hands',
      nameIT: 'Imposizione delle Mani',
      description: 'You have a pool of healing power equal to your paladin level x 5. You can touch a creature and restore hit points from this pool.',
      descriptionIT: 'Hai una riserva di potere curativo pari al tuo livello da paladino x 5. Puoi toccare una creatura e ripristinare PF da questa riserva.',
      level: 1,
    },
    {
      name: 'Fighting Style',
      nameIT: 'Stile di Combattimento',
      description: 'You adopt a particular style of fighting as your specialty.',
      descriptionIT: 'Adotti uno stile di combattimento come specialita.',
      level: 2,
    },
    {
      name: 'Spellcasting',
      nameIT: 'Incantesimi',
      description: 'You can cast paladin spells using Charisma as your spellcasting ability.',
      descriptionIT: 'Puoi lanciare incantesimi da paladino usando Carisma come caratteristica da incantatore.',
      level: 2,
    },
    {
      name: 'Divine Smite',
      nameIT: 'Punizione Divina',
      description: 'When you hit with a melee weapon attack, you can expend a spell slot to deal extra 2d8 radiant damage (+1d8 per slot level above 1st, +1d8 vs undead/fiend).',
      descriptionIT: 'Quando colpisci con un attacco con arma da mischia, puoi spendere uno slot incantesimo per infliggere 2d8 danni radianti extra (+1d8 per livello dello slot sopra il 1°, +1d8 vs non morti/demoni).',
      level: 2,
    },
    {
      name: 'Divine Health',
      nameIT: 'Salute Divina',
      description: 'The divine magic flowing through you makes you immune to disease.',
      descriptionIT: 'La magia divina che scorre in te ti rende immune alle malattie.',
      level: 3,
    },
  ],
  subclasses: [
    {
      id: 'devotion',
      name: 'Oath of Devotion',
      nameIT: 'Giuramento di Devozione',
      features: [
        {
          name: 'Sacred Weapon',
          nameIT: 'Arma Sacra',
          description: 'As an action, you imbue one weapon with positive energy. For 1 minute, you add your CHA modifier to attack rolls with that weapon, and it emits bright light.',
          descriptionIT: 'Come azione, infondi un\'arma con energia positiva. Per 1 minuto, aggiungi il modificatore di CAR ai tiri per colpire con quell\'arma, e questa emette luce intensa.',
          level: 3,
        },
      ],
      proficiencies: [],
    },
  ],
  subclassLevel: 3,
  spellcasting: { ability: 'CHA', knownType: 'prepared' },
  startingEquipment: [
    ['A martial weapon + shield', 'Two martial weapons'],
    ['5 javelins', 'Any simple melee weapon'],
    ['Priest\'s pack', 'Explorer\'s pack'],
    ['Chain mail', 'Holy symbol'],
  ],
}
