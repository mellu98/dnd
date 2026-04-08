import { useState } from 'react'
import { useCharacterContext } from '../../context/CharacterContext'
import { armors, shields, weapons, getArmorById, getShieldById } from '../../data/equipment'
import type { EquipmentItem } from '../../types/equipment'
import { it } from '../../i18n/it'

function generateId(): string {
  return `item-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}

export function EquipmentPanel() {
  const { state, dispatch } = useCharacterContext()
  const character = state.character
  const equipment = character?.equipment ?? []
  const equippedArmorId = character?.equippedArmorId ?? null
  const equippedShieldId = character?.equippedShieldId ?? null

  const [newItem, setNewItem] = useState('')
  const [showWeapons, setShowWeapons] = useState(false)
  const [showShields, setShowShields] = useState(false)

  const gearItems = equipment.filter((e) => e.category === 'gear')
  const weaponItems = equipment.filter((e) => e.category === 'weapon')
  const shieldItems = equipment.filter((e) => e.category === 'shield')

  // Track which weapons/shields are equipped
  const equippedWeaponIds = new Set(weaponItems.filter((e) => e.equipped).map((e) => e.id))
  // Shield is tracked via equippedShieldId on character (separate from equipment array)

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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') addItem()
  }

  const removeItem = (itemId: string) => {
    dispatch({ type: 'REMOVE_EQUIPMENT_ITEM', itemId })
  }

  const toggleWeapon = (itemId: string) => {
    dispatch({ type: 'TOGGLE_EQUIPMENT', itemId })
  }

  const addWeaponFromData = (weaponId: string) => {
    const data = weapons.find((w) => w.id === weaponId)
    if (!data) return
    // Don't add if already in inventory
    if (weaponItems.some((w) => w.id === weaponId)) return
    const item: EquipmentItem = {
      id: weaponId,
      name: data.name,
      nameIT: data.nameIT,
      category: 'weapon',
      quantity: 1,
      equipped: false,
      weight: data.weight,
      value: data.value,
    }
    dispatch({ type: 'ADD_EQUIPMENT_ITEM', item })
  }

  const addShieldFromData = (shieldId: string) => {
    const data = shields.find((s) => s.id === shieldId)
    if (!data) return
    // Don't add if already in inventory
    if (shieldItems.some((s) => s.id === shieldId)) return
    const item: EquipmentItem = {
      id: shieldId,
      name: data.name,
      nameIT: data.nameIT,
      category: 'shield',
      quantity: 1,
      equipped: false,
      weight: data.weight,
      value: data.value,
      shieldBonus: data.shieldBonus,
    }
    dispatch({ type: 'ADD_EQUIPMENT_ITEM', item })
  }

  const toggleShieldEquip = (shieldId: string) => {
    // Toggle: if already equipped, unequip; if not, equip
    const isEquipped = equippedShieldId === shieldId
    dispatch({ type: 'SET_EQUIPPED_SHIELD', shieldId: isEquipped ? null : shieldId })
  }

  const handleArmorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value
    dispatch({ type: 'SET_EQUIPPED_ARMOR', armorId: val === '' ? null : val })
  }

  const handleDeleteShieldItem = (itemId: string) => {
    // If this shield is currently equipped, unequip it first
    if (equippedShieldId === itemId) {
      dispatch({ type: 'SET_EQUIPPED_SHIELD', shieldId: null })
    }
    removeItem(itemId)
  }

  const equippedArmor = equippedArmorId ? getArmorById(equippedArmorId) : null
  const equippedShield = equippedShieldId ? getShieldById(equippedShieldId) : null

  // Group weapons by category for display
  const weaponCategories = [
    { label: 'Semplici da Mischia', ids: ['club', 'dagger', 'greatclub', 'handaxe', 'javelin', 'light-hammer', 'mace', 'quarterstaff', 'sickle', 'spear', 'unarmed-strike'] },
    { label: 'Semplici a Distanza', ids: ['light-crossbow', 'dart', 'shortbow', 'sling'] },
    { label: 'Martial da Mischia', ids: ['battleaxe', 'flail', 'glaive', 'greataxe', 'greatsword', 'halberd', 'lance', 'longsword', 'maul', 'morningstar', 'pike', 'rapier', 'scimitar', 'shortsword', 'trident', 'war-pick', 'warhammer', 'whip'] },
    { label: 'Martial a Distanza', ids: ['blowgun', 'hand-crossbow', 'heavy-crossbow', 'longbow', 'net'] },
  ]

  return (
    <div className="space-y-5">
      {/* ══ Armor Selector ══ */}
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

      {/* ══ Shield Section ══ */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-xs text-text-secondary uppercase tracking-wider font-semibold">
            Scudi
          </label>
          <button
            onClick={() => setShowShields(!showShields)}
            className="text-xs text-accent-blue hover:text-accent-blue/80 transition-colors"
          >
            {showShields ? 'Chiudi' : '+ Aggiungi'}
          </button>
        </div>

        {/* Shield toggle(s) for shields in inventory */}
        {shieldItems.length === 0 ? (
          <p className="text-text-secondary text-sm italic px-1">Nessuno scudo.</p>
        ) : (
          <div className="space-y-1">
            {shieldItems.map((shield) => {
              const isEquipped = equippedShieldId === shield.id
              const shieldData = getShieldById(shield.id)
              return (
                <div
                  key={shield.id}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 transition-colors ${
                    isEquipped
                      ? 'bg-accent-blue/10 border border-accent-blue/30'
                      : 'bg-bg-card border border-border'
                  }`}
                >
                  <button
                    onClick={() => toggleShieldEquip(shield.id)}
                    className="flex items-center gap-2 text-sm text-text-primary hover:text-accent-blue transition-colors"
                  >
                    <span className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                      isEquipped
                        ? 'bg-accent-blue border-accent-blue'
                        : 'border-border'
                    }`}>
                      {isEquipped && <span className="text-white text-xs">✓</span>}
                    </button>
                    <span>🛡 {shield.nameIT}</span>
                    {shieldData && (
                      <span className="text-accent-emerald font-semibold">+{shieldData.shieldBonus} CA</span>
                    )}
                  </button>
                  <button
                    onClick={() => handleDeleteShieldItem(shield.id)}
                    className="text-accent-red/60 hover:text-accent-red transition-colors text-lg leading-none px-1"
                    title="Rimuovi"
                  >
                    &times;
                  </button>
                </div>
              )
            })}
          </div>
        )}

        {/* Shield quick-add list */}
        {showShields && (
          <div className="bg-bg-secondary border border-border rounded-lg p-2 space-y-1">
            {shields.map((shield) => {
              const alreadyOwned = shieldItems.some((s) => s.id === shield.id)
              return (
                <button
                  key={shield.id}
                  onClick={() => !alreadyOwned && addShieldFromData(shield.id)}
                  disabled={alreadyOwned}
                  className={`w-full text-left text-sm px-2 py-1 rounded transition-colors ${
                    alreadyOwned
                      ? 'text-text-muted/50 cursor-default'
                      : 'text-text-primary hover:bg-bg-card'
                  }`}
                >
                  {shield.nameIT} (+{shield.shieldBonus} CA)
                  {alreadyOwned && ' (già posseduto)'}
                </button>
              )
            })}
          </div>
        )}

        {/* Equipped shield summary */}
        {equippedShield && (
          <div className="text-xs text-text-secondary px-1">
            <span className="text-accent-emerald font-semibold">CA attuale: {equippedShield.shieldBonus} dallo scudo</span>
          </div>
        )}
      </div>

      {/* ══ Weapons Section ══ */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-xs text-text-secondary uppercase tracking-wider font-semibold">
            Armi
          </label>
          <button
            onClick={() => setShowWeapons(!showWeapons)}
            className="text-xs text-accent-blue hover:text-accent-blue/80 transition-colors"
          >
            {showWeapons ? 'Chiudi' : '+ Aggiungi'}
          </button>
        </div>

        {/* Weapons in inventory */}
        {weaponItems.length === 0 ? (
          <p className="text-text-secondary text-sm italic px-1">Nessuna arma.</p>
        ) : (
          <div className="space-y-1">
            {weaponItems.map((weapon) => {
              const isEquipped = equippedWeaponIds.has(weapon.id)
              return (
                <div
                  key={weapon.id}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 transition-colors ${
                    isEquipped
                      ? 'bg-accent-blue/10 border border-accent-blue/30'
                      : 'bg-bg-card border border-border'
                  }`}
                >
                  <button
                    onClick={() => toggleWeapon(weapon.id)}
                    className="flex items-center gap-2 text-sm text-text-primary hover:text-accent-blue transition-colors"
                  >
                    <span className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                      isEquipped
                        ? 'bg-accent-blue border-accent-blue'
                        : 'border-border'
                    }`}>
                      {isEquipped && <span className="text-white text-xs">✓</span>}
                    </span>
                    <span>⚔ {weapon.nameIT}</span>
                  </button>
                  <button
                    onClick={() => removeItem(weapon.id)}
                    className="text-accent-red/60 hover:text-accent-red transition-colors text-lg leading-none px-1"
                    title="Rimuovi"
                  >
                    &times;
                  </button>
                </div>
              )
            })}
          </div>
        )}

        {/* Weapon quick-add list grouped by category */}
        {showWeapons && (
          <div className="bg-bg-secondary border border-border rounded-lg p-2 space-y-3 max-h-64 overflow-y-auto">
            {weaponCategories.map((cat) => {
              const categoryWeapons = cat.ids
                .map((id) => weapons.find((w) => w.id === id))
                .filter(Boolean)
              if (categoryWeapons.length === 0) return null
              return (
                <div key={cat.label}>
                  <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1 px-1">
                    {cat.label}
                  </div>
                  {categoryWeapons.map((w) => {
                    const alreadyOwned = weaponItems.some((wi) => wi.id === w!.id)
                    return (
                      <button
                        key={w!.id}
                        onClick={() => !alreadyOwned && addWeaponFromData(w!.id)}
                        disabled={alreadyOwned}
                        className={`w-full text-left text-sm px-2 py-1 rounded transition-colors ${
                          alreadyOwned
                            ? 'text-text-muted/50 cursor-default'
                            : 'text-text-primary hover:bg-bg-card'
                        }`}
                      >
                        {w!.nameIT} ({w!.damageDice} {w!.damageTypeIT})
                        {alreadyOwned && ' (già posseduta)'}
                      </button>
                    )
                  })}
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* ══ Generic Equipment (Gear) ══ */}
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
                  className="text-accent-red/60 hover:text-accent-red transition-colors text-lg leading-none px-1"
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
