import type { ClassDefinition } from '../../types'

export const druid: ClassDefinition = {
  id: 'druid',
  name: 'Druid',
  nameIT: 'Druido',
  hitDie: 'd8',
  primaryAbility: ['WIS'],
  savingThrows: ['INT', 'WIS'],
  skillChoices: {
    choose: 2,
    from: ['arcana', 'animal_handling', 'insight', 'medicine', 'nature', 'perception', 'religion', 'survival'],
  },
  armorProficiencies: [
    { type: 'armor', value: 'Light Armor (nonmetal)', valueIT: 'Armature Leggere (non metalliche)' },
    { type: 'armor', value: 'Medium Armor (nonmetal)', valueIT: 'Armature Medie (non metalliche)' },
    { type: 'armor', value: 'Shields (nonmetal)', valueIT: 'Scudi (non metallici)' },
  ],
  weaponProficiencies: [
    { type: 'weapon', value: 'Clubs, Daggers, Darts, Javelins, Maces, Quarterstaffs, Scimitars, Sickles, Slings, Spears', valueIT: 'Clave, Pugnali, Dardi, Giavellotti, Mazze, Bastoni, Scimitarre, Falcetti, Fionde, Lance' },
  ],
  toolProficiencies: [
    { type: 'tool', value: 'Herbalism Kit', valueIT: 'Kit da Erborista' },
  ],
  features: [
    {
      name: 'Druidic',
      nameIT: 'Druidico',
      description: 'You know Druidic, the secret language of druids. You can speak it and use it to leave hidden messages.',
      descriptionIT: 'Conosci il Druidico, il linguaggio segreto dei druidi. Puoi parlarlo e usarlo per lasciare messaggi nascosti.',
      level: 1,
    },
    {
      name: 'Spellcasting',
      nameIT: 'Incantesimi',
      description: 'You can cast druid spells using Wisdom as your spellcasting ability.',
      descriptionIT: 'Puoi lanciare incantesimi da druido usando Saggezza come caratteristica da incantatore.',
      level: 1,
    },
    {
      name: 'Wild Shape',
      nameIT: 'Forma Selvatica',
      description: 'You can use your action to magically assume the shape of a beast that you have seen before, twice per short rest.',
      descriptionIT: 'Puoi usare la tua azione per assumere magicamente la forma di una bestia che hai visto prima, due volte per riposo breve.',
      level: 2,
    },
  ],
  subclasses: [
    {
      id: 'land',
      name: 'Circle of the Land',
      nameIT: 'Circolo della Terra',
      features: [
        {
          name: 'Bonus Cantrip',
          nameIT: 'Trucchetto Bonus',
          description: 'You learn one additional druid cantrip of your choice.',
          descriptionIT: 'Impari un trucchetto da druido aggiuntivo a tua scelta.',
          level: 2,
        },
        {
          name: 'Natural Recovery',
          nameIT: 'Recupero Naturale',
          description: 'During a short rest, you can recover expended spell slots with a combined level equal to or less than half your druid level (rounded up).',
          descriptionIT: 'Durante un riposo breve, puoi recuperare slot incantesimo spesi con un livello combinato pari o inferiore alla meta del tuo livello da druido (arrotondato per eccesso).',
          level: 2,
        },
      ],
      proficiencies: [],
    },
  ],
  subclassLevel: 2,
  spellcasting: { ability: 'WIS', knownType: 'prepared' },
  startingEquipment: [
    ['Wooden shield', 'Any simple weapon'],
    ['Scimitar', 'Any simple melee weapon'],
    ['Leather armor', 'Explorer\'s pack', 'Druidic focus'],
  ],
}
