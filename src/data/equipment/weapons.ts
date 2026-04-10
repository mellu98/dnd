import type { WeaponData } from '../../types/equipment'

function meleeWeapon(data: Omit<WeaponData, 'attackType'>): WeaponData {
  return { attackType: 'melee', ...data }
}

function rangedWeapon(data: Omit<WeaponData, 'attackType'>): WeaponData {
  return { attackType: 'ranged', ...data }
}

export const simpleMeleeWeapons: WeaponData[] = [
  meleeWeapon({ id: 'club', name: 'Club', nameIT: 'Clava', damageDice: '1d4', damageType: 'bludgeoning', damageTypeIT: 'contundente', properties: ['light'], propertiesIT: ['Leggera'], mastery: 'slow', masteryIT: 'Lenta', weight: 2, value: 0.1, category: 'simple', source: 'PHB 2024' }),
  meleeWeapon({ id: 'dagger', name: 'Dagger', nameIT: 'Pugnale', damageDice: '1d4', damageType: 'piercing', damageTypeIT: 'perforante', properties: ['finesse', 'light', 'thrown', 'range_20_60'], propertiesIT: ['Accurata', 'Leggera', 'Da lancio', 'Gittata 6/18'], mastery: 'nick', masteryIT: 'Nick', weight: 1, value: 2, category: 'simple', source: 'PHB 2024' }),
  meleeWeapon({ id: 'greatclub', name: 'Greatclub', nameIT: 'Mazzuolo', damageDice: '1d8', damageType: 'bludgeoning', damageTypeIT: 'contundente', properties: ['two-handed'], propertiesIT: ['A due mani'], mastery: 'push', masteryIT: 'Spinta', weight: 10, value: 0.2, category: 'simple', source: 'PHB 2024' }),
  meleeWeapon({ id: 'handaxe', name: 'Handaxe', nameIT: 'Accetta', damageDice: '1d6', damageType: 'slashing', damageTypeIT: 'tagliente', properties: ['light', 'thrown', 'range_20_60'], propertiesIT: ['Leggera', 'Da lancio', 'Gittata 6/18'], mastery: 'vex', masteryIT: 'Vex', weight: 2, value: 5, category: 'simple', source: 'PHB 2024' }),
  meleeWeapon({ id: 'javelin', name: 'Javelin', nameIT: 'Giavellotto', damageDice: '1d6', damageType: 'piercing', damageTypeIT: 'perforante', properties: ['thrown', 'range_30_120'], propertiesIT: ['Da lancio', 'Gittata 9/36'], mastery: 'slow', masteryIT: 'Lenta', weight: 2, value: 0.5, category: 'simple', source: 'PHB 2024' }),
  meleeWeapon({ id: 'light-hammer', name: 'Light Hammer', nameIT: 'Martello Leggero', damageDice: '1d4', damageType: 'bludgeoning', damageTypeIT: 'contundente', properties: ['light', 'thrown', 'range_20_60'], propertiesIT: ['Leggera', 'Da lancio', 'Gittata 6/18'], mastery: 'nick', masteryIT: 'Nick', weight: 2, value: 2, category: 'simple', source: 'PHB 2024' }),
  meleeWeapon({ id: 'mace', name: 'Mace', nameIT: 'Mazza', damageDice: '1d6', damageType: 'bludgeoning', damageTypeIT: 'contundente', properties: [], propertiesIT: [], mastery: 'sap', masteryIT: 'Sap', weight: 4, value: 5, category: 'simple', source: 'PHB 2024' }),
  meleeWeapon({ id: 'quarterstaff', name: 'Quarterstaff', nameIT: 'Bastone Ferrato', damageDice: '1d6', damageType: 'bludgeoning', damageTypeIT: 'contundente', properties: ['versatile_1d8'], propertiesIT: ['Versatile 1d8'], mastery: 'topple', masteryIT: 'Atterramento', weight: 4, value: 0.2, category: 'simple', source: 'PHB 2024' }),
  meleeWeapon({ id: 'sickle', name: 'Sickle', nameIT: 'Falcetto', damageDice: '1d4', damageType: 'slashing', damageTypeIT: 'tagliente', properties: ['light'], propertiesIT: ['Leggera'], mastery: 'nick', masteryIT: 'Nick', weight: 2, value: 1, category: 'simple', source: 'PHB 2024' }),
  meleeWeapon({ id: 'spear', name: 'Spear', nameIT: 'Lancia', damageDice: '1d6', damageType: 'piercing', damageTypeIT: 'perforante', properties: ['thrown', 'range_20_60', 'versatile_1d8'], propertiesIT: ['Da lancio', 'Gittata 6/18', 'Versatile 1d8'], mastery: 'sap', masteryIT: 'Sap', weight: 3, value: 1, category: 'simple', source: 'PHB 2024' }),
  meleeWeapon({ id: 'unarmed-strike', name: 'Unarmed Strike', nameIT: 'Colpo Senz’Armi', damageDice: '1', damageType: 'bludgeoning', damageTypeIT: 'contundente', properties: ['special'], propertiesIT: ['Speciale'], mastery: '—', masteryIT: '—', weight: 0, value: 0, category: 'simple', source: 'Custom' }),
]

