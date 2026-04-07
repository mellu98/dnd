import type { CalculatedStats } from '../../types'
import { it } from '../../i18n/it'
import { SpellsPanel } from './SpellsPanel'
import { NotesPanel } from './NotesPanel'
import { useCharacterContext } from '../../context/CharacterContext'
import { getClassById } from '../../data/classes'
import { getRaceById } from '../../data/races'

interface Props {
  stats: CalculatedStats
}

/**
 * Right column of the 2024-style sheet.
 * Contains: Species Traits + Feats (from features) + Spells (if applicable) + Notes.
 */
export function RightColumnPanel({ stats }: Props) {
  const { state } = useCharacterContext()
  const character = state.character
  const cls = character ? getClassById(character.classId) : null
  const race = character ? getRaceById(character.raceId) : null
  const hasSpellcasting = !!cls?.spellcasting

  // Split features: species features (from race) vs feats/origin feats
  const raceFeatureNames = new Set((race?.features ?? []).map((f) => f.name))
  const speciesFeatures = stats.allFeatures.filter((f) => raceFeatureNames.has(f.name))
  const otherFeatures = stats.allFeatures.filter(
    (f) => !raceFeatureNames.has(f.name) && (f.type === 'feat' || f.type === 'origin_feat'),
  )

  return (
    <div className="flex flex-col gap-4">
      {/* Species Traits */}
      {speciesFeatures.length > 0 && (
        <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
          <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-3">{it.species_traits}</h3>
          <div className="space-y-2">
            {speciesFeatures.map((f, i) => (
              <div key={`${f.name}-${i}`} className="text-sm">
                <span className="font-semibold text-text-primary">{f.nameIT}</span>
                {f.descriptionIT && (
                  <p className="text-text-secondary text-xs mt-0.5 leading-relaxed">{f.descriptionIT}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Feats / Talenti */}
      {otherFeatures.length > 0 && (
        <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
          <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-3">{it.feats}</h3>
          <div className="space-y-2">
            {otherFeatures.map((f, i) => (
              <div key={`${f.name}-${i}`} className="text-sm">
                <span className="font-semibold text-text-primary">{f.nameIT}</span>
                {f.descriptionIT && (
                  <p className="text-text-secondary text-xs mt-0.5 leading-relaxed">{f.descriptionIT}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Spells */}
      {hasSpellcasting && character && (
        <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
          <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-3">{it.tab_spells}</h3>
          <SpellsPanel
            classId={character.classId}
            knownSpells={character.knownSpells}
            characterLevel={character.level}
            spellSlots={stats.spellSlots}
          />
        </div>
      )}

      {/* Notes */}
      <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
        <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-3">{it.tab_notes}</h3>
        <NotesPanel />
      </div>
    </div>
  )
}
