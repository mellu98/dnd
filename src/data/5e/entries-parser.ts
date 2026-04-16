/**
 * Parser for 5etools "entries" rich-text format.
 *
 * Converts raw 5etools entries (mixed strings and structured objects)
 * into a typed EntryNode[] AST suitable for React rendering.
 *
 * Phase 1 covers: plain strings, {@damage}, {@spell}, {@condition},
 *   {@item}, {@skill}, {@creature}, nested {type: "entries"}, {type: "list"},
 *   {type: "inset"}, italic/bold markup.
 */

import type { EntryNode } from './entries-types'
import { normalizeId } from './id-normalizer'

// ── Inline markup tag patterns ──────────────────────────────────────────────

const TAG_PATTERNS: Record<string, RegExp> = {
  damage: /\{@damage ([^}]+)\}/g,
  spell: /\{@spell ([^}]+)\}/g,
  condition: /\{@condition ([^}]+)\}/g,
  item: /\{@item ([^|]+)(?:\|[^}]+)?\}/g,
  skill: /\{@skill ([^}]+)\}/g,
  creature: /\{@creature ([^}]+)\}/g,
  italic: /\{@i ([^}]+)\}/g,
  bold: /\{@b ([^}]+)\}/g,
  filter: /\{@filter ([^}]+)\}/g,
  action: /\{@action ([^}]+)\}/g,
  dice: /\{@dice ([^}]+)\}/g,
  hit: /\{@hit ([^}]+)\}/g,
  dc: /\{@dc ([^}]+)\}/g,
  book: /\{@book ([^}]+)\}/g,
  variant: /\{@variantrule ([^|]+)(?:\|[^}]+)?\}/g,
}

/**
 * Parse inline markup tags in a string into EntryNode segments.
 */
function parseInlineText(text: string): EntryNode[] {
  if (!text) return []

  // Collect all matches with positions
  const matches: Array<{ start: number; end: number; node: EntryNode }> = []

  for (const [tagType, regex] of Object.entries(TAG_PATTERNS)) {
    regex.lastIndex = 0
    let m: RegExpExecArray | null
    while ((m = regex.exec(text)) !== null) {
      const value = m[1].trim()
      const node = createTagNode(tagType, value)
      matches.push({ start: m.index, end: m.index + m[0].length, node })
    }
  }

  // Sort by start position
  matches.sort((a, b) => a.start - b.start)

  // Build segments, merging overlapping matches (keep first)
  const segments: EntryNode[] = []
  let pos = 0

  for (const match of matches) {
    if (match.start < pos) continue // overlapping, skip
    if (match.start > pos) {
      segments.push({ type: 'text', content: text.slice(pos, match.start) })
    }
    segments.push(match.node)
    pos = match.end
  }

  if (pos < text.length) {
    segments.push({ type: 'text', content: text.slice(pos) })
  }

  // Merge adjacent text nodes
  return mergeAdjacentText(segments)
}

function createTagNode(tagType: string, value: string): EntryNode {
  switch (tagType) {
    case 'damage':
    case 'dice':
      return { type: 'dice', notation: value }
    case 'spell':
      return { type: 'spell-ref', spellId: normalizeId(value), name: value }
    case 'condition':
      return { type: 'condition-ref', conditionId: normalizeId(value), name: value }
    case 'item':
      return { type: 'item-ref', itemId: normalizeId(value), name: value }
    case 'skill':
      return { type: 'skill-ref', skillId: normalizeId(value), name: value }
    case 'creature':
      return { type: 'creature-ref', creatureId: normalizeId(value), name: value }
    case 'italic':
      return { type: 'italic', content: value }
    case 'bold':
      return { type: 'bold', content: value }
    case 'action':
      return { type: 'text', content: value }
    case 'hit':
      return { type: 'inline-damage', text: `+${value} per colpire` }
    case 'dc':
      return { type: 'inline-damage', text: `CD ${value}` }
    case 'book':
      return { type: 'text', content: value }
    case 'filter':
      return { type: 'text', content: value }
    case 'variant':
      return { type: 'text', content: value }
    default:
      return { type: 'text', content: value }
  }
}

function mergeAdjacentText(nodes: EntryNode[]): EntryNode[] {
  const merged: EntryNode[] = []
  for (const node of nodes) {
    const last = merged[merged.length - 1]
    if (node.type === 'text' && last?.type === 'text') {
      last.content += node.content
    } else {
      merged.push(node)
    }
  }
  return merged
}

