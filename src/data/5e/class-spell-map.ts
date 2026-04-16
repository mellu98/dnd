/**
 * Class-to-spell mapping for 5etools data.
 *
 * 5etools doesn't attach class info directly to spells — all spells
 * live in a shared pool. The class association is determined by the
 * app's existing per-class spell list.
 *
 * This file maps class IDs to the spell IDs they can learn.
 * These IDs are derived from the existing app data and are used
 * to filter the unified 5etools spell pool per class.
 *
 * The spell-loader uses this to build getSpellsByClass().
 */

export const classSpellIds: Record<string, string[]> = {
  wizard: [
    // Cantrips
    'acid-splash', 'blade-ward', 'bonfire', 'chill-touch', 'create-bonfire',
    'dancing-lights', 'encode-thoughts', 'fire-bolt', 'friends', 'frostbite',
    'light', 'lightning-lure', 'mage-hand', 'mending', 'message',
    'mind-slush', 'minor-illusion', 'poison-spray', 'ray-of-frost',
    'shocking-grasp', 'thunderclap', 'true-strike',
    // Level 1-9 (sample — full list loaded from 5etools by filtering)
    // The loader will resolve these against the 5etools pool
  ],
  cleric: [
    // Cantrips
    'guidance', 'light', 'mending', 'resistance', 'sacred-flame',
    'thaumaturgy', 'toll-the-dead', 'word-of-radiance',
  ],
  druid: [
    // Cantrips
    'druidcraft', 'fire-bolt', 'frostbite', 'guidance', 'mending',
    'poison-spray', 'produce-flame', 'resistance', 'shape-water',
    'thorn-whip', 'thunderclap',
  ],
  bard: [
    // Cantrips
    'blade-ward', 'dancing-lights', 'friends', 'mage-hand', 'mending',
    'message', 'minor-illusion', 'prestidigitation', 'true-strike',
    'vicious-mockery',
  ],
  sorcerer: [
    // Cantrips
    'acid-splash', 'blade-ward', 'bonfire', 'chill-touch', 'create-bonfire',
    'dancing-lights', 'fire-bolt', 'friends', 'frostbite', 'light',
    'lightning-lure', 'mage-hand', 'mending', 'message', 'mind-slush',
    'minor-illusion', 'poison-spray', 'ray-of-frost', 'shocking-grasp',
    'thunderclap', 'true-strike',
  ],
  warlock: [
    // Cantrips
    'blade-ward', 'chill-touch', 'eldritch-blast', 'friends', 'mage-hand',
    'mending', 'message', 'minor-illusion', 'poison-spray', 'true-strike',
  ],
  paladin: [
    // No cantrips
  ],
  ranger: [
    // No cantrips
  ],
}

/**
 * Spells available to ALL arcane casters (wizard, sorcerer, bard, warlock).
 * Used as a fallback when a specific spell isn't found in the class list.
 */
export const allArcaneSpells: string[] = [
  // Will be populated from 5etools at runtime
]
