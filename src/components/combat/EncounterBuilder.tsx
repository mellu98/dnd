/**
 * EncounterBuilder — add monsters to initiative from the bestiary.
 * Used by the DM dashboard to build encounters with auto-rolled initiative.
 */

import { useState } from 'react'
import type { MonsterStatBlock } from '../../types/monster'
import type { CombatInitiativeEntry } from '../../combat/types'
import { MonsterBrowser } from './MonsterBrowser'
import { MonsterStatBlockViewer } from './MonsterStatBlockViewer'
import { t } from '../../i18n/game-terms'

interface EncounterBuilderProps {
  onAddMonsters: (entries: CombatInitiativeEntry[]) => void
}

interface EncounterMonster {
  monster: MonsterStatBlock
  count: number
}

export function EncounterBuilder({ onAddMonsters }: EncounterBuilderProps) {
  const [encounter, setEncounter] = useState<EncounterMonster[]>([])
  const [showBrowser, setShowBrowser] = useState(false)
  const [viewingMonster, setViewingMonster] = useState<MonsterStatBlock | null>(null)

  function handleSelect(monster: MonsterStatBlock) {
    setShowBrowser(false)
    setEncounter((prev) => {
      const existing = prev.find((e) => e.monster.id === monster.id)
      if (existing) {
        return prev.map((e) =>
          e.monster.id === monster.id ? { ...e, count: e.count + 1 } : e,
        )
      }
      return [...prev, { monster, count: 1 }]
    })
  }

  function handleRemove(monsterId: string) {
    setEncounter((prev) => prev.filter((e) => e.monster.id !== monsterId))
  }

  function handleAdjust(monsterId: string, delta: number) {
    setEncounter((prev) =>
      prev
        .map((e) =>
          e.monster.id === monsterId ? { ...e, count: e.count + delta } : e,
        )
        .filter((e) => e.count > 0),
    )
  }

  function handleRollInitiative() {
    const entries: CombatInitiativeEntry[] = []
    let idCounter = 0

    for (const { monster, count } of encounter) {
      for (let i = 0; i < count; i++) {
        const initiative = Math.floor(Math.random() * 20) + 1
        const dexMod = Math.floor((monster.dexterity - 10) / 2)
        const total = initiative + dexMod

        entries.push({
          id: `npc-${monster.id}-${idCounter++}`,
          name: count > 1 ? `${monster.name} ${i + 1}` : monster.name,
          playerId: null,
          initiative: total,
          notes: `CR ${monster.challengeRating}`,
          monsterId: monster.id,
          currentHp: monster.hitPoints,
          maxHp: monster.hitPoints,
        })
      }
    }

    onAddMonsters(entries)
    setEncounter([])
  }

  function totalMonsters(): number {
    return encounter.reduce((sum, e) => sum + e.count, 0)
  }

  function totalCR(): number {
    return encounter.reduce((sum, e) => sum + e.monster.challengeRating * e.count, 0)
  }

  return (
    <div className="rounded border border-gray-700 bg-gray-800 p-3">
      <h3 className="mb-2 font-semibold text-gray-100">Encounter Builder</h3>

      {encounter.length === 0 ? (
        <div className="py-4 text-center text-sm text-gray-400">
          <p>No monsters added yet.</p>
          <button
            type="button"
            className="mt-2 rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-500"
            onClick={() => setShowBrowser(true)}
          >
            Browse Monsters
          </button>
        </div>
      ) : (
        <>
          <div className="mb-2 space-y-1">
            {encounter.map(({ monster, count }) => (
              <div
                key={monster.id}
                className="flex items-center justify-between rounded bg-gray-750 px-2 py-1"
              >
                <button
                  type="button"
                  className="text-left text-sm text-gray-200 hover:text-blue-400"
                  onClick={() => setViewingMonster(monster)}
                >
                  {monster.name}
                  {count > 1 && (
                    <span className="ml-1 text-xs text-gray-400">(x{count})</span>
                  )}
                </button>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="rounded bg-gray-600 px-1.5 text-xs text-gray-300 hover:bg-gray-500"
                    onClick={() => handleAdjust(monster.id, -1)}
                  >
                    -
                  </button>
                  <span className="w-4 text-center text-xs text-gray-300">{count}</span>
                  <button
                    type="button"
                    className="rounded bg-gray-600 px-1.5 text-xs text-gray-300 hover:bg-gray-500"
                    onClick={() => handleAdjust(monster.id, 1)}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="ml-1 rounded bg-red-900/50 px-1.5 text-xs text-red-300 hover:bg-red-800/50"
                    onClick={() => handleRemove(monster.id)}
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-2 flex justify-between text-xs text-gray-400">
            <span>{totalMonsters()} monsters</span>
            <span>Total CR: {totalCR().toFixed(1)}</span>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              className="flex-1 rounded bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-500"
              onClick={handleRollInitiative}
            >
              Roll Initiative
            </button>
            <button
              type="button"
              className="rounded bg-gray-700 px-3 py-1.5 text-sm text-gray-300 hover:bg-gray-600"
              onClick={() => setShowBrowser(true)}
            >
              + Add
            </button>
          </div>
        </>
      )}

      {/* Monster Browser Modal */}
      {showBrowser && <MonsterBrowser onSelect={handleSelect} onClose={() => setShowBrowser(false)} />}

      {/* Stat Block Viewer Modal */}
      {viewingMonster && (
        <MonsterStatBlockViewer monster={viewingMonster} onClose={() => setViewingMonster(null)} />
      )}
    </div>
  )
}
