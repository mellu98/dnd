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
import type {
  ASIChoice,
  Character,
  CharacterAbilityScores,
  ClassFeatureChoiceSelection,
  SpeciesChoiceSelection,
  SkillName,
  Feature,
  BackgroundAbilityChoices,
} from '../types'
import type { EquipmentItem } from '../types/equipment'
import { loadStorage, saveStorage, generateId } from '../utils/storage'
import { computeMaxHp } from '../engine/hp-calculator'
import { aggregateBonuses } from '../engine/bonus-aggregator'
import { getClassById } from '../data/classes'
import { abilityModifier } from '../utils/modifiers'

// State
export interface CharacterState {
  character: Character | null
  creationStep: number // 0 = sheet view, 1-5 = creation steps
  savedCharacters: Character[]
  creationDraft: Partial<Character>
}

// Actions
export type ImageGenStatus = 'idle' | 'generating' | 'done' | 'failed'

export interface GenerationState {
  charId: string
  status: ImageGenStatus
}

type Action =
  | { type: 'SET_RACE'; raceId: string }
  | { type: 'SET_RACE_VARIANT'; raceVariantId: string | null }
  | { type: 'SET_SPECIES_CHOICE'; selection: SpeciesChoiceSelection }
  | { type: 'SET_CLASS'; classId: string; subclassId: string | null }
  | { type: 'SET_CLASS_FEATURE_CHOICE'; selection: ClassFeatureChoiceSelection }
  | { type: 'SET_BACKGROUND'; backgroundId: string }
  | { type: 'SET_BACKGROUND_ABILITY_CHOICES'; choices: BackgroundAbilityChoices | null }
  | { type: 'SET_ABILITY_SCORES'; scores: CharacterAbilityScores }
  | { type: 'SET_SKILL_PROFICIENCIES'; skills: SkillName[] }
  | {
      type: 'SET_DETAILS'
      name: string
      alignment: string
      personalityTraits: string
      ideals: string
      bonds: string
      flaws: string
    }
  | { type: 'TAKE_DAMAGE'; amount: number }
  | { type: 'HEAL'; amount: number }
  | { type: 'SET_TEMP_HP'; amount: number }
  | { type: 'SET_LEVEL'; level: number }
  | { type: 'UPDATE_EQUIPMENT'; equipment: string[] }
  | { type: 'UPDATE_NOTES'; notes: string }
  | { type: 'SET_EQUIPPED_ARMOR'; armorId: string | null }
  | { type: 'SET_EQUIPPED_SHIELD'; shieldId: string | null }
  | { type: 'ADD_EQUIPMENT_ITEM'; item: EquipmentItem }
  | { type: 'REMOVE_EQUIPMENT_ITEM'; itemId: string }
  | { type: 'TOGGLE_EQUIPMENT'; itemId: string }
  | { type: 'UPDATE_ITEM_AMMO'; itemId: string; amount: number }
  | { type: 'SET_KNOWN_SPELLS'; spellIds: string[] }
  | { type: 'TOGGLE_SPELL'; spellId: string }
  | { type: 'SET_PREPARED_SPELLS'; spellIds: string[] }
  | { type: 'TOGGLE_PREPARED_SPELL'; spellId: string }
  | { type: 'EXPEND_SPELL_SLOT'; level: number }
  | { type: 'RESTORE_SPELL_SLOT'; level: number }
  | { type: 'RESTORE_ALL_SPELL_SLOTS' }
  | { type: 'SET_ACTIVE_CONDITIONS'; conditions: string[] }
  | { type: 'SET_EXHAUSTION_LEVEL'; level: number }
  | { type: 'TOGGLE_INSPIRATION' }
  | { type: 'SET_INSPIRATION'; value: boolean }
  | { type: 'UPDATE_CURRENCY'; denomination: keyof Character['currency']; amount: number }
  | { type: 'SET_INITIATIVE_TRACKER'; entries: Character['initiativeTracker'] }
  | { type: 'SET_ACTIVE_INITIATIVE'; entryId: string | null }
  | { type: 'UPDATE_HP_MAX'; max: number }
  | { type: 'LOAD_CHARACTER'; character: Character }
  | { type: 'IMPORT_CHARACTERS'; characters: Character[]; activeCharacterId?: string | null }
  | { type: 'NEW_CHARACTER' }
  | { type: 'FINALIZE_CREATION' }
  | { type: 'DELETE_CHARACTER'; id: string }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'GO_HOME' }
  | { type: 'SET_CHARACTER_IMAGE'; id: string; imageUrl: string }
  | { type: 'SET_GENERATING_IMAGE'; charId: string }
  | { type: 'SAVE_ASI_CHOICE'; choice: ASIChoice }
  | { type: 'REMOVE_ASI_CHOICE'; level: number }
  | { type: 'ROLL_DEATH_SAVE'; result: 'success' | 'failure' }
  | { type: 'RESET_DEATH_SAVES' }
  | { type: 'STABILIZE' }
  | { type: 'SHORT_REST'; hitDiceToSpend?: number }
  | { type: 'LONG_REST' }
  | { type: 'SET_EXPERTISE_SKILLS'; skills: SkillName[] }

