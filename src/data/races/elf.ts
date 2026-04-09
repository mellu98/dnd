import type { Species } from '../../types'

export const elf: Species = {
  id: 'elf',
  name: 'Elf',
  nameIT: 'Elfo',
  speed: 30,
  size: 'Medium',
  sizeIT: 'Media',
  darkvision: 60,
  features: [
    {
      name: 'Fey Ancestry',
      nameIT: 'Retaggio Fatato',
      description: 'You have advantage on saving throws against being charmed, and magic can\'t put you to sleep.',
      descriptionIT: 'Hai vantaggio ai tiri salvezza contro l\'essere affascinato e la magia non può addormentarti.',
      level: 1,
    },
    {
      name: 'Trance',
      nameIT: 'Trance',
      description: 'Elves do not need to sleep. Instead, they meditate deeply for 4 hours a day, gaining the same benefit as 8 hours of sleep.',
      descriptionIT: 'Gli elfi non hanno bisogno di dormire. Meditano profondamente per 4 ore al giorno, ottenendo gli stessi benefici di 8 ore di sonno.',
      level: 1,
    },
    {
      name: 'Elf Weapon Training',
      nameIT: 'Addestramento Elfico',
      description: 'You have proficiency with the longsword, shortsword, shortbow, and longbow.',
      descriptionIT: 'Hai competenza con spada lunga, spada corta, arco corto e arco lungo.',
      level: 1,
    },
    {
      name: 'Keen Senses',
      nameIT: 'Sensi Acuti',
      description: 'You have proficiency in the Perception skill.',
      descriptionIT: 'Hai competenza nell\'abilità Percezione.',
      level: 1,
    },
    {
      name: 'Extra Language',
      nameIT: 'Linguaggio Extra',
      description: 'You can speak, read, and write one extra language of your choice.',
      descriptionIT: 'Puoi parlare, leggere e scrivere una lingua extra a tua scelta.',
      level: 1,
    },
  ],
  proficiencies: [
    { type: 'weapon', value: 'Longsword', valueIT: 'Spada Lunga' },
    { type: 'weapon', value: 'Shortsword', valueIT: 'Spada Corta' },
    { type: 'weapon', value: 'Shortbow', valueIT: 'Arco Corto' },
    { type: 'weapon', value: 'Longbow', valueIT: 'Arco Lungo' },
    { type: 'skill', value: 'perception', valueIT: 'Percezione' },
    { type: 'language', value: 'Elvish', valueIT: 'Elfico' },
  ],
  languages: ['Common', 'Elvish'],
  languagesIT: ['Comune', 'Elfico'],
  variants: [
    {
      id: 'high-elf',
      name: 'High Elf',
      nameIT: 'Alto Elfo',
      features: [
        {
          name: 'High Elf Cantrip',
          nameIT: 'Trucchetto Alto Elfo',
          description: 'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.',
          descriptionIT: 'Conosci un trucchetto a scelta dalla lista degli incantesimi del mago. Intelligenza è la tua caratteristica da incantatore.',
          level: 1,
        },
      ],
    },
    {
      id: 'wood-elf',
      name: 'Wood Elf',
      nameIT: 'Elfo dei Boschi',
      speed: 35,
      features: [
        {
          name: 'Fleet of Foot',
          nameIT: 'Passo Lesto',
          description: 'Your base walking speed increases to 35 feet.',
          descriptionIT: 'La tua velocità base aumenta a 10,5 metri.',
          level: 1,
        },
        {
          name: 'Mask of the Wild',
          nameIT: 'Maschera della Natura',
          description: 'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.',
          descriptionIT: 'Puoi tentare di nasconderti anche quando sei solo leggermente oscurato da fogliame, pioggia battente, neve, nebbia e altri fenomeni naturali.',
          level: 1,
        },
      ],
    },
    {
      id: 'drow',
      name: 'Drow',
      nameIT: 'Drow',
      darkvision: 120,
      features: [
        {
          name: 'Superior Darkvision',
          nameIT: 'Scurovisione Superiore',
          description: 'Your darkvision has a radius of 120 feet instead of 60 feet.',
          descriptionIT: 'La tua scurovisione ha un raggio di 36 metri invece di 18 metri.',
          level: 1,
        },
        {
          name: 'Sunlight Sensitivity',
          nameIT: 'Sensibilità alla Luce Solare',
          description: 'You have disadvantage on attack rolls and Perception checks that rely on sight when you or your target is in direct sunlight.',
          descriptionIT: 'Hai svantaggio ai tiri per colpire e alle prove di Percezione basate sulla vista quando tu o il bersaglio siete alla luce diretta del sole.',
          level: 1,
        },
        {
          name: 'Drow Magic',
          nameIT: 'Magia Drow',
          description: 'You know the dancing lights cantrip. At 3rd level you can cast faerie fire once per long rest, and at 5th level darkness once per long rest. Charisma is your spellcasting ability.',
          descriptionIT: 'Conosci il trucchetto luci danzanti. Al 3° livello puoi lanciare fuoco fatato una volta per riposo lungo, e al 5° livello oscurità una volta per riposo lungo. Carisma è la tua caratteristica da incantatore.',
          level: 1,
        },
      ],
      proficiencies: [
        { type: 'weapon', value: 'Rapier', valueIT: 'Stocco' },
        { type: 'weapon', value: 'Hand Crossbow', valueIT: 'Balestra a Mano' },
      ],
    },
  ],
}
