import { useState, useEffect } from 'react'
import { races } from '../../data/races'
import { useCharacterContext } from '../../context/CharacterContext'
import { SelectionCard } from '../ui/SelectionCard'
import { it } from '../../i18n/it'
import { feetToMeters } from '../../utils/units'
import { toMetricRuleText } from '../../utils/rules-text'

export default function SpeciesSelector() {
  const { state, dispatch } = useCharacterContext()
  const [selected, setSelected] = useState(state.creationDraft.raceId || '')

  useEffect(() => {
    if (selected) {
      dispatch({ type: 'SET_RACE', raceId: selected })
    }
  }, [selected, dispatch])

  return (
    <div>
      <h2 className="text-xl font-semibold text-accent-gold mb-2">{it.step_species}</h2>
      <p className="text-sm text-text-muted mb-4">
        La tua specie determina tratti fisici e culturali. I bonus alle caratteristiche e le competenze provengono dal
        tuo Background.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {races.map((r) => (
          <SelectionCard
            key={r.id}
            selected={selected === r.id}
            onClick={() => setSelected(r.id)}
            title={r.nameIT}
            subtitle={`${it.speed}: ${feetToMeters(r.speed)} · ${it.size}: ${r.sizeIT}${r.darkvision > 0 ? ` · ${it.darkvision}: ${feetToMeters(r.darkvision)}` : ''}`}
          >
            {r.variants && r.variants.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {r.variants.map((v, i) => (
                  <span key={i} className="text-xs bg-accent-blue/10 text-accent-blue px-1.5 py-0.5 rounded">
                    {v}
                  </span>
                ))}
              </div>
            )}
          </SelectionCard>
        ))}
      </div>

      {selected &&
        (() => {
          const race = races.find((r) => r.id === selected)
          if (!race || race.features.length === 0) return null
          return (
            <div className="mt-4 p-4 bg-bg-secondary/80 rounded-xl border border-border">
              <h3 className="text-sm font-semibold text-accent-gold mb-2">Tratti della Specie</h3>
              <div className="space-y-2">
                {race.features.map((f, i) => (
                  <div key={i}>
                    <span className="text-xs font-medium text-accent-emerald">{f.nameIT}</span>
                    <p className="text-xs text-text-secondary mt-0.5">{toMetricRuleText(f.descriptionIT)}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        })()}
    </div>
  )
}
