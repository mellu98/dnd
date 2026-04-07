export const it = {
  // Ability abbreviations
  STR: 'FOR',
  DEX: 'DES',
  CON: 'COS',
  INT: 'INT',
  WIS: 'SAG',
  CHA: 'CAR',

  // Ability full names
  STR_full: 'Forza',
  DEX_full: 'Destrezza',
  CON_full: 'Costituzione',
  INT_full: 'Intelligenza',
  WIS_full: 'Saggezza',
  CHA_full: 'Carisma',

  // HP
  hp_current: 'PF Attuali',
  hp_max: 'PF Massimi',
  hp_temp: 'PF Temporanei',
  take_damage: 'Subisci Danno',
  heal: 'Cura',
  add_temp_hp: 'PF Temporanei',
  hp_label: 'PF',

  // Tabs
  tab_features: 'Capacita',
  tab_actions: 'Azioni',
  tab_equipment: 'Equipaggiamento',
  tab_spells: 'Incantesimi',
  tab_notes: 'Note',
  tab_skills: 'Competenze',

  // Creation wizard
  creation_title: 'Creazione Personaggio',
  step_race: 'Razza',
  step_species: 'Specie',
  step_class: 'Classe',
  step_background: 'Background',
  step_abilities: 'Caratteristiche',
  step_details: 'Dettagli',
  next: 'Avanti',
  back: 'Indietro',
  complete: 'Completa',
  choose_subrace: 'Scegli Sottorazza',
  choose_subclass: 'Scegli Sottoclasse',
  choose_skills: 'Scegli Abilita',
  points_remaining: 'Punti Rimanenti',

  // Skills
  skill_acrobatics: 'Acrobazia',
  skill_animal_handling: 'Addestrare Animali',
  skill_arcana: 'Arcano',
  skill_athletics: 'Atletica',
  skill_deception: 'Inganno',
  skill_history: 'Storia',
  skill_insight: 'Intuizione',
  skill_intimidation: 'Intimidire',
  skill_investigation: 'Indagare',
  skill_medicine: 'Medicina',
  skill_nature: 'Natura',
  skill_perception: 'Percezione',
  skill_performance: 'Intrattenere',
  skill_persuasion: 'Persuasione',
  skill_religion: 'Religione',
  skill_sleight_of_hand: 'Rapidita di Mano',
  skill_stealth: 'Furtivita',
  skill_survival: 'Sopravvivenza',

  // General labels
  level: 'Livello',
  proficiency_bonus: 'Bonus di Competenza',
  armor_class: 'Classe Armatura',
  initiative: 'Iniziativa',
  speed: 'Velocita',
  passive_perception: 'Percezione Passiva',
  saving_throws: 'Tiri Salvezza',
  darkvision: 'Scurovisione',
  languages: 'Lingue',
  features_traits: 'Capacita e Tratti',
  proficiencies: 'Competenze',
  hit_die: 'Dado Vita',
  ability_bonuses: 'Bonus ai Punteggi',
  origin_feat: 'Talento di Origine',
  size: 'Taglia',

  // Character details
  char_name: 'Nome Personaggio',
  alignment: 'Allineamento',
  personality_traits: 'Tratti della Personalita',
  ideals: 'Ideali',
  bonds: 'Legami',
  flaws: 'Difetti',

  // Actions
  new_character: 'Nuovo Personaggio',
  delete_character: 'Elimina Personaggio',
  save: 'Salva',
  cancel: 'Annulla',
  confirm: 'Conferma',
  my_characters: 'I Miei Personaggi',
  no_characters: 'Nessun personaggio creato',

  // Proficiency types
  prof_skill: 'Abilita',
  prof_saving_throw: 'Tiro Salvezza',
  prof_armor: 'Armature',
  prof_weapon: 'Armi',
  prof_tool: 'Strumenti',
  prof_language: 'Lingue',

  // Misc
  ft: 'ft',
  meters: 'm',

  // Equipment
  armor_none: 'Nessuna Armatura',
  armor_light: 'Armatura Leggera',
  armor_medium: 'Armatura Media',
  armor_heavy: 'Armatura Pesante',
  shield_label: 'Scudo',
  shield_bonus: '+2 CA',
  equip: 'Equipaggia',
  unequip: 'Disequipaggia',
  equipped: 'Equipaggiato',
  weight: 'Peso',
  value_label: 'Valore',
  stealth_disadvantage: 'Svantaggio su Furtività',
  strength_requirement: 'Forza Richiesta',

  // Spell schools
  school_abjuration: 'Abiurazione',
  school_conjuration: 'Congiurazione',
  school_divination: 'Divinazione',
  school_enchantment: 'Ammaliamento',
  school_evocation: 'Evocazione',
  school_illusion: 'Illusione',
  school_necromancy: 'Necromanzia',
  school_transmutation: 'Trasmutazione',

  // Spell levels
  spell_cantrip: 'Trucco',
  spell_level_1: 'Livello 1',
  spell_level_2: 'Livello 2',
  spell_level_3: 'Livello 3',
  all_levels: 'Tutti',

  // Spell components
  component_verbal: 'Vocale',
  component_somatic: 'Gestuale',
  component_material: 'Materiale',
  concentration_label: 'Concentrazione',
  ritual_label: 'Rituale',

  // Spell filters
  filter_spells: 'Filtra Incantesimi',
  no_spells: 'Nessun incantesimo disponibile',
  spell_detail: 'Dettaglio Incantesimo',
} as const

export type TranslationKey = keyof typeof it
