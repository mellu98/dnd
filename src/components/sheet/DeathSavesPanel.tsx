import { useCharacterContext } from '../../context/CharacterContext'
import { it } from '../../i18n/it'

interface DeathSavesPanelProps {
  characterLevel: number
}

/**
 * Death saving throws panel.
 * Shows only when HP is at 0. Tracks 3 successes and 3 failures.
 * Rolling a nat 20 = instant recovery. Rolling a nat 1 = 2 failures.
 */
export function DeathSavesPanel({ characterLevel }: DeathSavesPanelProps) {
  const { state, dispatch } = useCharacterContext()
  const character = state.character
  if (!character) return null

  // Only show when at 0 HP
  if (character.hp.current > 0) return null

  const { successes, failures } = character.deathSaves ?? { successes: 0, failures: 0 }
  const isStabilized = character.isStabilized
  const isDead = failures >= 3

  const rollDeathSave = () => {
    const roll = Math.floor(Math.random() * 20) + 1
    if (roll === 20) {
      // Natural 20: regain 1 HP, reset death saves
      dispatch({ type: 'HEAL', amount: 1 })
      dispatch({ type: 'RESET_DEATH_SAVES' })
    } else if (roll === 1) {
      // Natural 1: 2 failures
      dispatch({ type: 'ROLL_DEATH_SAVE', result: 'failure' })
      dispatch({ type: 'ROLL_DEATH_SAVE', result: 'failure' })
    } else if (roll >= 10) {
      dispatch({ type: 'ROLL_DEATH_SAVE', result: 'success' })
    } else {
      dispatch({ type: 'ROLL_DEATH_SAVE', result: 'failure' })
    }
  }

  return (
    <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
      <h3 className="text-xs font-semibold text-accent-red uppercase tracking-wider mb-3">
        {it.death_saves}
      </h3>

      {isDead ? (
        <div className="text-center py-3">
          <p className="text-lg font-bold text-accent-red">MORTO</p>
          <button
            onClick={() => dispatch({ type: 'RESET_DEATH_SAVES' })}
            className="mt-2 px-4 py-1.5 rounded-lg bg-bg-card border border-border text-xs text-text-secondary hover:text-text-primary transition-all"
          >
            Reset
          </button>
        </div>
      ) : isStabilized ? (
        <div className="text-center py-3">
          <p className="text-sm font-bold text-accent-emerald">STABILIZZATO</p>
          <p className="text-xs text-text-muted mt-1">Resta a 0 PF ma non muore</p>
          <button
            onClick={() => dispatch({ type: 'RESET_DEATH_SAVES' })}
            className="mt-2 px-4 py-1.5 rounded-lg bg-bg-card border border-border text-xs text-text-secondary hover:text-text-primary transition-all"
          >
            Reset
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {/* Successes */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-accent-emerald font-semibold w-8">OK</span>
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={`s-${i}`}
                  className={`w-6 h-6 rounded-full border-2 transition-all ${
                    i < successes
                      ? 'bg-accent-emerald border-accent-emerald shadow-sm shadow-accent-emerald/30'
                      : 'bg-transparent border-border/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Failures */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-accent-red font-semibold w-8">X</span>
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={`f-${i}`}
                  className={`w-6 h-6 rounded-full border-2 transition-all ${
                    i < failures
                      ? 'bg-accent-red border-accent-red shadow-sm shadow-accent-red/30'
                      : 'bg-transparent border-border/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Roll button */}
          <button
            onClick={rollDeathSave}
            className="w-full py-2 rounded-lg bg-accent-red/15 text-accent-red border border-accent-red/30 text-sm font-semibold hover:bg-accent-red/25 transition-all"
          >
              Tira TS Morte (d20)
          </button>

          {/* Hint */}
          <p className="text-[10px] text-text-muted text-center">
            10+ = successo | 1-9 = fallimento | 20 = riprendi 1 PF | 1 = 2 fallimenti
          </p>
        </div>
      )}
    </div>
  )
}