/**
 * Parse a single 5etools entry item (string or structured object) into EntryNode[].
 */
function parseEntryItem(raw: unknown): EntryNode[] {
  if (typeof raw === 'string') {
    return parseInlineText(raw)
  }

  if (raw === null || raw === undefined) {
    return []
  }

  if (typeof raw !== 'object') {
    return [{ type: 'text', content: String(raw) }]
  }

  const obj = raw as Record<string, unknown>

  // {type: "entries", name: "...", entries: [...]}
  if (obj.type === 'entries' && obj.name) {
    const children = parseEntries(obj.entries)
    return [{ type: 'section', name: String(obj.name), children }]
  }

  // {type: "list", items: [...]}
  if (obj.type === 'list' && Array.isArray(obj.items)) {
    const items: EntryNode[][] = obj.items.map((item) => {
      if (typeof item === 'string') return parseInlineText(item)
      // Nested structured item in list
      const parsed = parseEntryItem(item)
      return parsed
    })
    return [{ type: 'list', items, style: obj.style as string | undefined }]
  }

  // {type: "inset", name: "...", entries: [...]}
  if (obj.type === 'inset' && obj.entries) {
    const children = parseEntries(obj.entries)
    return [{ type: 'blockquote', children }]
  }

  // {type: "table", caption: "...", colLabels: [...], rows: [...]}
  if (obj.type === 'table') {
    const headers = Array.isArray(obj.colLabels) ? obj.colLabels.map(String) : []
    const rows = Array.isArray(obj.rows)
      ? (obj.rows as unknown[][]).map((row) =>
          Array.isArray(row) ? row.map((cell) => String(cell)) : [String(row)],
        )
      : []
    return [
      {
        type: 'table',
        caption: obj.caption ? String(obj.caption) : undefined,
        headers,
        rows,
      },
    ]
  }

  // {type: "note", entries: [...]}
  if (obj.type === 'note' && obj.entries) {
    const children = parseEntries(obj.entries)
    return [{ type: 'blockquote', children }]
  }

  // {type: "statblock", ...} — skip statblock references
  if (obj.type === 'statblock') {
    return []
  }

  // Fallback: try to stringify
  return [{ type: 'text', content: JSON.stringify(raw) }]
}

/**
 * Parse a full 5etools entries array into EntryNode[].
 *
 * Accepts the raw `entries` field from any 5etools entity
 * (spell, feat, monster, etc.).
 */
export function parseEntries(raw: unknown): EntryNode[] {
  if (!raw) return []

  if (typeof raw === 'string') {
    return parseInlineText(raw)
  }

  if (!Array.isArray(raw)) {
    return parseEntryItem(raw)
  }

  const nodes: EntryNode[] = []
  for (const item of raw) {
    nodes.push(...parseEntryItem(item))
  }

  return nodes
}

/**
 * Parse entries to plain text (for search, export, or fallback display).
 */
export function entriesToPlainText(raw: unknown): string {
  const nodes = parseEntries(raw)
  return nodesToPlainText(nodes)
}

function nodesToPlainText(nodes: EntryNode[]): string {
  const parts: string[] = []

  for (const node of nodes) {
    switch (node.type) {
      case 'text':
        parts.push(node.content)
        break
      case 'dice':
        parts.push(`[${node.notation}]`)
        break
      case 'spell-ref':
      case 'condition-ref':
      case 'item-ref':
      case 'creature-ref':
      case 'skill-ref':
        parts.push(node.name)
        break
      case 'section':
        parts.push(`${node.name}:`, nodesToPlainText(node.children))
        break
      case 'list':
        for (const item of node.items) {
          parts.push(`• ${nodesToPlainText(item)}`)
        }
        break
      case 'table':
        if (node.caption) parts.push(`[${node.caption}]`)
        parts.push(`[Table: ${node.headers.join(' | ')}]`)
        break
      case 'blockquote':
        parts.push(nodesToPlainText(node.children))
        break
      case 'italic':
        parts.push(node.content)
        break
      case 'bold':
        parts.push(node.content)
        break
      case 'inline-damage':
        parts.push(node.text)
        break
    }
  }

  return parts.join(' ').replace(/\s+/g, ' ').trim()
}
