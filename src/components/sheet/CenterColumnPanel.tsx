import type { CalculatedStats } from '../../types'
import { it } from '../../i18n/it'
import { FeaturesPanel } from './FeaturesPanel'
import { EquipmentPanel } from './EquipmentPanel'

interface Props {
  stats: CalculatedStats
}

export function CenterColumnPanel({ stats }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
        <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-3">{it.class_features}</h3>
        <FeaturesPanel stats={stats} features={stats.classFeatures} emptyMessage="Nessun privilegio di classe disponibile." />
      </div>

      {stats.subclassFeatures.length > 0 && (
        <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
          <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-3">Privilegi di Sottoclasse</h3>
          <FeaturesPanel
            stats={stats}
            features={stats.subclassFeatures}
            emptyMessage="Nessun privilegio di sottoclasse disponibile."
          />
        </div>
      )}

      <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
        <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-3">{it.tab_equipment}</h3>
        <EquipmentPanel stats={stats} />
      </div>
    </div>
  )
}
