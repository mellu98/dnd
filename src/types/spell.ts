export interface Spell {
  id: string
  name: string
  nameIT: string
  level: number // 0 = cantrip
  school: string
  schoolIT: string
  castingTime: string
  castingTimeIT: string
  range: string
  rangeIT: string
  components: {
    v: boolean
    s: boolean
    m?: string
    mIT?: string
  }
  duration: string
  durationIT: string
  concentration: boolean
  description: string
  descriptionIT: string
  ritual?: boolean
}
