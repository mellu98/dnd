import type { AbilityName, CalculatedStats } from '../../types'
import { it } from '../../i18n/it'
import { AbilityColumnBlock } from './AbilityColumnBlock'

const ABILITIES: AbilityName[] = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']

interface Props {
  stats: CalculatedStats
}

/**
 * Left column of the 2024-style sheet.
 * Contains: 6 ability column blocks (each with saves+skills) + proficiencies list.
 */
export function LeftColumnPanel({ stats }: Props) {
  // Group proficiencies by type for display
  const profByType: Record<string, string[]> = {}
  for (const prof of stats.allProficiencies) {
    const typeKey = prof.type
    if (!profByType[typeKey]) profByType[typeKey] = []
    profByType[typeKey].push(prof.valueIT)
  }

  const typeLabels: Record<string, string> = {
    armor: it.prof_armor,
    weapon: it.prof_weapon,
    tool: it.prof_tool,
    language: it.prof_language,
    skill: it.prof_skill,
    saving_throw: it.prof_saving_throw,
  }

  const displayTypes = ['armor', 'weapon', 'tool', 'language']

  return (
    <div className="flex flex-col gap-3">
      {/* 6 Ability Column Blocks */}
      <div className="grid grid-cols-2 gap-2">
        {ABILITIES.map((ability) => (
          <AbilityColumnBlock key={ability} ability={ability} stats={stats} />
        ))}
      </div>

      {/* Proficiencies & Languages */}
      <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
        <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-3">
          {it.prof_and_languages}
        </h3>
        {displayTypes.map((type) => {
          const items = profByType[type]
          if (!items || items.length === 0) return null
          return (
            <div key={type} className="mb-2">
              <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">{typeLabels[type]}</div>
              <div className="flex flex-wrap gap-1">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] bg-bg-secondary border border-border rounded px-1.5 py-0.5 text-text-secondary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
