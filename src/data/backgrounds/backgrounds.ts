import type { Background } from '../../types'

export const acolyte: Background = {
  id: 'acolyte',
  name: 'Acolyte',
  nameIT: 'Accolito',
  skillProficiencies: [
    { type: 'skill', value: 'insight', valueIT: 'Intuizione' },
    { type: 'skill', value: 'religion', valueIT: 'Religione' },
  ],
  toolProficiencies: [],
  languages: 2,
  feature: {
    name: 'Shelter of the Faithful',
    nameIT: 'Rifugio del Fedele',
    description: 'You and your companions can receive free healing and care at temples of your faith, and supporters will provide a modest lifestyle for you.',
    descriptionIT: 'Tu e i tuoi compagni potete ricevere cure gratuite nei templi della vostra fede, e i sostenitori vi forniranno uno stile di vita modesto.',
    level: 1,
  },
  equipment: [
    'A holy symbol',
    'A prayer book or prayer wheel',
    '5 sticks of incense',
    'Vestments',
    'A set of common clothes',
    '15 gp',
  ],
  equipmentIT: [
    'Un simbolo sacro',
    'Un libro di preghiere o una ruota di preghiera',
    '5 bastoncini di incenso',
    'Paramenti sacri',
    'Un set di abiti comuni',
    '15 mo',
  ],
}

export const criminal: Background = {
  id: 'criminal',
  name: 'Criminal',
  nameIT: 'Criminale',
  skillProficiencies: [
    { type: 'skill', value: 'deception', valueIT: 'Inganno' },
    { type: 'skill', value: 'stealth', valueIT: 'Furtività' },
  ],
  toolProficiencies: [
    { type: 'tool', value: "Thieves' tools", valueIT: 'Arnesi da scasso' },
    { type: 'tool', value: 'Gaming set', valueIT: 'Set da gioco' },
  ],
  languages: 0,
  feature: {
    name: 'Criminal Contact',
    nameIT: 'Contatto Criminale',
    description: 'You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals.',
    descriptionIT: 'Hai un contatto affidabile che funge da collegamento con una rete di altri criminali.',
    level: 1,
  },
  equipment: [
    'A crowbar',
    'A set of dark common clothes including a hood',
    '15 gp',
  ],
  equipmentIT: [
    'Un piede di porco',
    'Un set di abiti comuni scuri con cappuccio',
    '15 mo',
  ],
}

export const folkHero: Background = {
  id: 'folk-hero',
  name: 'Folk Hero',
  nameIT: 'Eroe Popolare',
  skillProficiencies: [
    { type: 'skill', value: 'animal_handling', valueIT: 'Addestrare Animali' },
    { type: 'skill', value: 'survival', valueIT: 'Sopravvivenza' },
  ],
  toolProficiencies: [
    { type: 'tool', value: "Artisan's tools", valueIT: 'Strumenti da artigiano' },
    { type: 'tool', value: 'Vehicles (land)', valueIT: 'Veicoli (terra)' },
  ],
  languages: 0,
  feature: {
    name: 'Rustic Hospitality',
    nameIT: 'Ospitalità Rustica',
    description: 'Common folk will shelter you, hide you, and shield you from the law or anyone searching for you, as long as you do not endanger them.',
    descriptionIT: 'La gente comune ti darà rifugio, ti nasconderà e ti proteggerà dalla legge o da chiunque ti cerchi, purché non li metta in pericolo.',
    level: 1,
  },
  equipment: [
    "A set of artisan's tools",
    'A shovel',
    'An iron pot',
    'A set of common clothes',
    '10 gp',
  ],
  equipmentIT: [
    'Un set di strumenti da artigiano',
    'Una pala',
    'Una pentola di ferro',
    'Un set di abiti comuni',
    '10 mo',
  ],
}

