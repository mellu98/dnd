import { DmDashboard } from './components/DmDashboard'
import { PlayerCombatMode } from './components/PlayerCombatMode'
import { useCombatSession } from './useCombatSession'
import { it } from '../i18n/it'

export function CombatHub() {
  const { session, leaveSession } = useCombatSession()

  if (!session || session.status === 'ended') return null

  return (
    <div className="min-h-screen bg-bg-primary relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚔️</span>
            <div>
              <h1 className="text-lg font-bold text-text-primary">
                {it.combat_hub_title}
              </h1>
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <span className="font-mono text-accent-gold">{session.sessionCode}</span>
                <span>·</span>
                <span>{session.role === 'dm' ? it.combat_dm : it.combat_player}</span>
                {session.role === 'dm' && (
                  <>
                    <span>·</span>
                    <span>Round {session.round}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={leaveSession}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-accent-red/15 text-accent-red border border-accent-red/30 hover:bg-accent-red/25 transition-all"
          >
            {it.combat_leave}
          </button>
        </div>

        {/* Status bar for connecting */}
        {session.status === 'connecting' && (
          <div className="mb-4 rounded-lg border border-accent-gold/30 bg-accent-gold/10 px-4 py-2 text-sm text-accent-gold animate-pulse">
            {it.combat_connecting}
          </div>
        )}

        {/* Main content */}
        {session.role === 'dm' ? (
          <DmDashboard />
        ) : (
          <PlayerCombatMode />
        )}
      </div>
    </div>
  )
}