export const simpleRangedWeapons: WeaponData[] = [
  rangedWeapon({ id: 'dart', name: 'Dart', nameIT: 'Dardo', damageDice: '1d4', damageType: 'piercing', damageTypeIT: 'perforante', properties: ['finesse', 'thrown', 'range_20_60'], propertiesIT: ['Accurata', 'Da lancio', 'Gittata 6/18'], mastery: 'vex', masteryIT: 'Vex', weight: 0.25, value: 0.05, category: 'simple', source: 'PHB 2024' }),
  rangedWeapon({ id: 'light-crossbow', name: 'Light Crossbow', nameIT: 'Balestra Leggera', damageDice: '1d8', damageType: 'piercing', damageTypeIT: 'perforante', properties: ['ammunition', 'range_80_320', 'loading', 'two-handed'], propertiesIT: ['Munizioni', 'Gittata 24/96', 'Ricarica', 'A due mani'], mastery: 'slow', masteryIT: 'Lenta', weight: 5, value: 25, category: 'simple', source: 'PHB 2024' }),
  rangedWeapon({ id: 'shortbow', name: 'Shortbow', nameIT: 'Arco Corto', damageDice: '1d6', damageType: 'piercing', damageTypeIT: 'perforante', properties: ['ammunition', 'range_80_320', 'two-handed'], propertiesIT: ['Munizioni', 'Gittata 24/96', 'A due mani'], mastery: 'vex', masteryIT: 'Vex', weight: 2, value: 25, category: 'simple', source: 'PHB 2024' }),
  rangedWeapon({ id: 'sling', name: 'Sling', nameIT: 'Fionda', damageDice: '1d4', damageType: 'bludgeoning', damageTypeIT: 'contundente', properties: ['ammunition', 'range_30_120'], propertiesIT: ['Munizioni', 'Gittata 9/36'], mastery: 'slow', masteryIT: 'Lenta', weight: 0, value: 0.1, category: 'simple', source: 'PHB 2024' }),
]

