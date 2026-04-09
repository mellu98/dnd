import { useMemo, useState } from 'react'
import { getSpellsByClass } from '../../data/spells'
import type { Spell } from '../../types'
import { useCharacterDispatch } from '../../context/CharacterContext'
import { it } from '../../i18n/it'

interface SpellPickerModalProps {
  classId: string
  maxSpellLevel: number
  knownSpells: string[]
  preparedSpells: string[]
  spellcastingMode: 'prepared' | 'known' | 'all'
  onClose: () => void
}

function SpellRow({
  spell,
  known,
  prepared,
  mode,
  onToggleKnown,
  onTogglePrepared,
}: {
  spell: Spell
  known: boolean
  prepared: boolean
  mode: 'prepared' | 'known' | 'all'
  onToggleKnown: () => void
  onTogglePrepared: () => void
}) {
  const isCantrip = spell.level === 0

  return (
    <li className="rounded-lg px-3 py-2.5 border bg-bg-card/50 border-border/50">
      <div className="flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-semibold text-text-primary truncate">{spell.nameIT}</span>
            {spell.concentration && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent-red/15 text-accent-red/80 border border-accent-red/30 font-medium">
                C
              </span>
            )}
            {spell.ritual && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent-emerald/15 text-accent-emerald/80 border border-accent-emerald/30 font-medium">
                R
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-[11px] text-text-muted">{spell.schoolIT}</span>
            <span className="text-text-muted/40">{'\u00B7'}</span>
            <span className="text-[11px] text-text-muted">{spell.castingTimeIT}</span>
          </div>
        </div>

        {mode === 'known' && (
          <button
            onClick={onToggleKnown}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
              known
                ? 'bg-accent-purple/20 text-accent-purple border-accent-purple/40'
                : 'bg-bg-secondary text-text-secondary border-border hover:text-text-primary'
            }`}
          >
            {known ? it.known_short : it.learn_spell_label}
          </button>
        )}

        {mode === 'prepared' && (
          <button
            onClick={isCantrip ? onToggleKnown : onTogglePrepared}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
              (isCantrip ? known : prepared)
                ? 'bg-accent-emerald/20 text-accent-emerald border-accent-emerald/40'
                : 'bg-bg-secondary text-text-secondary border-border hover:text-text-primary'
            }`}
          >
            {isCantrip
              ? (known ? it.known_short : it.learn_spell_label)
              : (prepared ? it.prepared_short : it.prepare_spell_label)}
          </button>
        )}

        {mode === 'all' && (
          <div className="flex flex-col gap-1 shrink-0">
            <button
              onClick={onToggleKnown}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
                known
                  ? 'bg-accent-purple/20 text-accent-purple border-accent-purple/40'
                  : 'bg-bg-secondary text-text-secondary border-border hover:text-text-primary'
              }`}
            >
              {known ? it.known_short : it.learn_spell_label}
            </button>
            {!isCantrip && (
              <button
                onClick={onTogglePrepared}
                disabled={!known}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
                  prepared
                    ? 'bg-accent-emerald/20 text-accent-emerald border-accent-emerald/40'
                    : 'bg-bg-secondary text-text-secondary border-border hover:text-text-primary disabled:opacity-40 disabled:cursor-not-allowed'
                }`}
              >
                {prepared ? it.prepared_short : it.prepare_spell_label}
              </button>
            )}
          </div>
        )}
      </div>
    </li>
  )
}

export function SpellPickerModal({
  classId,
  maxSpellLevel,
  knownSpells,
  preparedSpells,
  spellcastingMode,
  onClose,
}: SpellPickerModalProps) {
  const dispatch = useCharacterDispatch()
  const [search, setSearch] = useState('')

  const allSpells = useMemo(() => getSpellsByClass(classId), [classId])
  const castableSpells = useMemo(
    () => allSpells.filter((spell) => spell.level === 0 || spell.level <= maxSpellLevel),
    [allSpells, maxSpellLevel],
  )

  const filteredSpells = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return castableSpells

    return castableSpells.filter(
      (spell) =>
        spell.nameIT.toLowerCase().includes(query)
        || spell.name.toLowerCase().includes(query)
        || spell.schoolIT.toLowerCase().includes(query),
    )
  }, [castableSpells, search])

  const grouped = useMemo(() => {
    const map = new Map<number, Spell[]>()
    for (const spell of filteredSpells) {
      const bucket = map.get(spell.level) ?? []
      bucket.push(spell)
      map.set(spell.level, bucket)
    }
    return Array.from(map.entries()).sort(([a], [b]) => a - b)
  }, [filteredSpells])

  const knownSpellSet = new Set(knownSpells)
  const preparedSpellSet = new Set(preparedSpells)

  const toggleKnown = (spellId: string) => {
    const next = knownSpellSet.has(spellId)
      ? knownSpells.filter((id) => id !== spellId)
      : [...knownSpells, spellId]

    dispatch({ type: 'SET_KNOWN_SPELLS', spellIds: next })

    if (spellcastingMode === 'all' && knownSpellSet.has(spellId)) {
      dispatch({
        type: 'SET_PREPARED_SPELLS',
        spellIds: preparedSpells.filter((id) => id !== spellId),
      })
    }
  }

  const togglePrepared = (spellId: string) => {
    const next = preparedSpellSet.has(spellId)
      ? preparedSpells.filter((id) => id !== spellId)
      : [...preparedSpells, spellId]

    dispatch({ type: 'SET_PREPARED_SPELLS', spellIds: next })
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/65 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-bg-secondary border border-border-light rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-fade-in"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="bg-bg-card/60 border-b border-border px-5 py-4 shrink-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-base font-bold text-text-primary leading-tight">{it.manage_spells}</h2>
              <p className="text-xs text-text-muted mt-0.5">
                {it.spells_known_label}: {knownSpells.length}
                {spellcastingMode !== 'known' ? ` \u00B7 ${it.spells_prepared_label}: ${preparedSpells.length}` : ''}
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

          <div className="mt-3 relative">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={it.search_spell_placeholder}
              className="w-full bg-bg-primary border border-border rounded-lg px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-purple/60 transition-colors"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
          {grouped.length === 0 && (
            <p className="text-text-secondary text-sm italic text-center py-6">
              {search ? `${it.no_results_prefix} "${search}"` : it.no_spells}
            </p>
          )}

          {grouped.map(([level, spells]) => (
            <div key={level}>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border ${
                    level === 0
                      ? 'text-accent-gold bg-accent-gold/10 border-accent-gold/30'
                      : 'text-accent-blue bg-accent-blue/10 border-accent-blue/25'
                  }`}
                >
                  {level === 0 ? 'Trucchi' : `${level}\u00B0 Livello`}
                </span>
                <span className="text-[11px] text-text-muted">{spells.length}</span>
              </div>

              <ul className="space-y-1.5">
                {spells.map((spell) => (
                  <SpellRow
                    key={spell.id}
                    spell={spell}
                    known={knownSpellSet.has(spell.id)}
                    prepared={preparedSpellSet.has(spell.id)}
                    mode={spellcastingMode}
                    onToggleKnown={() => toggleKnown(spell.id)}
                    onTogglePrepared={() => togglePrepared(spell.id)}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border px-5 py-3 shrink-0">
          <button
            onClick={onClose}
            className="w-full py-2 rounded-lg bg-bg-card border border-border text-sm text-text-secondary hover:text-text-primary hover:border-border-light transition-all font-medium"
          >
            {it.spell_picker_close}
          </button>
        </div>
      </div>
    </div>
  )
}
