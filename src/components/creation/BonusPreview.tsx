import { useMemo, useState } from 'react'
import { it } from '../../i18n/it'
import { aggregateBonuses } from '../../engine/bonus-aggregator'
import type { AbilityName } from '../../types'
import { feetToMeters } from '../../utils/units'

interface Props {
  raceId?: string
  classId?: string
  subclassId?: string
  backgroundId?: string
  backgroundAbilityChoices?: { primary: AbilityName; secondary: AbilityName }
}

const abilityLabel: Record<AbilityName, string> = {
  STR: it.STR,
  DEX: it.DEX,
  CON: it.CON,
  INT: it.INT,
  WIS: it.WIS,
  CHA: it.CHA,
}

export default function BonusPreview({ raceId, classId, subclassId, backgroundId, backgroundAbilityChoices }: Props) {
  const bonuses = useMemo(
    () =>
      aggregateBonuses({
        raceId,
        classId,
        subclassId,
        backgroundId,
        backgroundAbilityChoices,
      }),
    [raceId, classId, subclassId, backgroundId, backgroundAbilityChoices],
  )

  const [expandedFeature, setExpandedFeature] = useState<number | null>(null)

  const hasContent = raceId || classId || backgroundId

  if (!hasContent) {
    return (
      <div className="bg-bg-secondary rounded-xl p-4 border border-border">
        <h3 className="text-accent-gold font-semibold text-lg mb-2">Anteprima Bonus</h3>
        <p className="text-text-secondary text-sm">
          Seleziona background, specie o classe per vedere i bonus in tempo reale.
        </p>
      </div>
    )
  }

  const profsByType: Record<string, { value: string; valueIT: string }[]> = {}
  for (const p of bonuses.proficiencies) {
    if (!profsByType[p.type]) profsByType[p.type] = []
    profsByType[p.type].push(p)
  }

  const profTypeLabels: Record<string, string> = {
    armor: it.prof_armor,
    weapon: it.prof_weapon,
    skill: it.prof_skill,
    tool: it.prof_tool,
    language: it.prof_language,
    saving_throw: it.prof_saving_throw,
  }

  return (
    <div className="bg-bg-secondary rounded-xl p-4 border border-border overflow-y-auto max-h-[calc(100vh-200px)]">
      <h3 className="text-accent-gold font-semibold text-lg mb-3">Anteprima Bonus</h3>

      {/* Background ASI Bonuses */}
      {bonuses.backgroundAbilityBonuses.length > 0 && (
        <Section title="Bonus Background (ASI)">
          <div className="flex flex-wrap gap-2">
            {bonuses.backgroundAbilityBonuses.map((b, i) => (
              <span key={i} className="bg-bg-card px-3 py-1 rounded-lg text-sm font-mono">
                <span className="text-accent-gold">{abilityLabel[b.ability]}</span>{' '}
                <span className="text-accent-emerald">+{b.value}</span>
              </span>
            ))}
          </div>
        </Section>
      )}

      {/* Speed & Darkvision */}
      <Section title={it.speed}>
        <span className="text-text-primary">{feetToMeters(bonuses.speed)}</span>
      </Section>

      {bonuses.darkvision > 0 && (
        <Section title={it.darkvision}>
          <span className="text-text-primary">{feetToMeters(bonuses.darkvision)}</span>
        </Section>
      )}

      {/* Hit Die */}
      {bonuses.hitDie && (
        <Section title={it.hit_die}>
          <span className="text-accent-gold font-mono text-lg">{bonuses.hitDie}</span>
        </Section>
      )}

      {/* Saving Throws */}
      {bonuses.savingThrows.length > 0 && (
        <Section title={it.saving_throws}>
          <div className="flex gap-2">
            {bonuses.savingThrows.map((st) => (
              <span key={st} className="bg-bg-card px-3 py-1 rounded-lg text-sm text-accent-emerald">
                {abilityLabel[st]}
              </span>
            ))}
          </div>
        </Section>
      )}

      {/* Languages */}
      {bonuses.languagesIT.length > 0 && (
        <Section title={it.languages}>
          <div className="flex flex-wrap gap-2">
            {bonuses.languagesIT.map((l, i) => (
              <span key={i} className="bg-bg-card px-3 py-1 rounded-lg text-sm">
                {l}
              </span>
            ))}
          </div>
        </Section>
      )}

      {/* Proficiencies by type */}
      {Object.entries(profsByType).map(([type, profs]) => (
        <Section key={type} title={profTypeLabels[type] || type}>
          <div className="flex flex-wrap gap-2">
            {profs.map((p, i) => (
              <span key={i} className="bg-bg-card px-3 py-1 rounded-lg text-sm">
                {p.valueIT}
              </span>
            ))}
          </div>
        </Section>
      ))}

      {/* Skill Choices */}
      {bonuses.skillChoices && (
        <Section title={`${it.choose_skills} (${bonuses.skillChoices.choose})`}>
          <div className="flex flex-wrap gap-1">
            {bonuses.skillChoices.from.map((s) => (
              <span key={s} className="bg-bg-card px-2 py-0.5 rounded text-xs text-text-secondary">
                {it[`skill_${s}` as keyof typeof it]}
              </span>
            ))}
          </div>
        </Section>
      )}

      {/* Features */}
      {bonuses.features.length > 0 && (
        <Section title={it.features_traits}>
          <div className="space-y-2">
            {bonuses.features.map((f, i) => (
              <div
                key={i}
                className="bg-bg-card rounded-lg p-2 cursor-pointer hover:bg-bg-card-hover transition-colors"
                onClick={() => setExpandedFeature(expandedFeature === i ? null : i)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-text-primary">{f.nameIT}</span>
                  <span className="text-xs text-text-secondary">Lv. {f.level}</span>
                </div>
                {expandedFeature === i && (
                  <p className="text-xs text-text-secondary mt-2 leading-relaxed">{f.descriptionIT}</p>
                )}
              </div>
            ))}
          </div>
        </Section>
      )}
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-3">
      <h4 className="text-xs uppercase text-text-secondary tracking-wider mb-1">{title}</h4>
      {children}
    </div>
  )
}
