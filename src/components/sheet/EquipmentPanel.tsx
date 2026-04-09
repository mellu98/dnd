import { useState } from 'react'
import { useCharacterContext } from '../../context/CharacterContext'
import { armors, shields, weapons, getArmorById, getShieldById, getWeaponById } from '../../data/equipment'
import type { CalculatedStats } from '../../types'
import type { EquipmentItem } from '../../types/equipment'
import { it } from '../../i18n/it'
import { getWeaponCombatSummary } from '../../utils/weapon-combat'
import { isArmorProficient, isShieldProficient } from '../../utils/equipment-proficiency'

interface EquipmentPanelProps {
  stats: CalculatedStats
}

const WEAPON_CATEGORIES = [
  { label: 'Semplici da Mischia', ids: ['club', 'dagger', 'greatclub', 'handaxe', 'javelin', 'light-hammer', 'mace', 'quarterstaff', 'sickle', 'spear', 'unarmed-strike'] },
  { label: 'Semplici a Distanza', ids: ['light-crossbow', 'dart', 'shortbow', 'sling'] },
  { label: 'Marziali da Mischia', ids: ['battleaxe', 'flail', 'glaive', 'greataxe', 'greatsword', 'halberd', 'lance', 'longsword', 'maul', 'morningstar', 'pike', 'rapier', 'scimitar', 'shortsword', 'trident', 'war-pick', 'warhammer', 'whip'] },
  { label: 'Marziali a Distanza', ids: ['blowgun', 'hand-crossbow', 'heavy-crossbow', 'longbow', 'net'] },
]

const COIN_FIELDS = [
  { key: 'pp', label: 'PP' },
  { key: 'gp', label: 'MO' },
  { key: 'ep', label: 'ME' },
  { key: 'sp', label: 'MA' },
  { key: 'cp', label: 'MR' },
] as const

