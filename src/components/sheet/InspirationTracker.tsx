import { useCharacterContext } from '../../context/CharacterContext'
import { it } from '../../i18n/it'

export function InspirationTracker() {
  const { state, dispatch } = useCharacterContext()
  const hasInspiration = state.character?.inspiration ?? false

  return (
    <button
      onClick={() => dispatch({ type: 'TOGGLE_INSPIRATION' })}
      className={`w-full rounded-xl border px-4 py-3 text-left transition-all ${
        hasInspiration
          ? 'bg-accent-gold/15 border-accent-gold/40 shadow-sm shadow-accent-gold/20'
          : 'bg-bg-card/60 border-border/50 hover:border-accent-gold/30'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-1">
            {it.inspiration}
          </p>
          <p className="text-sm text-text-secondary">
            {hasInspiration ? it.inspiration_available : it.inspiration_empty}
          </p>
        </div>

        <div
          className={`w-12 h-7 rounded-full border flex items-center px-1 transition-all ${
            hasInspiration
              ? 'bg-accent-gold/30 border-accent-gold/50 justify-end'
              : 'bg-bg-secondary border-border justify-start'
          }`}
        >
          <span
            className={`w-5 h-5 rounded-full transition-all ${
              hasInspiration ? 'bg-accent-gold' : 'bg-text-muted/60'
            }`}
          />
        </div>
      </div>
    </button>
  )
}
