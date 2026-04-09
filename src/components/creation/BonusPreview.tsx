import { useMemo, useState } from 'react'
import { it } from '../../i18n/it'
import { aggregateBonuses } from '../../engine/bonus-aggregator'
import type { AbilityName, BackgroundAbilityChoices, ClassFeatureChoiceSelection } from '../../types'
import { feetToMeters } from '../../utils/units'
import { toMetricRuleText } from '../../utils/rules-text'
import { getRaceById } from '../../data/races'
import { getSpeciesVariant } from '../../utils/species-resolution'

interface Props {
  raceId?: string
  raceVariantId?: string
  classId?: string
  subclassId?: string
  classFeatureChoices?: ClassFeatureChoiceSelection[]
  backgroundId?: string
  backgroundAbilityChoices?: BackgroundAbilityChoices
}

const abilityLabel: Record<AbilityName, string> = {
  STR: it.STR,
  DEX: it.DEX,
  CON: it.CON,
  INT: it.INT,
  WIS: it.WIS,
  CHA: it.CHA,
}

function FeatureSection({
  title,
  features,
  expandedFeature,
  onToggle,
}: {
  title: string
  features: { nameIT: string; descriptionIT?: string; level: number }[]
  expandedFeature: string | null
  onToggle: (key: string) => void
}) {
  if (features.length === 0) return null

  return (
    <Section title={title}>
      <div className="space-y-2">
        {features.map((feature) => {
          const key = `${title}-${feature.nameIT}-${feature.level}`
          return (
            <div
              key={key}
              className="bg-bg-card rounded-lg p-2 cursor-pointer hover:bg-bg-card-hover transition-colors"
              onClick={() => onToggle(key)}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-text-primary">{feature.nameIT}</span>
                <span className="text-xs text-text-secondary">Lv. {feature.level}</span>
              </div>
              {expandedFeature === key && feature.descriptionIT && (
                <p className="text-xs text-text-secondary mt-2 leading-relaxed">{toMetricRuleText(feature.descriptionIT)}</p>
              )}
            </div>
          )
        })}
      </div>
    </Section>
  )
}

export default function BonusPreview({
  raceId,
  raceVariantId,
  classId,
  subclassId,
  classFeatureChoices,
  backgroundId,
  backgroundAbilityChoices,
}: Props) {
  const bonuses = useMemo(
    () => aggregateBonuses({
      raceId,
      raceVariantId,
      classId,
      subclassId,
      classFeatureChoices,
      backgroundId,
      backgroundAbilityChoices,
    }),
    [raceId, raceVariantId, classId, subclassId, classFeatureChoices, backgroundId, backgroundAbilityChoices],
  )

  const [expandedFeature, setExpandedFeature] = useState<string | null>(null)
  const race = raceId ? getRaceById(raceId) : null
  const variant = getSpeciesVariant(race, raceVariantId)

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
  for (const proficiency of bonuses.proficiencies) {
    if (!profsByType[proficiency.type]) profsByType[proficiency.type] = []
    profsByType[proficiency.type].push(proficiency)
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

      {variant && (
        <Section title="Variante selezionata">
          <div className="flex flex-wrap gap-2">
            <span className="bg-bg-card px-3 py-1 rounded-lg text-sm text-text-primary">{variant.nameIT}</span>
            {variant.mechanics?.familyIT && <span className="bg-bg-card px-3 py-1 rounded-lg text-sm">{variant.mechanics.familyIT}</span>}
            {variant.mechanics?.damageTypeIT && <span className="bg-bg-card px-3 py-1 rounded-lg text-sm">Danno {variant.mechanics.damageTypeIT}</span>}
            {variant.mechanics?.resistanceTypeIT && <span className="bg-bg-card px-3 py-1 rounded-lg text-sm">Resistenza {variant.mechanics.resistanceTypeIT}</span>}
          </div>
        </Section>
      )}

      {bonuses.backgroundAbilityBonuses.length > 0 && (
        <Section title="Bonus Background (ASI)">
          <div className="flex flex-wrap gap-2">
            {bonuses.backgroundAbilityBonuses.map((bonus) => (
              <span key={`${bonus.ability}-${bonus.value}`} className="bg-bg-card px-3 py-1 rounded-lg text-sm font-mono">
                <span className="text-accent-gold">{abilityLabel[bonus.ability]}</span>{' '}
                <span className="text-accent-emerald">+{bonus.value}</span>
              </span>
            ))}
          </div>
        </Section>
      )}

      <Section title={it.speed}>
        <span className="text-text-primary">{feetToMeters(bonuses.speed)}</span>
      </Section>

      {bonuses.darkvision > 0 && (
        <Section title={it.darkvision}>
          <span className="text-text-primary">{feetToMeters(bonuses.darkvision)}</span>
        </Section>
      )}

      {bonuses.hitDie && (
        <Section title={it.hit_die}>
          <span className="text-accent-gold font-mono text-lg">{bonuses.hitDie}</span>
        </Section>
      )}

      {bonuses.savingThrows.length > 0 && (
        <Section title={it.saving_throws}>
          <div className="flex gap-2 flex-wrap">
            {bonuses.savingThrows.map((save) => (
              <span key={save} className="bg-bg-card px-3 py-1 rounded-lg text-sm text-accent-emerald">
                {abilityLabel[save]}
              </span>
            ))}
          </div>
        </Section>
      )}

      {bonuses.languagesIT.length > 0 && (
        <Section title={it.languages}>
          <div className="flex flex-wrap gap-2">
            {bonuses.languagesIT.map((language) => (
              <span key={language} className="bg-bg-card px-3 py-1 rounded-lg text-sm">
                {language}
              </span>
            ))}
          </div>
        </Section>
      )}

      {Object.entries(profsByType).map(([type, proficiencies]) => (
        <Section key={type} title={profTypeLabels[type] || type}>
          <div className="flex flex-wrap gap-2">
            {proficiencies.map((proficiency) => (
              <span key={`${proficiency.type}-${proficiency.value}`} className="bg-bg-card px-3 py-1 rounded-lg text-sm">
                {proficiency.valueIT}
              </span>
            ))}
          </div>
        </Section>
      ))}

      {bonuses.skillChoices && (
        <Section title={`${it.choose_skills} (${bonuses.skillChoices.choose})`}>
          <div className="flex flex-wrap gap-1">
            {bonuses.skillChoices.from.map((skill) => (
              <span key={skill} className="bg-bg-card px-2 py-0.5 rounded text-xs text-text-secondary">
                {it[`skill_${skill}` as keyof typeof it]}
              </span>
            ))}
          </div>
        </Section>
      )}

      <FeatureSection
        title="Privilegi di specie"
        features={bonuses.speciesFeatures}
        expandedFeature={expandedFeature}
        onToggle={setExpandedFeature}
      />
      <FeatureSection
        title="Privilegi di classe"
        features={bonuses.classFeatures}
        expandedFeature={expandedFeature}
        onToggle={setExpandedFeature}
      />
      <FeatureSection
        title="Privilegi di sottoclasse"
        features={bonuses.subclassFeatures}
        expandedFeature={expandedFeature}
        onToggle={setExpandedFeature}
      />
      <FeatureSection
        title="Talenti"
        features={bonuses.featFeatures}
        expandedFeature={expandedFeature}
        onToggle={setExpandedFeature}
      />
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
