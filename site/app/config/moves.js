const MOVES_DATA = {
  "Ominous Wind": {
    "ms": 2300,
    "pow": 50,
    "eps": 14.35,
    "type": "GHOST",
    "bars": 3
  },
  "Meteor Mash": {
    "ms": 2600,
    "pow": 100,
    "eps": 19.2,
    "type": "STEEL",
    "bars": 2
  },
  "Ice Shard": {
    "ms": 1200,
    "pow": 12,
    "eps": 10.0,
    "type": "ICE",
    "bars": 1
  },
  "Silver Wind": {
    "ms": 3700,
    "pow": 70,
    "eps": 8.92,
    "type": "BUG",
    "bars": 3
  },
  "Bite": {
    "ms": 500,
    "pow": 6,
    "eps": 8.0,
    "type": "DARK",
    "bars": 1
  },
  "Magnet Bomb": {
    "ms": 2800,
    "pow": 70,
    "eps": 11.79,
    "type": "STEEL",
    "bars": 3
  },
  "Draco Meteor": {
    "ms": 3600,
    "pow": 150,
    "eps": 27.78,
    "type": "DRAGON",
    "bars": 1
  },
  "Shadow Sneak": {
    "ms": 2900,
    "pow": 50,
    "eps": 11.38,
    "type": "GHOST",
    "bars": 3
  },
  "Iron Head": {
    "ms": 1900,
    "pow": 60,
    "eps": 26.32,
    "type": "STEEL",
    "bars": 2
  },
  "Surf": {
    "ms": 1700,
    "pow": 65,
    "eps": 29.41,
    "type": "WATER",
    "bars": 2
  },
  "Sludge Wave": {
    "ms": 3200,
    "pow": 110,
    "eps": 31.25,
    "type": "POISON",
    "bars": 1
  },
  "Hydro Pump": {
    "ms": 3300,
    "pow": 130,
    "eps": 30.3,
    "type": "WATER",
    "bars": 1
  },
  "Peck": {
    "ms": 1000,
    "pow": 10,
    "eps": 10.0,
    "type": "FLYING",
    "bars": 1
  },
  "Heat Wave": {
    "ms": 3000,
    "pow": 95,
    "eps": 33.33,
    "type": "FIRE",
    "bars": 1
  },
  "Bulldoze": {
    "ms": 3500,
    "pow": 80,
    "eps": 14.29,
    "type": "GROUND",
    "bars": 2
  },
  "Poison Jab": {
    "ms": 800,
    "pow": 10,
    "eps": 8.75,
    "type": "POISON",
    "bars": 1
  },
  "Ice Beam": {
    "ms": 3300,
    "pow": 90,
    "eps": 15.15,
    "type": "ICE",
    "bars": 2
  },
  "Bullet Punch": {
    "ms": 900,
    "pow": 9,
    "eps": 11.11,
    "type": "STEEL",
    "bars": 1
  },
  "Crunch": {
    "ms": 3200,
    "pow": 70,
    "eps": 10.31,
    "type": "DARK",
    "bars": 3
  },
  "Future Sight": {
    "ms": 2700,
    "pow": 120,
    "eps": 37.04,
    "type": "PSYCHIC",
    "bars": 1
  },
  "Cut": {
    "ms": 500,
    "pow": 5,
    "eps": 10.0,
    "type": "NORMAL",
    "bars": 1
  },
  "Hidden Power": {
    "ms": 1500,
    "pow": 15,
    "eps": 10.0,
    "type": "NORMAL",
    "bars": 1
  },
  "Drill Run": {
    "ms": 2800,
    "pow": 80,
    "eps": 17.86,
    "type": "GROUND",
    "bars": 2
  },
  "Ancient Power": {
    "ms": 3500,
    "pow": 70,
    "eps": 9.43,
    "type": "ROCK",
    "bars": 3
  },
  "Dragon Claw": {
    "ms": 1700,
    "pow": 50,
    "eps": 19.41,
    "type": "DRAGON",
    "bars": 3
  },
  "Avalanche": {
    "ms": 2700,
    "pow": 90,
    "eps": 18.52,
    "type": "ICE",
    "bars": 2
  },
  "Flame Burst": {
    "ms": 2600,
    "pow": 70,
    "eps": 19.23,
    "type": "FIRE",
    "bars": 2
  },
  "Moonblast": {
    "ms": 3900,
    "pow": 130,
    "eps": 25.64,
    "type": "FAIRY",
    "bars": 1
  },
  "Outrage": {
    "ms": 3900,
    "pow": 110,
    "eps": 12.82,
    "type": "DRAGON",
    "bars": 2
  },
  "Tackle": {
    "ms": 500,
    "pow": 5,
    "eps": 10.0,
    "type": "NORMAL",
    "bars": 1
  },
  "Rock Tomb": {
    "ms": 3200,
    "pow": 70,
    "eps": 15.63,
    "type": "STEEL",
    "bars": 2
  },
  "Water Pulse": {
    "ms": 3200,
    "pow": 70,
    "eps": 15.63,
    "type": "WATER",
    "bars": 2
  },
  "Horn Attack": {
    "ms": 1850,
    "pow": 40,
    "eps": 17.84,
    "type": "NORMAL",
    "bars": 3
  },
  "Steel Wing": {
    "ms": 800,
    "pow": 11,
    "eps": 7.5,
    "type": "STEEL",
    "bars": 1
  },
  "Razor Leaf": {
    "ms": 1000,
    "pow": 13,
    "eps": 7.0,
    "type": "GRASS",
    "bars": 1
  },
  "Fire Spin": {
    "ms": 1100,
    "pow": 14,
    "eps": 9.09,
    "type": "FIRE",
    "bars": 1
  },
  "Ember": {
    "ms": 1000,
    "pow": 10,
    "eps": 10.0,
    "type": "FIRE",
    "bars": 1
  },
  "Poison Fang": {
    "ms": 1700,
    "pow": 35,
    "eps": 19.41,
    "type": "POISON",
    "bars": 3
  },
  "Zen Headbutt": {
    "ms": 1100,
    "pow": 12,
    "eps": 9.09,
    "type": "PSYCHIC",
    "bars": 1
  },
  "Swift": {
    "ms": 2800,
    "pow": 60,
    "eps": 17.86,
    "type": "NORMAL",
    "bars": 2
  },
  "Infestation": {
    "ms": 1100,
    "pow": 10,
    "eps": 12.73,
    "type": "BUG",
    "bars": 1
  },
  "Thunder Punch": {
    "ms": 1800,
    "pow": 45,
    "eps": 18.33,
    "type": "ELECTRIC",
    "bars": 3
  },
  "Extrasensory": {
    "ms": 1100,
    "pow": 12,
    "eps": 10.91,
    "type": "PSYCHIC",
    "bars": 1
  },
  "Solarbeam": {
    "ms": 4900,
    "pow": 180,
    "eps": 20.41,
    "type": "GRASS",
    "bars": 1
  },
  "Fire Blast": {
    "ms": 4200,
    "pow": 140,
    "eps": 23.81,
    "type": "FIRE",
    "bars": 1
  },
  "Heavy Slam": {
    "ms": 2100,
    "pow": 70,
    "eps": 23.81,
    "type": "STEEL",
    "bars": 2
  },
  "Wrap": {
    "ms": 2900,
    "pow": 60,
    "eps": 11.38,
    "type": "NORMAL",
    "bars": 3
  },
  "Waterfall": {
    "ms": 1200,
    "pow": 16,
    "eps": 6.67,
    "type": "WATER",
    "bars": 1
  },
  "Sky Attack": {
    "ms": 2000,
    "pow": 70,
    "eps": 25.0,
    "type": "FLYING",
    "bars": 2
  },
  "Dark Pulse": {
    "ms": 3000,
    "pow": 80,
    "eps": 16.67,
    "type": "DARK",
    "bars": 2
  },
  "Air Slash": {
    "ms": 1200,
    "pow": 14,
    "eps": 8.33,
    "type": "FLYING",
    "bars": 1
  },
  "Stone Edge": {
    "ms": 2300,
    "pow": 100,
    "eps": 43.5,
    "type": "ROCK",
    "bars": 1
  },
  "Grass Knot": {
    "ms": 2600,
    "pow": 90,
    "eps": 19.23,
    "type": "GRASS",
    "bars": 2
  },
  "Dragon Tail": {
    "ms": 1100,
    "pow": 15,
    "eps": 8.18,
    "type": "DRAGON",
    "bars": 1
  },
  "Dynamic Punch": {
    "ms": 2700,
    "pow": 90,
    "eps": 18.52,
    "type": "FIGHTING",
    "bars": 2
  },
  "Blast Burn": {
    "ms": 3300,
    "pow": 110,
    "eps": 27.03,
    "type": "FIRE",
    "bars": 2
  },
  "Shadow Ball": {
    "ms": 3000,
    "pow": 100,
    "eps": 16.67,
    "type": "GHOST",
    "bars": 2
  },
  "Charge Beam": {
    "ms": 1100,
    "pow": 8,
    "eps": 13.64,
    "type": "ELECTRIC",
    "bars": 1
  },
  "Aqua Tail": {
    "ms": 1900,
    "pow": 50,
    "eps": 17.37,
    "type": "WATER",
    "bars": 3
  },
  "Hurricane": {
    "ms": 2700,
    "pow": 110,
    "eps": 37.04,
    "type": "FLYING",
    "bars": 1
  },
  "Brick Break": {
    "ms": 1600,
    "pow": 40,
    "eps": 20.64,
    "type": "FIGHTING",
    "bars": 3
  },
  "Dragon Pulse": {
    "ms": 3600,
    "pow": 90,
    "eps": 13.89,
    "type": "DRAGON",
    "bars": 2
  },
  "Disarming Voice": {
    "ms": 3900,
    "pow": 70,
    "eps": 8.46,
    "type": "FAIRY",
    "bars": 3
  },
  "Psybeam": {
    "ms": 3200,
    "pow": 70,
    "eps": 15.63,
    "type": "PSYCHIC",
    "bars": 2
  },
  "Dig": {
    "ms": 4700,
    "pow": 100,
    "eps": 10.64,
    "type": "GROUND",
    "bars": 2
  },
  "Thunder": {
    "ms": 2400,
    "pow": 100,
    "eps": 41.67,
    "type": "ELECTRIC",
    "bars": 1
  },
  "Submission": {
    "ms": 2200,
    "pow": 60,
    "eps": 22.73,
    "type": "FIGHTING",
    "bars": 2
  },
  "Night Shade": {
    "ms": 2600,
    "pow": 60,
    "eps": 19.23,
    "type": "GHOST",
    "bars": 2
  },
  "Wild Charge": {
    "ms": 2600,
    "pow": 90,
    "eps": 19.23,
    "type": "ELECTRIC",
    "bars": 2
  },
  "Dragon Breath": {
    "ms": 500,
    "pow": 6,
    "eps": 8.0,
    "type": "DRAGON",
    "bars": 1
  },
  "Psyshock": {
    "ms": 2700,
    "pow": 65,
    "eps": 12.22,
    "type": "PSYCHIC",
    "bars": 3
  },
  "Fury Cutter": {
    "ms": 400,
    "pow": 3,
    "eps": 15.0,
    "type": "BUG",
    "bars": 1
  },
  "Twister": {
    "ms": 2800,
    "pow": 45,
    "eps": 11.79,
    "type": "DRAGON",
    "bars": 3
  },
  "Discharge": {
    "ms": 2500,
    "pow": 65,
    "eps": 13.2,
    "type": "ELECTRIC",
    "bars": 3
  },
  "Feint Attack": {
    "ms": 900,
    "pow": 10,
    "eps": 10.0,
    "type": "DARK",
    "bars": 1
  },
  "Low Kick": {
    "ms": 600,
    "pow": 6,
    "eps": 10.0,
    "type": "FIGHTING",
    "bars": 1
  },
  "Splash": {
    "ms": 1730,
    "pow": 0,
    "eps": 11.56,
    "type": "WATER",
    "bars": 1
  },
  "Spark": {
    "ms": 700,
    "pow": 6,
    "eps": 12.85,
    "type": "ELECTRIC",
    "bars": 1
  },
  "Weather Ball Ice": {
    "ms": 1600,
    "pow": 60,
    "eps": 33.0,
    "type": "ICE",
    "bars": 3
  },
  "Blizzard": {
    "ms": 3100,
    "pow": 130,
    "eps": 32.26,
    "type": "ICE",
    "bars": 1
  },
  "Rock Smash": {
    "ms": 1300,
    "pow": 15,
    "eps": 7.69,
    "type": "FIGHTING",
    "bars": 1
  },
  "Flamethrower": {
    "ms": 2200,
    "pow": 70,
    "eps": 22.73,
    "type": "FIRE",
    "bars": 2
  },
  "Cross Poison": {
    "ms": 1500,
    "pow": 40,
    "eps": 22.0,
    "type": "POISON",
    "bars": 3
  },
  "Dazzling Gleam": {
    "ms": 3500,
    "pow": 100,
    "eps": 14.29,
    "type": "FAIRY",
    "bars": 2
  },
  "Play Rough": {
    "ms": 2900,
    "pow": 90,
    "eps": 17.24,
    "type": "FAIRY",
    "bars": 2
  },
  "Rock Throw": {
    "ms": 900,
    "pow": 12,
    "eps": 7.78,
    "type": "ROCK",
    "bars": 1
  },
  "Mirror Coat": {
    "ms": 2600,
    "pow": 60,
    "eps": 19.23,
    "type": "PSYCHIC",
    "bars": 2
  },
  "Bug Bite": {
    "ms": 500,
    "pow": 5,
    "eps": 12.0,
    "type": "BUG",
    "bars": 1
  },
  "Overheat": {
    "ms": 4000,
    "pow": 160,
    "eps": 25.0,
    "type": "FIRE",
    "bars": 1
  },
  "Volt Switch": {
    "ms": 2300,
    "pow": 20,
    "eps": 10.87,
    "type": "ELECTRIC",
    "bars": 1
  },
  "Bubble Beam": {
    "ms": 1900,
    "pow": 45,
    "eps": 17.37,
    "type": "WATER",
    "bars": 3
  },
  "Fire Fang": {
    "ms": 900,
    "pow": 11,
    "eps": 8.89,
    "type": "FIRE",
    "bars": 1
  },
  "Brave Bird": {
    "ms": 2000,
    "pow": 90,
    "eps": 50.0,
    "type": "FLYING",
    "bars": 1
  },
  "Icy Wind": {
    "ms": 3300,
    "pow": 60,
    "eps": 10.0,
    "type": "ICE",
    "bars": 3
  },
  "Rock Blast": {
    "ms": 2100,
    "pow": 50,
    "eps": 15.71,
    "type": "ROCK",
    "bars": 3
  },
  "Close Combat": {
    "ms": 2300,
    "pow": 100,
    "eps": 43.48,
    "type": "FIGHTING",
    "bars": 1
  },
  "Seed Bomb": {
    "ms": 2100,
    "pow": 55,
    "eps": 15.71,
    "type": "GRASS",
    "bars": 3
  },
  "Metal Claw": {
    "ms": 700,
    "pow": 8,
    "eps": 10.0,
    "type": "STEEL",
    "bars": 1
  },
  "Bubble": {
    "ms": 1200,
    "pow": 12,
    "eps": 11.67,
    "type": "WATER",
    "bars": 1
  },
  "Sand Tomb": {
    "ms": 4000,
    "pow": 80,
    "eps": 12.5,
    "type": "GROUND",
    "bars": 2
  },
  "Counter": {
    "ms": 900,
    "pow": 12,
    "eps": 8.89,
    "type": "FIGHTING",
    "bars": 1
  },
  "Iron Tail": {
    "ms": 1100,
    "pow": 15,
    "eps": 6.36,
    "type": "STEEL",
    "bars": 1
  },
  "Thunder Shock": {
    "ms": 600,
    "pow": 5,
    "eps": 13.33,
    "type": "ELECTRIC",
    "bars": 1
  },
  "Body Slam": {
    "ms": 1900,
    "pow": 50,
    "eps": 17.37,
    "type": "NORMAL",
    "bars": 3
  },
  "Frost Breath": {
    "ms": 900,
    "pow": 10,
    "eps": 8.89,
    "type": "ICE",
    "bars": 1
  },
  "Mud Shot": {
    "ms": 600,
    "pow": 5,
    "eps": 11.67,
    "type": "GROUND",
    "bars": 1
  },
  "Leaf Blade": {
    "ms": 2400,
    "pow": 70,
    "eps": 13.75,
    "type": "GRASS",
    "bars": 3
  },
  "Vice Grip": {
    "ms": 1900,
    "pow": 35,
    "eps": 17.37,
    "type": "NORMAL",
    "bars": 3
  },
  "Gunk Shot": {
    "ms": 3100,
    "pow": 130,
    "eps": 32.26,
    "type": "POISON",
    "bars": 1
  },
  "Frenzy Plant": {
    "ms": 2600,
    "pow": 100,
    "eps": 11.67,
    "type": "GRASS",
    "bars": 2
  },
  "Karate Chop": {
    "ms": 800,
    "pow": 8,
    "eps": 12.5,
    "type": "FIGHTING",
    "bars": 1
  },
  "Struggle": {
    "ms": 2200,
    "pow": 35,
    "eps": 22.0,
    "type": "NORMAL",
    "bars": 2
  },
  "Quick Attack": {
    "ms": 800,
    "pow": 8,
    "eps": 12.5,
    "type": "NORMAL",
    "bars": 1
  },
  "Posion Jab": {
    "ms": 800,
    "pow": 10,
    "eps": 8.75,
    "type": "POISON",
    "bars": 1
  },
  "Take Down": {
    "ms": 1200,
    "pow": 8,
    "eps": 8.33,
    "type": "NORMAL",
    "bars": 1
  },
  "Power Whip": {
    "ms": 2600,
    "pow": 90,
    "eps": 19.23,
    "type": "GRASS",
    "bars": 2
  },
  "Takcl": {
    "ms": 500,
    "pow": 5,
    "eps": 10.0,
    "type": "NORMAL",
    "bars": 1
  },
  "Flash Cannon": {
    "ms": 2700,
    "pow": 100,
    "eps": 37.04,
    "type": "STEEL",
    "bars": 1
  },
  "Drill Peck": {
    "ms": 2300,
    "pow": 60,
    "eps": 14.35,
    "type": "FLYING",
    "bars": 3
  },
  "Smack Down": {
    "ms": 1200,
    "pow": 16,
    "eps": 6.67,
    "type": "ROCK",
    "bars": 1
  },
  "Poison Sting": {
    "ms": 600,
    "pow": 5,
    "eps": 11.67,
    "type": "POISON",
    "bars": 1
  },
  "Air Cutter": {
    "ms": 2700,
    "pow": 60,
    "eps": 18.52,
    "type": "FLYING",
    "bars": 2
  },
  "Night Slash": {
    "ms": 2200,
    "pow": 50,
    "eps": 15.0,
    "type": "DARK",
    "bars": 3
  },
  "Psycho Boost": {
    "ms": 4000,
    "pow": 70,
    "eps": 12.5,
    "type": "PSYCHIC",
    "bars": 2
  },
  "Mud Bomb": {
    "ms": 2300,
    "pow": 55,
    "eps": 14.35,
    "type": "GROUND",
    "bars": 3
  },
  "Low Sweep": {
    "ms": 1900,
    "pow": 40,
    "eps": 17.37,
    "type": "FIGHTING",
    "bars": 3
  },
  "Draining Kiss": {
    "ms": 2600,
    "pow": 60,
    "eps": 19.23,
    "type": "FAIRY",
    "bars": 2
  },
  "Fire Punch": {
    "ms": 2200,
    "pow": 55,
    "eps": 15.0,
    "type": "FIRE",
    "bars": 3
  },
  "Ice Punch": {
    "ms": 1900,
    "pow": 50,
    "eps": 17.37,
    "type": "ICE",
    "bars": 3
  },
  "Acid": {
    "ms": 800,
    "pow": 9,
    "eps": 10.0,
    "type": "POISON",
    "bars": 1
  },
  "Aurora Beam": {
    "ms": 3500,
    "pow": 80,
    "eps": 14.08,
    "type": "ICE",
    "bars": 2
  },
  "Snarl": {
    "ms": 1100,
    "pow": 12,
    "eps": 10.91,
    "type": "DARK",
    "bars": 1
  },
  "Sludge Bomb": {
    "ms": 2300,
    "pow": 80,
    "eps": 21.74,
    "type": "POISON",
    "bars": 2
  },
  "Cross Chop": {
    "ms": 1500,
    "pow": 50,
    "eps": 33.33,
    "type": "FIGHTING",
    "bars": 2
  },
  "Astonish": {
    "ms": 1100,
    "pow": 8,
    "eps": 12.73,
    "type": "GHOST",
    "bars": 1
  },
  "Struggle Bug": {
    "ms": 1500,
    "pow": 15,
    "eps": 10.0,
    "type": "BUG",
    "bars": 1
  },
  "Aerial Ace": {
    "ms": 2400,
    "pow": 55,
    "eps": 13.75,
    "type": "FLYING",
    "bars": 3
  },
  "X Scissor": {
    "ms": 1600,
    "pow": 45,
    "eps": 20.63,
    "type": "BUG",
    "bars": 3
  },
  "Confusion": {
    "ms": 1600,
    "pow": 20,
    "eps": 9.38,
    "type": "PSYCHIC",
    "bars": 1
  },
  "Power Gem": {
    "ms": 2900,
    "pow": 80,
    "eps": 17.24,
    "type": "ROCK",
    "bars": 2
  },
  "Megahorn": {
    "ms": 2200,
    "pow": 90,
    "eps": 45.45,
    "type": "BUG",
    "bars": 1
  },
  "Bubblebeam": {
    "ms": 1900,
    "pow": 45,
    "eps": 1.0,
    "type": "WATER",
    "bars": 3
  },
  "Scratch": {
    "ms": 500,
    "pow": 6,
    "eps": 8.0,
    "type": "NORMAL",
    "bars": 1
  },
  "Bug Buzz": {
    "ms": 3700,
    "pow": 90,
    "eps": 13.51,
    "type": "BUG",
    "bars": 2
  },
  "Earthquake": {
    "ms": 3600,
    "pow": 120,
    "eps": 27.78,
    "type": "GROUND",
    "bars": 1
  },
  "Weather Ball Water": {
    "ms": 1600,
    "pow": 60,
    "eps": 33.0,
    "type": "WATER",
    "bars": 3
  },
  "Petal Blizzard": {
    "ms": 2600,
    "pow": 110,
    "eps": 38.46,
    "type": "GRASS",
    "bars": 1
  },
  "Rock Slide": {
    "ms": 2700,
    "pow": 80,
    "eps": 18.52,
    "type": "ROCK",
    "bars": 2
  },
  "Yawn": {
    "ms": 1700,
    "pow": 0,
    "eps": 8.82,
    "type": "NORMAL",
    "bars": 1
  },
  "Powder Snow": {
    "ms": 1000,
    "pow": 6,
    "eps": 15.0,
    "type": "ICE",
    "bars": 1
  },
  "Doom Desire": {
    "ms": 1700,
    "pow": 80,
    "eps": 29.4,
    "type": "STEEL",
    "bars": 2
  },
  "Bullet Seed": {
    "ms": 1100,
    "pow": 8,
    "eps": 12.73,
    "type": "GRASS",
    "bars": 1
  },
  "Wing Attack": {
    "ms": 800,
    "pow": 8,
    "eps": 11.25,
    "type": "FLYING",
    "bars": 1
  },
  "Signal Beam": {
    "ms": 2900,
    "pow": 75,
    "eps": 17.24,
    "type": "BUG",
    "bars": 2
  },
  "Shadow Punch": {
    "ms": 1700,
    "pow": 40,
    "eps": 19.41,
    "type": "GHOST",
    "bars": 3
  },
  "Energy Ball": {
    "ms": 3900,
    "pow": 90,
    "eps": 12.82,
    "type": "GRASS",
    "bars": 2
  },
  "Water Gun": {
    "ms": 500,
    "pow": 5,
    "eps": 10.0,
    "type": "WATER",
    "bars": 1
  },
  "Lick": {
    "ms": 500,
    "pow": 5,
    "eps": 12.0,
    "type": "GHOST",
    "bars": 1
  },
  "Last Resort": {
    "ms": 2900,
    "pow": 90,
    "eps": 11.67,
    "type": "NORMAL",
    "bars": 2
  },
  "Bone Club": {
    "ms": 1600,
    "pow": 40,
    "eps": 20.63,
    "type": "GROUND",
    "bars": 3
  },
  "Vine Whip": {
    "ms": 600,
    "pow": 7,
    "eps": 10.0,
    "type": "GRASS",
    "bars": 1
  },
  "Hyper Beam": {
    "ms": 3800,
    "pow": 150,
    "eps": 26.32,
    "type": "NORMAL",
    "bars": 1
  },
  "Gyro Ball": {
    "ms": 3300,
    "pow": 80,
    "eps": 15.15,
    "type": "STEEL",
    "bars": 2
  },
  "Hydro Cannon": {
    "ms": 1900,
    "pow": 90,
    "eps": 11.67,
    "type": "WATER",
    "bars": 2
  },
  "Weather Ball Fire": {
    "ms": 1600,
    "pow": 60,
    "eps": 33.0,
    "type": "FIRE",
    "bars": 3
  },
  "Focus Blast": {
    "ms": 3500,
    "pow": 140,
    "eps": 28.57,
    "type": "FIGHTING",
    "bars": 1
  },
  "Hyper Fang": {
    "ms": 2500,
    "pow": 80,
    "eps": 20.0,
    "type": "NORMAL",
    "bars": 2
  },
  "Mud Slap": {
    "ms": 1400,
    "pow": 15,
    "eps": 8.57,
    "type": "GROUND",
    "bars": 1
  },
  "Aqua Jet": {
    "ms": 2600,
    "pow": 45,
    "eps": 12.69,
    "type": "WATER",
    "bars": 3
  },
  "Sucker Punch": {
    "ms": 700,
    "pow": 7,
    "eps": 11.43,
    "type": "DARK",
    "bars": 1
  },
  "Foul Play": {
    "ms": 2000,
    "pow": 70,
    "eps": 25.0,
    "type": "DARK",
    "bars": 2
  },
  "Psychic": {
    "ms": 2800,
    "pow": 100,
    "eps": 35.71,
    "type": "PSYCHIC",
    "bars": 1
  },
  "Pound": {
    "ms": 600,
    "pow": 7,
    "eps": 10.0,
    "type": "NORMAL",
    "bars": 1
  },
  "Shadow Claw": {
    "ms": 700,
    "pow": 9,
    "eps": 8.57,
    "type": "GHOST",
    "bars": 1
  },
  "Stomp": {
    "ms": 1700,
    "pow": 55,
    "eps": 29.41,
    "type": "NORMAL",
    "bars": 2
  },
  "Hex": {
    "ms": 1200,
    "pow": 10,
    "eps": 12.5,
    "type": "GHOST",
    "bars": 1
  },
  "Psycho Cut": {
    "ms": 600,
    "pow": 5,
    "eps": 13.33,
    "type": "PSYCHIC",
    "bars": 1
  },
  "Thunderbolt": {
    "ms": 2500,
    "pow": 80,
    "eps": 20.0,
    "type": "ELECTRIC",
    "bars": 2
  },
  "Zap Cannon": {
    "ms": 3700,
    "pow": 140,
    "eps": 27.03,
    "type": "ELECTRIC",
    "bars": 1
  }
};

export default MOVES_DATA
