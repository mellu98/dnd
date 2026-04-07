import { useState } from 'react'
import { useCharacterContext } from '../../context/CharacterContext'
import { it } from '../../i18n/it'
import BackgroundSelector from './BackgroundSelector'
import SpeciesSelector from './SpeciesSelector'
import ClassSelector from './ClassSelector'
import AbilityScoreAssigner from './AbilityScoreAssigner'
import CharacterDetails from './CharacterDetails'
import BonusPreview from './BonusPreview'

const steps = [
  { num: 1, label: it.step_background, icon: '📜' },
  { num: 2, label: it.step_species, icon: '🧬' },
  { num: 3, label: it.step_class, icon: '⚔️' },
  { num: 4, label: it.step_abilities, icon: '💪' },
  { num: 5, label: it.step_details, icon: '✏️' },
]

export default function CreationWizard() {
  const { state, dispatch } = useCharacterContext()
  const { creationStep, creationDraft } = state
  const [showPreview, setShowPreview] = useState(false)

  const canNext = () => {
    switch (creationStep) {
      case 1: return !!creationDraft.backgroundId
      case 2: return !!creationDraft.raceId
      case 3: return !!creationDraft.classId
      case 4: return !!creationDraft.abilityScores
      case 5: return !!creationDraft.name && creationDraft.name.trim().length > 0
      default: return false
    }
  }

  const renderStep = () => {
    switch (creationStep) {
      case 1: return <BackgroundSelector />
      case 2: return <SpeciesSelector />
      case 3: return <ClassSelector />
      case 4: return <AbilityScoreAssigner />
      case 5: return <CharacterDetails />
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-gold/3 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-blue/3 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 bg-bg-secondary/80 backdrop-blur-md border-b border-border px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-accent-gold">{it.creation_title}</h1>
            <p className="text-xs text-text-muted mt-0.5">Step {creationStep} di 5</p>
          </div>
          <button
            onClick={() => dispatch({ type: 'GO_HOME' })}
            className="text-sm text-text-secondary hover:text-accent-red transition-colors px-3 py-1.5 rounded-lg border border-transparent hover:border-accent-red/20 hover:bg-accent-red/5"
          >
            {it.cancel}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative z-10 bg-bg-secondary/50 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-3">
          {/* Progress line */}
          <div className="w-full bg-bg-card rounded-full h-1.5 mb-3">
            <div
              className="bg-accent-gold h-1.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(creationStep / 5) * 100}%` }}
            />
          </div>
          {/* Step dots */}
          <div className="flex justify-between items-center">
            {steps.map(s => (
              <div
                key={s.num}
                className={`flex flex-col items-center gap-1 transition-all ${
                  s.num === creationStep
                    ? 'scale-110'
                    : s.num < creationStep ? 'opacity-70' : 'opacity-40'
                }`}
              >
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm border transition-all
                  ${s.num === creationStep
                    ? 'border-accent-gold bg-accent-gold text-bg-primary shadow-lg shadow-accent-gold/20'
                    : s.num < creationStep
                      ? 'border-accent-emerald bg-accent-emerald/20 text-accent-emerald'
                      : 'border-border text-text-muted'
                  }
                `}>
                  {s.num < creationStep ? '✓' : s.icon}
                </div>
                <span className={`text-[10px] font-medium hidden sm:block transition-colors ${
                  s.num === creationStep
                    ? 'text-accent-gold'
                    : s.num < creationStep
                      ? 'text-accent-emerald'
                      : 'text-text-muted'
                }`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto p-4 animate-fade-in" key={creationStep}>
        <div className="flex gap-6">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            {renderStep()}
          </div>

          {/* Bonus Preview - Desktop */}
          <div className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-4 glass rounded-xl">
              <BonusPreview
                raceId={creationDraft.raceId}
                classId={creationDraft.classId}
                subclassId={creationDraft.subclassId ?? undefined}
                backgroundId={creationDraft.backgroundId}
                backgroundAbilityChoices={creationDraft.backgroundAbilityChoices ?? undefined}
              />
            </div>
          </div>
        </div>

        {/* Mobile Preview Toggle */}
        <div className="lg:hidden mt-4">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="w-full py-2.5 bg-bg-secondary/80 backdrop-blur-sm border border-border rounded-xl text-accent-gold text-sm font-medium hover:bg-bg-card transition-all"
          >
            {showPreview ? '✕ Nascondi' : '👁 Mostra Anteprima'}
          </button>
          {showPreview && (
            <div className="mt-2 animate-slide-up">
              <BonusPreview
                raceId={creationDraft.raceId}
                classId={creationDraft.classId}
                subclassId={creationDraft.subclassId ?? undefined}
                backgroundId={creationDraft.backgroundId}
                backgroundAbilityChoices={creationDraft.backgroundAbilityChoices ?? undefined}
              />
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-4 border-t border-border/50">
          <button
            onClick={() => dispatch({ type: 'PREV_STEP' })}
            disabled={creationStep <= 1}
            className="px-6 py-2.5 rounded-xl border border-border text-text-secondary hover:text-text-primary hover:bg-bg-secondary/80 transition-all disabled:opacity-30 disabled:cursor-not-allowed font-medium"
          >
            ← {it.back}
          </button>

          {creationStep < 5 ? (
            <button
              onClick={() => dispatch({ type: 'NEXT_STEP' })}
              disabled={!canNext()}
              className="px-8 py-2.5 rounded-xl bg-accent-gold text-bg-primary font-semibold hover:bg-accent-gold/90 hover:shadow-lg hover:shadow-accent-gold/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {it.next} →
            </button>
          ) : (
            <button
              onClick={() => dispatch({ type: 'FINALIZE_CREATION' })}
              disabled={!canNext()}
              className="px-8 py-2.5 rounded-xl bg-accent-emerald text-bg-primary font-semibold hover:bg-accent-emerald/90 hover:shadow-lg hover:shadow-accent-emerald/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed tracking-wide"
            >
              ✓ {it.complete}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
