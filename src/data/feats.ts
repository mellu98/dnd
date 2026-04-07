import type { Feat } from '../types/feat'

export const feats: Feat[] = [
  {
    id: 'alert',
    name: 'Alert',
    nameIT: 'Allerta',
    description:
      "You gain +5 to initiative. You can't be surprised while conscious. Other creatures don't gain advantage on attack rolls against you as a result of being unseen.",
    descriptionIT:
      "Ottieni +5 all'iniziativa. Non puoi essere sorpreso mentre sei cosciente. Le altre creature non ottengono vantaggio ai tiri per colpire contro di te per essere invisibili.",
    mechanicIT: "+5 all'iniziativa",
    source: 'PHB 2024',
  },
  {
    id: 'tough',
    name: 'Tough',
    nameIT: 'Robusto',
    description: 'Your hit point maximum increases by 2, and it increases by 2 every time you gain a level.',
    descriptionIT: 'Il tuo massimo di punti ferita aumenta di 2, e aumenta di 2 ogni volta che guadagni un livello.',
    mechanicIT: '+2 PF max per livello',
    source: 'PHB 2024',
  },
  {
    id: 'mobile',
    name: 'Mobile',
    nameIT: 'Mobile',
    description:
      "Your speed increases by 10 feet. When you use the Dash action, difficult terrain doesn't cost you extra movement. When you make a melee attack against a creature, you don't provoke opportunity attacks from that creature for the rest of the turn.",
    descriptionIT:
      "La tua velocità aumenta di 10 piedi. Quando usi l'azione Scatto, il terreno difficile non costa movimento extra. Quando effettui un attacco in mischia contro una creatura, non provochi attacchi di opportunità da quella creatura per il resto del turno.",
    mechanicIT: '+3 m di velocità',
    source: 'PHB 2024',
  },
  {
    id: 'war_caster',
    name: 'War Caster',
    nameIT: 'Incantatore da Guerra',
    description:
      "You have advantage on Constitution saving throws to maintain concentration on a spell when you take damage. You can perform the somatic components of spells even when you have weapons or a shield in one or both hands. When a hostile creature's movement provokes an opportunity attack from you, you can use your reaction to cast a spell at the creature rather than making an opportunity attack.",
    descriptionIT:
      'Hai vantaggio ai tiri salvezza su Costituzione per mantenere la concentrazione su un incantesimo. Puoi eseguire le componenti somatiche anche con armi o scudo in mano. Quando una creatura ostile provoca un attacco di opportunità, puoi lanciare un incantesimo invece di attaccare.',
    mechanicIT: 'Vantaggio Concentrazione, incantesimi di opportunità',
    source: 'PHB 2024',
  },
  {
    id: 'shield_master',
    name: 'Shield Master',
    nameIT: 'Maestro dello Scudo',
    description:
      "If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5 feet of you with your shield. If you aren't incapacitated, you can add your shield's AC bonus to Dexterity saving throws. If you are subjected to an effect that allows a Dexterity saving throw for half damage, you can use your reaction to take no damage if you succeed.",
    descriptionIT:
      "Se compi l'azione Attacco, puoi usare un'azione bonus per spingere una creatura entro 1,5 m con lo scudo. Aggiungi il bonus CA dello scudo ai TS su Destrezza. Se riesci in un TS su Des per metà danno, non subisci danni.",
    mechanicIT: 'Bonus CA ai TS Destrezza, schivata completa',
    source: 'PHB 2024',
  },
  {
    id: 'lucky',
    name: 'Lucky',
    nameIT: 'Fortunato',
    description:
      'You have 3 luck points. Whenever you make an attack roll, an ability check, or a saving throw, you can spend one luck point to roll an additional d20. You can choose to spend one of your luck points after you roll the die, but before the outcome is determined.',
    descriptionIT:
      'Hai 3 punti fortuna. Quando effettui un tiro per colpire, una prova di caratteristica o un tiro salvezza, puoi spendere un punto fortuna per tirare un d20 aggiuntivo e scegliere quale risultato usare.',
    mechanicIT: '3 punti fortuna — ritira d20 a scelta',
    source: 'PHB 2024',
  },
  // ═══ Origin Feats (from backgrounds) ═══
  {
    id: 'musician',
    name: 'Musician',
    nameIT: 'Musicista',
    description:
      "You gain proficiency with three musical instruments. When you or a friendly creature within 30 feet of you makes an ability check, that creature can add a d4 to the check if you are playing a musical instrument as part of the action.",
    descriptionIT:
      'Ottieni competenza con tre strumenti musicali. Quando tu o una creatura amica entro 30 piedi effettua una prova di caratteristica, quella creatura può aggiungere un d4 al tiro se stai suonando uno strumento musicale.',
    source: 'PHB 2024',
  },
  {
    id: 'crafter',
    name: 'Crafter',
    nameIT: 'Artefice',
    description:
      "You gain proficiency with three different types of artisan's tools. During downtime, you can craft nonmagical items using those tools. When you finish a long rest, you can craft one common or uncommon magic item with those tools.",
    descriptionIT:
      'Ottieni competenza con tre diversi tipi di strumenti da artigiano. Durante i tempi morti, puoi creare oggetti non magici. Quando completi un riposo lungo, puoi creare un oggetto magico comune o non comune.',
    source: 'PHB 2024',
  },
  {
    id: 'skilled',
    name: 'Skilled',
    nameIT: 'Abile',
    description:
      'You gain proficiency in any combination of three skills or tools of your choice.',
    descriptionIT:
      'Ottieni competenza in qualsiasi combinazione di tre abilità o strumenti a tua scelta.',
    source: 'PHB 2024',
  },
  {
    id: 'healer',
    name: 'Healer',
    nameIT: 'Guaritore',
    description:
      "You gain the ability to tend to wounds and quickly stabilize allies. When you use a healer's kit to stabilize a creature, that creature also regains 1 hit point. As an action, you can spend one use of a healer's kit to tend to a creature and restore 1d6+4 hit points to it.",
    descriptionIT:
      'Quando usi un kit da guaritore per stabilizzare una creatura, quella recupera anche 1 pf. Come azione, puoi spendere un uso del kit per ripristinare 1d6+4 pf a una creatura.',
    source: 'PHB 2024',
  },
  {
    id: 'tavern_brawler',
    name: 'Tavern Brawler',
    nameIT: 'Rissoso da Taverna',
    description:
      'You are proficient with improvised weapons. When you hit a creature with an unarmed strike or an improvised weapon, the damage is 1d4 + the ability modifier used for the attack. If the improvised weapon is thrown, its range is 15/30.',
    descriptionIT:
      'Sei competente con armi improvvisate. Quando colpisci con un attacco disarmato o arma improvvisata, il danno è 1d4 + il modificatore di caratteristica. Se lanciata, gittata 4,5/9 m.',
    source: 'PHB 2024',
  },
  {
    id: 'savage_attacker',
    name: 'Savage Attacker',
    nameIT: 'Attaccante Selvaggio',
    description:
      'Once per turn when you hit with a weapon attack, you can roll the weapon\'s damage dice twice and use either roll.',
    descriptionIT:
      'Una volta per turno, quando colpisci con un attacco con arma, puoi tirare i dadi del danno due volte e usare qualsiasi risultato.',
    source: 'PHB 2024',
  },
  {
    id: 'skulker',
    name: 'Skulker',
    nameIT: 'Appostatore',
    description:
      "You can try to hide when you are lightly obscured from the creature you are hiding from. When you are hidden from a creature and miss it with a ranged weapon attack, making the attack doesn't reveal your position. Dim light doesn't impose disadvantage on your Wisdom (Perception) checks relying on sight.",
    descriptionIT:
      'Puoi provare a nasconderti quando sei leggermente oscurato. Se manchi un attacco a distanza mentre sei nascosto, non riveli la tua posizione. La penombra non impone svantaggio alle prove di Percezione basate sulla vista.',
    source: 'PHB 2024',
  },
  {
    id: 'fey_touched',
    name: 'Fey Touched',
    nameIT: 'Toccato dal Fatato',
    description:
      "Your exposure to the Feywild's magic grants you Misty Step once per long rest for free. You also learn one 1st-level Divination or Enchantment spell. You can cast each once per long rest, or using spell slots. The spellcasting ability is Int, Wis, or Cha (your choice).",
    descriptionIT:
      'La magia del Feywild ti concede Passo Veloce gratuitamente una volta per riposo lungo. Impari anche un incantesimo di 1° livello di Divinazione o Ammaliamento.',
    source: 'PHB 2024',
  },
  {
    id: 'magic_initiate_cleric',
    name: 'Magic Initiate (Cleric)',
    nameIT: 'Iniziato alla Magia (Chierico)',
    description:
      'You learn two Cleric cantrips and one 1st-level Cleric spell. You can cast the 1st-level spell once per long rest. Wisdom is your spellcasting ability for these spells.',
    descriptionIT:
      'Impari due trucchetti e un incantesimo di 1° livello dalla lista del Chierico. Puoi lanciare l\'incantesimo una volta per riposo lungo. Saggezza è la tua caratteristica da incantatore.',
    source: 'PHB 2024',
  },
  {
    id: 'magic_initiate_wizard',
    name: 'Magic Initiate (Wizard)',
    nameIT: 'Iniziato alla Magia (Mago)',
    description:
      'You learn two Wizard cantrips and one 1st-level Wizard spell. You can cast the 1st-level spell once per long rest. Intelligence is your spellcasting ability for these spells.',
    descriptionIT:
      'Impari due trucchetti e un incantesimo di 1° livello dalla lista del Mago. Puoi lanciare l\'incantesimo una volta per riposo lungo. Intelligenza è la tua caratteristica da incantatore.',
    source: 'PHB 2024',
  },
  // ═══ Combat Feats ═══
  {
    id: 'great_weapon_master',
    name: 'Great Weapon Master',
    nameIT: 'Maestro delle Armi a Due Mani',
    description:
      "When you score a critical hit with a melee weapon or reduce a creature to 0 hit points, you can make one melee weapon attack as a bonus action. Before you make a melee attack with a heavy weapon, you can choose to take a -5 penalty to the attack roll. If the attack hits, it deals +10 damage.",
    descriptionIT:
      'Quando fai un colpo critico o riduci una creatura a 0 pf, puoi fare un attacco bonus in mischia. Prima di attaccare con un\'arma pesante, puoi scegliere -5 al tiro per colpire per +10 ai danni.',
    source: 'PHB 2024',
  },
  {
    id: 'sharpshooter',
    name: 'Sharpshooter',
    nameIT: 'Tiratore Scelto',
    description:
      "Attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls. Your ranged weapon attacks ignore half and three-quarters cover. Before you make a ranged weapon attack, you can choose to take a -5 penalty to the attack roll. If the attack hits, it deals +10 damage.",
    descriptionIT:
      'Attaccare a lunga gittata non impone svantaggio. I tuoi attacchi a distanza ignorano mezza copertura e tre quarti. Puoi scegliere -5 al tiro per colpire per +10 ai danni.',
    source: 'PHB 2024',
  },
  {
    id: 'crossbow_expert',
    name: 'Crossbow Expert',
    nameIT: 'Esperto di Balestre',
    description:
      "You ignore the loading property of crossbows. Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls. When you use the Attack action and attack with a one-handed weapon, you can make a bonus action attack with a hand crossbow.",
    descriptionIT:
      'Ignori la proprietà Caricamento delle balestre. Essere entro 1,5 m da una creatura ostile non impone svantaggio. Quando attacchi con un\'arma a una mano, puoi fare un attacco bonus con una balestra a mano.',
    source: 'PHB 2024',
  },
  {
    id: 'polearm_master',
    name: 'Polearm Master',
    nameIT: 'Maestro delle Armi in Asta',
    description:
      "When you take the Attack action and attack with a glaive, halberd, quarterstaff, or spear, you can make a bonus action attack with the opposite end of the weapon. The bonus action attack uses the same ability modifier and deals 1d6 bludgeoning damage. While you are wielding one of these weapons, creatures provoke opportunity attacks from you when they enter your reach.",
    descriptionIT:
      'Quando attacchi con una lama, alabarda, bastone ferrato o lancia, puoi fare un attacco bonus con l\'estremità opposta per 1d6. Le creature provocano attacchi di opportunità quando entrano nella tua portata.',
    source: 'PHB 2024',
  },
  {
    id: 'sentinel',
    name: 'Sentinel',
    nameIT: 'Sentinella',
    description:
      'When you hit a creature with an opportunity attack, the creature\'s speed becomes 0 for the rest of the turn. Creatures provoke opportunity attacks from you even when they take the Disengage action. When a creature within 5 feet of you makes an attack against a target other than you, you can use your reaction to make a melee weapon attack against that creature.',
    descriptionIT:
      'Quando colpisci con un attacco di opportunità, la velocità della creatura diventa 0. Le creature provocano attacchi di opportunità anche con Disimpegno. Quando una creatura entro 1,5 m attacca altri, puoi usare la reazione per attaccarla.',
    source: 'PHB 2024',
  },
  {
    id: 'dual_wielder',
    name: 'Dual Wielder',
    nameIT: 'Combattente con Due Armi',
    description:
      "You gain a +1 bonus to AC while wielding a separate melee weapon in each hand. You can use two-weapon fighting even when the one-handed melee weapons you are wielding aren't light. You can draw or stow two one-handed weapons when you would normally be able to draw or stow only one.",
    descriptionIT:
      'Ottieni +1 CA mentre impugni due armi da mischia. Puoi usare il combattimento con due armi anche se non sono leggere. Puoi estrarre o riporre due armi invece di una.',
    source: 'PHB 2024',
  },
  {
    id: 'defensive_duelist',
    name: 'Defensive Duelist',
    nameIT: 'Duellante Difensivo',
    description:
      "Prerequisite: Dexterity 13 or higher. When you are wielding a finesse weapon with which you have proficiency and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC, potentially causing the attack to miss.",
    descriptionIT:
      'Requisito: Des 13+. Quando impugni un\'arma fine con cui sei competente e una creatura ti colpisce in mischia, puoi usare la reazione per aggiungere il bonus di competenza alla CA.',
    source: 'PHB 2024',
  },
  {
    id: 'charger',
    name: 'Charger',
    nameIT: 'Carica',
    description:
      "When you use the Dash action, your speed increases by 10 feet for that action. If you move at least 10 feet in a straight line toward a target and then hit it with a melee attack, you deal +5 damage, or you can choose to push the target up to 10 feet away from you.",
    descriptionIT:
      'Quando usi Scatto, la velocità aumenta di 3 m. Se ti muovi di almeno 3 m in linea retta e colpisci in mischia, fai +5 danni oppure spingi il bersaglio di 3 m.',
    source: 'PHB 2024',
  },
  // ═══ Defensive Feats ═══
  {
    id: 'heavy_armor_master',
    name: 'Heavy Armor Master',
    nameIT: 'Maestro dell\'Armatura Pesante',
    description:
      'Prerequisite: Proficiency with heavy armor. While wearing heavy armor, bludgeoning, piercing, and slashing damage you take from nonmagical weapons is reduced by 3.',
    descriptionIT:
      'Requisito: Competenza con armature pesanti. Mentre indossi un\'armatura pesante, i danni contundenti, perforanti e taglienti da armi non magiche sono ridotti di 3.',
    source: 'PHB 2024',
  },
  {
    id: 'moderately_armored',
    name: 'Moderately Armored',
    nameIT: 'Armatura Media',
    description:
      'You gain proficiency with light armor, medium armor, and shields.',
    descriptionIT:
      'Ottieni competenza con armature leggere, armature medie e scudi.',
    source: 'PHB 2024',
  },
  {
    id: 'lightly_armored',
    name: 'Lightly Armored',
    nameIT: 'Armatura Leggera',
    description:
      'You gain proficiency with light armor and shields.',
    descriptionIT:
      'Ottieni competenza con armature leggere e scudi.',
    source: 'PHB 2024',
  },
  {
    id: 'durable',
    name: 'Durable',
    nameIT: 'Resistente',
    description:
      "When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2).",
    descriptionIT:
      'Quando tiri un Dado Vita per recuperare pf, il minimo che recuperi è pari al doppio del tuo modificatore di Costituzione (minimo 2).',
    source: 'PHB 2024',
  },
  {
    id: 'resilient_con',
    name: 'Resilient (Constitution)',
    nameIT: 'Resiliente (Costituzione)',
    description:
      'Choose one ability. You gain proficiency in saving throws using that ability and increase that ability score by 1, to a maximum of 20.',
    descriptionIT:
      'Scegli una caratteristica. Ottieni competenza nei tiri salvezza su quella caratteristica e aumenta il punteggio di 1 (max 20).',
    source: 'PHB 2024',
  },
  {
    id: 'resilient_dex',
    name: 'Resilient (Dexterity)',
    nameIT: 'Resiliente (Destrezza)',
    description:
      'Choose one ability. You gain proficiency in saving throws using that ability and increase that ability score by 1, to a maximum of 20.',
    descriptionIT:
      'Scegli una caratteristica. Ottieni competenza nei tiri salvezza su quella caratteristica e aumenta il punteggio di 1 (max 20).',
    source: 'PHB 2024',
  },
  {
    id: 'resilient_wis',
    name: 'Resilient (Wisdom)',
    nameIT: 'Resiliente (Saggezza)',
    description:
      'Choose one ability. You gain proficiency in saving throws using that ability and increase that ability score by 1, to a maximum of 20.',
    descriptionIT:
      'Scegli una caratteristica. Ottieni competenza nei tiri salvezza su quella caratteristica e aumenta il punteggio di 1 (max 20).',
    source: 'PHB 2024',
  },
  // ═══ Utility / Social Feats ═══
  {
    id: 'actor',
    name: 'Actor',
    nameIT: 'Attore',
    description:
      'Increase your Charisma by 1, to a maximum of 20. You have advantage on Deception and Performance checks when trying to pass yourself off as a different person. You can mimic the speech of another creature or the sounds made by other creatures if you hear them for at least 1 minute.',
    descriptionIT:
      'Aumenta Carisma di 1 (max 20). Hai vantaggio nelle prove di Inganno e Intrattenere per impersonare un\'altra persona. Puoi imitare il discorso di un\'altra creatura dopo averla ascoltata per almeno 1 minuto.',
    source: 'PHB 2024',
  },
  {
    id: 'athlete',
    name: 'Athlete',
    nameIT: 'Atleta',
    description:
      'Increase your Strength or Dexterity by 1, to a maximum of 20. When you are prone, standing up uses only 5 feet of movement. Climbing doesn\'t cost extra movement. You can make a running long or high jump after moving only 5 feet.',
    descriptionIT:
      'Aumenta Forza o Destrezza di 1 (max 20). Alzarti da pronoto usa solo 1,5 m di movimento. Arrampicarsi non costa movimento extra. Puoi saltare dopo aver mosso solo 1,5 m.',
    source: 'PHB 2024',
  },
  {
    id: 'inspiring_leader',
    name: 'Inspiring Leader',
    nameIT: 'Leader Ispiratore',
    description:
      "Prerequisite: Charisma 13 or higher. You can spend 10 minutes inspiring up to six friendly creatures within 30 feet. Each inspired creature gains temporary hit points equal to your level + your Charisma modifier. A creature can't gain temporary hit points from this feat again until it finishes a short or long rest.",
    descriptionIT:
      'Requisito: Car 13+. Puoi spendere 10 minuti per ispirare fino a 6 creature amiche. Ogni creatura ottiene pf temporanei pari al tuo livello + modificatore Carisma.',
    source: 'PHB 2024',
  },
  {
    id: 'observant',
    name: 'Observant',
    nameIT: 'Osservatore',
    description:
      "Increase your Intelligence or Wisdom by 1, to a maximum of 20. If you can see a creature's mouth while it speaks, you understand what it's saying if it speaks a language you know. Your passive Perception and Investigation scores increase by 5.",
    descriptionIT:
      'Aumenta Intelligenza o Saggezza di 1 (max 20). Se vedi la bocca di una creatura mentre parla, comprendi ciò che dice. La tua Percezione e Indagine passive aumentano di 5.',
    source: 'PHB 2024',
  },
  // ═══ Magic Feats ═══
  {
    id: 'elemental_adept',
    name: 'Elemental Adept',
    nameIT: 'Adepto Elementale',
    description:
      'Prerequisite: The ability to cast at least one spell. Choose one damage type: acid, cold, fire, lightning, or thunder. Spells you cast ignore resistance to that damage type. When rolling damage for that type, treat any 1 on a damage die as a 2.',
    descriptionIT:
      'Requisito: Capacità di lanciare almeno un incantesimo. Scegli un tipo di danno: acido, freddo, fuoco, fulmine o tuono. Gli incantesimi ignorano la resistenza a quel danno. I dadi da 1 contano come 2.',
    source: 'PHB 2024',
  },
  {
    id: 'ritual_caster',
    name: 'Ritual Caster',
    nameIT: 'Incantatore Rituale',
    description:
      "You have learned a number of spells that can be cast as rituals. Choose a class: Bard, Cleric, Druid, Sorcerer, Warlock, or Wizard. You learn two 1st-level spells from that class's spell list that have the ritual tag.",
    descriptionIT:
      'Hai imparato incantesimi che possono essere lanciati come rituali. Scegli una classe e impara due incantesimi di 1° livello con il tag rituale dalla lista di quella classe.',
    source: 'PHB 2024',
  },
  {
    id: 'spell_sniper',
    name: 'Spell Sniper',
    nameIT: 'Cecchino degli Incantesimi',
    description:
      'Prerequisite: The ability to cast at least one spell. When you cast a spell that requires a spell attack roll, its range is doubled. Your ranged spell attacks ignore half and three-quarters cover. You learn one cantrip that requires an attack roll from any class.',
    descriptionIT:
      'Requisito: Capacità di lanciare almeno un incantesimo. La gittata dei tuoi incantesimi raddoppia. Gli attacchi a distanza ignorano mezza e tre quarti copertura. Impari un trucco che richiede un tiro per colpire.',
    source: 'PHB 2024',
  },
  {
    id: 'magic_initiate_bard',
    name: 'Magic Initiate (Bard)',
    nameIT: 'Iniziato alla Magia (Bardo)',
    description:
      'You learn two Bard cantrips and one 1st-level Bard spell. You can cast the 1st-level spell once per long rest. Charisma is your spellcasting ability for these spells.',
    descriptionIT:
      'Impari due trucchetti e un incantesimo di 1° livello dalla lista del Bardo. Puoi lanciare l\'incantesimo una volta per riposo lungo. Carisma è la tua caratteristica da incantatore.',
    source: 'PHB 2024',
  },
  {
    id: 'magic_initiate_druid',
    name: 'Magic Initiate (Druid)',
    nameIT: 'Iniziato alla Magia (Druido)',
    description:
      'You learn two Druid cantrips and one 1st-level Druid spell. You can cast the 1st-level spell once per long rest. Wisdom is your spellcasting ability for these spells.',
    descriptionIT:
      'Impari due trucchetti e un incantesimo di 1° livello dalla lista del Druido. Puoi lanciare l\'incantesimo una volta per riposo lungo. Saggezza è la tua caratteristica da incantatore.',
    source: 'PHB 2024',
  },
  {
    id: 'magic_initiate_sorcerer',
    name: 'Magic Initiate (Sorcerer)',
    nameIT: 'Iniziato alla Magia (Stregone)',
    description:
      'You learn two Sorcerer cantrips and one 1st-level Sorcerer spell. You can cast the 1st-level spell once per long rest. Charisma is your spellcasting ability for these spells.',
    descriptionIT:
      'Impari due trucchetti e un incantesimo di 1° livello dalla lista dello Stregone. Puoi lanciare l\'incantesimo una volta per riposo lungo. Carisma è la tua caratteristica da incantatore.',
    source: 'PHB 2024',
  },
  {
    id: 'magic_initiate_warlock',
    name: 'Magic Initiate (Warlock)',
    nameIT: 'Iniziato alla Magia (Warlock)',
    description:
      'You learn two Warlock cantrips and one 1st-level Warlock spell. You can cast the 1st-level spell once per long rest. Charisma is your spellcasting ability for these spells.',
    descriptionIT:
      'Impari due trucchetti e un incantesimo di 1° livello dalla lista del Warlock. Puoi lanciare l\'incantesimo una volta per riposo lungo. Carisma è la tua caratteristica da incantatore.',
    source: 'PHB 2024',
  },
]

export function getFeatById(id: string): Feat | undefined {
  return feats.find((f) => f.id === id)
}
