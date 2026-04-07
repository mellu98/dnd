import type { ClassDefinition } from '../../types'

export const ranger: ClassDefinition = {
  id: 'ranger',
  name: 'Ranger',
  nameIT: 'Ranger',
  hitDie: 'd10',
  primaryAbility: ['DEX', 'WIS'],
  savingThrows: ['STR', 'DEX'],
  skillChoices: {
    choose: 3,
    from: ['animal_handling', 'athletics', 'insight', 'investigation', 'nature', 'perception', 'stealth', 'survival'],
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
      name: 'Favored Enemy',
      nameIT: 'Nemico Prescelto',
      description: 'You have significant experience studying, tracking, and hunting a certain type of enemy. You have advantage on Survival checks to track them and on Intelligence checks to recall information about them.',
      descriptionIT: 'Hai esperienza nello studio e nella caccia di un certo tipo di nemico. Hai vantaggio sulle prove di Sopravvivenza per seguirne le tracce e sulle prove di Intelligenza per ricordare informazioni su di essi.',
      level: 1,
    },
    {
      name: 'Natural Explorer',
      nameIT: 'Esploratore Naturale',
      description: 'You are a master of navigating the natural world. You gain benefits when traveling through your favored terrain, including doubled proficiency for related checks.',
      descriptionIT: 'Sei un maestro nell\'esplorare il mondo naturale. Ottieni benefici quando viaggi nel tuo terreno prescelto, incluso bonus di competenza raddoppiato per prove correlate.',
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
      description: 'You can cast ranger spells using Wisdom as your spellcasting ability.',
      descriptionIT: 'Puoi lanciare incantesimi da ranger usando Saggezza come caratteristica da incantatore.',
      level: 2,
    },
  ],
  subclasses: [
    {
      id: 'hunter',
      name: 'Hunter',
      nameIT: 'Cacciatore',
      features: [
        {
          name: 'Hunter\'s Prey',
          nameIT: 'Preda del Cacciatore',
          description: 'You gain one of the following features: Colossus Slayer (extra 1d8 damage once per turn to injured target), Giant Killer (reaction attack when Large+ creature misses), or Horde Breaker (attack a second creature near the first).',
          descriptionIT: 'Ottieni una delle seguenti capacita: Uccisore di Colossi (1d8 danni extra una volta per turno a bersaglio ferito), Uccisore di Giganti (attacco di reazione quando una creatura Grande+ manca), o Spezzatore di Orde (attacca una seconda creatura vicina alla prima).',
          level: 3,
        },
      ],
      proficiencies: [],
    },
  ],
  subclassLevel: 3,
  spellcasting: { ability: 'WIS', knownType: 'known' },
  startingEquipment: [
    ['Scale mail', 'Leather armor'],
    ['Two shortswords', 'Two simple melee weapons'],
    ['Dungeoneer\'s pack', 'Explorer\'s pack'],
    ['Longbow', '20 arrows'],
  ],
}