export const martialMeleeWeapons: WeaponData[] = [
  meleeWeapon({ id: 'battleaxe', name: 'Battleaxe', nameIT: 'Ascia da Battaglia', damageDice: '1d8', damageType: 'slashing', damageTypeIT: 'tagliente', properties: ['versatile_1d10'], propertiesIT: ['Versatile 1d10'], mastery: 'topple', masteryIT: 'Atterramento', weight: 4, value: 10, category: 'martial', source: 'PHB 2024' }),
  meleeWeapon({ id: 'flail', name: 'Flail', nameIT: 'Flagello', damageDice: '1d8', damageType: 'bludgeoning', damageTypeIT: 'contundente', properties: [], propertiesIT: [], mastery: 'sap', masteryIT: 'Sap', weight: 2, value: 10, category: 'martial', source: 'PHB 2024' }),
  meleeWeapon({ id: 'glaive', name: 'Glaive', nameIT: 'Falcione', damageDice: '1d10', damageType: 'slashing', damageTypeIT: 'tagliente', properties: ['heavy', 'reach', 'two-handed'], propertiesIT: ['Pesante', 'Portata', 'A due mani'], mastery: 'graze', masteryIT: 'Graze', weight: 6, value: 20, category: 'martial', source: 'PHB 2024' }),
  meleeWeapon({ id: 'greataxe', name: 'Greataxe', nameIT: 'Ascia Bipenne', damageDice: '1d12', damageType: 'slashing', damageTypeIT: 'tagliente', properties: ['heavy', 'two-handed'], propertiesIT: ['Pesante', 'A due mani'], mastery: 'cleave', masteryIT: 'Cleave', weight: 7, value: 30, category: 'martial', source: 'PHB 2024' }),
  meleeWeapon({ id: 'greatsword', name: 'Greatsword', nameIT: 'Spada a Due Mani', damageDice: '2d6', damageType: 'slashing', damageTypeIT: 'tagliente', properties: ['heavy', 'two-handed'], propertiesIT: ['Pesante', 'A due mani'], mastery: 'graze', masteryIT: 'Graze', weight: 6, value: 50, category: 'martial', source: 'PHB 2024' }),
  meleeWeapon({ id: 'halberd', name: 'Halberd', nameIT: 'Alabarda', damageDice: '1d10', damageType: 'slashing', damageTypeIT: 'tagliente', properties: ['heavy', 'reach', 'two-handed'], propertiesIT: ['Pesante', 'Portata', 'A due mani'], mastery: 'cleave', masteryIT: 'Cleave', weight: 6, value: 20, category: 'martial', source: 'PHB 2024' }),
  meleeWeapon({ id: 'lance', name: 'Lance', nameIT: 'Lancia da Cavalleria', damageDice: '1d10', damageType: 'piercing', damageTypeIT: 'perforante', properties: ['heavy', 'reach', 'two-handed', 'mounted_special'], propertiesIT: ['Pesante', 'Portata', 'A due mani (salvo in sella)'], mastery: 'topple', masteryIT: 'Atterramento', weight: 6, value: 10, category: 'martial', source: 'PHB 2024' }),
  meleeWeapon({ id: 'longsword', name: 'Longsword', nameIT: 'Spada Lunga', damageDice: '1d8', damageType: 'slashing', damageTypeIT: 'tagliente', properties: ['versatile_1d10'], propertiesIT: ['Versatile 1d10'], mastery: 'sap', masteryIT: 'Sap', weight: 3, value: 15, category: 'martial', source: 'PHB 2024' }),
  meleeWeapon({ id: 'maul', name: 'Maul', nameIT: 'Maglio', damageDice: '2d6', damageType: 'bludgeoning', damageTypeIT: 'contundente', properties: ['heavy', 'two-handed'], propertiesIT: ['Pesante', 'A due mani'], mastery: 'topple', masteryIT: 'Atterramento', weight: 10, value: 10, category: 'martial', source: 'PHB 2024' }),
  meleeWeapon({ id: 'morningstar', name: 'Morningstar', nameIT: 'Stella del Mattino', damageDice: '1d8', damageType: 'piercing', damageTypeIT: 'perforante', properties: [], propertiesIT: [], mastery: 'sap', masteryIT: 'Sap', weight: 4, value: 15, category: 'martial', source: 'PHB 2024' }),
  meleeWeapon({ id: 'pike', name: 'Pike', nameIT: 'Picca', damageDice: '1d10', damageType: 'piercing', damageTypeIT: 'perforante', properties: ['heavy', 'reach', 'two-handed'], propertiesIT: ['Pesante', 'Portata', 'A due mani'], mastery: 'push', masteryIT: 'Spinta', weight: 18, value: 5, category: 'martial', source: 'PHB 2024' }),
  meleeWeapon({ id: 'rapier', name: 'Rapier', nameIT: 'Stocco', damageDice: '1d8', damageType: 'piercing', damageTypeIT: 'perforante', properties: ['finesse'], propertiesIT: ['Accurata'], mastery: 'vex', masteryIT: 'Vex', weight: 2, value: 25, category: 'martial', source: 'PHB 2024' }),
  meleeWeapon({ id: 'scimitar', name: 'Scimitar', nameIT: 'Scimitarra', damageDice: '1d6', damageType: 'slashing', damageTypeIT: 'tagliente', properties: ['finesse', 'light'], propertiesIT: ['Accurata', 'Leggera'], mastery: 'nick', masteryIT: 'Nick', weight: 3, value: 25, category: 'martial', source: 'PHB 2024' }),
  meleeWeapon({ id: 'shortsword', name: 'Shortsword', nameIT: 'Spada Corta', damageDice: '1d6', damageType: 'piercing', damageTypeIT: 'perforante', properties: ['finesse', 'light'], propertiesIT: ['Accurata', 'Leggera'], mastery: 'vex', masteryIT: 'Vex', weight: 2, value: 10, category: 'martial', source: 'PHB 2024' }),
  meleeWeapon({ id: 'trident', name: 'Trident', nameIT: 'Tridente', damageDice: '1d8', damageType: 'piercing', damageTypeIT: 'perforante', properties: ['thrown', 'range_20_60', 'versatile_1d10'], propertiesIT: ['Da lancio', 'Gittata 6/18', 'Versatile 1d10'], mastery: 'topple', masteryIT: 'Atterramento', weight: 4, value: 5, category: 'martial', source: 'PHB 2024' }),
  meleeWeapon({ id: 'war-pick', name: 'War Pick', nameIT: 'Martello da Guerra a Punta', damageDice: '1d8', damageType: 'piercing', damageTypeIT: 'perforante', properties: ['versatile_1d10'], propertiesIT: ['Versatile 1d10'], mastery: 'sap', masteryIT: 'Sap', weight: 2, value: 5, category: 'martial', source: 'PHB 2024' }),
  meleeWeapon({ id: 'warhammer', name: 'Warhammer', nameIT: 'Martello da Guerra', damageDice: '1d8', damageType: 'bludgeoning', damageTypeIT: 'contundente', properties: ['versatile_1d10'], propertiesIT: ['Versatile 1d10'], mastery: 'push', masteryIT: 'Spinta', weight: 5, value: 15, category: 'martial', source: 'PHB 2024' }),
  meleeWeapon({ id: 'whip', name: 'Whip', nameIT: 'Frusta', damageDice: '1d4', damageType: 'slashing', damageTypeIT: 'tagliente', properties: ['finesse', 'reach'], propertiesIT: ['Accurata', 'Portata'], mastery: 'slow', masteryIT: 'Lenta', weight: 3, value: 2, category: 'martial', source: 'PHB 2024' }),
]

