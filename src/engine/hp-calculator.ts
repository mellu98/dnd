import type { DieType } from '../types'

const dieMax: Record<DieType, number> = {
  d6: 6,
  d8: 8,
  d10: 10,
  d12: 12,
}

const dieAvg: Record<DieType, number> = {
  d6: 4,
  d8: 5,
  d10: 6,
  d12: 7,
}

export function computeMaxHp(hitDie: DieType, conMod: number, level: number): number {
  const firstLevel = dieMax[hitDie] + conMod
  if (level <= 1) return Math.max(firstLevel, 1)
  const subsequentLevels = (dieAvg[hitDie] + conMod) * (level - 1)
  return Math.max(firstLevel + subsequentLevels, 1)
}
