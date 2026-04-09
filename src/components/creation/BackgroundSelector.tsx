import { useCallback, useEffect, useMemo, useState } from 'react'
import { backgrounds } from '../../data/backgrounds'
import { useCharacterContext } from '../../context/CharacterContext'
import { it } from '../../i18n/it'
import { SelectionCard } from '../ui/SelectionCard'
import type {
  AbilityName,
  BackgroundAbilityChoiceMode,
  BackgroundAbilityChoices,
} from '../../types'
import {
  getBackgroundAbilityModes,
  getBackgroundTripleOptions,
  isBackgroundAbilityChoicesValid,
} from '../../utils/background-ability-choices'
import { toMetricRuleText } from '../../utils/rules-text'

const abilityMap: Record<AbilityName, string> = {
  STR: it.STR_full,
  DEX: it.DEX_full,
  CON: it.CON_full,
  INT: it.INT_full,
  WIS: it.WIS_full,
  CHA: it.CHA_full,
}

const abilityShortMap: Record<AbilityName, string> = {
  STR: it.STR,
  DEX: it.DEX,
  CON: it.CON,
  INT: it.INT,
  WIS: it.WIS,
  CHA: it.CHA,
}

function formatAbilityList(options: AbilityName[]): string {
  return Array.from(new Set(options)).map((ability) => abilityShortMap[ability]).join('/')
}

