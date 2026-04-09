import type { Background } from '../../types'

export const acolyte: Background = {
  id: 'acolyte',
  name: 'Acolyte',
  nameIT: 'Accolito',
  description: 'You have spent your life in the service of a temple to a god or pantheon of gods.',
  descriptionIT: 'Hai passato la tua vita al servizio di un tempio dedicato a un dio o a un pantheon.',
  abilityScoreOptions: {
    primary: ['WIS', 'INT', 'CHA'],
    secondary: ['WIS', 'INT', 'CHA'],
  },
  skillProficiencies: [
    { type: 'skill', value: 'insight', valueIT: 'Intuizione' },
    { type: 'skill', value: 'religion', valueIT: 'Religione' },
  ],
  toolProficiency: { type: 'tool', value: 'None', valueIT: 'Nessuno' },
  originFeat: {
    name: 'Magic Initiate (Cleric)',
    nameIT: 'Iniziato alla Magia (Chierico)',
    description: 'You learn two cantrips and one 1st-level spell from the Cleric spell list. You can cast the 1st-level spell once per long rest. Wisdom is your spellcasting ability.',
    descriptionIT: 'Impari due trucchetti e un incantesimo di 1° livello dalla lista del Chierico. Puoi lanciare l\'incantesimo di 1° livello una volta per riposo lungo. Saggezza è la tua caratteristica da incantatore.',
    level: 1,
  },
  equipment: ['A holy symbol', 'A prayer book', '5 sticks of incense', 'Vestments', 'A set of common clothes', '15 gp'],
  equipmentIT: ['Un simbolo sacro', 'Un libro di preghiere', '5 bastoncini di incenso', 'Paramenti', 'Un set di abiti comuni', '15 mo'],
}

export const artisan: Background = {
  id: 'artisan',
  name: 'Artisan',
  nameIT: 'Artigiano',
  description: 'You are a skilled craftsperson, trained in a particular type of artisan\'s tools.',
  descriptionIT: 'Sei un artigiano esperto, addestrato in un particolare tipo di strumenti da artigiano.',
  abilityScoreOptions: {
    primary: ['INT', 'DEX', 'WIS'],
    secondary: ['INT', 'DEX', 'WIS'],
  },
  skillProficiencies: [
    { type: 'skill', value: 'investigation', valueIT: 'Indagare' },
    { type: 'skill', value: 'history', valueIT: 'Storia' },
  ],
  toolProficiency: { type: 'tool', value: "Artisan's Tools (choose one)", valueIT: 'Strumenti da Artigiano (scegline uno)' },
  originFeat: {
    name: 'Crafter',
    nameIT: 'Artefice',
    description: 'You gain proficiency with three different types of artisan\'s tools. During downtime, you can craft magic items with those tools.',
    descriptionIT: 'Ottieni competenza con tre diversi tipi di strumenti da artigiano. Durante i tempi morti, puoi creare oggetti magici con quegli strumenti.',
    level: 1,
  },
  equipment: ["A set of artisan's tools", 'A set of traveler\'s clothes', '10 gp'],
  equipmentIT: ['Un set di strumenti da artigiano', 'Un set di abiti da viaggio', '10 mo'],
}

export const charlatan: Background = {
  id: 'charlatan',
  name: 'Charlatan',
  nameIT: 'Ciarlatano',
  description: 'You have always had a way with people, using deception and trickery to get what you want.',
  descriptionIT: 'Hai sempre avuto un modo con le persone, usando inganno e trucchi per ottenere ciò che vuoi.',
  abilityScoreOptions: {
    primary: ['INT', 'DEX', 'CHA'],
    secondary: ['INT', 'DEX', 'CHA'],
  },
  skillProficiencies: [
    { type: 'skill', value: 'deception', valueIT: 'Inganno' },
    { type: 'skill', value: 'sleight_of_hand', valueIT: 'Rapidità di Mano' },
  ],
  toolProficiency: { type: 'tool', value: 'Disguise Kit', valueIT: 'Kit per Travestimenti' },
  originFeat: {
    name: 'Fey Touched',
    nameIT: 'Toccato dal Fatato',
    description: 'Your exposure to the Feywild grants you the Misty Step spell once per long rest. You also learn one 1st-level divination or enchantment spell. Intelligence, Wisdom, or Charisma is your spellcasting ability.',
    descriptionIT: 'La tua esposizione al Feywild ti concede l\'incantesimo Passo Velato una volta per riposo lungo. Impari anche un incantesimo di 1° livello di divinazione o ammaliamento.',
    level: 1,
  },
  equipment: ['A set of fine clothes', 'A disguise kit', 'Tools of the con', '15 gp'],
  equipmentIT: ['Un set di abiti eleganti', 'Un kit per travestimenti', 'Strumenti della truffa', '15 mo'],
}

