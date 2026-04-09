import { useState } from 'react'
import { useCharacterContext } from '../../context/CharacterContext'
import { it } from '../../i18n/it'
import { getRaceById } from '../../data/races'
import { getClassById } from '../../data/classes'
import { CharacterAvatar } from '../ui/CharacterAvatar'
import type { Character } from '../../types'

export function HomePage() {
  const { state, dispatch } = useCharacterContext()
  const characters = state.savedCharacters
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null)

  const handleLoad = (character: Character) => {
    dispatch({ type: 'LOAD_CHARACTER', character })
  }

  const handleDeleteRequest = (e: React.MouseEvent, id: string) => {
    e.stopPropagation()
    setConfirmDeleteId(id)
  }

  const handleDeleteConfirm = () => {
    if (confirmDeleteId) {
      dispatch({ type: 'DELETE_CHARACTER', id: confirmDeleteId })
      setConfirmDeleteId(null)
    }
  }

  return (
    <div className="min-h-screen bg-bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-12">
        {/* Hero Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-block mb-4">
            <div className="text-5xl sm:text-6xl font-black text-transparent bg-gradient-to-r from-accent-gold via-yellow-300 to-accent-gold bg-clip-text tracking-tight">
              D&D 5e
            </div>
            <div className="h-1 w-24 mx-auto mt-2 bg-gradient-to-r from-transparent via-accent-gold to-transparent rounded-full" />
          </div>
          <p className="text-text-secondary text-lg font-medium">Gestore di Personaggi</p>
          <p className="text-text-muted text-sm mt-1">Crea, gestisci e consulta le tue schede personaggio</p>
        </div>

        {/* My Characters */}
        <div className="mb-8 animate-fade-in">
          <h2 className="text-sm font-semibold text-text-secondary uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-accent-gold rounded-full" />
            {it.my_characters}
            {characters.length > 0 && (
              <span className="ml-auto text-xs bg-bg-card px-2 py-0.5 rounded-full text-text-muted">
                {characters.length}
              </span>
            )}
          </h2>

          {characters.length === 0 ? (
            <div className="bg-bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-10 text-center">
              <div className="text-5xl mb-4 opacity-20">⚔️</div>
              <p className="text-text-secondary font-medium">
                {it.no_characters}
              </p>
              <p className="text-text-muted text-sm mt-1">
                Crea il tuo primo personaggio per iniziare!
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {characters.map((char) => {
                const race = getRaceById(char.raceId)
                const cls = getClassById(char.classId)
                return (
                  <div
                    key={char.id}
                    onClick={() => handleLoad(char)}
                    className="w-full flex items-center justify-between bg-bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl px-5 py-4 hover:bg-bg-card hover:border-accent-gold/40 hover:shadow-lg hover:shadow-accent-gold/5 transition-all duration-200 group cursor-pointer text-left animate-slide-in"
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleLoad(char) }}
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <CharacterAvatar imageUrl={char.imageUrl} name={char.name} size="md" />
                      <div className="min-w-0">
                        <div className="font-semibold text-text-primary group-hover:text-accent-gold transition-colors truncate">
                          {char.name}
                        </div>
                        <div className="text-sm text-text-secondary mt-0.5">
                          {race?.nameIT ?? char.raceId} &middot; {cls?.nameIT ?? char.classId}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 ml-4">
                      <span className="text-xs font-bold text-accent-gold bg-accent-gold/15 px-2.5 py-1 rounded-full">
                        Lv. {char.level}
                      </span>
                      <button
                        onClick={(e) => handleDeleteRequest(e, char.id)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-text-secondary/40 hover:text-accent-red hover:bg-accent-red/10 opacity-0 group-hover:opacity-100 transition-all"
                        title={it.delete_character}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* New Character Button */}
        <button
          onClick={() => dispatch({ type: 'NEW_CHARACTER' })}
          className="w-full py-4 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold rounded-xl shadow-lg shadow-accent-blue/20 hover:shadow-accent-blue/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 text-lg tracking-wide"
        >
          + {it.new_character}
        </button>
      </div>

      {/* Delete confirmation modal */}
      {confirmDeleteId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setConfirmDeleteId(null)}
        >
          <div
            className="bg-bg-card border border-border rounded-2xl p-6 max-w-sm w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-5">
              <div className="w-12 h-12 rounded-full bg-accent-red/15 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-text-primary font-semibold text-lg">Eliminare il personaggio?</h3>
              <p className="text-text-muted text-sm mt-1">Questa azione è irreversibile.</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmDeleteId(null)}
                className="flex-1 py-2.5 rounded-xl border border-border text-text-secondary hover:text-text-primary hover:border-border/80 transition-all font-medium"
              >
                Annulla
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="flex-1 py-2.5 rounded-xl bg-accent-red/90 hover:bg-accent-red text-white font-semibold transition-all"
              >
                Elimina
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