function AbilityPoolSelector({
  label,
  value,
  options,
  disabledOptions = [],
  onChange,
}: {
  label: string
  value: AbilityName | null
  options: AbilityName[]
  disabledOptions?: AbilityName[]
  onChange: (a: AbilityName) => void
}) {
  return (
    <div className="mb-2">
      <span className="text-xs font-medium text-text-muted">{label}</span>
      <div className="mt-1 flex flex-wrap gap-1.5">
        {options.map((ability) => {
          const disabled = disabledOptions.includes(ability) && value !== ability
          return (
            <button
              key={ability}
              type="button"
              onClick={() => onChange(ability)}
              disabled={disabled}
              className={`rounded-md border px-2.5 py-1 text-xs font-medium transition-all ${
                value === ability
                  ? 'border-accent-gold bg-accent-gold/20 text-accent-gold'
                  : 'border-border text-text-secondary hover:bg-bg-card'
              } ${disabled ? 'cursor-not-allowed opacity-40 hover:bg-transparent' : ''}`}
            >
              {abilityMap[ability]}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function BackgroundSelector() {
  const { state, dispatch } = useCharacterContext()
  const [selected, setSelected] = useState(state.creationDraft.backgroundId || '')
  const [selectionMode, setSelectionMode] = useState<BackgroundAbilityChoiceMode>('plus2_plus1')
  const [primaryASI, setPrimaryASI] = useState<AbilityName | null>(null)
  const [secondaryASI, setSecondaryASI] = useState<AbilityName | null>(null)
  const [tripleASI, setTripleASI] = useState<Array<AbilityName | null>>([null, null, null])

  const background = useMemo(
    () => backgrounds.find((item) => item.id === selected),
    [selected],
  )
  const availableModes = useMemo(
    () => getBackgroundAbilityModes(background),
    [background],
  )
  const tripleOptions = useMemo(
    () => getBackgroundTripleOptions(background),
    [background],
  )

  useEffect(() => {
    setSelected(state.creationDraft.backgroundId || '')
  }, [state.creationDraft.backgroundId])

  useEffect(() => {
    if (!background) {
      setSelectionMode('plus2_plus1')
      setPrimaryASI(null)
      setSecondaryASI(null)
      setTripleASI([null, null, null])
      return
    }

    const existingChoices = state.creationDraft.backgroundAbilityChoices ?? null
    const validExistingChoices = existingChoices && isBackgroundAbilityChoicesValid(background, existingChoices)
      ? existingChoices
      : null
    const defaultMode = availableModes[0] ?? 'plus2_plus1'

    if (validExistingChoices?.mode === 'plus2_plus1') {
      setSelectionMode(validExistingChoices.mode)
      setPrimaryASI(validExistingChoices.primary)
      setSecondaryASI(validExistingChoices.secondary)
      setTripleASI([null, null, null])
      return
    }

    if (validExistingChoices?.mode === 'plus1_plus1_plus1') {
      setSelectionMode(validExistingChoices.mode)
      setPrimaryASI(null)
      setSecondaryASI(null)
      setTripleASI([
        validExistingChoices.abilities[0],
        validExistingChoices.abilities[1],
        validExistingChoices.abilities[2],
      ])
      return
    }

    setSelectionMode(defaultMode)
    setPrimaryASI(null)
    setSecondaryASI(null)
    setTripleASI([null, null, null])
  }, [availableModes, background, state.creationDraft.backgroundAbilityChoices])

  useEffect(() => {
    if (!background) {
      dispatch({ type: 'SET_BACKGROUND_ABILITY_CHOICES', choices: null })
      return
    }

    let nextChoices: BackgroundAbilityChoices | null = null

    if (
      selectionMode === 'plus2_plus1'
      && primaryASI
      && secondaryASI
      && primaryASI !== secondaryASI
    ) {
      nextChoices = {
        mode: 'plus2_plus1',
        primary: primaryASI,
        secondary: secondaryASI,
      }
    }

    if (
      selectionMode === 'plus1_plus1_plus1'
      && tripleASI.every(Boolean)
      && new Set(tripleASI).size === 3
    ) {
      nextChoices = {
        mode: 'plus1_plus1_plus1',
        abilities: tripleASI as [AbilityName, AbilityName, AbilityName],
      }
    }

    dispatch({ type: 'SET_BACKGROUND_ABILITY_CHOICES', choices: nextChoices })
  }, [background?.id, dispatch, primaryASI, secondaryASI, selectionMode, tripleASI])

  const handleBackgroundSelect = useCallback((id: string) => {
    setSelected(id)
    setPrimaryASI(null)
    setSecondaryASI(null)
    setTripleASI([null, null, null])
    dispatch({ type: 'SET_BACKGROUND', backgroundId: id })
  }, [dispatch])

  const handleTripleChange = useCallback((slotIndex: number, ability: AbilityName) => {
    setTripleASI((current) => {
      const next = [...current]
      next[slotIndex] = ability
      return next
    })
  }, [])

  const selectedSummary = background
    ? formatAbilityList(
        getBackgroundTripleOptions(background).length > 0
          ? getBackgroundTripleOptions(background)
          : [...background.abilityScoreOptions.primary, ...background.abilityScoreOptions.secondary],
      )
    : ''

  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold text-accent-gold">{it.step_background}</h2>
      <p className="mb-4 text-sm text-text-muted">
        Il tuo background definisce storia, competenze, talento iniziale e bonus alle caratteristiche.
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {backgrounds.map((item) => {
          const modes = getBackgroundAbilityModes(item)
          const summary = formatAbilityList(
            getBackgroundTripleOptions(item).length > 0
              ? getBackgroundTripleOptions(item)
              : [...item.abilityScoreOptions.primary, ...item.abilityScoreOptions.secondary],
          )

          return (
            <SelectionCard
              key={item.id}
              selected={selected === item.id}
              onClick={() => handleBackgroundSelect(item.id)}
              title={item.nameIT}
              badges={(
                <div className="flex flex-wrap gap-1">
                  <span className="rounded bg-accent-gold/20 px-1.5 py-0.5 text-xs text-accent-gold">
                    {summary}
                  </span>
                  <span className="rounded bg-accent-blue/20 px-1.5 py-0.5 text-xs text-accent-blue">
                    {modes.includes('plus1_plus1_plus1') ? '+2/+1 o +1/+1/+1' : '+2/+1'}
                  </span>
                </div>
              )}
            >
              <div className="mt-2 space-y-1">
                <div className="flex flex-wrap gap-1">
                  {item.skillProficiencies.map((proficiency, index) => (
                    <span key={index} className="rounded bg-accent-emerald/20 px-1.5 py-0.5 text-xs text-accent-emerald">
                      {proficiency.valueIT}
                    </span>
                  ))}
                </div>
                <p className="text-xs font-medium text-accent-purple">{item.originFeat.nameIT}</p>
              </div>
            </SelectionCard>
          )
        })}
      </div>

      {background && (
        <div className="mt-4 space-y-4 rounded-xl border border-border bg-bg-secondary/80 p-4">
          <div>
            <h3 className="mb-2 text-sm font-semibold text-accent-gold">Bonus alle Caratteristiche</h3>
            <p className="mb-3 text-xs text-text-secondary">
              Questo background usa {selectedSummary}. Scegli una delle distribuzioni valide del ruleset 2024.
            </p>

            {availableModes.length > 1 && (
              <div className="mb-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectionMode('plus2_plus1')}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
                    selectionMode === 'plus2_plus1'
                      ? 'border-accent-gold bg-accent-gold/20 text-accent-gold'
                      : 'border-border text-text-secondary hover:bg-bg-card'
                  }`}
                >
                  +2 / +1
                </button>
                <button
                  type="button"
                  onClick={() => setSelectionMode('plus1_plus1_plus1')}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
                    selectionMode === 'plus1_plus1_plus1'
                      ? 'border-accent-gold bg-accent-gold/20 text-accent-gold'
                      : 'border-border text-text-secondary hover:bg-bg-card'
                  }`}
                >
                  +1 / +1 / +1
                </button>
              </div>
            )}

            {selectionMode === 'plus2_plus1' ? (
              <>
                <AbilityPoolSelector
                  label="+2 a una caratteristica"
                  value={primaryASI}
                  options={background.abilityScoreOptions.primary}
                  onChange={setPrimaryASI}
                />
                <AbilityPoolSelector
                  label="+1 a una caratteristica diversa"
                  value={secondaryASI}
                  options={background.abilityScoreOptions.secondary}
                  disabledOptions={primaryASI ? [primaryASI] : []}
                  onChange={setSecondaryASI}
                />
              </>
            ) : (
              <>
                {[0, 1, 2].map((slotIndex) => (
                  <AbilityPoolSelector
                    key={slotIndex}
                    label={`+1 caratteristica ${slotIndex + 1}`}
                    value={tripleASI[slotIndex]}
                    options={tripleOptions}
                    disabledOptions={
                      tripleASI
                        .filter((ability, index): ability is AbilityName => index !== slotIndex && ability !== null)
                    }
                    onChange={(ability) => handleTripleChange(slotIndex, ability)}
                  />
                ))}
              </>
            )}
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold text-accent-gold">Competenze</h3>
            <div className="flex flex-wrap gap-1.5">
              {background.skillProficiencies.map((proficiency, index) => (
                <span key={index} className="rounded bg-accent-emerald/20 px-2 py-1 text-xs text-accent-emerald">
                  {proficiency.valueIT}
                </span>
              ))}
              {background.toolProficiency.value !== 'None' && (
                <span className="rounded bg-accent-blue/20 px-2 py-1 text-xs text-accent-blue">
                  {background.toolProficiency.valueIT}
                </span>
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold text-accent-gold">{it.origin_feat || 'Talento di Origine'}</h3>
            <p className="text-xs font-medium text-accent-purple">{background.originFeat.nameIT}</p>
            <p className="mt-1 text-xs text-text-secondary">{toMetricRuleText(background.originFeat.descriptionIT)}</p>
          </div>
        </div>
      )}
    </div>
  )
}
