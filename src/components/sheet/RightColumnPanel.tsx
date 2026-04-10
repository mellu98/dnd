import type { CalculatedStats } from '../../types'
import { it } from '../../i18n/it'
import { SpellsPanel } from './SpellsPanel'
import { NotesPanel } from './NotesPanel'
import { DeathSavesPanel } from './DeathSavesPanel'
import { RestButtons } from './RestButtons'
import { ConditionsTracker } from './ConditionsTracker'
import { InspirationTracker } from './InspirationTracker'
import { InitiativeTracker } from './InitiativeTracker'
import { CurrencyPanel } from './CurrencyPanel'
import { SensesPanel } from './SensesPanel'
import { WeaponAttacksPanel } from './WeaponAttacksPanel'
import { useCharacterContext } from '../../context/CharacterContext'
import { getClassById } from '../../data/classes'
import { toMetricRuleText } from '../../utils/rules-text'

interface Props {
  stats: CalculatedStats
}

export function RightColumnPanel({ stats }: Props) {
  const { state } = useCharacterContext()
  const character = state.character
  const cls = character ? getClassById(character.classId) : null
  const hasSpellcasting = !!cls?.spellcasting

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4">
        {character && <DeathSavesPanel />}
        {character && <InspirationTracker />}
        <ConditionsTracker />
        {character && <InitiativeTracker />}
      </div>

      {character && <RestButtons />}

      {character && <WeaponAttacksPanel stats={stats} />}

      <SensesPanel stats={stats} />

      {character && <CurrencyPanel />}

      {stats.speciesFeatures.length > 0 && (
        <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
          <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-3">{it.species_traits}</h3>
          <div className="space-y-2">
            {stats.speciesFeatures.map((feature) => (
              <div key={`${feature.name}-${feature.level}`} className="text-sm">
                <span className="font-semibold text-text-primary">{feature.nameIT}</span>
                {feature.descriptionIT && (
                  <p className="text-text-secondary text-xs mt-0.5 leading-relaxed">{toMetricRuleText(feature.descriptionIT)}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {stats.activeFeats.length > 0 && (
        <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
          <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-3">{it.feats}</h3>
          <div className="space-y-2">
            {stats.activeFeats.map((feat) => (
              <div key={feat.id} className="text-sm">
                <span className="font-semibold text-text-primary">{feat.nameIT}</span>
                {feat.descriptionIT && (
                  <p className="text-text-secondary text-xs mt-0.5 leading-relaxed">{toMetricRuleText(feat.descriptionIT)}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {hasSpellcasting && character && (
        <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
          <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-3">{it.tab_spells}</h3>
          <SpellsPanel
            classId={character.classId}
            knownSpells={character.knownSpells}
            preparedSpells={character.preparedSpells}
            characterLevel={character.level}
            spellSlots={stats.spellSlots}
            spellcasting={stats.spellcasting}
          />
        </div>
      )}

      <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
        <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-3">{it.tab_notes}</h3>
        <NotesPanel />
      </div>
    </div>
  )
}
