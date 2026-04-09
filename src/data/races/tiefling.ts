import type { Species, SpeciesVariant } from '../../types'

function createTieflingLegacy(params: {
  id: string
  name: string
  nameIT: string
  resistanceType: string
  resistanceTypeIT: string
  cantripName: string
  cantripNameIT: string
  level3Spell: string
  level3SpellIT: string
  level5Spell: string
  level5SpellIT: string
}): SpeciesVariant {
  const {
    id,
    name,
    nameIT,
    resistanceType,
    resistanceTypeIT,
    cantripName,
    cantripNameIT,
    level3Spell,
    level3SpellIT,
    level5Spell,
    level5SpellIT,
  } = params

  return {
    id,
    name,
    nameIT,
    description: `Your fiendish blood manifests as the ${name.toLowerCase()} legacy.`,
    descriptionIT: `Il tuo retaggio infernale si manifesta come lignaggio ${nameIT.toLowerCase()}.`,
    features: [
      {
        name: `${name} Legacy`,
        nameIT: `Lignaggio ${nameIT}`,
        description: `You have resistance to ${resistanceType} damage. You also know ${cantripName}. At 3rd level you can cast ${level3Spell} once per long rest, and at 5th level you can cast ${level5Spell} once per long rest.`,
        descriptionIT: `Hai resistenza ai danni ${resistanceTypeIT.toLowerCase()}. Conosci inoltre ${cantripNameIT}. Al 3° livello puoi lanciare ${level3SpellIT} una volta per riposo lungo, e al 5° livello ${level5SpellIT} una volta per riposo lungo.`,
        level: 1,
      },
    ],
    mechanics: {
      resistanceType,
      resistanceTypeIT,
    },
  }
}

const tieflingLegacies: SpeciesVariant[] = [
  createTieflingLegacy({
    id: 'abyssal',
    name: 'Abyssal',
    nameIT: 'Abissale',
    resistanceType: 'Poison',
    resistanceTypeIT: 'Veleno',
    cantripName: 'Poison Spray',
    cantripNameIT: 'Spruzzo Velenoso',
    level3Spell: 'Ray of Sickness',
    level3SpellIT: 'Raggio di Infermità',
    level5Spell: 'Hold Person',
    level5SpellIT: 'Blocca Persone',
  }),
  createTieflingLegacy({
    id: 'chthonic',
    name: 'Chthonic',
    nameIT: 'Ctonio',
    resistanceType: 'Necrotic',
    resistanceTypeIT: 'Necrotico',
    cantripName: 'Chill Touch',
    cantripNameIT: 'Tocco Gelido',
    level3Spell: 'False Life',
    level3SpellIT: 'Vita Falsata',
    level5Spell: 'Ray of Enfeeblement',
    level5SpellIT: 'Raggio di Indebolimento',
  }),
  createTieflingLegacy({
    id: 'infernal',
    name: 'Infernal',
    nameIT: 'Infernale',
    resistanceType: 'Fire',
    resistanceTypeIT: 'Fuoco',
    cantripName: 'Fire Bolt',
    cantripNameIT: 'Dardo di Fuoco',
    level3Spell: 'Hellish Rebuke',
    level3SpellIT: 'Punizione Infernale',
    level5Spell: 'Darkness',
    level5SpellIT: 'Oscurità',
  }),
]

export const tiefling: Species = {
  id: 'tiefling',
  name: 'Tiefling',
  nameIT: 'Tiefling',
  speed: 30,
  size: 'Medium',
  sizeIT: 'Media',
  darkvision: 60,
  features: [
    {
      name: 'Fiendish Legacy',
      nameIT: 'Retaggio Infernale',
      description: 'Choose a fiendish legacy. That legacy determines your resistance and your innate spells.',
      descriptionIT: 'Scegli un lignaggio infernale. Quel lignaggio determina la tua resistenza e i tuoi incantesimi innati.',
      level: 1,
    },
    {
      name: 'Otherworldly Presence',
      nameIT: 'Presenza Ultramondana',
      description: 'You know the thaumaturgy cantrip. It uses the same spellcasting ability as your Fiendish Legacy.',
      descriptionIT: 'Conosci il trucchetto taumaturgia. Usa la stessa caratteristica da incantatore del tuo Lignaggio Infernale.',
      level: 1,
    },
  ],
  proficiencies: [],
  languages: ['Common', 'Infernal'],
  languagesIT: ['Comune', 'Infernale'],
  variants: tieflingLegacies,
}
