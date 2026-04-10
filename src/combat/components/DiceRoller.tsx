import { useState } from 'react'
import { useCombatSession } from '../useCombatSession'
import { it } from '../../i18n/it'

const DICE_FACES = [4, 6, 8, 10, 12, 20] as const

export function DiceRoller() {
  const { sendDiceRoll, session } = useCombatSession()
  const [modifier, setModifier] = useState(0)
  const [lastRoll, setLastRoll] = useState<{ dice: number; results: number[]; total: number } | null>(null)

  if (!session) return null

  const roll = (faces: number) => {
    const result = Math.floor(Math.random() * faces) + 1
    const total = result + modifier

    const rollData = {
      playerId: session.myPeerId,
      playerName: '', // will be filled by character context
      diceNotation: `d${faces}${modifier >= 0 ? '+' : ''}${modifier || ''}`,
      results: [result],
      total,
      label: `Tiro d${faces}`,
      timestamp: Date.now(),
    }

    setLastRoll({ dice: faces, results: [result], total })
    sendDiceRoll(rollData)
  }

  return (
    <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
      <h3 className="text-xs font-semibold text-accent-purple uppercase tracking-wider mb-3">
        {it.combat_dice_roller}
      </h3>

      {/* Modifier */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs text-text-muted">{it.combat_modifier}</span>
        <button
          onClick={() => setModifier((m) => m - 1)}
          className="w-7 h-7 rounded bg-bg-secondary border border-border text-text-primary text-sm hover:border-accent-gold/40 transition-all"
        >
          -
        </button>
        <span className="w-8 text-center text-sm font-bold text-accent-gold">{modifier}</span>
        <button
          onClick={() => setModifier((m) => m + 1)}
          className="w-7 h-7 rounded bg-bg-secondary border border-border text-text-primary text-sm hover:border-accent-gold/40 transition-all"
        >
          +
        </button>
      </div>

      {/* Dice buttons */}
      <div className="grid grid-cols-6 gap-2 mb-3">
        {DICE_FACES.map((faces) => (
          <button
            key={faces}
            onClick={() => roll(faces)}
            className="py-3 rounded-lg bg-accent-purple/10 text-accent-purple border border-accent-purple/30 text-sm font-bold hover:bg-accent-purple/20 transition-all"
          >
            d{faces}
          </button>
        ))}
      </div>

      {/* Last roll display */}
      {lastRoll && (
        <div className="text-center py-2 rounded-lg bg-bg-primary border border-border/50">
          <span className="text-xs text-text-muted">
            {it.combat_last_roll}:{' '}
          </span>
          <span className="text-lg font-black text-accent-gold">
            {lastRoll.results[0]}
          </span>
          {modifier !== 0 && (
            <span className="text-sm text-text-secondary">
              {' '}{modifier >= 0 ? '+' : ''}{modifier} ={' '}
              <span className="font-bold text-accent-gold">{lastRoll.total}</span>
            </span>
          )}
        </div>
      )}
    </div>
  )
}
