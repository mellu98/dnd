import type { ClassDefinition } from '../../types'

export const bard: ClassDefinition = {
  id: 'bard',
  name: 'Bard',
  nameIT: 'Bardo',
  hitDie: 'd8',
  primaryAbility: ['CHA'],
  savingThrows: ['DEX', 'CHA'],
  skillChoices: {
    choose: 3,
    from: ['acrobatics', 'animal_handling', 'arcana', 'athletics', 'deception', 'history', 'insight', 'intimidation', 'investigation', 'medicine', 'nature', 'perception', 'performance', 'persuasion', 'religion', 'sleight_of_hand', 'stealth', 'survival'],
  },
  armorProficiencies: [
    { type: 'armor', value: 'Light Armor', valueIT: 'Armature Leggere' },
  ],
  weaponProficiencies: [
    { type: 'weapon', value: 'Simple Weapons', valueIT: 'Armi Semplici' },
    { type: 'weapon', value: 'Hand Crossbows', valueIT: 'Balestre a Mano' },
    { type: 'weapon', value: 'Longswords', valueIT: 'Spade Lunghe' },
    { type: 'weapon', value: 'Rapiers', valueIT: 'Stocchi' },
    { type: 'weapon', value: 'Shortswords', valueIT: 'Spade Corte' },
  ],
  toolProficiencies: [
    { type: 'tool', value: 'Three musical instruments', valueIT: 'Tre strumenti musicali' },
  ],
  features: [
    {
      name: 'Spellcasting',
      nameIT: 'Incantesimi',
      description: 'You can cast bard spells using Charisma as your spellcasting ability.',
      descriptionIT: 'Puoi lanciare incantesimi da bardo usando Carisma come caratteristica da incantatore.',
      level: 1,
    },
    {
      name: 'Bardic Inspiration',
      nameIT: 'Ispirazione Bardica',
      description: 'You can inspire others with your words or music. A creature gains a Bardic Inspiration die (d6) to add to one ability check, attack roll, or saving throw.',
      descriptionIT: 'Puoi ispirare gli altri con le tue parole o musica. Una creatura ottiene un dado di Ispirazione Bardica (d6) da aggiungere a una prova di caratteristica, tiro per colpire o tiro salvezza.',
      level: 1,
    },
    {
      name: 'Jack of All Trades',
      nameIT: 'Tuttofare',
      description: 'You can add half your proficiency bonus to any ability check you make that doesn\'t already include your proficiency bonus.',
      descriptionIT: 'Puoi aggiungere meta del tuo bonus di competenza a qualsiasi prova di caratteristica che non includa gia il tuo bonus di competenza.',
      level: 2,
    },
    {
      name: 'Song of Rest',
      nameIT: 'Canto di Riposo',
      description: 'You can use soothing music or oration to help revitalize wounded allies during a short rest, granting an extra 1d6 healing.',
      descriptionIT: 'Puoi usare musica rilassante per aiutare gli alleati feriti durante un riposo breve, concedendo 1d6 cure extra.',
      level: 2,
    },
    {
      name: 'Expertise',
      nameIT: 'Maestria',
      description: 'Choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies.',
      descriptionIT: 'Scegli due delle tue competenze nelle abilita. Il tuo bonus di competenza e raddoppiato per le prove che usano quelle competenze.',
      level: 3,
    },
  ],
  subclasses: [
    {
      id: 'lore',
      name: 'College of Lore',
      nameIT: 'Collegio della Sapienza',
      features: [
        {
          name: 'Cutting Words',
          nameIT: 'Parole Taglienti',
          description: 'You can use your Bardic Inspiration to subtract the die from an enemy\'s attack roll, ability check, or damage roll.',
          descriptionIT: 'Puoi usare la tua Ispirazione Bardica per sottrarre il dado dal tiro per colpire, prova di caratteristica o tiro di danno di un nemico.',
          level: 3,
        },
      ],
      proficiencies: [],
    },
  ],
  subclassLevel: 3,
  spellcasting: { ability: 'CHA', knownType: 'known' },
  startingEquipment: [
    ['Rapier', 'Longsword', 'Any simple weapon'],
    ['Diplomat\'s pack', 'Entertainer\'s pack'],
    ['Lute', 'Any musical instrument'],
    ['Leather armor', 'Dagger'],
  ],
}
