/**
 * Feats — delegates to 5etools JSON data.
 *
 * The 5etools feat-loader provides all feat data from JSON.
 * This module maintains the existing API (feats array, getFeatById)
 * so no UI code needs to change.
 */

export { getFeatById, searchFeats, getFeatCount } from './5e/feat-loader'

// Re-export getAllFeats as `feats` for backwards compatibility
// with existing imports: `import { feats } from '../data/feats'`
import { getAllFeats } from './5e/feat-loader'
export { getAllFeats as feats }
