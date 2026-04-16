/**
 * Loot loader — loads treasure/loot tables from 5etools.
 * Provides functions to roll random treasure based on CR.
 */

interface LootIndividual {
  cr: string
  d100min: number
  d100max: number
  cp?: string
  sp?: string
  ep?: string
  gp?: string
  pp?: string
}

interface LootHoard {
  cr: string
  coins?: Record<string, string>
  gemTables?: unknown[]
  artTables?: unknown[]
  magicTables?: Array<{ d100: Record<string, string>; name: string }>
}

let _lootData: {
  individual: LootIndividual[]
  hoard: LootHoard[]
} | null = null

function rollDice(diceStr: string): number {
  const match = diceStr.match(/(\d+)d(\d+)([+-]\d+)?/)
  if (!match) return 0
  const [, count, sides, modifier] = match
  let total = 0
  for (let i = 0; i < Number(count); i++) {
    total += Math.floor(Math.random() * Number(sides)) + 1
  }
  if (modifier) total += Number(modifier)
  return total
}

async function loadLoot(): Promise<void> {
  if (_lootData) return

  const raw = await import('./raw/loot.json')
  const data = (raw as { default: { individual: LootIndividual[]; hoard: LootHoard[] } }).default

  _lootData = {
    individual: data.individual ?? [],
    hoard: data.hoard ?? [],
  }
}

/**
 * Roll individual treasure for a monster (coins only).
 * Returns amounts in copper pieces.
 */
export async function rollIndividualTreasure(cr: number): Promise<{
  cp: number
  sp: number
  ep: number
  gp: number
  pp: number
}> {
  await loadLoot()
  if (!_lootData) return { cp: 0, sp: 0, ep: 0, gp: 0, pp: 0 }

  const crStr = cr < 1 ? '0-2' : cr < 5 ? '3-6' : cr < 11 ? '7-12' : cr < 17 ? '13-18' : '19+'
  const table = _lootData.individual.find((t) => t.cr === crStr)
  if (!table) return { cp: 0, sp: 0, ep: 0, gp: 0, pp: 0 }

  const roll = Math.floor(Math.random() * 100) + 1
  if (roll < table.d100min || roll > table.d100max) {
    return { cp: 0, sp: 0, ep: 0, gp: 0, pp: 0 }
  }

  return {
    cp: table.cp ? rollDice(table.cp) : 0,
    sp: table.sp ? rollDice(table.sp) : 0,
    ep: table.ep ? rollDice(table.ep) : 0,
    gp: table.gp ? rollDice(table.gp) : 0,
    pp: table.pp ? rollDice(table.pp) : 0,
  }
}

/**
 * Roll a treasure hoard (coins + gems + art + magic items).
 * Returns a summary of what was rolled.
 */
export async function rollTreasureHoard(crRange: string): Promise<{
  coins: Record<string, number>
  gemCount: number
  artCount: number
  magicItemCount: number
}> {
  await loadLoot()
  if (!_lootData) return { coins: {}, gemCount: 0, artCount: 0, magicItemCount: 0 }

  const table = _lootData.hoard.find((t) => t.cr === crRange)
  if (!table) return { coins: {}, gemCount: 0, artCount: 0, magicItemCount: 0 }

  const coins: Record<string, number> = {}
  if (table.coins) {
    for (const [type, diceStr] of Object.entries(table.coins)) {
      coins[type] = rollDice(diceStr)
    }
  }

  return {
    coins,
    gemCount: table.gemTables ? 1 : 0,
    artCount: table.artTables ? 1 : 0,
    magicItemCount: table.magicTables ? 1 : 0,
  }
}
