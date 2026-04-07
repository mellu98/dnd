/**
 * Converts feet to metric meters string, used to replace imperial units across the app.
 * Rule: multiply by 0.3 (D&D 5-foot increment = 1.5m, simplified to 1 square = 1.5m → 0.3 per ft).
 */
export const feetToMeters = (ft: number): string => {
  const m = ft * 0.3
  return `${Number.isInteger(m) ? m : m.toFixed(1)} m`
}
