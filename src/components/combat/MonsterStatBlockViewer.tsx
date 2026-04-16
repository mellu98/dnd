/**
 * MonsterStatBlockViewer — displays a full monster stat block in a modal.
 * Used by the DM dashboard to view monster details.
 */

import type { MonsterStatBlock } from '../../types/monster'
import { EntriesRenderer } from '../ui/EntriesRenderer'
import { t } from '../../i18n/game-terms'

interface MonsterStatBlockViewerProps {
  monster: MonsterStatBlock
  onClose: () => void
}

export function MonsterStatBlockViewer({ monster, onClose }: MonsterStatBlockViewerProps) {
  function formatCR(cr: number): string {
    if (cr === 0) return '0'
    if (cr < 1) return `1/${Math.round(1 / cr)}`
    return String(cr)
  }

  function formatAbility(score: number): string {
    const mod = Math.floor((score - 10) / 2)
    const sign = mod >= 0 ? '+' : ''
    return `${score} (${sign}${mod})`
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="flex h-[85vh] w-[95vw] max-w-3xl flex-col rounded-lg bg-gray-800 p-6 shadow-xl">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between border-b border-gray-700 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-100">{monster.name}</h2>
            <p className="text-sm text-gray-400">
              {t(monster.size)} {t(monster.type)}, {t(monster.alignment)}
            </p>
          </div>
          <button
            type="button"
            className="rounded bg-gray-700 px-3 py-1 text-sm text-gray-300 hover:bg-gray-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        {/* Stats bar */}
        <div className="mb-4 flex flex-wrap gap-4 rounded bg-gray-750 p-3 text-sm">
          <div>
            <span className="text-gray-400">AC:</span>{' '}
            <span className="font-semibold text-gray-100">{monster.armorClass}</span>
          </div>
          <div>
            <span className="text-gray-400">HP:</span>{' '}
            <span className="font-semibold text-gray-100">
              {monster.hitPoints} ({monster.hitDice})
            </span>
          </div>
          <div>
            <span className="text-gray-400">Speed:</span>{' '}
            <span className="text-gray-200">{monster.speed}</span>
          </div>
          <div>
            <span className="text-gray-400">CR:</span>{' '}
            <span className="rounded bg-red-900/50 px-1.5 py-0.5 font-mono text-red-300">
              {formatCR(monster.challengeRating)}
            </span>
          </div>
        </div>

        {/* Ability scores */}
        <div className="mb-4 grid grid-cols-6 gap-2 text-center">
          {(['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'] as const).map(
            (ability) => (
              <div key={ability} className="rounded bg-gray-750 p-2">
                <div className="text-xs font-semibold text-gray-400 uppercase">{ability.slice(0, 3)}</div>
                <div className="text-sm text-gray-200">
                  {formatAbility(monster[ability])}
                </div>
              </div>
            ),
          )}
        </div>

        {/* Details */}
        <div className="mb-4 space-y-1 text-sm text-gray-300">
          {monster.savingThrows && Object.keys(monster.savingThrows).length > 0 && (
            <p>
              <span className="font-semibold text-gray-400">Saving Throws: </span>
              {Object.entries(monster.savingThrows)
                .map(([ability, bonus]) => `${t(ability)} ${bonus}`)
                .join(', ')}
            </p>
          )}
          {monster.skills && Object.keys(monster.skills).length > 0 && (
            <p>
              <span className="font-semibold text-gray-400">Skills: </span>
              {Object.entries(monster.skills)
                .map(([skill, bonus]) => `${t(skill)} ${bonus}`)
                .join(', ')}
            </p>
          )}
          {monster.damageResistances && (
            <p>
              <span className="font-semibold text-gray-400">Damage Resistances: </span>
              {monster.damageResistances.map(t).join(', ')}
            </p>
          )}
          {monster.damageImmunities && (
            <p>
              <span className="font-semibold text-gray-400">Damage Immunities: </span>
              {monster.damageImmunities.map(t).join(', ')}
            </p>
          )}
          {monster.conditionImmunities && (
            <p>
              <span className="font-semibold text-gray-400">Condition Immunities: </span>
              {monster.conditionImmunities.map(t).join(', ')}
            </p>
          )}
          <p>
            <span className="font-semibold text-gray-400">Senses: </span>
            {monster.senses.join(', ')}
          </p>
          <p>
            <span className="font-semibold text-gray-400">Languages: </span>
            {monster.languages.length > 0 ? monster.languages.join(', ') : '—'}
          </p>
        </div>

        {/* Traits */}
        {monster.traits.length > 0 && (
          <div className="mb-3">
            <h3 className="mb-1 font-semibold text-gray-100">Traits</h3>
            {monster.traits.map((trait, i) => (
              <div key={i} className="mb-2">
                <span className="font-semibold text-gray-200">{trait.name}. </span>
                <EntriesRenderer nodes={trait.description} className="inline" />
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        {monster.actions.length > 0 && (
          <div className="mb-3">
            <h3 className="mb-1 font-semibold text-gray-100">Actions</h3>
            {monster.actions.map((action, i) => (
              <div key={i} className="mb-2">
                <span className="font-semibold text-gray-200">{action.name}. </span>
                <EntriesRenderer nodes={action.description} className="inline" />
              </div>
            ))}
          </div>
        )}

        {/* Reactions */}
        {monster.reactions && monster.reactions.length > 0 && (
          <div className="mb-3">
            <h3 className="mb-1 font-semibold text-gray-100">Reactions</h3>
            {monster.reactions.map((reaction, i) => (
              <div key={i} className="mb-2">
                <span className="font-semibold text-gray-200">{reaction.name}. </span>
                <EntriesRenderer nodes={reaction.description} className="inline" />
              </div>
            ))}
          </div>
        )}

        {/* Legendary Actions */}
        {monster.legendaryActions && monster.legendaryActions.length > 0 && (
          <div>
            <h3 className="mb-1 font-semibold text-gray-100">Legendary Actions</h3>
            {monster.legendaryActions.map((action, i) => (
              <div key={i} className="mb-2">
                <span className="font-semibold text-gray-200">{action.name}. </span>
                <EntriesRenderer nodes={action.description} className="inline" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
