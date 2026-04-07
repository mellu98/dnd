import type { CalculatedStats, SkillName } from '../../types'
import { skills } from '../../data/skills'
import { it } from '../../i18n/it'
import { formatModifier } from '../../utils/modifiers'

const SORTED_SKILLS = skills.toSorted((a, b) => a.nameIT.localeCompare(b.nameIT))

interface Props {
  stats: CalculatedStats
}

export function SkillsList({ stats }: Props) {
  return (
    <div className="bg-bg-card border border-border rounded-xl p-4">
      <h3 className="text-sm font-semibold text-accent-gold uppercase tracking-wider mb-3">
        {it.tab_skills}
      </h3>
      <div className="space-y-1">
        {SORTED_SKILLS.map((skill) => {
          const isProficient = stats.skillProficiencies.includes(skill.id)
          const mod = stats.skillModifiers[skill.id as SkillName]
          return (
            <div
              key={skill.id}
              className="flex items-center gap-2 py-1 px-2 rounded-md hover:bg-bg-card-hover/50 transition-colors"
            >
              <div
                className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                  isProficient
                    ? 'bg-accent-emerald shadow-sm shadow-accent-emerald/50'
                    : 'border border-text-secondary/40'
                }`}
              />
              <span className="flex-1 text-sm text-text-primary">
                {skill.nameIT}
              </span>
              <span className="text-xs text-text-secondary mr-1">
                {it[skill.ability]}
              </span>
              <span
                className={`text-sm font-mono font-semibold min-w-[32px] text-right ${
                  isProficient ? 'text-accent-emerald' : 'text-text-secondary'
                }`}
              >
                {formatModifier(mod)}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
