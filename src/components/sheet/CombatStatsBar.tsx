import { useState } from 'react'
import { useHpTracker } from '../../hooks/useHpTracker'
import type { CalculatedStats } from '../../types'
import { it } from '../../i18n/it'
import { getArmorById } from '../../data/equipment'
import { useCharacterContext } from '../../context/CharacterContext'

interface Props {
  stats: CalculatedStats
}

type HpAction = 'damage' | 'heal' | 'temp' | null

/**
 * Full-width strip: CA | PF (curr/max/temp) with action buttons | Dadi Vita | Bonus Competenza
 * Replaces the old stats bar + HpTracker combo.
 */
export function CombatStatsBar({ stats }: Props) {
  const { state } = useCharacterContext()
  const { hp, takeDamage, heal, setTempHp } = useHpTracker()
  const [activeAction, setActiveAction] = useState<HpAction>(null)
  const [inputValue, setInputValue] = useState('')

  const character = state.character
  const ratio = hp.max > 0 ? hp.current / hp.max : 0
  const barColor =
    ratio > 0.5
      ? 'from-accent-green to-emerald-600'
      : ratio > 0.25
        ? 'from-yellow-500 to-orange-500'
        : 'from-accent-red to-red-800'

  const equippedArmor = character?.equippedArmorId ? getArmorById(character.equippedArmorId) : null
  const acLabel = equippedArmor ? `${stats.armorClass}` : `${stats.armorClass}`
  const acSub = equippedArmor
    ? equippedArmor.nameIT + (character?.equippedShieldId ? ' + Scudo' : '')
    : 'Senza armatura'

  const cls = character?.classId ?? ''
  const hitDieMap: Record<string, string> = {
    barbarian: 'd12',
    fighter: 'd10',
    paladin: 'd10',
    ranger: 'd10',
    bard: 'd8',
    cleric: 'd8',
    druid: 'd8',
    monk: 'd8',
    rogue: 'd8',
    warlock: 'd8',
    sorcerer: 'd6',
    wizard: 'd6',
  }
  const hitDie = hitDieMap[cls] ?? 'd8'

  const handleConfirm = () => {
    const amount = parseInt(inputValue, 10)
    if (isNaN(amount) || amount <= 0) return
    if (activeAction === 'damage') takeDamage(amount)
    else if (activeAction === 'heal') heal(amount)
    else if (activeAction === 'temp') setTempHp(amount)
    setInputValue('')
    setActiveAction(null)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleConfirm()
    if (e.key === 'Escape') {
      setActiveAction(null)
      setInputValue('')
    }
  }

  const toggleAction = (action: HpAction) => {
    if (activeAction === action) {
      setActiveAction(null)
      setInputValue('')
    } else {
      setActiveAction(action)
      setInputValue('')
    }
  }

  return (
    <div className="bg-bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden">
      <div className="grid grid-cols-[auto_1fr_auto_auto] gap-0 divide-x divide-border/40">
        {/* CA Block */}
        <div className="flex flex-col items-center justify-center px-4 py-3 min-w-[80px]">
          <span className="text-[10px] text-text-secondary uppercase tracking-widest mb-0.5">{it.armor_class}</span>
          <span className="text-3xl font-black text-accent-blue tabular-nums">{acLabel}</span>
          <span className="text-[10px] text-text-muted mt-0.5 text-center leading-tight max-w-[90px] truncate">
            {acSub}
          </span>
        </div>

        {/* HP Section */}
        <div className="flex flex-col justify-center px-4 py-3 gap-2">
          {/* HP numbers */}
          <div className="flex items-baseline gap-2 flex-wrap">
            <div className="text-center">
              <div className="text-[10px] text-text-secondary uppercase tracking-wider">{it.hp_current}</div>
              <div className="text-2xl font-black text-accent-green tabular-nums">{hp.current}</div>
            </div>
            <span className="text-text-muted text-lg font-light">/</span>
            <div className="text-center">
              <div className="text-[10px] text-text-secondary uppercase tracking-wider">{it.hp_max}</div>
              <div className="text-xl font-bold text-text-primary tabular-nums">{hp.max}</div>
            </div>
            {hp.temporary > 0 && (
              <div className="text-center">
                <div className="text-[10px] text-text-secondary uppercase tracking-wider">{it.hp_temp}</div>
                <div className="text-xl font-bold text-accent-blue tabular-nums">+{hp.temporary}</div>
              </div>
            )}
          </div>

          {/* HP bar */}
          <div className="relative h-2.5 bg-bg-secondary rounded-full overflow-hidden">
            <div
              className={`absolute inset-y-0 left-0 bg-gradient-to-r ${barColor} transition-all duration-500 ease-out rounded-full`}
              style={{ width: `${Math.max(0, Math.min(100, ratio * 100))}%` }}
            />
          </div>

          {/* Action buttons row */}
          <div className="flex gap-1.5 flex-wrap">
            {(['damage', 'heal', 'temp'] as const).map((action) => {
              const colors = {
                damage: {
                  active: 'bg-accent-red text-white shadow-lg shadow-accent-red/30',
                  idle: 'bg-accent-red/15 text-accent-red hover:bg-accent-red/25 border border-accent-red/30',
                },
                heal: {
                  active: 'bg-accent-green text-white shadow-lg shadow-accent-green/30',
                  idle: 'bg-accent-green/15 text-accent-green hover:bg-accent-green/25 border border-accent-green/30',
                },
                temp: {
                  active: 'bg-accent-blue text-white shadow-lg shadow-accent-blue/30',
                  idle: 'bg-accent-blue/15 text-accent-blue hover:bg-accent-blue/25 border border-accent-blue/30',
                },
              }
              const labels = { damage: it.take_damage, heal: it.heal, temp: it.hp_temp }
              return (
                <button
                  key={action}
                  onClick={() => toggleAction(action)}
                  className={`px-2 py-1 min-h-[44px] min-w-[44px] rounded-md text-xs font-medium transition-all duration-200 ${
                    activeAction === action ? colors[action].active : colors[action].idle
                  }`}
                >
                  {labels[action]}
                </button>
              )
            })}
          </div>

          {/* Inline input */}
          {activeAction && (
            <div className="flex gap-2 animate-fade-in">
              <input
                type="number"
                min="1"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  activeAction === 'damage' ? 'Danno...' : activeAction === 'heal' ? 'Cura...' : 'PF Temp...'
                }
                autoFocus
                className="flex-1 bg-bg-secondary border border-border rounded-md px-2 py-1.5 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
              />
              <button
                onClick={handleConfirm}
                className={`px-3 py-1.5 rounded-md text-sm font-medium text-white transition-all ${
                  activeAction === 'damage'
                    ? 'bg-accent-red hover:bg-accent-red/80'
                    : activeAction === 'heal'
                      ? 'bg-accent-green hover:bg-accent-green/80'
                      : 'bg-accent-blue hover:bg-accent-blue/80'
                }`}
              >
                {it.confirm}
              </button>
            </div>
          )}
        </div>

        {/* Dadi Vita */}
        <div className="flex flex-col items-center justify-center px-4 py-3 min-w-[80px]">
          <span className="text-[10px] text-text-secondary uppercase tracking-widest mb-0.5">{it.hit_die}</span>
          <span className="text-2xl font-black text-accent-purple tabular-nums">{hitDie}</span>
          <span className="text-[10px] text-text-muted mt-0.5">×{character?.level ?? 1}</span>
        </div>

        {/* Bonus Competenza */}
        <div className="flex flex-col items-center justify-center px-4 py-3 min-w-[80px]">
          <span className="text-[10px] text-text-secondary uppercase tracking-widest mb-0.5 text-center leading-tight">
            {it.proficiency_bonus}
          </span>
          <span className="text-3xl font-black text-accent-emerald tabular-nums">+{stats.proficiencyBonus}</span>
        </div>
      </div>
    </div>
  )
}
