import { useState } from 'react'
import { useCharacterContext } from '../../context/CharacterContext'
import { armors } from '../../data/equipment'
import { getArmorById } from '../../data/equipment'
import type { EquipmentItem } from '../../types/equipment'
import { it } from '../../i18n/it'

function generateId(): string {
  return `gear-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}

export function EquipmentPanel() {
  const { state, dispatch } = useCharacterContext()
  const character = state.character
  const equipment = character?.equipment ?? []
  const equippedArmorId = character?.equippedArmorId ?? null
  const equippedShieldId = character?.equippedShieldId ?? null

  const [newItem, setNewItem] = useState('')

  const gearItems = equipment.filter((e) => e.category === 'gear')

  // Compute AC breakdown for display
  const equippedArmor = equippedArmorId ? getArmorById(equippedArmorId) : null

  const addItem = () => {
    const trimmed = newItem.trim()
    if (!trimmed) return
    const item: EquipmentItem = {
      id: generateId(),
      name: trimmed,
      nameIT: trimmed,
      category: 'gear',
      quantity: 1,
      equipped: false,
    }
    dispatch({ type: 'ADD_EQUIPMENT_ITEM', item })
    setNewItem('')
  }

  const removeItem = (itemId: string) => {
    dispatch({ type: 'REMOVE_EQUIPMENT_ITEM', itemId })
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') addItem()
  }

  const handleArmorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value
    dispatch({ type: 'SET_EQUIPPED_ARMOR', armorId: val === '' ? null : val })
  }

  const handleShieldToggle = () => {
    dispatch({ type: 'SET_EQUIPPED_SHIELD', equipped: !equippedShieldId })
  }

  return (
    <div className="space-y-5">
      {/* ── Armor Selector ─────────────────────────────── */}
      <div className="space-y-2">
        <label className="block text-xs text-text-secondary uppercase tracking-wider font-semibold">
          {it.armor_class}
        </label>
        <select
          value={equippedArmorId ?? ''}
          onChange={handleArmorChange}
          className="w-full bg-bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
        >
          <option value="">{it.armor_none}</option>
          {armors.map((armor) => (
            <option key={armor.id} value={armor.id}>
              {armor.nameIT} (CA {armor.ac}
              {armor.dexModifier !== undefined && armor.dexModifier !== Infinity
                ? ` + DES max ${armor.dexModifier}`
                : armor.dexModifier === Infinity
                  ? ' + DES'
                  : ''}
              )
            </option>
          ))}
        </select>

        {/* Armor details */}
        {equippedArmor && (
          <div className="text-xs text-text-secondary flex flex-wrap gap-2 px-1">
            {equippedArmor.stealthDisadvantage && (
              <span className="text-accent-red/80">⚠ {it.stealth_disadvantage}</span>
            )}
            {equippedArmor.strength !== undefined && (
              <span className="text-accent-gold/80">
                💪 {it.strength_requirement}: {equippedArmor.strength}
              </span>
            )}
            <span className="text-text-muted">
              {it.weight}: {equippedArmor.weight} kg · {it.value_label}: {equippedArmor.value} mo
            </span>
          </div>
        )}
      </div>

      {/* ── Shield Toggle ──────────────────────────────── */}
      <div>
        <label className="flex items-center gap-3 cursor-pointer group w-fit">
          <input
            type="checkbox"
            checked={!!equippedShieldId}
            onChange={handleShieldToggle}
            className="w-4 h-4 rounded accent-accent-blue cursor-pointer"
          />
          <span className="text-sm text-text-primary group-hover:text-accent-blue transition-colors">
            🛡 {it.shield_label} <span className="text-accent-emerald font-semibold">{it.shield_bonus}</span>
          </span>
        </label>
      </div>

      {/* ── Generic Equipment ──────────────────────────── */}
      <div className="space-y-2">
        <label className="block text-xs text-text-secondary uppercase tracking-wider font-semibold">
          {it.tab_equipment}
        </label>

        {/* Add item input */}
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

        {/* Gear list */}
        {gearItems.length === 0 ? (
          <p className="text-text-secondary text-sm italic px-1">Nessun equipaggiamento.</p>
        ) : (
          <ul className="space-y-1">
            {gearItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-bg-card border border-border rounded-lg px-3 py-2 group hover:bg-bg-card-hover transition-colors"
              >
                <span className="text-sm text-text-primary">{item.nameIT}</span>
                <button
                  onClick={() => removeItem(item.id)}
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
    </div>
  )
}