export const criminal: Background = {
  id: 'criminal',
  name: 'Criminal',
  nameIT: 'Criminale',
  description: 'You are an experienced criminal with a history of breaking the law.',
  descriptionIT: 'Sei un criminale esperto con una storia di violazioni della legge.',
  abilityScoreOptions: {
    primary: ['DEX', 'INT', 'WIS'],
    secondary: ['DEX', 'INT', 'WIS'],
  },
  skillProficiencies: [
    { type: 'skill', value: 'stealth', valueIT: 'Furtività' },
    { type: 'skill', value: 'deception', valueIT: 'Inganno' },
  ],
  toolProficiency: { type: 'tool', value: "Thieves' Tools", valueIT: 'Arnesi da Scasso' },
  originFeat: {
    name: 'Alert',
    nameIT: 'Allerta',
    description: 'You gain +5 to initiative. You can\'t be surprised while conscious. Other creatures don\'t gain advantage on attack rolls against you as a result of being unseen.',
    descriptionIT: 'Ottieni +5 all\'iniziativa. Non puoi essere sorpreso mentre sei cosciente. Le altre creature non ottengono vantaggio ai tiri per colpire contro di te per essere invisibili.',
    level: 1,
  },
  equipment: ['A crowbar', 'A set of dark common clothes with a hood', '15 gp'],
  equipmentIT: ['Un piede di porco', 'Un set di abiti comuni scuri con cappuccio', '15 mo'],
}

export const entertainer: Background = {
  id: 'entertainer',
  name: 'Entertainer',
  nameIT: 'Intrattenitore',
  description: 'You thrive in front of an audience, captivating them with your talent.',
  descriptionIT: 'Ti esibi davanti a un pubblico, catturandolo con il tuo talento.',
  abilityScoreOptions: {
    primary: ['DEX', 'INT', 'CHA'],
    secondary: ['DEX', 'INT', 'CHA'],
  },
  skillProficiencies: [
    { type: 'skill', value: 'acrobatics', valueIT: 'Acrobazia' },
    { type: 'skill', value: 'performance', valueIT: 'Intrattenere' },
  ],
  toolProficiency: { type: 'tool', value: 'Musical Instrument (choose one)', valueIT: 'Strumento Musicale (scegline uno)' },
  originFeat: {
    name: 'Musician',
    nameIT: 'Musicista',
    description: 'You gain proficiency with three musical instruments. When you or a friendly creature within 30 feet makes an ability check using an instrument you\'re proficient with, they can add your proficiency bonus to the check.',
    descriptionIT: 'Ottieni competenza con tre strumenti musicali. Quando tu o una creatura amica entro 30 piedi effettua una prova usando uno strumento con cui sei competente, può aggiungere il tuo bonus di competenza.',
    level: 1,
  },
  equipment: ['A musical instrument', 'A costume', '15 gp'],
  equipmentIT: ['Uno strumento musicale', 'Un costume', '15 mo'],
}

