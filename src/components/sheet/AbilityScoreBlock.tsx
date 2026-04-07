import type { AbilityName } from '../../types'
import { it } from '../../i18n/it'
import { formatModifier } from '../../utils/modifiers'

interface Props {
  ability: AbilityName
  score: number
  modifier: number
}

export function AbilityScoreBlock({ ability, score, modifier }: Props) {
  return (
    <div className="flex flex-col items-center bg-bg-card border border-border rounded-xl p-3 hover:bg-bg-card-hover transition-colors duration-200 min-w-[72px]">
      <span className="text-xs font-semibold text-accent-gold uppercase tracking-wider">
        {it[ability]}
      </span>
      <span className="text-2xl font-bold text-text-primary mt-1">
        {score}
      </span>
      <div className="mt-1 w-9 h-9 rounded-full bg-bg-primary border-2 border-accent-gold/40 flex items-center justify-center">
        <span className="text-sm font-bold text-accent-gold">
          {formatModifier(modifier)}
        </span>
      </div>
    </div>
  )
}
