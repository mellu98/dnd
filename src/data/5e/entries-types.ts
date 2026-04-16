/**
 * EntryNode — AST types for 5etools rich-text "entries" format.
 *
 * 5etools entries use a structured markup like:
 *   {@damage 1d6}
 *   {@spell fireball}
 *   {@condition prone}
 *   {type: "entries", name: "At Higher Levels", entries: [...]}
 *   {type: "list", items: [...]}
 *   {type: "table", colLabels: [...], rows: [...]}
 */

export type EntryNode =
  | { type: 'text'; content: string }
  | { type: 'dice'; notation: string; label?: string }
  | { type: 'spell-ref'; spellId: string; name: string }
  | { type: 'condition-ref'; conditionId: string; name: string }
  | { type: 'item-ref'; itemId: string; name: string }
  | { type: 'creature-ref'; creatureId: string; name: string }
  | { type: 'skill-ref'; skillId: string; name: string }
  | { type: 'section'; name: string; children: EntryNode[] }
  | { type: 'list'; items: EntryNode[][]; style?: string }
  | { type: 'table'; caption?: string; headers: string[]; rows: string[][] }
  | { type: 'blockquote'; children: EntryNode[] }
  | { type: 'italic'; content: string }
  | { type: 'bold'; content: string }
  | { type: 'inline-damage'; text: string }
