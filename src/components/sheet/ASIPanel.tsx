import { useState } from 'react'
import type { AbilityName, ASIChoice } from '../../types'
import { feats } from '../../data/feats'
import { useCharacterContext } from '../../context/CharacterContext'
import { getClassById } from '../../data/classes'

const ABILITY_LABELS: Record<AbilityName, string> = {
  STR: 'Forza',
  DEX: 'Destrezza',
  CON: 'Costituzione',
  INT: 'Intelligenza',
  WIS: 'Saggezza',
  CHA: 'Carisma',
}
const ALL_ABILITIES: AbilityName[] = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']

type ASIMode = '+2_one' | '+1_two' | 'feat'

interface PendingASI {
  /** The level of the class feature that needs a choice */
  level: number
}

interface ASIEditorProps {
  pending: PendingASI
  onSave: (choice: ASIChoice) => void
  onCancel: () => void
}

function ASIEditor({ pending, onSave, onCancel }: ASIEditorProps) {
  const [mode, setMode] = useState<ASIMode>('+2_one')
  // +2 one stat
  const [plusTwoAbility, setPlusTwoAbility] = useState<AbilityName>('STR')
  // +1 two stats
  const [plusOneA, setPlusOneA] = useState<AbilityName>('STR')
  const [plusOneB, setPlusOneB] = useState<AbilityName>('DEX')
  // Feat
  const [selectedFeatId, setSelectedFeatId] = useState(feats[0]?.id ?? '')

  const handleSave = () => {
    let choice: ASIChoice
    if (mode === '+2_one') {
      choice = {
        level: pending.level,
        type: 'ability',
        abilityBonuses: [{ ability: plusTwoAbility, value: 2 }],
      }
    } else if (mode === '+1_two') {
      if (plusOneA === plusOneB) {
        alert('Scegli due caratteristiche diverse per il bonus +1/+1.')
        return
      }
      choice = {
        level: pending.level,
        type: 'ability',
        abilityBonuses: [
          { ability: plusOneA, value: 1 },
          { ability: plusOneB, value: 1 },
        ],
      }
    } else {
      choice = {
        level: pending.level,
        type: 'feat',
        featId: selectedFeatId,
      }
    }
    onSave(choice)
  }

  return (
    <div className="bg-bg-card border border-accent-gold/40 rounded-xl p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-text-primary text-sm">ASI — Livello {pending.level}</h3>
        <button onClick={onCancel} className="text-text-muted hover:text-text-secondary text-xs px-2 py-1 rounded">
          Annulla
        </button>
      </div>

      {/* Mode selector */}
      <div className="flex gap-2 flex-wrap">
        {(['+2_one', '+1_two', 'feat'] as ASIMode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
              mode === m
                ? 'bg-accent-gold/20 border-accent-gold text-accent-gold'
                : 'border-border text-text-muted hover:text-text-secondary'
            }`}
          >
            {m === '+2_one' ? '+2 a una' : m === '+1_two' ? '+1 a due' : 'Talento'}
          </button>
        ))}
      </div>

      {/* +2 to one */}
      {mode === '+2_one' && (
        <div className="space-y-2">
          <p className="text-xs text-text-muted">Scegli la caratteristica che aumenta di +2:</p>
          <select
            value={plusTwoAbility}
            onChange={(e) => setPlusTwoAbility(e.target.value as AbilityName)}
            className="w-full bg-bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-text-primary"
          >
            {ALL_ABILITIES.map((a) => (
              <option key={a} value={a}>
                {ABILITY_LABELS[a]} ({a})
              </option>
            ))}
          </select>
        </div>
      )}

      {/* +1 to two */}
      {mode === '+1_two' && (
        <div className="space-y-2">
          <p className="text-xs text-text-muted">Scegli due caratteristiche diverse (+1 ciascuna):</p>
          <div className="grid grid-cols-2 gap-2">
            <select
              value={plusOneA}
              onChange={(e) => setPlusOneA(e.target.value as AbilityName)}
              className="bg-bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-text-primary"
            >
              {ALL_ABILITIES.map((a) => (
                <option key={a} value={a}>
                  {ABILITY_LABELS[a]}
                </option>
              ))}
            </select>
            <select
              value={plusOneB}
              onChange={(e) => setPlusOneB(e.target.value as AbilityName)}
              className="bg-bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-text-primary"
            >
              {ALL_ABILITIES.map((a) => (
                <option key={a} value={a}>
                  {ABILITY_LABELS[a]}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Feat picker */}
      {mode === 'feat' && (
        <div className="space-y-2">
          <p className="text-xs text-text-muted">Scegli un talento:</p>
          <select
            value={selectedFeatId}
            onChange={(e) => setSelectedFeatId(e.target.value)}
            className="w-full bg-bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-text-primary"
          >
            {feats.map((f) => (
              <option key={f.id} value={f.id}>
                {f.nameIT}
              </option>
            ))}
          </select>
          {selectedFeatId && (
            <p className="text-xs text-text-muted italic">
              {feats.find((f) => f.id === selectedFeatId)?.mechanicIT ?? ''}
            </p>
          )}
        </div>
      )}

      <button
        onClick={handleSave}
        className="w-full py-2 bg-accent-gold/20 border border-accent-gold/60 text-accent-gold rounded-lg text-sm font-medium hover:bg-accent-gold/30 transition-all"
      >
        Conferma scelta
      </button>
    </div>
  )
}

/**
 * ASIPanel — shows pending ASI choices (class features of type 'ASI' not yet resolved)
 * and lets the user pick +2/+1+1/feat for each.
 */
export function ASIPanel() {
  const { state, dispatch } = useCharacterContext()
  const character = state.character
  const [editingLevel, setEditingLevel] = useState<number | null>(null)

  if (!character) return null

  const cls = getClassById(character.classId)
  if (!cls) return null

  // Find ASI features at or below current level
  const asiFeatures = cls.features
    .filter((f) => f.type === 'ASI' && f.level <= character.level)
    // Deduplicate by level (fighter has one per level slot)
    .reduce<{ level: number }[]>((acc, f) => {
      if (!acc.find((x) => x.level === f.level)) acc.push({ level: f.level })
      return acc
    }, [])

  // Pending = not yet in asiChoices
  const resolvedLevels = new Set((character.asiChoices ?? []).map((c) => c.level))
  const pendingASIs = asiFeatures.filter((f) => !resolvedLevels.has(f.level))

  if (pendingASIs.length === 0) return null

  const handleSave = (choice: ASIChoice) => {
    dispatch({ type: 'SAVE_ASI_CHOICE', choice })
    setEditingLevel(null)
  }

  return (
    <div className="mb-5 space-y-3">
      {/* Alert badge */}
      <div className="bg-accent-gold/10 border border-accent-gold/40 rounded-xl px-4 py-3 flex items-center gap-3">
        <span className="text-accent-gold text-lg">⚡</span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-accent-gold">
            {pendingASIs.length} Miglioramento{pendingASIs.length > 1 ? 'i' : ''} in attesa
          </p>
          <p className="text-xs text-text-muted">
            Hai {pendingASIs.length} ASI da assegnare. Clicca su un livello per scegliere.
          </p>
        </div>
        <div className="flex gap-1 flex-wrap">
          {pendingASIs.map((p) => (
            <button
              key={p.level}
              onClick={() => setEditingLevel(p.level === editingLevel ? null : p.level)}
              className={`text-xs px-2.5 py-1 rounded-lg border transition-all ${
                editingLevel === p.level
                  ? 'bg-accent-gold/30 border-accent-gold text-accent-gold'
                  : 'border-accent-gold/40 text-accent-gold/70 hover:border-accent-gold hover:text-accent-gold'
              }`}
            >
              Lv {p.level}
            </button>
          ))}
        </div>
      </div>

      {/* Editor for selected level */}
      {editingLevel !== null && (
        <ASIEditor pending={{ level: editingLevel }} onSave={handleSave} onCancel={() => setEditingLevel(null)} />
      )}
    </div>
  )
}
