const MOVES_DATA = {
  "Ominous Wind": {
    "pvpEnergy": 40,
    "pvpTurns": 1,
    "ms": 2300,
    "pvpPower": 50,
    "pow": 50,
    "eps": 14.35,
    "type": "GHOST",
    "bars": 3
  },
  "Meteor Mash": {
    "pvpEnergy": 50,
    "pvpTurns": 2,
    "ms": 2600,
    "pvpPower": 100,
    "pow": 100,
    "eps": 19.2,
    "type": "STEEL",
    "bars": 2
  },
  "Ice Shard": {
    "pvpEnergy": 10,
    "pvpTurns": 3,
    "ms": 1200,
    "pvpPower": 9,
    "pow": 12,
    "eps": 10.0,
    "type": "ICE",
    "bars": 1
  },
  "Silver Wind": {
    "pvpEnergy": 45,
    "pvpTurns": 1,
    "ms": 3700,
    "pvpPower": 70,
    "pow": 70,
    "eps": 8.92,
    "type": "BUG",
    "bars": 3
  },
  "Bite": {"pvpEnergy": 2, "pvpTurns": 1, "ms": 500, "pvpPower": 4, "pow": 6, "eps": 8.0, "type": "DARK", "bars": 1},
  "Magnet Bomb": {
    "pvpEnergy": 45,
    "pvpTurns": 1,
    "ms": 2800,
    "pvpPower": 70,
    "pow": 70,
    "eps": 11.79,
    "type": "STEEL",
    "bars": 3
  },
  "Draco Meteor": {
    "pvpEnergy": 75,
    "pvpTurns": 1,
    "ms": 3600,
    "pvpPower": 150,
    "pow": 150,
    "eps": 27.78,
    "type": "DRAGON",
    "bars": 1
  },
  "Shadow Sneak": {
    "pvpEnergy": 45,
    "pvpTurns": 1,
    "ms": 2900,
    "pvpPower": 50,
    "pow": 50,
    "eps": 11.38,
    "type": "GHOST",
    "bars": 3
  },
  "Iron Head": {
    "pvpEnergy": 50,
    "pvpTurns": 1,
    "ms": 1900,
    "pvpPower": 70,
    "pow": 60,
    "eps": 26.32,
    "type": "STEEL",
    "bars": 2
  },
  "Surf": {
    "pvpEnergy": 40,
    "pvpTurns": 1,
    "ms": 1700,
    "pvpPower": 65,
    "pow": 65,
    "eps": 29.41,
    "type": "WATER",
    "bars": 2
  },
  "Sludge Wave": {
    "pvpEnergy": 65,
    "pvpTurns": 1,
    "ms": 3200,
    "pvpPower": 110,
    "pow": 110,
    "eps": 31.25,
    "type": "POISON",
    "bars": 1
  },
  "Hydro Pump": {
    "pvpEnergy": 75,
    "pvpTurns": 1,
    "ms": 3300,
    "pvpPower": 130,
    "pow": 130,
    "eps": 30.3,
    "type": "WATER",
    "bars": 1
  },
  "Peck": {
    "pvpEnergy": 5,
    "pvpTurns": 2,
    "ms": 1000,
    "pvpPower": 6,
    "pow": 10,
    "eps": 10.0,
    "type": "FLYING",
    "bars": 1
  },
  "Heat Wave": {
    "pvpEnergy": 75,
    "pvpTurns": 1,
    "ms": 3000,
    "pvpPower": 95,
    "pow": 95,
    "eps": 33.33,
    "type": "FIRE",
    "bars": 1
  },
  "Bulldoze": {
    "pvpEnergy": 60,
    "pvpTurns": 1,
    "ms": 3500,
    "pvpPower": 80,
    "pow": 80,
    "eps": 14.29,
    "type": "GROUND",
    "bars": 2
  },
  "Poison Jab": {
    "pvpEnergy": 7,
    "pvpTurns": 2,
    "ms": 800,
    "pvpPower": 6,
    "pow": 10,
    "eps": 8.75,
    "type": "POISON",
    "bars": 1
  },
  "Ice Beam": {
    "pvpEnergy": 55,
    "pvpTurns": 1,
    "ms": 3300,
    "pvpPower": 90,
    "pow": 90,
    "eps": 15.15,
    "type": "ICE",
    "bars": 2
  },
  "Bullet Punch": {
    "pvpEnergy": 7,
    "pvpTurns": 2,
    "ms": 900,
    "pvpPower": 6,
    "pow": 9,
    "eps": 11.11,
    "type": "STEEL",
    "bars": 1
  },
  "Crunch": {
    "pvpEnergy": 45,
    "pvpTurns": 1,
    "ms": 3200,
    "pvpPower": 70,
    "pow": 70,
    "eps": 10.31,
    "type": "DARK",
    "bars": 3
  },
  "Future Sight": {
    "pvpEnergy": 65,
    "pvpTurns": 1,
    "ms": 2700,
    "pvpPower": 120,
    "pow": 120,
    "eps": 37.04,
    "type": "PSYCHIC",
    "bars": 1
  },
  "Cut": {"pvpEnergy": 2, "pvpTurns": 1, "ms": 500, "pvpPower": 3, "pow": 5, "eps": 10.0, "type": "NORMAL", "bars": 1},
  "Hidden Power": {
    "pvpEnergy": 8,
    "pvpTurns": 3,
    "ms": 1500,
    "pvpPower": 9,
    "pow": 15,
    "eps": 10.0,
    "type": "NORMAL",
    "bars": 1
  },
  "Drill Run": {
    "pvpEnergy": 55,
    "pvpTurns": 1,
    "ms": 2800,
    "pvpPower": 80,
    "pow": 80,
    "eps": 17.86,
    "type": "GROUND",
    "bars": 2
  },
  "Ancient Power": {
    "pvpEnergy": 45,
    "pvpTurns": 1,
    "ms": 3500,
    "pvpPower": 70,
    "pow": 70,
    "eps": 9.43,
    "type": "ROCK",
    "bars": 3
  },
  "Dragon Claw": {
    "pvpEnergy": 35,
    "pvpTurns": 1,
    "ms": 1700,
    "pvpPower": 50,
    "pow": 50,
    "eps": 19.41,
    "type": "DRAGON",
    "bars": 3
  },
  "Avalanche": {
    "pvpEnergy": 45,
    "pvpTurns": 1,
    "ms": 2700,
    "pvpPower": 90,
    "pow": 90,
    "eps": 18.52,
    "type": "ICE",
    "bars": 2
  },
  "Flame Burst": {
    "pvpEnergy": 55,
    "pvpTurns": 1,
    "ms": 2600,
    "pvpPower": 70,
    "pow": 70,
    "eps": 19.23,
    "type": "FIRE",
    "bars": 2
  },
  "Moonblast": {
    "pvpEnergy": 70,
    "pvpTurns": 1,
    "ms": 3900,
    "pvpPower": 130,
    "pow": 130,
    "eps": 25.64,
    "type": "FAIRY",
    "bars": 1
  },
  "Outrage": {
    "pvpEnergy": 60,
    "pvpTurns": 1,
    "ms": 3900,
    "pvpPower": 110,
    "pow": 110,
    "eps": 12.82,
    "type": "DRAGON",
    "bars": 2
  },
  "Tackle": {
    "pvpEnergy": 2,
    "pvpTurns": 1,
    "ms": 500,
    "pvpPower": 3,
    "pow": 5,
    "eps": 10.0,
    "type": "NORMAL",
    "bars": 1
  },
  "Rock Tomb": {
    "pvpEnergy": 60,
    "pvpTurns": 1,
    "ms": 3200,
    "pvpPower": 70,
    "pow": 70,
    "eps": 15.63,
    "type": "STEEL",
    "bars": 2
  },
  "Water Pulse": {
    "pvpEnergy": 60,
    "pvpTurns": 1,
    "ms": 3200,
    "pvpPower": 70,
    "pow": 70,
    "eps": 15.63,
    "type": "WATER",
    "bars": 2
  },
  "Horn Attack": {
    "pvpEnergy": 35,
    "pvpTurns": 1,
    "ms": 1850,
    "pvpPower": 40,
    "pow": 40,
    "eps": 17.84,
    "type": "NORMAL",
    "bars": 3
  },
  "Steel Wing": {
    "pvpEnergy": 5,
    "pvpTurns": 2,
    "ms": 800,
    "pvpPower": 7,
    "pow": 11,
    "eps": 7.5,
    "type": "STEEL",
    "bars": 1
  },
  "Razor Leaf": {
    "pvpEnergy": 4,
    "pvpTurns": 2,
    "ms": 1000,
    "pvpPower": 11,
    "pow": 13,
    "eps": 7.0,
    "type": "GRASS",
    "bars": 1
  },
  "Fire Spin": {
    "pvpEnergy": 10,
    "pvpTurns": 3,
    "ms": 1100,
    "pvpPower": 9,
    "pow": 14,
    "eps": 9.09,
    "type": "FIRE",
    "bars": 1
  },
  "Ember": {
    "pvpEnergy": 6,
    "pvpTurns": 2,
    "ms": 1000,
    "pvpPower": 6,
    "pow": 10,
    "eps": 10.0,
    "type": "FIRE",
    "bars": 1
  },
  "Poison Fang": {
    "pvpEnergy": 35,
    "pvpTurns": 1,
    "ms": 1700,
    "pvpPower": 40,
    "pow": 35,
    "eps": 19.41,
    "type": "POISON",
    "bars": 3
  },
  "Zen Headbutt": {
    "pvpEnergy": 6,
    "pvpTurns": 3,
    "ms": 1100,
    "pvpPower": 8,
    "pow": 12,
    "eps": 9.09,
    "type": "PSYCHIC",
    "bars": 1
  },
  "Swift": {
    "pvpEnergy": 55,
    "pvpTurns": 1,
    "ms": 2800,
    "pvpPower": 60,
    "pow": 60,
    "eps": 17.86,
    "type": "NORMAL",
    "bars": 2
  },
  "Infestation": {
    "pvpEnergy": 11,
    "pvpTurns": 3,
    "ms": 1100,
    "pvpPower": 6,
    "pow": 10,
    "eps": 12.73,
    "type": "BUG",
    "bars": 1
  },
  "Thunder Punch": {
    "pvpEnergy": 40,
    "pvpTurns": 1,
    "ms": 1800,
    "pvpPower": 55,
    "pow": 45,
    "eps": 18.33,
    "type": "ELECTRIC",
    "bars": 3
  },
  "Extrasensory": {
    "pvpEnergy": 10,
    "pvpTurns": 3,
    "ms": 1100,
    "pvpPower": 8,
    "pow": 12,
    "eps": 10.91,
    "type": "PSYCHIC",
    "bars": 1
  },
  "Solarbeam": {
    "pvpEnergy": 80,
    "pvpTurns": 1,
    "ms": 4900,
    "pvpPower": 150,
    "pow": 180,
    "eps": 20.41,
    "type": "GRASS",
    "bars": 1
  },
  "Fire Blast": {
    "pvpEnergy": 80,
    "pvpTurns": 1,
    "ms": 4200,
    "pvpPower": 140,
    "pow": 140,
    "eps": 23.81,
    "type": "FIRE",
    "bars": 1
  },
  "Heavy Slam": {
    "pvpEnergy": 50,
    "pvpTurns": 1,
    "ms": 2100,
    "pvpPower": 70,
    "pow": 70,
    "eps": 23.81,
    "type": "STEEL",
    "bars": 2
  },
  "Wrap": {
    "pvpEnergy": 45,
    "pvpTurns": 1,
    "ms": 2900,
    "pvpPower": 60,
    "pow": 60,
    "eps": 11.38,
    "type": "NORMAL",
    "bars": 3
  },
  "Waterfall": {
    "pvpEnergy": 8,
    "pvpTurns": 3,
    "ms": 1200,
    "pvpPower": 12,
    "pow": 16,
    "eps": 6.67,
    "type": "WATER",
    "bars": 1
  },
  "Sky Attack": {
    "pvpEnergy": 45,
    "pvpTurns": 1,
    "ms": 2000,
    "pvpPower": 80,
    "pow": 70,
    "eps": 25.0,
    "type": "FLYING",
    "bars": 2
  },
  "Dark Pulse": {
    "pvpEnergy": 50,
    "pvpTurns": 1,
    "ms": 3000,
    "pvpPower": 80,
    "pow": 80,
    "eps": 16.67,
    "type": "DARK",
    "bars": 2
  },
  "Air Slash": {
    "pvpEnergy": 9,
    "pvpTurns": 3,
    "ms": 1200,
    "pvpPower": 9,
    "pow": 14,
    "eps": 8.33,
    "type": "FLYING",
    "bars": 1
  },
  "Stone Edge": {
    "pvpEnergy": 55,
    "pvpTurns": 1,
    "ms": 2300,
    "pvpPower": 100,
    "pow": 100,
    "eps": 43.5,
    "type": "ROCK",
    "bars": 1
  },
  "Grass Knot": {
    "pvpEnergy": 50,
    "pvpTurns": 1,
    "ms": 2600,
    "pvpPower": 90,
    "pow": 90,
    "eps": 19.23,
    "type": "GRASS",
    "bars": 2
  },
  "Dragon Tail": {
    "pvpEnergy": 10,
    "pvpTurns": 3,
    "ms": 1100,
    "pvpPower": 9,
    "pow": 15,
    "eps": 8.18,
    "type": "DRAGON",
    "bars": 1
  },
  "Dynamic Punch": {
    "pvpEnergy": 50,
    "pvpTurns": 1,
    "ms": 2700,
    "pvpPower": 90,
    "pow": 90,
    "eps": 18.52,
    "type": "FIGHTING",
    "bars": 2
  },
  "Blast Burn": {
    "pvpEnergy": 50,
    "pvpTurns": 1,
    "ms": 3300,
    "pvpPower": 110,
    "pow": 110,
    "eps": 27.03,
    "type": "FIRE",
    "bars": 2
  },
  "Shadow Ball": {
    "pvpEnergy": 55,
    "pvpTurns": 1,
    "ms": 3000,
    "pvpPower": 100,
    "pow": 100,
    "eps": 16.67,
    "type": "GHOST",
    "bars": 2
  },
  "Charge Beam": {
    "pvpEnergy": 11,
    "pvpTurns": 3,
    "ms": 1100,
    "pvpPower": 5,
    "pow": 8,
    "eps": 13.64,
    "type": "ELECTRIC",
    "bars": 1
  },
  "Aqua Tail": {
    "pvpEnergy": 35,
    "pvpTurns": 1,
    "ms": 1900,
    "pvpPower": 50,
    "pow": 50,
    "eps": 17.37,
    "type": "WATER",
    "bars": 3
  },
  "Hurricane": {
    "pvpEnergy": 65,
    "pvpTurns": 1,
    "ms": 2700,
    "pvpPower": 110,
    "pow": 110,
    "eps": 37.04,
    "type": "FLYING",
    "bars": 1
  },
  "Brick Break": {
    "pvpEnergy": 35,
    "pvpTurns": 1,
    "ms": 1600,
    "pvpPower": 40,
    "pow": 40,
    "eps": 20.64,
    "type": "FIGHTING",
    "bars": 3
  },
  "Flame Charge": {
    "pvpEnergy": 50,
    "pvpTurns": 1,
    "ms": 3800,
    "pvpPower": 70,
    "pow": 70,
    "eps": 18.42,
    "type": "FIRE",
    "bars": 3
  },
  "Dragon Pulse": {
    "pvpEnergy": 60,
    "pvpTurns": 1,
    "ms": 3600,
    "pvpPower": 90,
    "pow": 90,
    "eps": 13.89,
    "type": "DRAGON",
    "bars": 2
  },
  "Disarming Voice": {
    "pvpEnergy": 45,
    "pvpTurns": 1,
    "ms": 3900,
    "pvpPower": 70,
    "pow": 70,
    "eps": 8.46,
    "type": "FAIRY",
    "bars": 3
  },
  "Psybeam": {
    "pvpEnergy": 60,
    "pvpTurns": 1,
    "ms": 3200,
    "pvpPower": 70,
    "pow": 70,
    "eps": 15.63,
    "type": "PSYCHIC",
    "bars": 2
  },
  "Dig": {
    "pvpEnergy": 80,
    "pvpTurns": 1,
    "ms": 4700,
    "pvpPower": 100,
    "pow": 100,
    "eps": 10.64,
    "type": "GROUND",
    "bars": 2
  },
  "Thunder": {
    "pvpEnergy": 60,
    "pvpTurns": 1,
    "ms": 2400,
    "pvpPower": 100,
    "pow": 100,
    "eps": 41.67,
    "type": "ELECTRIC",
    "bars": 1
  },
  "Submission": {
    "pvpEnergy": 50,
    "pvpTurns": 1,
    "ms": 2200,
    "pvpPower": 60,
    "pow": 60,
    "eps": 22.73,
    "type": "FIGHTING",
    "bars": 2
  },
  "Night Shade": {
    "pvpEnergy": 40,
    "pvpTurns": 1,
    "ms": 2600,
    "pvpPower": 50,
    "pow": 60,
    "eps": 19.23,
    "type": "GHOST",
    "bars": 2
  },
  "Wild Charge": {
    "pvpEnergy": 50,
    "pvpTurns": 1,
    "ms": 2600,
    "pvpPower": 90,
    "pow": 90,
    "eps": 19.23,
    "type": "ELECTRIC",
    "bars": 2
  },
  "Dragon Breath": {
    "pvpEnergy": 3,
    "pvpTurns": 1,
    "ms": 500,
    "pvpPower": 4,
    "pow": 6,
    "eps": 8.0,
    "type": "DRAGON",
    "bars": 1
  },
  "Psyshock": {
    "pvpEnergy": 45,
    "pvpTurns": 1,
    "ms": 2700,
    "pvpPower": 70,
    "pow": 65,
    "eps": 12.22,
    "type": "PSYCHIC",
    "bars": 3
  },
  "Fury Cutter": {
    "pvpEnergy": 4,
    "pvpTurns": 1,
    "ms": 400,
    "pvpPower": 2,
    "pow": 3,
    "eps": 15.0,
    "type": "BUG",
    "bars": 1
  },
  "Twister": {
    "pvpEnergy": 45,
    "pvpTurns": 1,
    "ms": 2800,
    "pvpPower": 45,
    "pow": 45,
    "eps": 11.79,
    "type": "DRAGON",
    "bars": 3
  },
  "Discharge": {
    "pvpEnergy": 45,
    "pvpTurns": 1,
    "ms": 2500,
    "pvpPower": 65,
    "pow": 65,
    "eps": 13.2,
    "type": "ELECTRIC",
    "bars": 3
  },
  "Feint Attack": {
    "pvpEnergy": 6,
    "pvpTurns": 2,
    "ms": 900,
    "pvpPower": 6,
    "pow": 10,
    "eps": 10.0,
    "type": "DARK",
    "bars": 1
  },
  "Low Kick": {
    "pvpEnergy": 5,
    "pvpTurns": 2,
    "ms": 600,
    "pvpPower": 4,
    "pow": 6,
    "eps": 10.0,
    "type": "FIGHTING",
    "bars": 1
  },
  "Splash": {
    "pvpEnergy": 12,
    "pvpTurns": 3,
    "ms": 1730,
    "pvpPower": 0,
    "pow": 0,
    "eps": 11.56,
    "type": "WATER",
    "bars": 1
  },
  "Spark": {
    "pvpEnergy": 8,
    "pvpTurns": 2,
    "ms": 700,
    "pvpPower": 4,
    "pow": 6,
    "eps": 12.85,
    "type": "ELECTRIC",
    "bars": 1
  },
  "Weather Ball Ice": {
    "pvpEnergy": 35,
    "pvpTurns": 1,
    "ms": 1600,
    "pvpPower": 60,
    "pow": 60,
    "eps": 33.0,
    "type": "ICE",
    "bars": 3
  },
  "Blizzard": {
    "pvpEnergy": 75,
    "pvpTurns": 1,
    "ms": 3100,
    "pvpPower": 130,
    "pow": 130,
    "eps": 32.26,
    "type": "ICE",
    "bars": 1
  },
  "Rock Smash": {
    "pvpEnergy": 7,
    "pvpTurns": 3,
    "ms": 1300,
    "pvpPower": 9,
    "pow": 15,
    "eps": 7.69,
    "type": "FIGHTING",
    "bars": 1
  },
  "Flamethrower": {
    "pvpEnergy": 55,
    "pvpTurns": 1,
    "ms": 2200,
    "pvpPower": 90,
    "pow": 70,
    "eps": 22.73,
    "type": "FIRE",
    "bars": 2
  },
  "Cross Poison": {
    "pvpEnergy": 35,
    "pvpTurns": 1,
    "ms": 1500,
    "pvpPower": 40,
    "pow": 40,
    "eps": 22.0,
    "type": "POISON",
    "bars": 3
  },
  "Dazzling Gleam": {
    "pvpEnergy": 70,
    "pvpTurns": 1,
    "ms": 3500,
    "pvpPower": 110,
    "pow": 100,
    "eps": 14.29,
    "type": "FAIRY",
    "bars": 2
  },
  "Play Rough": {
    "pvpEnergy": 60,
    "pvpTurns": 1,
    "ms": 2900,
    "pvpPower": 90,
    "pow": 90,
    "eps": 17.24,
    "type": "FAIRY",
    "bars": 2
  },
  "Rock Throw": {
    "pvpEnergy": 5,
    "pvpTurns": 2,
    "ms": 900,
    "pvpPower": 8,
    "pow": 12,
    "eps": 7.78,
    "type": "ROCK",
    "bars": 1
  },
  "Mirror Coat": {
    "pvpEnergy": 55,
    "pvpTurns": 1,
    "ms": 2600,
    "pvpPower": 60,
    "pow": 60,
    "eps": 19.23,
    "type": "PSYCHIC",
    "bars": 2
  },
  "Bug Bite": {
    "pvpEnergy": 3,
    "pvpTurns": 1,
    "ms": 500,
    "pvpPower": 3,
    "pow": 5,
    "eps": 12.0,
    "type": "BUG",
    "bars": 1
  },
  "Overheat": {
    "pvpEnergy": 80,
    "pvpTurns": 1,
    "ms": 4000,
    "pvpPower": 150,
    "pow": 160,
    "eps": 25.0,
    "type": "FIRE",
    "bars": 1
  },
  "Volt Switch": {
    "pvpEnergy": 10,
    "pvpTurns": 5,
    "ms": 2300,
    "pvpPower": 12,
    "pow": 20,
    "eps": 10.87,
    "type": "ELECTRIC",
    "bars": 1
  },
  "Bubble Beam": {
    "pvpEnergy": 40,
    "pvpTurns": 1,
    "ms": 1900,
    "pvpPower": 45,
    "pow": 45,
    "eps": 17.37,
    "type": "WATER",
    "bars": 3
  },
  "Fire Fang": {
    "pvpEnergy": 5,
    "pvpTurns": 2,
    "ms": 900,
    "pvpPower": 7,
    "pow": 11,
    "eps": 8.89,
    "type": "FIRE",
    "bars": 1
  },
  "Brave Bird": {
    "pvpEnergy": 55,
    "pvpTurns": 1,
    "ms": 2000,
    "pvpPower": 90,
    "pow": 90,
    "eps": 50.0,
    "type": "FLYING",
    "bars": 1
  },
  "Icy Wind": {
    "pvpEnergy": 45,
    "pvpTurns": 1,
    "ms": 3300,
    "pvpPower": 60,
    "pow": 60,
    "eps": 10.0,
    "type": "ICE",
    "bars": 3
  },
  "Rock Blast": {
    "pvpEnergy": 40,
    "pvpTurns": 1,
    "ms": 2100,
    "pvpPower": 50,
    "pow": 50,
    "eps": 15.71,
    "type": "ROCK",
    "bars": 3
  },
  "Close Combat": {
    "pvpEnergy": 60,
    "pvpTurns": 1,
    "ms": 2300,
    "pvpPower": 100,
    "pow": 100,
    "eps": 43.48,
    "type": "FIGHTING",
    "bars": 1
  },
  "Seed Bomb": {
    "pvpEnergy": 40,
    "pvpTurns": 1,
    "ms": 2100,
    "pvpPower": 55,
    "pow": 55,
    "eps": 15.71,
    "type": "GRASS",
    "bars": 3
  },
  "Metal Claw": {
    "pvpEnergy": 6,
    "pvpTurns": 2,
    "ms": 700,
    "pvpPower": 5,
    "pow": 8,
    "eps": 10.0,
    "type": "STEEL",
    "bars": 1
  },
  "Bubble": {
    "pvpEnergy": 11,
    "pvpTurns": 3,
    "ms": 1200,
    "pvpPower": 8,
    "pow": 12,
    "eps": 11.67,
    "type": "WATER",
    "bars": 1
  },
  "Sand Tomb": {
    "pvpEnergy": 60,
    "pvpTurns": 1,
    "ms": 4000,
    "pvpPower": 80,
    "pow": 80,
    "eps": 12.5,
    "type": "GROUND",
    "bars": 2
  },
  "Counter": {
    "pvpEnergy": 7,
    "pvpTurns": 2,
    "ms": 900,
    "pvpPower": 8,
    "pow": 12,
    "eps": 8.89,
    "type": "FIGHTING",
    "bars": 1
  },
  "Iron Tail": {
    "pvpEnergy": 6,
    "pvpTurns": 3,
    "ms": 1100,
    "pvpPower": 9,
    "pow": 15,
    "eps": 6.36,
    "type": "STEEL",
    "bars": 1
  },
  "Thunder Shock": {
    "pvpEnergy": 9,
    "pvpTurns": 2,
    "ms": 600,
    "pvpPower": 3,
    "pow": 5,
    "eps": 13.33,
    "type": "ELECTRIC",
    "bars": 1
  },
  "Body Slam": {
    "pvpEnergy": 35,
    "pvpTurns": 1,
    "ms": 1900,
    "pvpPower": 60,
    "pow": 50,
    "eps": 17.37,
    "type": "NORMAL",
    "bars": 3
  },
  "Frost Breath": {
    "pvpEnergy": 5,
    "pvpTurns": 2,
    "ms": 900,
    "pvpPower": 7,
    "pow": 10,
    "eps": 8.89,
    "type": "ICE",
    "bars": 1
  },
  "Mud Shot": {
    "pvpEnergy": 9,
    "pvpTurns": 2,
    "ms": 600,
    "pvpPower": 3,
    "pow": 5,
    "eps": 11.67,
    "type": "GROUND",
    "bars": 1
  },
  "Leaf Blade": {
    "pvpEnergy": 35,
    "pvpTurns": 2,
    "ms": 2400,
    "pvpPower": 70,
    "pow": 70,
    "eps": 13.75,
    "type": "GRASS",
    "bars": 3
  },
  "Vice Grip": {
    "pvpEnergy": 40,
    "pvpTurns": 1,
    "ms": 1900,
    "pvpPower": 40,
    "pow": 35,
    "eps": 17.37,
    "type": "NORMAL",
    "bars": 3
  },
  "Gunk Shot": {
    "pvpEnergy": 75,
    "pvpTurns": 1,
    "ms": 3100,
    "pvpPower": 130,
    "pow": 130,
    "eps": 32.26,
    "type": "POISON",
    "bars": 1
  },
  "Frenzy Plant": {
    "pvpEnergy": 45,
    "pvpTurns": 1,
    "ms": 2600,
    "pvpPower": 100,
    "pow": 100,
    "eps": 11.67,
    "type": "GRASS",
    "bars": 2
  },
  "Karate Chop": {
    "pvpEnergy": 7,
    "pvpTurns": 2,
    "ms": 800,
    "pvpPower": 5,
    "pow": 8,
    "eps": 12.5,
    "type": "FIGHTING",
    "bars": 1
  },
  "Struggle": {
    "pvpEnergy": 100,
    "pvpTurns": 1,
    "ms": 2200,
    "pvpPower": 35,
    "pow": 35,
    "eps": 22.0,
    "type": "NORMAL",
    "bars": 2
  },
  "Quick Attack": {
    "pvpEnergy": 7,
    "pvpTurns": 2,
    "ms": 800,
    "pvpPower": 5,
    "pow": 8,
    "eps": 12.5,
    "type": "NORMAL",
    "bars": 1
  },
  "Posion Jab": {
    "pvpEnergy": 7,
    "pvpTurns": 2,
    "ms": 800,
    "pvpPower": 6,
    "pow": 10,
    "eps": 8.75,
    "type": "POISON",
    "bars": 1
  },
  "Take Down": {
    "pvpEnergy": 8,
    "pvpTurns": 3,
    "ms": 1200,
    "pvpPower": 5,
    "pow": 8,
    "eps": 8.33,
    "type": "NORMAL",
    "bars": 1
  },
  "Power Whip": {
    "pvpEnergy": 50,
    "pvpTurns": 1,
    "ms": 2600,
    "pvpPower": 90,
    "pow": 90,
    "eps": 19.23,
    "type": "GRASS",
    "bars": 2
  },
  "Takcl": {
    "pvpEnergy": 2,
    "pvpTurns": 1,
    "ms": 500,
    "pvpPower": 3,
    "pow": 5,
    "eps": 10.0,
    "type": "NORMAL",
    "bars": 1
  },
  "Flash Cannon": {
    "pvpEnergy": 65,
    "pvpTurns": 1,
    "ms": 2700,
    "pvpPower": 110,
    "pow": 100,
    "eps": 37.04,
    "type": "STEEL",
    "bars": 1
  },
  "Drill Peck": {
    "pvpEnergy": 40,
    "pvpTurns": 1,
    "ms": 2300,
    "pvpPower": 60,
    "pow": 60,
    "eps": 14.35,
    "type": "FLYING",
    "bars": 3
  },
  "Smack Down": {
    "pvpEnergy": 8,
    "pvpTurns": 3,
    "ms": 1200,
    "pvpPower": 12,
    "pow": 16,
    "eps": 6.67,
    "type": "ROCK",
    "bars": 1
  },
  "Poison Sting": {
    "pvpEnergy": 6,
    "pvpTurns": 2,
    "ms": 600,
    "pvpPower": 3,
    "pow": 5,
    "eps": 11.67,
    "type": "POISON",
    "bars": 1
  },
  "Air Cutter": {
    "pvpEnergy": 55,
    "pvpTurns": 1,
    "ms": 2700,
    "pvpPower": 60,
    "pow": 60,
    "eps": 18.52,
    "type": "FLYING",
    "bars": 2
  },
  "Night Slash": {
    "pvpEnergy": 40,
    "pvpTurns": 1,
    "ms": 2200,
    "pvpPower": 50,
    "pow": 50,
    "eps": 15.0,
    "type": "DARK",
    "bars": 3
  },
  "Psycho Boost": {
    "pvpEnergy": 40,
    "pvpTurns": 1,
    "ms": 4000,
    "pvpPower": 70,
    "pow": 70,
    "eps": 12.5,
    "type": "PSYCHIC",
    "bars": 2
  },
  "Mud Bomb": {
    "pvpEnergy": 40,
    "pvpTurns": 1,
    "ms": 2300,
    "pvpPower": 55,
    "pow": 55,
    "eps": 14.35,
    "type": "GROUND",
    "bars": 3
  },
  "Low Sweep": {
    "pvpEnergy": 40,
    "pvpTurns": 1,
    "ms": 1900,
    "pvpPower": 40,
    "pow": 40,
    "eps": 17.37,
    "type": "FIGHTING",
    "bars": 3
  },
  "Draining Kiss": {
    "pvpEnergy": 55,
    "pvpTurns": 1,
    "ms": 2600,
    "pvpPower": 60,
    "pow": 60,
    "eps": 19.23,
    "type": "FAIRY",
    "bars": 2
  },
  "Fire Punch": {
    "pvpEnergy": 40,
    "pvpTurns": 1,
    "ms": 2200,
    "pvpPower": 55,
    "pow": 55,
    "eps": 15.0,
    "type": "FIRE",
    "bars": 3
  },
  "Ice Punch": {
    "pvpEnergy": 40,
    "pvpTurns": 1,
    "ms": 1900,
    "pvpPower": 55,
    "pow": 50,
    "eps": 17.37,
    "type": "ICE",
    "bars": 3
  },
  "Acid": {"pvpEnergy": 5, "pvpTurns": 2, "ms": 800, "pvpPower": 6, "pow": 9, "eps": 10.0, "type": "POISON", "bars": 1},
  "Aurora Beam": {
    "pvpEnergy": 60,
    "pvpTurns": 1,
    "ms": 3500,
    "pvpPower": 80,
    "pow": 80,
    "eps": 14.08,
    "type": "ICE",
    "bars": 2
  },
  "Snarl": {
    "pvpEnergy": 10,
    "pvpTurns": 3,
    "ms": 1100,
    "pvpPower": 8,
    "pow": 12,
    "eps": 10.91,
    "type": "DARK",
    "bars": 1
  },
  "Sludge Bomb": {
    "pvpEnergy": 50,
    "pvpTurns": 1,
    "ms": 2300,
    "pvpPower": 80,
    "pow": 80,
    "eps": 21.74,
    "type": "POISON",
    "bars": 2
  },
  "Cross Chop": {
    "pvpEnergy": 35,
    "pvpTurns": 1,
    "ms": 1500,
    "pvpPower": 50,
    "pow": 50,
    "eps": 33.33,
    "type": "FIGHTING",
    "bars": 2
  },
  "Astonish": {
    "pvpEnergy": 9,
    "pvpTurns": 3,
    "ms": 1100,
    "pvpPower": 5,
    "pow": 8,
    "eps": 12.73,
    "type": "GHOST",
    "bars": 1
  },
  "Struggle Bug": {
    "pvpEnergy": 8,
    "pvpTurns": 3,
    "ms": 1500,
    "pvpPower": 9,
    "pow": 15,
    "eps": 10.0,
    "type": "BUG",
    "bars": 1
  },
  "Aerial Ace": {
    "pvpEnergy": 45,
    "pvpTurns": 1,
    "ms": 2400,
    "pvpPower": 55,
    "pow": 55,
    "eps": 13.75,
    "type": "FLYING",
    "bars": 3
  },
  "X Scissor": {
    "pvpEnergy": 35,
    "pvpTurns": 1,
    "ms": 1600,
    "pvpPower": 45,
    "pow": 45,
    "eps": 20.63,
    "type": "BUG",
    "bars": 3
  },
  "Confusion": {
    "pvpEnergy": 12,
    "pvpTurns": 4,
    "ms": 1600,
    "pvpPower": 16,
    "pow": 20,
    "eps": 9.38,
    "type": "PSYCHIC",
    "bars": 1
  },
  "Power Gem": {
    "pvpEnergy": 60,
    "pvpTurns": 1,
    "ms": 2900,
    "pvpPower": 80,
    "pow": 80,
    "eps": 17.24,
    "type": "ROCK",
    "bars": 2
  },
  "Megahorn": {
    "pvpEnergy": 55,
    "pvpTurns": 1,
    "ms": 2200,
    "pvpPower": 90,
    "pow": 90,
    "eps": 45.45,
    "type": "BUG",
    "bars": 1
  },
  "Bubblebeam": {
    "pvpEnergy": 40,
    "pvpTurns": 1,
    "ms": 1900,
    "pvpPower": 45,
    "pow": 45,
    "eps": 1.0,
    "type": "WATER",
    "bars": 3
  },
  "Scratch": {
    "pvpEnergy": 2,
    "pvpTurns": 1,
    "ms": 500,
    "pvpPower": 4,
    "pow": 6,
    "eps": 8.0,
    "type": "NORMAL",
    "bars": 1
  },
  "Bug Buzz": {
    "pvpEnergy": 60,
    "pvpTurns": 1,
    "ms": 3700,
    "pvpPower": 90,
    "pow": 90,
    "eps": 13.51,
    "type": "BUG",
    "bars": 2
  },
  "Earthquake": {
    "pvpEnergy": 65,
    "pvpTurns": 1,
    "ms": 3600,
    "pvpPower": 120,
    "pow": 120,
    "eps": 27.78,
    "type": "GROUND",
    "bars": 1
  },
  "Weather Ball Water": {
    "pvpEnergy": 35,
    "pvpTurns": 1,
    "ms": 1600,
    "pvpPower": 60,
    "pow": 60,
    "eps": 33.0,
    "type": "WATER",
    "bars": 3
  },
  "Petal Blizzard": {
    "pvpEnergy": 65,
    "pvpTurns": 1,
    "ms": 2600,
    "pvpPower": 110,
    "pow": 110,
    "eps": 38.46,
    "type": "GRASS",
    "bars": 1
  },
  "Rock Slide": {
    "pvpEnergy": 45,
    "pvpTurns": 1,
    "ms": 2700,
    "pvpPower": 80,
    "pow": 80,
    "eps": 18.52,
    "type": "ROCK",
    "bars": 2
  },
  "Yawn": {
    "pvpEnergy": 12,
    "pvpTurns": 3,
    "ms": 1700,
    "pvpPower": 0,
    "pow": 0,
    "eps": 8.82,
    "type": "NORMAL",
    "bars": 1
  },
  "Powder Snow": {
    "pvpEnergy": 8,
    "pvpTurns": 2,
    "ms": 1000,
    "pvpPower": 4,
    "pow": 6,
    "eps": 15.0,
    "type": "ICE",
    "bars": 1
  },
  "Doom Desire": {
    "pvpEnergy": 35,
    "pvpTurns": 1,
    "ms": 1700,
    "pvpPower": 80,
    "pow": 80,
    "eps": 29.4,
    "type": "STEEL",
    "bars": 2
  },
  "Bullet Seed": {
    "pvpEnergy": 11,
    "pvpTurns": 3,
    "ms": 1100,
    "pvpPower": 5,
    "pow": 8,
    "eps": 12.73,
    "type": "GRASS",
    "bars": 1
  },
  "Wing Attack": {
    "pvpEnergy": 7,
    "pvpTurns": 2,
    "ms": 800,
    "pvpPower": 5,
    "pow": 8,
    "eps": 11.25,
    "type": "FLYING",
    "bars": 1
  },
  "Signal Beam": {
    "pvpEnergy": 55,
    "pvpTurns": 1,
    "ms": 2900,
    "pvpPower": 75,
    "pow": 75,
    "eps": 17.24,
    "type": "BUG",
    "bars": 2
  },
  "Shadow Punch": {
    "pvpEnergy": 35,
    "pvpTurns": 1,
    "ms": 1700,
    "pvpPower": 40,
    "pow": 40,
    "eps": 19.41,
    "type": "GHOST",
    "bars": 3
  },
  "Energy Ball": {
    "pvpEnergy": 60,
    "pvpTurns": 1,
    "ms": 3900,
    "pvpPower": 90,
    "pow": 90,
    "eps": 12.82,
    "type": "GRASS",
    "bars": 2
  },
  "Water Gun": {
    "pvpEnergy": 3,
    "pvpTurns": 1,
    "ms": 500,
    "pvpPower": 3,
    "pow": 5,
    "eps": 10.0,
    "type": "WATER",
    "bars": 1
  },
  "Lick": {"pvpEnergy": 3, "pvpTurns": 1, "ms": 500, "pvpPower": 3, "pow": 5, "eps": 12.0, "type": "GHOST", "bars": 1},
  "Last Resort": {
    "pvpEnergy": 55,
    "pvpTurns": 1,
    "ms": 2900,
    "pvpPower": 90,
    "pow": 90,
    "eps": 11.67,
    "type": "NORMAL",
    "bars": 2
  },
  "Bone Club": {
    "pvpEnergy": 35,
    "pvpTurns": 1,
    "ms": 1600,
    "pvpPower": 40,
    "pow": 40,
    "eps": 20.63,
    "type": "GROUND",
    "bars": 3
  },
  "Vine Whip": {
    "pvpEnergy": 8,
    "pvpTurns": 2,
    "ms": 600,
    "pvpPower": 5,
    "pow": 7,
    "eps": 10.0,
    "type": "GRASS",
    "bars": 1
  },
  "Hyper Beam": {
    "pvpEnergy": 80,
    "pvpTurns": 1,
    "ms": 3800,
    "pvpPower": 150,
    "pow": 150,
    "eps": 26.32,
    "type": "NORMAL",
    "bars": 1
  },
  "Gyro Ball": {
    "pvpEnergy": 60,
    "pvpTurns": 1,
    "ms": 3300,
    "pvpPower": 80,
    "pow": 80,
    "eps": 15.15,
    "type": "STEEL",
    "bars": 2
  },
  "Hydro Cannon": {
    "pvpEnergy": 40,
    "pvpTurns": 1,
    "ms": 1900,
    "pvpPower": 90,
    "pow": 90,
    "eps": 11.67,
    "type": "WATER",
    "bars": 2
  },
  "Weather Ball Fire": {
    "pvpEnergy": 35,
    "pvpTurns": 1,
    "ms": 1600,
    "pvpPower": 60,
    "pow": 60,
    "eps": 33.0,
    "type": "FIRE",
    "bars": 3
  },
  "Focus Blast": {
    "pvpEnergy": 75,
    "pvpTurns": 2,
    "ms": 3500,
    "pvpPower": 150,
    "pow": 140,
    "eps": 28.57,
    "type": "FIGHTING",
    "bars": 1
  },
  "Hyper Fang": {
    "pvpEnergy": 50,
    "pvpTurns": 1,
    "ms": 2500,
    "pvpPower": 80,
    "pow": 80,
    "eps": 20.0,
    "type": "NORMAL",
    "bars": 2
  },
  "Mud Slap": {
    "pvpEnergy": 8,
    "pvpTurns": 3,
    "ms": 1400,
    "pvpPower": 9,
    "pow": 15,
    "eps": 8.57,
    "type": "GROUND",
    "bars": 1
  },
  "Aqua Jet": {
    "pvpEnergy": 45,
    "pvpTurns": 1,
    "ms": 2600,
    "pvpPower": 45,
    "pow": 45,
    "eps": 12.69,
    "type": "WATER",
    "bars": 3
  },
  "Sucker Punch": {
    "pvpEnergy": 7,
    "pvpTurns": 2,
    "ms": 700,
    "pvpPower": 5,
    "pow": 7,
    "eps": 11.43,
    "type": "DARK",
    "bars": 1
  },
  "Foul Play": {
    "pvpEnergy": 45,
    "pvpTurns": 1,
    "ms": 2000,
    "pvpPower": 70,
    "pow": 70,
    "eps": 25.0,
    "type": "DARK",
    "bars": 2
  },
  "Psychic": {
    "pvpEnergy": 70,
    "pvpTurns": 1,
    "ms": 2800,
    "pvpPower": 100,
    "pow": 100,
    "eps": 35.71,
    "type": "PSYCHIC",
    "bars": 1
  },
  "Pound": {
    "pvpEnergy": 4,
    "pvpTurns": 2,
    "ms": 600,
    "pvpPower": 5,
    "pow": 7,
    "eps": 10.0,
    "type": "NORMAL",
    "bars": 1
  },
  "Shadow Claw": {
    "pvpEnergy": 8,
    "pvpTurns": 2,
    "ms": 700,
    "pvpPower": 6,
    "pow": 9,
    "eps": 8.57,
    "type": "GHOST",
    "bars": 1
  },
  "Stomp": {
    "pvpEnergy": 40,
    "pvpTurns": 1,
    "ms": 1700,
    "pvpPower": 55,
    "pow": 55,
    "eps": 29.41,
    "type": "NORMAL",
    "bars": 2
  },
  "Hex": {
    "pvpEnergy": 11,
    "pvpTurns": 3,
    "ms": 1200,
    "pvpPower": 6,
    "pow": 10,
    "eps": 12.5,
    "type": "GHOST",
    "bars": 1
  },
  "Psycho Cut": {
    "pvpEnergy": 9,
    "pvpTurns": 2,
    "ms": 600,
    "pvpPower": 3,
    "pow": 5,
    "eps": 13.33,
    "type": "PSYCHIC",
    "bars": 1
  },
  "Thunderbolt": {
    "pvpEnergy": 55,
    "pvpTurns": 1,
    "ms": 2500,
    "pvpPower": 90,
    "pow": 80,
    "eps": 20.0,
    "type": "ELECTRIC",
    "bars": 2
  },
  "Zap Cannon": {
    "pvpEnergy": 80,
    "pvpTurns": 1,
    "ms": 3700,
    "pvpPower": 150,
    "pow": 140,
    "eps": 27.03,
    "type": "ELECTRIC",
    "bars": 1
  }
};

export default MOVES_DATA
