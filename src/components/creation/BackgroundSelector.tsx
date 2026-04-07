import { useState, useEffect } from 'react'
import { backgrounds } from '../../data/backgrounds'
import { useCharacterContext } from '../../context/CharacterContext'
import { it } from '../../i18n/it'
import { SelectionCard } from '../ui/SelectionCard'

export default function BackgroundSelector() {
  const { state, dispatch } = useCharacterContext()
  const [selected, setSelected] = useState(state.creationDraft.backgroundId || '')

  useEffect(() => {
    if (selected) {
      dispatch({ type: 'SET_BACKGROUND', backgroundId: selected })
    }
  }, [selected, dispatch])

  return (
    <div>
      <h2 className="text-xl font-semibold text-accent-gold mb-4">{it.step_background}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {backgrounds.map(bg => (
          <SelectionCard
            key={bg.id}
            selected={selected === bg.id}
            onClick={() => setSelected(bg.id)}
            title={bg.nameIT}
            badges={
              <div className="flex flex-wrap gap-1">
                {bg.skillProficiencies.map((sp, i) => (
                  <span key={i} className="text-xs bg-accent-green/20 text-accent-green px-2 py-0.5 rounded">
                    {sp.valueIT}
                  </span>
                ))}
              </div>
            }
          >
            <p className="text-xs text-text-secondary mt-2">{bg.feature.nameIT}</p>
          </SelectionCard>
        ))}
      </div>
    </div>
  )
}
