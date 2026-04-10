import type { EquipmentItem } from '../../types/equipment'

function ammo(data: Omit<EquipmentItem, 'category' | 'equipped' | 'quantity'>): EquipmentItem {
  return { ...data, category: 'consumable', quantity: 20, equipped: false }
}

export const ammunition: EquipmentItem[] = [
  ammo({ id: 'arrows-20', name: 'Arrows (20)', nameIT: 'Frecce (20)', weight: 0.45, value: 1, source: 'PHB 2024' }),
  ammo({ id: 'bolts-20', name: 'Crossbow Bolts (20)', nameIT: 'Quadrelli (20)', weight: 0.7, value: 1, source: 'PHB 2024' }),
  ammo({ id: 'bullets-10', name: 'Sling Bullets (10)', nameIT: 'Pietre da Fionda (10)', weight: 3.6, value: 0.04, source: 'PHB 2024' }),
  ammo({ id: 'needles-50', name: 'Blowgun Needles (50)', nameIT: 'Aghi da Cerbottana (50)', weight: 0.45, value: 1, source: 'PHB 2024' }),
  ammo({ id: 'pistol-bullets-10', name: 'Pistol Bullets (10)', nameIT: 'Proiettili da Pistola (10)', weight: 0.45, value: 3, source: 'PHB 2024' }),
  ammo({ id: 'musket-bullets-10', name: 'Musket Bullets (10)', nameIT: 'Proiettili da Moschetto (10)', weight: 0.9, value: 3, source: 'PHB 2024' }),
]

export function getAmmunitionById(id: string): EquipmentItem | undefined {
  return ammunition.find((a) => a.id === id)
}
