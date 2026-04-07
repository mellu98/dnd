import type { ClassDefinition } from '../../types'

export const monk: ClassDefinition = {
  id: 'monk',
  name: 'Monk',
  nameIT: 'Monaco',
  hitDie: 'd8',
  primaryAbility: ['DEX', 'WIS'],
  savingThrows: ['STR', 'DEX'],
  skillChoices: {
    choose: 2,
    from: ['acrobatics', 'athletics', 'history', 'insight', 'religion', 'stealth'],
  },
  armorProficiencies: [],
  weaponProficiencies: [
    { type: 'weapon', value: 'Simple Weapons', valueIT: 'Armi Semplici' },
    { type: 'weapon', value: 'Shortswords', valueIT: 'Spade Corte' },
  ],
  toolProficiencies: [
    { type: 'tool', value: 'One artisan\'s tool or musical instrument', valueIT: 'Uno strumento da artigiano o strumento musicale' },
  ],
  features: [
    {
      name: 'Unarmored Defense',
      nameIT: 'Difesa Senza Armatura',
      description: 'While not wearing armor or a shield, your AC equals 10 + DEX modifier + WIS modifier.',
      descriptionIT: 'Quando non indossi armatura ne scudo, la tua CA e pari a 10 + modificatore di DES + modificatore di SAG.',
      level: 1,
    },
    {
      name: 'Martial Arts',
      nameIT: 'Arti Marziali',
      description: 'You can use DEX instead of STR for monk weapons, and you can roll a d4 for unarmed strikes. When you use the Attack action with a monk weapon, you can make one unarmed strike as a bonus action.',
      descriptionIT: 'Puoi usare DES invece di FOR per le armi da monaco e tirare un d4 per i colpi senz\'armi. Quando usi l\'azione di Attacco con un\'arma da monaco, puoi effettuare un colpo senz\'armi come azione bonus.',
      level: 1,
    },
    {
      name: 'Ki',
      nameIT: 'Ki',
      description: 'You gain a pool of ki points equal to your monk level. You can spend them to fuel Flurry of Blows, Patient Defense, and Step of the Wind.',
      descriptionIT: 'Ottieni un numero di punti ki pari al tuo livello da monaco. Puoi spenderli per usare Raffica di Colpi, Difesa Paziente e Passo del Vento.',
      level: 2,
    },
    {
      name: 'Unarmored Movement',
      nameIT: 'Movimento Senza Armatura',
      description: 'Your speed increases by 10 feet while you are not wearing armor or wielding a shield.',
      descriptionIT: 'La tua velocita aumenta di 3 metri quando non indossi armatura ne scudo.',
      level: 2,
    },
    {
      name: 'Deflect Missiles',
      nameIT: 'Deviare Proiettili',
      description: 'You can use your reaction to deflect or catch a missile when you are hit by a ranged weapon attack, reducing damage by 1d10 + DEX modifier + monk level.',
      descriptionIT: 'Puoi usare la tua reazione per deviare o afferrare un proiettile quando sei colpito da un attacco a distanza, riducendo i danni di 1d10 + modificatore di DES + livello da monaco.',
      level: 3,
    },
  ],
  subclasses: [
    {
      id: 'open-hand',
      name: 'Way of the Open Hand',
      nameIT: 'Via della Mano Aperta',
      features: [
        {
          name: 'Open Hand Technique',
          nameIT: 'Tecnica della Mano Aperta',
          description: 'When you hit a creature with a Flurry of Blows attack, you can knock it prone, push it 15 feet away, or prevent it from taking reactions.',
          descriptionIT: 'Quando colpisci una creatura con un attacco di Raffica di Colpi, puoi buttarla a terra prona, spingerla a 4,5 metri o impedirle di usare reazioni.',
          level: 3,
        },
      ],
      proficiencies: [],
    },
  ],
  subclassLevel: 3,
  startingEquipment: [
    ['Shortsword', 'Any simple weapon'],
    ['Dungeoneer\'s pack', 'Explorer\'s pack'],
    ['10 darts'],
  ],
}
