import type { Species } from '../../types'
import { skills } from '../skills'
import { getFeatById } from '../feats'

const HUMAN_ORIGIN_FEAT_IDS = [
  'alert',
  'crafter',
  'healer',
  'magic_initiate_cleric',
  'magic_initiate_druid',
  'magic_initiate_wizard',
  'musician',
  'savage_attacker',
  'skilled',
  'tavern_brawler',
] as const

export const human: Species = {
  id: 'human',
  name: 'Human',
  nameIT: 'Umano',
  speed: 30,
  size: 'Medium',
  sizeIT: 'Media',
  darkvision: 0,
  source: 'PHB 2024',
  features: [
    {
      name: 'Resourceful',
      nameIT: 'Intraprendente',
      description: 'You gain Heroic Inspiration whenever you finish a Long Rest.',
      descriptionIT: 'Ottieni Ispirazione Eroica ogni volta che completi un Riposo Lungo.',
      level: 1,
      source: 'PHB 2024',
    },
    {
      name: 'Skillful',
      nameIT: 'Abile',
      description: 'You gain proficiency in one skill of your choice.',
      descriptionIT: 'Ottieni competenza in un’abilità a tua scelta.',
      level: 1,
      source: 'PHB 2024',
    },
    {
      name: 'Versatile',
      nameIT: 'Versatile',
      description: 'You gain an Origin feat of your choice. Skilled is recommended.',
      descriptionIT: 'Ottieni un talento d’Origine a tua scelta. Abile è consigliato.',
      level: 1,
      source: 'PHB 2024',
    },
  ],
  proficiencies: [],
  languages: ['Common'],
  languagesIT: ['Comune'],
  variants: [],
  choiceGroups: [
    {
      id: 'human-size',
      name: 'Human Size',
      nameIT: 'Taglia Umana',
      source: 'PHB 2024',
      options: [
        {
          id: 'small',
          name: 'Small',
          nameIT: 'Piccola',
          size: 'Small',
          sizeIT: 'Piccola',
          description: 'You are Small (about 2–4 feet tall).',
          descriptionIT: 'Sei di taglia Piccola (circa 0,6–1,2 metri di altezza).',
          source: 'PHB 2024',
        },
        {
          id: 'medium',
          name: 'Medium',
          nameIT: 'Media',
          size: 'Medium',
          sizeIT: 'Media',
          description: 'You are Medium (about 4–7 feet tall).',
          descriptionIT: 'Sei di taglia Media (circa 1,2–2,1 metri di altezza).',
          source: 'PHB 2024',
        },
      ],
    },
    {
      id: 'human-skillful',
      name: 'Human Skill Proficiency',
      nameIT: 'Competenza Umana',
      source: 'PHB 2024',
      options: skills.map((skill) => ({
        id: skill.id,
        name: skill.id,
        nameIT: skill.nameIT,
        descriptionIT: `Ottieni competenza in ${skill.nameIT}.`,
        proficiencies: [{ type: 'skill', value: skill.id, valueIT: skill.nameIT }],
        source: 'PHB 2024',
      })),
    },
    {
      id: 'human-versatile',
      name: 'Human Origin Feat',
      nameIT: 'Talento d’Origine Umano',
      source: 'PHB 2024',
      options: HUMAN_ORIGIN_FEAT_IDS.flatMap((featId) => {
        const feat = getFeatById(featId)
        if (!feat) return []

        return [{
          id: feat.id,
          name: feat.name,
          nameIT: feat.nameIT,
          description: feat.description,
          descriptionIT: feat.descriptionIT,
          featIds: [feat.id],
          source: feat.source,
          isLegacy: feat.isLegacy,
        }]
      }),
    },
  ],
}
