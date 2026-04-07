import { useState } from 'react'
import { getSpellsByClass } from '../../data/spells'
import type { Spell } from '../../types'
import { it } from '../../i18n/it'
import { SpellDetailModal } from './SpellDetailModal'

interface SpellsPanelProps {
  classId: string
  knownSpells: string[]
}

const LEVEL_FILTERS = [
  { value: -1, label: () => it.all_levels },
  { value: 0, label: () => it.spell_cantrip },
  { value: 1, label: () => it.spell_level_1 },
  { value: 2, label: () => it.spell_level_2 },
  { value: 3, label: () => it.spell_level_3 },
]

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

export function SpellsPanel({ classId, knownSpells }: SpellsPanelProps) {
  const [levelFilter, setLevelFilter] = useState<number>(-1)
  const [selectedSpell, setSelectedSpell] = useState<Spell | null>(null)

  const allSpells = getSpellsByClass(classId)
  const filteredSpells = levelFilter === -1 ? allSpells : allSpells.filter((s) => s.level === levelFilter)

  if (allSpells.length === 0) {
    return <p className="text-text-secondary text-sm italic px-1">{it.no_spells}</p>
  }

  return (
    <div className="space-y-3">
      {/* Level filter buttons */}
      <div className="flex gap-1.5 flex-wrap">
        {LEVEL_FILTERS.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setLevelFilter(value)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
              levelFilter === value
                ? 'bg-accent-gold/25 text-accent-gold border-accent-gold/50 shadow-sm'
                : 'bg-bg-card/60 text-text-secondary border-border/50 hover:text-text-primary hover:bg-bg-card'
            }`}
          >
            {label()}
          </button>
        ))}
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
      {selectedSpell && <SpellDetailModal spell={selectedSpell} onClose={() => setSelectedSpell(null)} />}
    </div>
  )
}