export const noble: Background = {
  id: 'noble',
  name: 'Noble',
  nameIT: 'Nobile',
  skillProficiencies: [
    { type: 'skill', value: 'history', valueIT: 'Storia' },
    { type: 'skill', value: 'persuasion', valueIT: 'Persuasione' },
  ],
  toolProficiencies: [
    { type: 'tool', value: 'Gaming set', valueIT: 'Set da gioco' },
  ],
  languages: 1,
  feature: {
    name: 'Position of Privilege',
    nameIT: 'Posizione di Privilegio',
    description: 'You are welcome in high society, and common folk make every effort to accommodate you and avoid your displeasure.',
    descriptionIT: "Sei il benvenuto nell'alta società, e la gente comune fa di tutto per accontentarti ed evitare il tuo disappunto.",
    level: 1,
  },
  equipment: [
    'A set of fine clothes',
    'A signet ring',
    'A scroll of pedigree',
    '25 gp',
  ],
  equipmentIT: [
    'Un set di abiti eleganti',
    'Un anello con sigillo',
    'Una pergamena di lignaggio',
    '25 mo',
  ],
}

export const sage: Background = {
  id: 'sage',
  name: 'Sage',
  nameIT: 'Saggio',
  skillProficiencies: [
    { type: 'skill', value: 'arcana', valueIT: 'Arcano' },
    { type: 'skill', value: 'history', valueIT: 'Storia' },
  ],
  toolProficiencies: [],
  languages: 2,
  feature: {
    name: 'Researcher',
    nameIT: 'Ricercatore',
    description: 'When you attempt to learn or recall a piece of lore, if you do not know the information, you often know where and from whom you can obtain it.',
    descriptionIT: 'Quando cerchi di apprendere o ricordare una conoscenza, se non possiedi le informazioni, spesso sai dove e da chi puoi ottenerle.',
    level: 1,
  },
  equipment: [
    'A bottle of black ink',
    'A quill',
    'A small knife',
    'A letter from a dead colleague with an unanswered question',
    'A set of common clothes',
    '10 gp',
  ],
  equipmentIT: [
    'Una bottiglia di inchiostro nero',
    'Una penna',
    'Un coltellino',
    'Una lettera di un collega defunto con una domanda senza risposta',
    'Un set di abiti comuni',
    '10 mo',
  ],
}

export const soldier: Background = {
  id: 'soldier',
  name: 'Soldier',
  nameIT: 'Soldato',
  skillProficiencies: [
    { type: 'skill', value: 'athletics', valueIT: 'Atletica' },
    { type: 'skill', value: 'intimidation', valueIT: 'Intimidire' },
  ],
  toolProficiencies: [
    { type: 'tool', value: 'Gaming set', valueIT: 'Set da gioco' },
    { type: 'tool', value: 'Vehicles (land)', valueIT: 'Veicoli (terra)' },
  ],
  languages: 0,
  feature: {
    name: 'Military Rank',
    nameIT: 'Grado Militare',
    description: 'Soldiers loyal to your former military organization still recognize your authority and influence, and will defer to you if of lower rank.',
    descriptionIT: 'I soldati leali alla tua ex organizzazione militare riconoscono ancora la tua autorità e ti rispettano se di grado inferiore.',
    level: 1,
  },
  equipment: [
    'An insignia of rank',
    'A trophy taken from a fallen enemy',
    'A set of bone dice or a deck of cards',
    'A set of common clothes',
    '10 gp',
  ],
  equipmentIT: [
    'Un distintivo di grado',
    'Un trofeo preso da un nemico caduto',
    'Un set di dadi in osso o un mazzo di carte',
    'Un set di abiti comuni',
    '10 mo',
  ],
}

