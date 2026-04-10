import type { EquipmentItem } from '../../types/equipment'

function gear(data: Omit<EquipmentItem, 'category' | 'equipped' | 'quantity'>): EquipmentItem {
  return { ...data, category: 'gear', quantity: 1, equipped: false }
}

export const adventuringGear: EquipmentItem[] = [
  // Zaini e contenitori
  gear({ id: 'backpack', name: 'Backpack', nameIT: 'Zaino', weight: 2.25, value: 2, source: 'PHB 2024' }),
  gear({ id: 'pouch', name: 'Pouch', nameIT: 'Sacca', weight: 0.45, value: 0.5, source: 'PHB 2024' }),
  gear({ id: 'pouch-belt', name: 'Belt Pouch', nameIT: 'Sacca da Cintura', weight: 0.45, value: 0.5, source: 'PHB 2024' }),
  gear({ id: 'chest', name: 'Chest', nameIT: 'Cassa', weight: 11.25, value: 5, source: 'PHB 2024' }),
  gear({ id: 'flask', name: 'Flask', nameIT: 'Fiasca', weight: 0.45, value: 0.02, source: 'PHB 2024' }),
  gear({ id: 'jug', name: 'Jug', nameIT: 'Brocca', weight: 1.8, value: 0.02, source: 'PHB 2024' }),
  gear({ id: 'pot-iron', name: 'Pot, Iron', nameIT: 'Pentola di Ferro', weight: 4.5, value: 2, source: 'PHB 2024' }),
  gear({ id: 'barrel', name: 'Barrel', nameIT: 'Barile', weight: 31.5, value: 2, source: 'PHB 2024' }),
  gear({ id: 'basket', name: 'Basket', nameIT: 'Cesto', weight: 0.9, value: 0.4, source: 'PHB 2024' }),
  gear({ id: 'bottle-glass', name: 'Bottle, Glass', nameIT: 'Bottiglia di Vetro', weight: 0.9, value: 2, source: 'PHB 2024' }),
  gear({ id: 'bucket', name: 'Bucket', nameIT: 'Secchio', weight: 0.9, value: 0.05, source: 'PHB 2024' }),
  gear({ id: 'bag-of-flour', name: 'Bag of Flour', nameIT: 'Sacchetto di Farina', weight: 0.9, value: 0.1, source: 'PHB 2024' }),
  gear({ id: 'sack', name: 'Sack', nameIT: 'Sacco', weight: 0.45, value: 0.01, source: 'PHB 2024' }),
  gear({ id: 'case-map-scroll', name: 'Case, Map or Scroll', nameIT: 'Astuccio per Mappe', weight: 0.45, value: 1, source: 'PHB 2024' }),
  gear({ id: 'pouch-component', name: 'Component Pouch', nameIT: 'Sacca per Componenti', weight: 0.9, value: 25, source: 'PHB 2024' }),
  gear({ id: 'quiver', name: 'Quiver', nameIT: 'Faretra', weight: 0.45, value: 1, source: 'PHB 2024' }),

  // Accampamento e sopravvivenza
  gear({ id: 'bedroll', name: 'Bedroll', nameIT: 'Sacco a Pelo', weight: 3.15, value: 1, source: 'PHB 2024' }),
  gear({ id: 'blanket', name: 'Blanket', nameIT: 'Coperta', weight: 1.35, value: 0.5, source: 'PHB 2024' }),
  gear({ id: 'tent-two-person', name: 'Tent, Two-Person', nameIT: 'Tenda (2 persone)', weight: 9, value: 2, source: 'PHB 2024' }),
  gear({ id: 'tent-single', name: 'Tent, Single', nameIT: 'Tenda (1 persona)', weight: 4.5, value: 1, source: 'PHB 2024' }),
  gear({ id: 'hammock', name: 'Hammock', nameIT: 'Amaca', weight: 1.35, value: 0.5, source: 'PHB 2024' }),
  gear({ id: 'rations-1-day', name: 'Rations (1 day)', nameIT: 'Razioni (1 giorno)', weight: 0.9, value: 0.5, source: 'PHB 2024' }),
  gear({ id: 'waterskin', name: 'Waterskin', nameIT: 'Otre', weight: 2.25, value: 0.2, source: 'PHB 2024' }),
  gear({ id: 'fire-starter', name: 'Fire Starter', nameIT: 'Acciarino', weight: 0.45, value: 0.5, source: 'PHB 2024' }),
  gear({ id: 'flint-and-steel', name: 'Flint and Steel', nameIT: 'Pietra Focaia e Acciarino', weight: 0.45, value: 0.5, source: 'PHB 2024' }),
  gear({ id: 'tinderbox', name: 'Tinderbox', nameIT: 'Esca', weight: 0.45, value: 0.5, source: 'PHB 2024' }),
  gear({ id: 'torch', name: 'Torch', nameIT: 'Torcia', weight: 0.45, value: 0.01, source: 'PHB 2024' }),
  gear({ id: 'lantern-bullseye', name: 'Bullseye Lantern', nameIT: 'Lanterna a Riflettore', weight: 2.7, value: 10, source: 'PHB 2024' }),
  gear({ id: 'lantern-hooded', name: 'Hooded Lantern', nameIT: 'Lanterna con Cupola', weight: 0.9, value: 5, source: 'PHB 2024' }),
  gear({ id: 'oil-flask', name: 'Oil (flask)', nameIT: 'Olio (fiasca)', weight: 0.9, value: 0.1, source: 'PHB 2024' }),
  gear({ id: 'candle', name: 'Candle', nameIT: 'Candela', weight: 0, value: 0.01, source: 'PHB 2024' }),
  gear({ id: 'clothes-common', name: 'Clothes, Common', nameIT: 'Vestiti Comuni', weight: 1.35, value: 0.5, source: 'PHB 2024' }),
  gear({ id: 'clothes-travelers', name: 'Clothes, Traveler\'s', nameIT: 'Vestiti da Viaggio', weight: 1.8, value: 2, source: 'PHB 2024' }),
  gear({ id: 'clothes-fine', name: 'Clothes, Fine', nameIT: 'Vestiti Eleganti', weight: 2.7, value: 15, source: 'PHB 2024' }),
  gear({ id: 'clothes-costume', name: 'Clothes, Costume', nameIT: 'Vestiti in Costume', weight: 1.8, value: 5, source: 'PHB 2024' }),

  // Strumenti da esplorazione
  gear({ id: 'rope-hempen', name: 'Rope, Hempen (15 meters)', nameIT: 'Fune di Canapa (15 m)', weight: 4.5, value: 1, source: 'PHB 2024' }),
  gear({ id: 'rope-silk', name: 'Rope, Silk (15 meters)', nameIT: 'Fune di Seta (15 m)', weight: 2.25, value: 10, source: 'PHB 2024' }),
  gear({ id: 'chain-3-meters', name: 'Chain (3 meters)', nameIT: 'Catena (3 m)', weight: 4.5, value: 5, source: 'PHB 2024' }),
  gear({ id: 'grappling-hook', name: 'Grappling Hook', nameIT: 'Rampino', weight: 1.8, value: 2, source: 'PHB 2024' }),
  gear({ id: 'crowbar', name: 'Crowbar', nameIT: 'Piede di Porco', weight: 2.25, value: 2, source: 'PHB 2024' }),
  gear({ id: 'hammer', name: 'Hammer', nameIT: 'Martello', weight: 1.35, value: 1, source: 'PHB 2024' }),
  gear({ id: 'sledgehammer', name: 'Sledgehammer', nameIT: 'Mazza', weight: 4.5, value: 2, source: 'PHB 2024' }),
  gear({ id: 'pickaxe', name: 'Pickaxe', nameIT: 'Piccone', weight: 4.5, value: 2, source: 'PHB 2024' }),
  gear({ id: 'shovel', name: 'Shovel', nameIT: 'Pala', weight: 2.25, value: 2, source: 'PHB 2024' }),
  gear({ id: 'spike-iron', name: 'Iron Spike (10)', nameIT: 'Chiodi di Ferro (10)', weight: 2.25, value: 1, source: 'PHB 2024' }),
  gear({ id: 'piton-10', name: 'Piton (10)', nameIT: 'Chiodi da Scalata (10)', weight: 2.25, value: 5, source: 'PHB 2024' }),
  gear({ id: 'caltrops-bag-20', name: 'Caltrops (20)', nameIT: 'Triboli (20)', weight: 0.9, value: 1, source: 'PHB 2024' }),
  gear({ id: 'ball-caltrops', name: 'Ball Bearings (10)', nameIT: 'Cuscinetti a Sfera (10)', weight: 0.9, value: 1, source: 'PHB 2024' }),

  // Strumenti medici e utilità
  gear({ id: 'healers-kit', name: "Healer's Kit", nameIT: 'Kit del Guaritore', weight: 1.35, value: 5, source: 'PHB 2024' }),
  gear({ id: 'medication', name: 'Medication (1 dose)', nameIT: 'Medicinali (1 dose)', weight: 0, value: 1, source: 'PHB 2024' }),
  gear({ id: 'poison-basic', name: 'Basic Poison (1 dose)', nameIT: 'Veleno Base (1 dose)', weight: 0, value: 100, source: 'PHB 2024' }),
  gear({ id: 'bandages', name: 'Bandages', nameIT: 'Bende', weight: 0.45, value: 0.5, source: 'PHB 2024' }),
  gear({ id: 'antitoxin-vial', name: 'Antitoxin (vial)', nameIT: 'Antitossina (ampolla)', weight: 0, value: 50, source: 'PHB 2024' }),
  gear({ id: 'soap', name: 'Soap', nameIT: 'Sapone', weight: 0, value: 0.02, source: 'PHB 2024' }),
  gear({ id: 'mirror-steel', name: 'Mirror, Steel', nameIT: 'Specchio d\'Acciaio', weight: 0.225, value: 5, source: 'PHB 2024' }),
  gear({ id: 'magnifying-glass', name: 'Magnifying Glass', nameIT: 'Lente d\'Ingrandimento', weight: 0, value: 100, source: 'PHB 2024' }),

  // Scrittura e documenti
  gear({ id: 'paper-sheet', name: 'Paper (one sheet)', nameIT: 'Foglio di Carta', weight: 0, value: 0.2, source: 'PHB 2024' }),
  gear({ id: 'parchment-sheet', name: 'Parchment (one sheet)', nameIT: 'Foglio di Pergamena', weight: 0, value: 0.1, source: 'PHB 2024' }),
  gear({ id: 'ink-bottle', name: 'Ink (1 ounce bottle)', nameIT: 'Inchiostro (30 ml)', weight: 0, value: 10, source: 'PHB 2024' }),
  gear({ id: 'ink-pen', name: 'Ink Pen', nameIT: 'Penna d\'Inchiostro', weight: 0, value: 0.02, source: 'PHB 2024' }),
  gear({ id: 'book', name: 'Book', nameIT: 'Libro', weight: 2.25, value: 25, source: 'PHB 2024' }),
  gear({ id: 'signal-whistle', name: 'Signal Whistle', nameIT: 'Fischietto di Segnalazione', weight: 0, value: 0.05, source: 'PHB 2024' }),
  gear({ id: 'spyglass', name: 'Spyglass', nameIT: 'Cannocchiale', weight: 0.45, value: 1000, source: 'PHB 2024' }),

  // Focus arcani
  gear({ id: 'arcane-focus-crystal', name: 'Arcane Focus, Crystal', nameIT: 'Focus Arcano, Cristallo', weight: 0.45, value: 10, source: 'PHB 2024' }),
  gear({ id: 'arcane-focus-orb', name: 'Arcane Focus, Orb', nameIT: 'Focus Arcano, Sfera', weight: 1.35, value: 20, source: 'PHB 2024' }),
  gear({ id: 'arcane-focus-rod', name: 'Arcane Focus, Rod', nameIT: 'Focus Arcano, Bacchetta', weight: 0.9, value: 10, source: 'PHB 2024' }),
  gear({ id: 'arcane-focus-staff', name: 'Arcane Focus, Staff', nameIT: 'Focus Arcano, Bastone', weight: 1.8, value: 5, source: 'PHB 2024' }),
  gear({ id: 'arcane-focus-wand', name: 'Arcane Focus, Wand', nameIT: 'Focus Arcano, Verga', weight: 0.45, value: 10, source: 'PHB 2024' }),

  // Focus druidico
  gear({ id: 'druidic-focus-sprig', name: 'Druidic Focus, Sprig of Mistletoe', nameIT: 'Focus Druidico, Rametto di Vischio', weight: 0, value: 1, source: 'PHB 2024' }),
  gear({ id: 'druidic-focus-totem', name: 'Druidic Focus, Totem', nameIT: 'Focus Druidico, Totem', weight: 0.45, value: 1, source: 'PHB 2024' }),
  gear({ id: 'druidic-focus-wooden-staff', name: 'Druidic Focus, Wooden Staff', nameIT: 'Focus Druidico, Bastone di Legno', weight: 1.8, value: 5, source: 'PHB 2024' }),

  // Focus sacro
  gear({ id: 'holy-symbol-amulet', name: 'Holy Symbol, Amulet', nameIT: 'Simbolo Sacro, Amuleto', weight: 0.45, value: 5, source: 'PHB 2024' }),
  gear({ id: 'holy-symbol-emblem', name: 'Holy Symbol, Emblem', nameIT: 'Simbolo Sacro, Emblema', weight: 0.225, value: 5, source: 'PHB 2024' }),
  gear({ id: 'holy-symbol-reliquary', name: 'Holy Symbol, Reliquary', nameIT: 'Simbolo Sacro, Reliquiario', weight: 0.9, value: 5, source: 'PHB 2024' }),
]

export function getGearById(id: string): EquipmentItem | undefined {
  return adventuringGear.find((g) => g.id === id)
}
