/**
 * MonsterBrowser — browse and search monsters from the bestiary.
 * Used by the DM dashboard to add monsters to initiative.
 */

import { useState, useEffect } from 'react'
import type { MonsterStatBlock } from '../../types/monster'
import { searchMonsters, getMonstersByCR, getAllMonsters } from '../../data/5e/bestiary-loader'

interface MonsterBrowserProps {
  onSelect: (monster: MonsterStatBlock) => void
  onClose: () => void
}

export function MonsterBrowser({ onSelect, onClose }: MonsterBrowserProps) {
  const [monsters, setMonsters] = useState<MonsterStatBlock[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [minCR, setMinCR] = useState(0)
  const [maxCR, setMaxCR] = useState(30)

  useEffect(() => {
    loadMonsters()
  }, [])

  async function loadMonsters() {
    setLoading(true)
    let results: MonsterStatBlock[]
    if (search) {
      results = await searchMonsters(search)
    } else if (minCR > 0 || maxCR < 30) {
      results = await getMonstersByCR(minCR, maxCR)
    } else {
      results = await getAllMonsters()
    }
    // Limit to 100 results for performance
    setMonsters(results.slice(0, 100))
    setLoading(false)
  }

  function handleSearch(query: string) {
    setSearch(query)
  }

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault()
    loadMonsters()
  }

  function handleSelect(monster: MonsterStatBlock) {
    onSelect(monster)
  }

  function formatCR(cr: number): string {
    if (cr === 0) return '0'
    if (cr < 1) return `1/${Math.round(1 / cr)}`
    return String(cr)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="flex h-[80vh] w-[90vw] max-w-4xl flex-col rounded-lg bg-gray-800 p-4 shadow-xl">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-100">Monster Browser</h2>
          <button
            type="button"
            className="rounded bg-gray-700 px-3 py-1 text-sm text-gray-300 hover:bg-gray-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        {/* Filters */}
        <form onSubmit={handleSearchSubmit} className="mb-4 flex gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search monster..."
            className="flex-1 rounded border border-gray-600 bg-gray-700 px-3 py-2 text-sm text-gray-200 placeholder-gray-500"
          />
          <select
            value={minCR}
            onChange={(e) => setMinCR(Number(e.target.value))}
            className="rounded border border-gray-600 bg-gray-700 px-2 py-2 text-sm text-gray-200"
          >
            <option value={0}>CR 0</option>
            <option value={0.125}>CR 1/8</option>
            <option value={0.25}>CR 1/4</option>
            <option value={0.5}>CR 1/2</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map(
              (cr) => (
                <option key={cr} value={cr}>
                  CR {cr}
                </option>
              ),
            )}
          </select>
          <span className="flex items-center text-gray-400">to</span>
          <select
            value={maxCR}
            onChange={(e) => setMaxCR(Number(e.target.value))}
            className="rounded border border-gray-600 bg-gray-700 px-2 py-2 text-sm text-gray-200"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map(
              (cr) => (
                <option key={cr} value={cr}>
                  CR {cr}
                </option>
              ),
            )}
          </select>
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
          >
            Search
          </button>
        </form>

        {/* Results */}
        <div className="flex-1 overflow-y-auto">
          {loading && <p className="py-4 text-center text-gray-400">Loading monsters...</p>}
          {!loading && monsters.length === 0 && (
            <p className="py-4 text-center text-gray-400">No monsters found.</p>
          )}
          <div className="grid gap-2 sm:grid-cols-2">
            {monsters.map((monster) => (
              <button
                key={monster.id}
                type="button"
                className="flex items-center justify-between rounded border border-gray-700 bg-gray-750 px-3 py-2 text-left hover:bg-gray-700"
                onClick={() => handleSelect(monster)}
              >
                <div>
                  <div className="font-medium text-gray-100">{monster.name}</div>
                  <div className="text-xs text-gray-400">
                    {monster.type} &middot; {monster.alignment}
                  </div>
                </div>
                <div className="text-right">
                  <div className="rounded bg-red-900/50 px-2 py-0.5 text-xs font-mono text-red-300">
                    CR {formatCR(monster.challengeRating)}
                  </div>
                  <div className="mt-1 text-xs text-gray-400">
                    AC {monster.armorClass} &middot; HP {monster.hitPoints}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-2 text-xs text-gray-500">
          Showing {monsters.length} monsters from Monster Manual (5etools data)
        </div>
      </div>
    </div>
  )
}
