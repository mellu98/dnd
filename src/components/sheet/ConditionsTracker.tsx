import { useMemo } from 'react'
import { useCharacterContext } from '../../context/CharacterContext'
import { it } from '../../i18n/it'

const CONDITIONS = [
  { id: 'blinded', nameIT: 'Accecato', icon: 'ðŸ‘' },
  { id: 'charmed', nameIT: 'Affascinato', icon: 'ðŸ’«' },
  { id: 'deafened', nameIT: 'Assordato', icon: 'ðŸ‘‚' },
  { id: 'frightened', nameIT: 'Spaventato', icon: 'ðŸ˜¨' },
  { id: 'grappled', nameIT: 'Afferrato', icon: 'ðŸ¤' },
  { id: 'incapacitated', nameIT: 'Incapacitato', icon: 'ðŸ’¤' },
  { id: 'invisible', nameIT: 'Invisibile', icon: 'ðŸ‘»' },
  { id: 'paralyzed', nameIT: 'Paralizzato', icon: 'ðŸ§Š' },
  { id: 'petrified', nameIT: 'Pietrificato', icon: 'ðŸª¨' },
  { id: 'poisoned', nameIT: 'Avvelenato', icon: 'â˜ ï¸' },
  { id: 'prone', nameIT: 'Prono', icon: 'â¬‡ï¸' },
  { id: 'restrained', nameIT: 'Trattenuto', icon: 'ðŸ”—' },
  { id: 'stunned', nameIT: 'Stordito', icon: 'â­' },
  { id: 'unconscious', nameIT: 'Incosciente', icon: 'ðŸ˜µ' },
]

export function ConditionsTracker() {
  const { state, dispatch } = useCharacterContext()
  const character = state.character

  const activeConditions = useMemo(
    () => new Set(character?.activeConditions ?? []),
    [character?.activeConditions],
  )
  const exhaustionLevel = character?.exhaustionLevel ?? 0

  const toggleCondition = (id: string) => {
    const next = new Set(activeConditions)
    if (next.has(id)) {
      next.delete(id)
    } else {
      next.add(id)
    }

    dispatch({ type: 'SET_ACTIVE_CONDITIONS', conditions: Array.from(next) })
  }

  const clearAll = () => {
    dispatch({ type: 'SET_ACTIVE_CONDITIONS', conditions: [] })
    dispatch({ type: 'SET_EXHAUSTION_LEVEL', level: 0 })
  }

  return (
    <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-semibold text-accent-red uppercase tracking-wider">
          {it.conditions}
          {(activeConditions.size > 0 || exhaustionLevel > 0) && (
            <span className="ml-1.5 inline-flex items-center justify-center min-w-4 h-4 px-1 rounded-full bg-accent-red text-white text-[9px]">
              {activeConditions.size + (exhaustionLevel > 0 ? 1 : 0)}
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

      <div className="mb-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] text-text-muted font-medium">{it.exhaustion_label}</span>
          <span className="text-[11px] text-accent-gold font-bold">{exhaustionLevel}/6</span>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 6 }).map((_, index) => (
            <button
              key={`exh-${index}`}
              onClick={() => dispatch({ type: 'SET_EXHAUSTION_LEVEL', level: index + 1 === exhaustionLevel ? 0 : index + 1 })}
              className={`flex-1 h-2 rounded transition-all ${
                index < exhaustionLevel
                  ? 'bg-accent-gold'
                  : 'bg-bg-primary border border-border/30'
              }`}
              aria-label={`${it.exhaustion_label} ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1.5">
        {CONDITIONS.map((condition) => {
          const isActive = activeConditions.has(condition.id)
          return (
            <button
              key={condition.id}
              onClick={() => toggleCondition(condition.id)}
              className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                isActive
                  ? 'bg-accent-red/15 border-accent-red/50 text-accent-red'
                  : 'bg-bg-secondary border-border/40 text-text-secondary hover:border-border hover:text-text-primary'
              }`}
            >
              <span className="text-[10px]">{condition.icon}</span>
              <span className="truncate">{condition.nameIT}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
