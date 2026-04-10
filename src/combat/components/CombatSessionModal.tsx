import { useState } from 'react'
import { useCombatSession } from '../useCombatSession'
import { it } from '../../i18n/it'

interface Props {
  onClose: () => void
}

export function CombatSessionModal({ onClose }: Props) {
  const { createSession, joinSession } = useCombatSession()
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
      </div>
    </div>
  )
}
