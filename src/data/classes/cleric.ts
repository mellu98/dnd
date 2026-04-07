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
  weaponProficiencies: [
    { type: 'weapon', value: 'Simple Weapons', valueIT: 'Armi Semplici' },
  ],
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
      descriptionIT: 'Scegli un dominio legato alla tua divinita. Il dominio ti concede incantesimi e capacita aggiuntive.',
      level: 1,
    },
    {
      name: 'Channel Divinity',
      nameIT: 'Incanalare Divinita',
      description: 'You gain the ability to channel divine energy directly from your deity, using it to fuel magical effects. You can use Turn Undead and your domain\'s Channel Divinity option.',
      descriptionIT: 'Puoi incanalare l\'energia divina dalla tua divinita per alimentare effetti magici. Puoi usare Scacciare Non Morti e l\'opzione del tuo dominio.',
      level: 2,
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
          description: 'Your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points, the creature regains additional HP equal to 2 + the spell\'s level.',
          descriptionIT: 'I tuoi incantesimi di cura sono piu efficaci. Quando usi un incantesimo di 1° livello o superiore per ripristinare PF, la creatura recupera PF aggiuntivi pari a 2 + il livello dell\'incantesimo.',
          level: 1,
        },
      ],
      proficiencies: [
        { type: 'armor', value: 'Heavy Armor', valueIT: 'Armature Pesanti' },
      ],
    },
  ],
  subclassLevel: 1,
  spellcasting: { ability: 'WIS', knownType: 'prepared' },
  startingEquipment: [
    ['Mace', 'Warhammer'],
    ['Scale mail', 'Leather armor', 'Chain mail'],
    ['Light crossbow + 20 bolts', 'Any simple weapon'],
    ['Priest\'s pack', 'Explorer\'s pack'],
    ['Shield', 'Holy symbol'],
  ],
}
