import { useState } from 'react'
import { getSpellsByClass } from '../../data/spells'
import type { Spell } from '../../types'
import { it } from '../../i18n/it'
import { SpellDetailModal } from './SpellDetailModal'
import { SpellPickerModal } from './SpellPickerModal'
import { useCharacterDispatch } from '../../context/CharacterContext'

interface SpellSlot {
  level: number
  max: number
  expended: number
}

interface SpellsPanelProps {
  classId: string
  knownSpells: string[]
  characterLevel: number
  spellSlots: SpellSlot[]
}

const LEVEL_FILTERS = [
  { value: -1, label: () => it.all_levels },
  { value: 0, label: () => it.spell_cantrip },
  { value: 1, label: () => it.spell_level_1 },
  { value: 2, label: () => it.spell_level_2 },
  { value: 3, label: () => it.spell_level_3 },
]

/** Returns cantrip tier index (0-3) based on character level */
function getCantripTier(level: number): 0 | 1 | 2 | 3 {
  if (level >= 17) return 3
  if (level >= 11) return 2
  if (level >= 5) return 1
  return 0
}

function ComponentBadge({ label, active }: { label: string; active: boolean }) {
  if (!active) return null
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent-purple/20 text-accent-purple text-[10px] font-bold border border-accent-purple/30">
      {label}
    </span>
  )
}

function SpellLevelBadge({ level }: { level: number }) {
  if (level === 0) {
    return (
      <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent-gold/20 text-accent-gold font-semibold border border-accent-gold/30">
        {it.spell_cantrip}
      </span>
    )
  }
  return (
    <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent-blue/15 text-accent-blue font-semibold border border-accent-blue/30">
      Lvl {level}
    </span>
  )
}

/** Spell slot bubbles for a single spell level row */
function SlotRow({ slot }: { slot: SpellSlot }) {
  const dispatch = useCharacterDispatch()
  const available = slot.max - slot.expended

  return (
    <div className="flex items-center gap-2">
      <span className="text-[11px] text-text-muted w-14 shrink-0">{slot.level}° liv.</span>
      <div className="flex gap-1 flex-wrap">
        {Array.from({ length: slot.max }).map((_, i) => {
          const isExpended = i >= available
          return (
            <button
              key={i}
              title={isExpended ? 'Ripristina slot' : 'Usa slot'}
              onClick={() =>
                dispatch(
                  isExpended
                    ? { type: 'RESTORE_SPELL_SLOT', level: slot.level }
                    : { type: 'EXPEND_SPELL_SLOT', level: slot.level },
                )
              }
              className={`w-5 h-5 rounded-full border transition-all ${
                isExpended
                  ? 'bg-transparent border-border/60 hover:border-accent-blue/60'
                  : 'bg-accent-blue/70 border-accent-blue hover:bg-accent-blue'
              }`}
            />
          )
        })}
      </div>
      <span className="text-[11px] text-text-muted ml-auto">
        {available}/{slot.max}
      </span>
    </div>
  )
}

/** Full spell slot tracker section */
function SpellSlotTracker({ spellSlots }: { spellSlots: SpellSlot[] }) {
  const dispatch = useCharacterDispatch()

  if (spellSlots.length === 0) return null

  return (
    <div className="bg-bg-primary/40 border border-border/50 rounded-xl px-3 py-3 space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-semibold text-accent-gold uppercase tracking-wider">Slot Incantesimo</p>
        <button
          onClick={() => dispatch({ type: 'RESTORE_ALL_SPELL_SLOTS' })}
          className="text-[10px] px-2 py-1 rounded bg-accent-emerald/15 text-accent-emerald border border-accent-emerald/30 hover:bg-accent-emerald/25 transition-all font-medium"
        >
          Riposo Lungo
        </button>
      </div>
      {spellSlots.map((slot) => (
        <SlotRow key={slot.level} slot={slot} />
      ))}
    </div>
  )
}

/** Derive the highest spell level available from spellSlots */
function getMaxSpellLevel(spellSlots: SpellSlot[]): number {
  if (spellSlots.length === 0) return 0
  return Math.max(...spellSlots.map((s) => s.level))
}