export const farmer: Background = {
  id: 'farmer',
  name: 'Farmer',
  nameIT: 'Contadino',
  description: 'You grew up on a farm or ranch, working the land and caring for animals.',
  descriptionIT: 'Sei cresciuto in una fattoria o ranch, lavorando la terra e curando gli animali.',
  abilityScoreOptions: {
    primary: ['STR', 'CON', 'WIS'],
    secondary: ['STR', 'CON', 'WIS'],
  },
  skillProficiencies: [
    { type: 'skill', value: 'survival', valueIT: 'Sopravvivenza' },
    { type: 'skill', value: 'animal_handling', valueIT: 'Addestrare Animali' },
  ],
  toolProficiency: { type: 'tool', value: "Artisan's Tools (choose one)", valueIT: 'Strumenti da Artigiano (scegline uno)' },
  originFeat: {
    name: 'Tough',
    nameIT: 'Robusto',
    description: 'Your hit point maximum increases by 2, and it increases by 2 every time you gain a level.',
    descriptionIT: 'Il tuo massimo di punti ferita aumenta di 2, e aumenta di 2 ogni volta che guadagni un livello.',
    level: 1,
  },
  equipment: ['A shovel', 'An iron pot', "A set of artisan's tools", 'A set of common clothes', '10 gp'],
  equipmentIT: ['Una pala', 'Una pentola di ferro', 'Un set di strumenti da artigiano', 'Un set di abiti comuni', '10 mo'],
}

export const guard: Background = {
  id: 'guard',
  name: 'Guard',
  nameIT: 'Guardia',
  description: 'You have served as a guard, watchman, or other law enforcement officer.',
  descriptionIT: 'Hai servito come guardia, sentinella o altro agente delle forze dell\'ordine.',
  abilityScoreOptions: {
    primary: ['STR', 'DEX', 'WIS'],
    secondary: ['STR', 'DEX', 'WIS'],
  },
  skillProficiencies: [
    { type: 'skill', value: 'perception', valueIT: 'Percezione' },
    { type: 'skill', value: 'athletics', valueIT: 'Atletica' },
  ],
  toolProficiency: { type: 'tool', value: 'Gaming Set', valueIT: 'Set da Gioco' },
  originFeat: {
    name: 'Alert',
    nameIT: 'Allerta',
    description: 'You gain +5 to initiative. You can\'t be surprised while conscious. Other creatures don\'t gain advantage on attack rolls against you as a result of being unseen.',
    descriptionIT: 'Ottieni +5 all\'iniziativa. Non puoi essere sorpreso mentre sei cosciente. Le altre creature non ottengono vantaggio ai tiri per colpire contro di te per essere invisibili.',
    level: 1,
  },
  equipment: ['A uniform', 'A gaming set', 'A set of common clothes', '10 gp'],
  equipmentIT: ['Un\'uniforme', 'Un set da gioco', 'Un set di abiti comuni', '10 mo'],
}

export const guildArtisan: Background = {
  id: 'guild-artisan',
  name: 'Guild Artisan',
  nameIT: 'Artigiano di Gilda',
  description: 'You are a member of an artisan guild, skilled in a craft and connected to a network of fellow crafters.',
  descriptionIT: 'Sei membro di una gilda di artigiani, esperto in un mestiere e connesso a una rete di colleghi.',
  abilityScoreOptions: {
    primary: ['INT', 'DEX', 'CHA'],
    secondary: ['INT', 'DEX', 'CHA'],
  },
  skillProficiencies: [
    { type: 'skill', value: 'insight', valueIT: 'Intuizione' },
    { type: 'skill', value: 'persuasion', valueIT: 'Persuasione' },
  ],
  toolProficiency: { type: 'tool', value: "Artisan's Tools (choose one)", valueIT: 'Strumenti da Artigiano (scegline uno)' },
  originFeat: {
    name: 'Skilled',
    nameIT: 'Abile',
    description: 'You gain proficiency in any combination of three skills or tools of your choice.',
    descriptionIT: 'Ottieni competenza in qualsiasi combinazione di tre abilità o strumenti a tua scelta.',
    level: 1,
  },
  equipment: ["A set of artisan's tools", 'A letter of introduction from your guild', 'A set of traveler\'s clothes', '15 gp'],
  equipmentIT: ['Un set di strumenti da artigiano', 'Una lettera di presentazione dalla tua gilda', 'Un set di abiti da viaggio', '15 mo'],
}

