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

interface ASIEditorProps {
  level: number
  /** Pre-populate from an existing choice when editing */
  existing?: ASIChoice
  onSave: (choice: ASIChoice) => void
  onCancel: () => void
}

function ASIEditor({ level, existing, onSave, onCancel }: ASIEditorProps) {
  // Derive initial state from existing choice (if editing)
  const initialMode: ASIMode = existing
    ? existing.type === 'feat'
      ? 'feat'
      : existing.abilityBonuses?.length === 1
        ? '+2_one'
        : '+1_two'
    : '+2_one'

  const [mode, setMode] = useState<ASIMode>(initialMode)
  const [plusTwoAbility, setPlusTwoAbility] = useState<AbilityName>(
    existing?.type === 'ability' && existing.abilityBonuses?.length === 1
      ? existing.abilityBonuses[0].ability
      : 'STR',
  )
  const [plusOneA, setPlusOneA] = useState<AbilityName>(
    existing?.type === 'ability' && (existing.abilityBonuses?.length ?? 0) >= 2
      ? existing.abilityBonuses![0].ability
      : 'STR',
  )
  const [plusOneB, setPlusOneB] = useState<AbilityName>(
    existing?.type === 'ability' && (existing.abilityBonuses?.length ?? 0) >= 2
      ? existing.abilityBonuses![1].ability
      : 'DEX',
  )
  const [selectedFeatId, setSelectedFeatId] = useState(
    existing?.type === 'feat' && existing.featId ? existing.featId : feats()[0]?.id ?? '',
  )

  const handleSave = () => {
    let choice: ASIChoice
    if (mode === '+2_one') {
      choice = {
        level,
        type: 'ability',
        abilityBonuses: [{ ability: plusTwoAbility, value: 2 }],
      }
    } else if (mode === '+1_two') {
      if (plusOneA === plusOneB) {
        alert('Scegli due caratteristiche diverse per il bonus +1/+1.')
        return
      }
      choice = {
        level,
        type: 'ability',
        abilityBonuses: [
          { ability: plusOneA, value: 1 },
          { ability: plusOneB, value: 1 },
        ],
      }
    } else {
      // feat — only save feat fields, no residual ability data
      choice = {
        level,
        type: 'feat',
        featId: selectedFeatId,
      }
    }
    onSave(choice)
  }

  return (
    <div className="bg-bg-card border border-accent-gold/40 rounded-xl p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-text-primary text-sm">ASI — Livello {level}</h3>
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
            {feats().map((f) => (
              <option key={f.id} value={f.id}>
                {f.nameIT}
              </option>
            ))}
          </select>
          {selectedFeatId && (
            <p className="text-xs text-text-muted italic">
              {feats().find((f) => f.id === selectedFeatId)?.mechanicIT ?? ''}
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

/* ──────────────────────────────────────────────────────────────
 * Helpers to render a human-readable summary of an ASI choice
 * ────────────────────────────────────────────────────────────── */

function formatASIChoiceSummary(choice: ASIChoice): string {
  if (choice.type === 'feat') {
    const feat = feats().find((f) => f.id === choice.featId)
    return `Talento: ${feat?.nameIT ?? choice.featId}`
  }
  // ability
  const parts = (choice.abilityBonuses ?? []).map(
    (b) => `+${b.value} ${ABILITY_LABELS[b.ability] ?? b.ability}`,
  )
  return parts.join(', ')
}

/**
 * ASIPanel — shows ALL ASI levels for the current class (resolved + pending).
 *
 * - Resolved choices show the real summary (+2 Intelligenza / Talento: Allerta)
 *   with a "Modifica" button to re-open the editor.
 * - Pending choices show a prompt to make the choice.
 * - Each level is independent — no state sharing between levels.
 */
export function ASIPanel() {
  const { state, dispatch } = useCharacterContext()
  const character = state.character
  const [editingLevel, setEditingLevel] = useState<number | null>(null)

  if (!character) return null

  const cls = getClassById(character.classId)
  if (!cls) return null

  // All ASI feature levels at or below current character level (deduplicated)
  const asiFeatureLevels = cls.features
    .filter((f) => f.type === 'ASI' && f.level <= character.level)
    .reduce<number[]>((acc, f) => {
      if (!acc.includes(f.level)) acc.push(f.level)
      return acc
    }, [])
    .sort((a, b) => a - b)

  if (asiFeatureLevels.length === 0) return null

  // Build a map of resolved choices by level
  const choicesByLevel = new Map<number, ASIChoice>()
  for (const c of character.asiChoices ?? []) {
    choicesByLevel.set(c.level, c)
  }

  const pendingCount = asiFeatureLevels.filter((lv) => !choicesByLevel.has(lv)).length

  const handleSave = (choice: ASIChoice) => {
    dispatch({ type: 'SAVE_ASI_CHOICE', choice })
    setEditingLevel(null)
  }

  const handleReset = (level: number) => {
    // Save a "cleared" dispatch — the reducer replaces by level, so we dispatch
    // a removal action. We need a dedicated action or we can just remove from the array.
    // Since the reducer filters by level and replaces, we'll dispatch a special removal.
    // But the current reducer only has SAVE_ASI_CHOICE. Let's add REMOVE_ASI_CHOICE.
    dispatch({ type: 'REMOVE_ASI_CHOICE', level })
  }

  return (
    <div className="mb-5 space-y-3">
      {/* Header — alert if there are pending choices */}
      {pendingCount > 0 && (
        <div className="bg-accent-gold/10 border border-accent-gold/40 rounded-xl px-4 py-3 flex items-center gap-3">
          <span className="text-accent-gold text-lg">⚡</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-accent-gold">
              {pendingCount} Miglioramento{pendingCount > 1 ? 'i' : ''} in attesa
            </p>
            <p className="text-xs text-text-muted">
              Hai {pendingCount} ASI da assegnare. Scegli per ogni livello qui sotto.
            </p>
          </div>
        </div>
      )}

      {/* Per-level rows */}
      <div className="space-y-2">
        {asiFeatureLevels.map((lv) => {
          const choice = choicesByLevel.get(lv)
          const isEditing = editingLevel === lv

          // ── Currently editing this level ──
          if (isEditing) {
            return (
              <ASIEditor
                key={lv}
                level={lv}
                existing={choice}
                onSave={handleSave}
                onCancel={() => setEditingLevel(null)}
              />
            )
          }

          // ── Resolved: show summary ──
          if (choice) {
            return (
              <div
                key={lv}
                className="bg-bg-card/60 border border-border/50 rounded-xl px-4 py-3 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-[10px] font-bold text-accent-gold bg-accent-gold/15 px-1.5 py-0.5 rounded shrink-0">
                    Lv {lv}
                  </span>
                  <span className="text-sm font-medium text-text-primary truncate">
                    {formatASIChoiceSummary(choice)}
                  </span>
                </div>
                <div className="flex gap-1.5 shrink-0">
                  <button
                    onClick={() => setEditingLevel(lv)}
                    className="text-xs px-2.5 py-1 rounded-lg border border-border text-text-muted hover:text-accent-gold hover:border-accent-gold/40 transition-all"
                  >
                    Modifica
                  </button>
                  <button
                    onClick={() => handleReset(lv)}
                    className="text-xs px-2.5 py-1 rounded-lg border border-border text-text-muted hover:text-red-400 hover:border-red-400/40 transition-all"
                  >
                    Reimposta
                  </button>
                </div>
              </div>
            )
          }

          // ── Pending: not yet chosen ──
          return (
            <div
              key={lv}
              className="bg-bg-card/60 border border-accent-gold/30 border-dashed rounded-xl px-4 py-3 flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-[10px] font-bold text-accent-gold bg-accent-gold/15 px-1.5 py-0.5 rounded shrink-0">
                  Lv {lv}
                </span>
                <span className="text-sm text-text-muted italic">Scelta non ancora effettuata</span>
              </div>
              <button
                onClick={() => setEditingLevel(lv)}
                className="text-xs px-3 py-1.5 rounded-lg border border-accent-gold/40 text-accent-gold hover:bg-accent-gold/10 transition-all shrink-0"
              >
                Scegli
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