export function SpellsPanel({ classId, knownSpells, characterLevel, spellSlots }: SpellsPanelProps) {
  const [levelFilter, setLevelFilter] = useState<number>(-1)
  const [selectedSpell, setSelectedSpell] = useState<Spell | null>(null)
  const [showPicker, setShowPicker] = useState(false)

  const allSpells = getSpellsByClass(classId)
  const filteredSpells = levelFilter === -1 ? allSpells : allSpells.filter((s) => s.level === levelFilter)

  if (allSpells.length === 0) {
    return <p className="text-text-secondary text-sm italic px-1">{it.no_spells}</p>
  }

  const cantripTier = getCantripTier(characterLevel)
  const maxSpellLevel = getMaxSpellLevel(spellSlots)

  return (
    <div className="space-y-3">
      {/* Spell slot tracker */}
      <SpellSlotTracker spellSlots={spellSlots} />

      {/* Header row: filter buttons + manage button */}
      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex gap-1.5 flex-wrap flex-1">
          {LEVEL_FILTERS.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setLevelFilter(value)}
              className={`px-3 py-1.5 min-h-[44px] rounded-lg text-xs font-semibold transition-all border ${
                levelFilter === value
                  ? 'bg-accent-gold/25 text-accent-gold border-accent-gold/50 shadow-sm'
                  : 'bg-bg-card/60 text-text-secondary border-border/50 hover:text-text-primary hover:bg-bg-card'
              }`}
            >
              {label()}
            </button>
          ))}
        </div>
        {/* Manage spells button */}
        <button
          onClick={() => setShowPicker(true)}
          className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 min-h-[44px] rounded-lg text-xs font-semibold border transition-all bg-accent-purple/10 text-accent-purple border-accent-purple/30 hover:bg-accent-purple/20 hover:border-accent-purple/50"
        >
          <span>✦</span>
          <span>{it.manage_spells}</span>
        </button>
      </div>

      {/* Spell count */}
      <p className="text-xs text-text-muted px-0.5">
        {filteredSpells.length} incantesim{filteredSpells.length === 1 ? 'o' : 'i'}
      </p>

      {/* Spell list */}
      {filteredSpells.length === 0 ? (
        <p className="text-text-secondary text-sm italic px-1">{it.no_spells}</p>
      ) : (
        <ul className="space-y-1.5 max-h-[420px] overflow-y-auto pr-1">
          {filteredSpells.map((spell) => {
            const isKnown = knownSpells.includes(spell.id)
            // Cantrip scaling: show current damage tier in the list
            const scaledDamage =
              spell.level === 0 && spell.cantripScaling ? spell.cantripScaling.damageTiers[cantripTier] : null

            return (
              <li
                key={spell.id}
                onClick={() => setSelectedSpell(spell)}
                className={`flex items-center gap-2 rounded-lg px-3 py-2.5 cursor-pointer border transition-all group ${
                  isKnown
                    ? 'bg-accent-purple/10 border-accent-purple/30 hover:bg-accent-purple/20'
                    : 'bg-bg-card/50 border-border/50 hover:bg-bg-card hover:border-border-light'
                }`}
              >
                {/* Spell name + school */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-text-primary truncate group-hover:text-accent-gold transition-colors">
                      {spell.nameIT}
                    </span>
                    {spell.concentration && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent-red/15 text-accent-red/80 border border-accent-red/30 font-medium shrink-0">
                        C
                      </span>
                    )}
                    {spell.ritual && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent-emerald/15 text-accent-emerald/80 border border-accent-emerald/30 font-medium shrink-0">
                        R
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="text-[11px] text-text-muted">{spell.schoolIT}</span>
                    <span className="text-text-muted/40">·</span>
                    <span className="text-[11px] text-text-muted">{spell.castingTimeIT}</span>
                    {scaledDamage && (
                      <>
                        <span className="text-text-muted/40">·</span>
                        <span className="text-[11px] text-accent-gold font-semibold">{scaledDamage}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Right side: components + level */}
                <div className="flex items-center gap-1 shrink-0">
                  <ComponentBadge label="V" active={spell.components.v} />
                  <ComponentBadge label="S" active={spell.components.s} />
                  <ComponentBadge label="M" active={!!spell.components.m} />
                </div>
                <div className="shrink-0">
                  <SpellLevelBadge level={spell.level} />
                </div>
              </li>
            )
          })}
        </ul>
      )}

      {/* Detail modal */}
      {selectedSpell && (
        <SpellDetailModal
          spell={selectedSpell}
          characterLevel={characterLevel}
          onClose={() => setSelectedSpell(null)}
        />
      )}

      {/* Spell picker modal */}
      {showPicker && (
        <SpellPickerModal
          classId={classId}
          maxSpellLevel={maxSpellLevel}
          knownSpells={knownSpells}
          onClose={() => setShowPicker(false)}
        />
      )}
    </div>
  )
}
