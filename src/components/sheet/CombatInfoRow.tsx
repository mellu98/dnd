import type { CalculatedStats } from '../../types'
import { it } from '../../i18n/it'
import { formatModifier } from '../../utils/modifiers'
import { feetToMeters } from '../../utils/units'

interface Props {
  stats: CalculatedStats
}

/**
 * A row of big stat boxes: Iniziativa · Velocità · Taglia · Percezione Passiva · Scurovisione
 * Mirrors the 2024 D&D sheet's top combat info row.
 */
export function CombatInfoRow({ stats }: Props) {
  const boxes = [
    {
      label: it.initiative,
      value: formatModifier(stats.initiative),
      color: 'text-accent-gold',
    },
    {
      label: it.speed,
      value: feetToMeters(stats.speed),
      color: 'text-text-primary',
    },
    {
      label: it.size,
      value: stats.sizeIT,
      color: 'text-accent-purple',
    },
    {
      label: it.passive_perception,
      value: String(stats.passivePerception),
      color: 'text-accent-cyan',
    },
    {
      label: it.darkvision,
      value: stats.darkvision > 0 ? feetToMeters(stats.darkvision) : '—',
      color: stats.darkvision > 0 ? 'text-accent-purple' : 'text-text-muted',
    },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
      {boxes.map((box) => (
        <div
          key={box.label}
          className="bg-bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-3 text-center hover:bg-bg-card hover:border-border-light hover:shadow-md transition-all"
        >
          <div className="text-[10px] text-text-secondary uppercase tracking-wider mb-1 leading-tight">{box.label}</div>
          <div className={`text-lg font-black ${box.color} tabular-nums`}>{box.value}</div>
        </div>
      ))}
    </div>
  )
}
