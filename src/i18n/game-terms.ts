/**
 * Italian game-term translations.
 * Maps English D&D terms to Italian for display.
 * Used as fallback: displayName = gameTermsIT[name] ?? name
 */

export const gameTermsIT: Record<string, string> = {
  // ── Races / Species ──────────────────────────────────────────────
  Dragonborn: 'Dragonide',
  Dwarf: 'Nano',
  Elf: 'Elfo',
  Gnome: 'Gnomo',
  'Half-Elf': 'Mezzelfo',
  'Half-Orc': 'Mezzorco',
  Halfling: 'Halfling',
  Human: 'Umano',
  Tiefling: 'Tiefling',

  // ── Classes ──────────────────────────────────────────────────────
  Barbarian: 'Barbaro',
  Bard: 'Bardo',
  Cleric: 'Chierico',
  Druid: 'Druido',
  Fighter: 'Guerriero',
  Monk: 'Monaco',
  Paladin: 'Paladino',
  Ranger: 'Ranger',
  Rogue: 'Ladro',
  Sorcerer: 'Stregone',
  Warlock: 'Warlock',
  Wizard: 'Mago',

  // ── Schools of Magic ─────────────────────────────────────────────
  Abjuration: 'Abiurazione',
  Conjuration: 'Congiurazione',
  Divination: 'Divinazione',
  Enchantment: 'Ammaliamento',
  Evocation: 'Evocazione',
  Illusion: 'Illusione',
  Necromancy: 'Necromanzia',
  Transmutation: 'Trasmutazione',

  // School abbreviations (5etools single-letter)
  A: 'Abiurazione',
  C: 'Congiurazione',
  D: 'Divinazione',
  E: 'Ammaliamento',
  V: 'Evocazione',
  I: 'Illusione',
  N: 'Necromanzia',
  T: 'Trasmutazione',

  // ── Conditions ───────────────────────────────────────────────────
  Blinded: 'Accecato',
  Charmed: 'Affascinato',
  Deafened: 'Assordato',
  Frightened: 'Spaventato',
  Grappled: 'Afferrato',
  Incapacitated: 'Incapacitato',
  Invisible: 'Invisibile',
  Paralyzed: 'Paralizzato',
  Petrified: 'Pietrificato',
  Poisoned: 'Avvelenato',
  Prone: 'Prono',
  Restrained: 'Trattenuto',
  Stunned: 'Stordito',
  Unconscious: 'Privo di Sensi',
  Exhaustion: 'Sfinimento',

  // ── Damage Types ─────────────────────────────────────────────────
  Acid: 'Acido',
  Bludgeoning: 'Contundente',
  Cold: 'Ghiaccio',
  Fire: 'Fuoco',
  Force: 'Forza',
  Lightning: 'Fulmine',
  Necrotic: 'Necrotico',
  Piercing: 'Perforante',
  Poison: 'Veleno',
  Psychic: 'Psichico',
  Radiant: 'Radiante',
  Slashing: 'Tagliente',
  Thunder: 'Tuono',

  // ── Skills ───────────────────────────────────────────────────────
  Acrobatics: 'Acrobazia',
  'Animal Handling': 'Addestrare Animali',
  Arcana: 'Arcano',
  Athletics: 'Atletica',
  Deception: 'Inganno',
  History: 'Storia',
  Insight: 'Intuizione',
  Intimidation: 'Intimidire',
  Investigation: 'Indagare',
  Medicine: 'Medicina',
  Nature: 'Natura',
  Perception: 'Percezione',
  Performance: 'Intrattenere',
  Persuasion: 'Persuasione',
  Religion: 'Religione',
  'Sleight of Hand': 'Rapidità di Mano',
  Stealth: 'Furtività',
  Survival: 'Sopravvivenza',

  // ── Abilities ────────────────────────────────────────────────────
  Strength: 'Forza',
  Dexterity: 'Destrezza',
  Constitution: 'Costituzione',
  Intelligence: 'Intelligenza',
  Wisdom: 'Saggezza',
  Charisma: 'Carisma',

  // ── Sizes ────────────────────────────────────────────────────────
  Tiny: 'Minuscola',
  Small: 'Piccola',
  Medium: 'Media',
  Large: 'Grande',
  Huge: 'Enorme',
  Gargantuan: 'Gargantuesca',

  // ── Alignment ────────────────────────────────────────────────────
  'Lawful Good': 'Legale Buono',
  'Neutral Good': 'Neutrale Buono',
  'Chaotic Good': 'Caotico Buono',
  'Lawful Neutral': 'Legale Neutrale',
  Neutral: 'Neutrale',
  'Chaotic Neutral': 'Caotico Neutrale',
  'Lawful Evil': 'Legale Cattivo',
  'Neutral Evil': 'Neutrale Cattivo',
  'Chaotic Evil': 'Caotico Cattivo',

  // ── Creature Types ───────────────────────────────────────────────
  Aberration: 'Aberrazione',
  Beast: 'Bestia',
  Celestial: 'Celestiale',
  Construct: 'Costrutto',
  Dragon: 'Drago',
  Elemental: 'Elementale',
  Fey: 'Fata',
  Fiend: 'Immondo',
  Giant: 'Gigante',
  Humanoid: 'Umanoide',
  Monstrosity: 'Mostruosità',
  Ooze: 'Melia',
  Plant: 'Pianta',
  Undead: 'Non Morto',

  // ── Combat ───────────────────────────────────────────────────────
  'Challenge Rating': 'Grado di Sfida',
  'Armor Class': 'Classe Armatura',
  'Hit Points': 'Punti Ferita',
  Speed: 'Velocità',
  'Saving Throw': 'Tiro Salvezza',
  'Damage Immunities': 'Immunità ai Danni',
  'Damage Resistances': 'Resistenze ai Danni',
  'Damage Vulnerabilities': 'Vulnerabilità ai Danni',
  'Condition Immunities': 'Immunità alle Condizioni',
  Senses: 'Sensi',
  Languages: 'Lingue',
  Actions: 'Azioni',
  Reactions: 'Reazioni',
  'Legendary Actions': 'Azioni Leggendarie',
  Traits: 'Tratti',
}

/** School abbreviation to full English name */
export const schoolAbbreviations: Record<string, string> = {
  A: 'Abjuration',
  C: 'Conjuration',
  D: 'Divination',
  E: 'Enchantment',
  V: 'Evocation',
  I: 'Illusion',
  N: 'Necromancy',
  T: 'Transmutation',
}

/** Translate a game term, falling back to the original */
export function t(term: string): string {
  return gameTermsIT[term] ?? term
}