export const hermit: Background = {
  id: 'hermit',
  name: 'Hermit',
  nameIT: 'Eremita',
  description: 'You lived in seclusion for a formative part of your life, devoted to study, meditation, or prayer.',
  descriptionIT: 'Hai vissuto in isolamento per una parte formativa della tua vita, dedito allo studio, alla meditazione o alla preghiera.',
  abilityScoreOptions: {
    primary: ['INT', 'WIS', 'CHA'],
    secondary: ['INT', 'WIS', 'CHA'],
  },
  skillProficiencies: [
    { type: 'skill', value: 'medicine', valueIT: 'Medicina' },
    { type: 'skill', value: 'religion', valueIT: 'Religione' },
  ],
  toolProficiency: { type: 'tool', value: 'Herbalism Kit', valueIT: 'Kit da Erborista' },
  originFeat: {
    name: 'Healer',
    nameIT: 'Guaritore',
    description: 'You gain the Healer feat. You can use a healer\'s kit to restore 1d6+4 hit points to a creature at 0 hit points, or restore additional hit points during a short rest.',
    descriptionIT: 'Ottieni il talento Guaritore. Puoi usare un kit da guaritore per ripristinare 1d6+4 punti ferita a una creatura a 0 pf, o ripristinare pf aggiuntivi durante un riposo breve.',
    level: 1,
  },
  equipment: ['A scroll case with notes', 'A winter blanket', 'An herbalism kit', 'A set of common clothes', '5 gp'],
  equipmentIT: ['Un portarotoli con appunti', 'Una coperta invernale', 'Un kit da erborista', 'Un set di abiti comuni', '5 mo'],
}

export const merchant: Background = {
  id: 'merchant',
  name: 'Merchant',
  nameIT: 'Mercante',
  description: 'You have spent your life buying, selling, and trading goods across the lands.',
  descriptionIT: 'Hai passato la tua vita a comprare, vendere e scambiare merci attraverso le terre.',
  abilityScoreOptions: {
    primary: ['INT', 'DEX', 'WIS'],
    secondary: ['INT', 'DEX', 'WIS'],
  },
  skillProficiencies: [
    { type: 'skill', value: 'persuasion', valueIT: 'Persuasione' },
    { type: 'skill', value: 'investigation', valueIT: 'Indagare' },
  ],
  toolProficiency: { type: 'tool', value: "Artisan's Tools (choose one)", valueIT: 'Strumenti da Artigiano (scegline uno)' },
  originFeat: {
    name: 'Skilled',
    nameIT: 'Abile',
    description: 'You gain proficiency in any combination of three skills or tools of your choice.',
    descriptionIT: 'Ottieni competenza in qualsiasi combinazione di tre abilità o strumenti a tua scelta.',
    level: 1,
  },
  equipment: ['A set of fine clothes', 'A merchant\'s scale', 'A ledger', 'A set of traveler\'s clothes', '15 gp'],
  equipmentIT: ['Un set di abiti eleganti', 'Una bilancia da mercante', 'Un registro', 'Un set di abiti da viaggio', '15 mo'],
}

export const noble: Background = {
  id: 'noble',
  name: 'Noble',
  nameIT: 'Nobile',
  description: 'You understand wealth, power, and privilege. You carry a noble title and move in high society.',
  descriptionIT: 'Comprendi ricchezza, potere e privilegio. Porti un titolo nobiliare e frequenti l\'alta società.',
  abilityScoreOptions: {
    primary: ['STR', 'INT', 'CHA'],
    secondary: ['STR', 'INT', 'CHA'],
  },
  skillProficiencies: [
    { type: 'skill', value: 'history', valueIT: 'Storia' },
    { type: 'skill', value: 'persuasion', valueIT: 'Persuasione' },
  ],
  toolProficiency: { type: 'tool', value: 'Gaming Set', valueIT: 'Set da Gioco' },
  originFeat: {
    name: 'Skilled',
    nameIT: 'Abile',
    description: 'You gain proficiency in any combination of three skills or tools of your choice.',
    descriptionIT: 'Ottieni competenza in qualsiasi combinazione di tre abilità o strumenti a tua scelta.',
    level: 1,
  },
  equipment: ['A set of fine clothes', 'A signet ring', 'A scroll of pedigree', '25 gp'],
  equipmentIT: ['Un set di abiti eleganti', 'Un anello con sigillo', 'Una pergamena di lignaggio', '25 mo'],
}

