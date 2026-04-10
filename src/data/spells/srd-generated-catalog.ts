import type { Spell } from '../../types'

export interface GeneratedSrdSpell extends Spell {
  classIds: string[]
}

// Generated from the official SRD 5.2 PDF class spell lists and spell descriptions.
export const generatedSrdSpellCatalog: GeneratedSrdSpell[] = [
  {
    "id": "acid-splash",
    "name": "Acid Splash",
    "nameIT": "Acid Splash",
    "level": 0,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You create an acidic bubble at a point within range, where it explodes in a 5-foot-radius Sphere. Each creature in that Sphere must succeed on a Dexterity saving throw or take 1d6 Acid damage. Cantrip Upgrade. The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).",
    "descriptionIT": "You create an acidic bubble at a point within range, where it explodes in a 5-foot-radius Sphere. Each creature in that Sphere must succeed on a Dexterity saving throw or take 1d6 Acid damage. Cantrip Upgrade. The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "chill-touch",
    "name": "Chill Touch",
    "nameIT": "Chill Touch",
    "level": 0,
    "school": "necromancy",
    "schoolIT": "Necromanzia",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "Channeling the chill of the grave, make a melee spell attack against a target within reach. On a hit, the target takes 1d10 Necrotic damage, and it can’t regain Hit Points until the end of your next turn. Cantrip Upgrade. The damage increases by 1d10 when you reach levels 5 (2d10), 11 (3d10), and 17 (4d10).",
    "descriptionIT": "Channeling the chill of the grave, make a melee spell attack against a target within reach. On a hit, the target takes 1d10 Necrotic damage, and it can’t regain Hit Points until the end of your next turn. Cantrip Upgrade. The damage increases by 1d10 when you reach levels 5 (2d10), 11 (3d10), and 17 (4d10).",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "dancing-lights",
    "name": "Dancing Lights",
    "nameIT": "Dancing Lights",
    "level": 0,
    "school": "illusion",
    "schoolIT": "Illusione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "120 feet",
    "rangeIT": "36 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of phosphorus",
      "mIT": "a bit of phosphorus"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "You create up to four torch-size lights within range, making them appear as torches, lanterns, or glowing orbs that hover for the duration. Alternatively, you combine the four lights into one glowing Medium form that is vaguely humanlike. Whichever form you choose, each light sheds Dim Light in a 10- foot radius. As a Bonus Action, you can move the lights up to 60 feet to a space within range. A light must be within 20 feet of another light created by this spell, and a light vanishes if it exceeds the spell’s range.",
    "descriptionIT": "You create up to four torch-size lights within range, making them appear as torches, lanterns, or glowing orbs that hover for the duration. Alternatively, you combine the four lights into one glowing Medium form that is vaguely humanlike. Whichever form you choose, each light sheds Dim Light in a 10- foot radius. As a Bonus Action, you can move the lights up to 18 m to a space within range. A light must be within 6 m of another light created by this spell, and a light vanishes if it exceeds the spell’s range.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "elementalism",
    "name": "Elementalism",
    "nameIT": "Elementalism",
    "level": 0,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You exert control over the elements, creating one of the following effects within range. Beckon Air. You create a breeze strong enough to ripple cloth, stir dust, rustle leaves, and close open doors and shutters, all in a 5-foot Cube. Doors and shutters being held open by someone or something aren’t affected. Beckon Earth. You create a thin shroud of dust or sand that covers surfaces in a 5-foot-square area, or you cause a single word to appear in your handwriting in a patch of dirt or sand. Beckon Fire. You create a thin cloud of harmless embers and colored, scented smoke in a 5-foot Cube. You choose the color and scent, and the embers can light candles, torches, or lamps in that area. The smoke’s scent lingers for 1 minute. Beckon Water. You create a spray of cool mist that lightly dampens creatures and objects in a 5-foot Cube. Alternatively, you create 1 cup of clean water either in an open container or on a surface, and the water evaporates in 1 minute. Sculpt Element. You cause dirt, sand, fire, smoke, mist, or water that can fit in a 1-foot Cube to assume a crude shape (such as that of a creature) for 1 hour.",
    "descriptionIT": "You exert control over the elements, creating one of the following effects within range. Beckon Air. You create a breeze strong enough to ripple cloth, stir dust, rustle leaves, and close open doors and shutters, all in a 5-foot Cube. Doors and shutters being held open by someone or something aren’t affected. Beckon Earth. You create a thin shroud of dust or sand that covers surfaces in a 5-foot-square area, or you cause a single word to appear in your handwriting in a patch of dirt or sand. Beckon Fire. You create a thin cloud of harmless embers and colored, scented smoke in a 5-foot Cube. You choose the color and scent, and the embers can light candles, torches, or lamps in that area. The smoke’s scent lingers for 1 minute. Beckon Water. You create a spray of cool mist that lightly dampens creatures and objects in a 5-foot Cube. Alternatively, you create 1 cup of clean water either in an open container or on a surface, and the water evaporates in 1 minute. Sculpt Element. You cause dirt, sand, fire, smoke, mist, or water that can fit in a 1-foot Cube to assume a crude shape (such as that of a creature) for 1 hour.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "fire-bolt",
    "name": "Fire Bolt",
    "nameIT": "Fire Bolt",
    "level": 0,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "120 feet",
    "rangeIT": "36 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You hurl a mote of fire at a creature or an object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 Fire damage. A flammable object hit by this spell starts burning if it isn’t being worn or carried. Cantrip Upgrade. The damage increases by 1d10 when you reach levels 5 (2d10), 11 (3d10), and 17 (4d10).",
    "descriptionIT": "You hurl a mote of fire at a creature or an object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 Fire damage. A flammable object hit by this spell starts burning if it isn’t being worn or carried. Cantrip Upgrade. The damage increases by 1d10 when you reach levels 5 (2d10), 11 (3d10), and 17 (4d10).",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "light",
    "name": "Light",
    "nameIT": "Light",
    "level": 0,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "a firefly or phosphorescent moss",
      "mIT": "a firefly or phosphorescent moss"
    },
    "duration": "1 hour",
    "durationIT": "1 ora",
    "concentration": false,
    "description": "You touch one Large or smaller object that isn’t being worn or carried by someone else. Until the spell ends, the object sheds Bright Light in a 20-foot radius and Dim Light for an additional 20 feet. The light can be colored as you like. Covering the object with something opaque blocks the light. The spell ends if you cast it again.",
    "descriptionIT": "You touch one Large or smaller object that isn’t being worn or carried by someone else. Until the spell ends, the object sheds Bright Light in a 20-foot radius and Dim Light for an additional 6 m. The light can be colored as you like. Covering the object with something opaque blocks the light. The spell ends if you cast it again.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "mage-hand",
    "name": "Mage Hand",
    "nameIT": "Mage Hand",
    "level": 0,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "1 minute",
    "durationIT": "1 minuto",
    "concentration": false,
    "description": "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again. When you cast the spell, you can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. As a Magic action on your later turns, you can control the hand thus again. As part of that action, you can move the hand up to 30 feet. The hand can’t attack, activate magic items, or carry more than 10 pounds.",
    "descriptionIT": "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration. The hand vanishes if it is ever more than 9 m away from you or if you cast this spell again. When you cast the spell, you can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. As a Magic action on your later turns, you can control the hand thus again. As part of that action, you can move the hand up to 9 m. The hand can’t attack, activate magic items, or carry more than 10 pounds.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "mending",
    "name": "Mending",
    "nameIT": "Mending",
    "level": 0,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "1 minute",
    "castingTimeIT": "1 minuto",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "two lodestones",
      "mIT": "two lodestones"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage. This spell can physically repair a magic item, but it can’t restore magic to such an object.",
    "descriptionIT": "This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 0,3 m in any dimension, you mend it, leaving no trace of the former damage. This spell can physically repair a magic item, but it can’t restore magic to such an object.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "message",
    "name": "Message",
    "nameIT": "Message",
    "level": 0,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "120 feet",
    "rangeIT": "36 m",
    "components": {
      "v": false,
      "s": true,
      "m": "a copper wire",
      "mIT": "a copper wire"
    },
    "duration": "1 round",
    "durationIT": "1 round",
    "concentration": false,
    "description": "You point toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear. You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence; 1 foot of stone, metal, or wood; or a thin sheet of lead blocks the spell.",
    "descriptionIT": "You point toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear. You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence; 0,3 m of stone, metal, or wood; or a thin sheet of lead blocks the spell.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "minor-illusion",
    "name": "Minor Illusion",
    "nameIT": "Minor Illusion",
    "level": 0,
    "school": "illusion",
    "schoolIT": "Illusione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": false,
      "s": true,
      "m": "a bit of fleece",
      "mIT": "a bit of fleece"
    },
    "duration": "1 minute",
    "durationIT": "1 minuto",
    "concentration": false,
    "description": "You create a sound or an image of an object within range that lasts for the duration. See the descriptions below for the effects of each. The illusion ends if you cast this spell again. If a creature takes a Study action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature. Sound. If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else’s voice, a lion’s roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends. Image. If you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot Cube. The image can’t create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, since things can pass through it.",
    "descriptionIT": "You create a sound or an image of an object within range that lasts for the duration. See the descriptions below for the effects of each. The illusion ends if you cast this spell again. If a creature takes a Study action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature. Sound. If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else’s voice, a lion’s roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends. Image. If you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot Cube. The image can’t create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, since things can pass through it.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "poison-spray",
    "name": "Poison Spray",
    "nameIT": "Poison Spray",
    "level": 0,
    "school": "necromancy",
    "schoolIT": "Necromanzia",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You spray toxic mist at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d12 Poison damage. Cantrip Upgrade. The damage increases by 1d12 when you reach levels 5 (2d12), 11 (3d12), and 17 (4d12).",
    "descriptionIT": "You spray toxic mist at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d12 Poison damage. Cantrip Upgrade. The damage increases by 1d12 when you reach levels 5 (2d12), 11 (3d12), and 17 (4d12).",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "prestidigitation",
    "name": "Prestidigitation",
    "nameIT": "Prestidigitation",
    "level": 0,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "10 feet",
    "rangeIT": "3 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Up to 1 hour",
    "durationIT": "Up to 1 ora",
    "concentration": false,
    "description": "You create a magical effect within range. Choose the effect from the options below. If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time. Sensory Effect. You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor. Fire Play. You instantaneously light or snuff out a candle, a torch, or a small campfire. Clean or Soil. You instantaneously clean or soil an object no larger than 1 cubic foot. Minor Sensation. You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour. Magic Mark. You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour. Minor Creation. You create a nonmagical trinket or an illusory image that can fit in your hand. It lasts until the end of your next turn. A trinket can deal no damage and has no monetary worth.",
    "descriptionIT": "You create a magical effect within range. Choose the effect from the options below. If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time. Sensory Effect. You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor. Fire Play. You instantaneously light or snuff out a candle, a torch, or a small campfire. Clean or Soil. You instantaneously clean or soil an object no larger than 1 cubic foot. Minor Sensation. You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour. Magic Mark. You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour. Minor Creation. You create a nonmagical trinket or an illusory image that can fit in your hand. It lasts until the end of your next turn. A trinket can deal no damage and has no monetary worth.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "ray-of-frost",
    "name": "Ray of Frost",
    "nameIT": "Ray of Frost",
    "level": 0,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 Cold damage, and its Speed is reduced by 10 feet until the start of your next turn. Cantrip Upgrade. The damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
    "descriptionIT": "A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 Cold damage, and its Speed is reduced by 3 m until the start of your next turn. Cantrip Upgrade. The damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "shocking-grasp",
    "name": "Shocking Grasp",
    "nameIT": "Shocking Grasp",
    "level": 0,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "Lightning springs from you to a creature that you try to touch. Make a melee spell attack against the target. On a hit, the target takes 1d8 Lightning damage, and it can’t make Opportunity Attacks until the start of its next turn. Cantrip Upgrade. The damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
    "descriptionIT": "Lightning springs from you to a creature that you try to touch. Make a melee spell attack against the target. On a hit, the target takes 1d8 Lightning damage, and it can’t make Opportunity Attacks until the start of its next turn. Cantrip Upgrade. The damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "sorcerous-burst",
    "name": "Sorcerous Burst",
    "nameIT": "Sorcerous Burst",
    "level": 0,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "120 feet",
    "rangeIT": "36 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You cast sorcerous energy at one creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 damage of a type you choose: Acid, Cold, Fire, Lightning, Poison, Psychic, or Thunder. If you roll an 8 on a d8 for this spell, you can roll another d8, and add it to the damage. When you cast this spell, the maximum number of these d8s you can add to the spell’s damage equals your spellcasting ability modifier. Cantrip Upgrade. The damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
    "descriptionIT": "You cast sorcerous energy at one creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 damage of a type you choose: Acid, Cold, Fire, Lightning, Poison, Psychic, or Thunder. If you roll an 8 on a d8 for this spell, you can roll another d8, and add it to the damage. When you cast this spell, the maximum number of these d8s you can add to the spell’s damage equals your spellcasting ability modifier. Cantrip Upgrade. The damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "starry-wisp",
    "name": "Starry Wisp",
    "nameIT": "Starry Wisp",
    "level": 0,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You launch a mote of light at one creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 Radiant damage, and until the end of your next turn, it emits Dim Light in a 10-foot radius and can’t benefit from the Invisible condition. Cantrip Upgrade. The damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
    "descriptionIT": "You launch a mote of light at one creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 Radiant damage, and until the end of your next turn, it emits Dim Light in a 10-foot radius and can’t benefit from the Invisible condition. Cantrip Upgrade. The damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "true-strike",
    "name": "True Strike",
    "nameIT": "True Strike",
    "level": 0,
    "school": "divination",
    "schoolIT": "Divinazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "a weapon with which you have profi- ciency and that is worth 1+ CP",
      "mIT": "a weapon with which you have profi- ciency and that is worth 1+ CP"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "Guided by a flash of magical insight, you make one attack with the weapon used in the spell’s casting. The attack uses your spellcasting ability for the attack and damage rolls instead of using Strength or Dexterity. If the attack deals damage, it can be Radiant damage or the weapon’s normal damage type (your choice). Cantrip Upgrade. Whether you deal Radiant damage or the weapon’s normal damage type, the attack deals extra Radiant damage when you reach levels 5 (1d6), 11 (2d6), and 17 (3d6).",
    "descriptionIT": "Guided by a flash of magical insight, you make one attack with the weapon used in the spell’s casting. The attack uses your spellcasting ability for the attack and damage rolls instead of using Strength or Dexterity. If the attack deals damage, it can be Radiant damage or the weapon’s normal damage type (your choice). Cantrip Upgrade. Whether you deal Radiant damage or the weapon’s normal damage type, the attack deals extra Radiant damage when you reach levels 5 (1d6), 11 (2d6), and 17 (3d6).",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "vicious-mockery",
    "name": "Vicious Mockery",
    "nameIT": "Vicious Mockery",
    "level": 0,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You unleash a string of insults laced with subtle enchantments at one creature you can see or hear within range. The target must succeed on a Wisdom saving throw or take 1d6 Psychic damage and have Disadvantage on the next attack roll it makes before the end of its next turn. Cantrip Upgrade. The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).",
    "descriptionIT": "You unleash a string of insults laced with subtle enchantments at one creature you can see or hear within range. The target must succeed on a Wisdom saving throw or take 1d6 Psychic damage and have Disadvantage on the next attack roll it makes before the end of its next turn. Cantrip Upgrade. The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "alarm",
    "name": "Alarm",
    "nameIT": "Alarm",
    "level": 1,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "1 minute",
    "castingTimeIT": "1 minuto oppure Rituale",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a bell and silver wire",
      "mIT": "a bell and silver wire"
    },
    "duration": "8 hours",
    "durationIT": "8 ore",
    "concentration": false,
    "description": "You set an alarm against intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot Cube. Until the spell ends, an alarm alerts you whenever a creature touches or enters the warded area. When you cast the spell, you can designate creatures that won’t set off the alarm. You also choose whether the alarm is audible or mental: Audible Alarm. The alarm produces the sound of a handbell for 10 seconds within 60 feet of the warded area. Mental Alarm. You are alerted by a mental ping if you are within 1 mile of the warded area. This ping awakens you if you’re asleep.",
    "descriptionIT": "You set an alarm against intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot Cube. Until the spell ends, an alarm alerts you whenever a creature touches or enters the warded area. When you cast the spell, you can designate creatures that won’t set off the alarm. You also choose whether the alarm is audible or mental: Audible Alarm. The alarm produces the sound of a handbell for 10 seconds within 18 m of the warded area. Mental Alarm. You are alerted by a mental ping if you are within 1,6 km of the warded area. This ping awakens you if you’re asleep.",
    "ritual": true,
    "source": "SRD 5.2",
    "classIds": [
      "ranger"
    ]
  },
  {
    "id": "animal-friendship",
    "name": "Animal Friendship",
    "nameIT": "Animal Friendship",
    "level": 1,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a morsel of food",
      "mIT": "a morsel of food"
    },
    "duration": "24 hours",
    "durationIT": "24 ore",
    "concentration": false,
    "description": "Target a Beast that you can see within range. The target must succeed on a Wisdom saving throw or have the Charmed condition for the duration. If you or one of your allies deals damage to the target, the spells ends. Using a Higher-Level Spell Slot. You can target one additional Beast for each spell slot level above 1.",
    "descriptionIT": "Target a Beast that you can see within range. The target must succeed on a Wisdom saving throw or have the Charmed condition for the duration. If you or one of your allies deals damage to the target, the spells ends. Using a Higher-Level Spell Slot. You can target one additional Beast for each spell slot level above 1.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "ranger"
    ]
  },
  {
    "id": "bane",
    "name": "Bane",
    "nameIT": "Bane",
    "level": 1,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a drop of blood",
      "mIT": "a drop of blood"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "Up to three creatures of your choice that you can see within range must each make a Charisma saving throw. Whenever a target that fails this save makes an attack roll or a saving throw before the spell ends, the target must subtract 1d4 from the attack roll or save. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 1.",
    "descriptionIT": "Up to three creatures of your choice that you can see within range must each make a Charisma saving throw. Whenever a target that fails this save makes an attack roll or a saving throw before the spell ends, the target must subtract 1d4 from the attack roll or save. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 1.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "bless",
    "name": "Bless",
    "nameIT": "Bless",
    "level": 1,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a Holy Symbol worth 5+ GP",
      "mIT": "a Holy Symbol worth 5+ GP"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "You bless up to three creatures within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target adds 1d4 to the attack roll or save. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 1.",
    "descriptionIT": "You bless up to three creatures within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target adds 1d4 to the attack roll or save. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 1.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "paladin"
    ]
  },
  {
    "id": "burning-hands",
    "name": "Burning Hands",
    "nameIT": "Burning Hands",
    "level": 1,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "A thin sheet of flames shoots forth from you. Each creature in a 15-foot Cone makes a Dexterity saving throw, taking 3d6 Fire damage on a failed save or half as much damage on a successful one. Flammable objects in the Cone that aren’t being worn or carried start burning. Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 1.",
    "descriptionIT": "A thin sheet of flames shoots forth from you. Each creature in a 15-foot Cone makes a Dexterity saving throw, taking 3d6 Fire damage on a failed save or half as much damage on a successful one. Flammable objects in the Cone that aren’t being worn or carried start burning. Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 1.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "charm-person",
    "name": "Charm Person",
    "nameIT": "Charm Person",
    "level": 1,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "1 hour",
    "durationIT": "1 ora",
    "concentration": false,
    "description": "One Humanoid you can see within range makes a Wisdom saving throw. It does so with Advantage if you or your allies are fighting it. On a failed save, the target has the Charmed condition until the spell ends or until you or your allies damage it. The Charmed creature is Friendly to you. When the spell ends, the target knows it was Charmed by you. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 1.",
    "descriptionIT": "One Humanoid you can see within range makes a Wisdom saving throw. It does so with Advantage if you or your allies are fighting it. On a failed save, the target has the Charmed condition until the spell ends or until you or your allies damage it. The Charmed creature is Friendly to you. When the spell ends, the target knows it was Charmed by you. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 1.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "chromatic-orb",
    "name": "Chromatic Orb",
    "nameIT": "Chromatic Orb",
    "level": 1,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "90 feet",
    "rangeIT": "27 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a diamond worth 50+ GP",
      "mIT": "a diamond worth 50+ GP"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You hurl an orb of energy at a target within range. Choose Acid, Cold, Fire, Lightning, Poison, or Thunder for the type of orb you create, and then make a ranged spell attack against the target. On a hit, the target takes 3d8 damage of the chosen type. If you roll the same number on two or more of the d8s, the orb leaps to a different target of your choice within 30 feet of the target. Make an attack roll against the new target, and make a new damage roll. The orb can’t leap again unless you cast the spell with a level 2+ spell slot. Using a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 1. The orb can leap a maximum number of times equal to the level of the slot expended, and a creature can be targeted only once by each casting of this spell.",
    "descriptionIT": "You hurl an orb of energy at a target within range. Choose Acid, Cold, Fire, Lightning, Poison, or Thunder for the type of orb you create, and then make a ranged spell attack against the target. On a hit, the target takes 3d8 damage of the chosen type. If you roll the same number on two or more of the d8s, the orb leaps to a different target of your choice within 9 m of the target. Make an attack roll against the new target, and make a new damage roll. The orb can’t leap again unless you cast the spell with a level 2+ spell slot. Using a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 1. The orb can leap a maximum number of times equal to the level of the slot expended, and a creature can be targeted only once by each casting of this spell.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "color-spray",
    "name": "Color Spray",
    "nameIT": "Color Spray",
    "level": 1,
    "school": "illusion",
    "schoolIT": "Illusione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "a pinch of colorful sand",
      "mIT": "a pinch of colorful sand"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You launch a dazzling array of flashing, colorful light. Each creature in a 15-foot Cone originating from you must succeed on a Constitution saving throw or have the Blinded condition until the end of your next turn.",
    "descriptionIT": "You launch a dazzling array of flashing, colorful light. Each creature in a 15-foot Cone originating from you must succeed on a Constitution saving throw or have the Blinded condition until the end of your next turn.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "command",
    "name": "Command",
    "nameIT": "Command",
    "level": 1,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. Choose the command from these options: Approach. The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you. Drop. The target drops whatever it is holding and then ends its turn. Flee. The target spends its turn moving away from you by the fastest available means. Grovel. The target has the Prone condition and then ends its turn. Halt. On its turn, the target doesn’t move and takes no action or Bonus Action. Using a Higher-Level Spell Slot. You can affect one additional creature for each spell slot level above 1.",
    "descriptionIT": "You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. Choose the command from these options: Approach. The target moves toward you by the shortest and most direct route, ending its turn if it moves within 1,5 m of you. Drop. The target drops whatever it is holding and then ends its turn. Flee. The target spends its turn moving away from you by the fastest available means. Grovel. The target has the Prone condition and then ends its turn. Halt. On its turn, the target doesn’t move and takes no action or Bonus Action. Using a Higher-Level Spell Slot. You can affect one additional creature for each spell slot level above 1.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "paladin"
    ]
  },
  {
    "id": "comprehend-languages",
    "name": "Comprehend Languages",
    "nameIT": "Comprehend Languages",
    "level": 1,
    "school": "divination",
    "schoolIT": "Divinazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione oppure Rituale",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "a pinch of soot and salt",
      "mIT": "a pinch of soot and salt"
    },
    "duration": "1 hour",
    "durationIT": "1 ora",
    "concentration": false,
    "description": "For the duration, you understand the literal meaning of any language that you hear or see signed. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text. This spell doesn’t decode symbols or secret messages.",
    "descriptionIT": "For the duration, you understand the literal meaning of any language that you hear or see signed. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text. This spell doesn’t decode symbols or secret messages.",
    "ritual": true,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "cure-wounds",
    "name": "Cure Wounds",
    "nameIT": "Cure Wounds",
    "level": 1,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "A creature you touch regains a number of Hit Points equal to 2d8 plus your spellcasting ability modifier. Using a Higher-Level Spell Slot. The healing increases by 2d8 for each spell slot level above 1.",
    "descriptionIT": "A creature you touch regains a number of Hit Points equal to 2d8 plus your spellcasting ability modifier. Using a Higher-Level Spell Slot. The healing increases by 2d8 for each spell slot level above 1.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "paladin",
      "ranger"
    ]
  },
  {
    "id": "detect-evil-and-good",
    "name": "Detect Evil and Good",
    "nameIT": "Detect Evil and Good",
    "level": 1,
    "school": "divination",
    "schoolIT": "Divinazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 10 minutes",
    "durationIT": "Concentrazione, fino a 10 minuti",
    "concentration": true,
    "description": "For the duration, you sense the location of any Aberration, Celestial, Elemental, Fey, Fiend, or Undead within 30 feet of yourself. You also sense whether the Hallow spell is active there and, if so, where. The spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.",
    "descriptionIT": "For the duration, you sense the location of any Aberration, Celestial, Elemental, Fey, Fiend, or Undead within 9 m of yourself. You also sense whether the Hallow spell is active there and, if so, where. The spell is blocked by 0,3 m of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "paladin"
    ]
  },
  {
    "id": "detect-magic",
    "name": "Detect Magic",
    "nameIT": "Detect Magic",
    "level": 1,
    "school": "divination",
    "schoolIT": "Divinazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione oppure Rituale",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 10 minutes",
    "durationIT": "Concentrazione, fino a 10 minuti",
    "concentration": true,
    "description": "For the duration, you sense the presence of magical effects within 30 feet of yourself. If you sense such effects, you can take the Magic action to see a faint aura around any visible creature or object in the area that bears the magic, and if an effect was created by a spell, you learn the spell’s school of magic. The spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.",
    "descriptionIT": "For the duration, you sense the presence of magical effects within 9 m of yourself. If you sense such effects, you can take the Magic action to see a faint aura around any visible creature or object in the area that bears the magic, and if an effect was created by a spell, you learn the spell’s school of magic. The spell is blocked by 0,3 m of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.",
    "ritual": true,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "paladin",
      "ranger",
      "sorcerer"
    ]
  },
  {
    "id": "detect-poison-and-disease",
    "name": "Detect Poison and Disease",
    "nameIT": "Detect Poison and Disease",
    "level": 1,
    "school": "divination",
    "schoolIT": "Divinazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione oppure Rituale",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "a yew leaf",
      "mIT": "a yew leaf"
    },
    "duration": "Concentration, up to 10 minutes",
    "durationIT": "Concentrazione, fino a 10 minuti",
    "concentration": true,
    "description": "For the duration, you sense the location of poisons, poisonous or venomous creatures, and magical contagions within 30 feet of yourself. You sense the kind of poison, creature, or contagion in each case. The spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.",
    "descriptionIT": "For the duration, you sense the location of poisons, poisonous or venomous creatures, and magical contagions within 9 m of yourself. You sense the kind of poison, creature, or contagion in each case. The spell is blocked by 0,3 m of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.",
    "ritual": true,
    "source": "SRD 5.2",
    "classIds": [
      "paladin",
      "ranger"
    ]
  },
  {
    "id": "disguise-self",
    "name": "Disguise Self",
    "nameIT": "Disguise Self",
    "level": 1,
    "school": "illusion",
    "schoolIT": "Illusione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "1 hour",
    "durationIT": "1 ora",
    "concentration": false,
    "description": "You make yourself—including your clothing, armor, weapons, and other belongings on your person— look different until the spell ends. You can seem 1 foot shorter or taller and can appear heavier or lighter. You must adopt a form that has the same basic arrangement of limbs as you have. Otherwise, the extent of the illusion is up to you. The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing. To discern that you are disguised, a creature must take the Study action to inspect your appearance and succeed on an Intelligence (Investigation) check against your spell save DC.",
    "descriptionIT": "You make yourself—including your clothing, armor, weapons, and other belongings on your person— look different until the spell ends. You can seem 0,3 m shorter or taller and can appear heavier or lighter. You must adopt a form that has the same basic arrangement of limbs as you have. Otherwise, the extent of the illusion is up to you. The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing. To discern that you are disguised, a creature must take the Study action to inspect your appearance and succeed on an Intelligence (Investigation) check against your spell save DC.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "dissonant-whispers",
    "name": "Dissonant Whispers",
    "nameIT": "Dissonant Whispers",
    "level": 1,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "One creature of your choice that you can see within range hears a discordant melody in its mind. The target makes a Wisdom saving throw. On a failed save, it takes 3d6 Psychic damage and must immediately use its Reaction, if available, to move as far away from you as it can, using the safest route. On a successful save, the target takes half as much damage only. Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 1.",
    "descriptionIT": "One creature of your choice that you can see within range hears a discordant melody in its mind. The target makes a Wisdom saving throw. On a failed save, it takes 3d6 Psychic damage and must immediately use its Reaction, if available, to move as far away from you as it can, using the safest route. On a successful save, the target takes half as much damage only. Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 1.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "divine-favor",
    "name": "Divine Favor",
    "nameIT": "Divine Favor",
    "level": 1,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Bonus Action",
    "castingTimeIT": "1 azione bonus",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "1 minute",
    "durationIT": "1 minuto",
    "concentration": false,
    "description": "Until the spell ends, your attacks with weapons deal an extra 1d4 Radiant damage on a hit.",
    "descriptionIT": "Until the spell ends, your attacks with weapons deal an extra 1d4 Radiant damage on a hit.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "paladin"
    ]
  },
  {
    "id": "divine-smite",
    "name": "Divine Smite",
    "nameIT": "Divine Smite",
    "level": 1,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Bonus Action, which you take immedi- ately after hitting a target with a Melee weapon or an Unarmed Strike",
    "castingTimeIT": "1 azione bonus, which you take immedi- ately after hitting a target with a Melee weapon or an Unarmed Strike",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "The target takes an extra 2d8 Radiant damage from the attack. The damage increases by 1d8 if the target is a Fiend or an Undead. Using a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 1.",
    "descriptionIT": "The target takes an extra 2d8 Radiant damage from the attack. The damage increases by 1d8 if the target is a Fiend or an Undead. Using a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 1.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "paladin"
    ]
  },
  {
    "id": "ensnaring-strike",
    "name": "Ensnaring Strike",
    "nameIT": "Ensnaring Strike",
    "level": 1,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Bonus Action, which you take immedi- ately after hitting a creature with a weapon",
    "castingTimeIT": "1 azione bonus, which you take immedi- ately after hitting a creature with a weapon",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "As you hit the target, grasping vines appear on it, and it makes a Strength saving throw. A Large or larger creature has Advantage on this save. On a failed save, the target has the Restrained condition until the spell ends. On a successful save, the vines shrivel away, and the spell ends. While Restrained, the target takes 1d6 Piercing damage at the start of each of its turns. The target or a creature within reach of it can take an action to make a Strength (Athletics) check against your spell save DC. On a success, the spell ends. Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 1.",
    "descriptionIT": "As you hit the target, grasping vines appear on it, and it makes a Strength saving throw. A Large or larger creature has Advantage on this save. On a failed save, the target has the Restrained condition until the spell ends. On a successful save, the vines shrivel away, and the spell ends. While Restrained, the target takes 1d6 Piercing damage at the start of each of its turns. The target or a creature within reach of it can take an action to make a Strength (Athletics) check against your spell save DC. On a success, the spell ends. Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 1.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "ranger"
    ]
  },
  {
    "id": "entangle",
    "name": "Entangle",
    "nameIT": "Entangle",
    "level": 1,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "90 feet",
    "rangeIT": "27 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "Grasping plants sprout from the ground in a 20-foot square within range. For the duration, these plants turn the ground in the area into Difficult Terrain. They disappear when the spell ends. Each creature (other than you) in the area when you cast the spell must succeed on a Strength saving throw or have the Restrained condition until the spell ends. A Restrained creature can take an action to make a Strength (Athletics) check against your spell save DC. On a success, it frees itself from the grasping plants and is no longer Restrained by them.",
    "descriptionIT": "Grasping plants sprout from the ground in a 20-foot square within range. For the duration, these plants turn the ground in the area into Difficult Terrain. They disappear when the spell ends. Each creature (other than you) in the area when you cast the spell must succeed on a Strength saving throw or have the Restrained condition until the spell ends. A Restrained creature can take an action to make a Strength (Athletics) check against your spell save DC. On a success, it frees itself from the grasping plants and is no longer Restrained by them.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "ranger"
    ]
  },
  {
    "id": "expeditious-retreat",
    "name": "Expeditious Retreat",
    "nameIT": "Expeditious Retreat",
    "level": 1,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Bonus Action",
    "castingTimeIT": "1 azione bonus",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 10 minutes",
    "durationIT": "Concentrazione, fino a 10 minuti",
    "concentration": true,
    "description": "You take the Dash action, and until the spell ends, you can take that action again as a Bonus Action.",
    "descriptionIT": "You take the Dash action, and until the spell ends, you can take that action again as a Bonus Action.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "faerie-fire",
    "name": "Faerie Fire",
    "nameIT": "Faerie Fire",
    "level": 1,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "Objects in a 20-foot Cube within range are outlined in blue, green, or violet light (your choice). Each creature in the Cube is also outlined if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed Dim Light in a 10-foot radius and can’t benefit from the Invisible condition. Attack rolls against an affected creature or object have Advantage if the attacker can see it.",
    "descriptionIT": "Objects in a 20-foot Cube within range are outlined in blue, green, or violet light (your choice). Each creature in the Cube is also outlined if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed Dim Light in a 10-foot radius and can’t benefit from the Invisible condition. Attack rolls against an affected creature or object have Advantage if the attacker can see it.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "false-life",
    "name": "False Life",
    "nameIT": "False Life",
    "level": 1,
    "school": "necromancy",
    "schoolIT": "Necromanzia",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "a drop of alcohol",
      "mIT": "a drop of alcohol"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You gain 2d4 + 4 Temporary Hit Points. Using a Higher-Level Spell Slot. You gain 5 additional Temporary Hit Points for each spell slot level above 1.",
    "descriptionIT": "You gain 2d4 + 4 Temporary Hit Points. Using a Higher-Level Spell Slot. You gain 5 additional Temporary Hit Points for each spell slot level above 1.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "feather-fall",
    "name": "Feather Fall",
    "nameIT": "Feather Fall",
    "level": 1,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Reaction, which you take when you or a creature you can see within 60 feet of you falls",
    "castingTimeIT": "1 reazione, which you take when you or a creature you can see within 18 m of you falls",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a small feather or piece of down",
      "mIT": "a small feather or piece of down"
    },
    "duration": "1 minute",
    "durationIT": "1 minuto",
    "concentration": false,
    "description": "Choose up to five falling creatures within range. A falling creature’s rate of descent slows to 60 feet per round until the spell ends. If a creature lands before the spell ends, the creature takes no damage from the fall, and the spell ends for that creature.",
    "descriptionIT": "Choose up to five falling creatures within range. A falling creature’s rate of descent slows to 18 m per round until the spell ends. If a creature lands before the spell ends, the creature takes no damage from the fall, and the spell ends for that creature.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "fog-cloud",
    "name": "Fog Cloud",
    "nameIT": "Fog Cloud",
    "level": 1,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "120 feet",
    "rangeIT": "36 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 1 hour",
    "durationIT": "Concentrazione, fino a 1 ora",
    "concentration": true,
    "description": "You create a 20-foot-radius Sphere of fog centered on a point within range. The Sphere is Heavily Obscured. It lasts for the duration or until a strong wind (such as one created by Gust of Wind) disperses it. Using a Higher-Level Spell Slot. The fog’s radius increases by 20 feet for each spell slot level above 1.",
    "descriptionIT": "You create a 20-foot-radius Sphere of fog centered on a point within range. The Sphere is Heavily Obscured. It lasts for the duration or until a strong wind (such as one created by Gust of Wind) disperses it. Using a Higher-Level Spell Slot. The fog’s radius increases by 6 m for each spell slot level above 1.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "ranger",
      "sorcerer"
    ]
  },
  {
    "id": "goodberry",
    "name": "Goodberry",
    "nameIT": "Goodberry",
    "level": 1,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "a sprig of mistletoe",
      "mIT": "a sprig of mistletoe"
    },
    "duration": "24 hours",
    "durationIT": "24 ore",
    "concentration": false,
    "description": "Ten berries appear in your hand and are infused with magic for the duration. A creature can take a Bonus Action to eat one berry. Eating a berry restores 1 Hit Point, and the berry provides enough nourishment to sustain a creature for one day. Uneaten berries disappear when the spell ends.",
    "descriptionIT": "Ten berries appear in your hand and are infused with magic for the duration. A creature can take a Bonus Action to eat one berry. Eating a berry restores 1 Hit Point, and the berry provides enough nourishment to sustain a creature for one day. Uneaten berries disappear when the spell ends.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "ranger"
    ]
  },
  {
    "id": "grease",
    "name": "Grease",
    "nameIT": "Grease",
    "level": 1,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of pork rind or butter",
      "mIT": "a bit of pork rind or butter"
    },
    "duration": "1 minute",
    "durationIT": "1 minuto",
    "concentration": false,
    "description": "Nonflammable grease covers the ground in a 10- foot square centered on a point within range and turns it into Difficult Terrain for the duration. When the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or have the Prone condition. A creature that enters the area or ends its turn there must also succeed on that save or fall Prone.",
    "descriptionIT": "Nonflammable grease covers the ground in a 10- foot square centered on a point within range and turns it into Difficult Terrain for the duration. When the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or have the Prone condition. A creature that enters the area or ends its turn there must also succeed on that save or fall Prone.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "healing-word",
    "name": "Healing Word",
    "nameIT": "Healing Word",
    "level": 1,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Bonus Action",
    "castingTimeIT": "1 azione bonus",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "A creature of your choice that you can see within range regains Hit Points equal to 2d4 plus your spellcasting ability modifier. Using a Higher-Level Spell Slot. The healing increases by 2d4 for each spell slot level above 1.",
    "descriptionIT": "A creature of your choice that you can see within range regains Hit Points equal to 2d4 plus your spellcasting ability modifier. Using a Higher-Level Spell Slot. The healing increases by 2d4 for each spell slot level above 1.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "heroism",
    "name": "Heroism",
    "nameIT": "Heroism",
    "level": 1,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to the Frightened condition and gains Temporary Hit Points equal to your spellcasting ability modifier at the start of each of its turns. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 1.",
    "descriptionIT": "A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to the Frightened condition and gains Temporary Hit Points equal to your spellcasting ability modifier at the start of each of its turns. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 1.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "paladin"
    ]
  },
  {
    "id": "hideous-laughter",
    "name": "Hideous Laughter",
    "nameIT": "Hideous Laughter",
    "level": 1,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a tart and a feather",
      "mIT": "a tart and a feather"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "One creature of your choice that you can see within range makes a Wisdom saving throw. On a failed save, it has the Prone and Incapacitated conditions for the duration. During that time, it laughs uncontrollably if it’s capable of laughter, and it can’t end the Prone condition on itself. At the end of each of its turns and each time it takes damage, it makes another Wisdom saving throw. The target has Advantage on the save if the save is triggered by damage. On a successful save, the spell ends. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 1.",
    "descriptionIT": "One creature of your choice that you can see within range makes a Wisdom saving throw. On a failed save, it has the Prone and Incapacitated conditions for the duration. During that time, it laughs uncontrollably if it’s capable of laughter, and it can’t end the Prone condition on itself. At the end of each of its turns and each time it takes damage, it makes another Wisdom saving throw. The target has Advantage on the save if the save is triggered by damage. On a successful save, the spell ends. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 1.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "hunter-s-mark",
    "name": "Hunter’s Mark",
    "nameIT": "Hunter’s Mark",
    "level": 1,
    "school": "divination",
    "schoolIT": "Divinazione",
    "castingTime": "Bonus Action",
    "castingTimeIT": "1 azione bonus",
    "range": "90 feet",
    "rangeIT": "27 m",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "Concentration, up to 1 hour",
    "durationIT": "Concentrazione, fino a 1 ora",
    "concentration": true,
    "description": "You magically mark one creature you can see within range as your quarry. Until the spell ends, you deal an extra 1d6 Force damage to the target whenever you hit it with an attack roll. You also have Advantage on any Wisdom (Perception or Survival) check you make to find it. If the target drops to 0 Hit Points before this spell ends, you can take a Bonus Action to move the mark to a new creature you can see within range. Using a Higher-Level Spell Slot. Your Concentration can last longer with a spell slot of level 3–4 (up to 8 hours) or 5+ (up to 24 hours).",
    "descriptionIT": "You magically mark one creature you can see within range as your quarry. Until the spell ends, you deal an extra 1d6 Force damage to the target whenever you hit it with an attack roll. You also have Advantage on any Wisdom (Perception or Survival) check you make to find it. If the target drops to 0 Hit Points before this spell ends, you can take a Bonus Action to move the mark to a new creature you can see within range. Using a Higher-Level Spell Slot. Your Concentration can last longer with a spell slot of level 3–4 (up to 8 hours) or 5+ (up to 24 hours).",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "ranger"
    ]
  },
  {
    "id": "ice-knife",
    "name": "Ice Knife",
    "nameIT": "Ice Knife",
    "level": 1,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": false,
      "s": true,
      "m": "a drop of water or a piece of ice",
      "mIT": "a drop of water or a piece of ice"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 Piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of it must succeed on a Dexterity saving throw or take 2d6 Cold damage. Using a Higher-Level Spell Slot. The Cold damage increases by 1d6 for each spell slot level above 1.",
    "descriptionIT": "You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 Piercing damage. Hit or miss, the shard then explodes. The target and each creature within 1,5 m of it must succeed on a Dexterity saving throw or take 2d6 Cold damage. Using a Higher-Level Spell Slot. The Cold damage increases by 1d6 for each spell slot level above 1.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "identify",
    "name": "Identify",
    "nameIT": "Identify",
    "level": 1,
    "school": "divination",
    "schoolIT": "Divinazione",
    "castingTime": "1 minute",
    "castingTimeIT": "1 minuto oppure Rituale",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "a pearl worth 100+ GP",
      "mIT": "a pearl worth 100+ GP"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You touch an object throughout the spell’s casting. If the object is a magic item or some other magical object, you learn its properties and how to use them, whether it requires Attunement, and how many charges it has, if any. You learn whether any ongoing spells are affecting the item and what they are. If the item was created by a spell, you learn that spell’s name. If you instead touch a creature throughout the casting, you learn which ongoing spells, if any, are currently affecting it.",
    "descriptionIT": "You touch an object throughout the spell’s casting. If the object is a magic item or some other magical object, you learn its properties and how to use them, whether it requires Attunement, and how many charges it has, if any. You learn whether any ongoing spells are affecting the item and what they are. If the item was created by a spell, you learn that spell’s name. If you instead touch a creature throughout the casting, you learn which ongoing spells, if any, are currently affecting it.",
    "ritual": true,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "illusory-script",
    "name": "Illusory Script",
    "nameIT": "Illusory Script",
    "level": 1,
    "school": "illusion",
    "schoolIT": "Illusione",
    "castingTime": "1 minute",
    "castingTimeIT": "1 minuto oppure Rituale",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": false,
      "s": true,
      "m": "ink worth 10+ GP, which the spell consumes",
      "mIT": "ink worth 10+ GP, which the spell consumes"
    },
    "duration": "10 days",
    "durationIT": "10 giorni",
    "concentration": false,
    "description": "You write on parchment, paper, or another suitable material and imbue it with an illusion that lasts for the duration. To you and any creatures you designate when you cast the spell, the writing appears normal, seems to be written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible. Alternatively, the illusion can alter the meaning, handwriting, and language of the text, though the language must be one you know. If the spell is dispelled, the original script and the illusion both disappear. A creature that has Truesight can read the hidden message.",
    "descriptionIT": "You write on parchment, paper, or another suitable material and imbue it with an illusion that lasts for the duration. To you and any creatures you designate when you cast the spell, the writing appears normal, seems to be written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible. Alternatively, the illusion can alter the meaning, handwriting, and language of the text, though the language must be one you know. If the spell is dispelled, the original script and the illusion both disappear. A creature that has Truesight can read the hidden message.",
    "ritual": true,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "jump",
    "name": "Jump",
    "nameIT": "Jump",
    "level": 1,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Bonus Action",
    "castingTimeIT": "1 azione bonus",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "a grasshopper’s hind leg",
      "mIT": "a grasshopper’s hind leg"
    },
    "duration": "1 minute",
    "durationIT": "1 minuto",
    "concentration": false,
    "description": "You touch a willing creature. Once on each of its turns until the spell ends, that creature can jump up to 30 feet by spending 10 feet of movement. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 1.",
    "descriptionIT": "You touch a willing creature. Once on each of its turns until the spell ends, that creature can jump up to 9 m by spending 3 m of movement. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 1.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "ranger",
      "sorcerer"
    ]
  },
  {
    "id": "longstrider",
    "name": "Longstrider",
    "nameIT": "Longstrider",
    "level": 1,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "a pinch of dirt",
      "mIT": "a pinch of dirt"
    },
    "duration": "1 hour",
    "durationIT": "1 ora",
    "concentration": false,
    "description": "You touch a creature. The target’s Speed increases by 10 feet until the spell ends. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 1.",
    "descriptionIT": "You touch a creature. The target’s Speed increases by 3 m until the spell ends. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 1.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "ranger"
    ]
  },
  {
    "id": "mage-armor",
    "name": "Mage Armor",
    "nameIT": "Mage Armor",
    "level": 1,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "a piece of cured leather",
      "mIT": "a piece of cured leather"
    },
    "duration": "8 hours",
    "durationIT": "8 ore",
    "concentration": false,
    "description": "You touch a willing creature who isn’t wearing armor. Until the spell ends, the target’s base AC becomes 13 plus its Dexterity modifier. The spell ends early if the target dons armor.",
    "descriptionIT": "You touch a willing creature who isn’t wearing armor. Until the spell ends, the target’s base AC becomes 13 plus its Dexterity modifier. The spell ends early if the target dons armor.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "magic-missile",
    "name": "Magic Missile",
    "nameIT": "Magic Missile",
    "level": 1,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "120 feet",
    "rangeIT": "36 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You create three glowing darts of magical force. Each dart strikes a creature of your choice that you can see within range. A dart deals 1d4 + 1 Force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several. Using a Higher-Level Spell Slot. The spell creates one more dart for each spell slot level above 1.",
    "descriptionIT": "You create three glowing darts of magical force. Each dart strikes a creature of your choice that you can see within range. A dart deals 1d4 + 1 Force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several. Using a Higher-Level Spell Slot. The spell creates one more dart for each spell slot level above 1.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "protection-from-evil-and-good",
    "name": "Protection from Evil and Good",
    "nameIT": "Protection from Evil and Good",
    "level": 1,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "a flask of Holy Water worth 25+ GP, which the spell consumes",
      "mIT": "a flask of Holy Water worth 25+ GP, which the spell consumes"
    },
    "duration": "Concentration up to 10 minutes",
    "durationIT": "Concentration up to 10 minuti",
    "concentration": true,
    "description": "Until the spell ends, one willing creature you touch is protected against creatures that are Aberrations, Celestials, Elementals, Fey, Fiends, or Undead. The protection grants several benefits. Creatures of those types have Disadvantage on attack rolls against the target. The target also can’t be possessed by or gain the Charmed or Frightened conditions from them. If the target is already possessed, Charmed, or Frightened by such a creature, the target has Advantage on any new saving throw against the relevant effect.",
    "descriptionIT": "Until the spell ends, one willing creature you touch is protected against creatures that are Aberrations, Celestials, Elementals, Fey, Fiends, or Undead. The protection grants several benefits. Creatures of those types have Disadvantage on attack rolls against the target. The target also can’t be possessed by or gain the Charmed or Frightened conditions from them. If the target is already possessed, Charmed, or Frightened by such a creature, the target has Advantage on any new saving throw against the relevant effect.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "paladin"
    ]
  },
  {
    "id": "purify-food-and-drink",
    "name": "Purify Food and Drink",
    "nameIT": "Purify Food and Drink",
    "level": 1,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione oppure Rituale",
    "range": "10 feet",
    "rangeIT": "3 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You remove poison and rot from nonmagical food and drink in a 5-foot-radius Sphere centered on a point within range.",
    "descriptionIT": "You remove poison and rot from nonmagical food and drink in a 5-foot-radius Sphere centered on a point within range.",
    "ritual": true,
    "source": "SRD 5.2",
    "classIds": [
      "paladin"
    ]
  },
  {
    "id": "ray-of-sickness",
    "name": "Ray of Sickness",
    "nameIT": "Ray of Sickness",
    "level": 1,
    "school": "necromancy",
    "schoolIT": "Necromanzia",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You shoot a greenish ray at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 Poison damage and has the Poisoned condition until the end of your next turn. Using a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 1.",
    "descriptionIT": "You shoot a greenish ray at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 Poison damage and has the Poisoned condition until the end of your next turn. Using a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 1.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "searing-smite",
    "name": "Searing Smite",
    "nameIT": "Searing Smite",
    "level": 1,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Bonus Action, which you take immedi- ately after hitting a target with a Melee weapon or an Unarmed Strike",
    "castingTimeIT": "1 azione bonus, which you take immedi- ately after hitting a target with a Melee weapon or an Unarmed Strike",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "1 minute",
    "durationIT": "1 minuto",
    "concentration": false,
    "description": "As you hit the target, it takes an extra 1d6 Fire damage from the attack. At the start of each of its turns until the spell ends, the target takes 1d6 Fire damage and then makes a Constitution saving throw. On a failed save, the spell continues. On a successful save, the spell ends. Using a Higher-Level Spell Slot. All the damage increases by 1d6 for each spell slot level above 1.",
    "descriptionIT": "As you hit the target, it takes an extra 1d6 Fire damage from the attack. At the start of each of its turns until the spell ends, the target takes 1d6 Fire damage and then makes a Constitution saving throw. On a failed save, the spell continues. On a successful save, the spell ends. Using a Higher-Level Spell Slot. All the damage increases by 1d6 for each spell slot level above 1.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "paladin"
    ]
  },
  {
    "id": "shield",
    "name": "Shield",
    "nameIT": "Shield",
    "level": 1,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Reaction, which you take when you are hit by an attack roll or targeted by the Magic Missile spell",
    "castingTimeIT": "1 reazione, which you take when you are hit by an attack roll or targeted by the Magic Missile spell",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "1 round",
    "durationIT": "1 round",
    "concentration": false,
    "description": "An imperceptible barrier of magical force protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from Magic Missile.",
    "descriptionIT": "An imperceptible barrier of magical force protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from Magic Missile.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "shield-of-faith",
    "name": "Shield of Faith",
    "nameIT": "Shield of Faith",
    "level": 1,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Bonus Action",
    "castingTimeIT": "1 azione bonus",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a prayer scroll",
      "mIT": "a prayer scroll"
    },
    "duration": "Concentration, up to 10 minutes",
    "durationIT": "Concentrazione, fino a 10 minuti",
    "concentration": true,
    "description": "A shimmering field surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration.",
    "descriptionIT": "A shimmering field surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "paladin"
    ]
  },
  {
    "id": "silent-image",
    "name": "Silent Image",
    "nameIT": "Silent Image",
    "level": 1,
    "school": "illusion",
    "schoolIT": "Illusione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of fleece",
      "mIT": "a bit of fleece"
    },
    "duration": "Concentration, up to 10 minutes",
    "durationIT": "Concentrazione, fino a 10 minuti",
    "concentration": true,
    "description": "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot Cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn’t accompanied by sound, smell, or other sensory effects. As a Magic action, you can cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Physical interaction with the image reveals it to be an illusion, since things can pass through it. A creature that takes a Study action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image.",
    "descriptionIT": "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot Cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn’t accompanied by sound, smell, or other sensory effects. As a Magic action, you can cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Physical interaction with the image reveals it to be an illusion, since things can pass through it. A creature that takes a Study action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "sleep",
    "name": "Sleep",
    "nameIT": "Sleep",
    "level": 1,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a pinch of sand or rose petals",
      "mIT": "a pinch of sand or rose petals"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "Each creature of your choice in a 5-foot-radius Sphere centered on a point within range must succeed on a Wisdom saving throw or have the Incapacitated condition until the end of its next turn, at which point it must repeat the save. If the target fails the second save, the target has the Unconscious condition for the duration. The spell ends on a target if it takes damage or someone within 5 feet of it takes an action to shake it out of the spell’s effect. Creatures that don’t sleep, such as elves, or that have Immunity to the Exhaustion condition automatically succeed on saves against this spell.",
    "descriptionIT": "Each creature of your choice in a 5-foot-radius Sphere centered on a point within range must succeed on a Wisdom saving throw or have the Incapacitated condition until the end of its next turn, at which point it must repeat the save. If the target fails the second save, the target has the Unconscious condition for the duration. The spell ends on a target if it takes damage or someone within 1,5 m of it takes an action to shake it out of the spell’s effect. Creatures that don’t sleep, such as elves, or that have Immunity to the Exhaustion condition automatically succeed on saves against this spell.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "speak-with-animals",
    "name": "Speak with Animals",
    "nameIT": "Speak with Animals",
    "level": 1,
    "school": "divination",
    "schoolIT": "Divinazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione oppure Rituale",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "10 minutes",
    "durationIT": "10 minuti",
    "concentration": false,
    "description": "For the duration, you can comprehend and verbally communicate with Beasts, and you can use any of the Influence action’s skill options with them. Most Beasts have little to say about topics that don’t pertain to survival or companionship, but at minimum, a Beast can give you information about nearby locations and monsters, including whatever it has perceived within the past day.",
    "descriptionIT": "For the duration, you can comprehend and verbally communicate with Beasts, and you can use any of the Influence action’s skill options with them. Most Beasts have little to say about topics that don’t pertain to survival or companionship, but at minimum, a Beast can give you information about nearby locations and monsters, including whatever it has perceived within the past day.",
    "ritual": true,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "ranger"
    ]
  },
  {
    "id": "thunderwave",
    "name": "Thunderwave",
    "nameIT": "Thunderwave",
    "level": 1,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You unleash a wave of thunderous energy. Each creature in a 15-foot Cube originating from you makes a Constitution saving throw. On a failed save, a creature takes 2d8 Thunder damage and is pushed 10 feet away from you. On a successful save, a creature takes half as much damage only. In addition, unsecured objects that are entirely within the Cube are pushed 10 feet away from you, and a thunderous boom is audible within 300 feet. Using a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 1.",
    "descriptionIT": "You unleash a wave of thunderous energy. Each creature in a 15-foot Cube originating from you makes a Constitution saving throw. On a failed save, a creature takes 2d8 Thunder damage and is pushed 3 m away from you. On a successful save, a creature takes half as much damage only. In addition, unsecured objects that are entirely within the Cube are pushed 3 m away from you, and a thunderous boom is audible within 90 m. Using a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 1.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "unseen-servant",
    "name": "Unseen Servant",
    "nameIT": "Unseen Servant",
    "level": 1,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione oppure Rituale",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of string and of wood",
      "mIT": "a bit of string and of wood"
    },
    "duration": "1 hour",
    "durationIT": "1 ora",
    "concentration": false,
    "description": "This spell creates an Invisible, mindless, shapeless, Medium force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 Hit Point, and a Strength of 2, and it can’t attack. If it drops to 0 Hit Points, the spell ends. Once on each of your turns as a Bonus Action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring drinks. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command. If you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends.",
    "descriptionIT": "This spell creates an Invisible, mindless, shapeless, Medium force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 Hit Point, and a Strength of 2, and it can’t attack. If it drops to 0 Hit Points, the spell ends. Once on each of your turns as a Bonus Action, you can mentally command the servant to move up to 4,5 m and interact with an object. The servant can perform simple tasks that a human could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring drinks. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command. If you command the servant to perform a task that would move it more than 18 m away from you, the spell ends.",
    "ritual": true,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "aid",
    "name": "Aid",
    "nameIT": "Aid",
    "level": 2,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a strip of white cloth",
      "mIT": "a strip of white cloth"
    },
    "duration": "8 hours",
    "durationIT": "8 ore",
    "concentration": false,
    "description": "Choose up to three creatures within range. Each target’s Hit Point maximum and current Hit Points increase by 5 for the duration. Using a Higher-Level Spell Slot. Each target’s Hit Points increase by 5 for each spell slot level above 2.",
    "descriptionIT": "Choose up to three creatures within range. Each target’s Hit Point maximum and current Hit Points increase by 5 for the duration. Using a Higher-Level Spell Slot. Each target’s Hit Points increase by 5 for each spell slot level above 2.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "paladin",
      "ranger"
    ]
  },
  {
    "id": "alter-self",
    "name": "Alter Self",
    "nameIT": "Alter Self",
    "level": 2,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 1 hour",
    "durationIT": "Concentrazione, fino a 1 ora",
    "concentration": true,
    "description": "You alter your physical form. Choose one of the following options. Its effects last for the duration, during which you can take a Magic action to replace the option you chose with a different one. Aquatic Adaptation. You sprout gills and grow webs between your fingers. You can breathe underwater and gain a Swim Speed equal to your Speed. Change Appearance. You alter your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and other distinguishing characteristics. You can make yourself appear as a member of another species, though none of your statistics change. You can’t appear as a creature of a different size, and your basic shape stays the same; if you’re bipedal, you can’t use this spell to become quadrupedal, for instance. For the duration, you can take a Magic action to change your appearance in this way again. Natural Weapons. You grow claws (Slashing), fangs (Piercing), horns (Piercing), or hooves (Bludgeoning). When you use your Unarmed Strike to deal damage with that new growth, it deals 1d6 damage of the type in parentheses instead of dealing the normal damage for your Unarmed Strike, and you use your spellcasting ability modifier for the attack and damage rolls rather than using Strength.",
    "descriptionIT": "You alter your physical form. Choose one of the following options. Its effects last for the duration, during which you can take a Magic action to replace the option you chose with a different one. Aquatic Adaptation. You sprout gills and grow webs between your fingers. You can breathe underwater and gain a Swim Speed equal to your Speed. Change Appearance. You alter your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and other distinguishing characteristics. You can make yourself appear as a member of another species, though none of your statistics change. You can’t appear as a creature of a different size, and your basic shape stays the same; if you’re bipedal, you can’t use this spell to become quadrupedal, for instance. For the duration, you can take a Magic action to change your appearance in this way again. Natural Weapons. You grow claws (Slashing), fangs (Piercing), horns (Piercing), or hooves (Bludgeoning). When you use your Unarmed Strike to deal damage with that new growth, it deals 1d6 damage of the type in parentheses instead of dealing the normal damage for your Unarmed Strike, and you use your spellcasting ability modifier for the attack and damage rolls rather than using Strength.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "animal-messenger",
    "name": "Animal Messenger",
    "nameIT": "Animal Messenger",
    "level": 2,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione oppure Rituale",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a morsel of food",
      "mIT": "a morsel of food"
    },
    "duration": "24 hours",
    "durationIT": "24 ore",
    "concentration": false,
    "description": "A Tiny Beast of your choice that you can see within range must succeed on a Charisma saving throw, or it attempts to deliver a message for you (if the target’s Challenge Rating isn’t 0, it automatically succeeds). You specify a location you have visited and a recipient who matches a general description, such as “a person dressed in the uniform of the town guard” or “a red-haired dwarf wearing a pointed hat.” You also communicate a message of up to twenty-five words. The Beast travels for the duration toward the specified location, covering about 25 miles per 24 hours or 50 miles if the Beast can fly. When the Beast arrives, it delivers your message to the creature that you described, mimicking your communication. If the Beast doesn’t reach its destination before the spell ends, the message is lost, and the Beast returns to where you cast the spell. Using a Higher-Level Spell Slot. The spell’s duration increases by 48 hours for each spell slot level above 2.",
    "descriptionIT": "A Tiny Beast of your choice that you can see within range must succeed on a Charisma saving throw, or it attempts to deliver a message for you (if the target’s Challenge Rating isn’t 0, it automatically succeeds). You specify a location you have visited and a recipient who matches a general description, such as “a person dressed in the uniform of the town guard” or “a red-haired dwarf wearing a pointed hat.” You also communicate a message of up to twenty-five words. The Beast travels for the duration toward the specified location, covering about 40 km per 24 hours or 80 km if the Beast can fly. When the Beast arrives, it delivers your message to the creature that you described, mimicking your communication. If the Beast doesn’t reach its destination before the spell ends, the message is lost, and the Beast returns to where you cast the spell. Using a Higher-Level Spell Slot. The spell’s duration increases by 48 hours for each spell slot level above 2.",
    "ritual": true,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "ranger"
    ]
  },
  {
    "id": "barkskin",
    "name": "Barkskin",
    "nameIT": "Barkskin",
    "level": 2,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Bonus Action",
    "castingTimeIT": "1 azione bonus",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "a handful of bark",
      "mIT": "a handful of bark"
    },
    "duration": "1 hour",
    "durationIT": "1 ora",
    "concentration": false,
    "description": "You touch a willing creature. Until the spell ends, the target’s skin assumes a bark-like appearance, and the target has an Armor Class of 17 if its AC is lower than that.",
    "descriptionIT": "You touch a willing creature. Until the spell ends, the target’s skin assumes a bark-like appearance, and the target has an Armor Class of 17 if its AC is lower than that.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "ranger"
    ]
  },
  {
    "id": "blindness-deafness",
    "name": "Blindness/Deafness",
    "nameIT": "Blindness/Deafness",
    "level": 2,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "120 feet",
    "rangeIT": "36 m",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "1 minute",
    "durationIT": "1 minuto",
    "concentration": false,
    "description": "One creature that you can see within range must succeed on a Constitution saving throw, or it has the Blinded or Deafened condition (your choice) for the duration. At the end of each of its turns, the target repeats the save, ending the spell on itself on a success. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 2.",
    "descriptionIT": "One creature that you can see within range must succeed on a Constitution saving throw, or it has the Blinded or Deafened condition (your choice) for the duration. At the end of each of its turns, the target repeats the save, ending the spell on itself on a success. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 2.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "blur",
    "name": "Blur",
    "nameIT": "Blur",
    "level": 2,
    "school": "illusion",
    "schoolIT": "Illusione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "Your body becomes blurred. For the duration, any creature has Disadvantage on attack rolls against you. An attacker is immune to this effect if it perceives you with Blindsight or Truesight.",
    "descriptionIT": "Your body becomes blurred. For the duration, any creature has Disadvantage on attack rolls against you. An attacker is immune to this effect if it perceives you with Blindsight or Truesight.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "calm-emotions",
    "name": "Calm Emotions",
    "nameIT": "Calm Emotions",
    "level": 2,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "Each Humanoid in a 20-foot-radius Sphere centered on a point you choose within range must succeed on a Charisma saving throw or be affected by one of the following effects (choose for each creature): • The creature has Immunity to the Charmed and Frightened conditions until the spell ends. If the creature was already Charmed or Frightened, those conditions are suppressed for the duration. • The creature becomes Indifferent about creatures of your choice that it’s Hostile toward. This indifference ends if the target takes damage or witnesses its allies taking damage. When the spell ends, the creature’s attitude returns to normal.",
    "descriptionIT": "Each Humanoid in a 20-foot-radius Sphere centered on a point you choose within range must succeed on a Charisma saving throw or be affected by one of the following effects (choose for each creature): • The creature has Immunity to the Charmed and Frightened conditions until the spell ends. If the creature was already Charmed or Frightened, those conditions are suppressed for the duration. • The creature becomes Indifferent about creatures of your choice that it’s Hostile toward. This indifference ends if the target takes damage or witnesses its allies taking damage. When the spell ends, the creature’s attitude returns to normal.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "darkness",
    "name": "Darkness",
    "nameIT": "Darkness",
    "level": 2,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": false,
      "m": "bat fur and a piece of coal",
      "mIT": "bat fur and a piece of coal"
    },
    "duration": "Concentration, up to 10 minutes",
    "durationIT": "Concentrazione, fino a 10 minuti",
    "concentration": true,
    "description": "For the duration, magical Darkness spreads from a point within range and fills a 15-foot-radius Sphere. Darkvision can’t see through it, and nonmagical light can’t illuminate it. Alternatively, you cast the spell on an object that isn’t being worn or carried, causing the Darkness to fill a 15-foot Emanation originating from that object. Covering that object with something opaque, such as a bowl or helm, blocks the Darkness. If any of this spell’s area overlaps with an area of Bright Light or Dim Light created by a spell of level 2 or lower, that other spell is dispelled.",
    "descriptionIT": "For the duration, magical Darkness spreads from a point within range and fills a 15-foot-radius Sphere. Darkvision can’t see through it, and nonmagical light can’t illuminate it. Alternatively, you cast the spell on an object that isn’t being worn or carried, causing the Darkness to fill a 15-foot Emanation originating from that object. Covering that object with something opaque, such as a bowl or helm, blocks the Darkness. If any of this spell’s area overlaps with an area of Bright Light or Dim Light created by a spell of level 2 or lower, that other spell is dispelled.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "darkvision",
    "name": "Darkvision",
    "nameIT": "Darkvision",
    "level": 2,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "a dried carrot",
      "mIT": "a dried carrot"
    },
    "duration": "8 hours",
    "durationIT": "8 ore",
    "concentration": false,
    "description": "For the duration, a willing creature you touch has Darkvision with a range of 150 feet.",
    "descriptionIT": "For the duration, a willing creature you touch has Darkvision with a range of 45 m.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "ranger",
      "sorcerer"
    ]
  },
  {
    "id": "detect-thoughts",
    "name": "Detect Thoughts",
    "nameIT": "Detect Thoughts",
    "level": 2,
    "school": "divination",
    "schoolIT": "Divinazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "1 Copper Piece",
      "mIT": "1 Copper Piece"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "You activate one of the effects below. Until the spell ends, you can activate either effect as a Magic action on your later turns. Sense Thoughts. You sense the presence of thoughts within 30 feet of yourself that belong to creatures that know languages or are telepathic. You don’t read the thoughts, but you know that a thinking creature is present. The spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead. Read Thoughts. Target one creature you can see within 30 feet of yourself or one creature within 30 feet of yourself that you detected with the Sense Thoughts option. You learn what is most on the target’s mind right now. If the target doesn’t know any languages and isn’t telepathic, you learn nothing. As a Magic action on your next turn, you can try to probe deeper into the target’s mind. If you probe deeper, the target makes a Wisdom saving throw. On a failed save, you discern the target’s reasoning, emotions, and something that looms large in its mind (such as a worry, love, or hate). On a successful save, the spell ends. Either way, the target knows that you are probing into its mind, and until you shift your attention away from the target’s mind, the target can take an action on its turn to make an Intelligence (Arcana) check against your spell save DC, ending the spell on a success.",
    "descriptionIT": "You activate one of the effects below. Until the spell ends, you can activate either effect as a Magic action on your later turns. Sense Thoughts. You sense the presence of thoughts within 9 m of yourself that belong to creatures that know languages or are telepathic. You don’t read the thoughts, but you know that a thinking creature is present. The spell is blocked by 0,3 m of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead. Read Thoughts. Target one creature you can see within 9 m of yourself or one creature within 9 m of yourself that you detected with the Sense Thoughts option. You learn what is most on the target’s mind right now. If the target doesn’t know any languages and isn’t telepathic, you learn nothing. As a Magic action on your next turn, you can try to probe deeper into the target’s mind. If you probe deeper, the target makes a Wisdom saving throw. On a failed save, you discern the target’s reasoning, emotions, and something that looms large in its mind (such as a worry, love, or hate). On a successful save, the spell ends. Either way, the target knows that you are probing into its mind, and until you shift your attention away from the target’s mind, the target can take an action on its turn to make an Intelligence (Arcana) check against your spell save DC, ending the spell on a success.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "dragon-s-breath",
    "name": "Dragon’s Breath",
    "nameIT": "Dragon’s Breath",
    "level": 2,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Bonus Action",
    "castingTimeIT": "1 azione bonus",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "a hot pepper",
      "mIT": "a hot pepper"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "You touch one willing creature, and choose Acid, Cold, Fire, Lightning, or Poison. Until the spell ends, the target can take a Magic action to exhale a 15-foot Cone. Each creature in that area makes a Dexterity saving throw, taking 3d6 damage of the chosen type on a failed save or half as much damage on a successful one. Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 2.",
    "descriptionIT": "You touch one willing creature, and choose Acid, Cold, Fire, Lightning, or Poison. Until the spell ends, the target can take a Magic action to exhale a 15-foot Cone. Each creature in that area makes a Dexterity saving throw, taking 3d6 damage of the chosen type on a failed save or half as much damage on a successful one. Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 2.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "enhance-ability",
    "name": "Enhance Ability",
    "nameIT": "Enhance Ability",
    "level": 2,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "fur or a feather",
      "mIT": "fur or a feather"
    },
    "duration": "Concentration, up to 1 hour",
    "durationIT": "Concentrazione, fino a 1 ora",
    "concentration": true,
    "description": "You touch a creature and choose Strength, Dexterity, Intelligence, Wisdom, or Charisma. For the duration, the target has Advantage on ability checks using the chosen ability. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 2. You can choose a different ability for each target.",
    "descriptionIT": "You touch a creature and choose Strength, Dexterity, Intelligence, Wisdom, or Charisma. For the duration, the target has Advantage on ability checks using the chosen ability. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 2. You can choose a different ability for each target.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "ranger",
      "sorcerer"
    ]
  },
  {
    "id": "enlarge-reduce",
    "name": "Enlarge/Reduce",
    "nameIT": "Enlarge/Reduce",
    "level": 2,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a pinch of powdered iron",
      "mIT": "a pinch of powdered iron"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "For the duration, the spell enlarges or reduces a creature or an object you can see within range (see the chosen effect below). A targeted object must be neither worn nor carried. If the target is an unwilling creature, it can make a Constitution saving throw. On a successful save, the spell has no effect. Everything that a targeted creature is wearing and carrying changes size with it. Any item it drops returns to normal size at once. A thrown weapon or piece of ammunition returns to normal size immediately after it hits or misses a target. Enlarge. The target’s size increases by one category—from Medium to Large, for example. The target also has Advantage on Strength checks and Strength saving throws. The target’s attacks with its enlarged weapons or Unarmed Strikes deal an extra 1d4 damage on a hit. Reduce. The target’s size decreases by one category—from Medium to Small, for example. The target also has Disadvantage on Strength checks and Strength saving throws. The target’s attacks with its reduced weapons or Unarmed Strikes deal 1d4 less damage on a hit (this can’t reduce the damage below 1).",
    "descriptionIT": "For the duration, the spell enlarges or reduces a creature or an object you can see within range (see the chosen effect below). A targeted object must be neither worn nor carried. If the target is an unwilling creature, it can make a Constitution saving throw. On a successful save, the spell has no effect. Everything that a targeted creature is wearing and carrying changes size with it. Any item it drops returns to normal size at once. A thrown weapon or piece of ammunition returns to normal size immediately after it hits or misses a target. Enlarge. The target’s size increases by one category—from Medium to Large, for example. The target also has Advantage on Strength checks and Strength saving throws. The target’s attacks with its enlarged weapons or Unarmed Strikes deal an extra 1d4 damage on a hit. Reduce. The target’s size decreases by one category—from Medium to Small, for example. The target also has Disadvantage on Strength checks and Strength saving throws. The target’s attacks with its reduced weapons or Unarmed Strikes deal 1d4 less damage on a hit (this can’t reduce the damage below 1).",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "enthrall",
    "name": "Enthrall",
    "nameIT": "Enthrall",
    "level": 2,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "You weave a distracting string of words, causing creatures of your choice that you can see within range to make a Wisdom saving throw. Any creature you or your companions are fighting automatically succeeds on this save. On a failed save, a target has a −10 penalty to Wisdom (Perception) checks and Passive Perception until the spell ends.",
    "descriptionIT": "You weave a distracting string of words, causing creatures of your choice that you can see within range to make a Wisdom saving throw. Any creature you or your companions are fighting automatically succeeds on this save. On a failed save, a target has a −10 penalty to Wisdom (Perception) checks and Passive Perception until the spell ends.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "find-steed",
    "name": "Find Steed",
    "nameIT": "Find Steed",
    "level": 2,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You summon an otherworldly being that appears as a loyal steed in an unoccupied space of your choice within range. This creature uses the Otherworldly Steed stat block. If you already have a steed from this spell, the steed is replaced by the new one. The steed resembles a Large, rideable animal of your choice, such as a horse, a camel, a dire wolf, or an elk. Whenever you cast the spell, choose the steed’s creature type—Celestial, Fey, or Fiend— which determines certain traits in the stat block. Combat. The steed is an ally to you and your allies. In combat, it shares your Initiative count, and it functions as a controlled mount while you ride it (as defined in the rules on mounted combat). If you have the Incapacitated condition, the steed takes its turn immediately after yours and acts independently, focusing on protecting you. Disappearance of the Steed. The steed disappears if it drops to 0 Hit Points or if you die. When it disappears, it leaves behind anything it was wearing or carrying. If you cast this spell again, you decide whether you summon the steed that disappeared or a different one. Using a Higher-Level Spell Slot. Use the spell slot’s level for the spell’s level in the stat block. face a choice of paths along the way there, you know which path is the most direct.",
    "descriptionIT": "You summon an otherworldly being that appears as a loyal steed in an unoccupied space of your choice within range. This creature uses the Otherworldly Steed stat block. If you already have a steed from this spell, the steed is replaced by the new one. The steed resembles a Large, rideable animal of your choice, such as a horse, a camel, a dire wolf, or an elk. Whenever you cast the spell, choose the steed’s creature type—Celestial, Fey, or Fiend— which determines certain traits in the stat block. Combat. The steed is an ally to you and your allies. In combat, it shares your Initiative count, and it functions as a controlled mount while you ride it (as defined in the rules on mounted combat). If you have the Incapacitated condition, the steed takes its turn immediately after yours and acts independently, focusing on protecting you. Disappearance of the Steed. The steed disappears if it drops to 0 Hit Points or if you die. When it disappears, it leaves behind anything it was wearing or carrying. If you cast this spell again, you decide whether you summon the steed that disappeared or a different one. Using a Higher-Level Spell Slot. Use the spell slot’s level for the spell’s level in the stat block. face a choice of paths along the way there, you know which path is the most direct.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "paladin"
    ]
  },
  {
    "id": "find-traps",
    "name": "Find Traps",
    "nameIT": "Find Traps",
    "level": 2,
    "school": "divination",
    "schoolIT": "Divinazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "120 feet",
    "rangeIT": "36 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You sense any trap within range that is within line of sight. A trap, for the purpose of this spell, includes any object or mechanism that was created to cause damage or other danger. Thus, the spell would sense the Alarm or Glyph of Warding spell or a mechanical pit trap, but it wouldn’t reveal a natural weakness in the floor, an unstable ceiling, or a hidden sinkhole. This spell reveals that a trap is present but not its location. You do learn the general nature of the danger posed by a trap you sense.",
    "descriptionIT": "You sense any trap within range that is within line of sight. A trap, for the purpose of this spell, includes any object or mechanism that was created to cause damage or other danger. Thus, the spell would sense the Alarm or Glyph of Warding spell or a mechanical pit trap, but it wouldn’t reveal a natural weakness in the floor, an unstable ceiling, or a hidden sinkhole. This spell reveals that a trap is present but not its location. You do learn the general nature of the danger posed by a trap you sense.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "ranger"
    ]
  },
  {
    "id": "flame-blade",
    "name": "Flame Blade",
    "nameIT": "Flame Blade",
    "level": 2,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Bonus Action",
    "castingTimeIT": "1 azione bonus",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "a sumac leaf",
      "mIT": "a sumac leaf"
    },
    "duration": "Concentration, up to 10 minutes",
    "durationIT": "Concentrazione, fino a 10 minuti",
    "concentration": true,
    "description": "You evoke a fiery blade in your free hand. The blade is similar in size and shape to a scimitar, and it lasts for the duration. If you let go of the blade, it disappears, but you can evoke it again as a Bonus Action. As a Magic action, you can make a melee spell attack with the fiery blade. On a hit, the target takes Fire damage equal to 3d6 plus your spellcasting ability modifier. The flaming blade sheds Bright Light in a 10-foot radius and Dim Light for an additional 10 feet. Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 2.",
    "descriptionIT": "You evoke a fiery blade in your free hand. The blade is similar in size and shape to a scimitar, and it lasts for the duration. If you let go of the blade, it disappears, but you can evoke it again as a Bonus Action. As a Magic action, you can make a melee spell attack with the fiery blade. On a hit, the target takes Fire damage equal to 3d6 plus your spellcasting ability modifier. The flaming blade sheds Bright Light in a 10-foot radius and Dim Light for an additional 3 m. Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 2.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "flaming-sphere",
    "name": "Flaming Sphere",
    "nameIT": "Flaming Sphere",
    "level": 2,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a ball of wax",
      "mIT": "a ball of wax"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "You create a 5-foot-diameter sphere of fire in an unoccupied space on the ground within range. It lasts for the duration. Any creature that ends its turn within 5 feet of the sphere makes a Dexterity saving throw, taking 2d6 Fire damage on a failed save or half as much damage on a successful one. As a Bonus Action, you can move the sphere up to 30 feet, rolling it along the ground. If you move the sphere into a creature’s space, that creature makes the save against the sphere, and the sphere stops moving for the turn. When you move the sphere, you can direct it over barriers up to 5 feet tall and jump it across pits up to 10 feet wide. Flammable objects that aren’t being worn or carried start burning if touched by the sphere, and it sheds Bright Light in a 20-foot radius and Dim Light for an additional 20 feet. Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 2.",
    "descriptionIT": "You create a 5-foot-diameter sphere of fire in an unoccupied space on the ground within range. It lasts for the duration. Any creature that ends its turn within 1,5 m of the sphere makes a Dexterity saving throw, taking 2d6 Fire damage on a failed save or half as much damage on a successful one. As a Bonus Action, you can move the sphere up to 9 m, rolling it along the ground. If you move the sphere into a creature’s space, that creature makes the save against the sphere, and the sphere stops moving for the turn. When you move the sphere, you can direct it over barriers up to 1,5 m tall and jump it across pits up to 3 m wide. Flammable objects that aren’t being worn or carried start burning if touched by the sphere, and it sheds Bright Light in a 20-foot radius and Dim Light for an additional 6 m. Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 2.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "gentle-repose",
    "name": "Gentle Repose",
    "nameIT": "Gentle Repose",
    "level": 2,
    "school": "necromancy",
    "schoolIT": "Necromanzia",
    "castingTime": "Action",
    "castingTimeIT": "1 azione oppure Rituale",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "2 Copper Pieces, which the spell consumes",
      "mIT": "2 Copper Pieces, which the spell consumes"
    },
    "duration": "10 days",
    "durationIT": "10 giorni",
    "concentration": false,
    "description": "You touch a corpse or other remains. For the duration, the target is protected from decay and can’t become Undead. The spell also effectively extends the time limit on raising the target from the dead, since days spent under the influence of this spell don’t count against the time limit of spells such as Raise Dead.",
    "descriptionIT": "You touch a corpse or other remains. For the duration, the target is protected from decay and can’t become Undead. The spell also effectively extends the time limit on raising the target from the dead, since days spent under the influence of this spell don’t count against the time limit of spells such as Raise Dead.",
    "ritual": true,
    "source": "SRD 5.2",
    "classIds": [
      "paladin"
    ]
  },
  {
    "id": "gust-of-wind",
    "name": "Gust of Wind",
    "nameIT": "Gust of Wind",
    "level": 2,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "a legume seed",
      "mIT": "a legume seed"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "A Line of strong wind 60 feet long and 10 feet wide blasts from you in a direction you choose for the duration. Each creature in the Line must succeed on a Strength saving throw or be pushed 15 feet away from you in a direction following the Line. A creature that ends its turn in the Line must make the same save. Any creature in the Line must spend 2 feet of movement for every 1 foot it moves when moving closer to you. The gust disperses gas or vapor, and it extinguishes candles and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them. As a Bonus Action on your later turns, you can change the direction in which the Line blasts from you.",
    "descriptionIT": "A Line of strong wind 18 m long and 3 m wide blasts from you in a direction you choose for the duration. Each creature in the Line must succeed on a Strength saving throw or be pushed 4,5 m away from you in a direction following the Line. A creature that ends its turn in the Line must make the same save. Any creature in the Line must spend 0,6 m of movement for every 0,3 m it moves when moving closer to you. The gust disperses gas or vapor, and it extinguishes candles and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them. As a Bonus Action on your later turns, you can change the direction in which the Line blasts from you.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "ranger",
      "sorcerer"
    ]
  },
  {
    "id": "heat-metal",
    "name": "Heat Metal",
    "nameIT": "Heat Metal",
    "level": 2,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a piece of iron and a flame",
      "mIT": "a piece of iron and a flame"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "Choose a manufactured metal object, such as a metal weapon or a suit of Heavy or Medium metal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 2d8 Fire damage when you cast the spell. Until the spell ends, you can take a Bonus Action on each of your later turns to deal this damage again if the object is within range. If a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a Constitution saving throw or drop the object if it can. If it doesn’t drop the object, it has Disadvantage on attack rolls and ability checks until the start of your next turn. Using a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 2.",
    "descriptionIT": "Choose a manufactured metal object, such as a metal weapon or a suit of Heavy or Medium metal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 2d8 Fire damage when you cast the spell. Until the spell ends, you can take a Bonus Action on each of your later turns to deal this damage again if the object is within range. If a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a Constitution saving throw or drop the object if it can. If it doesn’t drop the object, it has Disadvantage on attack rolls and ability checks until the start of your next turn. Using a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 2.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "hold-person",
    "name": "Hold Person",
    "nameIT": "Hold Person",
    "level": 2,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a straight piece of iron",
      "mIT": "a straight piece of iron"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "Choose a Humanoid that you can see within range. The target must succeed on a Wisdom saving throw or have the Paralyzed condition for the duration. At the end of each of its turns, the target repeats the save, ending the spell on itself on a success. Using a Higher-Level Spell Slot. You can target one additional Humanoid for each spell slot level above 2.",
    "descriptionIT": "Choose a Humanoid that you can see within range. The target must succeed on a Wisdom saving throw or have the Paralyzed condition for the duration. At the end of each of its turns, the target repeats the save, ending the spell on itself on a success. Using a Higher-Level Spell Slot. You can target one additional Humanoid for each spell slot level above 2.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "invisibility",
    "name": "Invisibility",
    "nameIT": "Invisibility",
    "level": 2,
    "school": "illusion",
    "schoolIT": "Illusione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "an eyelash in gum arabic",
      "mIT": "an eyelash in gum arabic"
    },
    "duration": "Concentration, up to 1 hour",
    "durationIT": "Concentrazione, fino a 1 ora",
    "concentration": true,
    "description": "A creature you touch has the Invisible condition until the spell ends. The spell ends early immediately after the target makes an attack roll, deals damage, or casts a spell. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 2.",
    "descriptionIT": "A creature you touch has the Invisible condition until the spell ends. The spell ends early immediately after the target makes an attack roll, deals damage, or casts a spell. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 2.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "knock",
    "name": "Knock",
    "nameIT": "Knock",
    "level": 2,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "Choose an object that you can see within range. The object can be a door, a box, a chest, a set of manacles, a padlock, or another object that contains a mundane or magical means that prevents access. A target that is held shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or unbarred. If the object has multiple locks, only one of them is unlocked. If the target is held shut by Arcane Lock, that spell is suppressed for 10 minutes, during which time the target can be opened and closed. When you cast the spell, a loud knock, audible up to 300 feet away, emanates from the target.",
    "descriptionIT": "Choose an object that you can see within range. The object can be a door, a box, a chest, a set of manacles, a padlock, or another object that contains a mundane or magical means that prevents access. A target that is held shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or unbarred. If the object has multiple locks, only one of them is unlocked. If the target is held shut by Arcane Lock, that spell is suppressed for 10 minutes, during which time the target can be opened and closed. When you cast the spell, a loud knock, audible up to 90 m away, emanates from the target.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "lesser-restoration",
    "name": "Lesser Restoration",
    "nameIT": "Lesser Restoration",
    "level": 2,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Bonus Action",
    "castingTimeIT": "1 azione bonus",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You touch a creature and end one condition on it: Blinded, Deafened, Paralyzed, or Poisoned.",
    "descriptionIT": "You touch a creature and end one condition on it: Blinded, Deafened, Paralyzed, or Poisoned.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "paladin",
      "ranger"
    ]
  },
  {
    "id": "levitate",
    "name": "Levitate",
    "nameIT": "Levitate",
    "level": 2,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a metal spring",
      "mIT": "a metal spring"
    },
    "duration": "Concentration, up to 10 minutes",
    "durationIT": "Concentrazione, fino a 10 minuti",
    "concentration": true,
    "description": "One creature or loose object of your choice that you can see within range rises vertically up to 20 feet and remains suspended there for the duration. The spell can levitate an object that weighs up to 500 pounds. An unwilling creature that succeeds on a Constitution saving throw is unaffected. The target can move only by pushing or pulling against a fixed object or surface within reach (such as a wall or a ceiling), which allows it to move as if it were climbing. You can change the target’s altitude by up to 20 feet in either direction on your turn. If you are the target, you can move up or down as part of your move. Otherwise, you can take a Magic action to move the target, which must remain within the spell’s range. When the spell ends, the target floats gently to the ground if it is still aloft.",
    "descriptionIT": "One creature or loose object of your choice that you can see within range rises vertically up to 6 m and remains suspended there for the duration. The spell can levitate an object that weighs up to 500 pounds. An unwilling creature that succeeds on a Constitution saving throw is unaffected. The target can move only by pushing or pulling against a fixed object or surface within reach (such as a wall or a ceiling), which allows it to move as if it were climbing. You can change the target’s altitude by up to 6 m in either direction on your turn. If you are the target, you can move up or down as part of your move. Otherwise, you can take a Magic action to move the target, which must remain within the spell’s range. When the spell ends, the target floats gently to the ground if it is still aloft.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "locate-animals-or-plants",
    "name": "Locate Animals or Plants",
    "nameIT": "Locate Animals or Plants",
    "level": 2,
    "school": "divination",
    "schoolIT": "Divinazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione oppure Rituale",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "fur from a bloodhound",
      "mIT": "fur from a bloodhound"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "Describe or name a specific kind of Beast, Plant creature, or nonmagical plant. You learn the direction and distance to the closest creature or plant of that kind within 5 miles, if any are present.",
    "descriptionIT": "Describe or name a specific kind of Beast, Plant creature, or nonmagical plant. You learn the direction and distance to the closest creature or plant of that kind within 8 km, if any are present.",
    "ritual": true,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "ranger"
    ]
  },
  {
    "id": "locate-object",
    "name": "Locate Object",
    "nameIT": "Locate Object",
    "level": 2,
    "school": "divination",
    "schoolIT": "Divinazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "a forked twig",
      "mIT": "a forked twig"
    },
    "duration": "Concentration, up to 10 minutes",
    "durationIT": "Concentrazione, fino a 10 minuti",
    "concentration": true,
    "description": "Describe or name an object that is familiar to you. You sense the direction to the object’s location if that object is within 1,000 feet of you. If the object is in motion, you know the direction of its movement. The spell can locate a specific object known to you if you have seen it up close—within 30 feet—at least once. Alternatively, the spell can locate the nearest object of a particular kind, such as a certain kind of apparel, jewelry, furniture, tool, or weapon. This spell can’t locate an object if any thickness of lead blocks a direct path between you and the object.",
    "descriptionIT": "Describe or name an object that is familiar to you. You sense the direction to the object’s location if that object is within 1,0 m of you. If the object is in motion, you know the direction of its movement. The spell can locate a specific object known to you if you have seen it up close—within 9 m—at least once. Alternatively, the spell can locate the nearest object of a particular kind, such as a certain kind of apparel, jewelry, furniture, tool, or weapon. This spell can’t locate an object if any thickness of lead blocks a direct path between you and the object.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "paladin",
      "ranger"
    ]
  },
  {
    "id": "magic-mouth",
    "name": "Magic Mouth",
    "nameIT": "Magic Mouth",
    "level": 2,
    "school": "illusion",
    "schoolIT": "Illusione",
    "castingTime": "1 minute",
    "castingTimeIT": "1 minuto oppure Rituale",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true,
      "m": "jade dust worth 10+ GP, which the spell consumes",
      "mIT": "jade dust worth 10+ GP, which the spell consumes"
    },
    "duration": "Until dispelled",
    "durationIT": "Until dispelled",
    "concentration": false,
    "description": "You implant a message within an object in range—a message that is uttered when a trigger condition is met. Choose an object that you can see and that isn’t being worn or carried by another creature. Then speak the message, which must be 25 words or fewer, though it can be delivered over as long as 10 minutes. Finally, determine the circumstance that will trigger the spell to deliver your message. When that trigger occurs, a magical mouth appears on the object and recites the message in your voice and at the same volume you spoke. If the object you chose has a mouth or something that looks like a mouth (for example, the mouth of a statue), the magical mouth appears there, so the words appear to come from the object’s mouth. When you cast this spell, you can have the spell end after it delivers its message, or it can remain and repeat its message whenever the trigger occurs. The trigger can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the object. For example, you could instruct the mouth to speak when any creature moves within 30 feet of the object or when a silver bell rings within 30 feet of it.",
    "descriptionIT": "You implant a message within an object in range—a message that is uttered when a trigger condition is met. Choose an object that you can see and that isn’t being worn or carried by another creature. Then speak the message, which must be 25 words or fewer, though it can be delivered over as long as 10 minutes. Finally, determine the circumstance that will trigger the spell to deliver your message. When that trigger occurs, a magical mouth appears on the object and recites the message in your voice and at the same volume you spoke. If the object you chose has a mouth or something that looks like a mouth (for example, the mouth of a statue), the magical mouth appears there, so the words appear to come from the object’s mouth. When you cast this spell, you can have the spell end after it delivers its message, or it can remain and repeat its message whenever the trigger occurs. The trigger can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 9 m of the object. For example, you could instruct the mouth to speak when any creature moves within 9 m of the object or when a silver bell rings within 9 m of it.",
    "ritual": true,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "magic-weapon",
    "name": "Magic Weapon",
    "nameIT": "Magic Weapon",
    "level": 2,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Bonus Action",
    "castingTimeIT": "1 azione bonus",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "1 hour",
    "durationIT": "1 ora",
    "concentration": false,
    "description": "You touch a nonmagical weapon. Until the spell ends, that weapon becomes a magic weapon with a +1 bonus to attack rolls and damage rolls. The spell ends early if you cast it again. Using a Higher-Level Spell Slot. The bonus increases to +2 with a level 3–5 spell slot. The bonus increases to +3 with a level 6+ spell slot.",
    "descriptionIT": "You touch a nonmagical weapon. Until the spell ends, that weapon becomes a magic weapon with a +1 bonus to attack rolls and damage rolls. The spell ends early if you cast it again. Using a Higher-Level Spell Slot. The bonus increases to +2 with a level 3–5 spell slot. The bonus increases to +3 with a level 6+ spell slot.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "paladin",
      "ranger",
      "sorcerer"
    ]
  },
  {
    "id": "mirror-image",
    "name": "Mirror Image",
    "nameIT": "Mirror Image",
    "level": 2,
    "school": "illusion",
    "schoolIT": "Illusione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "1 minute",
    "durationIT": "1 minuto",
    "concentration": false,
    "description": "Three illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move with you and mimic your actions, shifting position so it’s impossible to track which image is real. Each time a creature hits you with an attack roll during the spell’s duration, roll a d6 for each of your remaining duplicates. If any of the d6s rolls a 3 or higher, one of the duplicates is hit instead of you, and the duplicate is destroyed. The duplicates otherwise ignore all other damage and effects. The spell ends when all three duplicates are destroyed. A creature is unaffected by this spell if it has the Blinded condition, Blindsight, or Truesight.",
    "descriptionIT": "Three illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move with you and mimic your actions, shifting position so it’s impossible to track which image is real. Each time a creature hits you with an attack roll during the spell’s duration, roll a d6 for each of your remaining duplicates. If any of the d6s rolls a 3 or higher, one of the duplicates is hit instead of you, and the duplicate is destroyed. The duplicates otherwise ignore all other damage and effects. The spell ends when all three duplicates are destroyed. A creature is unaffected by this spell if it has the Blinded condition, Blindsight, or Truesight.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "misty-step",
    "name": "Misty Step",
    "nameIT": "Misty Step",
    "level": 2,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Bonus Action",
    "castingTimeIT": "1 azione bonus",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space you can see.",
    "descriptionIT": "Briefly surrounded by silvery mist, you teleport up to 9 m to an unoccupied space you can see.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "pass-without-trace",
    "name": "Pass without Trace",
    "nameIT": "Pass without Trace",
    "level": 2,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "ashes from burned mistletoe",
      "mIT": "ashes from burned mistletoe"
    },
    "duration": "Concentration, up to 1 hour",
    "durationIT": "Concentrazione, fino a 1 ora",
    "concentration": true,
    "description": "You radiate a concealing aura in a 30-foot Emanation for the duration. While in the aura, you and each creature you choose have a +10 bonus to Dexterity (Stealth) checks and leave no tracks.",
    "descriptionIT": "You radiate a concealing aura in a 30-foot Emanation for the duration. While in the aura, you and each creature you choose have a +10 bonus to Dexterity (Stealth) checks and leave no tracks.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "ranger"
    ]
  },
  {
    "id": "prayer-of-healing",
    "name": "Prayer of Healing",
    "nameIT": "Prayer of Healing",
    "level": 2,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "10 minutes",
    "castingTimeIT": "10 minuti",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "Up to five creatures of your choice who remain within range for the spell’s entire casting gain the benefits of a Short Rest and also regain 2d8 Hit Points. A creature can’t be affected by this spell again until that creature finishes a Long Rest. Using a Higher-Level Spell Slot. The healing increases by 1d8 for each spell slot level above 2.",
    "descriptionIT": "Up to five creatures of your choice who remain within range for the spell’s entire casting gain the benefits of a Short Rest and also regain 2d8 Hit Points. A creature can’t be affected by this spell again until that creature finishes a Long Rest. Using a Higher-Level Spell Slot. The healing increases by 1d8 for each spell slot level above 2.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "paladin"
    ]
  },
  {
    "id": "protection-from-poison",
    "name": "Protection from Poison",
    "nameIT": "Protection from Poison",
    "level": 2,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "1 hour",
    "durationIT": "1 ora",
    "concentration": false,
    "description": "You touch a creature and end the Poisoned condition on it. For the duration, the target has Advantage on saving throws to avoid or end the Poisoned condition, and it has Resistance to Poison damage.",
    "descriptionIT": "You touch a creature and end the Poisoned condition on it. For the duration, the target has Advantage on saving throws to avoid or end the Poisoned condition, and it has Resistance to Poison damage.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "paladin",
      "ranger"
    ]
  },
  {
    "id": "scorching-ray",
    "name": "Scorching Ray",
    "nameIT": "Scorching Ray",
    "level": 2,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "120 feet",
    "rangeIT": "36 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You hurl three fiery rays. You can hurl them at one target within range or at several. Make a ranged spell attack for each ray. On a hit, the target takes 2d6 Fire damage. Using a Higher-Level Spell Slot. You create one additional ray for each spell slot level above 2.",
    "descriptionIT": "You hurl three fiery rays. You can hurl them at one target within range or at several. Make a ranged spell attack for each ray. On a hit, the target takes 2d6 Fire damage. Using a Higher-Level Spell Slot. You create one additional ray for each spell slot level above 2.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "see-invisibility",
    "name": "See Invisibility",
    "nameIT": "See Invisibility",
    "level": 2,
    "school": "divination",
    "schoolIT": "Divinazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "a pinch of talc",
      "mIT": "a pinch of talc"
    },
    "duration": "1 hour",
    "durationIT": "1 ora",
    "concentration": false,
    "description": "For the duration, you see creatures and objects that have the Invisible condition as if they were visible, and you can see into the Ethereal Plane. Creatures and objects there appear ghostly.",
    "descriptionIT": "For the duration, you see creatures and objects that have the Invisible condition as if they were visible, and you can see into the Ethereal Plane. Creatures and objects there appear ghostly.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "shatter",
    "name": "Shatter",
    "nameIT": "Shatter",
    "level": 2,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a chip of mica",
      "mIT": "a chip of mica"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "A loud noise erupts from a point of your choice within range. Each creature in a 10-foot-radius Sphere centered there makes a Constitution saving throw, taking 3d8 Thunder damage on a failed save or half as much damage on a successful one. A Construct has Disadvantage on the save. A nonmagical object that isn’t being worn or carried also takes the damage if it’s in the spell’s area. Using a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 2.",
    "descriptionIT": "A loud noise erupts from a point of your choice within range. Each creature in a 10-foot-radius Sphere centered there makes a Constitution saving throw, taking 3d8 Thunder damage on a failed save or half as much damage on a successful one. A Construct has Disadvantage on the save. A nonmagical object that isn’t being worn or carried also takes the damage if it’s in the spell’s area. Using a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 2.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "shining-smite",
    "name": "Shining Smite",
    "nameIT": "Shining Smite",
    "level": 2,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Bonus Action, which you take immedi- ately after hitting a creature with a Melee weapon or an Unarmed Strike",
    "castingTimeIT": "1 azione bonus, which you take immedi- ately after hitting a creature with a Melee weapon or an Unarmed Strike",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "The target hit by the strike takes an extra 2d6 Radiant damage from the attack. Until the spell ends, the target sheds Bright Light in a 5-foot radius, attack rolls against it have Advantage, and it can’t benefit from the Invisible condition. Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 2.",
    "descriptionIT": "The target hit by the strike takes an extra 2d6 Radiant damage from the attack. Until the spell ends, the target sheds Bright Light in a 5-foot radius, attack rolls against it have Advantage, and it can’t benefit from the Invisible condition. Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 2.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "paladin"
    ]
  },
  {
    "id": "silence",
    "name": "Silence",
    "nameIT": "Silence",
    "level": 2,
    "school": "illusion",
    "schoolIT": "Illusione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione oppure Rituale",
    "range": "120 feet",
    "rangeIT": "36 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 10 minutes",
    "durationIT": "Concentrazione, fino a 10 minuti",
    "concentration": true,
    "description": "For the duration, no sound can be created within or pass through a 20-foot-radius Sphere centered on a point you choose within range. Any creature or object entirely inside the Sphere has Immunity to Thunder damage, and creatures have the Deafened condition while entirely inside it. Casting a spell that includes a Verbal component is impossible there.",
    "descriptionIT": "For the duration, no sound can be created within or pass through a 20-foot-radius Sphere centered on a point you choose within range. Any creature or object entirely inside the Sphere has Immunity to Thunder damage, and creatures have the Deafened condition while entirely inside it. Casting a spell that includes a Verbal component is impossible there.",
    "ritual": true,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "ranger"
    ]
  },
  {
    "id": "spider-climb",
    "name": "Spider Climb",
    "nameIT": "Spider Climb",
    "level": 2,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "a drop of bitumen and a spider",
      "mIT": "a drop of bitumen and a spider"
    },
    "duration": "Concentration, up to 1 hour",
    "durationIT": "Concentrazione, fino a 1 ora",
    "concentration": true,
    "description": "Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and along ceilings, while leaving its hands free. The target also gains a Climb Speed equal to its Speed. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 2.",
    "descriptionIT": "Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and along ceilings, while leaving its hands free. The target also gains a Climb Speed equal to its Speed. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 2.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "spike-growth",
    "name": "Spike Growth",
    "nameIT": "Spike Growth",
    "level": 2,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "150 feet",
    "rangeIT": "45 m",
    "components": {
      "v": true,
      "s": true,
      "m": "seven thorns",
      "mIT": "seven thorns"
    },
    "duration": "Concentration, up to 10 minutes",
    "durationIT": "Concentrazione, fino a 10 minuti",
    "concentration": true,
    "description": "The ground in a 20-foot-radius Sphere centered on a point within range sprouts hard spikes and thorns. The area becomes Difficult Terrain for the duration. When a creature moves into or within the area, it takes 2d4 Piercing damage for every 5 feet it travels. The transformation of the ground is camouflaged to look natural. Any creature that can’t see the area when the spell is cast must take a Search action and succeed on a Wisdom (Perception or Survival) check against your spell save DC to recognize the terrain as hazardous before entering it.",
    "descriptionIT": "The ground in a 20-foot-radius Sphere centered on a point within range sprouts hard spikes and thorns. The area becomes Difficult Terrain for the duration. When a creature moves into or within the area, it takes 2d4 Piercing damage for every 1,5 m it travels. The transformation of the ground is camouflaged to look natural. Any creature that can’t see the area when the spell is cast must take a Search action and succeed on a Wisdom (Perception or Survival) check against your spell save DC to recognize the terrain as hazardous before entering it.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "ranger"
    ]
  },
  {
    "id": "suggestion",
    "name": "Suggestion",
    "nameIT": "Suggestion",
    "level": 2,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": false,
      "m": "a drop of honey",
      "mIT": "a drop of honey"
    },
    "duration": "Concentration, up to 8 hours",
    "durationIT": "Concentrazione, fino a 8 ore",
    "concentration": true,
    "description": "You suggest a course of activity—described in no more than 25 words—to one creature you can see within range that can hear and understand you. The suggestion must sound achievable and not involve anything that would obviously deal damage to the target or its allies. For example, you could say, “Fetch the key to the cult’s treasure vault, and give the key to me.” Or you could say, “Stop fighting, leave this library peacefully, and don’t return.” The target must succeed on a Wisdom saving throw or have the Charmed condition for the duration or until you or your allies deal damage to the target. The Charmed target pursues the suggestion to the best of its ability. The suggested activity can continue for the entire duration, but if the suggested activity can be completed in a shorter time, the spell ends for the target upon completing it.",
    "descriptionIT": "You suggest a course of activity—described in no more than 25 words—to one creature you can see within range that can hear and understand you. The suggestion must sound achievable and not involve anything that would obviously deal damage to the target or its allies. For example, you could say, “Fetch the key to the cult’s treasure vault, and give the key to me.” Or you could say, “Stop fighting, leave this library peacefully, and don’t return.” The target must succeed on a Wisdom saving throw or have the Charmed condition for the duration or until you or your allies deal damage to the target. The Charmed target pursues the suggestion to the best of its ability. The suggested activity can continue for the entire duration, but if the suggested activity can be completed in a shorter time, the spell ends for the target upon completing it.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "warding-bond",
    "name": "Warding Bond",
    "nameIT": "Warding Bond",
    "level": 2,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "a pair of platinum rings worth 50+ GP each, which you and the target must wear for the duration",
      "mIT": "a pair of platinum rings worth 50+ GP each, which you and the target must wear for the duration"
    },
    "duration": "1 hour",
    "durationIT": "1 ora",
    "concentration": false,
    "description": "You touch another creature that is willing and create a mystic connection between you and the target until the spell ends. While the target is within 60 feet of you, it gains a +1 bonus to AC and saving throws, and it has Resistance to all damage. Also, each time it takes damage, you take the same amount of damage. The spell ends if you drop to 0 Hit Points or if you and the target become separated by more than 60 feet. It also ends if the spell is cast again on either of the connected creatures.",
    "descriptionIT": "You touch another creature that is willing and create a mystic connection between you and the target until the spell ends. While the target is within 18 m of you, it gains a +1 bonus to AC and saving throws, and it has Resistance to all damage. Also, each time it takes damage, you take the same amount of damage. The spell ends if you drop to 0 Hit Points or if you and the target become separated by more than 18 m. It also ends if the spell is cast again on either of the connected creatures.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "paladin"
    ]
  },
  {
    "id": "web",
    "name": "Web",
    "nameIT": "Web",
    "level": 2,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of spiderweb",
      "mIT": "a bit of spiderweb"
    },
    "duration": "Concentration, up to 1 hour",
    "durationIT": "Concentrazione, fino a 1 ora",
    "concentration": true,
    "description": "You conjure a mass of sticky webbing at a point within range. The webs fill a 20-foot Cube there for the duration. The webs are Difficult Terrain, and the area within them is Lightly Obscured. If the webs aren’t anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet. The first time a creature enters the webs on a turn or starts its turn there, it must succeed on a Dexterity saving throw or have the Restrained condition while in the webs or until it breaks free. A creature Restrained by the webs can take an action to make a Strength (Athletics) check against your spell save DC. If it succeeds, it is no longer Restrained. The webs are flammable. Any 5-foot Cube of webs exposed to fire burns away in 1 round, dealing 2d4 Fire damage to any creature that starts its turn in the fire.",
    "descriptionIT": "You conjure a mass of sticky webbing at a point within range. The webs fill a 20-foot Cube there for the duration. The webs are Difficult Terrain, and the area within them is Lightly Obscured. If the webs aren’t anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 1,5 m. The first time a creature enters the webs on a turn or starts its turn there, it must succeed on a Dexterity saving throw or have the Restrained condition while in the webs or until it breaks free. A creature Restrained by the webs can take an action to make a Strength (Athletics) check against your spell save DC. If it succeeds, it is no longer Restrained. The webs are flammable. Any 5-foot Cube of webs exposed to fire burns away in 1 round, dealing 2d4 Fire damage to any creature that starts its turn in the fire.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "zone-of-truth",
    "name": "Zone of Truth",
    "nameIT": "Zone of Truth",
    "level": 2,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "10 minutes",
    "durationIT": "10 minuti",
    "concentration": false,
    "description": "You create a magical zone that guards against deception in a 15-foot-radius Sphere centered on a point within range. Until the spell ends, a creature that enters the spell’s area for the first time on a turn or starts its turn there makes a Charisma saving throw. On a failed save, a creature can’t speak a deliberate lie while in the radius. You know whether a creature succeeds or fails on this save. An affected creature is aware of the spell and can avoid answering questions to which it would normally respond with a lie. Such a creature can be evasive yet must be truthful. Rules Glossary Glossary Conventions The glossary uses the following conventions: Tags in Brackets. Some entries have a tag in brackets after the entry’s name, as in “Attack [Action].” A tag—Action, Area of Effect, Attitude, Condition, or Hazard—indicates that a rule is part of a family of rules. The tags also have glossary entries. “You.” The game’s rules—in this glossary and elsewhere—often talk about something happening to you in the game world. That “you” refers to the creature or object that the rule applies to in a particular moment of play. For example, the “you” in the Prone condition is a creature that currently has that condition. “See Also.” Some glossary entries include a See also section that points to other entries in the glossary, to other parts of this document, or both. No Obsolete Terms. The glossary contains definitions of current rules terms only. If you’re looking for a term from an earlier version of the fifth edition rules, consult the index. Abbreviations. The abbreviations listed below appear in this glossary and elsewhere in the rules. AC Armor Class C Concentration CE Chaotic Evil CG Chaotic Good Cha. Charisma CN Chaotic Neutral Con. Constitution CP Copper Piece(s) CR Challenge Rating DC Difficulty Class Dex. Dexterity EP Electrum Piece(s) GM Game Master GP Gold Piece(s) HP Hit Point(s) Int. Intelligence LE Lawful Evil LG Lawful Good LN Lawful Neutral M Material component N Neutral NE Neutral Evil NG Neutral Good NPC Nonplayer character PB Proficiency Bonus PP Platinum Piece(s) R Ritual S Somatic component SP Silver Piece(s) Str. Strength V Verbal component Wis. Wisdom XP Experience Point(s) Rules Definitions Here are definitions of various rules. Ability Check An ability check is a D20 Test that represents using one of the six abilities—or a specific skill associated with an ability—to overcome a challenge. See also “Playing the Game” (“D20 Tests” and “Proficiency”). Ability Score and Modifier A creature has six ability scores—Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma—each of which has a corresponding modifier. Add the modifier when you make a D20 Test with the corresponding ability or when a rule asks you to do so. See also “Playing the Game” (“The Six Abilities”). Action On your turn, you can take one action. Choose which action to take from those below or from the special actions provided by your features. See also “Playing the Game” (“Actions”). These actions are defined elsewhere in this glossary: Attack Dash Disengage Dodge Help Hide Influence Magic Ready Search Study Utilize Advantage If you have Advantage on a D20 Test, roll two d20s, and use the higher roll. A roll can’t be affected by more than one Advantage, and Advantage and Disadvantage on the same roll cancel each other. See also “Playing the Game” (“D20 Tests”). Adventure An adventure is a series of encounters. A story emerges through playing them. See also “Encounter.” Alignment A creature’s alignment broadly describes its ethical attitudes and ideals. Alignment is a combination of two factors: one identifies morality (good, evil, or neutral), and the other describes attitudes toward order (lawful, chaotic, or neutral). These factors allow for nine possible combinations, such as Lawful Good and Neutral Evil. See also “Character Creation” (“Create Your Character”). Ally A creature is your ally if it is a member of your adventuring party, your friend, on your side in combat, or a creature that the rules or the GM designates as your ally.",
    "descriptionIT": "You create a magical zone that guards against deception in a 15-foot-radius Sphere centered on a point within range. Until the spell ends, a creature that enters the spell’s area for the first time on a turn or starts its turn there makes a Charisma saving throw. On a failed save, a creature can’t speak a deliberate lie while in the radius. You know whether a creature succeeds or fails on this save. An affected creature is aware of the spell and can avoid answering questions to which it would normally respond with a lie. Such a creature can be evasive yet must be truthful. Rules Glossary Glossary Conventions The glossary uses the following conventions: Tags in Brackets. Some entries have a tag in brackets after the entry’s name, as in “Attack [Action].” A tag—Action, Area of Effect, Attitude, Condition, or Hazard—indicates that a rule is part of a family of rules. The tags also have glossary entries. “You.” The game’s rules—in this glossary and elsewhere—often talk about something happening to you in the game world. That “you” refers to the creature or object that the rule applies to in a particular moment of play. For example, the “you” in the Prone condition is a creature that currently has that condition. “See Also.” Some glossary entries include a See also section that points to other entries in the glossary, to other parts of this document, or both. No Obsolete Terms. The glossary contains definitions of current rules terms only. If you’re looking for a term from an earlier version of the fifth edition rules, consult the index. Abbreviations. The abbreviations listed below appear in this glossary and elsewhere in the rules. AC Armor Class C Concentration CE Chaotic Evil CG Chaotic Good Cha. Charisma CN Chaotic Neutral Con. Constitution CP Copper Piece(s) CR Challenge Rating DC Difficulty Class Dex. Dexterity EP Electrum Piece(s) GM Game Master GP Gold Piece(s) HP Hit Point(s) Int. Intelligence LE Lawful Evil LG Lawful Good LN Lawful Neutral M Material component N Neutral NE Neutral Evil NG Neutral Good NPC Nonplayer character PB Proficiency Bonus PP Platinum Piece(s) R Ritual S Somatic component SP Silver Piece(s) Str. Strength V Verbal component Wis. Wisdom XP Experience Point(s) Rules Definitions Here are definitions of various rules. Ability Check An ability check is a D20 Test that represents using one of the six abilities—or a specific skill associated with an ability—to overcome a challenge. See also “Playing the Game” (“D20 Tests” and “Proficiency”). Ability Score and Modifier A creature has six ability scores—Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma—each of which has a corresponding modifier. Add the modifier when you make a D20 Test with the corresponding ability or when a rule asks you to do so. See also “Playing the Game” (“The Six Abilities”). Action On your turn, you can take one action. Choose which action to take from those below or from the special actions provided by your features. See also “Playing the Game” (“Actions”). These actions are defined elsewhere in this glossary: Attack Dash Disengage Dodge Help Hide Influence Magic Ready Search Study Utilize Advantage If you have Advantage on a D20 Test, roll two d20s, and use the higher roll. A roll can’t be affected by more than one Advantage, and Advantage and Disadvantage on the same roll cancel each other. See also “Playing the Game” (“D20 Tests”). Adventure An adventure is a series of encounters. A story emerges through playing them. See also “Encounter.” Alignment A creature’s alignment broadly describes its ethical attitudes and ideals. Alignment is a combination of two factors: one identifies morality (good, evil, or neutral), and the other describes attitudes toward order (lawful, chaotic, or neutral). These factors allow for nine possible combinations, such as Lawful Good and Neutral Evil. See also “Character Creation” (“Create Your Character”). Ally A creature is your ally if it is a member of your adventuring party, your friend, on your side in combat, or a creature that the rules or the GM designates as your ally.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "paladin"
    ]
  },
  {
    "id": "bestow-curse",
    "name": "Bestow Curse",
    "nameIT": "Bestow Curse",
    "level": 3,
    "school": "necromancy",
    "schoolIT": "Necromanzia",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "You touch a creature, which must succeed on a Wisdom saving throw or become cursed for the duration. Until the curse ends, the target suffers one of the following effects of your choice: • Choose one ability. The target has Disadvantage on ability checks and saving throws made with that ability. • The target has Disadvantage on attack rolls against you. • In combat, the target must succeed on a Wisdom saving throw at the start of each of its turns or be forced to take the Dodge action on that turn. • If you deal damage to the target with an attack roll or a spell, the target takes an extra 1d8 Necrotic damage. Using a Higher-Level Spell Slot. If you cast this spell using a level 4 spell slot, you can maintain Concentration on it for up to 10 minutes. If you use a level 5+ spell slot, the spell doesn’t require Concentration, and the duration becomes 8 hours (level 5–6 slot) or 24 hours (level 7–8 slot). If you use a level 9 spell slot, the spell lasts until dispelled.",
    "descriptionIT": "You touch a creature, which must succeed on a Wisdom saving throw or become cursed for the duration. Until the curse ends, the target suffers one of the following effects of your choice: • Choose one ability. The target has Disadvantage on ability checks and saving throws made with that ability. • The target has Disadvantage on attack rolls against you. • In combat, the target must succeed on a Wisdom saving throw at the start of each of its turns or be forced to take the Dodge action on that turn. • If you deal damage to the target with an attack roll or a spell, the target takes an extra 1d8 Necrotic damage. Using a Higher-Level Spell Slot. If you cast this spell using a level 4 spell slot, you can maintain Concentration on it for up to 10 minutes. If you use a level 5+ spell slot, the spell doesn’t require Concentration, and the duration becomes 8 hours (level 5–6 slot) or 24 hours (level 7–8 slot). If you use a level 9 spell slot, the spell lasts until dispelled.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "blink",
    "name": "Blink",
    "nameIT": "Blink",
    "level": 3,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "1 minute",
    "durationIT": "1 minuto",
    "concentration": false,
    "description": "Roll 1d6 at the end of each of your turns for the duration. On a roll of 4–6, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell ends instantly if you are already on that plane). While on the Ethereal Plane, you can perceive the plane you left, which is cast in shades of gray, but you can’t see anything there more than 60 feet away. You can affect and be affected only by other creatures on the Ethereal Plane, and creatures on the other plane can’t perceive you unless they have a special ability that lets them perceive things on the Ethereal Plane. You return to the other plane at the start of your next turn and when the spell ends if you are on the Ethereal Plane. You return to an unoccupied space of your choice that you can see within 10 feet of the space you left. If no unoccupied space is available within that range, you appear in the nearest unoccupied space.",
    "descriptionIT": "Roll 1d6 at the end of each of your turns for the duration. On a roll of 4–6, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell ends instantly if you are already on that plane). While on the Ethereal Plane, you can perceive the plane you left, which is cast in shades of gray, but you can’t see anything there more than 18 m away. You can affect and be affected only by other creatures on the Ethereal Plane, and creatures on the other plane can’t perceive you unless they have a special ability that lets them perceive things on the Ethereal Plane. You return to the other plane at the start of your next turn and when the spell ends if you are on the Ethereal Plane. You return to an unoccupied space of your choice that you can see within 3 m of the space you left. If no unoccupied space is available within that range, you appear in the nearest unoccupied space.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "clairvoyance",
    "name": "Clairvoyance",
    "nameIT": "Clairvoyance",
    "level": 3,
    "school": "divination",
    "schoolIT": "Divinazione",
    "castingTime": "10 minutes",
    "castingTimeIT": "10 minuti",
    "range": "1 mile",
    "rangeIT": "1,6 km",
    "components": {
      "v": true,
      "s": true,
      "m": "a focus worth 100+ GP, either a jeweled horn for hearing or a glass eye for seeing",
      "mIT": "a focus worth 100+ GP, either a jeweled horn for hearing or a glass eye for seeing"
    },
    "duration": "Concentration, up to 10 minutes",
    "durationIT": "Concentrazione, fino a 10 minuti",
    "concentration": true,
    "description": "You create an Invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a door, around a corner, or in a grove of trees). The intangible, invulnerable sensor remains in place for the duration. When you cast the spell, choose seeing or hearing. You can use the chosen sense through the sensor as if you were in its space. As a Bonus Action, you can switch between seeing and hearing. A creature that sees the sensor (such as a creature benefiting from See Invisibility or Truesight) sees a luminous orb about the size of your fist.",
    "descriptionIT": "You create an Invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a door, around a corner, or in a grove of trees). The intangible, invulnerable sensor remains in place for the duration. When you cast the spell, choose seeing or hearing. You can use the chosen sense through the sensor as if you were in its space. As a Bonus Action, you can switch between seeing and hearing. A creature that sees the sensor (such as a creature benefiting from See Invisibility or Truesight) sees a luminous orb about the size of your fist.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "conjure-animals",
    "name": "Conjure Animals",
    "nameIT": "Conjure Animals",
    "level": 3,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 10 minutes",
    "durationIT": "Concentrazione, fino a 10 minuti",
    "concentration": true,
    "description": "You conjure nature spirits that appear as a Large pack of spectral, intangible animals in an unoccupied space you can see within range. The pack lasts for the duration, and you choose the spirits’ animal form, such as wolves, serpents, or birds. You have Advantage on Strength saving throws while you’re within 5 feet of the pack, and when you move on your turn, you can also move the pack up to 30 feet to an unoccupied space you can see. Whenever the pack moves within 10 feet of a creature you can see and whenever a creature you can see enters a space within 10 feet of the pack or ends its turn there, you can force that creature to make a Dexterity saving throw. On a failed save, the creature takes 3d10 Slashing damage. A creature makes this save only once per turn. Using a Higher-Level Spell Slot. The damage increases by 1d10 for each spell slot level above 3.",
    "descriptionIT": "You conjure nature spirits that appear as a Large pack of spectral, intangible animals in an unoccupied space you can see within range. The pack lasts for the duration, and you choose the spirits’ animal form, such as wolves, serpents, or birds. You have Advantage on Strength saving throws while you’re within 1,5 m of the pack, and when you move on your turn, you can also move the pack up to 9 m to an unoccupied space you can see. Whenever the pack moves within 3 m of a creature you can see and whenever a creature you can see enters a space within 3 m of the pack or ends its turn there, you can force that creature to make a Dexterity saving throw. On a failed save, the creature takes 3d10 Slashing damage. A creature makes this save only once per turn. Using a Higher-Level Spell Slot. The damage increases by 1d10 for each spell slot level above 3.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "ranger"
    ]
  },
  {
    "id": "counterspell",
    "name": "Counterspell",
    "nameIT": "Counterspell",
    "level": 3,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Reaction, which you take when you see a creature within 60 feet of yourself casting a spell with Verbal, Somatic, or Material components",
    "castingTimeIT": "1 reazione, which you take when you see a creature within 18 m of yourself casting a spell with Verbal, Somatic, or Material components",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": false,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You attempt to interrupt a creature in the process of casting a spell. The creature makes a Constitution saving throw. On a failed save, the spell dissipates with no effect, and the action, Bonus Action, or Reaction used to cast it is wasted. If that spell was cast with a spell slot, the slot isn’t expended.",
    "descriptionIT": "You attempt to interrupt a creature in the process of casting a spell. The creature makes a Constitution saving throw. On a failed save, the spell dissipates with no effect, and the action, Bonus Action, or Reaction used to cast it is wasted. If that spell was cast with a spell slot, the slot isn’t expended.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "create-food-and-water",
    "name": "Create Food and Water",
    "nameIT": "Create Food and Water",
    "level": 3,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You create 45 pounds of food and 30 gallons of fresh water on the ground or in containers within range—both useful in fending off the hazards of malnutrition and dehydration. The food is bland but nourishing and looks like a food of your choice, and the water is clean. The food spoils after 24 hours if uneaten.",
    "descriptionIT": "You create 45 pounds of food and 30 gallons of fresh water on the ground or in containers within range—both useful in fending off the hazards of malnutrition and dehydration. The food is bland but nourishing and looks like a food of your choice, and the water is clean. The food spoils after 24 hours if uneaten.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "paladin"
    ]
  },
  {
    "id": "daylight",
    "name": "Daylight",
    "nameIT": "Daylight",
    "level": 3,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "1 hour",
    "durationIT": "1 ora",
    "concentration": false,
    "description": "For the duration, sunlight spreads from a point within range and fills a 60-foot-radius Sphere. The sunlight’s area is Bright Light and sheds Dim Light for an additional 60 feet. Alternatively, you cast the spell on an object that isn’t being worn or carried, causing the sunlight to fill a 60-foot Emanation originating from that object. Covering that object with something opaque, such as a bowl or helm, blocks the sunlight. If any of this spell’s area overlaps with an area of Darkness created by a spell of level 3 or lower, that other spell is dispelled.",
    "descriptionIT": "For the duration, sunlight spreads from a point within range and fills a 60-foot-radius Sphere. The sunlight’s area is Bright Light and sheds Dim Light for an additional 18 m. Alternatively, you cast the spell on an object that isn’t being worn or carried, causing the sunlight to fill a 60-foot Emanation originating from that object. Covering that object with something opaque, such as a bowl or helm, blocks the sunlight. If any of this spell’s area overlaps with an area of Darkness created by a spell of level 3 or lower, that other spell is dispelled.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "paladin",
      "ranger",
      "sorcerer"
    ]
  },
  {
    "id": "dispel-magic",
    "name": "Dispel Magic",
    "nameIT": "Dispel Magic",
    "level": 3,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "120 feet",
    "rangeIT": "36 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "Choose one creature, object, or magical effect within range. Any ongoing spell of level 3 or lower on the target ends. For each ongoing spell of level 4 or higher on the target, make an ability check using your spellcasting ability (DC 10 plus that spell’s level). On a successful check, the spell ends. Using a Higher-Level Spell Slot. You automatically end a spell on the target if the spell’s level is equal to or less than the level of the spell slot you use.",
    "descriptionIT": "Choose one creature, object, or magical effect within range. Any ongoing spell of level 3 or lower on the target ends. For each ongoing spell of level 4 or higher on the target, make an ability check using your spellcasting ability (DC 10 plus that spell’s level). On a successful check, the spell ends. Using a Higher-Level Spell Slot. You automatically end a spell on the target if the spell’s level is equal to or less than the level of the spell slot you use.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "paladin",
      "ranger",
      "sorcerer"
    ]
  },
  {
    "id": "fear",
    "name": "Fear",
    "nameIT": "Fear",
    "level": 3,
    "school": "illusion",
    "schoolIT": "Illusione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "a white feather",
      "mIT": "a white feather"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "Each creature in a 30-foot Cone must succeed on a Wisdom saving throw or drop whatever it is holding and have the Frightened condition for the duration. A Frightened creature takes the Dash action and moves away from you by the safest route on each of its turns unless there is nowhere to move. If the creature ends its turn in a space where it doesn’t have line of sight to you, the creature makes a Wisdom saving throw. On a successful save, the spell ends on that creature.",
    "descriptionIT": "Each creature in a 30-foot Cone must succeed on a Wisdom saving throw or drop whatever it is holding and have the Frightened condition for the duration. A Frightened creature takes the Dash action and moves away from you by the safest route on each of its turns unless there is nowhere to move. If the creature ends its turn in a space where it doesn’t have line of sight to you, the creature makes a Wisdom saving throw. On a successful save, the spell ends on that creature.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "fireball",
    "name": "Fireball",
    "nameIT": "Fireball",
    "level": 3,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "150 feet",
    "rangeIT": "45 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a ball of bat guano and sulfur",
      "mIT": "a ball of bat guano and sulfur"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "A bright streak flashes from you to a point you choose within range and then blossoms with a low roar into a fiery explosion. Each creature in a 20-foot-radius Sphere centered on that point makes a Dexterity saving throw, taking 8d6 Fire damage on a failed save or half as much damage on a successful one. Flammable objects in the area that aren’t being worn or carried start burning. Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 3. Otherworldly Steed Large Celestial, Fey, or Fiend (Your Choice), Neutral AC 10 + 1 per spell level HP 5 + 10 per spell level (the steed has a number of Hit Dice [d10s] equal to the spell’s level) Speed 60 ft., Fly 60 ft. (requires level 4+ spell) MOD SAVE MOD SAVE MOD SAVE Str 18 +4 +4 Dex 12 +1 +1 Con 14 +2 +2 Int 6 −2 −2 Wis 12 +1 +1 Cha 8 −1 −1 Senses Passive Perception 11 Languages Telepathy 1 mile (works only with you) CR None (XP 0; PB equals your Proficiency Bonus) Traits Life Bond. When you regain Hit Points from a level 1+ spell, the steed regains the same number of Hit Points if you’re within 5 feet of it. Actions Otherworldly Slam. Melee Attack Roll: Bonus equals your spell attack modifier, reach 5 ft. Hit: 1d8 plus the spell’s level of Radiant (Celestial), Psychic (Fey), or Necrotic (Fiend) damage. Bonus Actions Fell Glare (Fiend Only; Recharges after a Long Rest). Wisdom Saving Throw: DC equals your spell save DC, one creature within 60 feet the steed can see. Failure: The target has the Frightened condition until the end of your next turn. Fey Step (Fey Only; Recharges after a Long Rest). The steed teleports, along with its rider, to an unoccupied space of your choice up to 60 feet away from itself. Healing Touch (Celestial Only; Recharges after a Long Rest). One creature within 5 feet of the steed regains a number of Hit Points equal to 2d8 plus the spell’s level.",
    "descriptionIT": "A bright streak flashes from you to a point you choose within range and then blossoms with a low roar into a fiery explosion. Each creature in a 20-foot-radius Sphere centered on that point makes a Dexterity saving throw, taking 8d6 Fire damage on a failed save or half as much damage on a successful one. Flammable objects in the area that aren’t being worn or carried start burning. Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 3. Otherworldly Steed Large Celestial, Fey, or Fiend (Your Choice), Neutral AC 10 + 1 per spell level HP 5 + 10 per spell level (the steed has a number of Hit Dice [d10s] equal to the spell’s level) Speed 60 ft., Fly 60 ft. (requires level 4+ spell) MOD SAVE MOD SAVE MOD SAVE Str 18 +4 +4 Dex 12 +1 +1 Con 14 +2 +2 Int 6 −2 −2 Wis 12 +1 +1 Cha 8 −1 −1 Senses Passive Perception 11 Languages Telepathy 1,6 km (works only with you) CR None (XP 0; PB equals your Proficiency Bonus) Traits Life Bond. When you regain Hit Points from a level 1+ spell, the steed regains the same number of Hit Points if you’re within 1,5 m of it. Actions Otherworldly Slam. Melee Attack Roll: Bonus equals your spell attack modifier, reach 5 ft. Hit: 1d8 plus the spell’s level of Radiant (Celestial), Psychic (Fey), or Necrotic (Fiend) damage. Bonus Actions Fell Glare (Fiend Only; Recharges after a Long Rest). Wisdom Saving Throw: DC equals your spell save DC, one creature within 18 m the steed can see. Failure: The target has the Frightened condition until the end of your next turn. Fey Step (Fey Only; Recharges after a Long Rest). The steed teleports, along with its rider, to an unoccupied space of your choice up to 18 m away from itself. Healing Touch (Celestial Only; Recharges after a Long Rest). One creature within 1,5 m of the steed regains a number of Hit Points equal to 2d8 plus the spell’s level.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "fly",
    "name": "Fly",
    "nameIT": "Fly",
    "level": 3,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "a feather",
      "mIT": "a feather"
    },
    "duration": "Concentration, up to 10 minutes",
    "durationIT": "Concentrazione, fino a 10 minuti",
    "concentration": true,
    "description": "You touch a willing creature. For the duration, the target gains a Fly Speed of 60 feet and can hover. When the spell ends, the target falls if it is still aloft unless it can stop the fall. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 3.",
    "descriptionIT": "You touch a willing creature. For the duration, the target gains a Fly Speed of 18 m and can hover. When the spell ends, the target falls if it is still aloft unless it can stop the fall. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 3.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "gaseous-form",
    "name": "Gaseous Form",
    "nameIT": "Gaseous Form",
    "level": 3,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of gauze",
      "mIT": "a bit of gauze"
    },
    "duration": "Concentration, up to 1 hour",
    "durationIT": "Concentrazione, fino a 1 ora",
    "concentration": true,
    "description": "A willing creature you touch shape-shifts, along with everything it’s wearing and carrying, into a misty cloud for the duration. The spell ends on the target if it drops to 0 Hit Points or if it takes a Magic action to end the spell on itself. While in this form, the target’s only method of movement is a Fly Speed of 10 feet, and it can hover. The target can enter and occupy the space of another creature. The target has Resistance to Bludgeoning, Piercing, and Slashing damage; it has Immunity to the Prone condition; and it has Advantage on Strength, Dexterity, and Constitution saving throws. The target can pass through narrow openings, but it treats liquids as though they were solid surfaces. The target can’t talk or manipulate objects, and any objects it was carrying or holding can’t be dropped, used, or otherwise interacted with. Finally, the target can’t attack or cast spells. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 3.",
    "descriptionIT": "A willing creature you touch shape-shifts, along with everything it’s wearing and carrying, into a misty cloud for the duration. The spell ends on the target if it drops to 0 Hit Points or if it takes a Magic action to end the spell on itself. While in this form, the target’s only method of movement is a Fly Speed of 3 m, and it can hover. The target can enter and occupy the space of another creature. The target has Resistance to Bludgeoning, Piercing, and Slashing damage; it has Immunity to the Prone condition; and it has Advantage on Strength, Dexterity, and Constitution saving throws. The target can pass through narrow openings, but it treats liquids as though they were solid surfaces. The target can’t talk or manipulate objects, and any objects it was carrying or holding can’t be dropped, used, or otherwise interacted with. Finally, the target can’t attack or cast spells. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 3.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "glyph-of-warding",
    "name": "Glyph of Warding",
    "nameIT": "Glyph of Warding",
    "level": 3,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "1 hour",
    "castingTimeIT": "1 ora",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "powdered diamond worth 200+ GP, which the spell consumes",
      "mIT": "powdered diamond worth 200+ GP, which the spell consumes"
    },
    "duration": "Until dispelled or triggered",
    "durationIT": "Until dispelled or triggered",
    "concentration": false,
    "description": "You inscribe a glyph that later unleashes a magical effect. You inscribe it either on a surface (such as a table or a section of floor) or within an object that can be closed (such as a book or chest) to conceal the glyph. The glyph can cover an area no larger than 10 feet in diameter. If the surface or object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered. The glyph is nearly imperceptible and requires a successful Wisdom (Perception) check against your spell save DC to notice. When you inscribe the glyph, you set its trigger and choose whether it’s an explosive rune or a spell glyph, as explained below. Set the Trigger. You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, common triggers include touching or stepping on the glyph, removing another object covering it, or approaching within a certain distance of it. For glyphs inscribed within an object, common triggers include opening that object or seeing the glyph. Once a glyph is triggered, this spell ends. You can refine the trigger so that only creatures of certain types activate it (for example, the glyph could be set to affect Aberrations). You can also set conditions for creatures that don’t trigger the glyph, such as those who say a certain password. Explosive Rune. When triggered, the glyph erupts with magical energy in a 20-foot-radius Sphere centered on the glyph. Each creature in the area makes a Dexterity saving throw. A creature takes 5d8 Acid, Cold, Fire, Lightning, or Thunder damage (your choice when you create the glyph) on a failed save or half as much damage on a successful one. Spell Glyph. You can store a prepared spell of level 3 or lower in the glyph by casting it as part of creating the glyph. The spell must target a single creature or an area. The spell being stored has no immediate effect when cast in this way. When the glyph is triggered, the stored spell takes effect. If the spell has a target, it targets the creature that triggered the glyph. If the spell affects an area, the area is centered on that creature. If the spell summons Hostile creatures or creates harmful objects or traps, they appear as close as possible to the intruder and attack it. If the spell requires Concentration, it lasts until the end of its full duration. Using a Higher-Level Spell Slot. The damage of an explosive rune increases by 1d8 for each spell slot level above 3. If you create a spell glyph, you can store any spell of up to the same level as the spell slot you use for the Glyph of Warding.",
    "descriptionIT": "You inscribe a glyph that later unleashes a magical effect. You inscribe it either on a surface (such as a table or a section of floor) or within an object that can be closed (such as a book or chest) to conceal the glyph. The glyph can cover an area no larger than 3 m in diameter. If the surface or object is moved more than 3 m from where you cast this spell, the glyph is broken, and the spell ends without being triggered. The glyph is nearly imperceptible and requires a successful Wisdom (Perception) check against your spell save DC to notice. When you inscribe the glyph, you set its trigger and choose whether it’s an explosive rune or a spell glyph, as explained below. Set the Trigger. You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, common triggers include touching or stepping on the glyph, removing another object covering it, or approaching within a certain distance of it. For glyphs inscribed within an object, common triggers include opening that object or seeing the glyph. Once a glyph is triggered, this spell ends. You can refine the trigger so that only creatures of certain types activate it (for example, the glyph could be set to affect Aberrations). You can also set conditions for creatures that don’t trigger the glyph, such as those who say a certain password. Explosive Rune. When triggered, the glyph erupts with magical energy in a 20-foot-radius Sphere centered on the glyph. Each creature in the area makes a Dexterity saving throw. A creature takes 5d8 Acid, Cold, Fire, Lightning, or Thunder damage (your choice when you create the glyph) on a failed save or half as much damage on a successful one. Spell Glyph. You can store a prepared spell of level 3 or lower in the glyph by casting it as part of creating the glyph. The spell must target a single creature or an area. The spell being stored has no immediate effect when cast in this way. When the glyph is triggered, the stored spell takes effect. If the spell has a target, it targets the creature that triggered the glyph. If the spell affects an area, the area is centered on that creature. If the spell summons Hostile creatures or creates harmful objects or traps, they appear as close as possible to the intruder and attack it. If the spell requires Concentration, it lasts until the end of its full duration. Using a Higher-Level Spell Slot. The damage of an explosive rune increases by 1d8 for each spell slot level above 3. If you create a spell glyph, you can store any spell of up to the same level as the spell slot you use for the Glyph of Warding.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "haste",
    "name": "Haste",
    "nameIT": "Haste",
    "level": 3,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a shaving of licorice root",
      "mIT": "a shaving of licorice root"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "Choose a willing creature that you can see within range. Until the spell ends, the target’s Speed is doubled, it gains a +2 bonus to Armor Class, it has Advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used to take only the Attack (one attack only), Dash, Disengage, Hide, or Utilize action. When the spell ends, the target is Incapacitated and has a Speed of 0 until the end of its next turn, as a wave of lethargy washes over it.",
    "descriptionIT": "Choose a willing creature that you can see within range. Until the spell ends, the target’s Speed is doubled, it gains a +2 bonus to Armor Class, it has Advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used to take only the Attack (one attack only), Dash, Disengage, Hide, or Utilize action. When the spell ends, the target is Incapacitated and has a Speed of 0 until the end of its next turn, as a wave of lethargy washes over it.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "hypnotic-pattern",
    "name": "Hypnotic Pattern",
    "nameIT": "Hypnotic Pattern",
    "level": 3,
    "school": "illusion",
    "schoolIT": "Illusione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "120 feet",
    "rangeIT": "36 m",
    "components": {
      "v": false,
      "s": true,
      "m": "a pinch of confetti",
      "mIT": "a pinch of confetti"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "You create a twisting pattern of colors in a 30-foot Cube within range. The pattern appears for a moment and vanishes. Each creature in the area who can see the pattern must succeed on a Wisdom saving throw or have the Charmed condition for the duration. While Charmed, the creature has the Incapacitated condition and a Speed of 0. The spell ends for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor.",
    "descriptionIT": "You create a twisting pattern of colors in a 30-foot Cube within range. The pattern appears for a moment and vanishes. Each creature in the area who can see the pattern must succeed on a Wisdom saving throw or have the Charmed condition for the duration. While Charmed, the creature has the Incapacitated condition and a Speed of 0. The spell ends for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "lightning-bolt",
    "name": "Lightning Bolt",
    "nameIT": "Lightning Bolt",
    "level": 3,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of fur and a crystal rod",
      "mIT": "a bit of fur and a crystal rod"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "A stroke of lightning forming a 100-foot-long, 5-foot-wide Line blasts out from you in a direction you choose. Each creature in the Line makes a Dexterity saving throw, taking 8d6 Lightning damage on a failed save or half as much damage on a successful one. Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 3.",
    "descriptionIT": "A stroke of lightning forming a 100-foot-long, 5-foot-wide Line blasts out from you in a direction you choose. Each creature in the Line makes a Dexterity saving throw, taking 8d6 Lightning damage on a failed save or half as much damage on a successful one. Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 3.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "magic-circle",
    "name": "Magic Circle",
    "nameIT": "Magic Circle",
    "level": 3,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "1 minute",
    "castingTimeIT": "1 minuto",
    "range": "10 feet",
    "rangeIT": "3 m",
    "components": {
      "v": true,
      "s": true,
      "m": "salt and powdered silver worth 100+ GP, which the spell consumes",
      "mIT": "salt and powdered silver worth 100+ GP, which the spell consumes"
    },
    "duration": "1 hour",
    "durationIT": "1 ora",
    "concentration": false,
    "description": "You create a 10-foot-radius, 20-foot-tall Cylinder of magical energy centered on a point on the ground that you can see within range. Glowing runes appear wherever the Cylinder intersects with the floor or other surface. Choose one or more of the following types of creatures: Celestials, Elementals, Fey, Fiends, or Undead. The circle affects a creature of the chosen type in the following ways: • The creature can’t willingly enter the Cylinder by nonmagical means. If the creature tries to use teleportation or interplanar travel to do so, it must first succeed on a Charisma saving throw. • The creature has Disadvantage on attack rolls against targets within the Cylinder. • Targets within the Cylinder can’t be possessed by or gain the Charmed or Frightened condition from the creature. Each time you cast this spell, you can cause its magic to operate in the reverse direction, preventing a creature of the specified type from leaving the Cylinder and protecting targets outside it. Using a Higher-Level Spell Slot. The duration increases by 1 hour for each spell slot level above 3.",
    "descriptionIT": "You create a 10-foot-radius, 20-foot-tall Cylinder of magical energy centered on a point on the ground that you can see within range. Glowing runes appear wherever the Cylinder intersects with the floor or other surface. Choose one or more of the following types of creatures: Celestials, Elementals, Fey, Fiends, or Undead. The circle affects a creature of the chosen type in the following ways: • The creature can’t willingly enter the Cylinder by nonmagical means. If the creature tries to use teleportation or interplanar travel to do so, it must first succeed on a Charisma saving throw. • The creature has Disadvantage on attack rolls against targets within the Cylinder. • Targets within the Cylinder can’t be possessed by or gain the Charmed or Frightened condition from the creature. Each time you cast this spell, you can cause its magic to operate in the reverse direction, preventing a creature of the specified type from leaving the Cylinder and protecting targets outside it. Using a Higher-Level Spell Slot. The duration increases by 1 hour for each spell slot level above 3.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "paladin"
    ]
  },
  {
    "id": "major-image",
    "name": "Major Image",
    "nameIT": "Major Image",
    "level": 3,
    "school": "illusion",
    "schoolIT": "Illusione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "120 feet",
    "rangeIT": "36 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of fleece",
      "mIT": "a bit of fleece"
    },
    "duration": "Concentration, up to 10 minutes",
    "durationIT": "Concentrazione, fino a 10 minuti",
    "concentration": true,
    "description": "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20-foot Cube. The image appears at a spot that you can see within range and lasts for the duration. It seems real, including sounds, smells, and temperature appropriate to the thing depicted, but it can’t deal damage or cause conditions. If you are within range of the illusion, you can take a Magic action to cause the image to move to any other spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Similarly, you can cause the illusion to make different sounds at different times, even making it carry on a conversation, for example. Physical interaction with the image reveals it to be an illusion, for things can pass through it. A creature that takes a Study action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature. Using a Higher-Level Spell Slot. The spell lasts until dispelled, without requiring Concentration, if cast with a level 4+ spell slot.",
    "descriptionIT": "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20-foot Cube. The image appears at a spot that you can see within range and lasts for the duration. It seems real, including sounds, smells, and temperature appropriate to the thing depicted, but it can’t deal damage or cause conditions. If you are within range of the illusion, you can take a Magic action to cause the image to move to any other spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Similarly, you can cause the illusion to make different sounds at different times, even making it carry on a conversation, for example. Physical interaction with the image reveals it to be an illusion, for things can pass through it. A creature that takes a Study action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature. Using a Higher-Level Spell Slot. The spell lasts until dispelled, without requiring Concentration, if cast with a level 4+ spell slot.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "mass-healing-word",
    "name": "Mass Healing Word",
    "nameIT": "Mass Healing Word",
    "level": 3,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Bonus Action",
    "castingTimeIT": "1 azione bonus",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "Up to six creatures of your choice that you can see within range regain Hit Points equal to 2d4 plus your spellcasting ability modifier. Using a Higher-Level Spell Slot. The healing increases by 1d4 for each spell slot level above 3.",
    "descriptionIT": "Up to six creatures of your choice that you can see within range regain Hit Points equal to 2d4 plus your spellcasting ability modifier. Using a Higher-Level Spell Slot. The healing increases by 1d4 for each spell slot level above 3.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "meld-into-stone",
    "name": "Meld into Stone",
    "nameIT": "Meld into Stone",
    "level": 3,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione oppure Rituale",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "8 hours",
    "durationIT": "8 ore",
    "concentration": false,
    "description": "You step into a stone object or surface large enough to fully contain your body, merging yourself and your equipment with the stone for the duration. You must touch the stone to do so. Nothing of your presence remains visible or otherwise detectable by nonmagical senses. While merged with the stone, you can’t see what occurs outside it, and any Wisdom (Perception) checks you make to hear sounds outside it are made with Disadvantage. You remain aware of the passage of time and can cast spells on yourself while merged in the stone. You can use 5 feet of movement to leave the stone where you entered it, which ends the spell. You otherwise can’t move. Minor physical damage to the stone doesn’t harm you, but its partial destruction or a change in its shape (to the extent that you no longer fit within it) expels you and deals 6d6 Force damage to you. The stone’s complete destruction (or transmutation into a different substance) expels you and deals 50 Force damage to you. If expelled, you move into an unoccupied space closest to where you first entered and have the Prone condition.",
    "descriptionIT": "You step into a stone object or surface large enough to fully contain your body, merging yourself and your equipment with the stone for the duration. You must touch the stone to do so. Nothing of your presence remains visible or otherwise detectable by nonmagical senses. While merged with the stone, you can’t see what occurs outside it, and any Wisdom (Perception) checks you make to hear sounds outside it are made with Disadvantage. You remain aware of the passage of time and can cast spells on yourself while merged in the stone. You can use 1,5 m of movement to leave the stone where you entered it, which ends the spell. You otherwise can’t move. Minor physical damage to the stone doesn’t harm you, but its partial destruction or a change in its shape (to the extent that you no longer fit within it) expels you and deals 6d6 Force damage to you. The stone’s complete destruction (or transmutation into a different substance) expels you and deals 50 Force damage to you. If expelled, you move into an unoccupied space closest to where you first entered and have the Prone condition.",
    "ritual": true,
    "source": "SRD 5.2",
    "classIds": [
      "ranger"
    ]
  },
  {
    "id": "nondetection",
    "name": "Nondetection",
    "nameIT": "Nondetection",
    "level": 3,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "a pinch of diamond dust worth 25+ GP, which the spell consumes",
      "mIT": "a pinch of diamond dust worth 25+ GP, which the spell consumes"
    },
    "duration": "8 hours",
    "durationIT": "8 ore",
    "concentration": false,
    "description": "For the duration, you hide a target that you touch from Divination spells. The target can be a willing creature, or it can be a place or an object no larger than 10 feet in any dimension. The target can’t be targeted by any Divination spell or perceived through magical scrying sensors.",
    "descriptionIT": "For the duration, you hide a target that you touch from Divination spells. The target can be a willing creature, or it can be a place or an object no larger than 3 m in any dimension. The target can’t be targeted by any Divination spell or perceived through magical scrying sensors.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "ranger"
    ]
  },
  {
    "id": "plant-growth",
    "name": "Plant Growth",
    "nameIT": "Plant Growth",
    "level": 3,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action (Overgrowth) or 8 hours (Enrichment)",
    "castingTimeIT": "1 azione (Overgrowth) or 8 ore (Enrichment)",
    "range": "150 feet",
    "rangeIT": "45 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "This spell channels vitality into plants. The casting time you use determines whether the spell has the Overgrowth or the Enrichment effect below. Overgrowth. Choose a point within range. All normal plants in a 100-foot-radius Sphere centered on that point become thick and overgrown. A creature moving through that area must spend 4 feet of movement for every 1 foot it moves. You can exclude one or more areas of any size within the spell’s area from being affected. Enrichment. All plants in a half-mile radius centered on a point within range become enriched for 365 days. The plants yield twice the normal amount of food when harvested. They can benefit from only one Plant Growth per year.",
    "descriptionIT": "This spell channels vitality into plants. The casting time you use determines whether the spell has the Overgrowth or the Enrichment effect below. Overgrowth. Choose a point within range. All normal plants in a 100-foot-radius Sphere centered on that point become thick and overgrown. A creature moving through that area must spend 1,2 m of movement for every 0,3 m it moves. You can exclude one or more areas of any size within the spell’s area from being affected. Enrichment. All plants in a half-mile radius centered on a point within range become enriched for 365 days. The plants yield twice the normal amount of food when harvested. They can benefit from only one Plant Growth per year.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "ranger"
    ]
  },
  {
    "id": "protection-from-energy",
    "name": "Protection from Energy",
    "nameIT": "Protection from Energy",
    "level": 3,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 1 hour",
    "durationIT": "Concentrazione, fino a 1 ora",
    "concentration": true,
    "description": "For the duration, the willing creature you touch has Resistance to one damage type of your choice: Acid, Cold, Fire, Lightning, or Thunder.",
    "descriptionIT": "For the duration, the willing creature you touch has Resistance to one damage type of your choice: Acid, Cold, Fire, Lightning, or Thunder.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "ranger",
      "sorcerer"
    ]
  },
  {
    "id": "remove-curse",
    "name": "Remove Curse",
    "nameIT": "Remove Curse",
    "level": 3,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "At your touch, all curses affecting one creature or object end. If the object is a cursed magic item, its curse remains, but the spell breaks its owner’s Attunement to the object so it can be removed or discarded.",
    "descriptionIT": "At your touch, all curses affecting one creature or object end. If the object is a cursed magic item, its curse remains, but the spell breaks its owner’s Attunement to the object so it can be removed or discarded.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "paladin"
    ]
  },
  {
    "id": "revivify",
    "name": "Revivify",
    "nameIT": "Revivify",
    "level": 3,
    "school": "necromancy",
    "schoolIT": "Necromanzia",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "a diamond worth 300+ GP, which the spell consumes",
      "mIT": "a diamond worth 300+ GP, which the spell consumes"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You touch a creature that has died within the last minute. That creature revives with 1 Hit Point. This spell can’t revive a creature that has died of old age, nor does it restore any missing body parts.",
    "descriptionIT": "You touch a creature that has died within the last minute. That creature revives with 1 Hit Point. This spell can’t revive a creature that has died of old age, nor does it restore any missing body parts.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "paladin",
      "ranger"
    ]
  },
  {
    "id": "sending",
    "name": "Sending",
    "nameIT": "Sending",
    "level": 3,
    "school": "divination",
    "schoolIT": "Divinazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Unlimited",
    "rangeIT": "Unlimited",
    "components": {
      "v": true,
      "s": true,
      "m": "a copper wire",
      "mIT": "a copper wire"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You send a short message of 25 words or fewer to a creature you have met or a creature described to you by someone who has met it. The target hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately. The spell enables targets to understand the meaning of your message. You can send the message across any distance and even to other planes of existence, but if the target is on a different plane than you, there is a 5 percent chance that the message doesn’t arrive. You know if the delivery fails. Upon receiving your message, a creature can block your ability to reach it again with this spell for 8 hours. If you try to send another message during that time, you learn that you are blocked, and the spell fails.",
    "descriptionIT": "You send a short message of 25 words or fewer to a creature you have met or a creature described to you by someone who has met it. The target hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately. The spell enables targets to understand the meaning of your message. You can send the message across any distance and even to other planes of existence, but if the target is on a different plane than you, there is a 5 percent chance that the message doesn’t arrive. You know if the delivery fails. Upon receiving your message, a creature can block your ability to reach it again with this spell for 8 hours. If you try to send another message during that time, you learn that you are blocked, and the spell fails.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "sleet-storm",
    "name": "Sleet Storm",
    "nameIT": "Sleet Storm",
    "level": 3,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "150 feet",
    "rangeIT": "45 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a miniature umbrella",
      "mIT": "a miniature umbrella"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "Until the spell ends, sleet falls in a 40-foot-tall, 20-foot-radius Cylinder centered on a point you choose within range. The area is Heavily Obscured, and exposed flames in the area are doused. Ground in the Cylinder is Difficult Terrain. When a creature enters the Cylinder for the first time on a turn or starts its turn there, it must succeed on a Dexterity saving throw or have the Prone condition and lose Concentration.",
    "descriptionIT": "Until the spell ends, sleet falls in a 40-foot-tall, 20-foot-radius Cylinder centered on a point you choose within range. The area is Heavily Obscured, and exposed flames in the area are doused. Ground in the Cylinder is Difficult Terrain. When a creature enters the Cylinder for the first time on a turn or starts its turn there, it must succeed on a Dexterity saving throw or have the Prone condition and lose Concentration.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "slow",
    "name": "Slow",
    "nameIT": "Slow",
    "level": 3,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "120 feet",
    "rangeIT": "36 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a drop of molasses",
      "mIT": "a drop of molasses"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "You alter time around up to six creatures of your choice in a 40-foot Cube within range. Each target must succeed on a Wisdom saving throw or be affected by this spell for the duration. An affected target’s Speed is halved, it takes a −2 penalty to AC and Dexterity saving throws, and it can’t take Reactions. On its turns, it can take either an action or a Bonus Action, not both, and it can make only one attack if it takes the Attack action. If it casts a spell with a Somatic component, there is a 25 percent chance the spell fails as a result of the target making the spell’s gestures too slowly. An affected target repeats the save at the end of each of its turns, ending the spell on itself on a success.",
    "descriptionIT": "You alter time around up to six creatures of your choice in a 40-foot Cube within range. Each target must succeed on a Wisdom saving throw or be affected by this spell for the duration. An affected target’s Speed is halved, it takes a −2 penalty to AC and Dexterity saving throws, and it can’t take Reactions. On its turns, it can take either an action or a Bonus Action, not both, and it can make only one attack if it takes the Attack action. If it casts a spell with a Somatic component, there is a 25 percent chance the spell fails as a result of the target making the spell’s gestures too slowly. An affected target repeats the save at the end of each of its turns, ending the spell on itself on a success.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "speak-with-dead",
    "name": "Speak with Dead",
    "nameIT": "Speak with Dead",
    "level": 3,
    "school": "necromancy",
    "schoolIT": "Necromanzia",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "10 feet",
    "rangeIT": "3 m",
    "components": {
      "v": true,
      "s": true,
      "m": "burning incense",
      "mIT": "burning incense"
    },
    "duration": "10 minutes",
    "durationIT": "10 minuti",
    "concentration": false,
    "description": "You grant the semblance of life to a corpse of your choice within range, allowing it to answer questions you pose. The corpse must have a mouth, and this spell fails if the deceased creature was Undead when it died. The spell also fails if the corpse was the target of this spell within the past 10 days. Until the spell ends, you can ask the corpse up to five questions. The corpse knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are antagonistic toward it or it recognizes you as an enemy. This spell doesn’t return the creature’s soul to its body, only its animating spirit. Thus, the corpse can’t learn new information, doesn’t comprehend anything that has happened since it died, and can’t speculate about future events.",
    "descriptionIT": "You grant the semblance of life to a corpse of your choice within range, allowing it to answer questions you pose. The corpse must have a mouth, and this spell fails if the deceased creature was Undead when it died. The spell also fails if the corpse was the target of this spell within the past 10 days. Until the spell ends, you can ask the corpse up to five questions. The corpse knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are antagonistic toward it or it recognizes you as an enemy. This spell doesn’t return the creature’s soul to its body, only its animating spirit. Thus, the corpse can’t learn new information, doesn’t comprehend anything that has happened since it died, and can’t speculate about future events.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "speak-with-plants",
    "name": "Speak with Plants",
    "nameIT": "Speak with Plants",
    "level": 3,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "10 minutes",
    "durationIT": "10 minuti",
    "concentration": false,
    "description": "You imbue plants in an immobile 30-foot Emanation with limited sentience and animation, giving them the ability to communicate with you and follow your simple commands. You can question plants about events in the spell’s area within the past day, gaining information about creatures that have passed, weather, and other circumstances. You can also turn Difficult Terrain caused by plant growth (such as thickets and undergrowth) into ordinary terrain that lasts for the duration. Or you can turn ordinary terrain where plants are present into Difficult Terrain that lasts for the duration. The spell doesn’t enable plants to uproot themselves and move about, but they can move their branches, tendrils, and stalks for you. If a Plant creature is in the area, you can communicate with it as if you shared a common language.",
    "descriptionIT": "You imbue plants in an immobile 30-foot Emanation with limited sentience and animation, giving them the ability to communicate with you and follow your simple commands. You can question plants about events in the spell’s area within the past day, gaining information about creatures that have passed, weather, and other circumstances. You can also turn Difficult Terrain caused by plant growth (such as thickets and undergrowth) into ordinary terrain that lasts for the duration. Or you can turn ordinary terrain where plants are present into Difficult Terrain that lasts for the duration. The spell doesn’t enable plants to uproot themselves and move about, but they can move their branches, tendrils, and stalks for you. If a Plant creature is in the area, you can communicate with it as if you shared a common language.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "ranger"
    ]
  },
  {
    "id": "stinking-cloud",
    "name": "Stinking Cloud",
    "nameIT": "Stinking Cloud",
    "level": 3,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "90 feet",
    "rangeIT": "27 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a rotten egg",
      "mIT": "a rotten egg"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "You create a 20-foot-radius Sphere of yellow, nauseating gas centered on a point within range. The cloud is Heavily Obscured. The cloud lingers in the air for the duration or until a strong wind (such as the one created by Gust of Wind) disperses it. Each creature that starts its turn in the Sphere must succeed on a Constitution saving throw or have the Poisoned condition until the end of the current turn. While Poisoned in this way, the creature can’t take an action or a Bonus Action.",
    "descriptionIT": "You create a 20-foot-radius Sphere of yellow, nauseating gas centered on a point within range. The cloud is Heavily Obscured. The cloud lingers in the air for the duration or until a strong wind (such as the one created by Gust of Wind) disperses it. Each creature that starts its turn in the Sphere must succeed on a Constitution saving throw or have the Poisoned condition until the end of the current turn. While Poisoned in this way, the creature can’t take an action or a Bonus Action.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "tiny-hut",
    "name": "Tiny Hut",
    "nameIT": "Tiny Hut",
    "level": 3,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "1 minute",
    "castingTimeIT": "1 minuto oppure Rituale",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "a crystal bead",
      "mIT": "a crystal bead"
    },
    "duration": "8 hours",
    "durationIT": "8 ore",
    "concentration": false,
    "description": "A 10-foot Emanation springs into existence around you and remains stationary for the duration. The spell fails when you cast it if the Emanation isn’t big enough to fully encapsulate all creatures in its area. Creatures and objects within the Emanation when you cast the spell can move through it freely. All other creatures and objects are barred from passing through it. Spells of level 3 or lower can’t be cast through it, and the effects of such spells can’t extend into it. The atmosphere inside the Emanation is comfortable and dry, regardless of the weather outside. Until the spell ends, you can command the interior to have Dim Light or Darkness (no action required). The Emanation is opaque from the outside and of any color you choose, but it’s transparent from the inside. The spell ends early if you leave the Emanation or if you cast it again.",
    "descriptionIT": "A 10-foot Emanation springs into existence around you and remains stationary for the duration. The spell fails when you cast it if the Emanation isn’t big enough to fully encapsulate all creatures in its area. Creatures and objects within the Emanation when you cast the spell can move through it freely. All other creatures and objects are barred from passing through it. Spells of level 3 or lower can’t be cast through it, and the effects of such spells can’t extend into it. The atmosphere inside the Emanation is comfortable and dry, regardless of the weather outside. Until the spell ends, you can command the interior to have Dim Light or Darkness (no action required). The Emanation is opaque from the outside and of any color you choose, but it’s transparent from the inside. The spell ends early if you leave the Emanation or if you cast it again.",
    "ritual": true,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "tongues",
    "name": "Tongues",
    "nameIT": "Tongues",
    "level": 3,
    "school": "divination",
    "schoolIT": "Divinazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": false,
      "m": "a miniature ziggurat",
      "mIT": "a miniature ziggurat"
    },
    "duration": "1 hour",
    "durationIT": "1 ora",
    "concentration": false,
    "description": "This spell grants the creature you touch the ability to understand any spoken or signed language that it hears or sees. Moreover, when the target communicates by speaking or signing, any creature that knows at least one language can understand it if that creature can hear the speech or see the signing.",
    "descriptionIT": "This spell grants the creature you touch the ability to understand any spoken or signed language that it hears or sees. Moreover, when the target communicates by speaking or signing, any creature that knows at least one language can understand it if that creature can hear the speech or see the signing.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "vampiric-touch",
    "name": "Vampiric Touch",
    "nameIT": "Vampiric Touch",
    "level": 3,
    "school": "necromancy",
    "schoolIT": "Necromanzia",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "The touch of your shadow-wreathed hand can siphon life force from others to heal your wounds. Make a melee spell attack against one creature within reach. On a hit, the target takes 3d6 Necrotic damage, and you regain Hit Points equal to half the amount of Necrotic damage dealt. Until the spell ends, you can make the attack again on each of your turns as a Magic action, targeting the same creature or a different one. Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 3.",
    "descriptionIT": "The touch of your shadow-wreathed hand can siphon life force from others to heal your wounds. Make a melee spell attack against one creature within reach. On a hit, the target takes 3d6 Necrotic damage, and you regain Hit Points equal to half the amount of Necrotic damage dealt. Until the spell ends, you can make the attack again on each of your turns as a Magic action, targeting the same creature or a different one. Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 3.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "water-breathing",
    "name": "Water Breathing",
    "nameIT": "Water Breathing",
    "level": 3,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione oppure Rituale",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a short reed",
      "mIT": "a short reed"
    },
    "duration": "24 hours",
    "durationIT": "24 ore",
    "concentration": false,
    "description": "This spell grants up to ten willing creatures of your choice within range the ability to breathe underwater until the spell ends. Affected creatures also retain their normal mode of respiration.",
    "descriptionIT": "This spell grants up to ten willing creatures of your choice within range the ability to breathe underwater until the spell ends. Affected creatures also retain their normal mode of respiration.",
    "ritual": true,
    "source": "SRD 5.2",
    "classIds": [
      "ranger",
      "sorcerer"
    ]
  },
  {
    "id": "water-walk",
    "name": "Water Walk",
    "nameIT": "Water Walk",
    "level": 3,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione oppure Rituale",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a piece of cork",
      "mIT": "a piece of cork"
    },
    "duration": "1 hour",
    "durationIT": "1 ora",
    "concentration": false,
    "description": "This spell grants the ability to move across any liquid surface—such as water, acid, mud, snow, quicksand, or lava—as if it were harmless solid ground (creatures crossing molten lava can still take damage from the heat). Up to ten willing creatures of your choice within range gain this ability for the duration. An affected target must take a Bonus Action to pass from the liquid’s surface into the liquid itself and vice versa, but if the target falls into the liquid, the target passes through the surface into the liquid below.",
    "descriptionIT": "This spell grants the ability to move across any liquid surface—such as water, acid, mud, snow, quicksand, or lava—as if it were harmless solid ground (creatures crossing molten lava can still take damage from the heat). Up to ten willing creatures of your choice within range gain this ability for the duration. An affected target must take a Bonus Action to pass from the liquid’s surface into the liquid itself and vice versa, but if the target falls into the liquid, the target passes through the surface into the liquid below.",
    "ritual": true,
    "source": "SRD 5.2",
    "classIds": [
      "ranger",
      "sorcerer"
    ]
  },
  {
    "id": "wind-wall",
    "name": "Wind Wall",
    "nameIT": "Wind Wall",
    "level": 3,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "120 feet",
    "rangeIT": "36 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a fan and a feather",
      "mIT": "a fan and a feather"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "A wall of strong wind rises from the ground at a point you choose within range. You can make the wall up to 50 feet long, 15 feet high, and 1 foot thick. You can shape the wall in any way you choose so long as it makes one continuous path along the ground. The wall lasts for the duration. When the wall appears, each creature in its area makes a Strength saving throw, taking 4d8 Bludgeoning damage on a failed save or half as much damage on a successful one. The strong wind keeps fog, smoke, and other gases at bay. Small or smaller flying creatures or objects can’t pass through the wall. Loose, lightweight materials brought into the wall fly upward. Arrows, bolts, and other ordinary projectiles launched at targets behind the wall are deflected upward and miss automatically. Boulders hurled by Giants or siege engines, and similar projectiles, are unaffected. Creatures in gaseous form can’t pass through it.",
    "descriptionIT": "A wall of strong wind rises from the ground at a point you choose within range. You can make the wall up to 15 m long, 4,5 m high, and 0,3 m thick. You can shape the wall in any way you choose so long as it makes one continuous path along the ground. The wall lasts for the duration. When the wall appears, each creature in its area makes a Strength saving throw, taking 4d8 Bludgeoning damage on a failed save or half as much damage on a successful one. The strong wind keeps fog, smoke, and other gases at bay. Small or smaller flying creatures or objects can’t pass through the wall. Loose, lightweight materials brought into the wall fly upward. Arrows, bolts, and other ordinary projectiles launched at targets behind the wall are deflected upward and miss automatically. Boulders hurled by Giants or siege engines, and similar projectiles, are unaffected. Creatures in gaseous form can’t pass through it.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "ranger"
    ]
  },
  {
    "id": "aura-of-life",
    "name": "Aura of Life",
    "nameIT": "Aura of Life",
    "level": 4,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "Concentration, up to 10 minutes",
    "durationIT": "Concentrazione, fino a 10 minuti",
    "concentration": true,
    "description": "An aura radiates from you in a 30-foot Emanation for the duration. While in the aura, you and your allies have Resistance to Necrotic damage, and your Hit Point maximums can’t be reduced. If an ally with 0 Hit Points starts its turn in the aura, that ally regains 1 Hit Point.",
    "descriptionIT": "An aura radiates from you in a 30-foot Emanation for the duration. While in the aura, you and your allies have Resistance to Necrotic damage, and your Hit Point maximums can’t be reduced. If an ally with 0 Hit Points starts its turn in the aura, that ally regains 1 Hit Point.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "paladin"
    ]
  },
  {
    "id": "banishment",
    "name": "Banishment",
    "nameIT": "Banishment",
    "level": 4,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a pentacle",
      "mIT": "a pentacle"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "One creature that you can see within range must succeed on a Charisma saving throw or be transported to a harmless demiplane for the duration. While there, the target has the Incapacitated condition. When the spell ends, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. If the target is an Aberration, a Celestial, an Elemental, a Fey, or a Fiend, the target doesn’t return if the spell lasts for 1 minute. The target is instead transported to a random location on a plane (GM’s choice) associated with its creature type. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 4.",
    "descriptionIT": "One creature that you can see within range must succeed on a Charisma saving throw or be transported to a harmless demiplane for the duration. While there, the target has the Incapacitated condition. When the spell ends, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. If the target is an Aberration, a Celestial, an Elemental, a Fey, or a Fiend, the target doesn’t return if the spell lasts for 1 minute. The target is instead transported to a random location on a plane (GM’s choice) associated with its creature type. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 4.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "paladin",
      "sorcerer"
    ]
  },
  {
    "id": "blight",
    "name": "Blight",
    "nameIT": "Blight",
    "level": 4,
    "school": "necromancy",
    "schoolIT": "Necromanzia",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "A creature that you can see within range makes a Constitution saving throw, taking 8d8 Necrotic damage on a failed save or half as much damage on a successful one. A Plant creature automatically fails the save. Alternatively, target a nonmagical plant that isn’t a creature, such as a tree or shrub. It doesn’t make a save; it simply withers and dies. Using a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 4.",
    "descriptionIT": "A creature that you can see within range makes a Constitution saving throw, taking 8d8 Necrotic damage on a failed save or half as much damage on a successful one. A Plant creature automatically fails the save. Alternatively, target a nonmagical plant that isn’t a creature, such as a tree or shrub. It doesn’t make a save; it simply withers and dies. Using a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 4.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "charm-monster",
    "name": "Charm Monster",
    "nameIT": "Charm Monster",
    "level": 4,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "1 hour",
    "durationIT": "1 ora",
    "concentration": false,
    "description": "One creature you can see within range makes a Wisdom saving throw. It does so with Advantage if you or your allies are fighting it. On a failed save, the target has the Charmed condition until the spell ends or until you or your allies damage it. The Charmed creature is Friendly to you. When the spell ends, the target knows it was Charmed by you. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 4.",
    "descriptionIT": "One creature you can see within range makes a Wisdom saving throw. It does so with Advantage if you or your allies are fighting it. On a failed save, the target has the Charmed condition until the spell ends or until you or your allies damage it. The Charmed creature is Friendly to you. When the spell ends, the target knows it was Charmed by you. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 4.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "compulsion",
    "name": "Compulsion",
    "nameIT": "Compulsion",
    "level": 4,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "Each creature of your choice that you can see within range must succeed on a Wisdom saving throw or have the Charmed condition until the spell ends. For the duration, you can take a Bonus Action to designate a direction that is horizontal to you. Each Charmed target must use as much of its movement as possible to move in that direction on its next turn, taking the safest route. After moving in this way, a target repeats the save, ending the spell on itself on a success.",
    "descriptionIT": "Each creature of your choice that you can see within range must succeed on a Wisdom saving throw or have the Charmed condition until the spell ends. For the duration, you can take a Bonus Action to designate a direction that is horizontal to you. Each Charmed target must use as much of its movement as possible to move in that direction on its next turn, taking the safest route. After moving in this way, a target repeats the save, ending the spell on itself on a success.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "confusion",
    "name": "Confusion",
    "nameIT": "Confusion",
    "level": 4,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "90 feet",
    "rangeIT": "27 m",
    "components": {
      "v": true,
      "s": true,
      "m": "three nut shells",
      "mIT": "three nut shells"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "Each creature in a 10-foot-radius Sphere centered on a point you choose within range must succeed on a Wisdom saving throw, or that target can’t take Bonus Actions or Reactions and must roll 1d10 at the start of each of its turns to determine its behavior for that turn, consulting the table below. 1d10 Behavior for the Turn The target doesn’t take an action, and it uses all its movement to move. Roll 1d4 for the direction: 1, north; 2, east; 3, south; or 4, west. 2–6 The target doesn’t move or take actions. 7–8 The target doesn’t move, and it takes the Attack action to make one melee attack against a random creature within reach. If none are within reach, the target takes no action. 9–10 The target chooses its behavior. At the end of each of its turns, an affected target repeats the save, ending the spell on itself on a success. Using a Higher-Level Spell Slot. The Sphere’s radius increases by 5 feet for each spell slot level above 4.",
    "descriptionIT": "Each creature in a 10-foot-radius Sphere centered on a point you choose within range must succeed on a Wisdom saving throw, or that target can’t take Bonus Actions or Reactions and must roll 1d10 at the start of each of its turns to determine its behavior for that turn, consulting the table below. 1d10 Behavior for the Turn The target doesn’t take an action, and it uses all its movement to move. Roll 1d4 for the direction: 1, north; 2, east; 3, south; or 4, west. 2–6 The target doesn’t move or take actions. 7–8 The target doesn’t move, and it takes the Attack action to make one melee attack against a random creature within reach. If none are within reach, the target takes no action. 9–10 The target chooses its behavior. At the end of each of its turns, an affected target repeats the save, ending the spell on itself on a success. Using a Higher-Level Spell Slot. The Sphere’s radius increases by 1,5 m for each spell slot level above 4.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "conjure-woodland-beings",
    "name": "Conjure Woodland Beings",
    "nameIT": "Conjure Woodland Beings",
    "level": 4,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 10 minutes",
    "durationIT": "Concentrazione, fino a 10 minuti",
    "concentration": true,
    "description": "You conjure nature spirits that flit around you in a 10-foot Emanation for the duration. Whenever the Emanation enters the space of a creature you can see and whenever a creature you can see enters the Emanation or ends its turn there, you can force that creature to make a Wisdom saving throw. The creature takes 5d8 Force damage on a failed save or half as much damage on a successful one. A creature makes this save only once per turn. In addition, you can take the Disengage action as a Bonus Action for the spell’s duration. Using a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 4.",
    "descriptionIT": "You conjure nature spirits that flit around you in a 10-foot Emanation for the duration. Whenever the Emanation enters the space of a creature you can see and whenever a creature you can see enters the Emanation or ends its turn there, you can force that creature to make a Wisdom saving throw. The creature takes 5d8 Force damage on a failed save or half as much damage on a successful one. A creature makes this save only once per turn. In addition, you can take the Disengage action as a Bonus Action for the spell’s duration. Using a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 4.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "ranger"
    ]
  },
  {
    "id": "death-ward",
    "name": "Death Ward",
    "nameIT": "Death Ward",
    "level": 4,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "8 hours",
    "durationIT": "8 ore",
    "concentration": false,
    "description": "You touch a creature and grant it a measure of protection from death. The first time the target would drop to 0 Hit Points before the spell ends, the target instead drops to 1 Hit Point, and the spell ends. If the spell is still in effect when the target is subjected to an effect that would kill it instantly without dealing damage, that effect is negated against the target, and the spell ends.",
    "descriptionIT": "You touch a creature and grant it a measure of protection from death. The first time the target would drop to 0 Hit Points before the spell ends, the target instead drops to 1 Hit Point, and the spell ends. If the spell is still in effect when the target is subjected to an effect that would kill it instantly without dealing damage, that effect is negated against the target, and the spell ends.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "paladin"
    ]
  },
  {
    "id": "dimension-door",
    "name": "Dimension Door",
    "nameIT": "Dimension Door",
    "level": 4,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "500 feet",
    "rangeIT": "150 m",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You teleport to a location within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction, such as “200 feet straight downward” or “300 feet upward to the northwest at a 45-degree angle.” You can also teleport one willing creature. The creature must be within 5 feet of you when you teleport, and it teleports to a space within 5 feet of your destination space. If you, the other creature, or both would arrive in a space occupied by a creature or completely filled by one or more objects, you and any creature traveling with you each take 4d6 Force damage, and the teleportation fails.",
    "descriptionIT": "You teleport to a location within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction, such as “60 m straight downward” or “90 m upward to the northwest at a 45-degree angle.” You can also teleport one willing creature. The creature must be within 1,5 m of you when you teleport, and it teleports to a space within 1,5 m of your destination space. If you, the other creature, or both would arrive in a space occupied by a creature or completely filled by one or more objects, you and any creature traveling with you each take 4d6 Force damage, and the teleportation fails.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "dominate-beast",
    "name": "Dominate Beast",
    "nameIT": "Dominate Beast",
    "level": 4,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "One Beast you can see within range must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target has Advantage on the save if you or your allies are fighting it. Whenever the target takes damage, it repeats the save, ending the spell on itself on a success. You have a telepathic link with the Charmed target while the two of you are on the same plane of existence. On your turn, you can use this link to issue commands to the target (no action required), such as “Attack that creature,” “Move over there,” or “Fetch that object.” The target does its best to obey on its turn. If it completes an order and doesn’t receive further direction from you, it acts and moves as it likes, focusing on protecting itself. You can command the target to take a Reaction but must take your own Reaction to do so. Using a Higher-Level Spell Slot. Your Concentration can last longer with a spell slot of level 5 (up to 10 minutes), 6 (up to 1 hour), or 7+ (up to 8 hours).",
    "descriptionIT": "One Beast you can see within range must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target has Advantage on the save if you or your allies are fighting it. Whenever the target takes damage, it repeats the save, ending the spell on itself on a success. You have a telepathic link with the Charmed target while the two of you are on the same plane of existence. On your turn, you can use this link to issue commands to the target (no action required), such as “Attack that creature,” “Move over there,” or “Fetch that object.” The target does its best to obey on its turn. If it completes an order and doesn’t receive further direction from you, it acts and moves as it likes, focusing on protecting itself. You can command the target to take a Reaction but must take your own Reaction to do so. Using a Higher-Level Spell Slot. Your Concentration can last longer with a spell slot of level 5 (up to 10 minutes), 6 (up to 1 hour), or 7+ (up to 8 hours).",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "ranger",
      "sorcerer"
    ]
  },
  {
    "id": "fire-shield",
    "name": "Fire Shield",
    "nameIT": "Fire Shield",
    "level": 4,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "a bit of phosphorus or a firefly",
      "mIT": "a bit of phosphorus or a firefly"
    },
    "duration": "10 minutes",
    "durationIT": "10 minuti",
    "concentration": false,
    "description": "Wispy flames wreathe your body for the duration, shedding Bright Light in a 10-foot radius and Dim Light for an additional 10 feet. The flames provide you with a warm shield or a chill shield, as you choose. The warm shield grants you Resistance to Cold damage, and the chill shield grants you Resistance to Fire damage. In addition, whenever a creature within 5 feet of you hits you with a melee attack roll, the shield erupts with flame. The attacker takes 2d8 Fire damage from a warm shield or 2d8 Cold damage from a chill shield.",
    "descriptionIT": "Wispy flames wreathe your body for the duration, shedding Bright Light in a 10-foot radius and Dim Light for an additional 3 m. The flames provide you with a warm shield or a chill shield, as you choose. The warm shield grants you Resistance to Cold damage, and the chill shield grants you Resistance to Fire damage. In addition, whenever a creature within 1,5 m of you hits you with a melee attack roll, the shield erupts with flame. The attacker takes 2d8 Fire damage from a warm shield or 2d8 Cold damage from a chill shield.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "freedom-of-movement",
    "name": "Freedom of Movement",
    "nameIT": "Freedom of Movement",
    "level": 4,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "a leather strap",
      "mIT": "a leather strap"
    },
    "duration": "1 hour",
    "durationIT": "1 ora",
    "concentration": false,
    "description": "You touch a willing creature. For the duration, the target’s movement is unaffected by Difficult Terrain, and spells and other magical effects can neither reduce the target’s Speed nor cause the target to have the Paralyzed or Restrained conditions. The target also has a Swim Speed equal to its Speed. In addition, the target can spend 5 feet of movement to automatically escape from nonmagical restraints, such as manacles or a creature imposing the Grappled condition on it. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 4.",
    "descriptionIT": "You touch a willing creature. For the duration, the target’s movement is unaffected by Difficult Terrain, and spells and other magical effects can neither reduce the target’s Speed nor cause the target to have the Paralyzed or Restrained conditions. The target also has a Swim Speed equal to its Speed. In addition, the target can spend 1,5 m of movement to automatically escape from nonmagical restraints, such as manacles or a creature imposing the Grappled condition on it. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 4.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "ranger"
    ]
  },
  {
    "id": "greater-invisibility",
    "name": "Greater Invisibility",
    "nameIT": "Greater Invisibility",
    "level": 4,
    "school": "illusion",
    "schoolIT": "Illusione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "A creature you touch has the Invisible condition until the spell ends.",
    "descriptionIT": "A creature you touch has the Invisible condition until the spell ends.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "hallucinatory-terrain",
    "name": "Hallucinatory Terrain",
    "nameIT": "Hallucinatory Terrain",
    "level": 4,
    "school": "illusion",
    "schoolIT": "Illusione",
    "castingTime": "10 minutes",
    "castingTimeIT": "10 minuti",
    "range": "300 feet",
    "rangeIT": "90 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a mushroom",
      "mIT": "a mushroom"
    },
    "duration": "24 hours",
    "durationIT": "24 ore",
    "concentration": false,
    "description": "You make natural terrain in a 150-foot Cube in range look, sound, and smell like another sort of natural terrain. Thus, open fields or a road can be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road. Manufactured structures, equipment, and creatures within the area aren’t changed. The tactile characteristics of the terrain are unchanged, so creatures entering the area are likely to notice the illusion. If the difference isn’t obvious by touch, a creature examining the illusion can take the Study action to make an Intelligence (Investigation) check against your spell save DC to disbelieve it. If a creature discerns that the terrain is illusory, the creature sees a vague image superimposed on the real terrain.",
    "descriptionIT": "You make natural terrain in a 150-foot Cube in range look, sound, and smell like another sort of natural terrain. Thus, open fields or a road can be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road. Manufactured structures, equipment, and creatures within the area aren’t changed. The tactile characteristics of the terrain are unchanged, so creatures entering the area are likely to notice the illusion. If the difference isn’t obvious by touch, a creature examining the illusion can take the Study action to make an Intelligence (Investigation) check against your spell save DC to disbelieve it. If a creature discerns that the terrain is illusory, the creature sees a vague image superimposed on the real terrain.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "ice-storm",
    "name": "Ice Storm",
    "nameIT": "Ice Storm",
    "level": 4,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "300 feet",
    "rangeIT": "90 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a mitten",
      "mIT": "a mitten"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "Hail falls in a 20-foot-radius, 40-foot-high Cylinder centered on a point within range. Each creature in the Cylinder makes a Dexterity saving throw. A creature takes 2d10 Bludgeoning damage and 4d6 Cold damage on a failed save or half as much damage on a successful one. Hailstones turn ground in the Cylinder into Difficult Terrain until the end of your next turn. Using a Higher-Level Spell Slot. The Bludgeoning damage increases by 1d10 for each spell slot level above 4.",
    "descriptionIT": "Hail falls in a 20-foot-radius, 40-foot-high Cylinder centered on a point within range. Each creature in the Cylinder makes a Dexterity saving throw. A creature takes 2d10 Bludgeoning damage and 4d6 Cold damage on a failed save or half as much damage on a successful one. Hailstones turn ground in the Cylinder into Difficult Terrain until the end of your next turn. Using a Higher-Level Spell Slot. The Bludgeoning damage increases by 1d10 for each spell slot level above 4.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "locate-creature",
    "name": "Locate Creature",
    "nameIT": "Locate Creature",
    "level": 4,
    "school": "divination",
    "schoolIT": "Divinazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "fur from a bloodhound",
      "mIT": "fur from a bloodhound"
    },
    "duration": "Concentration, up to 1 hour",
    "durationIT": "Concentrazione, fino a 1 ora",
    "concentration": true,
    "description": "Describe or name a creature that is familiar to you. You sense the direction to the creature’s location if that creature is within 1,000 feet of you. If the creature is moving, you know the direction of its movement. The spell can locate a specific creature known to you or the nearest creature of a specific kind (such as a human or a unicorn) if you have seen such a creature up close—within 30 feet—at least once. If the creature you described or named is in a different form, such as under the effects of a Flesh to Stone or Polymorph spell, this spell doesn’t locate the creature. This spell can’t locate a creature if any thickness of lead blocks a direct path between you and the creature.",
    "descriptionIT": "Describe or name a creature that is familiar to you. You sense the direction to the creature’s location if that creature is within 1,0 m of you. If the creature is moving, you know the direction of its movement. The spell can locate a specific creature known to you or the nearest creature of a specific kind (such as a human or a unicorn) if you have seen such a creature up close—within 9 m—at least once. If the creature you described or named is in a different form, such as under the effects of a Flesh to Stone or Polymorph spell, this spell doesn’t locate the creature. This spell can’t locate a creature if any thickness of lead blocks a direct path between you and the creature.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "paladin",
      "ranger"
    ]
  },
  {
    "id": "phantasmal-killer",
    "name": "Phantasmal Killer",
    "nameIT": "Phantasmal Killer",
    "level": 4,
    "school": "illusion",
    "schoolIT": "Illusione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "120 feet",
    "rangeIT": "36 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "You tap into the nightmares of a creature you can see within range and create an illusion of its deepest fears, visible only to that creature. The target makes a Wisdom saving throw. On a failed save, the target takes 4d10 Psychic damage and has Disadvantage on ability checks and attack rolls for the duration. On a successful save, the target takes half as much damage, and the spell ends. For the duration, the target makes a Wisdom saving throw at the end of each of its turns. On a failed save, it takes the Psychic damage again. On a successful save, the spell ends. Using a Higher-Level Spell Slot. The damage increases by 1d10 for each spell slot level above 4.",
    "descriptionIT": "You tap into the nightmares of a creature you can see within range and create an illusion of its deepest fears, visible only to that creature. The target makes a Wisdom saving throw. On a failed save, the target takes 4d10 Psychic damage and has Disadvantage on ability checks and attack rolls for the duration. On a successful save, the target takes half as much damage, and the spell ends. For the duration, the target makes a Wisdom saving throw at the end of each of its turns. On a failed save, it takes the Psychic damage again. On a successful save, the spell ends. Using a Higher-Level Spell Slot. The damage increases by 1d10 for each spell slot level above 4.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "polymorph",
    "name": "Polymorph",
    "nameIT": "Polymorph",
    "level": 4,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a caterpillar cocoon",
      "mIT": "a caterpillar cocoon"
    },
    "duration": "Concentration, up to 1 hour",
    "durationIT": "Concentrazione, fino a 1 ora",
    "concentration": true,
    "description": "You attempt to transform a creature that you can see within range into a Beast. The target must succeed on a Wisdom saving throw or shape-shift into a Beast form for the duration. That form can be any Beast you choose that has a Challenge Rating equal to or less than the target’s (or the target’s level if it doesn’t have a Challenge Rating). The target’s game statistics are replaced by the stat block of the chosen Beast, but the target retains its alignment, personality, creature type, Hit Points, and Hit Point Dice. See the “Animals” section of “Monsters” for a sample of Beast stat blocks. The target gains a number of Temporary Hit Points equal to the Hit Points of the Beast form. These Temporary Hit Points vanish if any remain when the spell ends. The spell ends early on the target if it has no Temporary Hit Points left. The target is limited in the actions it can perform by the anatomy of its new form, and it can’t speak or cast spells. The target’s gear melds into the new form. The creature can’t use or otherwise benefit from any of that equipment.",
    "descriptionIT": "You attempt to transform a creature that you can see within range into a Beast. The target must succeed on a Wisdom saving throw or shape-shift into a Beast form for the duration. That form can be any Beast you choose that has a Challenge Rating equal to or less than the target’s (or the target’s level if it doesn’t have a Challenge Rating). The target’s game statistics are replaced by the stat block of the chosen Beast, but the target retains its alignment, personality, creature type, Hit Points, and Hit Point Dice. See the “Animals” section of “Monsters” for a sample of Beast stat blocks. The target gains a number of Temporary Hit Points equal to the Hit Points of the Beast form. These Temporary Hit Points vanish if any remain when the spell ends. The spell ends early on the target if it has no Temporary Hit Points left. The target is limited in the actions it can perform by the anatomy of its new form, and it can’t speak or cast spells. The target’s gear melds into the new form. The creature can’t use or otherwise benefit from any of that equipment.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "stoneskin",
    "name": "Stoneskin",
    "nameIT": "Stoneskin",
    "level": 4,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "diamond dust worth 100+ GP, which the spell consumes",
      "mIT": "diamond dust worth 100+ GP, which the spell consumes"
    },
    "duration": "Concentration, up to 1 hour",
    "durationIT": "Concentrazione, fino a 1 ora",
    "concentration": true,
    "description": "Until the spell ends, one willing creature you touch has Resistance to Bludgeoning, Piercing, and Slashing damage.",
    "descriptionIT": "Until the spell ends, one willing creature you touch has Resistance to Bludgeoning, Piercing, and Slashing damage.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "ranger",
      "sorcerer"
    ]
  },
  {
    "id": "vitriolic-sphere",
    "name": "Vitriolic Sphere",
    "nameIT": "Vitriolic Sphere",
    "level": 4,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "150 feet",
    "rangeIT": "45 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a drop of bile",
      "mIT": "a drop of bile"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You point at a location within range, and a glowing, 1-foot-diameter ball of acid streaks there and explodes in a 20-foot-radius Sphere. Each creature in that area makes a Dexterity saving throw. On a failed save, a creature takes 10d4 Acid damage and another 5d4 Acid damage at the end of its next turn. On a successful save, a creature takes half the initial damage only. Using a Higher-Level Spell Slot. The initial damage increases by 2d4 for each spell slot level above 4.",
    "descriptionIT": "You point at a location within range, and a glowing, 1-foot-diameter ball of acid streaks there and explodes in a 20-foot-radius Sphere. Each creature in that area makes a Dexterity saving throw. On a failed save, a creature takes 10d4 Acid damage and another 5d4 Acid damage at the end of its next turn. On a successful save, a creature takes half the initial damage only. Using a Higher-Level Spell Slot. The initial damage increases by 2d4 for each spell slot level above 4.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "wall-of-fire",
    "name": "Wall of Fire",
    "nameIT": "Wall of Fire",
    "level": 4,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "120 feet",
    "rangeIT": "36 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a piece of charcoal",
      "mIT": "a piece of charcoal"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration. When the wall appears, each creature in its area makes a Dexterity saving throw, taking 5d8 Fire damage on a failed save or half as much damage on a successful one. One side of the wall, selected by you when you cast this spell, deals 5d8 Fire damage to each creature that ends its turn within 10 feet of that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage. Using a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 4.",
    "descriptionIT": "You create a wall of fire on a solid surface within range. You can make the wall up to 18 m long, 6 m high, and 0,3 m thick, or a ringed wall up to 6 m in diameter, 6 m high, and 0,3 m thick. The wall is opaque and lasts for the duration. When the wall appears, each creature in its area makes a Dexterity saving throw, taking 5d8 Fire damage on a failed save or half as much damage on a successful one. One side of the wall, selected by you when you cast this spell, deals 5d8 Fire damage to each creature that ends its turn within 3 m of that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage. Using a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 4.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "animate-objects",
    "name": "Animate Objects",
    "nameIT": "Animate Objects",
    "level": 5,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "120 feet",
    "rangeIT": "36 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "Objects animate at your command. Choose a number of nonmagical objects within range that aren’t being worn or carried, aren’t fixed to a surface, and aren’t Gargantuan. The maximum number of objects is equal to your spellcasting ability modifier; for this number, a Medium or smaller target counts as one object, a Large target counts as two, and a Huge target counts as three. Each target animates, sprouts legs, and becomes a Construct that uses the Animated Object stat block; this creature is under your control until the spell ends or until it is reduced to 0 Hit Points. Each creature you make with this spell is an ally to you and your allies. In combat, it shares your Initiative count and takes its turn immediately after yours. Until the spell ends, you can take a Bonus Action to mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any of them at the same time, issuing the same command to each one). If you issue no commands, the creature takes the Dodge action and moves only to avoid harm. When the creature drops to 0 Hit Points, it reverts to its object form, and any remaining damage carries over to that form. Using a Higher-Level Spell Slot. The creature’s Slam damage increases by 1d4 (Medium or smaller), 1d6 (Large), or 1d12 (Huge) for each spell slot level above 5. or make attacks with Ranged or Reach weapons through the barrier. If you move so that an affected creature is forced to pass through the barrier, the spell ends.",
    "descriptionIT": "Objects animate at your command. Choose a number of nonmagical objects within range that aren’t being worn or carried, aren’t fixed to a surface, and aren’t Gargantuan. The maximum number of objects is equal to your spellcasting ability modifier; for this number, a Medium or smaller target counts as one object, a Large target counts as two, and a Huge target counts as three. Each target animates, sprouts legs, and becomes a Construct that uses the Animated Object stat block; this creature is under your control until the spell ends or until it is reduced to 0 Hit Points. Each creature you make with this spell is an ally to you and your allies. In combat, it shares your Initiative count and takes its turn immediately after yours. Until the spell ends, you can take a Bonus Action to mentally command any creature you made with this spell if the creature is within 150 m of you (if you control multiple creatures, you can command any of them at the same time, issuing the same command to each one). If you issue no commands, the creature takes the Dodge action and moves only to avoid harm. When the creature drops to 0 Hit Points, it reverts to its object form, and any remaining damage carries over to that form. Using a Higher-Level Spell Slot. The creature’s Slam damage increases by 1d4 (Medium or smaller), 1d6 (Large), or 1d12 (Huge) for each spell slot level above 5. or make attacks with Ranged or Reach weapons through the barrier. If you move so that an affected creature is forced to pass through the barrier, the spell ends.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "arcane-hand",
    "name": "Arcane Hand",
    "nameIT": "Arcane Hand",
    "level": 5,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "120 feet",
    "rangeIT": "36 m",
    "components": {
      "v": true,
      "s": true,
      "m": "an eggshell and a glove",
      "mIT": "an eggshell and a glove"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "You create a Large hand of shimmering magical energy in an unoccupied space that you can see within range. The hand lasts for the duration, and it moves at your command, mimicking the movements of your own hand. The hand is an object that has AC 20 and Hit Points equal to your Hit Point maximum. If it drops to 0 Hit Points, the spell ends. The hand doesn’t occupy its space. When you cast the spell and as a Bonus Action on your later turns, you can move the hand up to 60 feet and then cause one of the following effects: Clenched Fist. The hand strikes a target within 5 feet of it. Make a melee spell attack. On a hit, the target takes 5d8 Force damage. Forceful Hand. The hand attempts to push a Huge or smaller creature within 5 feet of it. The target must succeed on a Strength saving throw, or the hand pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier. The hand moves with the target, remaining within 5 feet of it. Grasping Hand. The hand attempts to grapple a Huge or smaller creature within 5 feet of it. The target must succeed on a Dexterity saving throw, or the target has the Grappled condition, with an escape DC equal to your spell save DC. While the hand grapples the target, you can take a Bonus Action to cause the hand to crush it, dealing Bludgeoning damage to the target equal to 4d6 plus your spellcasting ability modifier. Interposing Hand. The hand grants you Half Cover against attacks and other effects that originate from its space or that pass through it. In addition, its space counts as Difficult Terrain for your enemies. Using a Higher-Level Spell Slot. The damage of the Clenched Fist increases by 2d8 and the damage of the Grasping Hand increases by 2d6 for each spell slot level above 5.",
    "descriptionIT": "You create a Large hand of shimmering magical energy in an unoccupied space that you can see within range. The hand lasts for the duration, and it moves at your command, mimicking the movements of your own hand. The hand is an object that has AC 20 and Hit Points equal to your Hit Point maximum. If it drops to 0 Hit Points, the spell ends. The hand doesn’t occupy its space. When you cast the spell and as a Bonus Action on your later turns, you can move the hand up to 18 m and then cause one of the following effects: Clenched Fist. The hand strikes a target within 1,5 m of it. Make a melee spell attack. On a hit, the target takes 5d8 Force damage. Forceful Hand. The hand attempts to push a Huge or smaller creature within 1,5 m of it. The target must succeed on a Strength saving throw, or the hand pushes the target up to 1,5 m plus a number of feet equal to five times your spellcasting ability modifier. The hand moves with the target, remaining within 1,5 m of it. Grasping Hand. The hand attempts to grapple a Huge or smaller creature within 1,5 m of it. The target must succeed on a Dexterity saving throw, or the target has the Grappled condition, with an escape DC equal to your spell save DC. While the hand grapples the target, you can take a Bonus Action to cause the hand to crush it, dealing Bludgeoning damage to the target equal to 4d6 plus your spellcasting ability modifier. Interposing Hand. The hand grants you Half Cover against attacks and other effects that originate from its space or that pass through it. In addition, its space counts as Difficult Terrain for your enemies. Using a Higher-Level Spell Slot. The damage of the Clenched Fist increases by 2d8 and the damage of the Grasping Hand increases by 2d6 for each spell slot level above 5.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "awaken",
    "name": "Awaken",
    "nameIT": "Awaken",
    "level": 5,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "8 hours",
    "castingTimeIT": "8 ore",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "an agate worth 1,000+ GP, which the spell consumes",
      "mIT": "an agate worth 1,000+ GP, which the spell consumes"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You spend the casting time tracing magical pathways within a precious gemstone, and then touch the target. The target must be either a Beast or Plant creature with an Intelligence of 3 or less or a natural plant that isn’t a creature. The target gains an Intelligence of 10 and the ability to speak one language you know. If the target is a natural plant, it becomes a Plant creature and gains the ability to move its limbs, roots, vines, creepers, and so forth, and it gains senses similar to a human’s. The GM chooses statistics appropriate for the awakened Plant, such as the statistics for the Awakened Shrub or Awakened Tree in “Monsters.” The awakened target has the Charmed condition for 30 days or until you or your allies deal damage to it. When that condition ends, the awakened creature chooses its attitude toward you.",
    "descriptionIT": "You spend the casting time tracing magical pathways within a precious gemstone, and then touch the target. The target must be either a Beast or Plant creature with an Intelligence of 3 or less or a natural plant that isn’t a creature. The target gains an Intelligence of 10 and the ability to speak one language you know. If the target is a natural plant, it becomes a Plant creature and gains the ability to move its limbs, roots, vines, creepers, and so forth, and it gains senses similar to a human’s. The GM chooses statistics appropriate for the awakened Plant, such as the statistics for the Awakened Shrub or Awakened Tree in “Monsters.” The awakened target has the Charmed condition for 30 days or until you or your allies deal damage to it. When that condition ends, the awakened creature chooses its attitude toward you.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "cloudkill",
    "name": "Cloudkill",
    "nameIT": "Cloudkill",
    "level": 5,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "120 feet",
    "rangeIT": "36 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 10 minutes",
    "durationIT": "Concentrazione, fino a 10 minuti",
    "concentration": true,
    "description": "You create a 20-foot-radius Sphere of yellow-green fog centered on a point within range. The fog lasts for the duration or until strong wind (such as the one created by Gust of Wind) disperses it, ending the spell. Its area is Heavily Obscured. Each creature in the Sphere makes a Constitution saving throw, taking 5d8 Poison damage on a failed save or half as much damage on a successful one. A creature must also make this save when the Sphere moves into its space and when it enters the Sphere or ends its turn there. A creature makes this save only once per turn. The Sphere moves 10 feet away from you at the start of each of your turns. Using a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 5.",
    "descriptionIT": "You create a 20-foot-radius Sphere of yellow-green fog centered on a point within range. The fog lasts for the duration or until strong wind (such as the one created by Gust of Wind) disperses it, ending the spell. Its area is Heavily Obscured. Each creature in the Sphere makes a Constitution saving throw, taking 5d8 Poison damage on a failed save or half as much damage on a successful one. A creature must also make this save when the Sphere moves into its space and when it enters the Sphere or ends its turn there. A creature makes this save only once per turn. The Sphere moves 3 m away from you at the start of each of your turns. Using a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 5.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "commune-with-nature",
    "name": "Commune with Nature",
    "nameIT": "Commune with Nature",
    "level": 5,
    "school": "divination",
    "schoolIT": "Divinazione",
    "castingTime": "1 minute",
    "castingTimeIT": "1 minuto oppure Rituale",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You commune with nature spirits and gain knowledge of the surrounding area. In the outdoors, the spell gives you knowledge of the area within 3 miles of you. In caves and other natural underground settings, the radius is limited to 300 feet. The spell doesn’t function where nature has been replaced by construction, such as in castles and settlements. Choose three of the following facts; you learn those facts as they pertain to the spell’s area: • Locations of settlements • Locations of portals to other planes of existence • Location of one Challenge Rating 10+ creature (GM’s choice) that is a Celestial, an Elemental, a Fey, a Fiend, or an Undead • The most prevalent kind of plant, mineral, or Beast (you choose which to learn) • Locations of bodies of water For example, you could determine the location of a powerful monster in the area, the locations of bodies of water, and the locations of any towns.",
    "descriptionIT": "You commune with nature spirits and gain knowledge of the surrounding area. In the outdoors, the spell gives you knowledge of the area within 4,8 km of you. In caves and other natural underground settings, the radius is limited to 90 m. The spell doesn’t function where nature has been replaced by construction, such as in castles and settlements. Choose three of the following facts; you learn those facts as they pertain to the spell’s area: • Locations of settlements • Locations of portals to other planes of existence • Location of one Challenge Rating 10+ creature (GM’s choice) that is a Celestial, an Elemental, a Fey, a Fiend, or an Undead • The most prevalent kind of plant, mineral, or Beast (you choose which to learn) • Locations of bodies of water For example, you could determine the location of a powerful monster in the area, the locations of bodies of water, and the locations of any towns.",
    "ritual": true,
    "source": "SRD 5.2",
    "classIds": [
      "ranger"
    ]
  },
  {
    "id": "cone-of-cold",
    "name": "Cone of Cold",
    "nameIT": "Cone of Cold",
    "level": 5,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "a small crystal or glass cone",
      "mIT": "a small crystal or glass cone"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You unleash a blast of cold air. Each creature in a 60-foot Cone originating from you makes a Constitution saving throw, taking 8d8 Cold damage on a failed save or half as much damage on a successful one. A creature killed by this spell becomes a frozen statue until it thaws. Using a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 5.",
    "descriptionIT": "You unleash a blast of cold air. Each creature in a 60-foot Cone originating from you makes a Constitution saving throw, taking 8d8 Cold damage on a failed save or half as much damage on a successful one. A creature killed by this spell becomes a frozen statue until it thaws. Using a Higher-Level Spell Slot. The damage increases by 1d8 for each spell slot level above 5.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "creation",
    "name": "Creation",
    "nameIT": "Creation",
    "level": 5,
    "school": "illusion",
    "schoolIT": "Illusione",
    "castingTime": "1 minute",
    "castingTimeIT": "1 minuto",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a paintbrush",
      "mIT": "a paintbrush"
    },
    "duration": "Special",
    "durationIT": "Speciale",
    "concentration": false,
    "description": "You pull wisps of shadow material from the Shadowfell to create an object within range. It is either an object of vegetable matter (soft goods, rope, wood, and the like) or mineral matter (stone, crystal, metal, and the like). The object must be no larger than a 5-foot Cube, and the object must be of a form and material that you have seen. The spell’s duration depends on the object’s material, as shown in the Materials table. If the object is composed of multiple materials, use the shortest duration. Using any object created by this spell as another spell’s Material component causes the other spell to fail. Materials Material Duration Vegetable matter 24 hours Stone or crystal 12 hours Precious metals 1 hour Gems 10 minutes Adamantine or mithral 1 minute Using a Higher-Level Spell Slot. The Cube increases by 5 feet for each spell slot level above 5.",
    "descriptionIT": "You pull wisps of shadow material from the Shadowfell to create an object within range. It is either an object of vegetable matter (soft goods, rope, wood, and the like) or mineral matter (stone, crystal, metal, and the like). The object must be no larger than a 5-foot Cube, and the object must be of a form and material that you have seen. The spell’s duration depends on the object’s material, as shown in the Materials table. If the object is composed of multiple materials, use the shortest duration. Using any object created by this spell as another spell’s Material component causes the other spell to fail. Materials Material Duration Vegetable matter 24 hours Stone or crystal 12 hours Precious metals 1 hour Gems 10 minutes Adamantine or mithral 1 minute Using a Higher-Level Spell Slot. The Cube increases by 1,5 m for each spell slot level above 5.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "dispel-evil-and-good",
    "name": "Dispel Evil and Good",
    "nameIT": "Dispel Evil and Good",
    "level": 5,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "powdered silver and iron",
      "mIT": "powdered silver and iron"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "For the duration, Celestials, Elementals, Fey, Fiends, and Undead have Disadvantage on attack rolls against you. You can end the spell early by using either of the following special functions. Break Enchantment. As a Magic action, you touch a creature that is possessed by or has the Charmed or Frightened condition from one or more creatures of the types above. The target is no longer possessed, Charmed, or Frightened by such creatures. Dismissal. As a Magic action, you target one creature you can see within 5 feet of you that has one of the creature types above. The target must succeed on a Charisma saving throw or be sent back to its home plane if it isn’t there already. If they aren’t on their home plane, Undead are sent to the Shadowfell, and Fey are sent to the Feywild.",
    "descriptionIT": "For the duration, Celestials, Elementals, Fey, Fiends, and Undead have Disadvantage on attack rolls against you. You can end the spell early by using either of the following special functions. Break Enchantment. As a Magic action, you touch a creature that is possessed by or has the Charmed or Frightened condition from one or more creatures of the types above. The target is no longer possessed, Charmed, or Frightened by such creatures. Dismissal. As a Magic action, you target one creature you can see within 1,5 m of you that has one of the creature types above. The target must succeed on a Charisma saving throw or be sent back to its home plane if it isn’t there already. If they aren’t on their home plane, Undead are sent to the Shadowfell, and Fey are sent to the Feywild.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "paladin"
    ]
  },
  {
    "id": "dominate-person",
    "name": "Dominate Person",
    "nameIT": "Dominate Person",
    "level": 5,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "One Humanoid you can see within range must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target has Advantage on the save if you or your allies are fighting it. Whenever the target takes damage, it repeats the save, ending the spell on itself on a success. You have a telepathic link with the Charmed target while the two of you are on the same plane of existence. On your turn, you can use this link to issue commands to the target (no action required), such as “Attack that creature,” “Move over there,” or “Fetch that object.” The target does its best to obey on its turn. If it completes an order and doesn’t receive further direction from you, it acts and moves as it likes, focusing on protecting itself. You can command the target to take a Reaction but must take your own Reaction to do so. Using a Higher-Level Spell Slot. Your Concentration can last longer with a spell slot of level 6 (up to 10 minutes), 7 (up to 1 hour), or 8+ (up to 8 hours).",
    "descriptionIT": "One Humanoid you can see within range must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target has Advantage on the save if you or your allies are fighting it. Whenever the target takes damage, it repeats the save, ending the spell on itself on a success. You have a telepathic link with the Charmed target while the two of you are on the same plane of existence. On your turn, you can use this link to issue commands to the target (no action required), such as “Attack that creature,” “Move over there,” or “Fetch that object.” The target does its best to obey on its turn. If it completes an order and doesn’t receive further direction from you, it acts and moves as it likes, focusing on protecting itself. You can command the target to take a Reaction but must take your own Reaction to do so. Using a Higher-Level Spell Slot. Your Concentration can last longer with a spell slot of level 6 (up to 10 minutes), 7 (up to 1 hour), or 8+ (up to 8 hours).",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "dream",
    "name": "Dream",
    "nameIT": "Dream",
    "level": 5,
    "school": "illusion",
    "schoolIT": "Illusione",
    "castingTime": "1 minute",
    "castingTimeIT": "1 minuto",
    "range": "Special",
    "rangeIT": "Speciale",
    "components": {
      "v": true,
      "s": true,
      "m": "a handful of sand",
      "mIT": "a handful of sand"
    },
    "duration": "8 hours",
    "durationIT": "8 ore",
    "concentration": false,
    "description": "You target a creature you know on the same plane of existence. You or a willing creature you touch enters a trance state to act as a dream messenger. While in the trance, the messenger is Incapacitated and has a Speed of 0. If the target is asleep, the messenger appears in the target’s dreams and can converse with the target as long as it remains asleep, through the spell’s duration. The messenger can also shape the dream’s environment, creating landscapes, objects, and other images. The messenger can emerge from the trance at any time, ending the spell. The target recalls the dream perfectly upon waking. If the target is awake when you cast the spell, the messenger knows it and can either end the trance (and the spell) or wait for the target to sleep, at which point the messenger enters its dreams. You can make the messenger terrifying to the target. If you do so, the messenger can deliver a message of no more than ten words, and then the target makes a Wisdom saving throw. On a failed save, the target gains no benefit from its rest, and it takes 3d6 Psychic damage when it wakes up.",
    "descriptionIT": "You target a creature you know on the same plane of existence. You or a willing creature you touch enters a trance state to act as a dream messenger. While in the trance, the messenger is Incapacitated and has a Speed of 0. If the target is asleep, the messenger appears in the target’s dreams and can converse with the target as long as it remains asleep, through the spell’s duration. The messenger can also shape the dream’s environment, creating landscapes, objects, and other images. The messenger can emerge from the trance at any time, ending the spell. The target recalls the dream perfectly upon waking. If the target is awake when you cast the spell, the messenger knows it and can either end the trance (and the spell) or wait for the target to sleep, at which point the messenger enters its dreams. You can make the messenger terrifying to the target. If you do so, the messenger can deliver a message of no more than ten words, and then the target makes a Wisdom saving throw. On a failed save, the target gains no benefit from its rest, and it takes 3d6 Psychic damage when it wakes up.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "geas",
    "name": "Geas",
    "nameIT": "Geas",
    "level": 5,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "1 minute",
    "castingTimeIT": "1 minuto",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "30 days",
    "durationIT": "30 giorni",
    "concentration": false,
    "description": "You give a verbal command to a creature that you can see within range, ordering it to carry out some service or refrain from an action or a course of activity as you decide. The target must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target automatically succeeds if it can’t understand your command. While Charmed, the creature takes 5d10 Psychic damage if it acts in a manner directly counter to your command. It takes this damage no more than once each day. You can issue any command you choose, short of an activity that would result in certain death. Should you issue a suicidal command, the spell ends. A Remove Curse, Greater Restoration, or Wish spell ends this spell. Using a Higher-Level Spell Slot. If you use a level 7 or 8 spell slot, the duration is 365 days. If you use a level 9 spell slot, the spell lasts until it is ended by one of the spells mentioned above.",
    "descriptionIT": "You give a verbal command to a creature that you can see within range, ordering it to carry out some service or refrain from an action or a course of activity as you decide. The target must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target automatically succeeds if it can’t understand your command. While Charmed, the creature takes 5d10 Psychic damage if it acts in a manner directly counter to your command. It takes this damage no more than once each day. You can issue any command you choose, short of an activity that would result in certain death. Should you issue a suicidal command, the spell ends. A Remove Curse, Greater Restoration, or Wish spell ends this spell. Using a Higher-Level Spell Slot. If you use a level 7 or 8 spell slot, the duration is 365 days. If you use a level 9 spell slot, the spell lasts until it is ended by one of the spells mentioned above.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "paladin"
    ]
  },
  {
    "id": "greater-restoration",
    "name": "Greater Restoration",
    "nameIT": "Greater Restoration",
    "level": 5,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "diamond dust worth 100+ GP, which the spell consumes",
      "mIT": "diamond dust worth 100+ GP, which the spell consumes"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You touch a creature and magically remove one of the following effects from it: • 1 Exhaustion level • The Charmed or Petrified condition • A curse, including the target’s Attunement to a cursed magic item • Any reduction to one of the target’s ability scores • Any reduction to the target’s Hit Point maximum",
    "descriptionIT": "You touch a creature and magically remove one of the following effects from it: • 1 Exhaustion level • The Charmed or Petrified condition • A curse, including the target’s Attunement to a cursed magic item • Any reduction to one of the target’s ability scores • Any reduction to the target’s Hit Point maximum",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "paladin",
      "ranger"
    ]
  },
  {
    "id": "hold-monster",
    "name": "Hold Monster",
    "nameIT": "Hold Monster",
    "level": 5,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "90 feet",
    "rangeIT": "27 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a straight piece of iron",
      "mIT": "a straight piece of iron"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or have the Paralyzed condition for the duration. At the end of each of its turns, the target repeats the save, ending the spell on itself on a success. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 5.",
    "descriptionIT": "Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or have the Paralyzed condition for the duration. At the end of each of its turns, the target repeats the save, ending the spell on itself on a success. Using a Higher-Level Spell Slot. You can target one additional creature for each spell slot level above 5.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "insect-plague",
    "name": "Insect Plague",
    "nameIT": "Insect Plague",
    "level": 5,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "300 feet",
    "rangeIT": "90 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a locust",
      "mIT": "a locust"
    },
    "duration": "Concentration, up to 10 minutes",
    "durationIT": "Concentrazione, fino a 10 minuti",
    "concentration": true,
    "description": "Swarming locusts fill a 20-foot-radius Sphere centered on a point you choose within range. The Sphere remains for the duration, and its area is Lightly Obscured and Difficult Terrain. When the swarm appears, each creature in it makes a Constitution saving throw, taking 4d10 Piercing damage on a failed save or half as much damage on a successful one. A creature also makes this save when it enters the spell’s area for the first time on a turn or ends its turn there. A creature makes this save only once per turn. Using a Higher-Level Spell Slot. The damage increases by 1d10 for each spell slot level above 5.",
    "descriptionIT": "Swarming locusts fill a 20-foot-radius Sphere centered on a point you choose within range. The Sphere remains for the duration, and its area is Lightly Obscured and Difficult Terrain. When the swarm appears, each creature in it makes a Constitution saving throw, taking 4d10 Piercing damage on a failed save or half as much damage on a successful one. A creature also makes this save when it enters the spell’s area for the first time on a turn or ends its turn there. A creature makes this save only once per turn. Using a Higher-Level Spell Slot. The damage increases by 1d10 for each spell slot level above 5.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "legend-lore",
    "name": "Legend Lore",
    "nameIT": "Legend Lore",
    "level": 5,
    "school": "divination",
    "schoolIT": "Divinazione",
    "castingTime": "10 minutes",
    "castingTimeIT": "10 minuti",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "incense worth 250+ GP, which the spell consumes, and four ivory strips worth 50+ GP each",
      "mIT": "incense worth 250+ GP, which the spell consumes, and four ivory strips worth 50+ GP each"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "Name or describe a famous person, place, or object. The spell brings to your mind a brief summary of the significant lore about that famous thing, as described by the GM. The lore might consist of important details, amusing revelations, or even secret lore that has never been widely known. The more information you already know about the thing, the more precise and detailed the information you receive is. That information is accurate but might be couched in figurative language or poetry, as determined by the GM. If the famous thing you chose isn’t actually famous, you hear sad musical notes played on a trombone, and the spell fails.",
    "descriptionIT": "Name or describe a famous person, place, or object. The spell brings to your mind a brief summary of the significant lore about that famous thing, as described by the GM. The lore might consist of important details, amusing revelations, or even secret lore that has never been widely known. The more information you already know about the thing, the more precise and detailed the information you receive is. That information is accurate but might be couched in figurative language or poetry, as determined by the GM. If the famous thing you chose isn’t actually famous, you hear sad musical notes played on a trombone, and the spell fails.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "mass-cure-wounds",
    "name": "Mass Cure Wounds",
    "nameIT": "Mass Cure Wounds",
    "level": 5,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "A wave of healing energy washes out from a point you can see within range. Choose up to six creatures in a 30-foot-radius Sphere centered on that point. Each target regains Hit Points equal to 5d8 plus your spellcasting ability modifier. Using a Higher-Level Spell Slot. The healing increases by 1d8 for each spell slot level above 5.",
    "descriptionIT": "A wave of healing energy washes out from a point you can see within range. Choose up to six creatures in a 30-foot-radius Sphere centered on that point. Each target regains Hit Points equal to 5d8 plus your spellcasting ability modifier. Using a Higher-Level Spell Slot. The healing increases by 1d8 for each spell slot level above 5.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "mislead",
    "name": "Mislead",
    "nameIT": "Mislead",
    "level": 5,
    "school": "illusion",
    "schoolIT": "Illusione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": false,
      "s": true
    },
    "duration": "Concentration, up to 1 hour",
    "durationIT": "Concentrazione, fino a 1 ora",
    "concentration": true,
    "description": "You gain the Invisible condition at the same time that an illusory double of you appears where you are standing. The double lasts for the duration, but the invisibility ends immediately after you make an attack roll, deal damage, or cast a spell. As a Magic action, you can move the illusory double up to twice your Speed and make it gesture, speak, and behave in whatever way you choose. It is intangible and invulnerable. You can see through its eyes and hear through its ears as if you were located where it is.",
    "descriptionIT": "You gain the Invisible condition at the same time that an illusory double of you appears where you are standing. The double lasts for the duration, but the invisibility ends immediately after you make an attack roll, deal damage, or cast a spell. As a Magic action, you can move the illusory double up to twice your Speed and make it gesture, speak, and behave in whatever way you choose. It is intangible and invulnerable. You can see through its eyes and hear through its ears as if you were located where it is.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "modify-memory",
    "name": "Modify Memory",
    "nameIT": "Modify Memory",
    "level": 5,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "You attempt to reshape another creature’s memories. One creature that you can see within range makes a Wisdom saving throw. If you are fighting the creature, it has Advantage on the save. On a failed save, the target has the Charmed condition for the duration. While Charmed in this way, the target also has the Incapacitated condition and is unaware of its surroundings, though it can hear you. If it takes any damage or is targeted by another spell, this spell ends, and no memories are modified. While this charm lasts, you can affect the target’s memory of an event that it experienced within the last 24 hours and that lasted no more than 10 minutes. You can permanently eliminate all memory of the event, allow the target to recall the event with perfect clarity, change its memory of the event’s details, or create a memory of some other event. You must speak to the target to describe how its memories are affected, and it must be able to understand your language for the modified memories to take root. Its mind fills in any gaps in the details of your description. If the spell ends before you finish describing the modified memories, the creature’s memory isn’t altered. Otherwise, the modified memories take hold when the spell ends. A modified memory doesn’t necessarily affect how a creature behaves, particularly if the memory contradicts the creature’s natural inclinations, alignment, or beliefs. An illogical modified memory, such as a false memory of how much the creature enjoyed swimming in acid, is dismissed as a bad dream. The GM might deem a modified memory too nonsensical to affect a creature. A Remove Curse or Greater Restoration spell cast on the target restores the creature’s true memory. Using a Higher-Level Spell Slot. You can alter the target’s memories of an event that took place up to 7 days ago (level 6 spell slot), 30 days ago (level 7 spell slot), 365 days ago (level 8 spell slot), or any time in the creature’s past (level 9 spell slot).",
    "descriptionIT": "You attempt to reshape another creature’s memories. One creature that you can see within range makes a Wisdom saving throw. If you are fighting the creature, it has Advantage on the save. On a failed save, the target has the Charmed condition for the duration. While Charmed in this way, the target also has the Incapacitated condition and is unaware of its surroundings, though it can hear you. If it takes any damage or is targeted by another spell, this spell ends, and no memories are modified. While this charm lasts, you can affect the target’s memory of an event that it experienced within the last 24 hours and that lasted no more than 10 minutes. You can permanently eliminate all memory of the event, allow the target to recall the event with perfect clarity, change its memory of the event’s details, or create a memory of some other event. You must speak to the target to describe how its memories are affected, and it must be able to understand your language for the modified memories to take root. Its mind fills in any gaps in the details of your description. If the spell ends before you finish describing the modified memories, the creature’s memory isn’t altered. Otherwise, the modified memories take hold when the spell ends. A modified memory doesn’t necessarily affect how a creature behaves, particularly if the memory contradicts the creature’s natural inclinations, alignment, or beliefs. An illogical modified memory, such as a false memory of how much the creature enjoyed swimming in acid, is dismissed as a bad dream. The GM might deem a modified memory too nonsensical to affect a creature. A Remove Curse or Greater Restoration spell cast on the target restores the creature’s true memory. Using a Higher-Level Spell Slot. You can alter the target’s memories of an event that took place up to 7 days ago (level 6 spell slot), 30 days ago (level 7 spell slot), 365 days ago (level 8 spell slot), or any time in the creature’s past (level 9 spell slot).",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "planar-binding",
    "name": "Planar Binding",
    "nameIT": "Planar Binding",
    "level": 5,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "1 hour",
    "castingTimeIT": "1 ora",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a jewel worth 1,000+ GP, which the spell consumes",
      "mIT": "a jewel worth 1,000+ GP, which the spell consumes"
    },
    "duration": "24 hours",
    "durationIT": "24 ore",
    "concentration": false,
    "description": "You attempt to bind a Celestial, an Elemental, a Fey, or a Fiend to your service. The creature must be within range for the entire casting of the spell. (Typically, the creature is first summoned into the center of the inverted version of the Magic Circle spell to trap it while this spell is cast.) At the completion of the casting, the target must succeed on a Charisma saving throw or be bound to serve you for the duration. If the creature was summoned or created by another spell, that spell’s duration is extended to match the duration of this spell. A bound creature must follow your commands to the best of its ability. You might command the creature to accompany you on an adventure, to guard a location, or to deliver a message. If the creature is Hostile, it strives to twist your commands to achieve its own objectives. If the creature carries out your commands completely before the spell ends, it travels to you to report this fact if you are on the same plane of existence. If you are on a different plane, it returns to the place where you bound it and remains there until the spell ends. Using a Higher-Level Spell Slot. The duration increases with a spell slot of level 6 (10 days), 7 (30 days), 8 (180 days), and 9 (366 days).",
    "descriptionIT": "You attempt to bind a Celestial, an Elemental, a Fey, or a Fiend to your service. The creature must be within range for the entire casting of the spell. (Typically, the creature is first summoned into the center of the inverted version of the Magic Circle spell to trap it while this spell is cast.) At the completion of the casting, the target must succeed on a Charisma saving throw or be bound to serve you for the duration. If the creature was summoned or created by another spell, that spell’s duration is extended to match the duration of this spell. A bound creature must follow your commands to the best of its ability. You might command the creature to accompany you on an adventure, to guard a location, or to deliver a message. If the creature is Hostile, it strives to twist your commands to achieve its own objectives. If the creature carries out your commands completely before the spell ends, it travels to you to report this fact if you are on the same plane of existence. If you are on a different plane, it returns to the place where you bound it and remains there until the spell ends. Using a Higher-Level Spell Slot. The duration increases with a spell slot of level 6 (10 days), 7 (30 days), 8 (180 days), and 9 (366 days).",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "raise-dead",
    "name": "Raise Dead",
    "nameIT": "Raise Dead",
    "level": 5,
    "school": "necromancy",
    "schoolIT": "Necromanzia",
    "castingTime": "1 hour",
    "castingTimeIT": "1 ora",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "a diamond worth 500+ GP, which the spell consumes",
      "mIT": "a diamond worth 500+ GP, which the spell consumes"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "With a touch, you revive a dead creature if it has been dead no longer than 10 days and it wasn’t Undead when it died. The creature returns to life with 1 Hit Point. This spell also neutralizes any poisons that affected the creature at the time of death. This spell closes all mortal wounds, but it doesn’t restore missing body parts. If the creature is lacking body parts or organs integral for its survival— its head, for instance—the spell automatically fails. Coming back from the dead is an ordeal. The target takes a −4 penalty to D20 Tests. Every time the target finishes a Long Rest, the penalty is reduced by 1 until it becomes 0.",
    "descriptionIT": "With a touch, you revive a dead creature if it has been dead no longer than 10 days and it wasn’t Undead when it died. The creature returns to life with 1 Hit Point. This spell also neutralizes any poisons that affected the creature at the time of death. This spell closes all mortal wounds, but it doesn’t restore missing body parts. If the creature is lacking body parts or organs integral for its survival— its head, for instance—the spell automatically fails. Coming back from the dead is an ordeal. The target takes a −4 penalty to D20 Tests. Every time the target finishes a Long Rest, the penalty is reduced by 1 until it becomes 0.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "paladin"
    ]
  },
  {
    "id": "scrying",
    "name": "Scrying",
    "nameIT": "Scrying",
    "level": 5,
    "school": "divination",
    "schoolIT": "Divinazione",
    "castingTime": "10 minutes",
    "castingTimeIT": "10 minuti",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "a focus worth 1,000+ GP, such as a crystal ball, mirror, or water-filled font",
      "mIT": "a focus worth 1,000+ GP, such as a crystal ball, mirror, or water-filled font"
    },
    "duration": "Concentration, up to 10 minutes",
    "durationIT": "Concentrazione, fino a 10 minuti",
    "concentration": true,
    "description": "You can see and hear a creature you choose that is on the same plane of existence as you. The target makes a Wisdom saving throw, which is modified (see the tables below) by how well you know the target and the sort of physical connection you have to it. The target doesn’t know what it is making the save against, only that it feels uneasy. Your Knowledge of the Target Is … Save Modifier Secondhand (heard of the target) +5 Firsthand (met the target) +0 Extensive (know the target well) −5 You Have the Target’s … Save Modifier Picture or other likeness −2 Garment or other possession −4 Body part, lock of hair, or bit of nail −10 On a successful save, the target isn’t affected, and you can’t use this spell on it again for 24 hours. On a failed save, the spell creates an Invisible, intangible sensor within 10 feet of the target. You can see and hear through the sensor as if you were there. The sensor moves with the target, remaining within 10 feet of it for the duration. If something can see the sensor, it appears as a luminous orb about the size of your fist. Instead of targeting a creature, you can target a location you have seen. When you do so, the sensor appears at that location and doesn’t move.",
    "descriptionIT": "You can see and hear a creature you choose that is on the same plane of existence as you. The target makes a Wisdom saving throw, which is modified (see the tables below) by how well you know the target and the sort of physical connection you have to it. The target doesn’t know what it is making the save against, only that it feels uneasy. Your Knowledge of the Target Is … Save Modifier Secondhand (heard of the target) +5 Firsthand (met the target) +0 Extensive (know the target well) −5 You Have the Target’s … Save Modifier Picture or other likeness −2 Garment or other possession −4 Body part, lock of hair, or bit of nail −10 On a successful save, the target isn’t affected, and you can’t use this spell on it again for 24 hours. On a failed save, the spell creates an Invisible, intangible sensor within 3 m of the target. You can see and hear through the sensor as if you were there. The sensor moves with the target, remaining within 3 m of it for the duration. If something can see the sensor, it appears as a luminous orb about the size of your fist. Instead of targeting a creature, you can target a location you have seen. When you do so, the sensor appears at that location and doesn’t move.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "seeming",
    "name": "Seeming",
    "nameIT": "Seeming",
    "level": 5,
    "school": "illusion",
    "schoolIT": "Illusione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "8 hours",
    "durationIT": "8 ore",
    "concentration": false,
    "description": "You give an illusory appearance to each creature of your choice that you can see within range. An unwilling target can make a Charisma saving throw, and if it succeeds, it is unaffected by this spell. You can give the same appearance or different ones to the targets. The spell can change the appearance of the targets’ bodies and equipment. You can make each creature seem 1 foot shorter or taller and appear heavier or lighter. A target’s new appearance must have the same basic arrangement of limbs as the target, but the extent of the illusion is otherwise up to you. The spell lasts for the duration. The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to a creature’s outfit, objects pass through the hat. A creature that takes the Study action to examine a target can make an Intelligence (Investigation) check against your spell save DC. If it succeeds, it becomes aware that the target is disguised.",
    "descriptionIT": "You give an illusory appearance to each creature of your choice that you can see within range. An unwilling target can make a Charisma saving throw, and if it succeeds, it is unaffected by this spell. You can give the same appearance or different ones to the targets. The spell can change the appearance of the targets’ bodies and equipment. You can make each creature seem 0,3 m shorter or taller and appear heavier or lighter. A target’s new appearance must have the same basic arrangement of limbs as the target, but the extent of the illusion is otherwise up to you. The spell lasts for the duration. The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to a creature’s outfit, objects pass through the hat. A creature that takes the Study action to examine a target can make an Intelligence (Investigation) check against your spell save DC. If it succeeds, it becomes aware that the target is disguised.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "telekinesis",
    "name": "Telekinesis",
    "nameIT": "Telekinesis",
    "level": 5,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 10 minutes",
    "durationIT": "Concentrazione, fino a 10 minuti",
    "concentration": true,
    "description": "You gain the ability to move or manipulate creatures or objects by thought. When you cast the spell and as a Magic action on your later turns before the spell ends, you can exert your will on one creature or object that you can see within range, causing the appropriate effect below. You can affect the same target round after round or choose a new one at any time. If you switch targets, the prior target is no longer affected by the spell. Creature. You can try to move a Huge or smaller creature. The target must succeed on a Strength saving throw, or you move it up to 30 feet in any direction within the spell’s range. Until the end of your next turn, the creature has the Restrained condition, and if you lift it into the air, it is suspended there. It falls at the end of your next turn unless you use this option on it again and it fails the save. Object. You can try to move a Huge or smaller object. If the object isn’t being worn or carried, you automatically move it up to 30 feet in any direction within the spell’s range. If the object is worn or carried by a creature, that creature must succeed on a Strength saving throw, or you pull the object away and move it up to 30 feet in any direction within the spell’s range. You can exert fine control on objects with your telekinetic grip, such as manipulating a simple tool,",
    "descriptionIT": "You gain the ability to move or manipulate creatures or objects by thought. When you cast the spell and as a Magic action on your later turns before the spell ends, you can exert your will on one creature or object that you can see within range, causing the appropriate effect below. You can affect the same target round after round or choose a new one at any time. If you switch targets, the prior target is no longer affected by the spell. Creature. You can try to move a Huge or smaller creature. The target must succeed on a Strength saving throw, or you move it up to 9 m in any direction within the spell’s range. Until the end of your next turn, the creature has the Restrained condition, and if you lift it into the air, it is suspended there. It falls at the end of your next turn unless you use this option on it again and it fails the save. Object. You can try to move a Huge or smaller object. If the object isn’t being worn or carried, you automatically move it up to 9 m in any direction within the spell’s range. If the object is worn or carried by a creature, that creature must succeed on a Strength saving throw, or you pull the object away and move it up to 9 m in any direction within the spell’s range. You can exert fine control on objects with your telekinetic grip, such as manipulating a simple tool,",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "telepathic-bond",
    "name": "Telepathic Bond",
    "nameIT": "Telepathic Bond",
    "level": 5,
    "school": "divination",
    "schoolIT": "Divinazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione oppure Rituale",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true,
      "m": "two eggs",
      "mIT": "two eggs"
    },
    "duration": "1 hour",
    "durationIT": "1 ora",
    "concentration": false,
    "description": "You forge a telepathic link among up to eight willing creatures of your choice within range, psychically linking each creature to all the others for the duration. Creatures that can’t communicate in any languages aren’t affected by this spell. Until the spell ends, the targets can communicate telepathically through the bond whether or not they share a language. The communication is possible over any distance, though it can’t extend to other planes of existence.",
    "descriptionIT": "You forge a telepathic link among up to eight willing creatures of your choice within range, psychically linking each creature to all the others for the duration. Creatures that can’t communicate in any languages aren’t affected by this spell. Until the spell ends, the targets can communicate telepathically through the bond whether or not they share a language. The communication is possible over any distance, though it can’t extend to other planes of existence.",
    "ritual": true,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "teleportation-circle",
    "name": "Teleportation Circle",
    "nameIT": "Teleportation Circle",
    "level": 5,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "1 minute",
    "castingTimeIT": "1 minuto",
    "range": "10 feet",
    "rangeIT": "3 m",
    "components": {
      "v": true,
      "s": true,
      "m": "rare inks worth 50+ GP, which the spell consumes",
      "mIT": "rare inks worth 50+ GP, which the spell consumes"
    },
    "duration": "1 round",
    "durationIT": "1 round",
    "concentration": false,
    "description": "As you cast the spell, you draw a 5-foot-radius circle on the ground inscribed with sigils that link your location to a permanent teleportation circle of your choice whose sigil sequence you know and that is on the same plane of existence as you. A shimmering portal opens within the circle you drew and remains open until the end of your next turn. Any creature that enters the portal instantly appears within 5 feet of the destination circle or in the nearest unoccupied space if that space is occupied. Many major temples, guildhalls, and other important places have permanent teleportation circles. Each circle includes a unique sigil sequence—a string of runes arranged in a particular pattern. When you first gain the ability to cast this spell, you learn the sigil sequences for two destinations on the Material Plane, determined by the GM. You might learn additional sigil sequences during your adventures. You can commit a new sigil sequence to memory after studying it for 1 minute. You can create a permanent teleportation circle by casting this spell in the same location every day for 365 days.",
    "descriptionIT": "As you cast the spell, you draw a 5-foot-radius circle on the ground inscribed with sigils that link your location to a permanent teleportation circle of your choice whose sigil sequence you know and that is on the same plane of existence as you. A shimmering portal opens within the circle you drew and remains open until the end of your next turn. Any creature that enters the portal instantly appears within 1,5 m of the destination circle or in the nearest unoccupied space if that space is occupied. Many major temples, guildhalls, and other important places have permanent teleportation circles. Each circle includes a unique sigil sequence—a string of runes arranged in a particular pattern. When you first gain the ability to cast this spell, you learn the sigil sequences for two destinations on the Material Plane, determined by the GM. You might learn additional sigil sequences during your adventures. You can commit a new sigil sequence to memory after studying it for 1 minute. You can create a permanent teleportation circle by casting this spell in the same location every day for 365 days.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "tree-stride",
    "name": "Tree Stride",
    "nameIT": "Tree Stride",
    "level": 5,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "You gain the ability to enter a tree and move from inside it to inside another tree of the same kind within 500 feet. Both trees must be living and at least the same size as you. You must use 5 feet of movement to enter a tree. You instantly know the location of all other trees of the same kind within 500 feet and, as part of the move used to enter the tree, can either pass into one of those trees or step out of the tree you’re in. You appear in a spot of your choice within 5 feet of the destination tree, using another 5 feet of movement. If you have no movement left, you appear within 5 feet of the tree you entered. You can use this transportation ability only once on each of your turns. You must end each turn outside a tree.",
    "descriptionIT": "You gain the ability to enter a tree and move from inside it to inside another tree of the same kind within 150 m. Both trees must be living and at least the same size as you. You must use 1,5 m of movement to enter a tree. You instantly know the location of all other trees of the same kind within 150 m and, as part of the move used to enter the tree, can either pass into one of those trees or step out of the tree you’re in. You appear in a spot of your choice within 1,5 m of the destination tree, using another 1,5 m of movement. If you have no movement left, you appear within 1,5 m of the tree you entered. You can use this transportation ability only once on each of your turns. You must end each turn outside a tree.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "ranger"
    ]
  },
  {
    "id": "wall-of-stone",
    "name": "Wall of Stone",
    "nameIT": "Wall of Stone",
    "level": 5,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "120 feet",
    "rangeIT": "36 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a cube of granite",
      "mIT": "a cube of granite"
    },
    "duration": "Concentration, up to 10 minutes",
    "durationIT": "Concentrazione, fino a 10 minuti",
    "concentration": true,
    "description": "A nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is composed of ten 10-foot-by- 10-foot panels. Each panel must be contiguous with another panel. Alternatively, you can create 10-footby-20-foot panels that are only 3 inches thick. If the wall cuts through a creature’s space when it appears, the creature is pushed to one side of the wall (you choose which side). If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a Dexterity saving throw. On a success, it can use its Reaction to move up to its Speed so that it is no longer enclosed by the wall. The wall can have any shape you desire, though it can’t occupy the same space as a creature or object. The wall doesn’t need to be vertical or rest on a firm foundation. It must, however, merge with and be solidly supported by existing stone. Thus, you can use this spell to bridge a chasm or create a ramp. If you create a span greater than 20 feet in length, you must halve the size of each panel to create supports. You can crudely shape the wall to create battlements and the like. The wall is an object made of stone that can be damaged and thus breached. Each panel has AC 15 and 30 Hit Points per inch of thickness, and it has Immunity to Poison and Psychic damage. Reducing a panel to 0 Hit Points destroys it and might cause connected panels to collapse at the GM’s discretion. If you maintain your Concentration on this spell for its full duration, the wall becomes permanent and can’t be dispelled. Otherwise, the wall disappears when the spell ends.",
    "descriptionIT": "A nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is composed of ten 10-foot-by- 10-foot panels. Each panel must be contiguous with another panel. Alternatively, you can create 10-footby-20-foot panels that are only 3 inches thick. If the wall cuts through a creature’s space when it appears, the creature is pushed to one side of the wall (you choose which side). If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a Dexterity saving throw. On a success, it can use its Reaction to move up to its Speed so that it is no longer enclosed by the wall. The wall can have any shape you desire, though it can’t occupy the same space as a creature or object. The wall doesn’t need to be vertical or rest on a firm foundation. It must, however, merge with and be solidly supported by existing stone. Thus, you can use this spell to bridge a chasm or create a ramp. If you create a span greater than 6 m in length, you must halve the size of each panel to create supports. You can crudely shape the wall to create battlements and the like. The wall is an object made of stone that can be damaged and thus breached. Each panel has AC 15 and 30 Hit Points per inch of thickness, and it has Immunity to Poison and Psychic damage. Reducing a panel to 0 Hit Points destroys it and might cause connected panels to collapse at the GM’s discretion. If you maintain your Concentration on this spell for its full duration, the wall becomes permanent and can’t be dispelled. Otherwise, the wall disappears when the spell ends.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "chain-lightning",
    "name": "Chain Lightning",
    "nameIT": "Chain Lightning",
    "level": 6,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "150 feet",
    "rangeIT": "45 m",
    "components": {
      "v": true,
      "s": true,
      "m": "three silver pins",
      "mIT": "three silver pins"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You launch a lightning bolt toward a target you can see within range. Three bolts then leap from that target to as many as three other targets of your choice, each of which must be within 30 feet of the first target. A target can be a creature or an object and can be targeted by only one of the bolts. Each target makes a Dexterity saving throw, taking 10d8 Lightning damage on a failed save or half as much damage on a successful one. Using a Higher-Level Spell Slot. One additional bolt leaps from the first target to another target for each spell slot level above 6.",
    "descriptionIT": "You launch a lightning bolt toward a target you can see within range. Three bolts then leap from that target to as many as three other targets of your choice, each of which must be within 9 m of the first target. A target can be a creature or an object and can be targeted by only one of the bolts. Each target makes a Dexterity saving throw, taking 10d8 Lightning damage on a failed save or half as much damage on a successful one. Using a Higher-Level Spell Slot. One additional bolt leaps from the first target to another target for each spell slot level above 6.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "circle-of-death",
    "name": "Circle of Death",
    "nameIT": "Circle of Death",
    "level": 6,
    "school": "necromancy",
    "schoolIT": "Necromanzia",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "150 feet",
    "rangeIT": "45 m",
    "components": {
      "v": true,
      "s": true,
      "m": "the powder of a crushed black pearl worth 500+ GP",
      "mIT": "the powder of a crushed black pearl worth 500+ GP"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "Negative energy ripples out in a 60-foot-radius Sphere from a point you choose within range. Each creature in that area makes a Constitution saving throw, taking 8d8 Necrotic damage on a failed save or half as much damage on a successful one. Using a Higher-Level Spell Slot. The damage increases by 2d8 for each spell slot level above 6.",
    "descriptionIT": "Negative energy ripples out in a 60-foot-radius Sphere from a point you choose within range. Each creature in that area makes a Constitution saving throw, taking 8d8 Necrotic damage on a failed save or half as much damage on a successful one. Using a Higher-Level Spell Slot. The damage increases by 2d8 for each spell slot level above 6.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "disintegrate",
    "name": "Disintegrate",
    "nameIT": "Disintegrate",
    "level": 6,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a lodestone and dust",
      "mIT": "a lodestone and dust"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You launch a green ray at a target you can see within range. The target can be a creature, a nonmagical object, or a creation of magical force, such as the wall created by Wall of Force. A creature targeted by this spell makes a Dexterity saving throw. On a failed save, the target takes 10d6 + 40 Force damage. If this damage reduces it to 0 Hit Points, it and everything nonmagical it is wearing and carrying are disintegrated into gray dust. The target can be revived only by a True Resurrection or a Wish spell. This spell automatically disintegrates a Large or smaller nonmagical object or a creation of magical force. If such a target is Huge or larger, this spell disintegrates a 10-foot-Cube portion of it. Using a Higher-Level Spell Slot. The damage increases by 3d6 for each spell slot level above 6.",
    "descriptionIT": "You launch a green ray at a target you can see within range. The target can be a creature, a nonmagical object, or a creation of magical force, such as the wall created by Wall of Force. A creature targeted by this spell makes a Dexterity saving throw. On a failed save, the target takes 10d6 + 40 Force damage. If this damage reduces it to 0 Hit Points, it and everything nonmagical it is wearing and carrying are disintegrated into gray dust. The target can be revived only by a True Resurrection or a Wish spell. This spell automatically disintegrates a Large or smaller nonmagical object or a creation of magical force. If such a target is Huge or larger, this spell disintegrates a 10-foot-Cube portion of it. Using a Higher-Level Spell Slot. The damage increases by 3d6 for each spell slot level above 6.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "eyebite",
    "name": "Eyebite",
    "nameIT": "Eyebite",
    "level": 6,
    "school": "necromancy",
    "schoolIT": "Necromanzia",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "For the duration, your eyes become an inky void. One creature of your choice within 60 feet of you that you can see must succeed on a Wisdom saving throw or be affected by one of the following effects of your choice for the duration. On each of your turns until the spell ends, you can take a Magic action to target another creature but can’t target a creature again if it has succeeded on a save against this casting of the spell. Asleep. The target has the Unconscious condition. It wakes up if it takes any damage or if another creature takes an action to shake it awake. Panicked. The target has the Frightened condition. On each of its turns, the Frightened target must take the Dash action and move away from you by the safest and shortest route available. If the target moves to a space at least 60 feet away from you where it can’t see you, this effect ends. Sickened. The target has the Poisoned condition.",
    "descriptionIT": "For the duration, your eyes become an inky void. One creature of your choice within 18 m of you that you can see must succeed on a Wisdom saving throw or be affected by one of the following effects of your choice for the duration. On each of your turns until the spell ends, you can take a Magic action to target another creature but can’t target a creature again if it has succeeded on a save against this casting of the spell. Asleep. The target has the Unconscious condition. It wakes up if it takes any damage or if another creature takes an action to shake it awake. Panicked. The target has the Frightened condition. On each of its turns, the Frightened target must take the Dash action and move away from you by the safest and shortest route available. If the target moves to a space at least 18 m away from you where it can’t see you, this effect ends. Sickened. The target has the Poisoned condition.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "find-the-path",
    "name": "Find the Path",
    "nameIT": "Find the Path",
    "level": 6,
    "school": "divination",
    "schoolIT": "Divinazione",
    "castingTime": "1 minute",
    "castingTimeIT": "1 minuto",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "a set of divination tools—such as cards or runes—worth 100+ GP",
      "mIT": "a set of divination tools—such as cards or runes—worth 100+ GP"
    },
    "duration": "Concentration, up to 1 day",
    "durationIT": "Concentrazione, fino a 1 giorno",
    "concentration": true,
    "description": "You magically sense the most direct physical route to a location you name. You must be familiar with the location, and the spell fails if you name a destination on another plane of existence, a moving destination (such as a mobile fortress), or an unspecific destination (such as “a green dragon’s lair”). For the duration, as long as you are on the same plane of existence as the destination, you know how far it is and in what direction it lies. Whenever you",
    "descriptionIT": "You magically sense the most direct physical route to a location you name. You must be familiar with the location, and the spell fails if you name a destination on another plane of existence, a moving destination (such as a mobile fortress), or an unspecific destination (such as “a green dragon’s lair”). For the duration, as long as you are on the same plane of existence as the destination, you know how far it is and in what direction it lies. Whenever you",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "flesh-to-stone",
    "name": "Flesh to Stone",
    "nameIT": "Flesh to Stone",
    "level": 6,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a cockatrice feather",
      "mIT": "a cockatrice feather"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "You attempt to turn one creature that you can see within range into stone. The target makes a Constitution saving throw. On a failed save, it has the Restrained condition for the duration. On a successful save, its Speed is 0 until the start of your next turn. Constructs automatically succeed on the save. A Restrained target makes another Constitution saving throw at the end of each of its turns. If it successfully saves against this spell three times, the spell ends. If it fails its saves three times, it is turned to stone and has the Petrified condition for the duration. The successes and failures needn’t be consecutive; keep track of both until the target collects three of a kind. If you maintain your Concentration on this spell for the entire possible duration, the target is Petrified until the condition is ended by Greater Restoration or similar magic.",
    "descriptionIT": "You attempt to turn one creature that you can see within range into stone. The target makes a Constitution saving throw. On a failed save, it has the Restrained condition for the duration. On a successful save, its Speed is 0 until the start of your next turn. Constructs automatically succeed on the save. A Restrained target makes another Constitution saving throw at the end of each of its turns. If it successfully saves against this spell three times, the spell ends. If it fails its saves three times, it is turned to stone and has the Petrified condition for the duration. The successes and failures needn’t be consecutive; keep track of both until the target collects three of a kind. If you maintain your Concentration on this spell for the entire possible duration, the target is Petrified until the condition is ended by Greater Restoration or similar magic.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "freezing-sphere",
    "name": "Freezing Sphere",
    "nameIT": "Freezing Sphere",
    "level": 6,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "300 feet",
    "rangeIT": "90 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a miniature crystal sphere",
      "mIT": "a miniature crystal sphere"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "A frigid globe streaks from you to a point of your choice within range, where it explodes in a 60-foot-radius Sphere. Each creature in that area makes a Constitution saving throw, taking 10d6 Cold damage on failed save or half as much damage on a successful one. If the globe strikes a body of water, it freezes the water to a depth of 6 inches over an area 30 feet square. This ice lasts for 1 minute. Creatures that were swimming on the surface of frozen water are trapped in the ice and have the Restrained condition. A trapped creature can take an action to make a Strength (Athletics) check against your spell save DC to break free. You can refrain from firing the globe after completing the spell’s casting. If you do so, a globe about the size of a sling bullet, cool to the touch, appears in your hand. At any time, you or a creature you give the globe to can throw the globe (to a range of 40 feet) or hurl it with a sling (to the sling’s normal range). It shatters on impact, with the same effect as a normal casting of the spell. You can also set the globe down without shattering it. After 1 minute, if the globe hasn’t already shattered, it explodes. Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 6.",
    "descriptionIT": "A frigid globe streaks from you to a point of your choice within range, where it explodes in a 60-foot-radius Sphere. Each creature in that area makes a Constitution saving throw, taking 10d6 Cold damage on failed save or half as much damage on a successful one. If the globe strikes a body of water, it freezes the water to a depth of 6 inches over an area 9 m square. This ice lasts for 1 minute. Creatures that were swimming on the surface of frozen water are trapped in the ice and have the Restrained condition. A trapped creature can take an action to make a Strength (Athletics) check against your spell save DC to break free. You can refrain from firing the globe after completing the spell’s casting. If you do so, a globe about the size of a sling bullet, cool to the touch, appears in your hand. At any time, you or a creature you give the globe to can throw the globe (to a range of 12 m) or hurl it with a sling (to the sling’s normal range). It shatters on impact, with the same effect as a normal casting of the spell. You can also set the globe down without shattering it. After 1 minute, if the globe hasn’t already shattered, it explodes. Using a Higher-Level Spell Slot. The damage increases by 1d6 for each spell slot level above 6.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "globe-of-invulnerability",
    "name": "Globe of Invulnerability",
    "nameIT": "Globe of Invulnerability",
    "level": 6,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "a glass bead",
      "mIT": "a glass bead"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "An immobile, shimmering barrier appears in a 10- foot Emanation around you and remains for the duration. Any spell of level 5 or lower cast from outside the barrier can’t affect anything within it. Such a spell can target creatures and objects within the barrier, but the spell has no effect on them. Similarly, the area within the barrier is excluded from areas of effect created by such spells. Using a Higher-Level Spell Slot. The barrier blocks spells of 1 level higher for each spell slot level above 6.",
    "descriptionIT": "An immobile, shimmering barrier appears in a 10- foot Emanation around you and remains for the duration. Any spell of level 5 or lower cast from outside the barrier can’t affect anything within it. Such a spell can target creatures and objects within the barrier, but the spell has no effect on them. Similarly, the area within the barrier is excluded from areas of effect created by such spells. Using a Higher-Level Spell Slot. The barrier blocks spells of 1 level higher for each spell slot level above 6.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "guards-and-wards",
    "name": "Guards and Wards",
    "nameIT": "Guards and Wards",
    "level": 6,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "1 hour",
    "castingTimeIT": "1 ora",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "a silver rod worth 10+ GP",
      "mIT": "a silver rod worth 10+ GP"
    },
    "duration": "24 hours",
    "durationIT": "24 ore",
    "concentration": false,
    "description": "You create a ward that protects up to 2,500 square feet of floor space. The warded area can be up to 20 feet tall, and you shape it as one 50-foot square, one hundred 5-foot squares that are contiguous, or twenty-five 10-foot squares that are contiguous. When you cast this spell, you can specify individuals that are unaffected by the spell’s effects. You can also specify a password that, when spoken aloud within 5 feet of the warded area, makes the speaker immune to its effects. The spell creates the effects below within the warded area. Dispel Magic has no effect on Guards and Wards itself, but each of the following effects can be dispelled. If all four are dispelled, Guards and Wards ends. If you cast the spell every day for 365 days on the same area, the spell thereafter lasts until all its effects are dispelled. Corridors. Fog fills all the warded corridors, making them Heavily Obscured. In addition, at each intersection or branching passage offering a choice of direction, there is a 50 percent chance that a creature other than you believes it is going in the opposite direction from the one it chooses. Doors. All doors in the warded area are magically locked, as if sealed by the Arcane Lock spell. In addition, you can cover up to ten doors with an illusion to make them appear as plain sections of wall. Stairs. Webs fill all stairs in the warded area from top to bottom, as in the Web spell. These strands regrow in 10 minutes if they are destroyed while Guards and Wards lasts. Other Spell Effect. Place one of the following magical effects within the warded area: • Dancing Lights in four corridors, with a simple program that the lights repeat as long as Guards and Wards lasts • Magic Mouth in two locations • Stinking Cloud in two locations (the vapors return within 10 minutes if dispersed while Guards and Wards lasts) • Gust of Wind in one corridor or room (the wind blows continuously while the spell lasts) • Suggestion in one 5-foot square; any creature that enters that square receives the suggestion mentally",
    "descriptionIT": "You create a ward that protects up to 2,500 square feet of floor space. The warded area can be up to 6 m tall, and you shape it as one 50-foot square, one hundred 5-foot squares that are contiguous, or twenty-five 10-foot squares that are contiguous. When you cast this spell, you can specify individuals that are unaffected by the spell’s effects. You can also specify a password that, when spoken aloud within 1,5 m of the warded area, makes the speaker immune to its effects. The spell creates the effects below within the warded area. Dispel Magic has no effect on Guards and Wards itself, but each of the following effects can be dispelled. If all four are dispelled, Guards and Wards ends. If you cast the spell every day for 365 days on the same area, the spell thereafter lasts until all its effects are dispelled. Corridors. Fog fills all the warded corridors, making them Heavily Obscured. In addition, at each intersection or branching passage offering a choice of direction, there is a 50 percent chance that a creature other than you believes it is going in the opposite direction from the one it chooses. Doors. All doors in the warded area are magically locked, as if sealed by the Arcane Lock spell. In addition, you can cover up to ten doors with an illusion to make them appear as plain sections of wall. Stairs. Webs fill all stairs in the warded area from top to bottom, as in the Web spell. These strands regrow in 10 minutes if they are destroyed while Guards and Wards lasts. Other Spell Effect. Place one of the following magical effects within the warded area: • Dancing Lights in four corridors, with a simple program that the lights repeat as long as Guards and Wards lasts • Magic Mouth in two locations • Stinking Cloud in two locations (the vapors return within 10 minutes if dispersed while Guards and Wards lasts) • Gust of Wind in one corridor or room (the wind blows continuously while the spell lasts) • Suggestion in one 5-foot square; any creature that enters that square receives the suggestion mentally",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "heroes-feast",
    "name": "Heroes’ Feast",
    "nameIT": "Heroes’ Feast",
    "level": 6,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "10 minutes",
    "castingTimeIT": "10 minuti",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "a gem-encrusted bowl worth 1,000+ GP, which the spell consumes",
      "mIT": "a gem-encrusted bowl worth 1,000+ GP, which the spell consumes"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You conjure a feast that appears on a surface in an unoccupied 10-foot Cube next to you. The feast takes 1 hour to consume and disappears at the end of that time, and the beneficial effects don’t set in until this hour is over. Up to twelve creatures can partake of the feast. A creature that partakes gains several benefits, which last for 24 hours. The creature has Resistance to Poison damage, and it has Immunity to the Frightened and Poisoned conditions. Its Hit Point maximum also increases by 2d10, and it gains the same number of Hit Points.",
    "descriptionIT": "You conjure a feast that appears on a surface in an unoccupied 10-foot Cube next to you. The feast takes 1 hour to consume and disappears at the end of that time, and the beneficial effects don’t set in until this hour is over. Up to twelve creatures can partake of the feast. A creature that partakes gains several benefits, which last for 24 hours. The creature has Resistance to Poison damage, and it has Immunity to the Frightened and Poisoned conditions. Its Hit Point maximum also increases by 2d10, and it gains the same number of Hit Points.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "irresistible-dance",
    "name": "Irresistible Dance",
    "nameIT": "Irresistible Dance",
    "level": 6,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "One creature that you can see within range must make a Wisdom saving throw. On a successful save, the target dances comically until the end of its next turn, during which it must spend all its movement to dance in place. On a failed save, the target has the Charmed condition for the duration. While Charmed, the target dances comically, must use all its movement to dance in place, and has Disadvantage on Dexterity saving throws and attack rolls, and other creatures have Advantage on attack rolls against it. On each of its turns, the target can take an action to collect itself and repeat the save, ending the spell on itself on a success.",
    "descriptionIT": "One creature that you can see within range must make a Wisdom saving throw. On a successful save, the target dances comically until the end of its next turn, during which it must spend all its movement to dance in place. On a failed save, the target has the Charmed condition for the duration. While Charmed, the target dances comically, must use all its movement to dance in place, and has Disadvantage on Dexterity saving throws and attack rolls, and other creatures have Advantage on attack rolls against it. On each of its turns, the target can take an action to collect itself and repeat the save, ending the spell on itself on a success.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "mass-suggestion",
    "name": "Mass Suggestion",
    "nameIT": "Mass Suggestion",
    "level": 6,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a snake’s tongue",
      "mIT": "a snake’s tongue"
    },
    "duration": "24 hours",
    "durationIT": "24 ore",
    "concentration": false,
    "description": "You suggest a course of activity—described in no more than 25 words—to twelve or fewer creatures you can see within range that can hear and understand you. The suggestion must sound achievable and not involve anything that would obviously deal damage to any of the targets or their allies. For example, you could say, “Walk to the village down that road, and help the villagers there harvest crops until sunset.” Or you could say, “Now is not the time for violence. Drop your weapons, and dance! Stop in an hour.” Each target must succeed on a Wisdom saving throw or have the Charmed condition for the duration or until you or your allies deal damage to the target. Each Charmed target pursues the suggestion to the best of its ability. The suggested activity can continue for the entire duration, but if the suggested activity can be completed in a shorter time, the spell ends for a target upon completing it. Using a Higher-Level Spell Slot. The duration is longer with a spell slot of level 7 (10 days), 8 (30 days), or 9 (366 days).",
    "descriptionIT": "You suggest a course of activity—described in no more than 25 words—to twelve or fewer creatures you can see within range that can hear and understand you. The suggestion must sound achievable and not involve anything that would obviously deal damage to any of the targets or their allies. For example, you could say, “Walk to the village down that road, and help the villagers there harvest crops until sunset.” Or you could say, “Now is not the time for violence. Drop your weapons, and dance! Stop in an hour.” Each target must succeed on a Wisdom saving throw or have the Charmed condition for the duration or until you or your allies deal damage to the target. Each Charmed target pursues the suggestion to the best of its ability. The suggested activity can continue for the entire duration, but if the suggested activity can be completed in a shorter time, the spell ends for a target upon completing it. Using a Higher-Level Spell Slot. The duration is longer with a spell slot of level 7 (10 days), 8 (30 days), or 9 (366 days).",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "move-earth",
    "name": "Move Earth",
    "nameIT": "Move Earth",
    "level": 6,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "120 feet",
    "rangeIT": "36 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a miniature shovel",
      "mIT": "a miniature shovel"
    },
    "duration": "Concentration, up to 2 hours",
    "durationIT": "Concentrazione, fino a 2 ore",
    "concentration": true,
    "description": "Choose an area of terrain no larger than 40 feet on a side within range. You can reshape dirt, sand, or clay in the area in any manner you choose for the duration. You can raise or lower the area’s elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can’t exceed half the area’s largest dimension. For example, if you affect a 40-foot square, you can create a pillar up to 20 feet high, raise or lower the square’s elevation by up to 20 feet, dig a trench up to 20 feet deep, and so on. It takes 10 minutes for these changes to complete. Because the terrain’s transformation occurs slowly, creatures in the area can’t usually be trapped or injured by the ground’s movement. At the end of every 10 minutes you spend concentrating on the spell, you can choose a new area of terrain to affect within range. This spell can’t manipulate natural stone or stone construction. Rocks and structures shift to accommodate the new terrain. If the way you shape the terrain would make a structure unstable, it might collapse. Similarly, this spell doesn’t directly affect plant growth. The moved earth carries any plants along with it.",
    "descriptionIT": "Choose an area of terrain no larger than 12 m on a side within range. You can reshape dirt, sand, or clay in the area in any manner you choose for the duration. You can raise or lower the area’s elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can’t exceed half the area’s largest dimension. For example, if you affect a 40-foot square, you can create a pillar up to 6 m high, raise or lower the square’s elevation by up to 6 m, dig a trench up to 6 m deep, and so on. It takes 10 minutes for these changes to complete. Because the terrain’s transformation occurs slowly, creatures in the area can’t usually be trapped or injured by the ground’s movement. At the end of every 10 minutes you spend concentrating on the spell, you can choose a new area of terrain to affect within range. This spell can’t manipulate natural stone or stone construction. Rocks and structures shift to accommodate the new terrain. If the way you shape the terrain would make a structure unstable, it might collapse. Similarly, this spell doesn’t directly affect plant growth. The moved earth carries any plants along with it.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "programmed-illusion",
    "name": "Programmed Illusion",
    "nameIT": "Programmed Illusion",
    "level": 6,
    "school": "illusion",
    "schoolIT": "Illusione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "120 feet",
    "rangeIT": "36 m",
    "components": {
      "v": true,
      "s": true,
      "m": "jade dust worth 25+ GP",
      "mIT": "jade dust worth 25+ GP"
    },
    "duration": "Until dispelled",
    "durationIT": "Until dispelled",
    "concentration": false,
    "description": "You create an illusion of an object, a creature, or some other visible phenomenon within range that activates when a specific trigger occurs. The illusion is imperceptible until then. It must be no larger than a 30-foot Cube, and you decide when you cast the spell how the illusion behaves and what sounds it makes. This scripted performance can last up to 5 minutes. When the trigger you specify occurs, the illusion springs into existence and performs in the manner you described. Once the illusion finishes performing, it disappears and remains dormant for 10 minutes, after which the illusion can be activated again. The trigger can be as general or as detailed as you like, though it must be based on visual or audible phenomena that occur within 30 feet of the area. For example, you could create an illusion of yourself to appear and warn off others who attempt to open a trapped door. Physical interaction with the image reveals it to be illusory, since things can pass through it. A creature that takes the Study action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature.",
    "descriptionIT": "You create an illusion of an object, a creature, or some other visible phenomenon within range that activates when a specific trigger occurs. The illusion is imperceptible until then. It must be no larger than a 30-foot Cube, and you decide when you cast the spell how the illusion behaves and what sounds it makes. This scripted performance can last up to 5 minutes. When the trigger you specify occurs, the illusion springs into existence and performs in the manner you described. Once the illusion finishes performing, it disappears and remains dormant for 10 minutes, after which the illusion can be activated again. The trigger can be as general or as detailed as you like, though it must be based on visual or audible phenomena that occur within 9 m of the area. For example, you could create an illusion of yourself to appear and warn off others who attempt to open a trapped door. Physical interaction with the image reveals it to be illusory, since things can pass through it. A creature that takes the Study action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "sunbeam",
    "name": "Sunbeam",
    "nameIT": "Sunbeam",
    "level": 6,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true,
      "m": "a magnifying glass",
      "mIT": "a magnifying glass"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "You launch a sunbeam in a 5-foot-wide, 60-foot-long Line. Each creature in the Line makes a Constitution saving throw. On a failed save, a creature takes 6d8 Radiant damage and has the Blinded condition until the start of your next turn. On a successful save, it takes half as much damage only. Until the spell ends, you can take a Magic action to create a new Line of radiance. For the duration, a mote of brilliant radiance shines above you. It sheds Bright Light in a 30-foot radius and Dim Light for an additional 30 feet. This light is sunlight.",
    "descriptionIT": "You launch a sunbeam in a 5-foot-wide, 60-foot-long Line. Each creature in the Line makes a Constitution saving throw. On a failed save, a creature takes 6d8 Radiant damage and has the Blinded condition until the start of your next turn. On a successful save, it takes half as much damage only. Until the spell ends, you can take a Magic action to create a new Line of radiance. For the duration, a mote of brilliant radiance shines above you. It sheds Bright Light in a 30-foot radius and Dim Light for an additional 9 m. This light is sunlight.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "true-seeing",
    "name": "True Seeing",
    "nameIT": "True Seeing",
    "level": 6,
    "school": "divination",
    "schoolIT": "Divinazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "mushroom powder worth 25+ GP, which the spell consumes",
      "mIT": "mushroom powder worth 25+ GP, which the spell consumes"
    },
    "duration": "1 hour",
    "durationIT": "1 ora",
    "concentration": false,
    "description": "For the duration, the willing creature you touch has Truesight with a range of 120 feet.",
    "descriptionIT": "For the duration, the willing creature you touch has Truesight with a range of 36 m.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "arcane-sword",
    "name": "Arcane Sword",
    "nameIT": "Arcane Sword",
    "level": 7,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "90 feet",
    "rangeIT": "27 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a miniature sword worth 250+ GP",
      "mIT": "a miniature sword worth 250+ GP"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "You create a spectral sword that hovers within range. It lasts for the duration. When the sword appears, you make a melee spell attack against a target within 5 feet of the sword. On a hit, the target takes Force damage equal to 4d12 plus your spellcasting ability modifier. On your later turns, you can take a Bonus Action to move the sword up to 30 feet to a spot you can see and repeat the attack against the same target or a different one.",
    "descriptionIT": "You create a spectral sword that hovers within range. It lasts for the duration. When the sword appears, you make a melee spell attack against a target within 1,5 m of the sword. On a hit, the target takes Force damage equal to 4d12 plus your spellcasting ability modifier. On your later turns, you can take a Bonus Action to move the sword up to 9 m to a spot you can see and repeat the attack against the same target or a different one.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "delayed-blast-fireball",
    "name": "Delayed Blast Fireball",
    "nameIT": "Delayed Blast Fireball",
    "level": 7,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "150 feet",
    "rangeIT": "45 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a ball of bat guano and sulfur",
      "mIT": "a ball of bat guano and sulfur"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "A beam of yellow light flashes from you, then condenses at a chosen point within range as a glowing bead for the duration. When the spell ends, the bead explodes, and each creature in a 20-foot-radius Sphere centered on that point makes a Dexterity saving throw. A creature takes Fire damage equal to the total accumulated damage on a failed save or half as much damage on a successful one. The spell’s base damage is 12d6, and the damage increases by 1d6 whenever your turn ends and the spell hasn’t ended. If a creature touches the glowing bead before the spell ends, that creature makes a Dexterity saving throw. On a failed save, the spell ends, causing the bead to explode. On a successful save, the creature can throw the bead up to 40 feet. If the thrown bead enters a creature’s space or collides with a solid object, the spell ends, and the bead explodes. When the bead explodes, flammable objects in the explosion that aren’t being worn or carried start burning. Using a Higher-Level Spell Slot. The base damage increases by 1d6 for each spell slot level above 7.",
    "descriptionIT": "A beam of yellow light flashes from you, then condenses at a chosen point within range as a glowing bead for the duration. When the spell ends, the bead explodes, and each creature in a 20-foot-radius Sphere centered on that point makes a Dexterity saving throw. A creature takes Fire damage equal to the total accumulated damage on a failed save or half as much damage on a successful one. The spell’s base damage is 12d6, and the damage increases by 1d6 whenever your turn ends and the spell hasn’t ended. If a creature touches the glowing bead before the spell ends, that creature makes a Dexterity saving throw. On a failed save, the spell ends, causing the bead to explode. On a successful save, the creature can throw the bead up to 12 m. If the thrown bead enters a creature’s space or collides with a solid object, the spell ends, and the bead explodes. When the bead explodes, flammable objects in the explosion that aren’t being worn or carried start burning. Using a Higher-Level Spell Slot. The base damage increases by 1d6 for each spell slot level above 7.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "etherealness",
    "name": "Etherealness",
    "nameIT": "Etherealness",
    "level": 7,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Up to 8 hours",
    "durationIT": "Up to 8 ore",
    "concentration": false,
    "description": "You step into the border regions of the Ethereal Plane, where it overlaps with your current plane. You remain in the Border Ethereal for the duration. During this time, you can move in any direction. If you move up or down, every foot of movement costs an extra foot. You can perceive the plane you left, which looks gray, and you can’t see anything there more than 60 feet away. While on the Ethereal Plane, you can affect and be affected only by creatures, objects, and effects on that plane. Creatures that aren’t on the Ethereal Plane can’t perceive or interact with you unless a feature gives them the ability to do so. When the spell ends, you return to the plane you left in the spot that corresponds to your space in the Border Ethereal. If you appear in an occupied space, you are shunted to the nearest unoccupied space and take Force damage equal to twice the number of feet you are moved. This spell ends instantly if you cast it while you are on the Ethereal Plane or a plane that doesn’t border it, such as one of the Outer Planes. Using a Higher-Level Spell Slot. You can target up to three willing creatures (including yourself) for each spell slot level above 7. The creatures must be within 10 feet of you when you cast the spell.",
    "descriptionIT": "You step into the border regions of the Ethereal Plane, where it overlaps with your current plane. You remain in the Border Ethereal for the duration. During this time, you can move in any direction. If you move up or down, every foot of movement costs an extra foot. You can perceive the plane you left, which looks gray, and you can’t see anything there more than 18 m away. While on the Ethereal Plane, you can affect and be affected only by creatures, objects, and effects on that plane. Creatures that aren’t on the Ethereal Plane can’t perceive or interact with you unless a feature gives them the ability to do so. When the spell ends, you return to the plane you left in the spot that corresponds to your space in the Border Ethereal. If you appear in an occupied space, you are shunted to the nearest unoccupied space and take Force damage equal to twice the number of feet you are moved. This spell ends instantly if you cast it while you are on the Ethereal Plane or a plane that doesn’t border it, such as one of the Outer Planes. Using a Higher-Level Spell Slot. You can target up to three willing creatures (including yourself) for each spell slot level above 7. The creatures must be within 3 m of you when you cast the spell.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "finger-of-death",
    "name": "Finger of Death",
    "nameIT": "Finger of Death",
    "level": 7,
    "school": "necromancy",
    "schoolIT": "Necromanzia",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You unleash negative energy toward a creature you can see within range. The target makes a Constitution saving throw, taking 7d8 + 30 Necrotic damage on a failed save or half as much damage on a successful one. A Humanoid killed by this spell rises at the start of your next turn as a Zombie (see “Monsters”) that follows your verbal orders.",
    "descriptionIT": "You unleash negative energy toward a creature you can see within range. The target makes a Constitution saving throw, taking 7d8 + 30 Necrotic damage on a failed save or half as much damage on a successful one. A Humanoid killed by this spell rises at the start of your next turn as a Zombie (see “Monsters”) that follows your verbal orders.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "fire-storm",
    "name": "Fire Storm",
    "nameIT": "Fire Storm",
    "level": 7,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "150 feet",
    "rangeIT": "45 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "A storm of fire appears within range. The area of the storm consists of up to ten 10-foot Cubes, which you arrange as you like. Each Cube must be contiguous with at least one other Cube. Each creature in the area makes a Dexterity saving throw, taking 7d10 Fire damage on a failed save or half as much damage on a successful one. Flammable objects in the area that aren’t being worn or carried start burning.",
    "descriptionIT": "A storm of fire appears within range. The area of the storm consists of up to ten 10-foot Cubes, which you arrange as you like. Each Cube must be contiguous with at least one other Cube. Each creature in the area makes a Dexterity saving throw, taking 7d10 Fire damage on a failed save or half as much damage on a successful one. Flammable objects in the area that aren’t being worn or carried start burning.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "forcecage",
    "name": "Forcecage",
    "nameIT": "Forcecage",
    "level": 7,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "100 feet",
    "rangeIT": "30 m",
    "components": {
      "v": true,
      "s": true,
      "m": "ruby dust worth 1,500+ GP, which the spell consumes",
      "mIT": "ruby dust worth 1,500+ GP, which the spell consumes"
    },
    "duration": "Concentration, up to 1 hour",
    "durationIT": "Concentrazione, fino a 1 ora",
    "concentration": true,
    "description": "An immobile, Invisible, Cube-shaped prison composed of magical force springs into existence around an area you choose within range. The prison can be a cage or a solid box, as you choose. A prison in the shape of a cage can be up to 20 feet on a side and is made from 1/2-inch diameter bars spaced 1/2 inch apart. A prison in the shape of a box can be up to 10 feet on a side, creating a solid barrier that prevents any matter from passing through it and blocking any spells cast into or out from the area. When you cast the spell, any creature that is completely inside the cage’s area is trapped. Creatures only partially within the area, or those too large to fit inside it, are pushed away from the center of the area until they are completely outside it. A creature inside the cage can’t leave it by nonmagical means. If the creature tries to use teleportation or interplanar travel to leave, it must first make a Charisma saving throw. On a successful save, the creature can use that magic to exit the cage. On a failed save, the creature doesn’t exit the cage and wastes the spell or effect. The cage also extends into the Ethereal Plane, blocking ethereal travel. This spell can’t be dispelled by Dispel Magic.",
    "descriptionIT": "An immobile, Invisible, Cube-shaped prison composed of magical force springs into existence around an area you choose within range. The prison can be a cage or a solid box, as you choose. A prison in the shape of a cage can be up to 6 m on a side and is made from 1/2-inch diameter bars spaced 1/2 inch apart. A prison in the shape of a box can be up to 3 m on a side, creating a solid barrier that prevents any matter from passing through it and blocking any spells cast into or out from the area. When you cast the spell, any creature that is completely inside the cage’s area is trapped. Creatures only partially within the area, or those too large to fit inside it, are pushed away from the center of the area until they are completely outside it. A creature inside the cage can’t leave it by nonmagical means. If the creature tries to use teleportation or interplanar travel to leave, it must first make a Charisma saving throw. On a successful save, the creature can use that magic to exit the cage. On a failed save, the creature doesn’t exit the cage and wastes the spell or effect. The cage also extends into the Ethereal Plane, blocking ethereal travel. This spell can’t be dispelled by Dispel Magic.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "magnificent-mansion",
    "name": "Magnificent Mansion",
    "nameIT": "Magnificent Mansion",
    "level": 7,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "1 minute",
    "castingTimeIT": "1 minuto",
    "range": "300 feet",
    "rangeIT": "90 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a miniature door worth 15+ GP",
      "mIT": "a miniature door worth 15+ GP"
    },
    "duration": "24 hours",
    "durationIT": "24 ore",
    "concentration": false,
    "description": "You conjure a shimmering door in range that lasts for the duration. The door leads to an extradimensional dwelling and is 5 feet wide and 10 feet tall. You and any creature you designate when you cast the spell can enter the extradimensional dwelling as long as the door remains open. You can open or close it (no action required) if you are within 30 feet of it. While closed, the door is imperceptible. Beyond the door is a magnificent foyer with numerous chambers beyond. The dwelling’s atmosphere is clean, fresh, and warm. You can create any floor plan you like for the dwelling, but it can’t exceed 50 contiguous 10-foot Cubes. The place is furnished and decorated as you choose. It contains sufficient food to serve a ninecourse banquet for up to 100 people. Furnishings and other objects created by this spell dissipate into smoke if removed from it. A staff of 100 near-transparent servants attends all who enter. You determine the appearance of these servants and their attire. They are invulnerable and obey your commands. Each servant can perform tasks that a human could perform, but they can’t attack or take any action that would directly harm another creature. Thus the servants can fetch things, clean, mend, fold clothes, light fires, serve food, pour wine, and so on. The servants can’t leave the dwelling. When the spell ends, any creatures or objects left inside the extradimensional space are expelled into the unoccupied spaces nearest to the entrance.",
    "descriptionIT": "You conjure a shimmering door in range that lasts for the duration. The door leads to an extradimensional dwelling and is 1,5 m wide and 3 m tall. You and any creature you designate when you cast the spell can enter the extradimensional dwelling as long as the door remains open. You can open or close it (no action required) if you are within 9 m of it. While closed, the door is imperceptible. Beyond the door is a magnificent foyer with numerous chambers beyond. The dwelling’s atmosphere is clean, fresh, and warm. You can create any floor plan you like for the dwelling, but it can’t exceed 50 contiguous 10-foot Cubes. The place is furnished and decorated as you choose. It contains sufficient food to serve a ninecourse banquet for up to 100 people. Furnishings and other objects created by this spell dissipate into smoke if removed from it. A staff of 100 near-transparent servants attends all who enter. You determine the appearance of these servants and their attire. They are invulnerable and obey your commands. Each servant can perform tasks that a human could perform, but they can’t attack or take any action that would directly harm another creature. Thus the servants can fetch things, clean, mend, fold clothes, light fires, serve food, pour wine, and so on. The servants can’t leave the dwelling. When the spell ends, any creatures or objects left inside the extradimensional space are expelled into the unoccupied spaces nearest to the entrance.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "mirage-arcane",
    "name": "Mirage Arcane",
    "nameIT": "Mirage Arcane",
    "level": 7,
    "school": "illusion",
    "schoolIT": "Illusione",
    "castingTime": "10 minutes",
    "castingTimeIT": "10 minuti",
    "range": "Sight",
    "rangeIT": "Sight",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "10 days",
    "durationIT": "10 giorni",
    "concentration": false,
    "description": "You make terrain in an area up to 1 mile square look, sound, smell, and even feel like some other sort of terrain. Open fields or a road could be made to resemble a swamp, hill, crevasse, or some other rough or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road. Similarly, you can alter the appearance of structures or add them where none are present. The spell doesn’t disguise, conceal, or add creatures. The illusion includes audible, visual, tactile, and olfactory elements, so it can turn clear ground into Difficult Terrain (or vice versa) or otherwise impede movement through the area. Any piece of the illusory terrain (such as a rock or stick) that is removed from the spell’s area disappears immediately. Creatures with Truesight can see through the illusion to the terrain’s true form; however, all other elements of the illusion remain, so while the creature is aware of the illusion’s presence, the creature can still physically interact with the illusion.",
    "descriptionIT": "You make terrain in an area up to 1,6 km square look, sound, smell, and even feel like some other sort of terrain. Open fields or a road could be made to resemble a swamp, hill, crevasse, or some other rough or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road. Similarly, you can alter the appearance of structures or add them where none are present. The spell doesn’t disguise, conceal, or add creatures. The illusion includes audible, visual, tactile, and olfactory elements, so it can turn clear ground into Difficult Terrain (or vice versa) or otherwise impede movement through the area. Any piece of the illusory terrain (such as a rock or stick) that is removed from the spell’s area disappears immediately. Creatures with Truesight can see through the illusion to the terrain’s true form; however, all other elements of the illusion remain, so while the creature is aware of the illusion’s presence, the creature can still physically interact with the illusion.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "plane-shift",
    "name": "Plane Shift",
    "nameIT": "Plane Shift",
    "level": 7,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "a forked, metal rod worth 250+ GP and attuned to a plane of existence",
      "mIT": "a forked, metal rod worth 250+ GP and attuned to a plane of existence"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You and up to eight willing creatures who link hands in a circle are transported to a different plane of existence. You can specify a target destination in general terms, such as a specific city on the Elemental Plane of Fire or palace on the second level of the Nine Hells, and you appear in or near that destination, as determined by the GM. Alternatively, if you know the sigil sequence of a teleportation circle on another plane of existence, this spell can take you to that circle. If the teleportation circle is too small to hold all the creatures you transported, they appear in the closest unoccupied spaces next to the circle.",
    "descriptionIT": "You and up to eight willing creatures who link hands in a circle are transported to a different plane of existence. You can specify a target destination in general terms, such as a specific city on the Elemental Plane of Fire or palace on the second level of the Nine Hells, and you appear in or near that destination, as determined by the GM. Alternatively, if you know the sigil sequence of a teleportation circle on another plane of existence, this spell can take you to that circle. If the teleportation circle is too small to hold all the creatures you transported, they appear in the closest unoccupied spaces next to the circle.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "prismatic-spray",
    "name": "Prismatic Spray",
    "nameIT": "Prismatic Spray",
    "level": 7,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "Eight rays of light flash from you in a 60-foot Cone. Each creature in the Cone makes a Dexterity saving throw. For each target, roll 1d8 to determine which color ray affects it, consulting the Prismatic Rays table. Prismatic Rays 1d8 Ray Red. Failed Save: 12d6 Fire damage. Successful Save: Half as much damage. Orange. Failed Save: 12d6 Acid damage. Successful Save: Half as much damage. Yellow. Failed Save: 12d6 Lightning damage. Successful Save: Half as much damage. Green. Failed Save: 12d6 Poison damage. Successful Save: Half as much damage. 1d8 Ray Blue. Failed Save: 12d6 Cold damage. Successful Save: Half as much damage. Indigo. Failed Save: The target has the Restrained condition and makes a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the condition ends. If it fails three times, it has the Petrified condition until it is freed by an effect like the Greater Restoration spell. The successes and failures needn’t be consecutive; keep track of both until the target collects three of a kind. Violet. Failed Save: The target has the Blinded condition and makes a Wisdom saving throw at the start of your next turn. On a successful save, the condition ends. On a failed save, the condition ends, and the creature teleports to another plane of existence (GM’s choice). Special. The target is struck by two rays. Roll twice, rerolling any 8.",
    "descriptionIT": "Eight rays of light flash from you in a 60-foot Cone. Each creature in the Cone makes a Dexterity saving throw. For each target, roll 1d8 to determine which color ray affects it, consulting the Prismatic Rays table. Prismatic Rays 1d8 Ray Red. Failed Save: 12d6 Fire damage. Successful Save: Half as much damage. Orange. Failed Save: 12d6 Acid damage. Successful Save: Half as much damage. Yellow. Failed Save: 12d6 Lightning damage. Successful Save: Half as much damage. Green. Failed Save: 12d6 Poison damage. Successful Save: Half as much damage. 1d8 Ray Blue. Failed Save: 12d6 Cold damage. Successful Save: Half as much damage. Indigo. Failed Save: The target has the Restrained condition and makes a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the condition ends. If it fails three times, it has the Petrified condition until it is freed by an effect like the Greater Restoration spell. The successes and failures needn’t be consecutive; keep track of both until the target collects three of a kind. Violet. Failed Save: The target has the Blinded condition and makes a Wisdom saving throw at the start of your next turn. On a successful save, the condition ends. On a failed save, the condition ends, and the creature teleports to another plane of existence (GM’s choice). Special. The target is struck by two rays. Roll twice, rerolling any 8.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "project-image",
    "name": "Project Image",
    "nameIT": "Project Image",
    "level": 7,
    "school": "illusion",
    "schoolIT": "Illusione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "500 miles",
    "rangeIT": "800 km",
    "components": {
      "v": true,
      "s": true,
      "m": "a statuette of yourself worth 5+ GP",
      "mIT": "a statuette of yourself worth 5+ GP"
    },
    "duration": "Concentration, up to 1 day",
    "durationIT": "Concentrazione, fino a 1 giorno",
    "concentration": true,
    "description": "You create an illusory copy of yourself that lasts for the duration. The copy can appear at any location within range that you have seen before, regardless of intervening obstacles. The illusion looks and sounds like you, but it is intangible. If the illusion takes any damage, it disappears, and the spell ends. You can see through the illusion’s eyes and hear through its ears as if you were in its space. As a Magic action, you can move it up to 60 feet and make it gesture, speak, and behave in whatever way you choose. It mimics your mannerisms perfectly. Physical interaction with the image reveals it to be illusory, since things can pass through it. A creature that takes the Study action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature.",
    "descriptionIT": "You create an illusory copy of yourself that lasts for the duration. The copy can appear at any location within range that you have seen before, regardless of intervening obstacles. The illusion looks and sounds like you, but it is intangible. If the illusion takes any damage, it disappears, and the spell ends. You can see through the illusion’s eyes and hear through its ears as if you were in its space. As a Magic action, you can move it up to 18 m and make it gesture, speak, and behave in whatever way you choose. It mimics your mannerisms perfectly. Physical interaction with the image reveals it to be illusory, since things can pass through it. A creature that takes the Study action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "regenerate",
    "name": "Regenerate",
    "nameIT": "Regenerate",
    "level": 7,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "1 minute",
    "castingTimeIT": "1 minuto",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "a prayer wheel",
      "mIT": "a prayer wheel"
    },
    "duration": "1 hour",
    "durationIT": "1 ora",
    "concentration": false,
    "description": "A creature you touch regains 4d8 + 15 Hit Points. For the duration, the target regains 1 Hit Point at the start of each of its turns, and any severed body parts regrow after 2 minutes.",
    "descriptionIT": "A creature you touch regains 4d8 + 15 Hit Points. For the duration, the target regains 1 Hit Point at the start of each of its turns, and any severed body parts regrow after 2 minutes.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "resurrection",
    "name": "Resurrection",
    "nameIT": "Resurrection",
    "level": 7,
    "school": "necromancy",
    "schoolIT": "Necromanzia",
    "castingTime": "1 hour",
    "castingTimeIT": "1 ora",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "a diamond worth 1,000+ GP, which the spell consumes",
      "mIT": "a diamond worth 1,000+ GP, which the spell consumes"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "With a touch, you revive a dead creature that has been dead for no more than a century, didn’t die of old age, and wasn’t Undead when it died. The creature returns to life with all its Hit Points. This spell also neutralizes any poisons that affected the creature at the time of death. This spell closes all mortal wounds and restores any missing body parts. Coming back from the dead is an ordeal. The target takes a −4 penalty to D20 Tests. Every time the target finishes a Long Rest, the penalty is reduced by 1 until it becomes 0. Casting this spell to revive a creature that has been dead for 365 days or longer taxes you. Until you finish a Long Rest, you can’t cast spells again, and you have Disadvantage on D20 Tests.",
    "descriptionIT": "With a touch, you revive a dead creature that has been dead for no more than a century, didn’t die of old age, and wasn’t Undead when it died. The creature returns to life with all its Hit Points. This spell also neutralizes any poisons that affected the creature at the time of death. This spell closes all mortal wounds and restores any missing body parts. Coming back from the dead is an ordeal. The target takes a −4 penalty to D20 Tests. Every time the target finishes a Long Rest, the penalty is reduced by 1 until it becomes 0. Casting this spell to revive a creature that has been dead for 365 days or longer taxes you. Until you finish a Long Rest, you can’t cast spells again, and you have Disadvantage on D20 Tests.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "reverse-gravity",
    "name": "Reverse Gravity",
    "nameIT": "Reverse Gravity",
    "level": 7,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "100 feet",
    "rangeIT": "30 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a lodestone and iron filings",
      "mIT": "a lodestone and iron filings"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "This spell reverses gravity in a 50-foot-radius, 100- foot high Cylinder centered on a point within range. All creatures and objects in that area that aren’t anchored to the ground fall upward and reach the top of the Cylinder. A creature can make a Dexterity saving throw to grab a fixed object it can reach, thus avoiding the fall upward. If a ceiling or an anchored object is encountered in this upward fall, creatures and objects strike it just as they would during a downward fall. If an affected creature or object reaches the Cylinder’s top without striking anything, it hovers there for the duration. When the spell ends, affected objects and creatures fall downward.",
    "descriptionIT": "This spell reverses gravity in a 50-foot-radius, 100- foot high Cylinder centered on a point within range. All creatures and objects in that area that aren’t anchored to the ground fall upward and reach the top of the Cylinder. A creature can make a Dexterity saving throw to grab a fixed object it can reach, thus avoiding the fall upward. If a ceiling or an anchored object is encountered in this upward fall, creatures and objects strike it just as they would during a downward fall. If an affected creature or object reaches the Cylinder’s top without striking anything, it hovers there for the duration. When the spell ends, affected objects and creatures fall downward.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "symbol",
    "name": "Symbol",
    "nameIT": "Symbol",
    "level": 7,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "1 minute",
    "castingTimeIT": "1 minuto",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "powdered diamond worth 1,000+ GP, which the spell consumes",
      "mIT": "powdered diamond worth 1,000+ GP, which the spell consumes"
    },
    "duration": "Until dispelled or triggered",
    "durationIT": "Until dispelled or triggered",
    "concentration": false,
    "description": "You inscribe a harmful glyph either on a surface (such as a section of floor or wall) or within an object that can be closed (such as a book or chest). The glyph can cover an area no larger than 10 feet in diameter. If you choose an object, it must remain in place; if it is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered. The glyph is nearly imperceptible and requires a successful Wisdom (Perception) check against your spell save DC to notice. When you inscribe the glyph, you set its trigger and choose which effect the symbol bears: Death, Discord, Fear, Pain, Sleep, or Stunning. Each one is explained below. Set the Trigger. You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, common triggers include touching or stepping on the glyph, removing another object covering it, or approaching within a certain distance of it. For glyphs inscribed within an object, common triggers include opening that object or seeing the glyph. You can refine the trigger so that only creatures of certain types activate it (for example, the glyph could be set to affect Aberrations). You can also set conditions for creatures that don’t trigger the glyph, such as those who say a certain password. Once triggered, the glyph glows, filling a 60-foot-radius Sphere with Dim Light for 10 minutes, after which time the spell ends. Each creature in the Sphere when the glyph activates is targeted by its effect, as is a creature that enters the Sphere for the first time on a turn or ends its turn there. A creature is targeted only once per turn. Death. Each target makes a Constitution saving throw, taking 10d10 Necrotic damage on a failed save or half as much damage on a successful save. Discord. Each target makes a Wisdom saving throw. On a failed save, a target argues with other creatures for 1 minute. During this time, it is incapable of meaningful communication and has Disadvantage on attack rolls and ability checks. Fear. Each target must succeed on a Wisdom saving throw or have the Frightened condition for 1 minute. While Frightened, the target must move at least 30 feet away from the glyph on each of its turns, if able. Pain. Each target must succeed on a Constitution saving throw or have the Incapacitated condition for 1 minute. Sleep. Each target must succeed on a Wisdom saving throw or have the Unconscious condition for 10 minutes. A creature awakens if it takes damage or if someone takes an action to shake it awake. Stunning. Each target must succeed on a Wisdom saving throw or have the Stunned condition for 1 minute.",
    "descriptionIT": "You inscribe a harmful glyph either on a surface (such as a section of floor or wall) or within an object that can be closed (such as a book or chest). The glyph can cover an area no larger than 3 m in diameter. If you choose an object, it must remain in place; if it is moved more than 3 m from where you cast this spell, the glyph is broken, and the spell ends without being triggered. The glyph is nearly imperceptible and requires a successful Wisdom (Perception) check against your spell save DC to notice. When you inscribe the glyph, you set its trigger and choose which effect the symbol bears: Death, Discord, Fear, Pain, Sleep, or Stunning. Each one is explained below. Set the Trigger. You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, common triggers include touching or stepping on the glyph, removing another object covering it, or approaching within a certain distance of it. For glyphs inscribed within an object, common triggers include opening that object or seeing the glyph. You can refine the trigger so that only creatures of certain types activate it (for example, the glyph could be set to affect Aberrations). You can also set conditions for creatures that don’t trigger the glyph, such as those who say a certain password. Once triggered, the glyph glows, filling a 60-foot-radius Sphere with Dim Light for 10 minutes, after which time the spell ends. Each creature in the Sphere when the glyph activates is targeted by its effect, as is a creature that enters the Sphere for the first time on a turn or ends its turn there. A creature is targeted only once per turn. Death. Each target makes a Constitution saving throw, taking 10d10 Necrotic damage on a failed save or half as much damage on a successful save. Discord. Each target makes a Wisdom saving throw. On a failed save, a target argues with other creatures for 1 minute. During this time, it is incapable of meaningful communication and has Disadvantage on attack rolls and ability checks. Fear. Each target must succeed on a Wisdom saving throw or have the Frightened condition for 1 minute. While Frightened, the target must move at least 9 m away from the glyph on each of its turns, if able. Pain. Each target must succeed on a Constitution saving throw or have the Incapacitated condition for 1 minute. Sleep. Each target must succeed on a Wisdom saving throw or have the Unconscious condition for 10 minutes. A creature awakens if it takes damage or if someone takes an action to shake it awake. Stunning. Each target must succeed on a Wisdom saving throw or have the Stunned condition for 1 minute.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "teleport",
    "name": "Teleport",
    "nameIT": "Teleport",
    "level": 7,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "10 feet",
    "rangeIT": "3 m",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "This spell instantly transports you and up to eight willing creatures that you can see within range, or a single object that you can see within range, to a destination you select. If you target an object, it must be Large or smaller, and it can’t be held or carried by an unwilling creature. The destination you choose must be known to you, and it must be on the same plane of existence as you. Your familiarity with the destination determines whether you arrive there successfully. The GM rolls 1d100 and consults the Teleportation Outcome table and the explanations after it. Teleportation Outcome Familiarity Mishap Similar Area Off Target On Target Permanent circle — — — 01–00 Linked object — — — 01–00 Very familiar 01–05 06–13 14–24 25–00 Seen casually 01–33 34–43 44–53 54–00 Viewed once or described 01–43 44–53 54–73 74–00 False destination 01–50 51–00 — — Familiarity. Here are the meanings of the terms in the table’s Familiarity column: • “Permanent circle” means a permanent teleportation circle whose sigil sequence you know. • “Linked object” means you possess an object taken from the desired destination within the last six months, such as a book from a wizard’s library. • “Very familiar” is a place you have visited often, a place you have carefully studied, or a place you can see when you cast the spell. • “Seen casually” is a place you have seen more than once but with which you aren’t very familiar. • “Viewed once or described” is a place you have seen once, possibly using magic, or a place you know through someone else’s description, perhaps from a map. • “False destination” is a place that doesn’t exist. Perhaps you tried to scry an enemy’s sanctum but instead viewed an illusion, or you are attempting to teleport to a location that no longer exists. Mishap. The spell’s unpredictable magic results in a difficult journey. Each teleporting creature (or the target object) takes 3d10 Force damage, and the GM rerolls on the table to see where you wind up (multiple mishaps can occur, dealing damage each time). Similar Area. You and your group (or the target object) appear in a different area that’s visually or thematically similar to the target area. You appear in the closest similar place. If you are heading for your home laboratory, for example, you might appear in another person’s laboratory in the same city. Off Target. You and your group (or the target object) appear 2d12 miles away from the destination in a random direction. Roll 1d8 for the direction: 1, east; 2, southeast; 3, south; 4, southwest; 5, west; 6, northwest; 7, north; or 8, northeast. On Target. You and your group (or the target object) appear where you intended.",
    "descriptionIT": "This spell instantly transports you and up to eight willing creatures that you can see within range, or a single object that you can see within range, to a destination you select. If you target an object, it must be Large or smaller, and it can’t be held or carried by an unwilling creature. The destination you choose must be known to you, and it must be on the same plane of existence as you. Your familiarity with the destination determines whether you arrive there successfully. The GM rolls 1d100 and consults the Teleportation Outcome table and the explanations after it. Teleportation Outcome Familiarity Mishap Similar Area Off Target On Target Permanent circle — — — 01–00 Linked object — — — 01–00 Very familiar 01–05 06–13 14–24 25–00 Seen casually 01–33 34–43 44–53 54–00 Viewed once or described 01–43 44–53 54–73 74–00 False destination 01–50 51–00 — — Familiarity. Here are the meanings of the terms in the table’s Familiarity column: • “Permanent circle” means a permanent teleportation circle whose sigil sequence you know. • “Linked object” means you possess an object taken from the desired destination within the last six months, such as a book from a wizard’s library. • “Very familiar” is a place you have visited often, a place you have carefully studied, or a place you can see when you cast the spell. • “Seen casually” is a place you have seen more than once but with which you aren’t very familiar. • “Viewed once or described” is a place you have seen once, possibly using magic, or a place you know through someone else’s description, perhaps from a map. • “False destination” is a place that doesn’t exist. Perhaps you tried to scry an enemy’s sanctum but instead viewed an illusion, or you are attempting to teleport to a location that no longer exists. Mishap. The spell’s unpredictable magic results in a difficult journey. Each teleporting creature (or the target object) takes 3d10 Force damage, and the GM rerolls on the table to see where you wind up (multiple mishaps can occur, dealing damage each time). Similar Area. You and your group (or the target object) appear in a different area that’s visually or thematically similar to the target area. You appear in the closest similar place. If you are heading for your home laboratory, for example, you might appear in another person’s laboratory in the same city. Off Target. You and your group (or the target object) appear 2d19,2 km away from the destination in a random direction. Roll 1d8 for the direction: 1, east; 2, southeast; 3, south; 4, southwest; 5, west; 6, northwest; 7, north; or 8, northeast. On Target. You and your group (or the target object) appear where you intended.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "antipathy-sympathy",
    "name": "Antipathy/Sympathy",
    "nameIT": "Antipathy/Sympathy",
    "level": 8,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "1 hour",
    "castingTimeIT": "1 ora",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a mix of vinegar and honey",
      "mIT": "a mix of vinegar and honey"
    },
    "duration": "10 days",
    "durationIT": "10 giorni",
    "concentration": false,
    "description": "As you cast the spell, choose whether it creates antipathy or sympathy, and target one creature or object that is Huge or smaller. Then specify a kind of creature, such as red dragons, goblins, or vampires. A creature of the chosen kind makes a Wisdom saving throw when it comes within 120 feet of the target. Your choice of antipathy or sympathy determines what happens to a creature when it fails that save: Antipathy. The creature has the Frightened condition. The Frightened creature must use its movement on its turns to get as far away as possible from the target, moving by the safest route. Sympathy. The creature has the Charmed condition. The Charmed creature must use its movement on its turns to get as close as possible to the target, moving by the safest route. If the creature is within 5 feet of the target, the creature can’t willingly move away. If the target damages the Charmed creature, that creature can make a Animated Object Huge or Smaller Construct, Unaligned AC 15 HP 10 (Medium or smaller), 20 (Large), 40 (Huge) Speed 30 ft. MOD SAVE MOD SAVE MOD SAVE Str 16 +3 +3 Dex 10 +0 +0 Con 10 +0 +0 Int 3 −4 −4 Wis 3 −4 −4 Cha 1 −5 −5 Immunities Poison, Psychic; Charmed, Exhaustion, Frightened, Paralyzed, Poisoned Senses Blindsight 30 ft.; Passive Perception 6 Languages Understands the languages you know CR None (XP 0; PB equals your Proficiency Bonus) Actions Slam. Melee Attack Roll: Bonus equals your spell attack modifier, reach 5 ft. Hit: Force damage equal to 1d4 + 3 (Medium or smaller), 2d6 + 3 + your spellcasting ability modifier (Large), or 2d12 + 3 + your spellcasting ability modifier (Huge).",
    "descriptionIT": "As you cast the spell, choose whether it creates antipathy or sympathy, and target one creature or object that is Huge or smaller. Then specify a kind of creature, such as red dragons, goblins, or vampires. A creature of the chosen kind makes a Wisdom saving throw when it comes within 36 m of the target. Your choice of antipathy or sympathy determines what happens to a creature when it fails that save: Antipathy. The creature has the Frightened condition. The Frightened creature must use its movement on its turns to get as far away as possible from the target, moving by the safest route. Sympathy. The creature has the Charmed condition. The Charmed creature must use its movement on its turns to get as close as possible to the target, moving by the safest route. If the creature is within 1,5 m of the target, the creature can’t willingly move away. If the target damages the Charmed creature, that creature can make a Animated Object Huge or Smaller Construct, Unaligned AC 15 HP 10 (Medium or smaller), 20 (Large), 40 (Huge) Speed 30 ft. MOD SAVE MOD SAVE MOD SAVE Str 16 +3 +3 Dex 10 +0 +0 Con 10 +0 +0 Int 3 −4 −4 Wis 3 −4 −4 Cha 1 −5 −5 Immunities Poison, Psychic; Charmed, Exhaustion, Frightened, Paralyzed, Poisoned Senses Blindsight 30 ft.; Passive Perception 6 Languages Understands the languages you know CR None (XP 0; PB equals your Proficiency Bonus) Actions Slam. Melee Attack Roll: Bonus equals your spell attack modifier, reach 5 ft. Hit: Force damage equal to 1d4 + 3 (Medium or smaller), 2d6 + 3 + your spellcasting ability modifier (Large), or 2d12 + 3 + your spellcasting ability modifier (Huge).",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "befuddlement",
    "name": "Befuddlement",
    "nameIT": "Befuddlement",
    "level": 8,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "150 feet",
    "rangeIT": "45 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a key ring with no keys",
      "mIT": "a key ring with no keys"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You blast the mind of a creature that you can see within range. The target makes an Intelligence saving throw. On a failed save, the target takes 10d12 Psychic damage and can’t cast spells or take the Magic action. At the end of every 30 days, the target repeats the save, ending the effect on a success. The effect can also be ended by the Greater Restoration, Heal, or Wish spell. On a successful save, the target takes half as much damage only.",
    "descriptionIT": "You blast the mind of a creature that you can see within range. The target makes an Intelligence saving throw. On a failed save, the target takes 10d12 Psychic damage and can’t cast spells or take the Magic action. At the end of every 30 days, the target repeats the save, ending the effect on a success. The effect can also be ended by the Greater Restoration, Heal, or Wish spell. On a successful save, the target takes half as much damage only.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "demiplane",
    "name": "Demiplane",
    "nameIT": "Demiplane",
    "level": 8,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": false,
      "s": true
    },
    "duration": "1 hour",
    "durationIT": "1 ora",
    "concentration": false,
    "description": "You create a shadowy Medium door on a flat solid surface that you can see within range. This door can be opened and closed, and it leads to a demiplane that is an empty room 30 feet in each dimension, made of wood or stone (your choice). When the spell ends, the door vanishes, and any objects inside the demiplane remain there. Any creatures inside also remain unless they opt to be shunted through the door as it vanishes, landing with the Prone condition in the unoccupied spaces closest to the door’s former space. Each time you cast this spell, you can create a new demiplane or connect the shadowy door to a demiplane you created with a previous casting of this spell. Additionally, if you know the nature and contents of a demiplane created by a casting of this spell by another creature, you can connect the shadowy door to that demiplane instead.",
    "descriptionIT": "You create a shadowy Medium door on a flat solid surface that you can see within range. This door can be opened and closed, and it leads to a demiplane that is an empty room 9 m in each dimension, made of wood or stone (your choice). When the spell ends, the door vanishes, and any objects inside the demiplane remain there. Any creatures inside also remain unless they opt to be shunted through the door as it vanishes, landing with the Prone condition in the unoccupied spaces closest to the door’s former space. Each time you cast this spell, you can create a new demiplane or connect the shadowy door to a demiplane you created with a previous casting of this spell. Additionally, if you know the nature and contents of a demiplane created by a casting of this spell by another creature, you can connect the shadowy door to that demiplane instead.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "dominate-monster",
    "name": "Dominate Monster",
    "nameIT": "Dominate Monster",
    "level": 8,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 1 hour",
    "durationIT": "Concentrazione, fino a 1 ora",
    "concentration": true,
    "description": "One creature you can see within range must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target has Advantage on the save if you or your allies are fighting it. Whenever the target takes damage, it repeats the save, ending the spell on itself on a success. You have a telepathic link with the Charmed target while the two of you are on the same plane of existence. On your turn, you can use this link to issue commands to the target (no action required), such as “Attack that creature,” “Move over there,” or “Fetch that object.” The target does its best to obey on its turn. If it completes an order and doesn’t receive further direction from you, it acts and moves as it likes, focusing on protecting itself. You can command the target to take a Reaction but must take your own Reaction to do so. Using a Higher-Level Spell Slot. Your Concentration can last longer with a level 9 spell slot (up to 8 hours).",
    "descriptionIT": "One creature you can see within range must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target has Advantage on the save if you or your allies are fighting it. Whenever the target takes damage, it repeats the save, ending the spell on itself on a success. You have a telepathic link with the Charmed target while the two of you are on the same plane of existence. On your turn, you can use this link to issue commands to the target (no action required), such as “Attack that creature,” “Move over there,” or “Fetch that object.” The target does its best to obey on its turn. If it completes an order and doesn’t receive further direction from you, it acts and moves as it likes, focusing on protecting itself. You can command the target to take a Reaction but must take your own Reaction to do so. Using a Higher-Level Spell Slot. Your Concentration can last longer with a level 9 spell slot (up to 8 hours).",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "earthquake",
    "name": "Earthquake",
    "nameIT": "Earthquake",
    "level": 8,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "500 feet",
    "rangeIT": "150 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a fractured rock",
      "mIT": "a fractured rock"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "Choose a point on the ground that you can see within range. For the duration, an intense tremor rips through the ground in a 100-foot-radius circle centered on that point. The ground there is Difficult Terrain. When you cast this spell and at the end of each of your turns for the duration, each creature on the ground in the area makes a Dexterity saving throw. On a failed save, a creature has the Prone condition, and its Concentration is broken. You can also cause the effects below. Fissures. A total of 1d6 fissures open in the spell’s area at the end of the turn you cast it. You choose the fissures’ locations, which can’t be under structures. Each fissure is 1d10 × 10 feet deep and 10 feet wide, and it extends from one edge of the spell’s area to another edge. A creature in the same space as a fissure must succeed on a Dexterity saving throw or fall in. A creature that successfully saves moves with the fissure’s edge as it opens. Structures. The tremor deals 50 Bludgeoning damage to any structure in contact with the ground in the area when you cast the spell and at the end of each of your turns until the spell ends. If a structure drops to 0 Hit Points, it collapses. A creature within a distance from a collapsing structure equal to half the structure’s height makes a Dexterity saving throw. On a failed save, the creature takes 12d6 Bludgeoning damage, has the Prone condition, and is buried in the rubble, requiring a DC 20 Strength (Athletics) check as an action to escape. On a successful save, the creature takes half as much damage only.",
    "descriptionIT": "Choose a point on the ground that you can see within range. For the duration, an intense tremor rips through the ground in a 100-foot-radius circle centered on that point. The ground there is Difficult Terrain. When you cast this spell and at the end of each of your turns for the duration, each creature on the ground in the area makes a Dexterity saving throw. On a failed save, a creature has the Prone condition, and its Concentration is broken. You can also cause the effects below. Fissures. A total of 1d6 fissures open in the spell’s area at the end of the turn you cast it. You choose the fissures’ locations, which can’t be under structures. Each fissure is 1d10 × 3 m deep and 3 m wide, and it extends from one edge of the spell’s area to another edge. A creature in the same space as a fissure must succeed on a Dexterity saving throw or fall in. A creature that successfully saves moves with the fissure’s edge as it opens. Structures. The tremor deals 50 Bludgeoning damage to any structure in contact with the ground in the area when you cast the spell and at the end of each of your turns until the spell ends. If a structure drops to 0 Hit Points, it collapses. A creature within a distance from a collapsing structure equal to half the structure’s height makes a Dexterity saving throw. On a failed save, the creature takes 12d6 Bludgeoning damage, has the Prone condition, and is buried in the rubble, requiring a DC 20 Strength (Athletics) check as an action to escape. On a successful save, the creature takes half as much damage only.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "glibness",
    "name": "Glibness",
    "nameIT": "Glibness",
    "level": 8,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "1 hour",
    "durationIT": "1 ora",
    "concentration": false,
    "description": "Until the spell ends, when you make a Charisma check, you can replace the number you roll with a 15. Additionally, no matter what you say, magic that would determine if you are telling the truth indicates that you are being truthful.",
    "descriptionIT": "Until the spell ends, when you make a Charisma check, you can replace the number you roll with a 15. Additionally, no matter what you say, magic that would determine if you are telling the truth indicates that you are being truthful.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "incendiary-cloud",
    "name": "Incendiary Cloud",
    "nameIT": "Incendiary Cloud",
    "level": 8,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "150 feet",
    "rangeIT": "45 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "A swirling cloud of embers and smoke fills a 20-foot-radius Sphere centered on a point within range. The cloud’s area is Heavily Obscured. It lasts for the duration or until a strong wind (like that created by Gust of Wind) disperses it. When the cloud appears, each creature in it makes a Dexterity saving throw, taking 10d8 Fire damage on a failed save or half as much damage on a successful one. A creature must also make this save when the Sphere moves into its space and when it enters the Sphere or ends its turn there. A creature makes this save only once per turn. The cloud moves 10 feet away from you in a direction you choose at the start of each of your turns.",
    "descriptionIT": "A swirling cloud of embers and smoke fills a 20-foot-radius Sphere centered on a point within range. The cloud’s area is Heavily Obscured. It lasts for the duration or until a strong wind (like that created by Gust of Wind) disperses it. When the cloud appears, each creature in it makes a Dexterity saving throw, taking 10d8 Fire damage on a failed save or half as much damage on a successful one. A creature must also make this save when the Sphere moves into its space and when it enters the Sphere or ends its turn there. A creature makes this save only once per turn. The cloud moves 3 m away from you in a direction you choose at the start of each of your turns.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "mind-blank",
    "name": "Mind Blank",
    "nameIT": "Mind Blank",
    "level": 8,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "24 hours",
    "durationIT": "24 ore",
    "concentration": false,
    "description": "Until the spell ends, one willing creature you touch has Immunity to Psychic damage and the Charmed condition. The target is also unaffected by anything that would sense its emotions or alignment, read its thoughts, or magically detect its location, and no spell—not even Wish—can gather information about the target, observe it remotely, or control its mind.",
    "descriptionIT": "Until the spell ends, one willing creature you touch has Immunity to Psychic damage and the Charmed condition. The target is also unaffected by anything that would sense its emotions or alignment, read its thoughts, or magically detect its location, and no spell—not even Wish—can gather information about the target, observe it remotely, or control its mind.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "power-word-stun",
    "name": "Power Word Stun",
    "nameIT": "Power Word Stun",
    "level": 8,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You overwhelm the mind of one creature you can see within range. If the target has 150 Hit Points or fewer, it has the Stunned condition. Otherwise, its Speed is 0 until the start of your next turn. The Stunned target makes a Constitution saving throw at the end of each of its turns, ending the condition on itself on a success.",
    "descriptionIT": "You overwhelm the mind of one creature you can see within range. If the target has 150 Hit Points or fewer, it has the Stunned condition. Otherwise, its Speed is 0 until the start of your next turn. The Stunned target makes a Constitution saving throw at the end of each of its turns, ending the condition on itself on a success.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "sunburst",
    "name": "Sunburst",
    "nameIT": "Sunburst",
    "level": 8,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "150 feet",
    "rangeIT": "45 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a piece of sunstone",
      "mIT": "a piece of sunstone"
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "Brilliant sunlight flashes in a 60-foot-radius Sphere centered on a point you choose within range. Each creature in the Sphere makes a Constitution saving throw. On a failed save, a creature takes 12d6 Radiant damage and has the Blinded condition for 1 minute. On a successful save, it takes half as much damage only. A creature Blinded by this spell makes another Constitution saving throw at the end of each of its turns, ending the effect on itself on a success. This spell dispels Darkness in its area that was created by any spell.",
    "descriptionIT": "Brilliant sunlight flashes in a 60-foot-radius Sphere centered on a point you choose within range. Each creature in the Sphere makes a Constitution saving throw. On a failed save, a creature takes 12d6 Radiant damage and has the Blinded condition for 1 minute. On a successful save, it takes half as much damage only. A creature Blinded by this spell makes another Constitution saving throw at the end of each of its turns, ending the effect on itself on a success. This spell dispels Darkness in its area that was created by any spell.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "foresight",
    "name": "Foresight",
    "nameIT": "Foresight",
    "level": 9,
    "school": "divination",
    "schoolIT": "Divinazione",
    "castingTime": "1 minute",
    "castingTimeIT": "1 minuto",
    "range": "Touch",
    "rangeIT": "Tocco",
    "components": {
      "v": true,
      "s": true,
      "m": "a hummingbird feather",
      "mIT": "a hummingbird feather"
    },
    "duration": "8 hours",
    "durationIT": "8 ore",
    "concentration": false,
    "description": "You touch a willing creature and bestow a limited ability to see into the immediate future. For the duration, the target has Advantage on D20 Tests, and other creatures have Disadvantage on attack rolls against it. The spell ends early if you cast it again.",
    "descriptionIT": "You touch a willing creature and bestow a limited ability to see into the immediate future. For the duration, the target has Advantage on D20 Tests, and other creatures have Disadvantage on attack rolls against it. The spell ends early if you cast it again.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "gate",
    "name": "Gate",
    "nameIT": "Gate",
    "level": 9,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a diamond worth 5,000+ GP",
      "mIT": "a diamond worth 5,000+ GP"
    },
    "duration": "Concentration, up to 1 minute",
    "durationIT": "Concentrazione, fino a 1 minuto",
    "concentration": true,
    "description": "You conjure a portal linking an unoccupied space you can see within range to a precise location on a different plane of existence. The portal is a circular opening, which you can make 5 to 20 feet in diameter. You can orient the portal in any direction you choose. The portal lasts for the duration, and the portal’s destination is visible through it. The portal has a front and a back on each plane where it appears. Travel through the portal is possible only by moving through its front. Anything that does so is instantly transported to the other plane, appearing in the unoccupied space nearest to the portal. Deities and other planar rulers can prevent portals created by this spell from opening in their presence or anywhere within their domains. When you cast this spell, you can speak the name of a specific creature (a pseudonym, title, or nickname doesn’t work). If that creature is on a plane other than the one you are on, the portal opens next to the named creature and transports it to the nearest unoccupied space on your side of the portal. You gain no special power over the creature, and it is free to act as the GM deems appropriate. It might leave, attack you, or help you.",
    "descriptionIT": "You conjure a portal linking an unoccupied space you can see within range to a precise location on a different plane of existence. The portal is a circular opening, which you can make 5 to 6 m in diameter. You can orient the portal in any direction you choose. The portal lasts for the duration, and the portal’s destination is visible through it. The portal has a front and a back on each plane where it appears. Travel through the portal is possible only by moving through its front. Anything that does so is instantly transported to the other plane, appearing in the unoccupied space nearest to the portal. Deities and other planar rulers can prevent portals created by this spell from opening in their presence or anywhere within their domains. When you cast this spell, you can speak the name of a specific creature (a pseudonym, title, or nickname doesn’t work). If that creature is on a plane other than the one you are on, the portal opens next to the named creature and transports it to the nearest unoccupied space on your side of the portal. You gain no special power over the creature, and it is free to act as the GM deems appropriate. It might leave, attack you, or help you.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "meteor-swarm",
    "name": "Meteor Swarm",
    "nameIT": "Meteor Swarm",
    "level": 9,
    "school": "evocation",
    "schoolIT": "Evocazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "1 mile",
    "rangeIT": "1,6 km",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "Blazing orbs of fire plummet to the ground at four different points you can see within range. Each creature in a 40-foot-radius Sphere centered on each of those points makes a Dexterity saving throw. A creature takes 20d6 Fire damage and 20d6 Bludgeoning damage on a failed save or half as much damage on a successful one. A creature in the area of more than one fiery Sphere is affected only once. A nonmagical object that isn’t being worn or carried also takes the damage if it’s in the spell’s area, and the object starts burning if it’s flammable.",
    "descriptionIT": "Blazing orbs of fire plummet to the ground at four different points you can see within range. Each creature in a 40-foot-radius Sphere centered on each of those points makes a Dexterity saving throw. A creature takes 20d6 Fire damage and 20d6 Bludgeoning damage on a failed save or half as much damage on a successful one. A creature in the area of more than one fiery Sphere is affected only once. A nonmagical object that isn’t being worn or carried also takes the damage if it’s in the spell’s area, and the object starts burning if it’s flammable.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "power-word-heal",
    "name": "Power Word Heal",
    "nameIT": "Power Word Heal",
    "level": 9,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "A wave of healing energy washes over one creature you can see within range. The target regains all its Hit Points. If the creature has the Charmed, Frightened, Paralyzed, Poisoned, or Stunned condition, the condition ends. If the creature has the Prone condition, it can use its Reaction to stand up.",
    "descriptionIT": "A wave of healing energy washes over one creature you can see within range. The target regains all its Hit Points. If the creature has the Charmed, Frightened, Paralyzed, Poisoned, or Stunned condition, the condition ends. If the creature has the Prone condition, it can use its Reaction to stand up.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "power-word-kill",
    "name": "Power Word Kill",
    "nameIT": "Power Word Kill",
    "level": 9,
    "school": "enchantment",
    "schoolIT": "Ammaliamento",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You compel one creature you can see within range to die. If the target has 100 Hit Points or fewer, it dies. Otherwise, it takes 12d12 Psychic damage.",
    "descriptionIT": "You compel one creature you can see within range to die. If the target has 100 Hit Points or fewer, it dies. Otherwise, it takes 12d12 Psychic damage.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard",
      "sorcerer"
    ]
  },
  {
    "id": "prismatic-wall",
    "name": "Prismatic Wall",
    "nameIT": "Prismatic Wall",
    "level": 9,
    "school": "abjuration",
    "schoolIT": "Abiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "60 feet",
    "rangeIT": "18 m",
    "components": {
      "v": true,
      "s": true
    },
    "duration": "10 minutes",
    "durationIT": "10 minuti",
    "concentration": false,
    "description": "A shimmering, multicolored plane of light forms a vertical opaque wall—up to 90 feet long, 30 feet high, and 1 inch thick—centered on a point within range. Alternatively, you shape the wall into a globe up to 30 feet in diameter centered on a point within range. The wall lasts for the duration. If you position the wall in a space occupied by a creature, the spell ends instantly without effect. The wall sheds Bright Light within 100 feet and Dim Light for an additional 100 feet. You and creatures you designate when you cast the spell can pass through and be near the wall without harm. If another creature that can see the wall moves within 20 feet of it or starts its turn there, the creature must succeed on a Constitution saving throw or have the Blinded condition for 1 minute. The wall consists of seven layers, each with a different color. When a creature reaches into or passes through the wall, it does so one layer at a time through all the layers. Each layer forces the creature to make a Dexterity saving throw or be affected by that layer’s properties as described in the Prismatic Layers table. The wall, which has AC 10, can be destroyed one layer at a time, in order from red to violet, by means specific to each layer. If a layer is destroyed, it is gone for the duration. Antimagic Field has no effect on the wall, and Dispel Magic can affect only the violet layer. Prismatic Layers Order Effects Red. Failed Save: 12d6 Fire damage. Successful Save: Half as much damage. Additional Effects: Nonmagical ranged attacks can’t pass through this layer, which is destroyed if it takes at least 25 Cold damage. Orange. Failed Save: 12d6 Acid damage. Successful Save: Half as much damage. Additional Effects: Magical ranged attacks can’t pass through this layer, which is destroyed by a strong wind (such as the one created by Gust of Wind). Yellow. Failed Save: 12d6 Lightning damage. Successful Save: Half as much damage. Additional Effects: The layer is destroyed if it takes at least 60 Force damage. Green. Failed Save: 12d6 Poison damage. Successful Save: Half as much damage. Additional Effects: A Passwall spell, or another spell of equal or greater level that can open a portal on a solid surface, destroys this layer. Blue. Failed Save: 12d6 Cold damage. Successful Save: Half as much damage. Additional Effects: The layer is destroyed if it takes at least 25 Fire damage. Indigo. Failed Save: The target has the Restrained condition and makes a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the condition ends. If it fails three times, it has the Petrified condition until it is freed by an effect like the Greater Restoration spell. The successes and failures needn’t be consecutive; keep track of both until the target collects three of a kind. Additional Effects: Spells can’t be cast through this layer, which is destroyed by Bright Light shed by the Daylight spell. Violet. Failed Save: The target has the Blinded condition and makes a Wisdom saving throw at the start of your next turn. On a successful save, the condition ends. On a failed save, the condition ends, and the creature teleports to another plane of existence (GM’s choice). Additional Effects: This layer is destroyed by Dispel Magic.",
    "descriptionIT": "A shimmering, multicolored plane of light forms a vertical opaque wall—up to 27 m long, 9 m high, and 1 inch thick—centered on a point within range. Alternatively, you shape the wall into a globe up to 9 m in diameter centered on a point within range. The wall lasts for the duration. If you position the wall in a space occupied by a creature, the spell ends instantly without effect. The wall sheds Bright Light within 30 m and Dim Light for an additional 30 m. You and creatures you designate when you cast the spell can pass through and be near the wall without harm. If another creature that can see the wall moves within 6 m of it or starts its turn there, the creature must succeed on a Constitution saving throw or have the Blinded condition for 1 minute. The wall consists of seven layers, each with a different color. When a creature reaches into or passes through the wall, it does so one layer at a time through all the layers. Each layer forces the creature to make a Dexterity saving throw or be affected by that layer’s properties as described in the Prismatic Layers table. The wall, which has AC 10, can be destroyed one layer at a time, in order from red to violet, by means specific to each layer. If a layer is destroyed, it is gone for the duration. Antimagic Field has no effect on the wall, and Dispel Magic can affect only the violet layer. Prismatic Layers Order Effects Red. Failed Save: 12d6 Fire damage. Successful Save: Half as much damage. Additional Effects: Nonmagical ranged attacks can’t pass through this layer, which is destroyed if it takes at least 25 Cold damage. Orange. Failed Save: 12d6 Acid damage. Successful Save: Half as much damage. Additional Effects: Magical ranged attacks can’t pass through this layer, which is destroyed by a strong wind (such as the one created by Gust of Wind). Yellow. Failed Save: 12d6 Lightning damage. Successful Save: Half as much damage. Additional Effects: The layer is destroyed if it takes at least 60 Force damage. Green. Failed Save: 12d6 Poison damage. Successful Save: Half as much damage. Additional Effects: A Passwall spell, or another spell of equal or greater level that can open a portal on a solid surface, destroys this layer. Blue. Failed Save: 12d6 Cold damage. Successful Save: Half as much damage. Additional Effects: The layer is destroyed if it takes at least 25 Fire damage. Indigo. Failed Save: The target has the Restrained condition and makes a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the condition ends. If it fails three times, it has the Petrified condition until it is freed by an effect like the Greater Restoration spell. The successes and failures needn’t be consecutive; keep track of both until the target collects three of a kind. Additional Effects: Spells can’t be cast through this layer, which is destroyed by Bright Light shed by the Daylight spell. Violet. Failed Save: The target has the Blinded condition and makes a Wisdom saving throw at the start of your next turn. On a successful save, the condition ends. On a failed save, the condition ends, and the creature teleports to another plane of existence (GM’s choice). Additional Effects: This layer is destroyed by Dispel Magic.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "time-stop",
    "name": "Time Stop",
    "nameIT": "Time Stop",
    "level": 9,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "You briefly stop the flow of time for everyone but yourself. No time passes for other creatures, while you take 1d4 + 1 turns in a row, during which you can use actions and move as normal. This spell ends if one of the actions you use during this period, or any effects that you create during it, affects a creature other than you or an object being worn or carried by someone other than you. In addition, the spell ends if you move to a place more than 1,000 feet from the location where you cast it.",
    "descriptionIT": "You briefly stop the flow of time for everyone but yourself. No time passes for other creatures, while you take 1d4 + 1 turns in a row, during which you can use actions and move as normal. This spell ends if one of the actions you use during this period, or any effects that you create during it, affects a creature other than you or an object being worn or carried by someone other than you. In addition, the spell ends if you move to a place more than 1,0 m from the location where you cast it.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  },
  {
    "id": "true-polymorph",
    "name": "True Polymorph",
    "nameIT": "True Polymorph",
    "level": 9,
    "school": "transmutation",
    "schoolIT": "Trasmutazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "30 feet",
    "rangeIT": "9 m",
    "components": {
      "v": true,
      "s": true,
      "m": "a drop of mercury, a dollop of gum arabic, and a wisp of smoke",
      "mIT": "a drop of mercury, a dollop of gum arabic, and a wisp of smoke"
    },
    "duration": "Concentration, up to 1 hour",
    "durationIT": "Concentrazione, fino a 1 ora",
    "concentration": true,
    "description": "Choose one creature or nonmagical object that you can see within range. The creature shape-shifts into a different creature or a nonmagical object, or the object shape-shifts into a creature (the object must be neither worn nor carried). The transformation lasts for the duration or until the target dies or is destroyed, but if you maintain Concentration on this spell for the full duration, the spell lasts until dispelled. An unwilling creature can make a Wisdom saving throw, and if it succeeds, it isn’t affected by this spell. Creature into Creature. If you turn a creature into another kind of creature, the new form can be any kind you choose that has a Challenge Rating equal to or less than the target’s Challenge Rating or level. The target’s game statistics are replaced by the stat block of the new form, but it retains its Hit Points, Hit Point Dice, alignment, and personality. The target gains a number of Temporary Hit Points equal to the Hit Points of the new form. These Temporary Hit Points vanish if any remain when the spell ends. The target is limited in the actions it can perform by the anatomy of its new form, and it can’t speak or cast spells. The target’s gear melds into the new form. The creature can’t use or otherwise benefit from any of that equipment. Object into Creature. You can turn an object into any kind of creature, as long as the creature’s size is no larger than the object’s size and the creature has a Challenge Rating of 9 or lower. The creature is Friendly to you and your allies. In combat, it takes its turns immediately after yours, and it obeys your commands. If the spell lasts more than an hour, you no longer control the creature. It might remain Friendly to you, depending on how you have treated it. Creature into Object. If you turn a creature into an object, it transforms along with whatever it is wearing and carrying into that form, as long as the object’s size is no larger than the creature’s size. The creature’s statistics become those of the object, and the creature has no memory of time spent in this form after the spell ends and it returns to normal.",
    "descriptionIT": "Choose one creature or nonmagical object that you can see within range. The creature shape-shifts into a different creature or a nonmagical object, or the object shape-shifts into a creature (the object must be neither worn nor carried). The transformation lasts for the duration or until the target dies or is destroyed, but if you maintain Concentration on this spell for the full duration, the spell lasts until dispelled. An unwilling creature can make a Wisdom saving throw, and if it succeeds, it isn’t affected by this spell. Creature into Creature. If you turn a creature into another kind of creature, the new form can be any kind you choose that has a Challenge Rating equal to or less than the target’s Challenge Rating or level. The target’s game statistics are replaced by the stat block of the new form, but it retains its Hit Points, Hit Point Dice, alignment, and personality. The target gains a number of Temporary Hit Points equal to the Hit Points of the new form. These Temporary Hit Points vanish if any remain when the spell ends. The target is limited in the actions it can perform by the anatomy of its new form, and it can’t speak or cast spells. The target’s gear melds into the new form. The creature can’t use or otherwise benefit from any of that equipment. Object into Creature. You can turn an object into any kind of creature, as long as the creature’s size is no larger than the object’s size and the creature has a Challenge Rating of 9 or lower. The creature is Friendly to you and your allies. In combat, it takes its turns immediately after yours, and it obeys your commands. If the spell lasts more than an hour, you no longer control the creature. It might remain Friendly to you, depending on how you have treated it. Creature into Object. If you turn a creature into an object, it transforms along with whatever it is wearing and carrying into that form, as long as the object’s size is no larger than the creature’s size. The creature’s statistics become those of the object, and the creature has no memory of time spent in this form after the spell ends and it returns to normal.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "bard"
    ]
  },
  {
    "id": "wish",
    "name": "Wish",
    "nameIT": "Wish",
    "level": 9,
    "school": "conjuration",
    "schoolIT": "Congiurazione",
    "castingTime": "Action",
    "castingTimeIT": "1 azione",
    "range": "Self",
    "rangeIT": "Se stesso",
    "components": {
      "v": true,
      "s": false
    },
    "duration": "Instantaneous",
    "durationIT": "Istantaneo",
    "concentration": false,
    "description": "Wish is the mightiest spell a mortal can cast. By simply speaking aloud, you can alter reality itself. The basic use of this spell is to duplicate any other spell of level 8 or lower. If you use it this way, you don’t need to meet any requirements to cast that spell, including costly components. The spell simply takes effect. Alternatively, you can create one of the following effects of your choice: Object Creation. You create one object of up to 25,000 GP in value that isn’t a magic item. The object can be no more than 300 feet in any dimension, and it appears in an unoccupied space that you can see on the ground. Instant Health. You allow yourself and up to twenty creatures that you can see to regain all Hit Points, and you end all effects on them listed in the Greater Restoration spell. Resistance. You grant up to ten creatures that you can see Resistance to one damage type that you choose. This Resistance is permanent. Spell Immunity. You grant up to ten creatures you can see immunity to a single spell or other magical effect for 8 hours. Sudden Learning. You replace one of your feats with another feat for which you are eligible. You lose all the benefits of the old feat and gain the benefits of the new one. You can’t replace a feat that is a prerequisite for any of your other feats or features. Roll Redo. You undo a single recent event by forcing a reroll of any die roll made within the last round (including your last turn). Reality reshapes itself to accommodate the new result. For example, a Wish spell could undo an ally’s failed saving throw or a foe’s Critical Hit. You can force the reroll to be made with Advantage or Disadvantage, and you choose whether to use the reroll or the original roll. Reshape Reality. You may wish for something not included in any of the other effects. To do so, state your wish to the GM as precisely as possible. The GM has great latitude in ruling what occurs in such an instance; the greater the wish, the greater the likelihood that something goes wrong. This spell might simply fail, the effect you desire might be achieved only in part, or you might suffer an unforeseen consequence as a result of how you worded the wish. For example, wishing that a villain were dead might propel you forward in time to a period when that villain is no longer alive, effectively removing you from the game. Similarly, wishing for a Legendary magic item or an Artifact might instantly transport you to the presence of the item’s current owner. If your wish is granted and its effects have consequences for a whole community, region, or world, you are likely to attract powerful foes. If your wish would affect a god, the god’s divine servants might instantly intervene to prevent it or to encourage you to craft the wish in a particular way. If your wish would undo the multiverse itself, your wish fails. The stress of casting Wish to produce any effect other than duplicating another spell weakens you. After enduring that stress, each time you cast a spell until you finish a Long Rest, you take 1d10 Necrotic damage per level of that spell. This damage can’t be reduced or prevented in any way. In addition, your Strength score becomes 3 for 2d4 days. For each of those days that you spend resting and doing nothing more than light activity, your remaining recovery time decreases by 2 days. Finally, there is a 33 percent chance that you are unable to cast Wish ever again if you suffer this stress.",
    "descriptionIT": "Wish is the mightiest spell a mortal can cast. By simply speaking aloud, you can alter reality itself. The basic use of this spell is to duplicate any other spell of level 8 or lower. If you use it this way, you don’t need to meet any requirements to cast that spell, including costly components. The spell simply takes effect. Alternatively, you can create one of the following effects of your choice: Object Creation. You create one object of up to 25,000 GP in value that isn’t a magic item. The object can be no more than 90 m in any dimension, and it appears in an unoccupied space that you can see on the ground. Instant Health. You allow yourself and up to twenty creatures that you can see to regain all Hit Points, and you end all effects on them listed in the Greater Restoration spell. Resistance. You grant up to ten creatures that you can see Resistance to one damage type that you choose. This Resistance is permanent. Spell Immunity. You grant up to ten creatures you can see immunity to a single spell or other magical effect for 8 hours. Sudden Learning. You replace one of your feats with another feat for which you are eligible. You lose all the benefits of the old feat and gain the benefits of the new one. You can’t replace a feat that is a prerequisite for any of your other feats or features. Roll Redo. You undo a single recent event by forcing a reroll of any die roll made within the last round (including your last turn). Reality reshapes itself to accommodate the new result. For example, a Wish spell could undo an ally’s failed saving throw or a foe’s Critical Hit. You can force the reroll to be made with Advantage or Disadvantage, and you choose whether to use the reroll or the original roll. Reshape Reality. You may wish for something not included in any of the other effects. To do so, state your wish to the GM as precisely as possible. The GM has great latitude in ruling what occurs in such an instance; the greater the wish, the greater the likelihood that something goes wrong. This spell might simply fail, the effect you desire might be achieved only in part, or you might suffer an unforeseen consequence as a result of how you worded the wish. For example, wishing that a villain were dead might propel you forward in time to a period when that villain is no longer alive, effectively removing you from the game. Similarly, wishing for a Legendary magic item or an Artifact might instantly transport you to the presence of the item’s current owner. If your wish is granted and its effects have consequences for a whole community, region, or world, you are likely to attract powerful foes. If your wish would affect a god, the god’s divine servants might instantly intervene to prevent it or to encourage you to craft the wish in a particular way. If your wish would undo the multiverse itself, your wish fails. The stress of casting Wish to produce any effect other than duplicating another spell weakens you. After enduring that stress, each time you cast a spell until you finish a Long Rest, you take 1d10 Necrotic damage per level of that spell. This damage can’t be reduced or prevented in any way. In addition, your Strength score becomes 3 for 2d4 days. For each of those days that you spend resting and doing nothing more than light activity, your remaining recovery time decreases by 2 days. Finally, there is a 33 percent chance that you are unable to cast Wish ever again if you suffer this stress.",
    "ritual": false,
    "source": "SRD 5.2",
    "classIds": [
      "sorcerer"
    ]
  }
] as GeneratedSrdSpell[]