function generateId(): string {
  return `item-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}

function usesAmmunition(weaponId: string): boolean {
  const weapon = getWeaponById(weaponId)
  return weapon?.properties.includes('ammunition') === true
}

function CurrencyField({
  label,
  value,
  onChange,
}: {
  label: string
  value: number
  onChange: (value: number) => void
}) {
  return (
    <label className="bg-bg-card border border-border rounded-lg px-3 py-2">
      <span className="text-[10px] text-text-muted uppercase tracking-wider block mb-1">{label}</span>
      <input
        type="number"
        min="0"
        value={value}
        onChange={(event) => onChange(Number(event.target.value) || 0)}
        className="w-full bg-transparent text-sm font-semibold text-text-primary focus:outline-none"
      />
    </label>
  )
}

export function EquipmentPanel({ stats }: EquipmentPanelProps) {
  const { state, dispatch } = useCharacterContext()
  const character = state.character
  const equipment = character?.equipment ?? []
  const equippedArmorId = character?.equippedArmorId ?? null
  const equippedShieldId = character?.equippedShieldId ?? null

  const [newItem, setNewItem] = useState('')
  const [showWeapons, setShowWeapons] = useState(false)
  const [showShields, setShowShields] = useState(false)

  const gearItems = equipment.filter((item) => item.category === 'gear')
  const weaponItems = equipment.filter((item) => item.category === 'weapon')
  const shieldItems = equipment.filter((item) => item.category === 'shield')
  const equippedWeaponIds = new Set(weaponItems.filter((item) => item.equipped).map((item) => item.id))

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

  const addWeaponFromData = (weaponId: string) => {
    const data = getWeaponById(weaponId)
    if (!data || weaponItems.some((weapon) => weapon.id === weaponId)) return

    const item: EquipmentItem = {
      id: weaponId,
      name: data.name,
      nameIT: data.nameIT,
      category: 'weapon',
      quantity: 1,
      equipped: false,
      weight: data.weight,
      value: data.value,
      ammoCount: data.properties.includes('ammunition') ? 0 : undefined,
    }

    dispatch({ type: 'ADD_EQUIPMENT_ITEM', item })
  }

  const addShieldFromData = (shieldId: string) => {
    const data = shields.find((shield) => shield.id === shieldId)
    if (!data || shieldItems.some((shield) => shield.id === shieldId)) return

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

  const getWeaponSummary = (weaponId: string) => {
    if (!character) return null
    const weapon = getWeaponById(weaponId)
    if (!weapon) return null

    return getWeaponCombatSummary({
      weapon,
      classId: character.classId,
      abilityModifiers: stats.abilityModifiers,
      proficiencyBonus: stats.proficiencyBonus,
      proficiencies: stats.allProficiencies,
    })
  }

  const handleArmorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    dispatch({ type: 'SET_EQUIPPED_ARMOR', armorId: value === '' ? null : value })
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') addItem()
  }

  const equippedArmor = equippedArmorId ? getArmorById(equippedArmorId) : null
  const equippedShield = equippedShieldId ? getShieldById(equippedShieldId) : null
  const armorProficient = equippedArmor ? isArmorProficient(equippedArmor, stats.allProficiencies) : true
  const shieldProficient = equippedShield ? isShieldProficient(stats.allProficiencies) : true

  return (
    <div className="space-y-5">
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
            <span className={armorProficient ? 'text-accent-emerald' : 'text-accent-red/80'}>
              {armorProficient ? 'Competente con l’armatura' : 'Non competente con l’armatura'}
            </span>
            {equippedArmor.stealthDisadvantage && (
              <span className="text-accent-red/80">{it.stealth_disadvantage}</span>
            )}
            {equippedArmor.strength !== undefined && (
              <span className="text-accent-gold/80">
                {it.strength_requirement}: {equippedArmor.strength}
              </span>
            )}
            <span className="text-text-muted">
              {it.weight}: {equippedArmor.weight} kg - {it.value_label}: {equippedArmor.value} mo
            </span>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-xs text-text-secondary uppercase tracking-wider font-semibold">Scudi</label>
          <button
            onClick={() => setShowShields((value) => !value)}
            className="text-xs text-accent-blue hover:text-accent-blue/80 transition-colors"
          >
            {showShields ? 'Chiudi' : '+ Aggiungi'}
          </button>
        </div>

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
                    onClick={() =>
                      dispatch({ type: 'SET_EQUIPPED_SHIELD', shieldId: isEquipped ? null : shield.id })
                    }
                    className="flex items-center gap-2 text-sm text-text-primary hover:text-accent-blue transition-colors"
                  >
                    <span className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                      isEquipped
                        ? 'bg-accent-blue border-accent-blue'
                        : 'border-border'
                    }`}>
                      {isEquipped && <span className="text-white text-xs">{'\u2713'}</span>}
                    </span>
                    <span>{shield.nameIT}</span>
                    {shieldData && (
                      <span className="text-accent-emerald font-semibold">+{shieldData.shieldBonus} CA</span>
                    )}
                  </button>
                  <button
                    onClick={() => {
                      if (equippedShieldId === shield.id) {
                        dispatch({ type: 'SET_EQUIPPED_SHIELD', shieldId: null })
                      }
                      removeItem(shield.id)
                    }}
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

        {showShields && (
          <div className="bg-bg-secondary border border-border rounded-lg p-2 space-y-1">
            {shields.map((shield) => {
              const alreadyOwned = shieldItems.some((item) => item.id === shield.id)
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

        {equippedShield && (
          <div className="text-xs text-text-secondary px-1 flex flex-wrap gap-2">
            <span className="text-accent-emerald font-semibold">
              CA attuale: {equippedShield.shieldBonus} dallo scudo
            </span>
            <span className={shieldProficient ? 'text-accent-emerald' : 'text-accent-red/80'}>
              {shieldProficient ? 'Competente con lo scudo' : 'Non competente con lo scudo'}
            </span>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-xs text-text-secondary uppercase tracking-wider font-semibold">Armi</label>
          <button
            onClick={() => setShowWeapons((value) => !value)}
            className="text-xs text-accent-blue hover:text-accent-blue/80 transition-colors"
          >
            {showWeapons ? 'Chiudi' : '+ Aggiungi'}
          </button>
        </div>

        {weaponItems.length === 0 ? (
          <p className="text-text-secondary text-sm italic px-1">Nessuna arma.</p>
        ) : (
          <div className="space-y-2">
            {weaponItems.map((weapon) => {
              const isEquipped = equippedWeaponIds.has(weapon.id)
              const weaponData = getWeaponById(weapon.id)
              const summary = getWeaponSummary(weapon.id)

              return (
                <div
                  key={weapon.id}
                  className={`rounded-lg px-3 py-2 transition-colors ${
                    isEquipped
                      ? 'bg-accent-blue/10 border border-accent-blue/30'
                      : 'bg-bg-card border border-border'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <button
                      onClick={() => dispatch({ type: 'TOGGLE_EQUIPMENT', itemId: weapon.id })}
                      className="flex items-start gap-2 text-sm text-text-primary hover:text-accent-blue transition-colors text-left flex-1"
                    >
                      <span className={`mt-0.5 w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                        isEquipped
                          ? 'bg-accent-blue border-accent-blue'
                          : 'border-border'
                      }`}>
                        {isEquipped && <span className="text-white text-xs">{'\u2713'}</span>}
                      </span>

                      <div className="space-y-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span>{weapon.nameIT}</span>
                          {summary && (
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full border font-semibold ${
                              summary.isProficient
                                ? 'bg-accent-emerald/15 text-accent-emerald border-accent-emerald/30'
                                : 'bg-bg-secondary text-text-muted border-border'
                            }`}>
                              {summary.isProficient ? 'Competente' : 'Non competente'}
                            </span>
                          )}
                        </div>

                        {summary && (
                          <div className="flex flex-wrap gap-2 text-xs text-text-secondary">
                            <span>
                              <strong className="text-accent-gold">Colpire:</strong>{' '}
                              {summary.attackBonus >= 0 ? '+' : ''}
                              {summary.attackBonus}
                            </span>
                            <span>
                              <strong className="text-accent-gold">Danno:</strong> {summary.damage}
                              {summary.alternateDamage ? ` / ${summary.alternateDamage}` : ''}
                            </span>
                          </div>
                        )}

                        {weaponData && weaponData.propertiesIT.length > 0 && (
                          <p className="text-[11px] text-text-muted leading-relaxed">
                            {weaponData.propertiesIT.join(', ')}
                          </p>
                        )}
                      </div>
                    </button>

                    <button
                      onClick={() => removeItem(weapon.id)}
                      className="text-accent-red/60 hover:text-accent-red transition-colors text-lg leading-none px-1"
                      title="Rimuovi"
                    >
                      &times;
                    </button>
                  </div>

                  {usesAmmunition(weapon.id) && (
                    <div className="mt-2 flex items-center justify-between gap-3 text-xs text-text-secondary border-t border-border/40 pt-2">
                      <span>
                        <strong className="text-accent-gold">Munizioni:</strong> {weapon.ammoCount ?? 0}
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() =>
                            dispatch({
                              type: 'UPDATE_ITEM_AMMO',
                              itemId: weapon.id,
                              amount: Math.max(0, (weapon.ammoCount ?? 0) - 1),
                            })}
                          className="w-6 h-6 rounded border border-border bg-bg-secondary hover:bg-bg-primary text-text-primary transition-colors"
                          title="Consuma munizione"
                        >
                          -
                        </button>
                        <button
                          onClick={() =>
                            dispatch({
                              type: 'UPDATE_ITEM_AMMO',
                              itemId: weapon.id,
                              amount: (weapon.ammoCount ?? 0) + 1,
                            })}
                          className="w-6 h-6 rounded border border-border bg-bg-secondary hover:bg-bg-primary text-text-primary transition-colors"
                          title="Aggiungi munizione"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {showWeapons && (
          <div className="bg-bg-secondary border border-border rounded-lg p-2 space-y-3 max-h-64 overflow-y-auto">
            {WEAPON_CATEGORIES.map((category) => {
              const categoryWeapons = category.ids
                .map((id) => weapons.find((weapon) => weapon.id === id))
                .filter((weapon): weapon is NonNullable<typeof weapon> => weapon != null)

              if (categoryWeapons.length === 0) return null

              return (
                <div key={category.label}>
                  <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1 px-1">
                    {category.label}
                  </div>

                  {categoryWeapons.map((weapon) => {
                    const alreadyOwned = weaponItems.some((item) => item.id === weapon.id)
                    return (
                      <button
                        key={weapon.id}
                        onClick={() => !alreadyOwned && addWeaponFromData(weapon.id)}
                        disabled={alreadyOwned}
                        className={`w-full text-left text-sm px-2 py-1 rounded transition-colors ${
                          alreadyOwned
                            ? 'text-text-muted/50 cursor-default'
                            : 'text-text-primary hover:bg-bg-card'
                        }`}
                      >
                        {weapon.nameIT} ({weapon.damageDice} {weapon.damageTypeIT})
                        {weapon.propertiesIT.length > 0 ? ` · ${weapon.propertiesIT.join(', ')}` : ''}
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

      {character && (
        <div className="space-y-2">
          <label className="block text-xs text-text-secondary uppercase tracking-wider font-semibold">
            {it.currency_label}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {COIN_FIELDS.map((coin) => (
              <CurrencyField
                key={coin.key}
                label={coin.label}
                value={character.currency[coin.key]}
                onChange={(value) => dispatch({ type: 'UPDATE_CURRENCY', denomination: coin.key, amount: value })}
              />
            ))}
          </div>
        </div>
      )}

      <div className="space-y-2">
        <label className="block text-xs text-text-secondary uppercase tracking-wider font-semibold">
          {it.tab_equipment}
        </label>

        <div className="flex gap-2">
          <input
            type="text"
            value={newItem}
            onChange={(event) => setNewItem(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={it.add_item_placeholder}
            className="flex-1 bg-bg-card border border-border rounded-lg px-3 py-2 text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
          />
          <button
            onClick={addItem}
            className="px-3 py-2 bg-accent-blue/20 text-accent-blue border border-accent-blue/30 rounded-lg text-sm font-medium hover:bg-accent-blue/30 transition-colors"
          >
            +
          </button>
        </div>

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
