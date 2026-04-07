import { useState, useEffect } from 'react'
import { races } from '../../data/races'
import { useCharacterContext } from '../../context/CharacterContext'
import { SelectionCard } from '../ui/SelectionCard'
import { it } from '../../i18n/it'
import type { AbilityName, AbilityScoreBonus } from '../../types'

const abilityOptions: { value: AbilityName; label: string }[] = [
  { value: 'STR', label: it.STR_full },
  { value: 'DEX', label: it.DEX_full },
  { value: 'CON', label: it.CON_full },
  { value: 'INT', label: it.INT_full },
  { value: 'WIS', label: it.WIS_full },
  { value: 'CHA', label: it.CHA_full },
]

export default function RaceSelector() {
  const { state, dispatch } = useCharacterContext()
  const draft = state.creationDraft

  const [selectedRace, setSelectedRace] = useState(draft.raceId || '')
  const [selectedSubrace, setSelectedSubrace] = useState(draft.subraceId || '')
  const [chosenBonuses, setChosenBonuses] = useState<AbilityName[]>(
    draft.chosenAbilityBonuses?.map(b => b.ability) || []
  )

  const race = races.find(r => r.id === selectedRace)

  useEffect(() => {
    if (selectedRace) {
      dispatch({ type: 'SET_RACE', raceId: selectedRace, subraceId: selectedSubrace || null })
    }
  }, [selectedRace, selectedSubrace, dispatch])

  useEffect(() => {
    if (race?.chooseAbilityBonuses && chosenBonuses.length > 0) {
      const bonuses: AbilityScoreBonus[] = chosenBonuses.map(a => ({
        ability: a,
        value: race.chooseAbilityBonuses!.value,
      }))
      dispatch({ type: 'SET_CHOSEN_ABILITY_BONUSES', bonuses })
    }
  }, [chosenBonuses, race, dispatch])

  const handleSelectRace = (id: string) => {
    setSelectedRace(id)
    setSelectedSubrace('')
    setChosenBonuses([])
    const r = races.find(rc => rc.id === id)
    if (r && r.subraces.length === 1) {
      setSelectedSubrace(r.subraces[0].id)
    }
  }

  const toggleBonusAbility = (ability: AbilityName) => {
    if (!race?.chooseAbilityBonuses) return
    const max = race.chooseAbilityBonuses.choose
    if (chosenBonuses.includes(ability)) {
      setChosenBonuses(chosenBonuses.filter(a => a !== ability))
    } else if (chosenBonuses.length < max) {
      setChosenBonuses([...chosenBonuses, ability])
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-accent-gold mb-4">{it.step_race}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {races.map(r => (
          <SelectionCard
            key={r.id}
            selected={selectedRace === r.id}
            onClick={() => handleSelectRace(r.id)}
            title={r.nameIT}
            subtitle={`${it.speed}: ${r.speed}ft · ${it.size}: ${r.sizeIT}${r.darkvision > 0 ? ` · ${it.darkvision}: ${r.darkvision}ft` : ''}`}
            badges={
              r.abilityBonuses.map((b, i) => (
                <span key={i} className="text-xs bg-accent-emerald/20 text-accent-emerald px-2 py-0.5 rounded-full font-medium">
                  {it[b.ability as keyof typeof it]} +{b.value}
                </span>
              ))
            }
          />
        ))}
      </div>

      {race && race.subraces.length > 1 && (
        <div className="mt-4 p-4 bg-bg-secondary/80 rounded-xl border border-border">
          <h3 className="text-sm font-semibold text-accent-gold mb-3">{it.choose_subrace}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {race.subraces.map(sr => (
              <button
                key={sr.id}
                onClick={() => setSelectedSubrace(sr.id)}
                className={`text-left p-3 rounded-lg border transition-all ${
                  selectedSubrace === sr.id
                    ? 'border-accent-gold bg-bg-card ring-1 ring-accent-gold/20'
                    : 'border-border bg-bg-card/50 hover:bg-bg-card'
                }`}
              >
                <span className="font-medium text-sm">{sr.nameIT}</span>
                <div className="flex gap-1 mt-1 flex-wrap">
                  {sr.abilityBonuses.map((b, i) => (
                    <span key={i} className="text-xs text-accent-emerald">
                      {it[b.ability as keyof typeof it]} +{b.value}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {race?.chooseAbilityBonuses && (
        <div className="mt-4 p-4 bg-bg-secondary/80 rounded-xl border border-border">
          <h3 className="text-sm font-semibold text-accent-gold mb-3">
            {it.CHA_full} — Scegli {race.chooseAbilityBonuses.choose} ({race.chooseAbilityBonuses.value}pt)
          </h3>
          <div className="flex flex-wrap gap-2">
            {abilityOptions
              .filter(a => !race.chooseAbilityBonuses!.exclude.includes(a.value))
              .map(a => (
                <button
                  key={a.value}
                  onClick={() => toggleBonusAbility(a.value)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                    chosenBonuses.includes(a.value)
                      ? 'border-accent-gold bg-accent-gold/20 text-accent-gold shadow-sm'
                      : 'border-border bg-bg-card text-text-secondary hover:bg-bg-card-hover'
                  }`}
                >
                  {a.label}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
