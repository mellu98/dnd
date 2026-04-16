import { useState, useMemo } from 'react'
import { useCombatSession } from '../useCombatSession'
import type { CharacterSummary, CombatInitiativeEntry } from '../types'
import { it } from '../../i18n/it'
import { EncounterBuilder } from '../../components/combat/EncounterBuilder'

const CONDITIONS = [
  { id: 'blinded', nameIT: 'Accecato' },
  { id: 'charmed', nameIT: 'Affascinato' },
  { id: 'deafened', nameIT: 'Assordato' },
  { id: 'frightened', nameIT: 'Spaventato' },
  { id: 'grappled', nameIT: 'Afferrato' },
  { id: 'incapacitated', nameIT: 'Incapacitato' },
  { id: 'invisible', nameIT: 'Invisibile' },
  { id: 'paralyzed', nameIT: 'Paralizzato' },
  { id: 'petrified', nameIT: 'Pietrificato' },
  { id: 'poisoned', nameIT: 'Avvelenato' },
  { id: 'prone', nameIT: 'Prono' },
  { id: 'restrained', nameIT: 'Trattenuto' },
  { id: 'stunned', nameIT: 'Stordito' },
  { id: 'unconscious', nameIT: 'Incosciente' },
]

export function DmDashboard() {
  const { session, sendHpUpdate, sendConditionsUpdate, sendInitiativeUpdate, advanceTurn } =
    useCombatSession()

  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null)

  const players = useMemo(() => Array.from(session?.players.values() ?? []), [session?.players])
  const initiative = session?.initiative ?? []
  const activeId = session?.activeInitiativeId ?? null

  const sortedInitiative = useMemo(
    () => [...initiative].sort((a, b) => b.initiative - a.initiative),
    [initiative],
  )

  // ─── HP control for a player ────────────────────────

  const adjustHp = (playerId: string, amount: number) => {
    const player = session?.players.get(playerId)
    if (!player) return
    const newHp = Math.max(0, player.currentHp + amount)
    sendHpUpdate(playerId, newHp, player.temporaryHp)
  }

  // ─── Conditions control ─────────────────────────────

  const toggleCondition = (playerId: string, conditionId: string) => {
    const player = session?.players.get(playerId)
    if (!player) return
    const conditions = [...player.activeConditions]
    const idx = conditions.indexOf(conditionId)
    if (idx >= 0) conditions.splice(idx, 1)
    else conditions.push(conditionId)
    sendConditionsUpdate(playerId, conditions, player.exhaustionLevel)
  }

  // ─── Initiative ─────────────────────────────────────

  const populateInitiative = () => {
    const entries: CombatInitiativeEntry[] = players.map((p) => ({
      id: `player-${p.playerId}`,
      name: p.name,
      playerId: p.playerId,
      initiative: p.initiativeBonus,
      notes: `${p.classIT} Lv.${p.level}`,
    }))
    sendInitiativeUpdate(entries, null, 1)
  }

  const handleAddEncounter = (entries: CombatInitiativeEntry[]) => {
    const next = [...initiative, ...entries]
    sendInitiativeUpdate(next, activeId, session?.round ?? 1)
  }

  if (!session) return null

  const selectedPlayerData = selectedPlayer ? session.players.get(selectedPlayer) : null

  return (
    <div className="space-y-4">
      {/* Initiative Section */}
      <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider">
            {it.initiative_tracker}
          </h3>
          <button
            onClick={populateInitiative}
            className="text-[11px] px-2.5 py-1 rounded bg-accent-gold/15 text-accent-gold border border-accent-gold/30 hover:bg-accent-gold/25 transition-all"
          >
            {it.combat_populate_initiative}
          </button>
        </div>

        {/* Encounter Builder */}
        <EncounterBuilder onAddMonsters={handleAddEncounter} />

        {/* Initiative list */}
        {sortedInitiative.length === 0 ? (
          <p className="text-sm text-text-muted italic">{it.combat_no_initiative}</p>
        ) : (
          <div className="space-y-1.5">
            {sortedInitiative.map((entry, idx) => {
              const isActive = entry.id === activeId
              return (
                <div
                  key={entry.id}
                  className={`rounded-lg border px-3 py-2 flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-accent-gold/10 border-accent-gold/40'
                      : 'bg-bg-card/50 border-border/50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
                    )}
                    <span className="text-xs font-black text-accent-gold">#{idx + 1}</span>
                    <span className="text-sm font-semibold text-text-primary">{entry.name}</span>
                    <span className="text-xs text-text-muted">{entry.initiative}</span>
                    {entry.notes && (
                      <span className="text-xs text-text-muted italic">{entry.notes}</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {sortedInitiative.length > 0 && (
          <button
            onClick={advanceTurn}
            className="mt-3 w-full py-2 rounded-lg bg-accent-purple/10 text-accent-purple border border-accent-purple/30 text-sm font-semibold hover:bg-accent-purple/20 transition-all"
          >
            {it.initiative_next_turn}
          </button>
        )}
      </div>

      {/* Players Section */}
      <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
        <h3 className="text-xs font-semibold text-accent-emerald uppercase tracking-wider mb-3">
          {it.combat_connected} ({players.length})
        </h3>

        {players.length === 0 ? (
          <p className="text-sm text-text-muted italic">{it.combat_no_players}</p>
        ) : (
          <div className="space-y-2">
            {players.map((player) => (
              <PlayerCard
                key={player.playerId}
                player={player}
                isSelected={selectedPlayer === player.playerId}
                onSelect={() =>
                  setSelectedPlayer(
                    selectedPlayer === player.playerId ? null : player.playerId,
                  )
                }
                onAdjustHp={adjustHp}
              />
            ))}
          </div>
        )}
      </div>

      {/* Selected Player Detail Panel */}
      {selectedPlayerData && (
        <PlayerDetailPanel
          player={selectedPlayerData}
          onClose={() => setSelectedPlayer(null)}
          onToggleCondition={toggleCondition}
          onAdjustHp={adjustHp}
        />
      )}
    </div>
  )
}

/* ─── Player Card (compact) ───────────────────────────────── */

function PlayerCard({
  player,
  isSelected,
  onSelect,
  onAdjustHp,
}: {
  player: CharacterSummary
  isSelected: boolean
  onSelect: () => void
  onAdjustHp: (playerId: string, amount: number) => void
}) {
  const hpPercent = Math.max(0, Math.min(100, (player.currentHp / player.maxHp) * 100))
  const hpColor =
    hpPercent > 60 ? 'bg-accent-emerald' : hpPercent > 30 ? 'bg-accent-gold' : 'bg-accent-red'

  return (
    <div>
      <button
        onClick={onSelect}
        className={`w-full rounded-lg border px-3 py-2.5 text-left transition-all ${
          isSelected
            ? 'bg-accent-gold/10 border-accent-gold/40'
            : 'bg-bg-card/50 border-border/50 hover:border-border'
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm font-semibold text-text-primary">{player.name}</span>
            <span className="text-xs text-text-muted ml-2">
              {player.speciesIT} {player.classIT} Lv.{player.level}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-text-muted">CA {player.armorClass}</span>
            <span className="text-sm font-bold text-text-primary">
              {player.currentHp}/{player.maxHp}
            </span>
          </div>
        </div>
        {/* HP bar */}
        <div className="mt-1.5 h-1.5 rounded-full bg-bg-primary overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${hpColor}`}
            style={{ width: `${hpPercent}%` }}
          />
        </div>
        {/* Active conditions */}
        {player.activeConditions.length > 0 && (
          <div className="flex gap-1 mt-1.5 flex-wrap">
            {player.activeConditions.map((c) => {
              const cond = CONDITIONS.find((x) => x.id === c)
              return (
                <span
                  key={c}
                  className="text-[10px] px-1.5 py-0.5 rounded-full bg-accent-red/15 text-accent-red border border-accent-red/30"
                >
                  {cond?.nameIT ?? c}
                </span>
              )
            })}
          </div>
        )}
      </button>

      {/* Quick HP buttons when selected */}
      {isSelected && (
        <div className="flex items-center gap-1.5 mt-1.5 ml-2">
          {[-10, -5, -1, 1, 5, 10].map((amt) => (
            <button
              key={amt}
              onClick={() => onAdjustHp(player.playerId, amt)}
              className={`text-[11px] px-2 py-0.5 rounded font-bold transition-all ${
                amt < 0
                  ? 'bg-accent-red/15 text-accent-red hover:bg-accent-red/25'
                  : 'bg-accent-emerald/15 text-accent-emerald hover:bg-accent-emerald/25'
              }`}
            >
              {amt > 0 ? '+' : ''}{amt}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/* ─── Player Detail Panel (conditions + death saves) ──────── */

function PlayerDetailPanel({
  player,
  onClose,
  onToggleCondition,
}: {
  player: CharacterSummary
  onClose: () => void
  onToggleCondition: (playerId: string, conditionId: string) => void
  onAdjustHp?: (playerId: string, amount: number) => void
}) {
  return (
    <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider">
          {player.name}
        </h3>
        <button
          onClick={onClose}
          className="text-xs text-text-muted hover:text-text-secondary transition-colors"
        >
          {it.cancel}
        </button>
      </div>

      {/* Conditions */}
      <div className="grid grid-cols-3 gap-1.5 mb-3">
        {CONDITIONS.map((cond) => {
          const isActive = player.activeConditions.includes(cond.id)
          return (
            <button
              key={cond.id}
              onClick={() => onToggleCondition(player.playerId, cond.id)}
              className={`px-2 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                isActive
                  ? 'bg-accent-red/15 border-accent-red/50 text-accent-red'
                  : 'bg-bg-secondary border-border/40 text-text-secondary hover:border-border hover:text-text-primary'
              }`}
            >
              {cond.nameIT}
            </button>
          )
        })}
      </div>

      {/* Death Saves */}
      <div className="flex items-center gap-3 text-xs text-text-muted">
        <span>Morte:</span>
        <div className="flex gap-0.5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={`s-${i}`}
              className={`w-3 h-3 rounded-full border ${
                i < player.deathSaves.successes
                  ? 'bg-accent-emerald border-accent-emerald'
                  : 'border-border/50'
              }`}
            />
          ))}
        </div>
        <span>/</span>
        <div className="flex gap-0.5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={`f-${i}`}
              className={`w-3 h-3 rounded-full border ${
                i < player.deathSaves.failures
                  ? 'bg-accent-red border-accent-red'
                  : 'border-border/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
