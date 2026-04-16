/**
 * Items loader — loads and indexes 5etools item data.
 * Lazy-loads to avoid bloating the initial bundle (items.json is ~2.7MB).
 */

import type { MagicItem } from '../../types/magic-item'
import type { FiveeItem } from './items-adapter'
import { mapMagicItem } from './items-adapter'

let _itemPool: Map<string, MagicItem> | null = null
let _itemList: MagicItem[] | null = null
let _loading: Promise<void> | null = null

async function loadItems(): Promise<void> {
  if (_itemPool || _loading) return _loading ?? Promise.resolve()

  _loading = (async () => {
    const raw = await import('./raw/items.json')
    const items = (raw as { default: { item: FiveeItem[] } }).default?.item ?? []

    const pool = new Map<string, MagicItem>()
    const list: MagicItem[] = []

    for (const rawItem of items) {
      const item = mapMagicItem(rawItem)
      pool.set(item.id, item)
      list.push(item)
    }

    _itemPool = pool
    _itemList = list
    _loading = null
  })()

  return _loading
}

export async function getMagicItemById(id: string): Promise<MagicItem | undefined> {
  await loadItems()
  return _itemPool?.get(id)
}

export async function getAllMagicItems(): Promise<MagicItem[]> {
  await loadItems()
  return _itemList ?? []
}

export async function getMagicItemsByRarity(rarity: string): Promise<MagicItem[]> {
  await loadItems()
  return (_itemList ?? []).filter((i) => i.rarity === rarity)
}

export async function searchMagicItems(query: string): Promise<MagicItem[]> {
  await loadItems()
  const q = query.toLowerCase()
  return (_itemList ?? []).filter(
    (i) => i.name.toLowerCase().includes(q) || i.id.includes(q),
  )
}

export async function getMagicItemCount(): Promise<number> {
  await loadItems()
  return _itemList?.length ?? 0
}
