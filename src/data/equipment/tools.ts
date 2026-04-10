import type { EquipmentItem } from '../../types/equipment'

function tool(data: Omit<EquipmentItem, 'category' | 'equipped' | 'quantity'>): EquipmentItem {
  return { ...data, category: 'gear', quantity: 1, equipped: false }
}

export const artisanTools: EquipmentItem[] = [
  tool({ id: 'alchemist-supplies', name: "Alchemist's Supplies", nameIT: 'Attrezzi da Alchimista', weight: 3.6, value: 50, source: 'PHB 2024' }),
  tool({ id: 'brewer-supplies', name: "Brewer's Supplies", nameIT: 'Attrezzi da Birraio', weight: 4.05, value: 20, source: 'PHB 2024' }),
  tool({ id: 'calligrapher-supplies', name: "Calligrapher's Supplies", nameIT: 'Attrezzi da Calligrafo', weight: 2.25, value: 10, source: 'PHB 2024' }),
  tool({ id: 'carpenter-tools', name: "Carpenter's Tools", nameIT: 'Attrezzi da Falegname', weight: 2.7, value: 8, source: 'PHB 2024' }),
  tool({ id: 'cartographer-tools', name: "Cartographer's Tools", nameIT: 'Attrezzi da Cartografo', weight: 2.7, value: 15, source: 'PHB 2024' }),
  tool({ id: 'cobbler-tools', name: "Cobbler's Tools", nameIT: 'Attrezzi da Calzolaio', weight: 2.25, value: 5, source: 'PHB 2024' }),
  tool({ id: 'cook-utensils', name: "Cook's Utensils", nameIT: 'Utensili da Cucina', weight: 3.6, value: 1, source: 'PHB 2024' }),
  tool({ id: 'glassblower-tools', name: "Glassblower's Tools", nameIT: 'Attrezzi da Soffiatore di Vetro', weight: 2.25, value: 30, source: 'PHB 2024' }),
  tool({ id: 'jeweler-tools', name: "Jeweler's Tools", nameIT: 'Attrezzi da Gioielliere', weight: 0.9, value: 25, source: 'PHB 2024' }),
  tool({ id: 'leatherworker-tools', name: "Leatherworker's Tools", nameIT: 'Attrezzi da Conciatore', weight: 2.25, value: 5, source: 'PHB 2024' }),
  tool({ id: 'mason-tools', name: "Mason's Tools", nameIT: 'Attrezzi da Muratore', weight: 3.6, value: 10, source: 'PHB 2024' }),
  tool({ id: 'painter-supplies', name: "Painter's Supplies", nameIT: 'Attrezzi da Pittore', weight: 2.25, value: 10, source: 'PHB 2024' }),
  tool({ id: 'potter-tools', name: "Potter's Tools", nameIT: 'Attrezzi da Vasaio', weight: 1.35, value: 10, source: 'PHB 2024' }),
  tool({ id: 'smith-tools', name: "Smith's Tools", nameIT: 'Attrezzi da Fabbro', weight: 3.6, value: 20, source: 'PHB 2024' }),
  tool({ id: 'tinker-tools', name: "Tinker's Tools", nameIT: 'Attrezzi da Riparatore', weight: 4.5, value: 50, source: 'PHB 2024' }),
  tool({ id: 'weaver-tools', name: "Weaver's Tools", nameIT: 'Attrezzi da Tessitore', weight: 2.25, value: 1, source: 'PHB 2024' }),
  tool({ id: 'woodcarver-tools', name: "Woodcarver's Tools", nameIT: 'Attrezzi da Intagliatore', weight: 0.9, value: 1, source: 'PHB 2024' }),
]

