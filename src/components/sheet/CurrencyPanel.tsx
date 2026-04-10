import { useCharacterContext } from '../../context/CharacterContext'

const COIN_FIELDS = [
  { key: 'pp', label: 'PP', color: 'text-slate-100' },
  { key: 'gp', label: 'MO', color: 'text-accent-gold' },
  { key: 'ep', label: 'ME', color: 'text-text-secondary' },
  { key: 'sp', label: 'MA', color: 'text-slate-300' },
  { key: 'cp', label: 'MR', color: 'text-orange-300' },
] as const

function toGoldValue(currency: { cp: number; sp: number; ep: number; gp: number; pp: number }) {
  return (
    currency.cp / 100
    + currency.sp / 10
    + currency.ep / 2
    + currency.gp
    + currency.pp * 10
  )
}

export function CurrencyPanel() {
  const { state, dispatch } = useCharacterContext()
  const character = state.character

  if (!character) return null

  const totalGoldValue = toGoldValue(character.currency)

  return (
    <div className="bg-bg-card/60 border border-border/50 rounded-xl p-4">
      <div className="flex items-center justify-between gap-3 mb-3">
        <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider">Valuta</h3>
        <span className="text-xs text-text-secondary">
          Totale stimato: <strong className="text-text-primary">{totalGoldValue.toFixed(2)} mo</strong>
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {COIN_FIELDS.map((coin) => (
          <label key={coin.key} className="bg-bg-secondary border border-border rounded-lg px-3 py-2">
            <span className={`text-[10px] uppercase tracking-wider block mb-1 ${coin.color}`}>{coin.label}</span>
            <input
              type="number"
              min="0"
              value={character.currency[coin.key]}
              onChange={(event) =>
                dispatch({
                  type: 'UPDATE_CURRENCY',
                  denomination: coin.key,
                  amount: Number(event.target.value) || 0,
                })}
              }
              className="w-full bg-transparent text-sm font-semibold text-text-primary focus:outline-none"
            />
          </label>
        ))}
      </div>
    </div>
  )
}
