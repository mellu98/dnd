import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useRef,
  useCallback,
  type ReactNode,
  type Dispatch,
} from 'react'
import type { AbilityScoreBonus, Character, CharacterAbilityScores, SkillName, Feature } from '../types'
import { loadStorage, saveStorage, generateId } from '../utils/storage'
import { computeMaxHp } from '../engine/hp-calculator'
import { aggregateBonuses } from '../engine/bonus-aggregator'
import { abilityModifier } from '../utils/modifiers'

// State
export interface CharacterState {
  character: Character | null
  creationStep: number // 0 = sheet view, 1-5 = creation steps
  savedCharacters: Character[]
  creationDraft: Partial<Character>
}

// Actions
// Image generation status
export type ImageGenStatus = 'idle' | 'generating' | 'done' | 'failed'

export interface GenerationState {
  charId: string
  status: ImageGenStatus
}

type Action =
  | { type: 'SET_RACE'; raceId: string; subraceId: string | null }
  | { type: 'SET_CLASS'; classId: string; subclassId: string | null }
  | { type: 'SET_BACKGROUND'; backgroundId: string }
  | { type: 'SET_ABILITY_SCORES'; scores: CharacterAbilityScores }
  | { type: 'SET_CHOSEN_ABILITY_BONUSES'; bonuses: AbilityScoreBonus[] }
  | { type: 'SET_SKILL_PROFICIENCIES'; skills: SkillName[] }
  | { type: 'SET_DETAILS'; name: string; alignment: string; personalityTraits: string; ideals: string; bonds: string; flaws: string }
  | { type: 'TAKE_DAMAGE'; amount: number }
  | { type: 'HEAL'; amount: number }
  | { type: 'SET_TEMP_HP'; amount: number }
  | { type: 'SET_LEVEL'; level: number }
  | { type: 'UPDATE_EQUIPMENT'; equipment: string[] }
  | { type: 'UPDATE_NOTES'; notes: string }
  | { type: 'UPDATE_HP_MAX'; max: number }
  | { type: 'LOAD_CHARACTER'; character: Character }
  | { type: 'NEW_CHARACTER' }
  | { type: 'FINALIZE_CREATION' }
  | { type: 'DELETE_CHARACTER'; id: string }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'GO_HOME' }
  | { type: 'SET_CHARACTER_IMAGE'; id: string; imageUrl: string }
  | { type: 'SET_GENERATING_IMAGE'; charId: string }

function initState(): CharacterState {
  const storage = loadStorage()
  const active = storage.activeCharacterId
    ? storage.characters.find(c => c.id === storage.activeCharacterId) ?? null
    : null
  return {
    character: active,
    creationStep: 0,
    savedCharacters: storage.characters,
    creationDraft: {},
  }
}

