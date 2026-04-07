import type { Race } from '../../types'

export const dragonborn: Race = {
  id: 'dragonborn',
  name: 'Dragonborn',
  nameIT: 'Dragonide',
  speed: 30,
  size: 'Medium',
  sizeIT: 'Media',
  darkvision: 0,
  abilityBonuses: [
    { ability: 'STR', value: 2 },
    { ability: 'CHA', value: 1 },
  ],
  features: [
    {
      name: 'Draconic Ancestry',
      nameIT: 'Discendenza Draconica',
      description: 'You have draconic ancestry. Choose one type of dragon from the table. Your breath weapon and damage resistance are determined by the dragon type.',
      descriptionIT: 'Hai una discendenza draconica. Scegli un tipo di drago dalla tabella. Il tuo soffio e la resistenza ai danni sono determinati dal tipo di drago.',
      level: 1,
    },
    {
      name: 'Breath Weapon',
      nameIT: 'Soffio',
      description: 'You can use your action to exhale destructive energy. The damage type and area are determined by your draconic ancestry. Each creature in the area must make a saving throw (DC = 8 + CON modifier + proficiency bonus). Damage is 2d6, increasing at 6th, 11th, and 16th level. Usable once per short or long rest.',
      descriptionIT: 'Puoi usare la tua azione per esalare energia distruttiva. Il tipo di danno e l\'area sono determinati dalla tua discendenza draconica. Ogni creatura nell\'area deve effettuare un tiro salvezza (CD = 8 + modificatore di COS + bonus di competenza). Il danno è 2d6, aumenta al 6°, 11° e 16° livello. Utilizzabile una volta per riposo breve o lungo.',
      level: 1,
    },
    {
      name: 'Damage Resistance',
      nameIT: 'Resistenza ai Danni',
      description: 'You have resistance to the damage type associated with your draconic ancestry.',
      descriptionIT: 'Hai resistenza al tipo di danno associato alla tua discendenza draconica.',
      level: 1,
    },
  ],
  proficiencies: [],
  languages: ['Common', 'Draconic'],
  languagesIT: ['Comune', 'Draconico'],
  subraces: [],
}
