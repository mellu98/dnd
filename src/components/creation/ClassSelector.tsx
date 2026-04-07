import { useState, useEffect } from 'react'
import { classes } from '../../data/classes'
import { useCharacterContext } from '../../context/CharacterContext'
import { it } from '../../i18n/it'
import { SelectionCard } from '../ui/SelectionCard'
import type { SkillName } from '../../types'

export default function ClassSelector() {
  const { state, dispatch } = useCharacterContext()
  const draft = state.creationDraft

  const [selectedClass, setSelectedClass] = useState(draft.classId || '')
  const [selectedSubclass, setSelectedSubclass] = useState(draft.subclassId || '')
  const [selectedSkills, setSelectedSkills] = useState<SkillName[]>(draft.skillProficiencies || [])

  const cls = classes.find(c => c.id === selectedClass)

  useEffect(() => {
    if (selectedClass) {
      dispatch({ type: 'SET_CLASS', classId: selectedClass, subclassId: selectedSubclass || null })
    }
  }, [selectedClass, selectedSubclass, dispatch])

  useEffect(() => {
    dispatch({ type: 'SET_SKILL_PROFICIENCIES', skills: selectedSkills })
  }, [selectedSkills, dispatch])

  const handleSelectClass = (id: string) => {
    setSelectedClass(id)
    setSelectedSubclass('')
    setSelectedSkills([])
  }

  const toggleSkill = (skill: SkillName) => {
    if (!cls) return
    const max = cls.skillChoices.choose
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill))
    } else if (selectedSkills.length < max) {
      setSelectedSkills([...selectedSkills, skill])
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-accent-gold mb-4">{it.step_class}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {classes.map(c => (
          <SelectionCard
            key={c.id}
            selected={selectedClass === c.id}
            onClick={() => handleSelectClass(c.id)}
            title={c.nameIT}
            subtitle={`${it.hit_die}: ${c.hitDie}  |  ${it.saving_throws}: ${c.savingThrows.map(s => it[s as keyof typeof it]).join(', ')}`}
            badges={c.spellcasting ? (
              <span className="text-xs bg-accent-blue/20 text-accent-blue px-2 py-0.5 rounded">
                {it.tab_spells} ({it[c.spellcasting.ability as keyof typeof it]})
              </span>
            ) : undefined}
          />
        ))}
      </div>

      {/* Subclass selection (only for classes with subclassLevel <= 1) */}
      {cls && cls.subclassLevel <= 1 && cls.subclasses.length > 0 && (
        <div className="mt-4 p-4 bg-bg-secondary rounded-xl border border-border">
          <h3 className="text-sm font-semibold text-accent-gold mb-3">{it.choose_subclass}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {cls.subclasses.map(sc => (
              <button
                key={sc.id}
                onClick={() => setSelectedSubclass(sc.id)}
                className={`text-left p-3 rounded-lg border transition-all ${
                  selectedSubclass === sc.id
                    ? 'border-accent-gold bg-bg-card'
                    : 'border-border bg-bg-card/50 hover:bg-bg-card'
                }`}
              >
                <span className="font-medium text-sm">{sc.nameIT}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Skill choices */}
      {cls && (
        <div className="mt-4 p-4 bg-bg-secondary rounded-xl border border-border">
          <h3 className="text-sm font-semibold text-accent-gold mb-3">
            {it.choose_skills} ({selectedSkills.length}/{cls.skillChoices.choose})
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {cls.skillChoices.from.map(skill => {
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
