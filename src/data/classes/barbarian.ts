import type { ClassDefinition } from '../../types'

export const barbarian: ClassDefinition = {
  id: 'barbarian',
  name: 'Barbarian',
  nameIT: 'Barbaro',
  hitDie: 'd12',
  primaryAbility: ['STR'],
  savingThrows: ['STR', 'CON'],
  skillChoices: {
    choose: 2,
    from: ['animal_handling', 'athletics', 'intimidation', 'nature', 'perception', 'survival'],
  },
  armorProficiencies: [
    { type: 'armor', value: 'Light Armor', valueIT: 'Armature Leggere' },
    { type: 'armor', value: 'Medium Armor', valueIT: 'Armature Medie' },
    { type: 'armor', value: 'Shields', valueIT: 'Scudi' },
  ],
  weaponProficiencies: [
    { type: 'weapon', value: 'Simple Weapons', valueIT: 'Armi Semplici' },
    { type: 'weapon', value: 'Martial Weapons', valueIT: 'Armi da Guerra' },
  ],
  toolProficiencies: [],
  features: [
    {
      name: 'Rage',
      nameIT: 'Ira',
      description: 'You can enter a rage as a bonus action, gaining bonus damage on STR attacks and resistance to bludgeoning, piercing, and slashing damage.',
      descriptionIT: 'Puoi entrare in uno stato d\'ira come azione bonus, ottenendo danni bonus agli attacchi di FOR e resistenza ai danni contundenti, perforanti e taglienti.',
      level: 1,
    },
    {
      name: 'Unarmored Defense',
      nameIT: 'Difesa Senza Armatura',
      description: 'While not wearing armor, your AC equals 10 + DEX modifier + CON modifier.',
      descriptionIT: 'Quando non indossi armatura, la tua CA e pari a 10 + modificatore di DES + modificatore di COS.',
      level: 1,
    },
    {
      name: 'Reckless Attack',
      nameIT: 'Attacco Avventato',
      description: 'You can throw aside all concern for defense to attack with fierce desperation. You gain advantage on STR attack rolls, but attack rolls against you have advantage.',
      descriptionIT: 'Puoi attaccare con vantaggio sui tiri per colpire di FOR, ma i tiri per colpire contro di te hanno vantaggio.',
      level: 2,
    },
    {
      name: 'Danger Sense',
      nameIT: 'Percezione del Pericolo',
      description: 'You have advantage on DEX saving throws against effects you can see.',
      descriptionIT: 'Hai vantaggio sui tiri salvezza di DES contro effetti che puoi vedere.',
      level: 2,
    },
  ],
  subclasses: [
    {
      id: 'berserker',
      name: 'Path of the Berserker',
      nameIT: 'Sentiero del Berserker',
      features: [
        {
          name: 'Frenzy',
          nameIT: 'Frenesia',
          description: 'You can go into a frenzy when you rage. You can make a single melee weapon attack as a bonus action on each of your turns.',
          descriptionIT: 'Puoi entrare in frenesia durante l\'ira. Puoi effettuare un attacco con arma da mischia come azione bonus in ogni tuo turno.',
          level: 3,
        },
      ],
      proficiencies: [],
    },
  ],
  subclassLevel: 3,
  startingEquipment: [
    ['Greataxe', 'Any martial weapon'],
    ['Two handaxes', 'Any simple weapon'],
    ['Explorer\'s pack', '4 javelins'],
  ],
}
