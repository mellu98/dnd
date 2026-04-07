import type { ShieldData } from '../../types'

export const shields: ShieldData[] = [
  {
    id: 'shield',
    name: 'Shield',
    nameIT: 'Scudo',
    shieldBonus: 2,
    weight: 6,
    value: 10,
  },
]

export function getShieldById(id: string): ShieldData | undefined {
  return shields.find(s => s.id === id)
}