export const musicalInstruments: EquipmentItem[] = [
  tool({ id: 'bagpipes', name: 'Bagpipes', nameIT: 'Cornamusa', weight: 2.7, value: 30, source: 'PHB 2024' }),
  tool({ id: 'drum', name: 'Drum', nameIT: 'Tamburo', weight: 1.35, value: 6, source: 'PHB 2024' }),
  tool({ id: 'dulcimer', name: 'Dulcimer', nameIT: 'Salterio', weight: 4.5, value: 25, source: 'PHB 2024' }),
  tool({ id: 'flute', name: 'Flute', nameIT: 'Flauto', weight: 0.45, value: 2, source: 'PHB 2024' }),
  tool({ id: 'lute', name: 'Lute', nameIT: 'Liuto', weight: 0.9, value: 35, source: 'PHB 2024' }),
  tool({ id: 'lyre', name: 'Lyre', nameIT: 'Lira', weight: 0.9, value: 30, source: 'PHB 2024' }),
  tool({ id: 'horn', name: 'Horn', nameIT: 'Corno', weight: 0.9, value: 3, source: 'PHB 2024' }),
  tool({ id: 'pan-flute', name: 'Pan Flute', nameIT: 'Flauto di Pan', weight: 0.9, value: 12, source: 'PHB 2024' }),
  tool({ id: 'shawm', name: 'Shawm', nameIT: 'Ciaramella', weight: 0.45, value: 2, source: 'PHB 2024' }),
  tool({ id: 'viol', name: 'Viol', nameIT: 'Viola da Gamba', weight: 0.45, value: 30, source: 'PHB 2024' }),
]

export const gamingSets: EquipmentItem[] = [
  tool({ id: 'dice-set', name: 'Dice Set', nameIT: 'Set di Dadi', weight: 0, value: 0.1, source: 'PHB 2024' }),
  tool({ id: 'playing-card-set', name: 'Playing Card Set', nameIT: 'Set di Carte', weight: 0, value: 0.5, source: 'PHB 2024' }),
  tool({ id: 'dragonchess-set', name: 'Dragonchess Set', nameIT: 'Set di Scacchi del Drago', weight: 0.45, value: 1, source: 'PHB 2024' }),
  tool({ id: 'three-dragon-ante-set', name: 'Three-Dragon Ante Set', nameIT: 'Set Tre Draghi', weight: 0, value: 0.5, source: 'PHB 2024' }),
]

export const vehicles: EquipmentItem[] = [
  tool({ id: 'rowboat', name: 'Rowboat', nameIT: 'Barca a Remi', weight: 135, value: 50, source: 'PHB 2024' }),
  tool({ id: 'wagon', name: 'Wagon', nameIT: 'Carro', weight: 180, value: 35, source: 'PHB 2024' }),
  tool({ id: 'saddle-riding', name: 'Saddle, Riding', nameIT: 'Sella da Cavalcata', weight: 11.25, value: 10, source: 'PHB 2024' }),
  tool({ id: 'saddle-military', name: 'Saddle, Military', nameIT: 'Sella Militare', weight: 18, value: 20, source: 'PHB 2024' }),
  tool({ id: 'saddle-pack', name: 'Saddle, Pack', nameIT: 'Sella da Trasporto', weight: 6.75, value: 5, source: 'PHB 2024' }),
  tool({ id: 'saddle-exotic', name: 'Saddle, Exotic', nameIT: 'Sella Esotica', weight: 18, value: 60, source: 'PHB 2024' }),
  tool({ id: 'saddlebags', name: 'Saddlebags', nameIT: 'Borse da Sella', weight: 3.6, value: 4, source: 'PHB 2024' }),
  tool({ id: 'bit-and-bridle', name: 'Bit and Bridle', nameIT: 'Morso e Briglie', weight: 0.45, value: 2, source: 'PHB 2024' }),
]

export const allTools: EquipmentItem[] = [
  ...artisanTools,
  ...musicalInstruments,
  ...gamingSets,
  ...vehicles,
]

export function getToolById(id: string): EquipmentItem | undefined {
  return allTools.find((t) => t.id === id)
}
