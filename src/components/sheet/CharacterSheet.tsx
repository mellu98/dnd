import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { useCharacter } from '../../hooks/useCharacter'
import { it } from '../../i18n/it'
import { getRaceById } from '../../data/races'
import { getClassById } from '../../data/classes'
import { getBackgroundById } from '../../data/backgrounds'
import { CharacterPortrait } from './CharacterPortrait'
import { CombatStatsBar } from './CombatStatsBar'
import { CombatInfoRow } from './CombatInfoRow'
import { LeftColumnPanel } from './LeftColumnPanel'
import { ASIPanel } from './ASIPanel'
import { ExpertisePanel } from './ExpertisePanel'
import { FeaturesPanel } from './FeaturesPanel'
import { EquipmentPanel } from './EquipmentPanel'
import { SpellsPanel } from './SpellsPanel'
import { NotesPanel } from './NotesPanel'
import { DeathSavesPanel } from './DeathSavesPanel'
import { RestButtons } from './RestButtons'
import { ConditionsTracker } from './ConditionsTracker'
import { InspirationTracker } from './InspirationTracker'
import { InitiativeTracker } from './InitiativeTracker'
import { SheetNavigation, type SheetSection, type SheetSectionItem } from './SheetNavigation'
import { SheetSectionCard } from './SheetSectionCard'

const SHEET_SECTIONS: SheetSectionItem[] = [
  { id: 'overview', label: it.sheet_nav_overview, icon: '\u2302' },
  { id: 'sheet', label: it.sheet_nav_sheet, icon: '\u2630' },
  { id: 'equipment', label: it.sheet_nav_equipment, icon: '\u2694\uFE0F' },
  { id: 'spells', label: it.sheet_nav_spells, icon: '\u2728' },
  { id: 'session', label: it.sheet_nav_session, icon: '\u23F1' },
]

function SectionHeading({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl md:text-2xl font-black text-text-primary">{title}</h2>
      <p className="mt-1 text-sm text-text-secondary">{description}</p>
    </div>
  )
}

function QuickMetric({
  label,
  value,
  helper,
  accentClassName = 'text-accent-gold',
}: {
  label: string
  value: string
  helper: string
  accentClassName?: string
}) {
  return (
    <div className="rounded-xl border border-border/50 bg-bg-primary/40 px-3 py-3">
      <p className="text-[10px] uppercase tracking-wider text-text-muted">{label}</p>
      <p className={`mt-1 text-2xl font-black ${accentClassName}`}>{value}</p>
      <p className="mt-1 text-xs text-text-secondary">{helper}</p>
    </div>
  )
}

