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
    from: ['acrobatics', 'animal_handling', 'athletics', 'history', 'insight', 'intimidation', 'perception', 'survival'],
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
      description: 'You adopt a particular style of fighting as your specialty, such as Archery, Defense, Dueling, Great Weapon Fighting, Protection, or Two-Weapon Fighting.',
      descriptionIT: 'Adotti uno stile di combattimento come specialita, come Tiro con l\'Arco, Difesa, Duello, Combattimento con Arma a Due Mani, Protezione o Combattimento con Due Armi.',
      level: 1,
    },
    {
      name: 'Second Wind',
      nameIT: 'Secondo Vento',
      description: 'You can use a bonus action to regain hit points equal to 1d10 + your fighter level, once per short rest.',
      descriptionIT: 'Puoi usare un\'azione bonus per recuperare PF pari a 1d10 + il tuo livello da guerriero, una volta per riposo breve.',
      level: 1,
    },
    {
      name: 'Action Surge',
      nameIT: 'Azione Impetuosa',
      description: 'You can push yourself beyond your normal limits for a moment. You can take one additional action on your turn, once per short rest.',
      descriptionIT: 'Puoi spingerti oltre i tuoi limiti normali. Puoi compiere un\'azione aggiuntiva nel tuo turno, una volta per riposo breve.',
      level: 2,
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
      ],
      proficiencies: [],
    },
  ],
  subclassLevel: 3,
  startingEquipment: [
    ['Chain mail', 'Leather armor + longbow + 20 arrows'],
    ['A martial weapon + shield', 'Two martial weapons'],
    ['Light crossbow + 20 bolts', 'Two handaxes'],
    ['Dungeoneer\'s pack', 'Explorer\'s pack'],
  ],
}
