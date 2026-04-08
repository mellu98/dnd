import { useCharacter } from '../../hooks/useCharacter'
import { skills } from '../../data/skills'
import type { SkillName } from '../../types'

const SKILL_LABELS: Record<SkillName, string> = {
  acrobatics: 'Acrobazia',
  animal_handling: 'Addestrare Animali',
  arcana: 'Arcano',
  athletics: 'Atletica',
  deception: 'Inganno',
  history: 'Storia',
  insight: 'Intuizione',
  intimidation: 'Intimidire',
  investigation: 'Indagare',
  medicine: 'Medicina',
  nature: 'Natura',
  perception: 'Percezione',
  performance: 'Intrattenere',
  persuasion: 'Persuasione',
  religion: 'Religione',
  sleight_of_hand: 'Rapidita di Mano',
  stealth: 'Furtivita',
  survival: 'Sopravvivenza',
}

const MAX_EXPERTISE = 2

/**
 * ExpertisePanel — lets Rogue (level 1+) and Bard (level 3+) choose 2 skills for Expertise.
 * Only shows for characters whose class grants Expertise.
 */
export function ExpertisePanel() {
  const { state, dispatch, calculatedStats } = useCharacter()
  const character = state.character
  if (!character || !calculatedStats) return null

  const classId = character.classId
  if (classId !== 'rogue' && classId !== 'bard') return null
  if (classId === 'bard' && character.level < 3) return null

  const expertiseSkills = character.expertiseSkills ?? []
  const proficientSkills = calculatedStats.skillProficiencies
  const remaining = MAX_EXPERTISE - expertiseSkills.length

  const handleToggle = (skillId: SkillName) => {
    const current = new Set(expertiseSkills)
    if (current.has(skillId)) {
      current.delete(skillId)
    } else {
      if (current.size >= MAX_EXPERTISE) return
      current.add(skillId)
    }
    dispatch({
      type: 'SET_EXPERTISE_SKILLS',
      skills: Array.from(current),
    })
  }

  // If all slots filled, show compact display
  if (remaining === 0) {
    return (
      <div className="mb-5">
        <div className="bg-accent-gold/10 border border-accent-gold/40 rounded-xl px-4 py-3 flex items-center gap-3">
          <span className="text-accent-gold text-lg">&#9733;</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-accent-gold">
              Maestria ({expertiseSkills.length}/{MAX_EXPERTISE})
            </p>
            <div className="flex gap-1.5 mt-1 flex-wrap">
              {expertiseSkills.map((skillId) => (
                <span
                  key={skillId}
                  className="text-[11px] bg-accent-gold/20 text-accent-gold px-2 py-0.5 rounded-full"
                >
                  {SKILL_LABELS[skillId as SkillName] ?? skillId}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={() => dispatch({ type: 'SET_EXPERTISE_SKILLS', skills: [] })}
            className="text-[10px] px-2 py-1 rounded bg-bg-secondary border border-border text-text-muted hover:text-text-secondary transition-all"
          >
            Modifica
          </button>
        </div>
      </div>
    )
  }

  // Show selection UI
  return (
    <div className="mb-5">
      <div className="bg-accent-gold/10 border border-accent-gold/40 rounded-xl px-4 py-3 space-y-3">
        <div className="flex items-center gap-3">
          <span className="text-accent-gold text-lg">&#9733;</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-accent-gold">
              Scegli Maestria ({expertiseSkills.length}/{MAX_EXPERTISE})
            </p>
            <p className="text-xs text-text-muted">
              Il bonus di competenza sara raddoppiato per queste abilita.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1.5">
          {skills
            .filter((s) => proficientSkills.includes(s.id as SkillName))
            .map((skill) => {
              const isSelected = expertiseSkills.includes(skill.id as SkillName)
              return (
                <button
                  key={skill.id}
                  onClick={() => handleToggle(skill.id as SkillName)}
                  className={`flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    isSelected
                      ? 'bg-accent-gold/20 border-accent-gold text-accent-gold'
                      : 'bg-bg-secondary/60 border-border/40 text-text-secondary hover:border-accent-gold/60 hover:text-text-primary'
                  }`}
                >
                  <span>{skill.nameIT}</span>
                  <span className="text-[10px]">{isSelected ? '\u2713' : '+'}</span>
                </button>
              )
            })}
        </div>
      </div>
    </div>
  )
}