export const sage: Background = {
  id: 'sage',
  name: 'Sage',
  nameIT: 'Saggio',
  description: 'You spent years learning the lore of the multiverse through study and research.',
  descriptionIT: 'Hai passato anni a studiare il sapere del multiverso attraverso ricerca e studio.',
  abilityScoreOptions: {
    primary: ['INT', 'WIS', 'CHA'],
    secondary: ['INT', 'WIS', 'CHA'],
  },
  skillProficiencies: [
    { type: 'skill', value: 'arcana', valueIT: 'Arcano' },
    { type: 'skill', value: 'history', valueIT: 'Storia' },
  ],
  toolProficiency: { type: 'tool', value: 'None', valueIT: 'Nessuno' },
  originFeat: {
    name: 'Magic Initiate (Wizard)',
    nameIT: 'Iniziato alla Magia (Mago)',
    description: 'You learn two cantrips and one 1st-level spell from the Wizard spell list. You can cast the 1st-level spell once per long rest. Intelligence is your spellcasting ability.',
    descriptionIT: 'Impari due trucchetti e un incantesimo di 1° livello dalla lista del Mago. Puoi lanciare l\'incantesimo di 1° livello una volta per riposo lungo. Intelligenza è la tua caratteristica da incantatore.',
    level: 1,
  },
  equipment: ['A bottle of ink', 'A quill', 'A small knife', 'A letter from a dead colleague', 'A set of common clothes', '10 gp'],
  equipmentIT: ['Una bottiglia di inchiostro', 'Una penna', 'Un coltellino', 'Una lettera di un collega defunto', 'Un set di abiti comuni', '10 mo'],
}

export const sailor: Background = {
  id: 'sailor',
  name: 'Sailor',
  nameIT: 'Marinaio',
  description: 'You sailed on a seagoing vessel for years, mastering the art of navigation and seamanship.',
  descriptionIT: 'Hai navigato su una nave per anni, padroneggiando l\'arte della navigazione e della marineria.',
  abilityScoreOptions: {
    primary: ['STR', 'DEX', 'WIS'],
    secondary: ['STR', 'DEX', 'WIS'],
  },
  skillProficiencies: [
    { type: 'skill', value: 'athletics', valueIT: 'Atletica' },
    { type: 'skill', value: 'perception', valueIT: 'Percezione' },
  ],
  toolProficiency: { type: 'tool', value: "Navigator's Tools", valueIT: 'Strumenti da Navigatore' },
  originFeat: {
    name: 'Tavern Brawler',
    nameIT: 'Rissoso da Taverna',
    description: 'You are proficient with improvised weapons and unarmed strikes. When you hit a creature with an unarmed strike or improvised weapon, you can deal 1d4 bludgeoning damage.',
    descriptionIT: 'Sei competente con armi improvvisate e attacchi disarmati. Quando colpisci una creatura con un attacco disarmato o arma improvvisata, puoi infliggere 1d4 danni contundenti.',
    level: 1,
  },
  equipment: ['A belaying pin', '50 feet of silk rope', 'A lucky charm', 'A set of common clothes', '10 gp'],
  equipmentIT: ['Una caviglia di legno', '15 metri di corda di seta', 'Un portafortuna', 'Un set di abiti comuni', '10 mo'],
}

export const soldier: Background = {
  id: 'soldier',
  name: 'Soldier',
  nameIT: 'Soldato',
  description: 'War has been your life for as long as you care to remember. You trained as a member of an organized military force.',
  descriptionIT: 'La guerra è stata la tua vita finché ricordi. Ti sei addestrato come membro di una forza militare organizzata.',
  abilityScoreOptions: {
    primary: ['STR', 'DEX', 'WIS'],
    secondary: ['STR', 'DEX', 'WIS'],
  },
  skillProficiencies: [
    { type: 'skill', value: 'athletics', valueIT: 'Atletica' },
    { type: 'skill', value: 'intimidation', valueIT: 'Intimidire' },
  ],
  toolProficiency: { type: 'tool', value: 'Gaming Set', valueIT: 'Set da Gioco' },
  originFeat: {
    name: 'Savage Attacker',
    nameIT: 'Attaccante Selvaggio',
    description: 'Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon\'s damage dice and use either total.',
    descriptionIT: 'Una volta per turno quando tiri il danno per un attacco con arma da mischia, puoi ritirare i dadi di danno dell\'arma e usare qualsiasi risultato.',
    level: 1,
  },
  equipment: ['An insignia of rank', 'A trophy from a fallen enemy', 'Bone dice', 'A set of common clothes', '10 gp'],
  equipmentIT: ['Un distintivo di grado', 'Un trofeo da un nemico caduto', 'Dadi in osso', 'Un set di abiti comuni', '10 mo'],
}

