import { useCharacterContext } from '../context/CharacterContext'

export function useHpTracker() {
  const { state, dispatch } = useCharacterContext()
  const hp = state.character?.hp ?? { max: 0, current: 0, temporary: 0 }

  return {
    hp,
    takeDamage: (amount: number) => dispatch({ type: 'TAKE_DAMAGE', amount }),
    heal: (amount: number) => dispatch({ type: 'HEAL', amount }),
    setTempHp: (amount: number) => dispatch({ type: 'SET_TEMP_HP', amount }),
  }
}
