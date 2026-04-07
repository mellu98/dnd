import { useMemo, useState } from 'react'
import { getSpellsByClass } from '../../data/spells'
import type { Spell } from '../../types'
import { useCharacterDispatch } from '../../context/CharacterContext'

interface SpellPickerModalProps {
  classId: string
  /** Maximum spell level the character can cast (0 = cantrips only, -1 = no spellcasting) */
  maxSpellLevel: number
  knownSpells: string[]
  onClose: () => void
}

function SpellRow({ spell, isKnown, onToggle }: { spell: Spell; isKnown: boolean; onToggle: () => void }) {
  return (
    <li
      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 border transition-all cursor-pointer group ${
        isKnown
          ? 'bg-accent-purple/10 border-accent-purple/30 hover:bg-accent-purple/20'
          : 'bg-bg-card/50 border-border/50 hover:bg-bg-card hover:border-border-light'
      }`}
      onClick={onToggle}
    >
      {/* Checkbox */}
      <span
        className={`shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
          isKnown
            ? 'bg-accent-purple border-accent-purple'
            : 'bg-transparent border-border/60 group-hover:border-accent-purple/50'
        }`}
      >
        {isKnown && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
          </svg>
        )}
      </span>

      {/* Spell info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span
            className={`text-sm font-semibold truncate transition-colors ${
              isKnown ? 'text-accent-purple' : 'text-text-primary group-hover:text-accent-gold'
            }`}
          >
            {spell.nameIT}
          </span>
          {spell.concentration && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent-red/15 text-accent-red/80 border border-accent-red/30 font-medium shrink-0">
              C
            </span>
          )}
          {spell.ritual && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent-emerald/15 text-accent-emerald/80 border border-accent-emerald/30 font-medium shrink-0">
              R
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-[11px] text-text-muted">{spell.schoolIT}</span>
          <span className="text-text-muted/40">·</span>
          <span className="text-[11px] text-text-muted">{spell.castingTimeIT}</span>
        </div>
      </div>
    </li>
  )
}

export function SpellPickerModal({ classId, maxSpellLevel, knownSpells, onClose }: SpellPickerModalProps) {
  const dispatch = useCharacterDispatch()
  const [search, setSearch] = useState('')

  const allSpells = useMemo(() => getSpellsByClass(classId), [classId])

  // Filter by max spell level the character can cast
  const castableSpells = useMemo(() => allSpells.filter((s) => s.level <= maxSpellLevel), [allSpells, maxSpellLevel])

  // Apply search filter
  const filteredSpells = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return castableSpells
    return castableSpells.filter(
      (s) =>
        s.nameIT.toLowerCase().includes(q) || s.name.toLowerCase().includes(q) || s.schoolIT.toLowerCase().includes(q),
    )
  }, [castableSpells, search])

  // Group by level
  const grouped = useMemo(() => {
    const map = new Map<number, Spell[]>()
    for (const spell of filteredSpells) {
      const arr = map.get(spell.level) ?? []
      arr.push(spell)
      map.set(spell.level, arr)
    }
    // Sort levels ascending
    return Array.from(map.entries()).sort(([a], [b]) => a - b)
  }, [filteredSpells])

  const knownCount = knownSpells.length

  const handleToggle = (spellId: string) => {
    dispatch({ type: 'TOGGLE_SPELL', spellId })
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/65 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-bg-secondary border border-border-light rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-bg-card/60 border-b border-border px-5 py-4 shrink-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-base font-bold text-text-primary leading-tight">Gestisci Incantesimi</h2>
              <p className="text-xs text-text-muted mt-0.5">
                {knownCount} conosciut{knownCount === 1 ? 'o' : 'i'} · livello max:{' '}
                {maxSpellLevel === 0 ? 'solo trucchi' : `${maxSpellLevel}°`}
              </p>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 w-8 h-8 rounded-lg bg-bg-secondary text-text-secondary hover:text-accent-red hover:bg-accent-red/10 border border-border transition-all flex items-center justify-center text-lg leading-none"
              aria-label="Chiudi"
            >
              &times;
            </button>
          </div>

          {/* Search */}
          <div className="mt-3 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-sm pointer-events-none">
              🔍
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cerca incantesimo..."
              className="w-full bg-bg-primary border border-border rounded-lg pl-8 pr-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-purple/60 transition-colors"
            />
          </div>
        </div>

        {/* Body — scrollable */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
          {grouped.length === 0 && (
            <p className="text-text-secondary text-sm italic text-center py-6">
              {search ? `Nessun risultato per "${search}"` : 'Nessun incantesimo disponibile'}
            </p>
          )}

          {grouped.map(([level, spells]) => (
            <div key={level}>
              {/* Level heading */}
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border ${
                    level === 0
                      ? 'text-accent-gold bg-accent-gold/10 border-accent-gold/30'
                      : 'text-accent-blue bg-accent-blue/10 border-accent-blue/25'
                  }`}
                >
                  {level === 0 ? 'Trucchi' : `${level}° Livello`}
                </span>
                <span className="text-[11px] text-text-muted">
                  {spells.filter((s) => knownSpells.includes(s.id)).length}/{spells.length}
                </span>
              </div>

              {/* Spell list */}
              <ul className="space-y-1.5">
                {spells.map((spell) => (
                  <SpellRow
                    key={spell.id}
                    spell={spell}
                    isKnown={knownSpells.includes(spell.id)}
                    onToggle={() => handleToggle(spell.id)}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-border px-5 py-3 shrink-0">
          <button
            onClick={onClose}
            className="w-full py-2 rounded-lg bg-bg-card border border-border text-sm text-text-secondary hover:text-text-primary hover:border-border-light transition-all font-medium"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  )
}
