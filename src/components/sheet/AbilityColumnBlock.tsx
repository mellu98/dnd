import type { AbilityName, CalculatedStats, SkillName } from '../../types'
import { skills } from '../../data/skills'
import { it } from '../../i18n/it'
import { formatModifier } from '../../utils/modifiers'

interface Props {
  ability: AbilityName
  stats: CalculatedStats
  expertiseSkills: Set<SkillName>
}

/** Renders a vertical card for one ability: score, modifier bubble, saving throw row, then all linked skills. */
export function AbilityColumnBlock({ ability, stats, expertiseSkills }: Props) {
  const score = stats.finalAbilityScores[ability]
  const modifier = stats.abilityModifiers[ability]
  const isSaveProficient = stats.savingThrowProficiencies.includes(ability)
  const saveModifier = stats.savingThrowModifiers[ability]
  const linkedSkills = skills.filter((s) => s.ability === ability)
  const fullKey = `${ability}_full` as keyof typeof it

  return (
    <div className="bg-bg-card border border-border rounded-xl overflow-hidden flex flex-col">
      {/* Ability header */}
      <div className="bg-bg-secondary/60 border-b border-border px-3 py-2 text-center">
        <div className="text-[10px] font-bold text-accent-gold uppercase tracking-widest">{it[fullKey]}</div>
      </div>

      {/* Score + Modifier */}
      <div className="flex flex-col items-center py-3 gap-1">
        <div className="text-2xl font-black text-text-primary tabular-nums">{score}</div>
        <div className="w-10 h-10 rounded-full bg-bg-primary border-2 border-accent-gold/50 flex items-center justify-center shadow-sm">
          <span className="text-sm font-bold text-accent-gold">{formatModifier(modifier)}</span>
        </div>
      </div>

      {/* Saving Throw row */}
      <div className="px-3 pb-1 border-b border-border/40">
        <div className="flex items-center gap-1.5 py-1">
          <div
            className={`w-2 h-2 rounded-full flex-shrink-0 ${
              isSaveProficient ? 'bg-accent-green shadow-sm shadow-accent-green/50' : 'border border-text-secondary/40'
            }`}
          />
          <span className="flex-1 text-[10px] text-text-secondary uppercase tracking-wider">Tiro Salv.</span>
          <span
            className={`text-xs font-mono font-bold min-w-[28px] text-right ${
              isSaveProficient ? 'text-accent-green' : 'text-text-secondary'
            }`}
          >
            {formatModifier(saveModifier)}
          </span>
        </div>
      </div>

      {/* Linked Skills */}
      <div className="px-3 py-1.5 flex flex-col gap-0.5 flex-1">
        {linkedSkills.map((skill) => {
          const skillId = skill.id as SkillName
          const isProficient = stats.skillProficiencies.includes(skillId)
          const isExpertise = expertiseSkills.has(skillId)
          const skillMod = stats.skillModifiers[skillId]
          return (
            <div key={skill.id} className="flex items-center gap-1.5 py-0.5">
              <div
                className={`w-2 h-2 rounded-full flex-shrink-0 ${
                  isExpertise
                    ? 'bg-accent-gold shadow-sm shadow-accent-gold/50 ring-1 ring-accent-gold/30'
                    : isProficient
                      ? 'bg-accent-emerald shadow-sm shadow-accent-emerald/50'
                      : 'border border-text-secondary/40'
                }`}
              />
              <span className="flex-1 text-[11px] text-text-primary leading-tight">{skill.nameIT}</span>
              <span
                className={`text-[11px] font-mono font-semibold min-w-[26px] text-right ${
                  isExpertise ? 'text-accent-gold font-bold' : isProficient ? 'text-accent-emerald' : 'text-text-secondary'
                }`}
              >
                {formatModifier(skillMod)}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
