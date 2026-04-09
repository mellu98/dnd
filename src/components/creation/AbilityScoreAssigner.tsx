import { useState, useEffect, useMemo } from 'react'
import { useCharacterContext } from '../../context/CharacterContext'
import { aggregateBonuses } from '../../engine/bonus-aggregator'
import { it } from '../../i18n/it'
import type { AbilityName, CharacterAbilityScores } from '../../types'

const abilities: { key: AbilityName; label: string; abbr: string }[] = [
  { key: 'STR', label: it.STR_full, abbr: it.STR },
  { key: 'DEX', label: it.DEX_full, abbr: it.DEX },
  { key: 'CON', label: it.CON_full, abbr: it.CON },
  { key: 'INT', label: it.INT_full, abbr: it.INT },
  { key: 'WIS', label: it.WIS_full, abbr: it.WIS },
  { key: 'CHA', label: it.CHA_full, abbr: it.CHA },
]

const pointCosts: Record<number, number> = {
  8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9,
}

const TOTAL_POINTS = 27

export default function AbilityScoreAssigner() {
  const { state, dispatch } = useCharacterContext()
  const draft = state.creationDraft

  const [scores, setScores] = useState<CharacterAbilityScores>(
    draft.abilityScores || { STR: 8, DEX: 8, CON: 8, INT: 8, WIS: 8, CHA: 8 }
  )

  const bonuses = useMemo(() => aggregateBonuses({
    raceId: draft.raceId,
    classId: draft.classId,
    subclassId: draft.subclassId ?? undefined,
    backgroundId: draft.backgroundId,
    backgroundAbilityChoices: draft.backgroundAbilityChoices ?? undefined,
  }), [draft.raceId, draft.classId, draft.subclassId, draft.backgroundId, draft.backgroundAbilityChoices])

  const usedPoints = Object.values(scores).reduce((sum, s) => sum + pointCosts[s], 0)
  const remaining = TOTAL_POINTS - usedPoints

  useEffect(() => {
    dispatch({ type: 'SET_ABILITY_SCORES', scores })
  }, [scores, dispatch])

  const getBackgroundBonus = (ability: AbilityName) => {
    return bonuses.backgroundAbilityBonuses
      .filter(b => b.ability === ability)
      .reduce((sum, b) => sum + b.value, 0)
  }

  const adjustScore = (ability: AbilityName, delta: number) => {
    const newVal = scores[ability] + delta
    if (newVal < 8 || newVal > 15) return
    const newCost = pointCosts[newVal]
    const oldCost = pointCosts[scores[ability]]
    if (newCost - oldCost > remaining) return
    setScores({ ...scores, [ability]: newVal })
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-accent-gold mb-2">{it.step_abilities}</h2>
      <p className="text-sm text-text-muted mb-4">
        Assegna 27 punti alle tue caratteristiche (min 8, max 15). I bonus del tuo Background (+2/+1 oppure +1/+1/+1) verranno applicati dopo.
      </p>

      <div className="bg-bg-secondary/80 rounded-xl p-4 border border-border mb-4">
        <div className="flex items-center justify-between">
          <span className="text-text-secondary text-sm font-medium uppercase tracking-wider">{it.points_remaining}</span>
          <span className={`text-3xl font-bold font-mono transition-colors ${
            remaining > 0 ? 'text-accent-gold' : remaining === 0 ? 'text-accent-emerald' : 'text-accent-red'
          }`}>
            {remaining}
          </span>
        </div>
        <div className="w-full bg-bg-card rounded-full h-2 mt-3 overflow-hidden">
          <div
            className={`h-2 rounded-full transition-all duration-500 ease-out ${
              remaining === 0 ? 'bg-accent-emerald' : 'bg-accent-gold'
            }`}
            style={{ width: `${((TOTAL_POINTS - remaining) / TOTAL_POINTS) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        {abilities.map(({ key, label, abbr }) => {
          const bgBonus = getBackgroundBonus(key)
          const finalScore = scores[key] + bgBonus
          return (
            <div
              key={key}
              className="flex items-center justify-between bg-bg-card/80 rounded-xl p-3 border border-border hover:border-border-light transition-all"
            >
              <div className="flex items-center gap-3 min-w-[130px]">
                <span className="text-accent-gold font-mono text-sm font-bold w-8 text-center">{abbr}</span>
                <span className="text-text-primary text-sm hidden sm:inline">{label}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => adjustScore(key, -1)}
                    disabled={scores[key] <= 8}
                    className="w-8 h-8 rounded-lg bg-bg-secondary border border-border text-text-primary hover:bg-bg-card-hover disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-bold text-lg"
                  >
                    &minus;
                  </button>
                  <span className="text-xl font-bold font-mono w-8 text-center tabular-nums">{scores[key]}</span>
                  <button
                    onClick={() => adjustScore(key, 1)}
                    disabled={scores[key] >= 15 || pointCosts[scores[key] + 1] - pointCosts[scores[key]] > remaining}
                    className="w-8 h-8 rounded-lg bg-bg-secondary border border-border text-text-primary hover:bg-bg-card-hover disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-bold text-lg"
                  >
                    +
                  </button>
                </div>

                {bgBonus > 0 && (
                  <span className="text-xs text-accent-gold font-medium bg-accent-gold/10 px-2 py-0.5 rounded-full">+{bgBonus} bg</span>
                )}

                <div className="flex items-center gap-1 min-w-[70px]">
                  <span className="text-text-muted text-xs">=</span>
                  <span className="text-accent-gold font-mono font-bold">{finalScore}</span>
                  <span className="text-text-muted text-xs ml-1">({pointCosts[scores[key]]}pt)</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
