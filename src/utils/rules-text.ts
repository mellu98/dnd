import { feetToMeters } from './units'

function convertFeetValue(value: string): string {
  return feetToMeters(Number(value.replace(',', '.')))
}

export function toMetricRuleText(text?: string | null): string {
  if (!text) return ''

  return text
    .replace(/\s*\(\s*\d+(?:[.,]\d+)?\s*(?:feet|foot|piedi)\s*\)/gi, '')
    .replace(/(\d+(?:[.,]\d+)?)\s*-\s*foot/gi, (_, value: string) => convertFeetValue(value))
    .replace(/(\d+(?:[.,]\d+)?)\s*(?:feet|foot|piedi)\b/gi, (_, value: string) => convertFeetValue(value))
    .replace(/(\d+(?:[.,]\d+)?\s*m)-/gi, '$1 ')
    .replace(/[ \t]{2,}/g, ' ')
    .trim()
}