function initState(): CharacterState {
  const storage = loadStorage()
  const active = storage.activeCharacterId
    ? (storage.characters.find((c) => c.id === storage.activeCharacterId) ?? null)
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
  return features.filter((f) => {
    const key = `${f.name}-${f.level}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

function upsertSavedCharacter(savedCharacters: Character[], character: Character): Character[] {
  const index = savedCharacters.findIndex((saved) => saved.id === character.id)
  if (index === -1) return [...savedCharacters, character]

  const next = [...savedCharacters]
  next[index] = character
  return next
}

function withUpdatedCharacter(state: CharacterState, updater: (character: Character) => Character): CharacterState {
  if (!state.character) return state

  const updatedCharacter = updater(state.character)
  return {
    ...state,
    character: updatedCharacter,
    savedCharacters: upsertSavedCharacter(state.savedCharacters, updatedCharacter),
  }
}

function reducer(state: CharacterState, action: Action): CharacterState {
  switch (action.type) {
    case 'SET_RACE':
      return {
        ...state,
        creationDraft: {
          ...state.creationDraft,
          raceId: action.raceId,
          raceVariantId: null,
          speciesChoiceSelections: [],
        },
      }
    case 'SET_RACE_VARIANT':
      return {
        ...state,
        creationDraft: { ...state.creationDraft, raceVariantId: action.raceVariantId },
      }
    case 'SET_SPECIES_CHOICE': {
      const existingSelections = state.creationDraft.speciesChoiceSelections ?? []
      const filtered = existingSelections.filter((selection) => selection.groupId !== action.selection.groupId)
      return {
        ...state,
        creationDraft: {
          ...state.creationDraft,
          speciesChoiceSelections: [...filtered, action.selection],
        },
      }
    }
    case 'SET_CLASS': {
      const shouldResetClassChoices = state.creationDraft.classId !== action.classId
      return {
        ...state,
        creationDraft: {
          ...state.creationDraft,
          classId: action.classId,
          subclassId: action.subclassId,
          classFeatureChoices: shouldResetClassChoices ? [] : (state.creationDraft.classFeatureChoices ?? []),
        },
      }
    }
    case 'SET_CLASS_FEATURE_CHOICE': {
      const existingSelections = state.creationDraft.classFeatureChoices ?? []
      const filtered = existingSelections.filter((selection) => selection.groupId !== action.selection.groupId)
      return {
        ...state,
        creationDraft: {
          ...state.creationDraft,
          classFeatureChoices: [...filtered, action.selection],
        },
      }
    }
    case 'SET_BACKGROUND':
      return {
        ...state,
        creationDraft: {
          ...state.creationDraft,
          backgroundId: action.backgroundId,
          backgroundAbilityChoices: null,
        },
      }
    case 'SET_BACKGROUND_ABILITY_CHOICES':
      return {
        ...state,
        creationDraft: { ...state.creationDraft, backgroundAbilityChoices: action.choices },
      }
    case 'SET_ABILITY_SCORES':
      return {
        ...state,
        creationDraft: { ...state.creationDraft, abilityScores: action.scores },
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
      return withUpdatedCharacter(state, (character) => {
        const hp = { ...character.hp }
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
        return { ...character, hp, updatedAt: new Date().toISOString() }
      })
    }
    case 'HEAL': {
      return withUpdatedCharacter(state, (character) => {
        const hp = { ...character.hp, current: Math.min(character.hp.max, character.hp.current + action.amount) }
        return { ...character, hp, updatedAt: new Date().toISOString() }
      })
    }
    case 'SET_TEMP_HP': {
      return withUpdatedCharacter(state, (character) => {
        const hp = { ...character.hp, temporary: Math.max(character.hp.temporary, action.amount) }
        return { ...character, hp, updatedAt: new Date().toISOString() }
      })
    }
    case 'SET_LEVEL': {
      return withUpdatedCharacter(state, (character) => ({
        ...character,
        level: action.level,
        updatedAt: new Date().toISOString(),
      }))
    }
    case 'UPDATE_HP_MAX': {
      return withUpdatedCharacter(state, (character) => {
        const hp = { ...character.hp, max: action.max }
        hp.current = Math.min(hp.current, hp.max)
        return { ...character, hp, updatedAt: new Date().toISOString() }
      })
    }
    case 'UPDATE_EQUIPMENT': {
      // Legacy action: converts string[] to EquipmentItem[] for backward compat
      return withUpdatedCharacter(state, (character) => {
        const items = action.equipment.map((s, i) => ({
          id: `gear-legacy-${i}`,
          name: s,
          nameIT: s,
          category: 'gear' as const,
          quantity: 1,
          equipped: false,
        }))
        return { ...character, equipment: items, updatedAt: new Date().toISOString() }
      })
    }
    case 'UPDATE_NOTES': {
      return withUpdatedCharacter(state, (character) => ({
        ...character,
        notes: action.notes,
        updatedAt: new Date().toISOString(),
      }))
    }
    case 'SET_EQUIPPED_ARMOR': {
      return withUpdatedCharacter(state, (character) => ({
        ...character,
        equippedArmorId: action.armorId,
        updatedAt: new Date().toISOString(),
      }))
    }
    case 'SET_EQUIPPED_SHIELD': {
      return withUpdatedCharacter(state, (character) => ({
        ...character,
        equippedShieldId: action.shieldId,
        updatedAt: new Date().toISOString(),
      }))
    }
    case 'ADD_EQUIPMENT_ITEM': {
      return withUpdatedCharacter(state, (character) => ({
        ...character,
        equipment: [...character.equipment, action.item],
        updatedAt: new Date().toISOString(),
      }))
    }
    case 'REMOVE_EQUIPMENT_ITEM': {
      return withUpdatedCharacter(state, (character) => ({
        ...character,
        equipment: character.equipment.filter((item) => item.id !== action.itemId),
        updatedAt: new Date().toISOString(),
      }))
    }
    case 'TOGGLE_EQUIPMENT': {
      return withUpdatedCharacter(state, (character) => ({
        ...character,
        equipment: character.equipment.map((item) =>
          item.id === action.itemId ? { ...item, equipped: !item.equipped } : item,
        ),
        updatedAt: new Date().toISOString(),
      }))
    }
    case 'UPDATE_ITEM_AMMO': {
      return withUpdatedCharacter(state, (character) => ({
        ...character,
        equipment: character.equipment.map((item) =>
          item.id === action.itemId
            ? { ...item, ammoCount: Math.max(0, action.amount) }
            : item,
        ),
        updatedAt: new Date().toISOString(),
      }))
    }
    case 'SET_KNOWN_SPELLS': {
      return withUpdatedCharacter(state, (character) => ({
        ...character,
        knownSpells: action.spellIds,
        updatedAt: new Date().toISOString(),
      }))
    }
    case 'TOGGLE_SPELL': {
      return withUpdatedCharacter(state, (character) => {
        const spells = character.knownSpells.includes(action.spellId)
          ? character.knownSpells.filter((id) => id !== action.spellId)
          : [...character.knownSpells, action.spellId]

        return { ...character, knownSpells: spells, updatedAt: new Date().toISOString() }
      })
    }
    case 'SET_PREPARED_SPELLS': {
      return withUpdatedCharacter(state, (character) => ({
        ...character,
        preparedSpells: action.spellIds,
        updatedAt: new Date().toISOString(),
      }))
    }
    case 'TOGGLE_PREPARED_SPELL': {
      return withUpdatedCharacter(state, (character) => {
        const spells = character.preparedSpells.includes(action.spellId)
          ? character.preparedSpells.filter((id) => id !== action.spellId)
          : [...character.preparedSpells, action.spellId]

        return { ...character, preparedSpells: spells, updatedAt: new Date().toISOString() }
      })
    }
    case 'EXPEND_SPELL_SLOT': {
      return withUpdatedCharacter(state, (character) => {
        const current = character.expendedSpellSlots[action.level] ?? 0
        return {
          ...character,
          expendedSpellSlots: { ...character.expendedSpellSlots, [action.level]: current + 1 },
          updatedAt: new Date().toISOString(),
        }
      })
    }
    case 'RESTORE_SPELL_SLOT': {
      return withUpdatedCharacter(state, (character) => {
        const current = character.expendedSpellSlots[action.level] ?? 0
        const next = Math.max(0, current - 1)
        const updated = { ...character.expendedSpellSlots }
        if (next === 0) {
          delete updated[action.level]
        } else {
          updated[action.level] = next
        }

        return {
          ...character,
          expendedSpellSlots: updated,
          updatedAt: new Date().toISOString(),
        }
      })
    }
    case 'RESTORE_ALL_SPELL_SLOTS': {
      return withUpdatedCharacter(state, (character) => ({
        ...character,
        expendedSpellSlots: {},
        updatedAt: new Date().toISOString(),
      }))
    }
    case 'SET_ACTIVE_CONDITIONS': {
      return withUpdatedCharacter(state, (character) => ({
        ...character,
        activeConditions: action.conditions,
        updatedAt: new Date().toISOString(),
      }))
    }
    case 'SET_EXHAUSTION_LEVEL': {
      return withUpdatedCharacter(state, (character) => ({
        ...character,
        exhaustionLevel: Math.max(0, Math.min(6, action.level)),
        updatedAt: new Date().toISOString(),
      }))
    }
    case 'TOGGLE_INSPIRATION': {
      return withUpdatedCharacter(state, (character) => ({
        ...character,
        inspiration: !character.inspiration,
        updatedAt: new Date().toISOString(),
      }))
    }
    case 'SET_INSPIRATION': {
      return withUpdatedCharacter(state, (character) => ({
        ...character,
        inspiration: action.value,
        updatedAt: new Date().toISOString(),
      }))
    }
    case 'UPDATE_CURRENCY': {
      return withUpdatedCharacter(state, (character) => ({
        ...character,
        currency: {
          ...character.currency,
          [action.denomination]: Math.max(0, action.amount),
        },
        updatedAt: new Date().toISOString(),
      }))
    }
    case 'SET_INITIATIVE_TRACKER': {
      return withUpdatedCharacter(state, (character) => ({
        ...character,
        initiativeTracker: action.entries,
        activeInitiativeId:
          action.entries.some((entry) => entry.id === character.activeInitiativeId)
            ? character.activeInitiativeId
            : null,
        updatedAt: new Date().toISOString(),
      }))
    }
    case 'SET_ACTIVE_INITIATIVE': {
      return withUpdatedCharacter(state, (character) => ({
        ...character,
        activeInitiativeId: action.entryId,
        updatedAt: new Date().toISOString(),
      }))
    }
    case 'LOAD_CHARACTER':
      return { ...state, character: action.character, creationStep: 0 }
    case 'IMPORT_CHARACTERS': {
      if (action.characters.length === 0) return state

      const merged = [...state.savedCharacters]
      for (const importedCharacter of action.characters) {
        const existingIndex = merged.findIndex((saved) => saved.id === importedCharacter.id)
        if (existingIndex === -1) {
          merged.push(importedCharacter)
        } else {
          merged[existingIndex] = importedCharacter
        }
      }

      const nextActiveId = action.activeCharacterId
        ?? state.character?.id
        ?? action.characters[0]?.id
        ?? null

      const activeCharacter = nextActiveId
        ? (merged.find((saved) => saved.id === nextActiveId) ?? action.characters[0] ?? null)
        : null

      return {
        ...state,
        savedCharacters: merged,
        character: activeCharacter,
        creationStep: 0,
        creationDraft: {},
      }
    }
    case 'NEW_CHARACTER':
      return { ...state, character: null, creationStep: 1, creationDraft: {} }
    case 'FINALIZE_CREATION': {
      const draft = state.creationDraft
      const now = new Date().toISOString()
      const character: Character = {
        id: generateId(),
        name: draft.name || 'Senza Nome',
        raceId: draft.raceId || '',
        raceVariantId: draft.raceVariantId ?? null,
        speciesChoiceSelections: draft.speciesChoiceSelections ?? [],
        classId: draft.classId || '',
        subclassId: draft.subclassId ?? null,
        classFeatureChoices: draft.classFeatureChoices ?? [],
        backgroundId: draft.backgroundId || '',
        backgroundAbilityChoices: draft.backgroundAbilityChoices ?? null,
        level: 1,
        abilityScores: draft.abilityScores || { STR: 10, DEX: 10, CON: 10, INT: 10, WIS: 10, CHA: 10 },
        hp: { max: 0, current: 0, temporary: 0 },
        skillProficiencies: draft.skillProficiencies || [],
        chosenLanguages: [],
        alignment: draft.alignment || '',
        personalityTraits: draft.personalityTraits || '',
        ideals: draft.ideals || '',
        bonds: draft.bonds || '',
        flaws: draft.flaws || '',
        equipment: [],
        equippedArmorId: null,
        equippedShieldId: null,
        knownSpells: [],
        preparedSpells: [],
        expendedSpellSlots: {},
        asiChoices: [],
        deathSaves: { successes: 0, failures: 0 },
        activeConditions: [],
        exhaustionLevel: 0,
        inspiration: false,
        isStabilized: false,
        spentHitDice: 0,
        expertiseSkills: [],
        currency: { cp: 0, sp: 0, ep: 0, gp: 0, pp: 0 },
        initiativeTracker: [],
        activeInitiativeId: null,
        notes: '',
        createdAt: now,
        updatedAt: now,
        imageUrl: null,
      }
      const agg = aggregateBonuses({
        raceId: character.raceId,
        raceVariantId: character.raceVariantId ?? undefined,
        speciesChoiceSelections: character.speciesChoiceSelections,
        classId: character.classId,
        subclassId: character.subclassId ?? undefined,
        classFeatureChoices: character.classFeatureChoices,
        backgroundId: character.backgroundId,
        backgroundAbilityChoices: character.backgroundAbilityChoices,
      })
      let conScore = character.abilityScores.CON
      for (const b of agg.backgroundAbilityBonuses) {
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
      const saved = state.savedCharacters.filter((c) => c.id !== action.id)
      const char = state.character?.id === action.id ? null : state.character
      return { ...state, character: char, savedCharacters: saved }
    }
    case 'NEXT_STEP':
      return { ...state, creationStep: Math.min(state.creationStep + 1, 5) }
    case 'PREV_STEP':
      return { ...state, creationStep: Math.max(state.creationStep - 1, 1) }
    case 'GO_HOME':
      return {
        ...state,
        character: null,
        creationStep: 0,
        creationDraft: {},
        savedCharacters: state.character
          ? upsertSavedCharacter(state.savedCharacters, state.character)
          : state.savedCharacters,
      }
    case 'SET_CHARACTER_IMAGE': {
      return withUpdatedCharacter(state, (character) =>
        character.id !== action.id
          ? character
          : { ...character, imageUrl: action.imageUrl, updatedAt: new Date().toISOString() },
      )
    }
    case 'SET_GENERATING_IMAGE': {
      return state
    }
    case 'SAVE_ASI_CHOICE': {
      return withUpdatedCharacter(state, (character) => {
        const existing = character.asiChoices ?? []
        const filtered = existing.filter((choice) => choice.level !== action.choice.level)
        return {
          ...character,
          asiChoices: [...filtered, action.choice],
          updatedAt: new Date().toISOString(),
        }
      })
    }
    case 'REMOVE_ASI_CHOICE': {
      return withUpdatedCharacter(state, (character) => ({
        ...character,
        asiChoices: (character.asiChoices ?? []).filter((choice) => choice.level !== action.level),
        updatedAt: new Date().toISOString(),
      }))
    }
    // ═══ Death Saves ═══
    case 'ROLL_DEATH_SAVE': {
      return withUpdatedCharacter(state, (character) => {
        const deathSaves = { ...character.deathSaves }
        if (action.result === 'success') {
          deathSaves.successes = Math.min(3, deathSaves.successes + 1)
        } else {
          deathSaves.failures = Math.min(3, deathSaves.failures + 1)
        }

        return {
          ...character,
          deathSaves,
          isStabilized: deathSaves.successes >= 3,
          updatedAt: new Date().toISOString(),
        }
      })
    }
    case 'RESET_DEATH_SAVES': {
      return withUpdatedCharacter(state, (character) => ({
        ...character,
        deathSaves: { successes: 0, failures: 0 },
        isStabilized: false,
        updatedAt: new Date().toISOString(),
      }))
    }
    case 'STABILIZE': {
      return withUpdatedCharacter(state, (character) => ({
        ...character,
        isStabilized: true,
        updatedAt: new Date().toISOString(),
      }))
    }
    // ═══ Rest System ═══
    case 'SHORT_REST': {
      return withUpdatedCharacter(state, (character) => {
        const hitDiceSpent = action.hitDiceToSpend ?? 0
        const cls = getClassById(character.classId)
        const hitDieValue = cls ? parseInt(cls.hitDie.slice(1), 10) : 8
        const conMod = abilityModifier(character.abilityScores.CON)
        let newHp = character.hp.current
        let remainingDice = character.level - (character.spentHitDice ?? 0)

        if (hitDiceSpent > 0 && hitDiceSpent <= remainingDice) {
          const healAmount = hitDiceSpent * (Math.floor(hitDieValue / 2) + 1 + conMod)
          newHp = Math.min(character.hp.max, newHp + healAmount)
          remainingDice -= hitDiceSpent
        }

        return {
          ...character,
          hp: { ...character.hp, current: newHp },
          spentHitDice: character.level - remainingDice,
          expendedSpellSlots: character.classId === 'warlock' ? {} : character.expendedSpellSlots,
          updatedAt: new Date().toISOString(),
        }
      })
    }
    case 'LONG_REST': {
      return withUpdatedCharacter(state, (character) => {
        const cls = getClassById(character.classId)
        const conMod = abilityModifier(character.abilityScores.CON)
        const diceRecovered = Math.max(1, Math.floor(character.level / 2))
        const spentDice = character.spentHitDice ?? 0
        const remainingAfterRest = Math.min(character.level, spentDice - diceRecovered)
        const maxHp = computeMaxHp(cls?.hitDie ?? 'd8', conMod, character.level)

        return {
          ...character,
          hp: { max: maxHp, current: maxHp, temporary: 0 },
          expendedSpellSlots: {},
          spentHitDice: Math.max(0, remainingAfterRest),
          deathSaves: { successes: 0, failures: 0 },
          isStabilized: false,
          inspiration: character.raceId === 'human' ? true : character.inspiration,
          updatedAt: new Date().toISOString(),
        }
      })
    }
    // ═══ Expertise Skills ═══
    case 'SET_EXPERTISE_SKILLS': {
      return withUpdatedCharacter(state, (character) => ({
        ...character,
        expertiseSkills: action.skills,
        updatedAt: new Date().toISOString(),
      }))
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
      // State is the source of truth — write directly to avoid resurrecting deleted characters
      const updatedChars = saved.map((s) => {
        if (char && s.id === char.id) return char
        return s
      })

      if (char && !updatedChars.some((c) => c.id === char.id)) {
        updatedChars.push(char)
      }

      saveStorage({
        version: 10,
        characters: updatedChars,
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
    if (!char) return
    if (char.imageUrl) return
    if (!char.createdAt) return
    if (lastCreatedCharId.current === char.id) return

    const createdTime = new Date(char.createdAt).getTime()
    const now = Date.now()
    if (now - createdTime > 10_000) return

    lastCreatedCharId.current = char.id
    void (async () => {
      const { generateCharacterImage } = await import('../services/image-generator')
      const { getRaceById } = await import('../data/races')
      const { getClassById } = await import('../data/classes')

      const race = getRaceById(char.raceId)
      const cls = getClassById(char.classId)

      const imageUrl = await generateCharacterImage({
        raceName: race?.nameIT ?? char.raceId,
        className: cls?.nameIT ?? char.classId,
      })

      if (imageUrl) {
        dispatch({ type: 'SET_CHARACTER_IMAGE', id: char.id, imageUrl })
      }
    })()
  }, [state.character])

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
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
