import type { ClassDefinition } from '../../types'

export const sorcerer: ClassDefinition = {
  id: 'sorcerer',
  name: 'Sorcerer',
  nameIT: 'Stregone',
  hitDie: 'd6',
  primaryAbility: ['CHA'],
  savingThrows: ['CON', 'CHA'],
  skillChoices: {
    choose: 2,
    from: ['arcana', 'deception', 'insight', 'intimidation', 'persuasion', 'religion'],
  },
  armorProficiencies: [],
  weaponProficiencies: [
    { type: 'weapon', value: 'Daggers, Darts, Slings, Quarterstaffs, Light Crossbows', valueIT: 'Pugnali, Dardi, Fionde, Bastoni, Balestre Leggere' },
  ],
  toolProficiencies: [],
  features: [
    {
      name: 'Spellcasting',
      nameIT: 'Incantesimi',
      description: 'You can cast sorcerer spells using Charisma as your spellcasting ability.',
      descriptionIT: 'Puoi lanciare incantesimi da stregone usando Carisma come caratteristica da incantatore.',
      level: 1,
    },
    {
      name: 'Sorcerous Origin',
      nameIT: 'Origine Stregonesca',
      description: 'Choose a sorcerous origin which describes the source of your innate magical power.',
      descriptionIT: 'Scegli un\'origine stregonesca che descrive la fonte del tuo potere magico innato.',
      level: 1,
    },
    {
      name: 'Font of Magic',
      nameIT: 'Fonte di Magia',
      description: 'You gain sorcery points equal to your sorcerer level. You can use them to create spell slots or fuel metamagic.',
      descriptionIT: 'Ottieni punti stregoneria pari al tuo livello da stregone. Puoi usarli per creare slot incantesimo o alimentare la metamagia.',
      level: 2,
    },
    {
      name: 'Metamagic',
      nameIT: 'Metamagia',
      description: 'You gain the ability to twist your spells to suit your needs. You choose two Metamagic options, such as Empowered Spell, Quickened Spell, or Twinned Spell.',
      descriptionIT: 'Ottieni la capacita di modificare i tuoi incantesimi. Scegli due opzioni di Metamagia, come Incantesimo Potenziato, Incantesimo Rapido o Incantesimo Gemello.',
      level: 3,
    },
  ],
  subclasses: [
    {
      id: 'draconic',
      name: 'Draconic Bloodline',
      nameIT: 'Stirpe Draconica',
      features: [
        {
          name: 'Dragon Ancestor',
          nameIT: 'Antenato Draconico',
          description: 'You choose one type of dragon as your ancestor. You can speak, read, and write Draconic, and your proficiency bonus is doubled for Charisma checks with dragons.',
          descriptionIT: 'Scegli un tipo di drago come antenato. Puoi parlare, leggere e scrivere Draconico, e il tuo bonus di competenza e raddoppiato per le prove di Carisma con i draghi.',
          level: 1,
        },
        {
          name: 'Draconic Resilience',
          nameIT: 'Resilienza Draconica',
          description: 'Your hit point maximum increases by 1 for each sorcerer level, and when not wearing armor your AC equals 13 + DEX modifier.',
          descriptionIT: 'Il tuo massimo di PF aumenta di 1 per ogni livello da stregone, e quando non indossi armatura la tua CA e pari a 13 + modificatore di DES.',
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
    ['Dungeoneer\'s pack', 'Explorer\'s pack'],
    ['Two daggers'],
  ],
}
