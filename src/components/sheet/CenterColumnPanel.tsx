import type { CalculatedStats } from '../../types'
import { it } from '../../i18n/it'
import { FeaturesPanel } from './FeaturesPanel'
import { EquipmentPanel } from './EquipmentPanel'

interface Props {
  stats: CalculatedStats
}

/**
 * Center column of the 2024-style sheet.
 * Contains: Class Features (accordion) + Equipment section.
 */
export function CenterColumnPanel({ stats }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {/* Class Features / Privilegi di Classe */}
      <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
        <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-3">{it.class_features}</h3>
        <FeaturesPanel stats={stats} />
      </div>

      {/* Equipment */}
      <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
        <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-3">{it.tab_equipment}</h3>
        <EquipmentPanel />
      </div>
    </div>
  )
}
