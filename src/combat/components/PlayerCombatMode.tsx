import { useCharacter } from '../../hooks/useCharacter'
import { useCombatSession } from '../useCombatSession'
import { it } from '../../i18n/it'

const CONDITION_NAMES_IT: Record<string, string> = {
  blinded: 'Accecato',
  charmed: 'Affascinato',
  deafened: 'Assordato',
  frightened: 'Spaventato',
  grappled: 'Afferrato',
  incapacitated: 'Incapacitato',
  invisible: 'Invisibile',
  paralyzed: 'Paralizzato',
  petrified: 'Pietrificato',
  poisoned: 'Avvelenato',
  prone: 'Prono',
  restrained: 'Trattenuto',
  stunned: 'Stordito',
  unconscious: 'Incosciente',
}

export function PlayerCombatMode() {
  const { calculatedStats } = useCharacter()
  const { session } = useCombatSession()

  if (!session) return null

  const myUpdates = session.myUpdates
  const isActiveTurn =
    session.activeInitiativeId !== null &&
    session.initiative.some(
      (e) => e.id === session.activeInitiativeId && e.playerId === session.myPeerId,
    )

  // My position in initiative
  const myInitIdx = session.initiative.findIndex(
    (e) => e.playerId === session.myPeerId,
  )

  return (
    <div className="space-y-4">
      {/* Turn indicator */}
      {isActiveTurn && (
        <div className="rounded-xl border border-accent-gold/40 bg-accent-gold/10 px-4 py-3 text-center animate-pulse">
          <span className="text-sm font-bold text-accent-gold">{it.combat_your_turn}</span>
        </div>
      )}

      {/* Initiative order */}
      {session.initiative.length > 0 && (
        <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
          <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-2">
            {it.initiative_tracker}
          </h3>
          <div className="space-y-1">
            {session.initiative
              .sort((a, b) => b.initiative - a.initiative)
              .map((entry, idx) => {
                const isMe = entry.playerId === session.myPeerId
                const isActive = entry.id === session.activeInitiativeId
                return (
                  <div
                    key={entry.id}
                    className={`flex items-center justify-between rounded-lg px-3 py-1.5 text-sm ${
                      isMe
                        ? 'bg-accent-blue/10 text-accent-blue'
                        : isActive
                          ? 'bg-accent-gold/10 text-accent-gold font-semibold'
                          : 'text-text-secondary'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
                      )}
                      <span className="text-xs font-black text-text-muted">
                        #{idx + 1}
                      </span>
                      <span>
                        {entry.name}
                        {isMe && (
                          <span className="ml-1 text-[10px] text-accent-blue">(tu)</span>
                        )}
                      </span>
                    </div>
                    <span className="text-xs text-text-muted">{entry.initiative}</span>
                  </div>
                )
              })}
          </div>
          {myInitIdx >= 0 && (
            <p className="text-xs text-text-muted mt-2 text-center">
              {it.combat_your_position}: #{myInitIdx + 1} di {session.initiative.length}
            </p>
          )}
        </div>
      )}

      {/* HP display */}
      <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
        <h3 className="text-xs font-semibold text-accent-emerald uppercase tracking-wider mb-3">
          Punti Ferita
        </h3>
        <div className="text-center">
          <div className="text-3xl font-black text-text-primary">
            {myUpdates?.currentHp ?? calculatedStats?.hp.current ?? 0}
            <span className="text-lg text-text-muted">
              /{myUpdates?.currentHp !== undefined ? calculatedStats?.hp.max ?? 0 : calculatedStats?.hp.max ?? 0}
            </span>
          </div>
          {(myUpdates?.temporaryHp ?? 0) > 0 && (
            <div className="text-xs text-accent-blue mt-1">
              +{myUpdates?.temporaryHp} {it.hp_temp}
            </div>
          )}
        </div>
      </div>

      {/* Active Conditions */}
      {myUpdates?.activeConditions && myUpdates.activeConditions.length > 0 && (
        <div className="bg-bg-card/60 border border-accent-red/30 rounded-xl p-4">
          <h3 className="text-xs font-semibold text-accent-red uppercase tracking-wider mb-2">
            {it.conditions}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {myUpdates.activeConditions.map((c) => (
              <span
                key={c}
                className="text-xs px-2 py-1 rounded-full bg-accent-red/15 text-accent-red border border-accent-red/30"
              >
                {CONDITION_NAMES_IT[c] ?? c}
              </span>
            ))}
          </div>
          {(myUpdates.exhaustionLevel ?? 0) > 0 && (
            <div className="text-xs text-accent-gold mt-2">
              {it.exhaustion_label}: {myUpdates.exhaustionLevel}/6
            </div>
          )}
        </div>
      )}
    </div>
  )
}
