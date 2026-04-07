import { useState, useEffect } from 'react'
import { useCharacter } from '../../hooks/useCharacter'
import { it } from '../../i18n/it'
import { formatModifier } from '../../utils/modifiers'
import { getRaceById } from '../../data/races'
import { getClassById } from '../../data/classes'
import { getBackgroundById } from '../../data/backgrounds'
import { HpTracker } from './HpTracker'
import { AbilityScoresRow } from './AbilityScoresRow'
import { SavingThrows } from './SavingThrows'
import { SkillsList } from './SkillsList'
import { FeaturesPanel } from './FeaturesPanel'
import { EquipmentPanel } from './EquipmentPanel'
import { NotesPanel } from './NotesPanel'
import { CharacterPortrait } from './CharacterPortrait'

type TabId = 'features' | 'equipment' | 'notes'

export function CharacterSheet() {
  const { state, dispatch, calculatedStats } = useCharacter()
  const [activeTab, setActiveTab] = useState<TabId>('features')
  const character = state.character
  const stats = calculatedStats

  // Sync max HP when calculated stats change (e.g. level up)
  useEffect(() => {
    if (character && stats && character.hp.max !== stats.hp.max) {
      dispatch({ type: 'UPDATE_HP_MAX', max: stats.hp.max })
    }
  }, [character, stats, dispatch])

  if (!character || !stats) return null

  const race = getRaceById(character.raceId)
  const cls = getClassById(character.classId)
  const bg = getBackgroundById(character.backgroundId)

  const handleLevelChange = (delta: number) => {
    const newLevel = Math.max(1, Math.min(20, character.level + delta))
    dispatch({ type: 'SET_LEVEL', level: newLevel })
  }

  const statBlocks = [
    { label: it.armor_class, value: stats.armorClass, color: 'text-accent-blue' },
    { label: it.initiative, value: formatModifier(stats.initiative), color: 'text-accent-gold' },
    { label: it.speed, value: `${stats.speed} ${it.ft}`, color: 'text-text-primary' },
    { label: it.proficiency_bonus, value: formatModifier(stats.proficiencyBonus), color: 'text-accent-emerald' },
    { label: it.passive_perception, value: stats.passivePerception, color: 'text-accent-purple' },
    { label: it.darkvision, value: stats.darkvision > 0 ? `${stats.darkvision} ${it.ft}` : '--', color: 'text-text-secondary' },
  ]

  const tabs: { id: TabId; label: string; icon: string }[] = [
    { id: 'features', label: it.tab_features, icon: '⚡' },
    { id: 'equipment', label: it.tab_equipment, icon: '🎒' },
    { id: 'notes', label: it.tab_notes, icon: '📝' },
  ]

  return (
    <div className="min-h-screen bg-bg-primary relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/3 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 bg-bg-secondary/80 backdrop-blur-md border-b border-border px-4 py-4 sticky top-0">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-text-primary">
                {character.name}
              </h1>
              <p className="text-sm text-text-secondary mt-0.5">
                <span className="text-accent-gold">{race?.nameIT ?? character.raceId}</span>
                {' · '}
                <span className="text-accent-blue">{cls?.nameIT ?? character.classId}</span>
                {bg && <><span className="text-text-muted"> · </span><span className="text-accent-purple">{bg.nameIT}</span></>}
              </p>
            </div>
            <div className="flex items-center gap-2 bg-bg-card/80 border border-border rounded-xl px-3 py-1.5">
              <button
                onClick={() => handleLevelChange(-1)}
                disabled={character.level <= 1}
                className="w-8 h-8 rounded-lg bg-bg-secondary text-text-secondary hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center font-bold"
              >
                −
              </button>
              <div className="text-center min-w-[60px]">
                <span className="text-[10px] text-text-muted uppercase tracking-wider block leading-none">
                  {it.level}
                </span>
                <span className="text-2xl font-black text-accent-gold tabular-nums">
                  {character.level}
                </span>
              </div>
              <button
                onClick={() => handleLevelChange(1)}
                disabled={character.level >= 20}
                className="w-8 h-8 rounded-lg bg-bg-secondary text-text-secondary hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center font-bold"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-4 py-6 space-y-6 animate-fade-in">
        {/* Stats Bar */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {statBlocks.map((block) => (
            <div
              key={block.label}
              className="bg-bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-3 text-center hover:bg-bg-card hover:border-border-light hover:shadow-md transition-all"
            >
              <div className="text-[10px] text-text-secondary uppercase tracking-wider mb-1 leading-tight">
                {block.label}
              </div>
              <div className={`text-lg font-black ${block.color}`}>
                {block.value}
              </div>
            </div>
          ))}
        </div>

        {/* HP Tracker */}
        <HpTracker />

        {/* Ability Scores */}
        <AbilityScoresRow stats={stats} />

        {/* Character Portrait */}
        <CharacterPortrait imageUrl={character.imageUrl} name={character.name} />

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <SavingThrows stats={stats} />
            <SkillsList stats={stats} />
          </div>

          {/* Right Column - Tabbed Panel */}
          <div className="space-y-3">
            <div className="flex gap-1 bg-bg-secondary/60 backdrop-blur-sm rounded-xl p-1.5 border border-border/50">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-bg-card text-accent-gold shadow-sm'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-card/30'
                  }`}
                >
                  <span className="mr-1">{tab.icon}</span> {tab.label}
                </button>
              ))}
            </div>

            <div className="min-h-[300px] bg-bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl p-4">
              {activeTab === 'features' && <FeaturesPanel stats={stats} />}
              {activeTab === 'equipment' && <EquipmentPanel />}
              {activeTab === 'notes' && <NotesPanel />}
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="pt-4 pb-8 flex justify-center">
          <button
            onClick={() => dispatch({ type: 'GO_HOME' })}
            className="px-8 py-2.5 bg-bg-secondary/60 backdrop-blur-sm border border-border rounded-xl text-text-secondary hover:text-accent-red hover:border-accent-red/50 hover:bg-accent-red/5 transition-all duration-200 font-medium"
          >
            ← {it.my_characters}
          </button>
        </div>
      </main>
    </div>
  )
}
