/**
 * Combat Hub — WebRTC real-time combat sync types.
 *
 * Star topology: DM is the hub, players are spokes.
 * No central server after signaling handshake.
 */

/** Role of the current user in a combat session */
export type CombatRole = 'dm' | 'player'

/** Minimal character summary sent to DM on join */
export interface CharacterSummary {
  playerId: string
  characterId: string
  name: string
  classIT: string
  speciesIT: string
  level: number
  armorClass: number
  maxHp: number
  currentHp: number
  temporaryHp: number
  initiativeBonus: number
  speed: number
  deathSaves: { successes: number; failures: number }
  activeConditions: string[]
  exhaustionLevel: number
  inspiration: boolean
  hitDie: string
}

/** A dice roll result sent from player to DM */
export interface DiceRoll {
  playerId: string
  playerName: string
  diceNotation: string // e.g. "d20", "2d6", "1d8+3"
  results: number[]
  total: number
  label: string // e.g. "Tiro per colpire", "Danno", "Iniziativa"
  timestamp: number
}

/** Full initiative entry */
export interface CombatInitiativeEntry {
  id: string
  name: string
  playerId: string | null // null = NPC/monster
  initiative: number
  notes: string
}

/** Combat message types exchanged over WebRTC data channels */
export type CombatMessage =
  | { type: 'character_summary'; summary: CharacterSummary }
  | { type: 'hp_update'; playerId: string; currentHp: number; temporaryHp: number }
  | { type: 'conditions_update'; playerId: string; conditions: string[]; exhaustion: number }
  | { type: 'death_saves_update'; playerId: string; data: { successes: number; failures: number; stabilized: boolean } }
  | { type: 'initiative_update'; entries: CombatInitiativeEntry[]; activeId: string | null; round: number }
  | { type: 'dice_roll'; roll: DiceRoll }
  | { type: 'session_end' }

/** Session state stored in React context */
export interface CombatSession {
  role: CombatRole
  sessionCode: string
  myPeerId: string
  /** DM only: summaries from connected players */
  players: Map<string, CharacterSummary>
  initiative: CombatInitiativeEntry[]
  activeInitiativeId: string | null
  round: number
  /** Player only: updates pushed by DM */
  myUpdates: {
    currentHp?: number
    temporaryHp?: number
    activeConditions?: string[]
    exhaustionLevel?: number
    deathSaves?: { successes: number; failures: number }
    isStabilized?: boolean
  } | null
  /** Dice rolls visible to this peer */
  diceRolls: DiceRoll[]
  status: 'connecting' | 'active' | 'ended'
}
