import { useState } from 'react'
import { useCharacterContext } from '../../context/CharacterContext'
import { it } from '../../i18n/it'
import { getClassById } from '../../data/classes'

export function RestButtons() {
  const { state, dispatch } = useCharacterContext()
  const character = state.character
  if (!character) return null

  const cls = getClassById(character.classId)
  const hitDieType = cls?.hitDie ?? 'd8'
  const totalHitDice = character.level
  const spentDice = character.spentHitDice ?? 0
  const remainingDice = totalHitDice - spentDice

  const [showShortRest, setShowShortRest] = useState(false)
  const [diceToSpend, setDiceToSpend] = useState(1)

  const handleShortRest = () => {
    dispatch({ type: 'SHORT_REST', hitDiceToSpend: diceToSpend })
    setShowShortRest(false)
    setDiceToSpend(1)
  }

  const handleLongRest = () => {
    dispatch({ type: 'LONG_REST' })
  }

  return (
    <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
      <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-3">
        {it.rest}
      </h3>

      <div className="space-y-2">
        {/* Short Rest */}
        <button
          onClick={() => setShowShortRest(!showShortRest)}
          className="w-full py-2 rounded-lg bg-accent-blue/10 text-accent-blue border border-accent-blue/30 text-sm font-semibold hover:bg-accent-blue/20 transition-all"
        >
          Riposo Breve
        </button>

        {showShortRest && (
          <div className="bg-bg-secondary rounded-lg border border-border p-3 space-y-3 animate-fade-in">
            <div className="flex items-center justify-between">
              <span className="text-xs text-text-muted">
                Dadi vita: {remainingDice}/{totalHitDice} ({hitDieType})
              </span>
            </div>

            {remainingDice > 0 ? (
              <>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-muted">Dadi da spendere:</span>
                  <div className="flex gap-1">
                    {Array.from({ length: Math.min(remainingDice, 10) }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setDiceToSpend(i + 1)}
                        className={`w-7 h-7 rounded text-xs font-bold transition-all ${
                          i + 1 === diceToSpend
                            ? 'bg-accent-emerald text-white border-accent-emerald'
                            : 'bg-bg-card text-text-secondary border-border'
                        } border`}
                      >
                        {i + 1}
                      </button>
                    ))}
                    {remainingDice > 10 && (
                      <span className="text-xs text-text-muted ml-1">+{remainingDice - 10}</span>
                    )}
                  </div>
                </div>
                <button
                  onClick={handleShortRest}
                  className="w-full py-1.5 rounded-lg bg-accent-emerald/15 text-accent-emerald border border-accent-emerald/30 text-xs font-semibold hover:bg-accent-emerald/25 transition-all"
                >
                  Cura con {diceToSpend}x {hitDieType}
                </button>
              </>
            ) : (
              <p className="text-xs text-text-muted text-center italic">Nessun dado vita rimanente</p>
            )}
          </div>
        )}

        {/* Long Rest */}
        <button
          onClick={handleLongRest}
          className="w-full py-2 rounded-lg bg-accent-emerald/10 text-accent-emerald border border-accent-emerald/30 text-sm font-semibold hover:bg-accent-emerald/20 transition-all"
        >
          Riposo Lungo
        </button>
      </div>
    </div>
  )
}
