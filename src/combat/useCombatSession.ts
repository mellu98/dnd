import { useCallback, useEffect, useRef } from 'react'
import { useCharacterContext } from '../context/CharacterContext'
import { useCharacter } from '../hooks/useCharacter'
import type { CombatSession, CharacterSummary, CombatInitiativeEntry, DiceRoll } from './types'
import { WebRtcManager } from './webrtc-manager'
import { SignalingClient } from './signaling-client'
import { generateId } from '../utils/storage'

function buildSession(
  overrides: Partial<CombatSession> & { role: CombatSession['role']; sessionCode: string; myPeerId: string },
): CombatSession {
  return {
    role: overrides.role,
    sessionCode: overrides.sessionCode,
    myPeerId: overrides.myPeerId,
    players: overrides.players ?? new Map(),
    initiative: overrides.initiative ?? [],
    activeInitiativeId: overrides.activeInitiativeId ?? null,
    round: overrides.round ?? 1,
    myUpdates: overrides.myUpdates ?? null,
    diceRolls: overrides.diceRolls ?? [],
    status: overrides.status ?? 'connecting',
  }
}

/**
 * React hook that manages the full Combat Hub session lifecycle.
 * Dispatches to CharacterContext so App.tsx can navigate to CombatHub.
 */
export function useCombatSession(): {
  session: CombatSession | null
  createSession: () => Promise<string>
  joinSession: (code: string) => Promise<void>
  leaveSession: () => void
  sendCharacterSummary: (summary: CharacterSummary) => void
  sendHpUpdate: (playerId: string, currentHp: number, temporaryHp: number) => void
  sendConditionsUpdate: (playerId: string, conditions: string[], exhaustion: number) => void
  sendDeathSavesUpdate: (
    playerId: string,
    data: { successes: number; failures: number; stabilized: boolean },
  ) => void
  sendInitiativeUpdate: (
    entries: CombatInitiativeEntry[],
    activeId: string | null,
    round: number,
  ) => void
  sendDiceRoll: (roll: DiceRoll) => void
  advanceTurn: () => void
} {
  const { state, dispatch } = useCharacterContext()
  const { calculatedStats } = useCharacter()
  const managerRef = useRef<WebRtcManager | null>(null)
  const signalingRef = useRef<SignalingClient | null>(null)

  const session = state.combatSession

  // ─── Create session (DM) ───────────────────────────────────

  const createSession = useCallback(async (): Promise<string> => {
    const signaling = new SignalingClient()
    signalingRef.current = signaling
    const myPeerId = generateId()

    const { code } = await signaling.createRoom(myPeerId)

    const manager = new WebRtcManager(code, myPeerId, signaling)
    managerRef.current = manager

    dispatch({
      type: 'SET_COMBAT_SESSION',
      session: buildSession({ role: 'dm', sessionCode: code, myPeerId, status: 'active' }),
    })

    // Listen for incoming messages from players
    manager.onMessage((from, data) => {
      dispatch({
        type: 'SET_COMBAT_SESSION',
        session: null, // will be replaced below
      })

      const prevState = state.combatSession
      if (!prevState) return

      switch (data.type) {
        case 'character_summary': {
          const players = new Map(prevState.players)
          players.set(from, data.summary)
          dispatch({
            type: 'SET_COMBAT_SESSION',
            session: { ...prevState, players },
          })
          break
        }
        case 'dice_roll': {
          dispatch({
            type: 'SET_COMBAT_SESSION',
            session: { ...prevState, diceRolls: [...prevState.diceRolls, data.roll] },
          })
          break
        }
      }
    })

    manager.onPeerDisconnected((peerId) => {
      const prev = state.combatSession
      if (!prev) return
      const players = new Map(prev.players)
      players.delete(peerId)
      dispatch({
        type: 'SET_COMBAT_SESSION',
        session: { ...prev, players },
      })
    })

    return code
  }, [dispatch, state.combatSession])

  // ─── Join session (Player) ─────────────────────────────────

  const joinSession = useCallback(
    async (code: string): Promise<void> => {
      const signaling = new SignalingClient()
      signalingRef.current = signaling
      const myPeerId = generateId()

      const manager = new WebRtcManager(code, myPeerId, signaling)
      managerRef.current = manager

      dispatch({
        type: 'SET_COMBAT_SESSION',
        session: buildSession({
          role: 'player',
          sessionCode: code,
          myPeerId,
          status: 'connecting',
        }),
      })

      // Connect to host with 15s timeout
      const timeout = new Promise<void>((_, reject) =>
        setTimeout(() => reject(new Error('Timeout di connessione. Verifica il codice e riprova.')), 15_000),
      )
      await Promise.race([manager.joinAsPlayer(), timeout])

      dispatch({
        type: 'SET_COMBAT_SESSION',
        session: buildSession({
          role: 'player',
          sessionCode: code,
          myPeerId,
          status: 'active',
        }),
      })

      // Automatically send character summary to DM
      if (calculatedStats && state.character) {
        const cls = await import('../data/classes').then((m) => m.getClassById(state.character!.classId))
        const race = await import('../data/races').then((m) => m.getRaceById(state.character!.raceId))

        const summary: CharacterSummary = {
          playerId: myPeerId,
          characterId: state.character.id,
          name: state.character.name,
          classIT: cls?.nameIT ?? state.character.classId,
          speciesIT: race?.nameIT ?? state.character.raceId,
          level: state.character.level,
          armorClass: calculatedStats.armorClass,
          maxHp: calculatedStats.hp.max,
          currentHp: calculatedStats.hp.current,
          temporaryHp: calculatedStats.hp.temporary,
          initiativeBonus: calculatedStats.initiative,
          speed: calculatedStats.speed,
          deathSaves: state.character.deathSaves,
          activeConditions: state.character.activeConditions,
          exhaustionLevel: state.character.exhaustionLevel,
          inspiration: state.character.inspiration,
          hitDie: cls?.hitDie ?? 'd8',
        }

        manager.sendToHost({ type: 'character_summary', summary })
      }

      // Listen for messages from DM
      manager.onMessage((_from, data) => {
        const prev = state.combatSession
        if (!prev) return

        switch (data.type) {
          case 'hp_update': {
            dispatch({
              type: 'SET_COMBAT_SESSION',
              session: {
                ...prev,
                myUpdates: {
                  ...(prev.myUpdates ?? {}),
                  currentHp: data.currentHp,
                  temporaryHp: data.temporaryHp,
                },
              },
            })
            break
          }
          case 'conditions_update': {
            dispatch({
              type: 'SET_COMBAT_SESSION',
              session: {
                ...prev,
                myUpdates: {
                  ...(prev.myUpdates ?? {}),
                  activeConditions: data.conditions,
                  exhaustionLevel: data.exhaustion,
                },
              },
            })
            break
          }
          case 'death_saves_update': {
            dispatch({
              type: 'SET_COMBAT_SESSION',
              session: {
                ...prev,
                myUpdates: {
                  ...(prev.myUpdates ?? {}),
                  deathSaves: data.data,
                  isStabilized: data.data.stabilized,
                },
              },
            })
            break
          }
          case 'initiative_update': {
            dispatch({
              type: 'SET_COMBAT_SESSION',
              session: {
                ...prev,
                initiative: data.entries,
                activeInitiativeId: data.activeId,
                round: data.round,
              },
            })
            break
          }
          case 'session_end': {
            dispatch({
              type: 'SET_COMBAT_SESSION',
              session: { ...prev, status: 'ended' },
            })
            break
          }
        }
      })
    },
    [dispatch, calculatedStats, state.character, state.combatSession],
  )

  // ─── Leave session ─────────────────────────────────────────

  const leaveSession = useCallback(() => {
    managerRef.current?.close()
    managerRef.current = null
    signalingRef.current = null
    dispatch({ type: 'SET_COMBAT_SESSION', session: null })
  }, [dispatch])

  // ─── DM actions ────────────────────────────────────────────

  const sendHpUpdate = useCallback(
    (playerId: string, currentHp: number, temporaryHp: number) => {
      managerRef.current?.broadcast({
        type: 'hp_update',
        playerId,
        currentHp,
        temporaryHp,
      })
    },
    [],
  )

  const sendConditionsUpdate = useCallback(
    (playerId: string, conditions: string[], exhaustion: number) => {
      managerRef.current?.broadcast({
        type: 'conditions_update',
        playerId,
        conditions,
        exhaustion,
      })
    },
    [],
  )

  const sendDeathSavesUpdate = useCallback(
    (playerId: string, data: { successes: number; failures: number; stabilized: boolean }) => {
      managerRef.current?.broadcast({
        type: 'death_saves_update',
        playerId,
        data,
      })
    },
    [],
  )

  const sendInitiativeUpdate = useCallback(
    (entries: CombatInitiativeEntry[], activeId: string | null, round: number) => {
      managerRef.current?.broadcast({
        type: 'initiative_update',
        entries,
        activeId,
        round,
      })
      if (session) {
        dispatch({
          type: 'SET_COMBAT_SESSION',
          session: { ...session, initiative: entries, activeInitiativeId: activeId, round },
        })
      }
    },
    [dispatch, session],
  )

  const sendDiceRoll = useCallback(
    (roll: DiceRoll) => {
      managerRef.current?.sendToHost({ type: 'dice_roll', roll })
      if (session) {
        dispatch({
          type: 'SET_COMBAT_SESSION',
          session: { ...session, diceRolls: [...session.diceRolls, roll] },
        })
      }
    },
    [dispatch, session],
  )

  const advanceTurn = useCallback(() => {
    if (!session || session.initiative.length === 0) return
    const entries = session.initiative
    const currentIdx = entries.findIndex((e) => e.id === session.activeInitiativeId)
    const nextIdx = currentIdx === -1 ? 0 : (currentIdx + 1) % entries.length
    const nextActiveId = entries[nextIdx].id
    const round = nextIdx === 0 ? session.round + 1 : session.round

    managerRef.current?.broadcast({
      type: 'initiative_update',
      entries,
      activeId: nextActiveId,
      round,
    })

    dispatch({
      type: 'SET_COMBAT_SESSION',
      session: { ...session, activeInitiativeId: nextActiveId, round },
    })
  }, [dispatch, session])

  // ─── Cleanup on unmount ────────────────────────────────────

  useEffect(() => {
    return () => {
      managerRef.current?.close()
    }
  }, [])

  return {
    session,
    createSession,
    joinSession,
    leaveSession,
    sendHpUpdate,
    sendConditionsUpdate,
    sendDeathSavesUpdate,
    sendInitiativeUpdate,
    sendDiceRoll,
    advanceTurn,
    sendCharacterSummary: () => {}, // no-op for now, handled in joinSession
  }
}
