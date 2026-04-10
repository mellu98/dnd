import type { CalculatedStats } from '../../types'
import { feetToMeters } from '../../utils/units'
import { toMetricRuleText } from '../../utils/rules-text'

interface Props {
  stats: CalculatedStats
}

export function SensesPanel({ stats }: Props) {
  return (
    <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
      <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-3">Sensi</h3>

      <div className="space-y-3">
        <div className="rounded-lg border border-border bg-bg-secondary/70 px-3 py-2">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-medium text-text-primary">Scurovisione</span>
            <span className={`text-sm font-semibold ${stats.darkvision > 0 ? 'text-accent-purple' : 'text-text-muted'}`}>
              {stats.darkvision > 0 ? feetToMeters(stats.darkvision) : '—'}
            </span>
          </div>
          <p className="text-xs text-text-secondary mt-1">
            {stats.darkvision > 0
              ? toMetricRuleText(`Vedi in luce fioca entro ${stats.darkvision} feet come se fosse luce intensa e nell’oscurità come se fosse luce fioca.`)
              : 'Nessun senso speciale attivo al momento.'}
          </p>
        </div>
      </div>
    </div>
  )
}
