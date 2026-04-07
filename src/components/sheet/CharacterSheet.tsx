import { useEffect } from 'react'
import { useCharacter } from '../../hooks/useCharacter'
import { it } from '../../i18n/it'
import { getRaceById } from '../../data/races'
import { getClassById } from '../../data/classes'
import { getBackgroundById } from '../../data/backgrounds'
import { CharacterPortrait } from './CharacterPortrait'
import { CombatStatsBar } from './CombatStatsBar'
import { CombatInfoRow } from './CombatInfoRow'
import { LeftColumnPanel } from './LeftColumnPanel'
import { CenterColumnPanel } from './CenterColumnPanel'
import { RightColumnPanel } from './RightColumnPanel'

export function CharacterSheet() {
  const { state, dispatch, calculatedStats } = useCharacter()
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

  return (
    <div className="min-h-screen bg-bg-primary relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/3 rounded-full blur-3xl" />
      </div>

      {/* ═══════════ HEADER ═══════════ */}
      <header className="relative z-10 bg-bg-secondary/80 backdrop-blur-md border-b border-border px-4 py-4 sticky top-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-3">
            {/* Portrait thumbnail (if available) + Character info */}
            <div className="flex items-center gap-3">
              {character.imageUrl && (
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent-gold/40 flex-shrink-0">
                  <img src={character.imageUrl} alt={character.name} className="w-full h-full object-cover" />
                </div>
              )}
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-text-primary">{character.name}</h1>
                <p className="text-sm text-text-secondary mt-0.5">
                  <span className="text-accent-gold">{race?.nameIT ?? character.raceId}</span>
                  {' · '}
                  <span className="text-accent-blue">{cls?.nameIT ?? character.classId}</span>
                  {bg && (
                    <>
                      <span className="text-text-muted"> · </span>
                      <span className="text-accent-purple">{bg.nameIT}</span>
                    </>
                  )}
                  {' · '}
                  <span className="text-accent-purple/80 text-xs">{stats.sizeIT}</span>
                </p>
              </div>
            </div>

            {/* Level Stepper */}
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
                <span className="text-2xl font-black text-accent-gold tabular-nums">{character.level}</span>
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

      {/* ═══════════ MAIN BODY ═══════════ */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-6 animate-fade-in">
        {/* ── Combat Stats Bar (CA + HP + Dadi Vita + Bonus Competenza) ── */}
        <div className="mb-4">
          <CombatStatsBar stats={stats} />
        </div>

        {/* ── Combat Info Row (Iniziativa · Velocità · Taglia · Percezione Passiva · Scurovisione) ── */}
        <div className="mb-6">
          <CombatInfoRow stats={stats} />
        </div>

        {/* ── 3-Column CSS Grid (the 2024 sheet layout) ── */}
        {/*
          Desktop (≥ 1280px): 3 equal columns
          Tablet  (≥ 768px):  2 columns — left | (center + right stacked)
          Mobile  (< 768px):  1 column stacked
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-start">
          {/* ── LEFT COLUMN: Ability blocks (score+mod+save+skills) + Proficiencies ── */}
          <div className="min-w-0">
            <LeftColumnPanel stats={stats} />
          </div>

          {/* ── CENTER COLUMN: Class Features + Equipment ── */}
          <div className="min-w-0">
            <CenterColumnPanel stats={stats} />
          </div>

          {/* ── RIGHT COLUMN: Species Traits + Feats + Spells + Notes ── */}
          <div className="min-w-0 md:col-span-1 xl:col-span-1">
            <RightColumnPanel stats={stats} />
          </div>
        </div>

        {/* ── Portrait (full resolution, shown below grid if available) ── */}
        {character.imageUrl && (
          <div className="mt-6">
            <CharacterPortrait imageUrl={character.imageUrl} name={character.name} />
          </div>
        )}

        {/* ── Back to Home ── */}
        <div className="pt-6 pb-8 flex justify-center">
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