export const charlatan: Background = {
  id: 'charlatan',
  name: 'Charlatan',
  nameIT: 'Ciarlatano',
  skillProficiencies: [
    { type: 'skill', value: 'deception', valueIT: 'Inganno' },
    { type: 'skill', value: 'sleight_of_hand', valueIT: 'Rapidità di Mano' },
  ],
  toolProficiencies: [
    { type: 'tool', value: 'Disguise kit', valueIT: 'Kit per travestimenti' },
    { type: 'tool', value: 'Forgery kit', valueIT: 'Kit per falsificazioni' },
  ],
  languages: 0,
  feature: {
    name: 'False Identity',
    nameIT: 'Falsa Identità',
    description: 'You have created a second identity with documentation, established acquaintances, and disguises that allow you to assume that persona.',
    descriptionIT: 'Hai creato una seconda identità con documenti, conoscenze e travestimenti che ti permettono di assumere quella persona.',
    level: 1,
  },
  equipment: [
    'A set of fine clothes',
    'A disguise kit',
    'Tools of the con (ten stoppered bottles, a set of weighted dice, a deck of marked cards, or a signet ring of an imaginary duke)',
    '15 gp',
  ],
  equipmentIT: [
    'Un set di abiti eleganti',
    'Un kit per travestimenti',
    'Strumenti della truffa (dieci bottiglie tappate, un set di dadi truccati, un mazzo di carte segnate o un anello con sigillo di un duca immaginario)',
    '15 mo',
  ],
}

export const entertainer: Background = {
  id: 'entertainer',
  name: 'Entertainer',
  nameIT: 'Intrattenitore',
  skillProficiencies: [
    { type: 'skill', value: 'acrobatics', valueIT: 'Acrobazia' },
    { type: 'skill', value: 'performance', valueIT: 'Intrattenere' },
  ],
  toolProficiencies: [
    { type: 'tool', value: 'Disguise kit', valueIT: 'Kit per travestimenti' },
    { type: 'tool', value: 'Musical instrument', valueIT: 'Strumento musicale' },
  ],
  languages: 0,
  feature: {
    name: 'By Popular Demand',
    nameIT: 'A Furor di Popolo',
    description: 'You can always find a place to perform, and you receive free lodging and food of a modest standard as long as you perform each night.',
    descriptionIT: 'Puoi sempre trovare un luogo dove esibirti e ricevi vitto e alloggio gratuiti di standard modesto, purché ti esibisca ogni sera.',
    level: 1,
  },
  equipment: [
    'A musical instrument',
    'The favor of an admirer (love letter, lock of hair, or trinket)',
    'A costume',
    '15 gp',
  ],
  equipmentIT: [
    'Uno strumento musicale',
    "Il favore di un ammiratore (lettera d'amore, ciocca di capelli o ninnolo)",
    'Un costume',
    '15 mo',
  ],
}

export const hermit: Background = {
  id: 'hermit',
  name: 'Hermit',
  nameIT: 'Eremita',
  skillProficiencies: [
    { type: 'skill', value: 'medicine', valueIT: 'Medicina' },
    { type: 'skill', value: 'religion', valueIT: 'Religione' },
  ],
  toolProficiencies: [
    { type: 'tool', value: 'Herbalism kit', valueIT: 'Kit da erborista' },
  ],
  languages: 1,
  feature: {
    name: 'Discovery',
    nameIT: 'Scoperta',
    description: 'During your seclusion, you discovered a unique and powerful truth — a fact about the cosmos, the gods, or the forces of nature.',
    descriptionIT: 'Durante il tuo isolamento, hai scoperto una verità unica e potente — un fatto sul cosmo, gli dei o le forze della natura.',
    level: 1,
  },
  equipment: [
    'A scroll case stuffed full of notes from your studies or prayers',
    'A winter blanket',
    'A set of common clothes',
    'An herbalism kit',
    '5 gp',
  ],
  equipmentIT: [
    'Un portarotoli pieno di appunti dei tuoi studi o preghiere',
    'Una coperta invernale',
    'Un set di abiti comuni',
    'Un kit da erborista',
    '5 mo',
  ],
}

