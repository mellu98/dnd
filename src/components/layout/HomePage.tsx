import { useRef, useState } from 'react'
import { useCharacterContext } from '../../context/CharacterContext'
import { it } from '../../i18n/it'
import { getRaceById } from '../../data/races'
import { getClassById } from '../../data/classes'
import { CharacterAvatar } from '../ui/CharacterAvatar'
import type { Character } from '../../types'
import { exportCharactersToJson, parseCharactersFromJson } from '../../utils/storage'
import { CombatSessionModal } from '../../combat/components/CombatSessionModal'

function downloadJson(filename: string, json: string) {
  const blob = new Blob([json], { type: 'application/json;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  anchor.click()
  URL.revokeObjectURL(url)
}

export function HomePage() {
  const { state, dispatch } = useCharacterContext()
  const characters = state.savedCharacters
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null)
  const [transferMessage, setTransferMessage] = useState<string | null>(null)
  const [transferError, setTransferError] = useState<string | null>(null)
  const [showCombatModal, setShowCombatModal] = useState(false)
  const importInputRef = useRef<HTMLInputElement | null>(null)

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

  const handleExportAll = () => {
    if (characters.length === 0) return

    const json = exportCharactersToJson(characters, state.character?.id ?? null)
    downloadJson(`dnd-personaggi-${new Date().toISOString().slice(0, 10)}.json`, json)
    setTransferError(null)
    setTransferMessage(`Esportati ${characters.length} personaggi in JSON.`)
  }

  const handleExportCharacter = (event: React.MouseEvent, character: Character) => {
    event.stopPropagation()
    const slug = character.name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'personaggio'
    const json = exportCharactersToJson([character], character.id)
    downloadJson(`${slug}.json`, json)
    setTransferError(null)
    setTransferMessage(`Esportato ${character.name} in JSON.`)
  }

  const handleOpenImport = () => {
    importInputRef.current?.click()
  }

  const handleImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    try {
      const raw = await file.text()
      const imported = parseCharactersFromJson(raw)
      dispatch({
        type: 'IMPORT_CHARACTERS',
        characters: imported.characters,
        activeCharacterId: imported.activeCharacterId,
      })
      setTransferError(null)
      setTransferMessage(`Importati ${imported.characters.length} personaggi da ${file.name}.`)
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Importazione JSON non riuscita.'
      setTransferMessage(null)
      setTransferError(message)
    } finally {
      event.target.value = ''
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
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h2 className="text-sm font-semibold text-text-secondary uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-gold rounded-full" />
              {it.my_characters}
              {characters.length > 0 && (
                <span className="ml-auto text-xs bg-bg-card px-2 py-0.5 rounded-full text-text-muted">
                  {characters.length}
                </span>
              )}
            </h2>

            <div className="ml-auto flex flex-wrap gap-2">
              <button
                onClick={() => setShowCombatModal(true)}
                className="px-3 py-2 rounded-xl border border-accent-red/30 bg-accent-red/10 text-accent-red text-sm font-medium hover:bg-accent-red/15 transition-all"
              >
                ⚔️ {it.combat_hub_title}
              </button>
              <input
                ref={importInputRef}
                type="file"
                accept=".json,application/json"
                className="hidden"
                onChange={handleImport}
              />
              <button
                onClick={handleOpenImport}
                className="px-3 py-2 rounded-xl border border-border bg-bg-card/60 text-text-primary text-sm font-medium hover:border-accent-blue/40 hover:text-accent-blue transition-all"
              >
                Importa JSON
              </button>
              <button
                onClick={handleExportAll}
                disabled={characters.length === 0}
                className="px-3 py-2 rounded-xl border border-accent-gold/30 bg-accent-gold/10 text-accent-gold text-sm font-medium hover:bg-accent-gold/15 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Esporta tutti
              </button>
            </div>
          </div>

          {transferMessage && (
            <div className="mb-3 rounded-xl border border-accent-emerald/30 bg-accent-emerald/10 px-4 py-3 text-sm text-accent-emerald">
              {transferMessage}
            </div>
          )}

          {transferError && (
            <div className="mb-3 rounded-xl border border-accent-red/30 bg-accent-red/10 px-4 py-3 text-sm text-accent-red">
              {transferError}
            </div>
          )}

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
                      <button
                        onClick={(e) => handleExportCharacter(e, char)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-text-secondary/50 hover:text-accent-gold hover:bg-accent-gold/10 transition-all"
                        title="Esporta JSON"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V4m0 12l-4-4m4 4l4-4M4 20h16" />
                        </svg>
                      </button>
                      <span className="text-xs font-bold text-accent-gold bg-accent-gold/15 px-2.5 py-1 rounded-full">
                        Lv. {char.level}
                      </span>
                      <button
                        onClick={(e) => handleDeleteRequest(e, char.id)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-text-secondary/40 hover:text-accent-red hover:bg-accent-red/10 transition-all"
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

      {/* Combat session modal */}
      {showCombatModal && (
        <CombatSessionModal
          onClose={() => setShowCombatModal(false)}
        />
      )}
    </div>
  )
}
