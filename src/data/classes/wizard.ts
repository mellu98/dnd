import type { ClassDefinition } from '../../types'

export const wizard: ClassDefinition = {
  id: 'wizard',
  name: 'Wizard',
  nameIT: 'Mago',
  hitDie: 'd6',
  primaryAbility: ['INT'],
  savingThrows: ['INT', 'WIS'],
  skillChoices: {
    choose: 2,
    from: ['arcana', 'history', 'insight', 'investigation', 'medicine', 'religion'],
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
      description: 'You can cast wizard spells using Intelligence as your spellcasting ability. You prepare spells from your spellbook each day.',
      descriptionIT: 'Puoi lanciare incantesimi da mago usando Intelligenza come caratteristica da incantatore. Prepari gli incantesimi dal tuo libro degli incantesimi ogni giorno.',
      level: 1,
    },
    {
      name: 'Arcane Recovery',
      nameIT: 'Recupero Arcano',
      description: 'Once per day during a short rest, you can recover expended spell slots with a combined level equal to or less than half your wizard level (rounded up).',
      descriptionIT: 'Una volta al giorno durante un riposo breve, puoi recuperare slot incantesimo spesi con un livello combinato pari o inferiore alla meta del tuo livello da mago (arrotondato per eccesso).',
      level: 1,
    },
  ],
  subclasses: [
    {
      id: 'evocation',
      name: 'School of Evocation',
      nameIT: 'Scuola di Evocazione',
      features: [
        {
          name: 'Evocation Savant',
          nameIT: 'Sapiente dell\'Evocazione',
          description: 'The gold and time you must spend to copy an evocation spell into your spellbook is halved.',
          descriptionIT: 'L\'oro e il tempo necessari per copiare un incantesimo di evocazione nel tuo libro degli incantesimi sono dimezzati.',
          level: 2,
        },
        {
          name: 'Sculpt Spells',
          nameIT: 'Scolpire Incantesimi',
          description: 'You can create pockets of relative safety within the effects of your evocation spells. Chosen creatures automatically succeed on saving throws against the spell and take no damage.',
          descriptionIT: 'Puoi creare zone di sicurezza relativa all\'interno degli effetti dei tuoi incantesimi di evocazione. Le creature scelte hanno automaticamente successo nei tiri salvezza e non subiscono danni.',
          level: 2,
        },
      ],
      proficiencies: [],
    },
  ],
  subclassLevel: 2,
  spellcasting: { ability: 'INT', knownType: 'all' },
  startingEquipment: [
    ['Quarterstaff', 'Dagger'],
    ['Component pouch', 'Arcane focus'],
    ['Scholar\'s pack', 'Explorer\'s pack'],
    ['Spellbook'],
  ],
}
