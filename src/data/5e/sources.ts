/**
 * 5etools source book code mapping.
 * Maps 5etools source abbreviations to edition info and display names.
 */

export interface SourceInfo {
  code: string
  name: string
  edition: '2024' | '2014' | 'other'
}

export const sourceBookMap: Record<string, SourceInfo> = {
  // 2024 editions (One D&D)
  XPHB: { code: 'XPHB', name: "Player's Handbook 2024", edition: '2024' },
  XDMG: { code: 'XDMG', name: "Dungeon Master's Guide 2024", edition: '2024' },

  // 2014 editions (Classic)
  PHB: { code: 'PHB', name: "Player's Handbook 2014", edition: '2014' },
  DMG: { code: 'DMG', name: "Dungeon Master's Guide 2014", edition: '2014' },
  MM: { code: 'MM', name: 'Monster Manual 2014', edition: '2014' },

  // Supplement books (2014 unless reprinted)
  VGM: { code: 'VGM', name: "Volo's Guide to Monsters", edition: '2014' },
  MTF: { code: 'MTF', name: "Mordenkainen's Tome of Foes", edition: '2014' },
  ERLW: { code: 'ERLW', name: 'Eberron: Rising from the Last War', edition: '2014' },
  EFTLW: { code: 'EFTLW', name: 'Exploring Eberron (fan)', edition: '2014' },
  SCAG: { code: 'SCAG', name: "Sword Coast Adventurer's Guide", edition: '2014' },
  TCE: { code: 'TCE', name: "Tasha's Cauldron of Everything", edition: '2014' },
  XGE: { code: 'XGE', name: "Xanathar's Guide to Everything", edition: '2014' },
  GGR: { code: 'GGR', name: 'Guildmasters: Guide to Ravnica', edition: '2014' },
  MOT: { code: 'MOT', name: 'Mythic Odysseys of Theros', edition: '2014' },
  FTD: { code: 'FTD', name: 'Fizban: Treasury of Dragons', edition: '2014' },
  SCC: { code: 'SCC', name: 'Strixhaven: Curriculum of Chaos', edition: '2014' },
  VRGR: { code: 'VRGR', name: 'Van Richten: Guide to Ravenloft', edition: '2014' },
  AI: { code: 'AI', name: 'Acquisitions Incorporated', edition: '2014' },
  MPMM: { code: 'MPMM', name: "Mordenkainen Presents: Monsters of the Multiverse", edition: '2014' },
  HWCS: { code: 'HWCS', name: 'Humblewood: Campaign Setting', edition: '2014' },
  BMT: { code: 'BMT', name: 'Bigby Presents: Glory of the Giants', edition: '2014' },
  PaBMP: { code: 'PaBMP', name: 'Path of the Beast (fan)', edition: '2014' },

  // Other / adventure modules
  CoS: { code: 'CoS', name: 'Curse of Strahd', edition: '2014' },
  LMOP: { code: 'LMOP', name: 'Lost Mine of Phandelver', edition: '2014' },
  ToA: { code: 'ToA', name: 'Tomb of Annihilation', edition: '2014' },
  SKT: { code: 'SKT', name: 'Storm King: Thunder', edition: '2014' },
  OotA: { code: 'OotA', name: 'Out of the Abyss', edition: '2014' },
  PotA: { code: 'PotA', name: 'Princes of the Apocalypse', edition: '2014' },
  HAT: { code: 'HAT', name: 'Honor Among Thieves', edition: 'other' },
  DIT: { code: 'DIT', name: 'Dragonlance: Shadows of the Dragon Queen', edition: '2024' },
  VeOR: { code: 'VeOR', name: 'Vecna: Eve of Ruin', edition: '2024' },

  // Homebrew / other
  UA: { code: 'UA', name: 'Unearthed Arcana', edition: 'other' },
  HB: { code: 'HB', name: 'Homebrew', edition: 'other' },
}

export function getSourceInfo(code: string): SourceInfo {
  return sourceBookMap[code] ?? { code, name: code, edition: 'other' }
}

export function is2024Source(source: string): boolean {
  return getSourceInfo(source).edition === '2024'
}

export function is2014Source(source: string): boolean {
  return getSourceInfo(source).edition === '2014'
}
