import { races } from '../../data/races'
import { useCharacterContext } from '../../context/CharacterContext'
import { SelectionCard } from '../ui/SelectionCard'
import { it } from '../../i18n/it'
import { feetToMeters } from '../../utils/units'
import { toMetricRuleText } from '../../utils/rules-text'
import { getSpeciesVariant } from '../../utils/species-resolution'

function MechanicsPill({ label, value }: { label: string; value: string }) {
  return (
    <span className="text-[11px] bg-bg-card border border-border rounded-full px-2 py-1 text-text-secondary">
      <strong className="text-text-primary">{label}:</strong> {value}
    </span>
  )
}

export default function SpeciesSelector() {
  const { state, dispatch } = useCharacterContext()
  const selectedRaceId = state.creationDraft.raceId ?? ''
  const selectedVariantId = state.creationDraft.raceVariantId ?? ''

  const selectedSpecies = races.find((race) => race.id === selectedRaceId)
  const selectedVariant = getSpeciesVariant(selectedSpecies, selectedVariantId)

  return (
    <div>
      <h2 className="text-xl font-semibold text-accent-gold mb-2">{it.step_species}</h2>
      <p className="text-sm text-text-muted mb-4">
        La tua specie determina tratti fisici, sensi e privilegi innati. Se una specie prevede lignaggi, sottorazze o varianti,
        li scegli esplicitamente qui: niente scorciatoie nascoste.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {races.map((race) => (
          <SelectionCard
            key={race.id}
            selected={selectedRaceId === race.id}
            onClick={() => dispatch({ type: 'SET_RACE', raceId: race.id })}
            title={race.nameIT}
            subtitle={`${it.speed}: ${feetToMeters(race.speed)} ? ${it.size}: ${race.sizeIT}${race.darkvision > 0 ? ` ? ${it.darkvision}: ${feetToMeters(race.darkvision)}` : ''}`}
            badges={race.variants?.length ? (
              <span className="text-xs bg-accent-blue/20 text-accent-blue px-2 py-0.5 rounded-full">
                {race.variants.length} varianti
              </span>
            ) : undefined}
          >
            {race.variants?.length ? (
              <div className="mt-2 flex flex-wrap gap-1">
                {race.variants.slice(0, 4).map((variant) => (
                  <span key={variant.id} className="text-[11px] bg-accent-blue/10 text-accent-blue px-1.5 py-0.5 rounded">
                    {variant.nameIT}
                  </span>
                ))}
                {race.variants.length > 4 && (
                  <span className="text-[11px] text-text-muted">+{race.variants.length - 4} altre</span>
                )}
              </div>
            ) : null}
          </SelectionCard>
        ))}
      </div>

      {selectedSpecies && selectedSpecies.variants?.length ? (
        <div className="mt-5 p-4 bg-bg-secondary/80 rounded-xl border border-border">
          <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
            <div>
              <h3 className="text-sm font-semibold text-accent-gold">Scegli variante / sottorazza</h3>
              <p className="text-xs text-text-secondary mt-1">
                {selectedSpecies.nameIT} richiede una scelta aggiuntiva. Senza questa scelta il personaggio sarebbe incompleto.
              </p>
            </div>
            {selectedVariant && (
              <span className="text-xs bg-accent-emerald/15 text-accent-emerald px-2 py-1 rounded-full border border-accent-emerald/30">
                Selezionata: {selectedVariant.nameIT}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {selectedSpecies.variants.map((variant) => {
              const mechanics = variant.mechanics
              const subtitleParts = [
                mechanics?.familyIT,
                mechanics?.damageTypeIT ? `Danno ${mechanics.damageTypeIT}` : null,
                mechanics?.resistanceTypeIT ? `Resistenza ${mechanics.resistanceTypeIT}` : null,
              ].filter(Boolean)

              return (
                <SelectionCard
                  key={variant.id}
                  selected={selectedVariantId === variant.id}
                  onClick={() => dispatch({ type: 'SET_RACE_VARIANT', raceVariantId: variant.id })}
                  title={variant.nameIT}
                  subtitle={subtitleParts.join(' ? ')}
                >
                  {variant.descriptionIT && (
                    <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                      {toMetricRuleText(variant.descriptionIT)}
                    </p>
                  )}
                  {mechanics && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {mechanics.familyIT && <MechanicsPill label="Famiglia" value={mechanics.familyIT} />}
                      {mechanics.damageTypeIT && <MechanicsPill label="Danno" value={mechanics.damageTypeIT} />}
                      {mechanics.resistanceTypeIT && <MechanicsPill label="Resistenza" value={mechanics.resistanceTypeIT} />}
                      {mechanics.breathAreaIT && mechanics.breathShape && (
                        <MechanicsPill
                          label="Soffio"
                          value={`${mechanics.breathShape === 'cone' ? 'Cono' : 'Linea'} ${mechanics.breathAreaIT}`}
                        />
                      )}
                    </div>
                  )}
                </SelectionCard>
              )
            })}
          </div>
        </div>
      ) : null}

      {selectedSpecies ? (
        <div className="mt-4 grid grid-cols-1 xl:grid-cols-2 gap-4">
          <div className="p-4 bg-bg-secondary/80 rounded-xl border border-border">
            <h3 className="text-sm font-semibold text-accent-gold mb-2">Tratti base della specie</h3>
            <div className="space-y-2">
              {selectedSpecies.features.map((feature) => (
                <div key={`${feature.name}-${feature.level}`}>
                  <span className="text-xs font-medium text-accent-emerald">{feature.nameIT}</span>
                  {feature.descriptionIT && (
                    <p className="text-xs text-text-secondary mt-0.5">{toMetricRuleText(feature.descriptionIT)}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {selectedVariant ? (
            <div className="p-4 bg-bg-secondary/80 rounded-xl border border-border">
              <h3 className="text-sm font-semibold text-accent-gold mb-2">Effetti della variante scelta</h3>
              <div className="space-y-2">
                {selectedVariant.features?.length ? selectedVariant.features.map((feature) => (
                  <div key={`${feature.name}-${feature.level}`}>
                    <span className="text-xs font-medium text-accent-emerald">{feature.nameIT}</span>
                    {feature.descriptionIT && (
                      <p className="text-xs text-text-secondary mt-0.5">{toMetricRuleText(feature.descriptionIT)}</p>
                    )}
                  </div>
                )) : (
                  <p className="text-xs text-text-secondary">Questa variante usa per ora solo dati strutturati senza privilegi descrittivi aggiuntivi.</p>
                )}
              </div>
            </div>
          ) : selectedSpecies.variants?.length ? (
            <div className="p-4 bg-bg-secondary/50 rounded-xl border border-dashed border-border">
              <h3 className="text-sm font-semibold text-accent-gold mb-2">Variante non ancora scelta</h3>
              <p className="text-xs text-text-secondary">
                Scegli una variante per vedere tipo, resistenze, danni e privilegi meccanici corretti in gioco.
              </p>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
