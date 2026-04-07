import type { AbilityName, CalculatedStats } from '../../types'
import { AbilityScoreBlock } from './AbilityScoreBlock'

const ABILITIES: AbilityName[] = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']

interface Props {
  stats: CalculatedStats
}

export function AbilityScoresRow({ stats }: Props) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
      {ABILITIES.map((ability) => (
        <AbilityScoreBlock
          key={ability}
          ability={ability}
          score={stats.finalAbilityScores[ability]}
          modifier={stats.abilityModifiers[ability]}
        />
      ))}
    </div>
  )
}
