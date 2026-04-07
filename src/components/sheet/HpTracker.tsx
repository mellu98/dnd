import { useState } from 'react'
import { useHpTracker } from '../../hooks/useHpTracker'
import { it } from '../../i18n/it'

type HpAction = 'damage' | 'heal' | 'temp' | null

export function HpTracker() {
  const { hp, takeDamage, heal, setTempHp } = useHpTracker()
  const [activeAction, setActiveAction] = useState<HpAction>(null)
  const [inputValue, setInputValue] = useState('')

  const ratio = hp.max > 0 ? hp.current / hp.max : 0
  const barColor =
    ratio > 0.5
      ? 'from-accent-green to-emerald-600'
      : ratio > 0.25
        ? 'from-yellow-500 to-orange-500'
        : 'from-accent-red to-red-800'

  const handleConfirm = () => {
    const amount = parseInt(inputValue, 10)
    if (isNaN(amount) || amount <= 0) return
    if (activeAction === 'damage') takeDamage(amount)
    else if (activeAction === 'heal') heal(amount)
    else if (activeAction === 'temp') setTempHp(amount)
    setInputValue('')
    setActiveAction(null)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleConfirm()
    if (e.key === 'Escape') {
      setActiveAction(null)
      setInputValue('')
    }
  }

  const toggleAction = (action: HpAction) => {
    if (activeAction === action) {
      setActiveAction(null)
      setInputValue('')
    } else {
      setActiveAction(action)
      setInputValue('')
    }
  }

  return (
    <div className="w-full space-y-3">
      {/* HP Bar */}
      <div className="relative w-full h-10 bg-bg-secondary rounded-lg overflow-hidden border border-border">
        <div
          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${barColor} transition-all duration-500 ease-out`}
          style={{ width: `${Math.max(0, Math.min(100, ratio * 100))}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center gap-3">
          <span className="text-text-primary font-bold text-lg drop-shadow-md">
            {hp.current} / {hp.max} {it.hp_label}
          </span>
          {hp.temporary > 0 && (
            <span className="flex items-center gap-1 text-accent-blue font-semibold text-sm bg-bg-primary/60 px-2 py-0.5 rounded-full">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 1a1 1 0 01.894.553l1.618 3.236 3.578.524a1 1 0 01.553 1.706L13.94 9.587l.612 3.562a1 1 0 01-1.45 1.054L10 12.347l-3.102 1.856a1 1 0 01-1.45-1.054l.612-3.562L3.357 7.02a1 1 0 01.553-1.706l3.578-.524L9.106 1.553A1 1 0 0110 1z" clipRule="evenodd" />
              </svg>
              +{hp.temporary}
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => toggleAction('damage')}
          className={`px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
            activeAction === 'damage'
              ? 'bg-accent-red text-white shadow-lg shadow-accent-red/30'
              : 'bg-accent-red/20 text-accent-red hover:bg-accent-red/30 border border-accent-red/30'
          }`}
        >
          {it.take_damage}
        </button>
        <button
          onClick={() => toggleAction('heal')}
          className={`px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
            activeAction === 'heal'
              ? 'bg-accent-green text-white shadow-lg shadow-accent-green/30'
              : 'bg-accent-green/20 text-accent-green hover:bg-accent-green/30 border border-accent-green/30'
          }`}
        >
          {it.heal}
        </button>
        <button
          onClick={() => toggleAction('temp')}
          className={`px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
            activeAction === 'temp'
              ? 'bg-accent-blue text-white shadow-lg shadow-accent-blue/30'
              : 'bg-accent-blue/20 text-accent-blue hover:bg-accent-blue/30 border border-accent-blue/30'
          }`}
        >
          {it.add_temp_hp}
        </button>
      </div>

      {/* Inline Input */}
      {activeAction && (
        <div className="flex gap-2 animate-in fade-in slide-in-from-top-2">
          <input
            type="number"
            min="1"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              activeAction === 'damage' ? 'Danno...' :
              activeAction === 'heal' ? 'Cura...' :
              'PF Temp...'
            }
            autoFocus
            className="flex-1 bg-bg-secondary border border-border rounded-lg px-3 py-2 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
          />
          <button
            onClick={handleConfirm}
            className={`px-4 py-2 rounded-lg font-medium text-white transition-all duration-200 ${
              activeAction === 'damage' ? 'bg-accent-red hover:bg-accent-red/80' :
              activeAction === 'heal' ? 'bg-accent-green hover:bg-accent-green/80' :
              'bg-accent-blue hover:bg-accent-blue/80'
            }`}
          >
            {it.confirm}
          </button>
        </div>
      )}
    </div>
  )
}
