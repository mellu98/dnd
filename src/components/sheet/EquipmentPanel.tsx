import { useState } from 'react'
import { useCharacterContext } from '../../context/CharacterContext'

export function EquipmentPanel() {
  const { state, dispatch } = useCharacterContext()
  const equipment = state.character?.equipment ?? []
  const [newItem, setNewItem] = useState('')

  const addItem = () => {
    const trimmed = newItem.trim()
    if (!trimmed) return
    dispatch({ type: 'UPDATE_EQUIPMENT', equipment: [...equipment, trimmed] })
    setNewItem('')
  }

  const removeItem = (index: number) => {
    const updated = equipment.filter((_, i) => i !== index)
    dispatch({ type: 'UPDATE_EQUIPMENT', equipment: updated })
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') addItem()
  }

  return (
    <div className="space-y-3">
      {/* Add item */}
      <div className="flex gap-2">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Aggiungi oggetto..."
          className="flex-1 bg-bg-card border border-border rounded-lg px-3 py-2 text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
        />
        <button
          onClick={addItem}
          className="px-3 py-2 bg-accent-blue/20 text-accent-blue border border-accent-blue/30 rounded-lg text-sm font-medium hover:bg-accent-blue/30 transition-colors"
        >
          +
        </button>
      </div>

      {/* Item list */}
      {equipment.length === 0 ? (
        <p className="text-text-secondary text-sm italic px-1">
          Nessun equipaggiamento.
        </p>
      ) : (
        <ul className="space-y-1">
          {equipment.map((item, i) => (
            <li
              key={`${item.replaceAll(/\s+/g, '-')}-${i}`}
              className="flex items-center justify-between bg-bg-card border border-border rounded-lg px-3 py-2 group hover:bg-bg-card-hover transition-colors"
            >
              <span className="text-sm text-text-primary">{item}</span>
              <button
                onClick={() => removeItem(i)}
                className="text-accent-red/60 hover:text-accent-red opacity-0 group-hover:opacity-100 transition-all text-lg leading-none"
                title="Rimuovi"
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