export const wayfarer: Background = {
  id: 'wayfarer',
  name: 'Wayfarer',
  nameIT: 'Viandante',
  description: 'You are a wanderer, always on the move, seeking adventure and new horizons.',
  descriptionIT: 'Sei un vagabondo, sempre in movimento, alla ricerca di avventure e nuovi orizzonti.',
  abilityScoreOptions: {
    primary: ['DEX', 'WIS', 'CHA'],
    secondary: ['DEX', 'WIS', 'CHA'],
  },
  skillProficiencies: [
    { type: 'skill', value: 'insight', valueIT: 'Intuizione' },
    { type: 'skill', value: 'stealth', valueIT: 'Furtività' },
  ],
  toolProficiency: { type: 'tool', value: "Thieves' Tools", valueIT: 'Arnesi da Scasso' },
  originFeat: {
    name: 'Lucky',
    nameIT: 'Fortunato',
    description: 'You have 3 luck points. Whenever you make an attack roll, an ability check, or a saving throw, you can spend one luck point to roll an additional d20. You can choose to spend one of your luck points after you roll the die, but before the outcome is determined.',
    descriptionIT: 'Hai 3 punti fortuna. Quando effettui un tiro per colpire, una prova di caratteristica o un tiro salvezza, puoi spendere un punto fortuna per tirare un d20 aggiuntivo e scegliere quale risultato usare.',
    level: 1,
  },
  equipment: ['A walking staff', 'A traveler\'s cloak', 'A set of common clothes', '10 gp'],
  equipmentIT: ['Un bastone da passeggio', 'Un mantello da viaggiatore', 'Un set di abiti comuni', '10 mo'],
}

export const urchin: Background = {
  id: 'urchin',
  name: 'Urchin',
  nameIT: 'Monello',
  description: 'You grew up on the streets, orphaned and poor, learning to survive by wit and stealth.',
  descriptionIT: 'Sei cresciuto per le strade, orfano e povero, imparando a sopravvivere con astuzia e furtività.',
  abilityScoreOptions: {
    primary: ['DEX', 'CON', 'CHA'],
    secondary: ['DEX', 'CON', 'CHA'],
  },
  skillProficiencies: [
    { type: 'skill', value: 'sleight_of_hand', valueIT: 'Rapidità di Mano' },
    { type: 'skill', value: 'stealth', valueIT: 'Furtività' },
  ],
  toolProficiency: { type: 'tool', value: "Thieves' Tools", valueIT: 'Arnesi da Scasso' },
  originFeat: {
    name: 'Skulker',
    nameIT: 'Appostatore',
    description: 'You can try to hide when you are lightly obscured. When you are hidden from a creature and miss it with a ranged weapon attack, making the attack doesn\'t reveal your position.',
    descriptionIT: 'Puoi provare a nasconderti quando sei leggermente oscurato. Quando sei nascosto da una creatura e la manchi con un attacco a distanza, fare l\'attacco non rivela la tua posizione.',
    level: 1,
  },
  equipment: ['A small knife', 'A map of the city you grew up in', 'A pet mouse', 'A token from your parents', 'A set of common clothes', '10 gp'],
  equipmentIT: ['Un coltellino', 'Una mappa della città in cui sei cresciuto', 'Un topolino domestico', 'Un ricordo dei tuoi genitori', 'Un set di abiti comuni', '10 mo'],
}

export const backgrounds: Background[] = [
  acolyte,
  artisan,
  charlatan,
  criminal,
  entertainer,
  farmer,
  guard,
  guildArtisan,
  hermit,
  merchant,
  noble,
  sage,
  sailor,
  soldier,
  wayfarer,
  urchin,
]