function deduplicateFeatures(features: Feature[]): Feature[] {
  const seen = new Set<string>()
  return features.filter(f => {
    const key = `${f.name}-${f.level}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

function reducer(state: CharacterState, action: Action): CharacterState {
  switch (action.type) {
    case 'SET_RACE':
      return {
        ...state,
        creationDraft: { ...state.creationDraft, raceId: action.raceId, subraceId: action.subraceId },
      }
    case 'SET_CLASS':
      return {
        ...state,
        creationDraft: { ...state.creationDraft, classId: action.classId, subclassId: action.subclassId },
      }
    case 'SET_BACKGROUND':
      return {
        ...state,
        creationDraft: { ...state.creationDraft, backgroundId: action.backgroundId },
      }
    case 'SET_ABILITY_SCORES':
      return {
        ...state,
        creationDraft: { ...state.creationDraft, abilityScores: action.scores },
      }
    case 'SET_CHOSEN_ABILITY_BONUSES':
      return {
        ...state,
        creationDraft: { ...state.creationDraft, chosenAbilityBonuses: action.bonuses },
      }
    case 'SET_SKILL_PROFICIENCIES':
      return {
        ...state,
        creationDraft: { ...state.creationDraft, skillProficiencies: action.skills },
      }
    case 'SET_DETAILS':
      return {
        ...state,
        creationDraft: {
          ...state.creationDraft,
          name: action.name,
          alignment: action.alignment,
          personalityTraits: action.personalityTraits,
          ideals: action.ideals,
          bonds: action.bonds,
          flaws: action.flaws,
        },
      }
    case 'TAKE_DAMAGE': {
      if (!state.character) return state
      const hp = { ...state.character.hp }
      let remaining = action.amount
      if (hp.temporary > 0) {
        if (remaining <= hp.temporary) {
          hp.temporary -= remaining
          remaining = 0
        } else {
          remaining -= hp.temporary
          hp.temporary = 0
        }
      }
      hp.current = Math.max(0, hp.current - remaining)
      return { ...state, character: { ...state.character, hp, updatedAt: new Date().toISOString() } }
    }
    case 'HEAL': {
      if (!state.character) return state
      const hp = { ...state.character.hp }
      hp.current = Math.min(hp.max, hp.current + action.amount)
      return { ...state, character: { ...state.character, hp, updatedAt: new Date().toISOString() } }
    }
    case 'SET_TEMP_HP': {
      if (!state.character) return state
      const hp = { ...state.character.hp }
      hp.temporary = Math.max(hp.temporary, action.amount)
      return { ...state, character: { ...state.character, hp, updatedAt: new Date().toISOString() } }
    }
    case 'SET_LEVEL': {
      if (!state.character) return state
      return { ...state, character: { ...state.character, level: action.level, updatedAt: new Date().toISOString() } }
    }
    case 'UPDATE_HP_MAX': {
      if (!state.character) return state
      const hp = { ...state.character.hp, max: action.max }
      hp.current = Math.min(hp.current, hp.max)
      return { ...state, character: { ...state.character, hp, updatedAt: new Date().toISOString() } }
    }
    case 'UPDATE_EQUIPMENT': {
      if (!state.character) return state
      return { ...state, character: { ...state.character, equipment: action.equipment, updatedAt: new Date().toISOString() } }
    }
    case 'UPDATE_NOTES': {
      if (!state.character) return state
      return { ...state, character: { ...state.character, notes: action.notes, updatedAt: new Date().toISOString() } }
    }
    case 'LOAD_CHARACTER':
      return { ...state, character: action.character, creationStep: 0 }
    case 'NEW_CHARACTER':
      return { ...state, character: null, creationStep: 1, creationDraft: {} }
    case 'FINALIZE_CREATION': {
      const draft = state.creationDraft
      const now = new Date().toISOString()
      const character: Character = {
        id: generateId(),
        name: draft.name || 'Senza Nome',
        raceId: draft.raceId || '',
        subraceId: draft.subraceId ?? null,
        classId: draft.classId || '',
        subclassId: draft.subclassId ?? null,
        backgroundId: draft.backgroundId || '',
        level: 1,
        abilityScores: draft.abilityScores || { STR: 10, DEX: 10, CON: 10, INT: 10, WIS: 10, CHA: 10 },
        hp: { max: 0, current: 0, temporary: 0 },
        skillProficiencies: draft.skillProficiencies || [],
        chosenLanguages: [],
        chosenAbilityBonuses: draft.chosenAbilityBonuses || [],
        alignment: draft.alignment || '',
        personalityTraits: draft.personalityTraits || '',
        ideals: draft.ideals || '',
        bonds: draft.bonds || '',
        flaws: draft.flaws || '',
        equipment: [],
        notes: '',
        createdAt: now,
        updatedAt: now,
        imageUrl: null,
      }
      const agg = aggregateBonuses({
        raceId: character.raceId,
        subraceId: character.subraceId ?? undefined,
        classId: character.classId,
        subclassId: character.subclassId ?? undefined,
        chosenAbilityBonuses: character.chosenAbilityBonuses,
      })
      let conScore = character.abilityScores.CON
      for (const b of agg.abilityBonuses) {
        if (b.ability === 'CON') conScore += b.value
      }
      const conMod = abilityModifier(conScore)
      if (agg.hitDie) {
        const maxHp = computeMaxHp(agg.hitDie, conMod, 1)
        character.hp = { max: maxHp, current: maxHp, temporary: 0 }
      }
      // Deduplicate features in aggregated bonuses before saving
      agg.features = deduplicateFeatures(agg.features)
      const saved = [...state.savedCharacters, character]
      return { ...state, character, creationStep: 0, savedCharacters: saved, creationDraft: {} }
    }
    case 'DELETE_CHARACTER': {
      const saved = state.savedCharacters.filter(c => c.id !== action.id)
      const char = state.character?.id === action.id ? null : state.character
      return { ...state, character: char, savedCharacters: saved }
    }
    case 'NEXT_STEP':
      return { ...state, creationStep: Math.min(state.creationStep + 1, 5) }
    case 'PREV_STEP':
      return { ...state, creationStep: Math.max(state.creationStep - 1, 1) }
    case 'GO_HOME':
      return { ...state, character: null, creationStep: 0, creationDraft: {} }
    case 'SET_CHARACTER_IMAGE': {
      if (!state.character || state.character.id !== action.id) return state
      const updated = { ...state.character, imageUrl: action.imageUrl }
      return { ...state, character: updated }
    }
    case 'SET_GENERATING_IMAGE': {
      return state
    }
    default:
      return state
  }
}

// Split contexts to prevent over-rendering
const StateContext = createContext<CharacterState | null>(null)
const DispatchContext = createContext<Dispatch<Action> | null>(null)

export function CharacterProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, initState)

  // Debounced auto-save to localStorage
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const debouncedSave = useCallback((char: Character | null, saved: Character[]) => {
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current)
    saveTimerRef.current = setTimeout(() => {
      const storage = loadStorage()
      const updatedChars = [...storage.characters]

      if (char) {
        const idx = updatedChars.findIndex(c => c.id === char.id)
        if (idx >= 0) {
          updatedChars[idx] = char
        } else {
          updatedChars.push(char)
        }
      }

      saveStorage({
        version: 1,
        characters: saved.length > 0 ? saved : updatedChars,
        activeCharacterId: char?.id ?? null,
      })
    }, 500)
  }, [])

  useEffect(() => {
    debouncedSave(state.character, state.savedCharacters)
    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current)
    }
  }, [state.character, state.savedCharacters, debouncedSave])

  // Generate character image after creation (fire-and-forget, non-blocking)
  const lastCreatedCharId = useRef<string | null>(null)
  useEffect(() => {
    const char = state.character
    if (!char || char.creationStep !== undefined) return // skip non-characters
    if (char.imageUrl) return // already has an image
    if (!char.createdAt) return // not fully created yet
    if (lastCreatedCharId.current === char.id) return // already attempted

    const createdTime = new Date(char.createdAt).getTime()
    const now = Date.now()
    if (now - createdTime > 10_000) return

    lastCreatedCharId.current = char.id

    ;(async () => {
      const { generateCharacterImage } = await import('../services/image-generator')
      const { getRaceById, getSubraceById } = await import('../data/races')
      const { getClassById } = await import('../data/classes')

      const race = getRaceById(char.raceId)
      const subrace = char.subraceId && race
        ? getSubraceById(char.raceId, char.subraceId)
        : null
      const cls = getClassById(char.classId)

      const imageUrl = await generateCharacterImage({
        raceName: race?.nameIT ?? char.raceId,
        subraceName: subrace?.nameIT,
        className: cls?.nameIT ?? char.classId,
      })

      if (imageUrl) {
        dispatch({ type: 'SET_CHARACTER_IMAGE', id: char.id, imageUrl })
      }
    })()
  }, [state.character])

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export function useCharacterContext() {
  const state = useContext(StateContext)
  const dispatch = useContext(DispatchContext)
  if (!state || !dispatch) throw new Error('useCharacterContext must be used within CharacterProvider')
  return { state, dispatch }
}

export function useCharacterState() {
  const state = useContext(StateContext)
  if (!state) throw new Error('useCharacterState must be used within CharacterProvider')
  return state
}

export function useCharacterDispatch() {
  const dispatch = useContext(DispatchContext)
  if (!dispatch) throw new Error('useCharacterDispatch must be used within CharacterProvider')
  return dispatch
}