export function CharacterSheet() {
  const { state, dispatch, calculatedStats } = useCharacter()
  const character = state.character
  const stats = calculatedStats
  const [activeSection, setActiveSection] = useState<SheetSection>('overview')

  useEffect(() => {
    if (character && stats && character.hp.max !== stats.hp.max) {
      dispatch({ type: 'UPDATE_HP_MAX', max: stats.hp.max })
    }
  }, [character, stats, dispatch])

  useEffect(() => {
    if (character) {
      setActiveSection('overview')
    }
  }, [character?.id])

  if (!character || !stats) return null

  const race = getRaceById(character.raceId)
  const cls = getClassById(character.classId)
  const bg = getBackgroundById(character.backgroundId)
  const canQuickSwitch = state.savedCharacters.length > 1
  const remainingHitDice = Math.max(0, character.level - (character.spentHitDice ?? 0))
  const activeConditionsCount = character.activeConditions.length

  const { classFeatures, speciesFeatures, featFeatures } = useMemo(() => {
    const raceFeatureNames = new Set((race?.features ?? []).map((feature) => feature.name))

    return {
      classFeatures: stats.allFeatures.filter(
        (feature) => !raceFeatureNames.has(feature.name) && feature.type !== 'feat' && feature.type !== 'origin_feat',
      ),
      speciesFeatures: stats.allFeatures.filter((feature) => raceFeatureNames.has(feature.name)),
      featFeatures: stats.allFeatures.filter((feature) => feature.type === 'feat' || feature.type === 'origin_feat'),
    }
  }, [race?.features, stats.allFeatures])

  const handleLevelChange = (delta: number) => {
    const newLevel = Math.max(1, Math.min(20, character.level + delta))
    dispatch({ type: 'SET_LEVEL', level: newLevel })
  }

  const overviewContent = (
    <div className="space-y-4">
      <SectionHeading title={it.overview} description={it.quick_resources} />

      <CombatStatsBar stats={stats} />
      <CombatInfoRow stats={stats} />

      <SheetSectionCard title={it.overview_resources} accentClassName="text-accent-blue">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
          <QuickMetric
            label={it.inspiration}
            value={character.inspiration ? 'ON' : 'OFF'}
            helper={character.inspiration ? it.inspiration_available : it.inspiration_empty}
          />
          <QuickMetric
            label={it.conditions_summary}
            value={String(activeConditionsCount)}
            helper={`${it.exhaustion_label} ${character.exhaustionLevel}/6`}
            accentClassName="text-accent-red"
          />
          <QuickMetric
            label={it.hit_dice_remaining_label}
            value={String(remainingHitDice)}
            helper={cls?.hitDie ?? it.hit_dice}
            accentClassName="text-accent-emerald"
          />
          {stats.spellcasting ? (
            <QuickMetric
              label={it.spell_save_dc}
              value={String(stats.spellcasting.saveDC)}
              helper={`${it.spell_attack_bonus} ${stats.spellcasting.attackBonus >= 0 ? '+' : ''}${stats.spellcasting.attackBonus}`}
              accentClassName="text-accent-purple"
            />
          ) : (
            <QuickMetric
              label={it.proficiency_summary}
              value={`${stats.proficiencyBonus >= 0 ? '+' : ''}${stats.proficiencyBonus}`}
              helper={it.proficiency_bonus}
              accentClassName="text-accent-blue"
            />
          )}
        </div>
      </SheetSectionCard>

      {character.imageUrl && (
        <SheetSectionCard title={character.name} accentClassName="text-accent-purple">
          <CharacterPortrait imageUrl={character.imageUrl} name={character.name} />
        </SheetSectionCard>
      )}
    </div>
  )

  const sheetContent = (
    <div className="space-y-4">
      <SectionHeading title={it.sheet_label} description="Caratteristiche, competenze e progressione del personaggio." />

      <ASIPanel />
      <ExpertisePanel />

      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-4 items-start">
        <LeftColumnPanel stats={stats} />

        <div className="space-y-4">
          <SheetSectionCard title={it.class_features}>
            <FeaturesPanel stats={stats} features={classFeatures} />
          </SheetSectionCard>

          {speciesFeatures.length > 0 && (
            <SheetSectionCard title={it.species_traits} accentClassName="text-accent-blue">
              <FeaturesPanel stats={stats} features={speciesFeatures} />
            </SheetSectionCard>
          )}

          {featFeatures.length > 0 && (
            <SheetSectionCard title={it.feats} accentClassName="text-accent-purple">
              <FeaturesPanel stats={stats} features={featFeatures} />
            </SheetSectionCard>
          )}
        </div>
      </div>
    </div>
  )

  const equipmentContent = (
    <div className="space-y-4">
      <SectionHeading title={it.tab_equipment} description="Armi, inventario, monete e risorse materiali." />
      <SheetSectionCard title={it.tab_equipment}>
        <EquipmentPanel stats={stats} />
      </SheetSectionCard>
    </div>
  )

  const spellsContent = (
    <div className="space-y-4">
      <SectionHeading title={it.sheet_nav_spells} description="Slot, preparazione e dettagli incantesimo senza scroll infinito." />
      <SheetSectionCard title={it.tab_spells} accentClassName="text-accent-purple">
        {stats.spellcasting ? (
          <SpellsPanel
            classId={character.classId}
            knownSpells={character.knownSpells}
            preparedSpells={character.preparedSpells}
            characterLevel={character.level}
            spellSlots={stats.spellSlots}
            spellcasting={stats.spellcasting}
          />
        ) : (
          <p className="text-sm text-text-secondary italic">{it.no_spellcasting}</p>
        )}
      </SheetSectionCard>
    </div>
  )

  const sessionContent = (
    <div className="space-y-4">
      <SectionHeading title={it.session_label} description="Tracker da tavolo: condizioni, riposi, note e ordine iniziativa." />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-start">
        <div className="space-y-4">
          <InspirationTracker />
          <ConditionsTracker />
          <DeathSavesPanel />
          <RestButtons />
        </div>

        <div className="space-y-4">
          <InitiativeTracker />
          <SheetSectionCard title={it.tab_notes} accentClassName="text-accent-blue">
            <NotesPanel />
          </SheetSectionCard>
        </div>
      </div>
    </div>
  )

  const sectionContent: Record<SheetSection, ReactNode> = {
    overview: overviewContent,
    sheet: sheetContent,
    equipment: equipmentContent,
    spells: spellsContent,
    session: sessionContent,
  }

  return (
    <div className="min-h-screen bg-bg-primary relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/3 rounded-full blur-3xl" />
      </div>

      <header className="sticky top-0 z-30 border-b border-border bg-bg-secondary/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-3 space-y-3">
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                {character.imageUrl && (
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent-gold/40 flex-shrink-0">
                    <img src={character.imageUrl} alt={character.name} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="min-w-0">
                  <h1 className="truncate text-xl md:text-2xl font-black text-text-primary">{character.name}</h1>
                  <p className="mt-0.5 text-sm text-text-secondary flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
                    <span className="text-accent-gold">{race?.nameIT ?? character.raceId}</span>
                    <span aria-hidden="true">\u00B7</span>
                    <span className="text-accent-blue">{cls?.nameIT ?? character.classId}</span>
                    {bg && (
                      <>
                        <span aria-hidden="true">\u00B7</span>
                        <span className="text-accent-purple">{bg.nameIT}</span>
                      </>
                    )}
                    <span aria-hidden="true">\u00B7</span>
                    <span className="text-xs text-text-muted">{stats.sizeIT}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap justify-end">
              {canQuickSwitch && (
                <label className="flex flex-col gap-1 min-w-[220px]">
                  <span className="text-[10px] text-text-muted uppercase tracking-wider">{it.quick_switch_label}</span>
                  <select
                    value={character.id}
                    onChange={(event) => {
                      const nextCharacter = state.savedCharacters.find((saved) => saved.id === event.target.value)
                      if (nextCharacter) {
                        dispatch({ type: 'LOAD_CHARACTER', character: nextCharacter })
                      }
                    }}
                    className="bg-bg-card/80 border border-border rounded-xl px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/40"
                  >
                    {state.savedCharacters.map((saved) => (
                      <option key={saved.id} value={saved.id}>
                        {saved.name}
                      </option>
                    ))}
                  </select>
                </label>
              )}

              <div className="flex items-center gap-2 rounded-2xl border border-border bg-bg-card/80 px-2 py-1.5">
                <button
                  type="button"
                  onClick={() => handleLevelChange(-1)}
                  disabled={character.level <= 1}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-bg-secondary text-lg font-bold text-text-secondary transition-all hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-30"
                >
                  \u2212
                </button>
                <div className="min-w-[56px] text-center">
                  <span className="block text-[10px] uppercase tracking-wider text-text-muted">{it.level}</span>
                  <span className="text-2xl font-black text-accent-gold tabular-nums">{character.level}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleLevelChange(1)}
                  disabled={character.level >= 20}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-bg-secondary text-lg font-bold text-text-secondary transition-all hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-30"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start gap-3">
            <button
              type="button"
              onClick={() => dispatch({ type: 'GO_HOME' })}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-card/80 px-4 py-2 text-sm font-medium text-text-secondary transition-all hover:border-accent-red/40 hover:text-accent-red"
            >
              <span aria-hidden="true">\u2190</span>
              <span>{it.back_to_characters}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-6 pb-32">
        <div data-testid="sheet-section-outlet" key={`${character.id}-${activeSection}`} className="animate-fade-in">
          {sectionContent[activeSection]}
        </div>
      </main>

      <SheetNavigation
        sections={SHEET_SECTIONS}
        activeSection={activeSection}
        onChange={setActiveSection}
      />
    </div>
  )
}
