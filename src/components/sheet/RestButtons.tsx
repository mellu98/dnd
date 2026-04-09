import { useState } from 'react'
import { useCharacterContext } from '../../context/CharacterContext'
import { it } from '../../i18n/it'
import { getClassById } from '../../data/classes'

export function RestButtons() {
  const { state, dispatch } = useCharacterContext()
  const character = state.character
  const [showShortRest, setShowShortRest] = useState(false)
  const [diceToSpend, setDiceToSpend] = useState(1)

  if (!character) return null

  const cls = getClassById(character.classId)
  const hitDieType = cls?.hitDie ?? 'd8'
  const totalHitDice = character.level
  const spentDice = character.spentHitDice ?? 0
  const remainingDice = totalHitDice - spentDice

  const handleShortRest = () => {
    dispatch({ type: 'SHORT_REST', hitDiceToSpend: diceToSpend })
    setShowShortRest(false)
    setDiceToSpend(1)
  }

  return (
    <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
      <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-3">
        {it.rest}
      </h3>

      <div className="space-y-2">
        <button
          onClick={() => setShowShortRest((value) => !value)}
          className="w-full py-2 rounded-lg bg-accent-blue/10 text-accent-blue border border-accent-blue/30 text-sm font-semibold hover:bg-accent-blue/20 transition-all"
        >
          {it.rest_short}
        </button>

        {showShortRest && (
          <div className="bg-bg-secondary rounded-lg border border-border p-3 space-y-3 animate-fade-in">
            <div className="flex items-center justify-between">
              <span className="text-xs text-text-muted">
                {it.rest_hit_dice_remaining}: {remainingDice}/{totalHitDice} ({hitDieType})
              </span>
            </div>

            {remainingDice > 0 ? (
              <>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-muted">{it.rest_spend_hit_dice}:</span>
                  <div className="flex gap-1">
                    {Array.from({ length: Math.min(remainingDice, 10) }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setDiceToSpend(index + 1)}
                        className={`w-7 h-7 rounded text-xs font-bold transition-all ${
                          index + 1 === diceToSpend
                            ? 'bg-accent-emerald text-white border-accent-emerald'
                            : 'bg-bg-card text-text-secondary border-border'
                        } border`}
                      >
                        {index + 1}
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
                  {it.rest_heal_with} {diceToSpend}x {hitDieType}
                </button>
              </>
            ) : (
              <p className="text-xs text-text-muted text-center italic">{it.rest_no_hit_dice}</p>
            )}
          </div>
        )}

        <button
          onClick={() => dispatch({ type: 'LONG_REST' })}
          className="w-full py-2 rounded-lg bg-accent-emerald/10 text-accent-emerald border border-accent-emerald/30 text-sm font-semibold hover:bg-accent-emerald/20 transition-all"
        >
          {it.rest_long}
        </button>
      </div>
    </div>
  )
}
