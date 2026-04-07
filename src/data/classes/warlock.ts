import type { ClassDefinition } from '../../types'

export const warlock: ClassDefinition = {
  id: 'warlock',
  name: 'Warlock',
  nameIT: 'Warlock',
  hitDie: 'd8',
  primaryAbility: ['CHA'],
  savingThrows: ['WIS', 'CHA'],
  skillChoices: {
    choose: 2,
    from: ['arcana', 'deception', 'history', 'intimidation', 'investigation', 'nature', 'religion'],
  },
  armorProficiencies: [
    { type: 'armor', value: 'Light Armor', valueIT: 'Armature Leggere' },
  ],
  weaponProficiencies: [
    { type: 'weapon', value: 'Simple Weapons', valueIT: 'Armi Semplici' },
  ],
  toolProficiencies: [],
  features: [
    {
      name: 'Otherworldly Patron',
      nameIT: 'Patrono Ultraterreno',
      description: 'You have struck a bargain with an otherworldly being. Your patron grants you features at 1st level and additional features later.',
      descriptionIT: 'Hai stretto un patto con un essere ultraterreno. Il tuo patrono ti concede capacita al 1° livello e capacita aggiuntive in seguito.',
      level: 1,
    },
    {
      name: 'Pact Magic',
      nameIT: 'Magia del Patto',
      description: 'You can cast warlock spells using Charisma. Your spell slots are all the same level and recharge on a short rest.',
      descriptionIT: 'Puoi lanciare incantesimi da warlock usando Carisma. I tuoi slot incantesimo sono tutti dello stesso livello e si ricaricano con un riposo breve.',
      level: 1,
    },
    {
      name: 'Eldritch Invocations',
      nameIT: 'Invocazioni Arcane',
      description: 'You gain two eldritch invocations of your choice. They grant you special abilities, such as being able to cast certain spells at will.',
      descriptionIT: 'Ottieni due invocazioni arcane a tua scelta. Ti concedono abilita speciali, come poter lanciare certi incantesimi a volonta.',
      level: 2,
    },
    {
      name: 'Pact Boon',
      nameIT: 'Dono del Patto',
      description: 'Your otherworldly patron bestows a gift upon you: Pact of the Chain, Pact of the Blade, or Pact of the Tome.',
      descriptionIT: 'Il tuo patrono ultraterreno ti concede un dono: Patto della Catena, Patto della Lama, o Patto del Tomo.',
      level: 3,
    },
  ],
  subclasses: [
    {
      id: 'fiend',
      name: 'The Fiend',
      nameIT: 'Il Demone',
      features: [
        {
          name: 'Dark One\'s Blessing',
          nameIT: 'Benedizione dell\'Oscuro',
          description: 'When you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your CHA modifier + your warlock level.',
          descriptionIT: 'Quando riduci una creatura ostile a 0 PF, ottieni PF temporanei pari al tuo modificatore di CAR + il tuo livello da warlock.',
          level: 1,
        },
      ],
      proficiencies: [],
    },
  ],
  subclassLevel: 1,
  spellcasting: { ability: 'CHA', knownType: 'known' },
  startingEquipment: [
    ['Light crossbow + 20 bolts', 'Any simple weapon'],
    ['Component pouch', 'Arcane focus'],
    ['Scholar\'s pack', 'Dungeoneer\'s pack'],
    ['Leather armor', 'Any simple weapon', 'Two daggers'],
  ],
}
