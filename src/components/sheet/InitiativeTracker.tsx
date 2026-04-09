import { useMemo, useState } from 'react'
import { useCharacterContext } from '../../context/CharacterContext'
import { generateId } from '../../utils/storage'
import { it } from '../../i18n/it'

export function InitiativeTracker() {
  const { state, dispatch } = useCharacterContext()
  const character = state.character
  const [name, setName] = useState('')
  const [initiative, setInitiative] = useState('')
  const [notes, setNotes] = useState('')

  const entries = useMemo(() => character?.initiativeTracker ?? [], [character?.initiativeTracker])
  const activeId = character?.activeInitiativeId ?? null
  const sortedEntries = useMemo(
    () => [...entries].sort((left, right) => right.initiative - left.initiative || left.name.localeCompare(right.name)),
    [entries],
  )

  if (!character) return null

  const saveEntries = (nextEntries: typeof entries) => {
    dispatch({ type: 'SET_INITIATIVE_TRACKER', entries: nextEntries })
  }

  const addEntry = () => {
    const trimmedName = name.trim()
    if (!trimmedName) return

    saveEntries([
      ...entries,
      {
        id: generateId(),
        name: trimmedName,
        initiative: Number(initiative) || 0,
        notes: notes.trim(),
      },
    ])
    setName('')
    setInitiative('')
    setNotes('')
  }

  const removeEntry = (entryId: string) => {
    saveEntries(entries.filter((entry) => entry.id !== entryId))
  }

  const advanceTurn = () => {
    if (sortedEntries.length === 0) return
    if (!activeId) {
      dispatch({ type: 'SET_ACTIVE_INITIATIVE', entryId: sortedEntries[0].id })
      return
    }

    const currentIndex = sortedEntries.findIndex((entry) => entry.id === activeId)
    const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % sortedEntries.length
    dispatch({ type: 'SET_ACTIVE_INITIATIVE', entryId: sortedEntries[nextIndex].id })
  }

  return (
    <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4 space-y-3">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider">
          {it.initiative_tracker}
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={advanceTurn}
            disabled={sortedEntries.length === 0}
            className="text-[11px] px-2.5 py-1 rounded bg-accent-purple/15 text-accent-purple border border-accent-purple/30 hover:bg-accent-purple/25 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {it.initiative_next_turn}
          </button>
          <button
            onClick={() => {
              saveEntries([])
              dispatch({ type: 'SET_ACTIVE_INITIATIVE', entryId: null })
            }}
            disabled={sortedEntries.length === 0}
            className="text-[11px] px-2.5 py-1 rounded bg-bg-secondary border border-border text-text-secondary hover:text-accent-red transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {it.cancel}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1.4fr)_110px_minmax(0,1fr)_auto] gap-2">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder={it.initiative_name_placeholder}
          className="bg-bg-primary border border-border rounded-lg px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-gold/50"
        />
        <input
          type="number"
          value={initiative}
          onChange={(event) => setInitiative(event.target.value)}
          placeholder={it.initiative_value_placeholder}
          className="bg-bg-primary border border-border rounded-lg px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-gold/50"
        />
        <input
          type="text"
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          placeholder={it.initiative_notes_placeholder}
          className="bg-bg-primary border border-border rounded-lg px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-gold/50"
        />
        <button
          onClick={addEntry}
          className="px-3 py-2 rounded-lg bg-accent-gold/15 text-accent-gold border border-accent-gold/30 text-sm font-semibold hover:bg-accent-gold/25 transition-all"
        >
          +
        </button>
      </div>

      {sortedEntries.length === 0 ? (
        <p className="text-sm text-text-secondary italic">{it.initiative_empty}</p>
      ) : (
        <ul className="space-y-2">
          {sortedEntries.map((entry, index) => {
            const isActive = entry.id === activeId
            return (
              <li
                key={entry.id}
                className={`rounded-lg border px-3 py-2.5 transition-all ${
                  isActive
                    ? 'bg-accent-gold/10 border-accent-gold/40'
                    : 'bg-bg-card/50 border-border/50'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <button
                    onClick={() => dispatch({ type: 'SET_ACTIVE_INITIATIVE', entryId: entry.id })}
                    className="flex-1 text-left"
                  >
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-black text-accent-gold">#{index + 1}</span>
                      <span className="text-sm font-semibold text-text-primary">{entry.name}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-bg-primary border border-border text-text-secondary">
                        {it.initiative}: {entry.initiative}
                      </span>
                      {isActive && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent-emerald/15 text-accent-emerald border border-accent-emerald/30">
                          {it.initiative_active}
                        </span>
                      )}
                    </div>
                    {entry.notes && (
                      <p className="text-xs text-text-secondary mt-1">{entry.notes}</p>
                    )}
                  </button>

                  <button
                    onClick={() => removeEntry(entry.id)}
                    className="text-accent-red/60 hover:text-accent-red transition-colors text-lg leading-none px-1"
                    title={it.delete_character}
                  >
                    &times;
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
