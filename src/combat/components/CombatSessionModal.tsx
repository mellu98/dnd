import { useState } from 'react'
import { useCombatSession } from '../useCombatSession'
import { useCharacterContext } from '../../context/CharacterContext'
import { it } from '../../i18n/it'
import type { CharacterSummary } from '../types'

interface Props {
  onClose: () => void
}

export function CombatSessionModal({ onClose }: Props) {
  const { createSession, joinSession } = useCombatSession()
  const { dispatch } = useCharacterContext()
  const [mode, setMode] = useState<'create' | 'join'>('create')
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleCreate = async () => {
    setLoading(true)
    setError(null)
    try {
      await createSession()
      // Context update will switch App.tsx to CombatHub — modal auto-closes
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Errore nella creazione della sessione')
      setLoading(false)
    }
  }

  const handleJoin = async () => {
    const trimmed = code.trim().toUpperCase()
    if (trimmed.length !== 6) {
      setError('Il codice sessione deve essere di 6 caratteri')
      return
    }
    setLoading(true)
    setError(null)
    try {
      await joinSession(trimmed)
      // Context update will switch App.tsx to CombatHub
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Errore nel join della sessione')
      setLoading(false)
    }
  }

  const handleDemo = () => {
    const demoCode = 'DEMO-01'
    const hostId = crypto.randomUUID()

    const demoPlayers: Map<string, CharacterSummary> = new Map()
    const mockPlayers: CharacterSummary[] = [
      { playerId: 'p1', characterId: 'c1', name: 'Thorin Scudo di Ferro', classIT: 'Guerriero', speciesIT: 'Nano', level: 5, armorClass: 18, maxHp: 52, currentHp: 38, temporaryHp: 0, initiativeBonus: 2, speed: 25, deathSaves: { successes: 0, failures: 0 }, activeConditions: [], exhaustionLevel: 0, inspiration: true, hitDie: 'd10' },
      { playerId: 'p2', characterId: 'c2', name: 'Lyra Cantoluce', classIT: 'Bardo', speciesIT: 'Elfo', level: 5, armorClass: 15, maxHp: 38, currentHp: 38, temporaryHp: 5, initiativeBonus: 4, speed: 30, deathSaves: { successes: 0, failures: 0 }, activeConditions: ['invisible'], exhaustionLevel: 0, inspiration: false, hitDie: 'd8' },
      { playerId: 'p3', characterId: 'c3', name: 'Grim Voltodra', classIT: 'Stregone', speciesIT: 'Mezzorco', level: 5, armorClass: 12, maxHp: 30, currentHp: 12, temporaryHp: 0, initiativeBonus: 3, speed: 30, deathSaves: { successes: 1, failures: 0 }, activeConditions: ['poisoned'], exhaustionLevel: 1, inspiration: false, hitDie: 'd6' },
    ]
    for (const p of mockPlayers) demoPlayers.set(p.playerId, p)

    dispatch({
      type: 'SET_COMBAT_SESSION',
      session: {
        role: 'dm',
        sessionCode: demoCode,
        myPeerId: hostId,
        players: demoPlayers,
        initiative: mockPlayers.map((p) => ({
          id: `player-${p.playerId}`,
          name: p.name,
          playerId: p.playerId,
          initiative: Math.floor(Math.random() * 20) + p.initiativeBonus,
          notes: `${p.classIT} Lv.${p.level}`,
        })),
        activeInitiativeId: null,
        round: 1,
        myUpdates: null,
        diceRolls: [],
        status: 'active',
      },
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div
        className="bg-bg-card border border-border rounded-2xl p-6 max-w-md w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-bold text-text-primary mb-4">
          {it.combat_hub_title}
        </h3>

        {/* Tab switcher */}
        <div className="flex gap-2 mb-5">
          <button
            onClick={() => { setMode('create'); setError(null) }}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
              mode === 'create'
                ? 'bg-accent-gold/15 text-accent-gold border border-accent-gold/30'
                : 'bg-bg-secondary text-text-muted border border-border'
            }`}
          >
            {it.combat_create}
          </button>
          <button
            onClick={() => { setMode('join'); setError(null) }}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
              mode === 'join'
                ? 'bg-accent-gold/15 text-accent-gold border border-accent-gold/30'
                : 'bg-bg-secondary text-text-muted border border-border'
            }`}
          >
            {it.combat_join}
          </button>
        </div>

        {error && (
          <div className="mb-4 rounded-lg border border-accent-red/30 bg-accent-red/10 px-3 py-2 text-xs text-accent-red">
            {error}
          </div>
        )}

        {mode === 'create' ? (
          <div>
            <p className="text-sm text-text-secondary mb-4">
              {it.combat_create_desc}
            </p>
            <button
              onClick={handleCreate}
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-accent-gold to-yellow-500 text-bg-primary font-bold text-base hover:opacity-90 transition-all disabled:opacity-50"
            >
              {loading ? it.combat_connecting : it.combat_create_btn}
            </button>
          </div>
        ) : (
          <div>
            <p className="text-sm text-text-secondary mb-4">
              {it.combat_join_desc}
            </p>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''))}
              placeholder={it.combat_code_placeholder}
              maxLength={6}
              className="w-full bg-bg-primary border border-border rounded-lg px-4 py-3 text-center text-2xl font-mono tracking-[0.3em] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-gold/50 mb-4"
            />
            <button
              onClick={handleJoin}
              disabled={loading || code.length < 6}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white font-bold text-base hover:opacity-90 transition-all disabled:opacity-50"
            >
              {loading ? it.combat_connecting : it.combat_join_btn}
            </button>
          </div>
        )}

        <button
          onClick={onClose}
          disabled={loading}
          className="w-full mt-3 py-2 text-sm text-text-muted hover:text-text-secondary transition-colors disabled:opacity-40"
        >
          {it.cancel}
        </button>

        <button
          onClick={handleDemo}
          className="w-full mt-1 py-2 text-xs font-medium text-text-muted/60 hover:text-accent-gold/70 transition-colors"
        >
          Modalità Demo (dati di prova)
        </button>
      </div>
    </div>
  )
}
