/**
 * EntriesRenderer — React component that renders EntryNode[] trees.
 *
 * Maps the AST from entries-parser.tsx to Tailwind-styled React elements.
 * Spell refs, condition refs, and dice get special styling.
 */

import type { EntryNode } from '../data/5e/entries-types'
import { getSpellById } from '../../data/spells'

interface EntriesRendererProps {
  nodes: EntryNode[]
  className?: string
  onSpellClick?: (spellId: string) => void
}

export function EntriesRenderer({ nodes, className = '', onSpellClick }: EntriesRendererProps) {
  if (!nodes.length) return null

  return (
    <div className={`space-y-2 text-sm text-gray-300 ${className}`}>
      {nodes.map((node, i) => (
        <EntryNodeRenderer
          key={i}
          node={node}
          onSpellClick={onSpellClick}
        />
      ))}
    </div>
  )
}

interface SingleNodeProps {
  node: EntryNode
  onSpellClick?: (spellId: string) => void
}

function EntryNodeRenderer({ node, onSpellClick }: SingleNodeProps) {
  switch (node.type) {
    case 'text':
      return <span>{node.content}</span>

    case 'dice':
      return (
        <span className="inline-block rounded bg-amber-900/50 px-1.5 py-0.5 font-mono text-xs text-amber-200">
          {node.notation}
        </span>
      )

    case 'spell-ref':
      return (
        <button
          type="button"
          className="text-blue-400 underline hover:text-blue-300"
          onClick={() => onSpellClick?.(node.spellId)}
        >
          {node.name}
        </button>
      )

    case 'condition-ref':
      return (
        <span
          className="inline-block rounded bg-red-900/40 px-1.5 py-0.5 text-xs text-red-300"
          title={node.name}
        >
          {node.name}
        </span>
      )

    case 'item-ref':
      return (
        <span className="text-emerald-400">{node.name}</span>
      )

    case 'creature-ref':
      return (
        <span className="text-purple-400">{node.name}</span>
      )

    case 'skill-ref':
      return (
        <span className="text-cyan-400">{node.name}</span>
      )

    case 'section':
      return (
        <div className="mt-3">
          <h4 className="mb-1 font-semibold text-gray-100">{node.name}</h4>
          <div className="space-y-1 pl-2">
            {node.children.map((child, i) => (
              <EntryNodeRenderer key={i} node={child} onSpellClick={onSpellClick} />
            ))}
          </div>
        </div>
      )

    case 'list':
      return (
        <ul className="list-disc space-y-1 pl-5">
          {node.items.map((item, i) => (
            <li key={i}>
              {item.map((child, j) => (
                <EntryNodeRenderer key={j} node={child} onSpellClick={onSpellClick} />
              ))}
            </li>
          ))}
        </ul>
      )

    case 'table':
      return (
        <div className="overflow-x-auto">
          {node.caption && (
            <p className="mb-1 text-xs italic text-gray-400">{node.caption}</p>
          )}
          <table className="w-full border-collapse text-xs">
            {node.headers.length > 0 && (
              <thead>
                <tr>
                  {node.headers.map((h, i) => (
                    <th key={i} className="border border-gray-600 bg-gray-700 px-2 py-1 text-left font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {node.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="border border-gray-700 px-2 py-1">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'blockquote':
      return (
        <blockquote className="my-2 border-l-2 border-gray-600 pl-3 italic text-gray-400">
          {node.children.map((child, i) => (
            <EntryNodeRenderer key={i} node={child} onSpellClick={onSpellClick} />
          ))}
        </blockquote>
      )

    case 'italic':
      return <em>{node.content}</em>

    case 'bold':
      return <strong>{node.content}</strong>

    case 'inline-damage':
      return (
        <span className="inline-block rounded bg-orange-900/40 px-1.5 py-0.5 text-xs text-orange-300">
          {node.text}
        </span>
      )

    default:
      return null
  }
}
