import { useState } from 'react'
import { useCharacterContext } from '../../context/CharacterContext'

export function NotesPanel() {
  const { state, dispatch } = useCharacterContext()
  const [notes, setNotes] = useState(state.character?.notes ?? '')

  const handleBlur = () => {
    dispatch({ type: 'UPDATE_NOTES', notes })
  }

  return (
    <div className="space-y-2">
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        onBlur={handleBlur}
        placeholder="Scrivi le tue note qui..."
        rows={10}
        className="w-full bg-bg-card border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/40 resize-y focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue/50 transition-all"
      />
    </div>
  )
}