export const martialRangedWeapons: WeaponData[] = [
  rangedWeapon({ id: 'blowgun', name: 'Blowgun', nameIT: 'Cerbottana', damageDice: '1', damageType: 'piercing', damageTypeIT: 'perforante', properties: ['ammunition', 'range_25_100', 'loading'], propertiesIT: ['Munizioni', 'Gittata 7,5/30', 'Ricarica'], mastery: 'vex', masteryIT: 'Vex', weight: 1, value: 10, category: 'martial', source: 'PHB 2024' }),
  rangedWeapon({ id: 'hand-crossbow', name: 'Hand Crossbow', nameIT: 'Balestra a Mano', damageDice: '1d6', damageType: 'piercing', damageTypeIT: 'perforante', properties: ['ammunition', 'range_30_120', 'light', 'loading'], propertiesIT: ['Munizioni', 'Gittata 9/36', 'Leggera', 'Ricarica'], mastery: 'vex', masteryIT: 'Vex', weight: 3, value: 75, category: 'martial', source: 'PHB 2024' }),
  rangedWeapon({ id: 'heavy-crossbow', name: 'Heavy Crossbow', nameIT: 'Balestra Pesante', damageDice: '1d10', damageType: 'piercing', damageTypeIT: 'perforante', properties: ['ammunition', 'range_100_400', 'heavy', 'loading', 'two-handed'], propertiesIT: ['Munizioni', 'Gittata 30/120', 'Pesante', 'Ricarica', 'A due mani'], mastery: 'push', masteryIT: 'Spinta', weight: 18, value: 50, category: 'martial', source: 'PHB 2024' }),
  rangedWeapon({ id: 'longbow', name: 'Longbow', nameIT: 'Arco Lungo', damageDice: '1d8', damageType: 'piercing', damageTypeIT: 'perforante', properties: ['ammunition', 'range_150_600', 'heavy', 'two-handed'], propertiesIT: ['Munizioni', 'Gittata 45/180', 'Pesante', 'A due mani'], mastery: 'slow', masteryIT: 'Lenta', weight: 2, value: 50, category: 'martial', source: 'PHB 2024' }),
  rangedWeapon({ id: 'musket', name: 'Musket', nameIT: 'Moschetto', damageDice: '1d12', damageType: 'piercing', damageTypeIT: 'perforante', properties: ['ammunition', 'range_40_120', 'loading', 'two-handed'], propertiesIT: ['Munizioni', 'Gittata 12/36', 'Ricarica', 'A due mani'], mastery: 'slow', masteryIT: 'Lenta', weight: 10, value: 500, category: 'martial', source: 'PHB 2024' }),
  rangedWeapon({ id: 'pistol', name: 'Pistol', nameIT: 'Pistola', damageDice: '1d10', damageType: 'piercing', damageTypeIT: 'perforante', properties: ['ammunition', 'range_30_90', 'loading'], propertiesIT: ['Munizioni', 'Gittata 9/27', 'Ricarica'], mastery: 'vex', masteryIT: 'Vex', weight: 3, value: 250, category: 'martial', source: 'PHB 2024' }),
  rangedWeapon({ id: 'net', name: 'Net', nameIT: 'Rete', damageDice: '—', damageType: '', damageTypeIT: '', properties: ['special', 'thrown', 'range_5_15'], propertiesIT: ['Speciale', 'Da lancio', 'Gittata 1,5/4,5'], mastery: '—', masteryIT: '—', weight: 3, value: 1, category: 'martial', source: 'PHB 2014', isLegacy: true }),
]

export const weapons: WeaponData[] = [
  ...simpleMeleeWeapons,
  ...simpleRangedWeapons,
  ...martialMeleeWeapons,
  ...martialRangedWeapons,
]

export function getWeaponById(id: string): WeaponData | undefined {
  return weapons.find((weapon) => weapon.id === id)
}
