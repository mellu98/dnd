import { useState } from 'react'
import type { CalculatedStats } from '../../types'
import { it } from '../../i18n/it'
import { useCharacterContext } from '../../context/CharacterContext'
import { feats } from '../../data/feats'
import type { AbilityName } from '../../types'

const ABILITY_LABELS: Record<AbilityName, string> = {
  STR: 'Forza',
  DEX: 'Destrezza',
  CON: 'Costituzione',
  INT: 'Intelligenza',
  WIS: 'Saggezza',
  CHA: 'Carisma',
}

interface Props {
  stats: CalculatedStats
}

export function FeaturesPanel({ stats }: Props) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const { state } = useCharacterContext()
  const asiChoices = state.character?.asiChoices ?? []

  const toggle = (i: number) => {
    setExpandedIndex(expandedIndex === i ? null : i)
  }

  if (stats.allFeatures.length === 0) {
    return (
      <div className="text-text-secondary text-sm italic p-4">
        Nessuna capacita disponibile.
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {stats.allFeatures.map((feature, i) => {
        // For ASI features, resolve the actual choice
        const isASI = feature.type === 'ASI'
        const asiChoice = isASI ? asiChoices.find((c) => c.level === feature.level) : undefined

        let displayName = feature.nameIT
        let displayDescription = feature.descriptionIT

        if (isASI && asiChoice) {
          if (asiChoice.type === 'feat') {
            const feat = feats.find((f) => f.id === asiChoice.featId)
            displayName = `Talento: ${feat?.nameIT ?? asiChoice.featId}`
            displayDescription = feat?.descriptionIT
          } else {
            const parts = (asiChoice.abilityBonuses ?? []).map(
              (b) => `+${b.value} ${ABILITY_LABELS[b.ability] ?? b.ability}`,
            )
            displayName = parts.join(', ')
            displayDescription = 'Aumento dei Punteggi di Caratteristica'
          }
        } else if (isASI && !asiChoice) {
          displayName = 'ASI — Scelta non ancora effettuata'
          displayDescription = undefined
        }

        return (
          <div
            key={`${feature.name}-${feature.level}-${feature.type || 'unknown'}`}
            className="bg-bg-card border border-border rounded-lg overflow-hidden transition-colors hover:border-accent-gold/30"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between px-4 py-3 text-left"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-text-primary">
                  {displayName}
                </span>
                {feature.level > 0 && (
                  <span className="text-[10px] font-bold text-accent-gold bg-accent-gold/15 px-1.5 py-0.5 rounded">
                    {it.level} {feature.level}
                  </span>
                )}
              </div>
              <svg
                className={`w-4 h-4 text-text-secondary transition-transform duration-200 ${
                  expandedIndex === i ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedIndex === i && displayDescription && (
              <div className="px-4 pb-3 text-sm text-text-secondary leading-relaxed border-t border-border/50 pt-2">
                {displayDescription}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
