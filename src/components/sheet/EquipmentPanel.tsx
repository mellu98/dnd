import { useState } from 'react'
import { useCharacterContext } from '../../context/CharacterContext'
import { armors, shields, weapons, getArmorById, getShieldById, getWeaponById, adventuringGear, getGearById, allTools, getToolById, ammunition, getAmmunitionById, artisanTools, musicalInstruments, gamingSets, vehicles } from '../../data/equipment'
import type { CalculatedStats } from '../../types'
import type { EquipmentItem } from '../../types/equipment'
import type { MagicItem } from '../../types/magic-item'
import { it } from '../../i18n/it'
import { getWeaponCombatSummary } from '../../utils/weapon-combat'
import { isArmorProficient, isShieldProficient } from '../../utils/equipment-proficiency'
import { getAllMagicItems, searchMagicItems, getMagicItemsByRarity } from '../../data/5e/items-loader'
import { EntriesRenderer } from '../ui/EntriesRenderer'

interface EquipmentPanelProps {
  stats: CalculatedStats
}

const WEAPON_CATEGORIES = [
  { label: 'Semplici da Mischia', match: (weapon: typeof weapons[number]) => weapon.category === 'simple' && weapon.attackType === 'melee' && !weapon.isLegacy },
  { label: 'Semplici a Distanza', match: (weapon: typeof weapons[number]) => weapon.category === 'simple' && weapon.attackType === 'ranged' && !weapon.isLegacy },
  { label: 'Marziali da Mischia', match: (weapon: typeof weapons[number]) => weapon.category === 'martial' && weapon.attackType === 'melee' && !weapon.isLegacy },
  { label: 'Marziali a Distanza', match: (weapon: typeof weapons[number]) => weapon.category === 'martial' && weapon.attackType === 'ranged' && !weapon.isLegacy },
]