export const outlander: Background = {
  id: 'outlander',
  name: 'Outlander',
  nameIT: 'Straniero',
  skillProficiencies: [
    { type: 'skill', value: 'athletics', valueIT: 'Atletica' },
    { type: 'skill', value: 'survival', valueIT: 'Sopravvivenza' },
  ],
  toolProficiencies: [
    { type: 'tool', value: 'Musical instrument', valueIT: 'Strumento musicale' },
  ],
  languages: 1,
  feature: {
    name: 'Wanderer',
    nameIT: 'Vagabondo',
    description: 'You have an excellent memory for maps and geography, and you can always find food and fresh water for yourself and up to five companions each day.',
    descriptionIT: 'Hai un\'ottima memoria per mappe e geografia, e puoi sempre trovare cibo e acqua per te e fino a cinque compagni ogni giorno.',
    level: 1,
  },
  equipment: [
    'A staff',
    'A hunting trap',
    'A trophy from an animal you killed',
    'A set of traveler\'s clothes',
    '10 gp',
  ],
  equipmentIT: [
    'Un bastone',
    'Una trappola da caccia',
    'Un trofeo di un animale che hai ucciso',
    'Un set di abiti da viaggio',
    '10 mo',
  ],
}

export const sailor: Background = {
  id: 'sailor',
  name: 'Sailor',
  nameIT: 'Marinaio',
  skillProficiencies: [
    { type: 'skill', value: 'athletics', valueIT: 'Atletica' },
    { type: 'skill', value: 'perception', valueIT: 'Percezione' },
  ],
  toolProficiencies: [
    { type: 'tool', value: "Navigator's tools", valueIT: 'Strumenti da navigatore' },
    { type: 'tool', value: 'Vehicles (water)', valueIT: 'Veicoli (acqua)' },
  ],
  languages: 0,
  feature: {
    name: "Ship's Passage",
    nameIT: 'Passaggio sulla Nave',
    description: 'You can secure free passage on a sailing ship for yourself and your companions, in exchange for assisting the crew during the voyage.',
    descriptionIT: 'Puoi ottenere un passaggio gratuito su una nave per te e i tuoi compagni, in cambio di assistenza all\'equipaggio durante il viaggio.',
    level: 1,
  },
  equipment: [
    'A belaying pin (club)',
    '50 feet of silk rope',
    'A lucky charm',
    'A set of common clothes',
    '10 gp',
  ],
  equipmentIT: [
    'Una caviglia di legno (clava)',
    '15 metri di corda di seta',
    'Un portafortuna',
    'Un set di abiti comuni',
    '10 mo',
  ],
}

export const urchin: Background = {
  id: 'urchin',
  name: 'Urchin',
  nameIT: 'Monello',
  skillProficiencies: [
    { type: 'skill', value: 'sleight_of_hand', valueIT: 'Rapidità di Mano' },
    { type: 'skill', value: 'stealth', valueIT: 'Furtività' },
  ],
  toolProficiencies: [
    { type: 'tool', value: 'Disguise kit', valueIT: 'Kit per travestimenti' },
    { type: 'tool', value: "Thieves' tools", valueIT: 'Arnesi da scasso' },
  ],
  languages: 0,
  feature: {
    name: 'City Secrets',
    nameIT: 'Segreti della Città',
    description: 'You know the secret patterns and flow of cities and can find passages through the urban sprawl that others would miss.',
    descriptionIT: 'Conosci i percorsi segreti e il flusso delle città e puoi trovare passaggi attraverso il tessuto urbano che altri non noterebbero.',
    level: 1,
  },
  equipment: [
    'A small knife',
    'A map of the city you grew up in',
    'A pet mouse',
    'A token to remember your parents by',
    'A set of common clothes',
    '10 gp',
  ],
  equipmentIT: [
    'Un coltellino',
    'Una mappa della città in cui sei cresciuto',
    'Un topolino domestico',
    'Un ricordo dei tuoi genitori',
    'Un set di abiti comuni',
    '10 mo',
  ],
}

export const backgrounds: Background[] = [
  acolyte,
  criminal,
  folkHero,
  noble,
  sage,
  soldier,
  charlatan,
  entertainer,
  hermit,
  outlander,
  sailor,
  urchin,
]
