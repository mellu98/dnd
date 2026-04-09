import { useMemo } from 'react'
import { useCharacterContext } from '../../context/CharacterContext'
import { it } from '../../i18n/it'

const CONDITIONS = [
  { id: 'blinded', nameIT: 'Accecato', icon: '\u{1F441}\uFE0F' },
  { id: 'charmed', nameIT: 'Affascinato', icon: '\u{1F498}' },
  { id: 'deafened', nameIT: 'Assordato', icon: '\u{1F442}' },
  { id: 'frightened', nameIT: 'Spaventato', icon: '\u{1F628}' },
  { id: 'grappled', nameIT: 'Afferrato', icon: '\u{1F517}' },
  { id: 'incapacitated', nameIT: 'Incapacitato', icon: '\u{1F4A4}' },
  { id: 'invisible', nameIT: 'Invisibile', icon: '\u{1F47B}' },
  { id: 'paralyzed', nameIT: 'Paralizzato', icon: '\u{1F9CA}' },
  { id: 'petrified', nameIT: 'Pietrificato', icon: '\u{1FAA8}' },
  { id: 'poisoned', nameIT: 'Avvelenato', icon: '\u2620\uFE0F' },
  { id: 'prone', nameIT: 'Prono', icon: '\u{1F6CC}' },
  { id: 'restrained', nameIT: 'Trattenuto', icon: '\u26D3\uFE0F' },
  { id: 'stunned', nameIT: 'Stordito', icon: '\u2B50' },
  { id: 'unconscious', nameIT: 'Incosciente', icon: '\u{1F635}' },
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
