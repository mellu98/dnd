import type { Species } from '../../types'

export const halfOrc: Species = {
  id: 'half-orc',
  name: 'Half-Orc',
  nameIT: 'Mezzorco',
  speed: 30,
  size: 'Medium',
  sizeIT: 'Media',
  darkvision: 60,
  features: [
    {
      name: 'Menacing',
      nameIT: 'Minaccioso',
      description: 'You gain proficiency in the Intimidation skill.',
      descriptionIT: 'Ottieni competenza nell\'abilità Intimidire.',
      level: 1,
    },
    {
      name: 'Relentless Endurance',
      nameIT: 'Resistenza Implacabile',
      description: 'When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can\'t use this feature again until you finish a long rest.',
      descriptionIT: 'Quando vieni ridotto a 0 punti ferita ma non ucciso sul colpo, puoi scendere a 1 punto ferita invece. Non puoi usare questo tratto finché non completi un riposo lungo.',
      level: 1,
    },
    {
      name: 'Savage Attacks',
      nameIT: 'Attacchi Selvaggi',
      description: 'When you score a critical hit with a melee weapon attack, you can roll one of the weapon\'s damage dice one additional time and add it to the extra damage.',
      descriptionIT: 'Quando ottieni un colpo critico con un attacco con arma da mischia, puoi tirare uno dei dadi di danno dell\'arma una volta aggiuntiva e aggiungerlo al danno extra.',
      level: 1,
    },
  ],
  proficiencies: [
    { type: 'skill', value: 'intimidation', valueIT: 'Intimidire' },
  ],
  languages: ['Common', 'Orc'],
  languagesIT: ['Comune', 'Orchesco'],
  variants: [],
}