function generateId(): string {
  return `item-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}

function usesAmmunition(weaponId: string): boolean {
  const weapon = getWeaponById(weaponId)
  return weapon?.properties.includes('ammunition') === true
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
  const [showGear, setShowGear] = useState(false)
  const [showTools, setShowTools] = useState(false)
  const [showAmmo, setShowAmmo] = useState(false)
  const [gearFilter, setGearFilter] = useState('')
  const [showMagicItems, setShowMagicItems] = useState(false)
  const [magicItems, setMagicItems] = useState<MagicItem[]>([])
  const [magicItemSearch, setMagicItemSearch] = useState('')
  const [magicItemRarityFilter, setMagicItemRarityFilter] = useState('')
  const [loadingMagicItems, setLoadingMagicItems] = useState(false)
  const [magicItemError, setMagicItemError] = useState<string | null>(null)

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

  const addGearFromData = (gearId: string) => {
    const data = getGearById(gearId)
    if (!data || equipment.some((item) => item.id === gearId)) return

    dispatch({ type: 'ADD_EQUIPMENT_ITEM', item: { ...data, quantity: 1 } })
  }

  const addToolFromData = (toolId: string) => {
    const data = getToolById(toolId)
    if (!data || equipment.some((item) => item.id === toolId)) return

    dispatch({ type: 'ADD_EQUIPMENT_ITEM', item: { ...data, quantity: 1 } })
  }

  const addAmmunitionFromData = (ammoId: string) => {
    const data = getAmmunitionById(ammoId)
    if (!data || equipment.some((item) => item.id === ammoId)) return

    dispatch({ type: 'ADD_EQUIPMENT_ITEM', item: { ...data, quantity: data.quantity } })
  }

  const handleLoadMagicItems = async () => {
    setLoadingMagicItems(true)
    setMagicItemError(null)
    try {
      let results: MagicItem[]
      if (magicItemSearch) {
        results = await searchMagicItems(magicItemSearch)
      } else if (magicItemRarityFilter) {
        results = await getMagicItemsByRarity(magicItemRarityFilter)
      } else {
        results = await getAllMagicItems()
      }
      setMagicItems(results.slice(0, 80))
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Errore sconosciuto'
      setMagicItemError(`Errore caricamento oggetti magici: ${msg}`)
      setMagicItems([])
    } finally {
      setLoadingMagicItems(false)
    }
  }

  const addMagicItem = (item: MagicItem) => {
    if (equipment.some((e) => e.id === item.id)) return
    const eqItem: EquipmentItem = {
      id: item.id,
      name: item.name,
      nameIT: item.name,
      category: 'gear',
      quantity: 1,
      equipped: false,
      weight: item.weight,
      value: item.value,
    }
    dispatch({ type: 'ADD_EQUIPMENT_ITEM', item: eqItem })
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
                        {weaponData && weaponData.mastery !== '—' && (
                          <p className="text-[11px] text-accent-purple">
                            <strong>Mastery:</strong> {weaponData.masteryIT}
                          </p>
                        )}
                        {weaponData?.isLegacy && (
                          <p className="text-[11px] text-accent-red/80">
                            Contenuto legacy ({weaponData.source ?? 'PHB 2014'})
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
              const categoryWeapons = weapons.filter(category.match)

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
                        {weapon.propertiesIT.length > 0 ? ` | ${weapon.propertiesIT.join(', ')}` : ''}
                        {weapon.mastery !== '—' ? ` | Mastery ${weapon.masteryIT}` : ''}
                        {alreadyOwned && ' (già posseduta)'}
                      </button>
                    )
                  })}
                </div>
              )
            })}

            {weapons.some((weapon) => weapon.isLegacy) && (
              <div>
                <div className="text-[10px] text-accent-red/70 uppercase tracking-wider mb-1 px-1">
                  Legacy / 2014
                </div>

                {weapons.filter((weapon) => weapon.isLegacy).map((weapon) => {
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
                      {weapon.nameIT} ({!weapon.damageTypeIT ? 'speciale' : `${weapon.damageDice} ${weapon.damageTypeIT}`})
                      {' | '}
                      {weapon.source ?? 'Legacy'}
                      {alreadyOwned && ' (già posseduta)'}
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-xs text-text-secondary uppercase tracking-wider font-semibold">
            Equipaggiamento
          </label>
          <div className="flex gap-2">
            <button onClick={() => setShowAmmo((v) => !v)} className="text-xs text-accent-blue hover:text-accent-blue/80 transition-colors">
              {showAmmo ? 'Chiudi munizioni' : '+ Munizioni'}
            </button>
            <button onClick={() => setShowTools((v) => !v)} className="text-xs text-accent-blue hover:text-accent-blue/80 transition-colors">
              {showTools ? 'Chiudi attrezzi' : '+ Attrezzi'}
            </button>
            <button onClick={() => setShowGear((v) => !v)} className="text-xs text-accent-blue hover:text-accent-blue/80 transition-colors">
              {showGear ? 'Chiudi' : '+ Equipagg.'}
            </button>
          </div>
        </div>

        {/* Ammo picker */}
        {showAmmo && (
          <div className="bg-bg-secondary border border-border rounded-lg p-2 space-y-1 max-h-48 overflow-y-auto">
            {ammunition.map((a) => {
              const alreadyOwned = equipment.some((item) => item.id === a.id)
              return (
                <button
                  key={a.id}
                  onClick={() => !alreadyOwned && addAmmunitionFromData(a.id)}
                  disabled={alreadyOwned}
                  className={`w-full text-left text-sm px-2 py-1 rounded transition-colors ${
                    alreadyOwned ? 'text-text-muted/50 cursor-default' : 'text-text-primary hover:bg-bg-card'
                  }`}
                >
                  {a.nameIT} — {a.value} MO
                  {alreadyOwned && ' (già posseduto)'}
                </button>
              )
            })}
          </div>
        )}

        {/* Tools picker */}
        {showTools && (
          <div className="bg-bg-secondary border border-border rounded-lg p-2 space-y-3 max-h-64 overflow-y-auto">
            {[
              { label: 'Attrezzi Artigianali', items: allTools.filter((t) => artisanTools.includes(t)) },
              { label: 'Strumenti Musicali', items: musicalInstruments },
              { label: 'Set da Gioco', items: gamingSets },
              { label: 'Veicoli e Sella', items: vehicles },
            ].map((group) => (
              <div key={group.label}>
                <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1 px-1">{group.label}</div>
                {group.items.map((tool) => {
                  const alreadyOwned = equipment.some((item) => item.id === tool.id)
                  return (
                    <button
                      key={tool.id}
                      onClick={() => !alreadyOwned && addToolFromData(tool.id)}
                      disabled={alreadyOwned}
                      className={`w-full text-left text-sm px-2 py-1 rounded transition-colors ${
                        alreadyOwned ? 'text-text-muted/50 cursor-default' : 'text-text-primary hover:bg-bg-card'
                      }`}
                    >
                      {tool.nameIT} — {tool.value} MO
                      {alreadyOwned && ' (già posseduto)'}
                    </button>
                  )
                })}
              </div>
            ))}
          </div>
        )}

        {/* Adventuring gear picker */}
        {showGear && (
          <div className="bg-bg-secondary border border-border rounded-lg p-2 space-y-1">
            <input
              type="text"
              value={gearFilter}
              onChange={(e) => setGearFilter(e.target.value)}
              placeholder="Filtra equipaggiamento..."
              className="w-full bg-bg-card border border-border rounded px-2 py-1 text-xs text-text-primary placeholder:text-text-muted/50 focus:outline-none mb-1"
            />
            {(() => {
              const query = gearFilter.toLowerCase()
              const filtered = query
                ? adventuringGear.filter((g) => g.nameIT.toLowerCase().includes(query) || g.name.toLowerCase().includes(query))
                : adventuringGear
              return filtered.slice(0, 50).map((g) => {
                const alreadyOwned = equipment.some((item) => item.id === g.id)
                return (
                  <button
                    key={g.id}
                    onClick={() => !alreadyOwned && addGearFromData(g.id)}
                    disabled={alreadyOwned}
                    className={`w-full text-left text-sm px-2 py-1 rounded transition-colors ${
                      alreadyOwned ? 'text-text-muted/50 cursor-default' : 'text-text-primary hover:bg-bg-card'
                    }`}
                  >
                    {g.nameIT} — {g.value} MO
                    {alreadyOwned && ' (già posseduto)'}
                  </button>
                )
              })
            })()}
          </div>
        )}

        {/* Gear items list */}
        {gearItems.length === 0 ? (
          <p className="text-text-secondary text-sm italic px-1">Nessun equipaggiamento.</p>
        ) : (
          <ul className="space-y-1">
            {gearItems.map((item) => {
              const dataItem = getGearById(item.id) || getToolById(item.id) || getAmmunitionById(item.id)
              return (
                <li
                  key={item.id}
                  className="flex items-center justify-between bg-bg-card border border-border rounded-lg px-3 py-2 group hover:bg-bg-card-hover transition-colors"
                >
                  <div className="min-w-0 flex-1">
                    <span className="text-sm text-text-primary">{item.nameIT}</span>
                    {item.quantity > 1 && (
                      <span className="text-[11px] text-text-muted ml-2">×{item.quantity}</span>
                    )}
                    {dataItem && (
                      <span className="text-[11px] text-text-muted ml-1">— {dataItem.value} MO</span>
                    )}
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-accent-red/60 hover:text-accent-red transition-colors text-lg leading-none px-1"
                    title="Rimuovi"
                  >
                    &times;
                  </button>
                </li>
              )
            })}
          </ul>
        )}

        {/* Manual add item */}
        <div className="flex gap-2 pt-1">
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
      </div>

      {/* Magic Items Section */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-xs text-text-secondary uppercase tracking-wider font-semibold">
            Oggetti Magici
          </label>
          <button
            onClick={() => {
              setShowMagicItems((v) => !v)
              if (!showMagicItems && magicItems.length === 0) handleLoadMagicItems()
            }}
            className="text-xs text-accent-purple hover:text-accent-purple/80 transition-colors"
          >
            {showMagicItems ? 'Chiudi' : '+ Sfoglia'}
          </button>
        </div>

        {showMagicItems && (
          <div className="bg-bg-secondary border border-border rounded-lg p-2 space-y-2">
            {/* Filters */}
            <div className="flex gap-2">
              <input
                type="text"
                value={magicItemSearch}
                onChange={(e) => setMagicItemSearch(e.target.value)}
                placeholder="Cerca oggetto magico..."
                className="flex-1 bg-bg-card border border-border rounded px-2 py-1 text-xs text-text-primary placeholder:text-text-muted/50 focus:outline-none"
              />
              <select
                value={magicItemRarityFilter}
                onChange={(e) => setMagicItemRarityFilter(e.target.value)}
                className="bg-bg-card border border-border rounded px-2 py-1 text-xs text-text-primary focus:outline-none"
              >
                <option value="">Tutte</option>
                <option value="Common">Comune</option>
                <option value="Uncommon">Non comune</option>
                <option value="Rare">Raro</option>
                <option value="Very Rare">Molto raro</option>
                <option value="Legendary">Leggendario</option>
                <option value="Artifact">Artefatto</option>
              </select>
              <button
                onClick={handleLoadMagicItems}
                className="px-3 py-1 rounded bg-accent-purple/20 text-accent-purple border border-accent-purple/30 text-xs font-semibold hover:bg-accent-purple/30 transition-colors"
              >
                Cerca
              </button>
            </div>

            {/* Results */}
            {loadingMagicItems && (
              <p className="text-xs text-text-muted italic py-2">Caricamento...</p>
            )}
            {magicItemError && (
              <div className="rounded-lg border border-accent-red/30 bg-accent-red/10 px-3 py-2 text-xs text-accent-red">
                {magicItemError}
                <button
                  onClick={handleLoadMagicItems}
                  className="ml-2 underline hover:no-underline"
                >
                  Riprova
                </button>
              </div>
            )}
            {!loadingMagicItems && !magicItemError && magicItems.length === 0 && (
              <p className="text-xs text-text-muted italic py-2">Nessun oggetto trovato.</p>
            )}
            {!loadingMagicItems && magicItems.length > 0 && (
              <div className="max-h-64 overflow-y-auto space-y-1">
                {magicItems.map((item) => {
                  const alreadyOwned = equipment.some((e) => e.id === item.id)
                  return (
                    <div
                      key={item.id}
                      className="rounded px-2 py-1.5 hover:bg-bg-card transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <button
                          onClick={() => !alreadyOwned && addMagicItem(item)}
                          disabled={alreadyOwned}
                          className="text-left text-sm text-text-primary hover:text-accent-purple transition-colors flex-1 disabled:text-text-muted/50 disabled:cursor-default"
                        >
                          <span className="font-medium">{item.name}</span>
                          <span className="text-[10px] ml-1.5 px-1.5 py-0.5 rounded-full border border-accent-purple/30 text-accent-purple">
                            {item.rarity}
                          </span>
                          {item.requiresAttunement && (
                            <span className="text-[10px] ml-1 text-accent-gold/70">
                              (richiede sintonizzazione)
                            </span>
                          )}
                          {alreadyOwned && <span className="text-[10px] text-text-muted/50 ml-1">(già posseduto)</span>}
                        </button>
                      </div>
                      <div className="text-[11px] text-text-muted mt-0.5 pl-1">
                        <EntriesRenderer nodes={item.description} className="inline" />
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
