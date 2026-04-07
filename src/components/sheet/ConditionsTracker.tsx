import { useState } from 'react'
import { it } from '../../i18n/it'

const CONDITIONS = [
  { id: 'blinded', nameIT: 'Accecato', icon: '👁' },
  { id: 'charmed', nameIT: 'Affascinato', icon: '💫' },
  { id: 'deafened', nameIT: 'Assordato', icon: '👂' },
  { id: 'frightened', nameIT: 'Spaventato', icon: '😨' },
  { id: 'grappled', nameIT: 'Afferrato', icon: '🤝' },
  { id: 'incapacitated', nameIT: 'Incapacitato', icon: '💤' },
  { id: 'invisible', nameIT: 'Invisibile', icon: '👻' },
  { id: 'paralyzed', nameIT: 'Paralizzato', icon: '🧊' },
  { id: 'petrified', nameIT: 'Pietrificato', icon: '🪨' },
  { id: 'poisoned', nameIT: 'Avvelenato', icon: '☠️' },
  { id: 'prone', nameIT: 'Prono', icon: '⬇️' },
  { id: 'restrained', nameIT: 'Trattenuto', icon: '🔗' },
  { id: 'stunned', nameIT: 'Stordito', icon: '⭐' },
  { id: 'unconscious', nameIT: 'Incosciente', icon: '😵' },
]

export function ConditionsTracker() {
  const [activeConditions, setActiveConditions] = useState<Set<string>>(new Set())
  const [exhaustionLevel, setExhaustionLevel] = useState(0)

  const toggleCondition = (id: string) => {
    setActiveConditions((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const clearAll = () => {
    setActiveConditions(new Set())
    setExhaustionLevel(0)
  }

  if (activeConditions.size === 0 && exhaustionLevel === 0) {
    return (
      <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
        <h3 className="text-xs font-semibold text-accent-red uppercase tracking-wider mb-3">
          {it.conditions}
        </h3>
        <button
          onClick={() => setActiveConditions(new Set())}
          className="w-full py-2 rounded-lg bg-bg-secondary border border-border text-xs text-text-secondary hover:text-text-primary transition-all"
        >
          Mostra condizioni
        </button>
      </div>
    )
  }

  return (
    <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-semibold text-accent-red uppercase tracking-wider">
          {it.conditions}
          {activeConditions.size > 0 && (
            <span className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-accent-red text-white text-[9px]">
              {activeConditions.size}
            </span>
          )}
        </h3>
        <button
          onClick={clearAll}
          className="text-[10px] px-2 py-1 rounded bg-bg-secondary border border-border text-text-secondary hover:text-accent-red transition-all"
        >
          Reset
        </button>
      </div>

      {/* Exhaustion */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] text-text-muted font-medium">Sfinimento</span>
          <span className="text-[11px] text-accent-gold font-bold">{exhaustionLevel}/6</span>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 6 }).map((_, i) => (
            <button
              key={`exh-${i}`}
              onClick={() => setExhaustionLevel(i + 1 === exhaustionLevel ? 0 : i + 1)}
              className={`flex-1 h-2 rounded transition-all ${
                i < exhaustionLevel
                  ? 'bg-accent-gold'
                  : 'bg-bg-primary border border-border/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Conditions grid */}
      <div className="grid grid-cols-3 gap-1.5">
        {CONDITIONS.map((cond) => {
          const isActive = activeConditions.has(cond.id)
          return (
            <button
              key={cond.id}
              onClick={() => toggleCondition(cond.id)}
              className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                isActive
                  ? 'bg-accent-red/15 border-accent-red/50 text-accent-red'
                  : 'bg-bg-secondary border-border/40 text-text-secondary hover:border-border hover:text-text-primary'
              }`}
            >
              <span className="text-[10px]">{cond.icon}</span>
              <span className="truncate">{cond.nameIT}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
