import type { AbilityName, CalculatedStats } from '../../types'
import { it } from '../../i18n/it'
import { formatModifier } from '../../utils/modifiers'

const ABILITIES: AbilityName[] = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']

interface Props {
  stats: CalculatedStats
}

export function SavingThrows({ stats }: Props) {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-4">
      <h3 className="text-sm font-semibold text-accent-gold uppercase tracking-wider mb-3">
        {it.saving_throws}
      </h3>
      <div className="space-y-1">
        {ABILITIES.map((ability) => {
          const isProficient = stats.savingThrowProficiencies.includes(ability)
          const mod = stats.savingThrowModifiers[ability]
          const fullKey = `${ability}_full` as keyof typeof it
          return (
            <div
              key={ability}
              className="flex items-center gap-2 py-1.5 px-2 rounded-md hover:bg-bg-card-hover/50 transition-colors"
            >
              <div
                className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                  isProficient
                    ? 'bg-accent-green shadow-sm shadow-accent-green/50'
                    : 'border border-text-secondary/40'
                }`}
              />
              <span className="flex-1 text-sm text-text-primary">
                {it[fullKey]}
              </span>
              <span
                className={`text-sm font-mono font-semibold min-w-[32px] text-right ${
                  isProficient ? 'text-accent-green' : 'text-text-secondary'
                }`}
              >
                {formatModifier(mod)}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
