/**
 * Spells index — delegates to 5etools JSON data.
 *
 * The 5etools spell-loader provides all spell data from merged JSON files.
 * This module maintains the existing API (getSpellById, getSpellsByClass)
 * so no UI code needs to change.
 */

export { getSpellById } from '../5e/spell-loader'
export { getSpellsByClass, getAllSpells, searchSpells, getSpellCount } from '../5e/spell-loader'
