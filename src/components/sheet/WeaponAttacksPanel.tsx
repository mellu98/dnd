import { useCharacterContext } from '../../context/CharacterContext'
import { getWeaponById } from '../../data/equipment'
import { getClassById } from '../../data/classes'
import type { CalculatedStats } from '../../types'
import { it } from '../../i18n/it'
import { getWeaponCombatSummary, isWeaponRanged } from '../../utils/weapon-combat'
import { getAbilityFull } from '../../i18n/lookup'

interface Props {
  stats: CalculatedStats
}

export function WeaponAttacksPanel({ stats }: Props) {
  const { state } = useCharacterContext()
  const character = state.character
  if (!character) return null

  const cls = getClassById(character.classId)

  const equippedWeapons = character.equipment
    .filter((item) => item.category === 'weapon' && item.equipped)
    .map((item) => {
      const data = getWeaponById(item.id)
      if (!data) return null

      const summary = getWeaponCombatSummary({
        weapon: data,
        classId: character.classId,
        abilityModifiers: stats.abilityModifiers,
        proficiencyBonus: stats.proficiencyBonus,
        proficiencies: stats.allProficiencies,
      })

      return { item, data, summary }
    })
    .filter(Boolean)

  // Unarmed strike is always available
  const unarmedData = getWeaponById('unarmed-strike')
  const unarmedSummary = unarmedData
    ? getWeaponCombatSummary({
        weapon: unarmedData,
        classId: character.classId,
        abilityModifiers: stats.abilityModifiers,
        proficiencyBonus: stats.proficiencyBonus,
        proficiencies: stats.allProficiencies,
      })
    : null

  const hasAnyAttacks = equippedWeapons.length > 0 || unarmedSummary

  if (!hasAnyAttacks) return null

  return (
    <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
      <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-3">
        {it.attacks}
      </h3>

      <div className="space-y-2">
        {/* Equipped weapons */}
        {equippedWeapons.map(({ item, data, summary }) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-bg-primary/50 border border-border/40 rounded-lg px-3 py-2.5"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-semibold text-text-primary">{data.nameIT}</span>
                <span className="text-[10px] text-text-muted px-1.5 py-0.5 rounded bg-bg-secondary border border-border/50">
                  {summary.isRanged ? 'Distanza' : 'Mischia'}
                </span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded border font-semibold shrink-0 ${
                  summary.isProficient
                    ? 'bg-accent-emerald/15 text-accent-emerald border-accent-emerald/30'
                    : 'bg-accent-red/10 text-accent-red/70 border-accent-red/20'
                }`}>
                  {summary.isProficient ? 'Prof.' : 'Non prof.'}
                </span>
              </div>
              <div className="text-[11px] text-text-muted mt-0.5">
                {getAbilityFull(summary.attackAbility)}
                {data.propertiesIT.length > 0 && ` · ${data.propertiesIT.slice(0, 3).join(', ')}${data.propertiesIT.length > 3 ? '...' : ''}`}
              </div>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <div className="text-center">
                <div className="text-[10px] text-text-muted uppercase tracking-wider">Colpire</div>
                <div className={`text-lg font-black ${summary.isProficient ? 'text-accent-gold' : 'text-text-muted'}`}>
                  {summary.attackBonus >= 0 ? '+' : ''}{summary.attackBonus}
                </div>
              </div>
              <div className="text-center">
                <div className="text-[10px] text-text-muted uppercase tracking-wider">Danno</div>
                <div className="text-sm font-bold text-accent-red">
                  {summary.damage}
                </div>
                {summary.alternateDamage && (
                  <div className="text-[10px] text-text-muted">
                    Versatile: {summary.alternateDamage}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Unarmed strike (only if no weapons or as fallback) */}
        {unarmedSummary && equippedWeapons.length === 0 && (
          <div
            className="flex items-center justify-between bg-bg-primary/50 border border-border/40 rounded-lg px-3 py-2.5"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-semibold text-text-primary">Colpo Senz'Armi</span>
                <span className="text-[10px] text-text-muted px-1.5 py-0.5 rounded bg-bg-secondary border border-border/50">
                  Mischia
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <div className="text-center">
                <div className="text-[10px] text-text-muted uppercase tracking-wider">Colpire</div>
                <div className="text-lg font-black text-accent-gold">
                  {unarmedSummary.attackBonus >= 0 ? '+' : ''}{unarmedSummary.attackBonus}
                </div>
              </div>
              <div className="text-center">
                <div className="text-[10px] text-text-muted uppercase tracking-wider">Danno</div>
                <div className="text-sm font-bold text-accent-red">
                  {unarmedSummary.damage}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
