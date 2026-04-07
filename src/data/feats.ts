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
]

export function getFeatById(id: string): Feat | undefined {
  return feats.find((f) => f.id === id)
}
