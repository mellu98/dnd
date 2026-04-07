import { useState, useEffect, useCallback } from 'react'
import { backgrounds } from '../../data/backgrounds'
import { useCharacterContext } from '../../context/CharacterContext'
import { it } from '../../i18n/it'
import { SelectionCard } from '../ui/SelectionCard'
import type { AbilityName } from '../../types'

const abilityMap: Record<AbilityName, string> = {
  STR: it.STR_full,
  DEX: it.DEX_full,
  CON: it.CON_full,
  INT: it.INT_full,
  WIS: it.WIS_full,
  CHA: it.CHA_full,
}

function AbilityPoolSelector({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: AbilityName | null
  options: AbilityName[]
  onChange: (a: AbilityName) => void
}) {
  return (
    <div className="mb-2">
      <span className="text-xs font-medium text-text-muted">{label}</span>
      <div className="flex flex-wrap gap-1.5 mt-1">
        {options.map(a => (
          <button
            key={a}
            onClick={() => onChange(a)}
            className={`px-2.5 py-1 rounded-md text-xs font-medium border transition-all ${
              value === a
                ? 'border-accent-gold bg-accent-gold/20 text-accent-gold'
                : 'border-border text-text-secondary hover:bg-bg-card'
            }`}
          >
            {abilityMap[a]}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function BackgroundSelector() {
  const { state, dispatch } = useCharacterContext()
  const [selected, setSelected] = useState(state.creationDraft.backgroundId || '')
  const [primaryASI, setPrimaryASI] = useState<AbilityName | null>(null)
  const [secondaryASI, setSecondaryASI] = useState<AbilityName | null>(null)

  const bg = backgrounds.find(b => b.id === selected)

  useEffect(() => {
    if (selected) {
      dispatch({ type: 'SET_BACKGROUND', backgroundId: selected })
    }
  }, [selected, dispatch])

  useEffect(() => {
    if (primaryASI && secondaryASI) {
      dispatch({ type: 'SET_BACKGROUND_ABILITY_CHOICES', choices: { primary: primaryASI, secondary: secondaryASI } })
    }
  }, [primaryASI, secondaryASI, dispatch])

  const handleBackgroundSelect = useCallback((id: string) => {
    setSelected(id)
    setPrimaryASI(null)
    setSecondaryASI(null)
  }, [])

  return (
    <div>
      <h2 className="text-xl font-semibold text-accent-gold mb-2">{it.step_background}</h2>
      <p className="text-sm text-text-muted mb-4">
        Il tuo background definisce la tua storia e le tue competenze meccaniche: bonus alle caratteristiche, abilità, strumenti e un talento di origine.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {backgrounds.map(b => (
          <SelectionCard
            key={b.id}
            selected={selected === b.id}
            onClick={() => handleBackgroundSelect(b.id)}
            title={b.nameIT}
            badges={
              <div className="flex flex-wrap gap-1">
                <span className="text-xs bg-accent-gold/20 text-accent-gold px-1.5 py-0.5 rounded">
                  +2 {b.abilityScoreOptions.primary.map(a => abilityMap[a].replace('Saggezza', 'SAG').replace('Intelligenza', 'INT').replace('Carisma', 'CAR').replace('Forza', 'FOR').replace('Destrezza', 'DES').replace('Costituzione', 'COS')).join('/')}
                </span>
                <span className="text-xs bg-accent-blue/20 text-accent-blue px-1.5 py-0.5 rounded">
                  +1 {b.abilityScoreOptions.secondary.map(a => abilityMap[a].replace('Saggezza', 'SAG').replace('Intelligenza', 'INT').replace('Carisma', 'CAR').replace('Forza', 'FOR').replace('Destrezza', 'DES').replace('Costituzione', 'COS')).join('/')}
                </span>
              </div>
            }
          >
            <div className="mt-2 space-y-1">
              <div className="flex flex-wrap gap-1">
                {b.skillProficiencies.map((sp, i) => (
                  <span key={i} className="text-xs bg-accent-emerald/20 text-accent-emerald px-1.5 py-0.5 rounded">
                    {sp.valueIT}
                  </span>
                ))}
              </div>
              <p className="text-xs text-accent-purple font-medium">{b.originFeat.nameIT}</p>
            </div>
          </SelectionCard>
        ))}
      </div>

      {bg && (
        <div className="mt-4 p-4 bg-bg-secondary/80 rounded-xl border border-border space-y-4">
          {/* ASI Selection */}
          <div>
            <h3 className="text-sm font-semibold text-accent-gold mb-3">Bonus alle Caratteristiche</h3>
            <AbilityPoolSelector
              label="+2 a una caratteristica"
              value={primaryASI}
              options={bg.abilityScoreOptions.primary}
              onChange={setPrimaryASI}
            />
            <AbilityPoolSelector
              label="+1 a una caratteristica"
              value={secondaryASI}
              options={bg.abilityScoreOptions.secondary}
              onChange={setSecondaryASI}
            />
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-sm font-semibold text-accent-gold mb-2">Competenze</h3>
            <div className="flex flex-wrap gap-1.5">
              {bg.skillProficiencies.map((sp, i) => (
                <span key={i} className="text-xs bg-accent-emerald/20 text-accent-emerald px-2 py-1 rounded">
                  {sp.valueIT}
                </span>
              ))}
              {bg.toolProficiency.value !== 'None' && (
                <span className="text-xs bg-accent-blue/20 text-accent-blue px-2 py-1 rounded">
                  {bg.toolProficiency.valueIT}
                </span>
              )}
            </div>
          </div>

          {/* Origin Feat */}
          <div>
            <h3 className="text-sm font-semibold text-accent-gold mb-2">{it.origin_feat || 'Talento di Origine'}</h3>
            <p className="text-xs font-medium text-accent-purple">{bg.originFeat.nameIT}</p>
            <p className="text-xs text-text-secondary mt-1">{bg.originFeat.descriptionIT}</p>
          </div>
        </div>
      )}
    </div>
  )
}
