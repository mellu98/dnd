import { classes } from '../../data/classes'
import { useCharacterContext } from '../../context/CharacterContext'
import { it } from '../../i18n/it'
import { SelectionCard } from '../ui/SelectionCard'
import type { SkillName } from '../../types'
import { getClassFeatureChoiceGroups, getSelectedClassFeatureChoiceOption } from '../../utils/class-feature-choices'

export default function ClassSelector() {
  const { state, dispatch } = useCharacterContext()
  const draft = state.creationDraft

  const selectedClassId = draft.classId ?? ''
  const selectedSubclassId = draft.subclassId ?? ''
  const selectedSkills = draft.skillProficiencies ?? []
  const selectedFeatureChoices = draft.classFeatureChoices ?? []

  const cls = classes.find((candidate) => candidate.id === selectedClassId)
  const levelOneFeatureChoices = getClassFeatureChoiceGroups(cls, 1)

  const handleSelectClass = (classId: string) => {
    dispatch({ type: 'SET_CLASS', classId, subclassId: null })
    dispatch({ type: 'SET_SKILL_PROFICIENCIES', skills: [] })
  }

  const handleSelectSubclass = (subclassId: string) => {
    if (!selectedClassId) return
    dispatch({ type: 'SET_CLASS', classId: selectedClassId, subclassId })
  }

  const toggleSkill = (skill: SkillName) => {
    if (!cls) return
    const max = cls.skillChoices.choose
    if (selectedSkills.includes(skill)) {
      dispatch({ type: 'SET_SKILL_PROFICIENCIES', skills: selectedSkills.filter((entry) => entry !== skill) })
    } else if (selectedSkills.length < max) {
      dispatch({ type: 'SET_SKILL_PROFICIENCIES', skills: [...selectedSkills, skill] })
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-accent-gold mb-4">{it.step_class}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {classes.map((candidate) => (
          <SelectionCard
            key={candidate.id}
            selected={selectedClassId === candidate.id}
            onClick={() => handleSelectClass(candidate.id)}
            title={candidate.nameIT}
            subtitle={`${it.hit_die}: ${candidate.hitDie} | ${it.saving_throws}: ${candidate.savingThrows.map((save) => it[save as keyof typeof it]).join(', ')}`}
            badges={candidate.spellcasting ? (
              <span className="text-xs bg-accent-blue/20 text-accent-blue px-2 py-0.5 rounded">
                {it.tab_spells} ({it[candidate.spellcasting.ability as keyof typeof it]})
              </span>
            ) : undefined}
          />
        ))}
      </div>

      {cls && cls.subclassLevel <= 1 && cls.subclasses.length > 0 && (
        <div className="mt-4 p-4 bg-bg-secondary rounded-xl border border-border">
          <h3 className="text-sm font-semibold text-accent-gold mb-3">{it.choose_subclass}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {cls.subclasses.map((subclass) => (
              <button
                key={subclass.id}
                onClick={() => handleSelectSubclass(subclass.id)}
                className={`text-left p-3 rounded-lg border transition-all ${
                  selectedSubclassId === subclass.id
                    ? 'border-accent-gold bg-bg-card'
                    : 'border-border bg-bg-card/50 hover:bg-bg-card'
                }`}
              >
                <span className="font-medium text-sm">{subclass.nameIT}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {cls && levelOneFeatureChoices.length > 0 && (
        <div className="mt-4 p-4 bg-bg-secondary rounded-xl border border-border space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-accent-gold mb-1">Scelte di classe iniziali</h3>
            <p className="text-xs text-text-secondary">
              Queste opzioni NON sono decorative: attivano privilegi e competenze reali. Per il Chierico, qui si risolve davvero Ordine Divino.
            </p>
          </div>

          {levelOneFeatureChoices.map((group) => {
            const selectedOption = getSelectedClassFeatureChoiceOption(cls, selectedFeatureChoices, group.id)
            return (
              <div key={group.id} className="space-y-2">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h4 className="text-sm font-semibold text-text-primary">{group.nameIT}</h4>
                  {selectedOption && (
                    <span className="text-xs bg-accent-emerald/15 text-accent-emerald px-2 py-1 rounded-full border border-accent-emerald/30">
                      {selectedOption.nameIT}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {group.options.map((option) => {
                    const isSelected = selectedOption?.id === option.id
                    const summary = option.proficiencies?.map((proficiency) => proficiency.valueIT).join(', ')
                    return (
                      <button
                        key={option.id}
                        onClick={() => dispatch({ type: 'SET_CLASS_FEATURE_CHOICE', selection: { groupId: group.id, optionId: option.id } })}
                        className={`text-left p-3 rounded-lg border transition-all ${
                          isSelected
                            ? 'border-accent-gold bg-bg-card shadow-sm shadow-accent-gold/10'
                            : 'border-border bg-bg-card/50 hover:bg-bg-card'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-medium text-sm text-text-primary">{option.nameIT}</span>
                          {isSelected && (
                            <span className="text-[10px] uppercase tracking-wide text-accent-gold font-semibold">attivo</span>
                          )}
                        </div>
                        {option.descriptionIT && (
                          <p className="text-xs text-text-secondary mt-2 leading-relaxed">{option.descriptionIT}</p>
                        )}
                        {summary && (
                          <p className="text-[11px] text-accent-emerald mt-2">Competenze: {summary}</p>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {cls && (
        <div className="mt-4 p-4 bg-bg-secondary rounded-xl border border-border">
          <h3 className="text-sm font-semibold text-accent-gold mb-3">
            {it.choose_skills} ({selectedSkills.length}/{cls.skillChoices.choose})
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {cls.skillChoices.from.map((skill) => {
              const isSelected = selectedSkills.includes(skill)
              const isDisabled = !isSelected && selectedSkills.length >= cls.skillChoices.choose
              return (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  disabled={isDisabled}
                  className={`px-3 py-2 rounded-lg border text-sm text-left transition-all ${
                    isSelected
                      ? 'border-accent-green bg-accent-green/20 text-accent-green'
                      : isDisabled
                        ? 'border-border bg-bg-card/30 text-text-secondary/50 cursor-not-allowed'
                        : 'border-border bg-bg-card text-text-secondary hover:bg-bg-card-hover'
                  }`}
                >
                  {it[`skill_${skill}` as keyof typeof it]}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
