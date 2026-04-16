/**
 * Generic JSON loader for 5etools data files.
 *
 * All data files are imported as static JSON via Vite's import.meta.glob.
 * This provides a centralized loading interface with caching.
 */

const cache = new Map<string, unknown>()

/**
 * Load a 5etools JSON file by its module key.
 * Uses an in-memory cache to avoid re-importing.
 */
export async function loadJson<T>(modulePath: string): Promise<T> {
  if (cache.has(modulePath)) {
    return cache.get(modulePath) as T
  }

  // Dynamic import via Vite's glob import
  const modules = import.meta.glob('./raw/*.json', { eager: true })
  const key = `./raw/${modulePath}`

  if (!(key in modules)) {
    throw new Error(`5etools data file not found: ${modulePath}`)
  }

  const data = (modules[key] as { default: T }).default
  cache.set(modulePath, data)
  return data
}

/**
 * Load all 5etools JSON files at once.
 * Returns a record keyed by filename (without extension).
 */
export function loadAllJson(): Record<string, unknown> {
  const modules = import.meta.glob('./raw/*.json', { eager: true })
  const result: Record<string, unknown> = {}

  for (const [path, mod] of Object.entries(modules)) {
    const filename = path.replace('./raw/', '').replace('.json', '')
    result[filename] = (mod as { default: unknown }).default
  }

  return result
}
