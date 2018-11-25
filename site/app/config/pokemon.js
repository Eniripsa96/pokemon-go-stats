const POKEMON_DATA = {
  "Scizor": {
    "spDef": 80,
    "types": [
      "BUG",
      "STEEL"
    ],
    "spAtk": 55,
    "def": 100,
    "hp": 70,
    "quickMoves": [
      "Bullet Punch",
      "Fury Cutter"
    ],
    "atk": 130,
    "chargeMoves": [
      "Iron Head",
      "X Scissor",
      "Night Slash"
    ],
    "speed": 65
  },
  "Arbok": {
    "spDef": 79,
    "types": [
      "POISON"
    ],
    "spAtk": 65,
    "def": 69,
    "hp": 60,
    "quickMoves": [
      "Acid",
      "Bite"
    ],
    "atk": 95,
    "chargeMoves": [
      "Gunk Shot",
      "Sludge Wave",
      "Dark Pulse"
    ],
    "speed": 80
  },
  "Volbeat": {
    "spDef": 85,
    "types": [
      "BUG"
    ],
    "spAtk": 47,
    "def": 75,
    "hp": 65,
    "quickMoves": [
      "Struggle Bug",
      "Tackle"
    ],
    "atk": 73,
    "chargeMoves": [
      "Thunderbolt",
      "Signal Beam",
      "Bug Buzz"
    ],
    "speed": 85
  },
  "Deoxys Defense Form": {
    "spDef": 160,
    "types": [
      "PSYCHIC"
    ],
    "spAtk": 70,
    "def": 160,
    "hp": 50,
    "quickMoves": [
      "Counter",
      "Zen Headbutt"
    ],
    "atk": 70,
    "chargeMoves": [
      "Zap Cannon",
      "Rock Slide",
      "Psycho Boost"
    ],
    "speed": 90
  },
  "Fearow": {
    "spDef": 61,
    "types": [
      "NORMAL",
      "FLYING"
    ],
    "spAtk": 61,
    "def": 65,
    "hp": 65,
    "quickMoves": [
      "Steel Wing",
      "Peck"
    ],
    "atk": 90,
    "chargeMoves": [
      "Sky Attack",
      "Drill Run",
      "Aerial Ace",
      "Twister"
    ],
    "speed": 100
  },
  "Bastiodon": {
    "spDef": 138,
    "types": [
      "STEEL",
      "ROCK"
    ],
    "spAtk": 47,
    "def": 168,
    "hp": 60,
    "quickMoves": [
      "Smack Down",
      "Iron Tail"
    ],
    "atk": 52,
    "chargeMoves": [
      "Stone Edge",
      "Flamethrower",
      "Flash Cannon"
    ],
    "speed": 30
  },
  "Vaporeon": {
    "spDef": 95,
    "types": [
      "WATER"
    ],
    "spAtk": 110,
    "def": 60,
    "hp": 130,
    "quickMoves": [
      "Water Gun"
    ],
    "atk": 65,
    "chargeMoves": [
      "Hydro Pump",
      "Aqua Tail",
      "Water Pulse",
      "Last Resort"
    ],
    "speed": 65
  },
  "Alolan Exeggutor": {
    "spDef": 75,
    "types": [
      "GRASS",
      "DRAGON"
    ],
    "spAtk": 125,
    "def": 85,
    "hp": 95,
    "quickMoves": [
      "Dragon Tail",
      "Bullet Seed"
    ],
    "atk": 105,
    "chargeMoves": [
      "Solarbeam",
      "Seed Bomb",
      "Dragon Pulse"
    ],
    "speed": 45
  },
  "Regigigas": {
    "spDef": 110,
    "types": [
      "NORMAL"
    ],
    "spAtk": 80,
    "def": 110,
    "hp": 110,
    "quickMoves": [
      "Zen Headbutt",
      "Rock Smash"
    ],
    "atk": 160,
    "chargeMoves": [
      "Stone Edge",
      "Avalanche",
      "Heavy Slam"
    ],
    "speed": 100
  },
  "Golem": {
    "spDef": 65,
    "types": [
      "ROCK",
      "GROUND"
    ],
    "spAtk": 55,
    "def": 130,
    "hp": 80,
    "quickMoves": [
      "Rock Throw",
      "Mud Slap",
      "Mud Shot"
    ],
    "atk": 120,
    "chargeMoves": [
      "Stone Edge",
      "Earthquake",
      "Rock Blast",
      "Ancient Power"
    ],
    "speed": 45
  },
  "Abomasnow": {
    "spDef": 85,
    "types": [
      "GRASS",
      "ICE"
    ],
    "spAtk": 92,
    "def": 75,
    "hp": 90,
    "quickMoves": [
      "Powder Snow",
      "Razor Leaf"
    ],
    "atk": 92,
    "chargeMoves": [
      "Blizzard",
      "Energy Ball",
      "Outrage"
    ],
    "speed": 60
  },
  "Suicune": {
    "spDef": 115,
    "types": [
      "WATER"
    ],
    "spAtk": 90,
    "def": 115,
    "hp": 100,
    "quickMoves": [
      "Hidden Power",
      "Snarl",
      "Extrasensory"
    ],
    "atk": 75,
    "chargeMoves": [
      "Hydro Pump",
      "Bubble Beam",
      "Water Pulse"
    ],
    "speed": 85
  },
  "Mightyena": {
    "spDef": 60,
    "types": [
      "DARK"
    ],
    "spAtk": 60,
    "def": 70,
    "hp": 70,
    "quickMoves": [
      "Bite",
      "Fire Fang"
    ],
    "atk": 90,
    "chargeMoves": [
      "Play Rough",
      "Crunch",
      "Poison Fang"
    ],
    "speed": 70
  },
  "Gliscor": {
    "spDef": 75,
    "types": [
      "GROUND",
      "FLYING"
    ],
    "spAtk": 45,
    "def": 125,
    "hp": 75,
    "quickMoves": [
      "Fury Cutter",
      "Wing Attack"
    ],
    "atk": 95,
    "chargeMoves": [
      "Earthquake",
      "Aerial Ace",
      "Night Slash"
    ],
    "speed": 95
  },
  "Glaceon": {
    "spDef": 95,
    "types": [
      "ICE"
    ],
    "spAtk": 130,
    "def": 110,
    "hp": 65,
    "quickMoves": [
      "Ice Shard",
      "Frost Breath"
    ],
    "atk": 60,
    "chargeMoves": [
      "Avalanche",
      "Icy Wind",
      "Ice Beam"
    ],
    "speed": 65
  },
  "Venomoth": {
    "spDef": 75,
    "types": [
      "BUG",
      "POISON"
    ],
    "spAtk": 90,
    "def": 60,
    "hp": 70,
    "quickMoves": [
      "Confusion",
      "Bug Bite",
      "Infestation"
    ],
    "atk": 65,
    "chargeMoves": [
      "Psychic",
      "Bug Buzz",
      "Poison Fang",
      "Silver Wind"
    ],
    "speed": 90
  },
  "Purugly": {
    "spDef": 59,
    "types": [
      "NORMAL"
    ],
    "spAtk": 64,
    "def": 64,
    "hp": 71,
    "quickMoves": [
      "Scratch",
      "Shadow Claw"
    ],
    "atk": 82,
    "chargeMoves": [
      "Play Rough",
      "Thunder",
      "Aerial Ace"
    ],
    "speed": 112
  },
  "Huntail": {
    "spDef": 75,
    "types": [
      "WATER"
    ],
    "spAtk": 94,
    "def": 105,
    "hp": 55,
    "quickMoves": [
      "Water Gun",
      "Bite"
    ],
    "atk": 104,
    "chargeMoves": [
      "Aqua Tail",
      "Ice Beam",
      "Crunch"
    ],
    "speed": 52
  },
  "Staraptor": {
    "spDef": 60,
    "types": [
      "NORMAL",
      "FLYING"
    ],
    "spAtk": 50,
    "def": 70,
    "hp": 85,
    "quickMoves": [
      "Wing Attack",
      "Quick Attack"
    ],
    "atk": 120,
    "chargeMoves": [
      "Brave Bird",
      "Heat Wave",
      "Close Combat"
    ],
    "speed": 100
  },
  "Plusle": {
    "spDef": 75,
    "types": [
      "ELECTRIC"
    ],
    "spAtk": 85,
    "def": 40,
    "hp": 60,
    "quickMoves": [
      "Quick Attack",
      "Spark"
    ],
    "atk": 50,
    "chargeMoves": [
      "Thunderbolt",
      "Discharge",
      "Swift"
    ],
    "speed": 95
  },
  "Ampharos": {
    "spDef": 90,
    "types": [
      "ELECTRIC"
    ],
    "spAtk": 115,
    "def": 85,
    "hp": 90,
    "quickMoves": [
      "Volt Switch",
      "Charge Beam"
    ],
    "atk": 75,
    "chargeMoves": [
      "Thunder",
      "Zap Cannon",
      "Focus Blast",
      "Dragon Pulse"
    ],
    "speed": 55
  },
  "Raikou": {
    "spDef": 100,
    "types": [
      "ELECTRIC"
    ],
    "spAtk": 115,
    "def": 75,
    "hp": 90,
    "quickMoves": [
      "Volt Switch",
      "Thunder Shock"
    ],
    "atk": 85,
    "chargeMoves": [
      "Thunder",
      "Wild Charge",
      "Thunderbolt"
    ],
    "speed": 115
  },
  "Minun": {
    "spDef": 85,
    "types": [
      "ELECTRIC"
    ],
    "spAtk": 75,
    "def": 50,
    "hp": 60,
    "quickMoves": [
      "Quick Attack",
      "Spark"
    ],
    "atk": 40,
    "chargeMoves": [
      "Thunderbolt",
      "Discharge",
      "Swift"
    ],
    "speed": 95
  },
  "Espeon": {
    "spDef": 95,
    "types": [
      "PSYCHIC"
    ],
    "spAtk": 130,
    "def": 60,
    "hp": 65,
    "quickMoves": [
      "Confusion",
      "Zen Headbutt"
    ],
    "atk": 65,
    "chargeMoves": [
      "Future Sight",
      "Psychic",
      "Psybeam",
      "Last Resort"
    ],
    "speed": 110
  },
  "Alolan Raichu": {
    "spDef": 85,
    "types": [
      "ELECTRIC",
      "PSYCHIC"
    ],
    "spAtk": 95,
    "def": 50,
    "hp": 60,
    "quickMoves": [
      "Volt Switch",
      "Spark"
    ],
    "atk": 85,
    "chargeMoves": [
      "Psychic",
      "Wild Charge",
      "Thunder Punch"
    ],
    "speed": 110
  },
  "Jolteon": {
    "spDef": 95,
    "types": [
      "ELECTRIC"
    ],
    "spAtk": 110,
    "def": 60,
    "hp": 65,
    "quickMoves": [
      "Volt Switch",
      "Thunder Shock"
    ],
    "atk": 65,
    "chargeMoves": [
      "Thunder",
      "Thunderbolt",
      "Discharge",
      "Last Resort"
    ],
    "speed": 130
  },
  "Sharpedo": {
    "spDef": 40,
    "types": [
      "WATER",
      "DARK"
    ],
    "spAtk": 95,
    "def": 40,
    "hp": 70,
    "quickMoves": [
      "Waterfall",
      "Bite"
    ],
    "atk": 120,
    "chargeMoves": [
      "Hydro Pump",
      "Crunch",
      "Poison Fang"
    ],
    "speed": 95
  },
  "Mantine": {
    "spDef": 140,
    "types": [
      "WATER",
      "FLYING"
    ],
    "spAtk": 80,
    "def": 70,
    "hp": 85,
    "quickMoves": [
      "Wing Attack",
      "Bubble"
    ],
    "atk": 40,
    "chargeMoves": [
      "Aerial Ace",
      "Ice Beam",
      "Water Pulse"
    ],
    "speed": 70
  },
  "Granbull": {
    "spDef": 60,
    "types": [
      "FAIRY"
    ],
    "spAtk": 60,
    "def": 75,
    "hp": 90,
    "quickMoves": [
      "Bite",
      "Snarl"
    ],
    "atk": 120,
    "chargeMoves": [
      "Close Combat",
      "Play Rough",
      "Crunch"
    ],
    "speed": 45
  },
  "Bronzong": {
    "spDef": 116,
    "types": [
      "STEEL",
      "PSYCHIC"
    ],
    "spAtk": 79,
    "def": 116,
    "hp": 67,
    "quickMoves": [
      "Feint Attack",
      "Confusion"
    ],
    "atk": 89,
    "chargeMoves": [
      "Flash Cannon",
      "Psychic",
      "Heavy Slam"
    ],
    "speed": 33
  },
  "Jirachi": {
    "spDef": 100,
    "types": [
      "STEEL",
      "PSYCHIC"
    ],
    "spAtk": 100,
    "def": 100,
    "hp": 100,
    "quickMoves": [
      "Confusion",
      "Charge Beam"
    ],
    "atk": 100,
    "chargeMoves": [
      "Doom Desire",
      "Psychic",
      "Dazzling Gleam"
    ],
    "speed": 100
  },
  "Regice": {
    "spDef": 200,
    "types": [
      "ICE"
    ],
    "spAtk": 100,
    "def": 100,
    "hp": 80,
    "quickMoves": [
      "Frost Breath",
      "Rock Smash"
    ],
    "atk": 50,
    "chargeMoves": [
      "Blizzard",
      "Focus Blast",
      "Earthquake"
    ],
    "speed": 50
  },
  "Sableye": {
    "spDef": 65,
    "types": [
      "DARK",
      "GHOST"
    ],
    "spAtk": 65,
    "def": 75,
    "hp": 50,
    "quickMoves": [
      "Shadow Claw",
      "Feint Attack"
    ],
    "atk": 75,
    "chargeMoves": [
      "Foul Play",
      "Power Gem",
      "Shadow Sneak"
    ],
    "speed": 50
  },
  "Shiftry": {
    "spDef": 60,
    "types": [
      "GRASS",
      "DARK"
    ],
    "spAtk": 90,
    "def": 60,
    "hp": 90,
    "quickMoves": [
      "Razor Leaf",
      "Feint Attack"
    ],
    "atk": 100,
    "chargeMoves": [
      "Foul Play",
      "Hurricane",
      "Leaf Blade"
    ],
    "speed": 80
  },
  "Shuckle": {
    "spDef": 230,
    "types": [
      "BUG",
      "ROCK"
    ],
    "spAtk": 10,
    "def": 230,
    "hp": 20,
    "quickMoves": [
      "Rock Throw",
      "Struggle Bug"
    ],
    "atk": 10,
    "chargeMoves": [
      "Stone Edge",
      "Rock Blast",
      "Gyro Ball"
    ],
    "speed": 5
  },
  "Swellow": {
    "spDef": 50,
    "types": [
      "NORMAL",
      "FLYING"
    ],
    "spAtk": 75,
    "def": 60,
    "hp": 60,
    "quickMoves": [
      "Steel Wing",
      "Wing Attack"
    ],
    "atk": 85,
    "chargeMoves": [
      "Brave Bird",
      "Sky Attack",
      "Aerial Ace"
    ],
    "speed": 125
  },
  "Linoone": {
    "spDef": 61,
    "types": [
      "NORMAL"
    ],
    "spAtk": 50,
    "def": 61,
    "hp": 78,
    "quickMoves": [
      "Tackle",
      "Shadow Claw"
    ],
    "atk": 70,
    "chargeMoves": [
      "Thunder",
      "Grass Knot",
      "Dig"
    ],
    "speed": 100
  },
  "Kyogre": {
    "spDef": 140,
    "types": [
      "WATER"
    ],
    "spAtk": 150,
    "def": 90,
    "hp": 100,
    "quickMoves": [
      "Waterfall",
      "Dragon Tail"
    ],
    "atk": 100,
    "chargeMoves": [
      "Hydro Pump",
      "Blizzard",
      "Thunder"
    ],
    "speed": 90
  },
  "Alolan Dugtrio": {
    "spDef": 70,
    "types": [
      "GROUND",
      "STEEL"
    ],
    "spAtk": 50,
    "def": 60,
    "hp": 35,
    "quickMoves": [
      "Metal Claw",
      "Mud Slap"
    ],
    "atk": 100,
    "chargeMoves": [
      "Earthquake",
      "Iron Head",
      "Mud Bomb"
    ],
    "speed": 110
  },
  "Dragonite": {
    "spDef": 100,
    "types": [
      "DRAGON",
      "FLYING"
    ],
    "spAtk": 100,
    "def": 95,
    "hp": 91,
    "quickMoves": [
      "Dragon Tail",
      "Dragon Breath",
      "Steel Wing"
    ],
    "atk": 134,
    "chargeMoves": [
      "Hurricane",
      "Hyper Beam",
      "Dragon Claw",
      "Outrage",
      "Dragon Pulse",
      "Draco Meteor"
    ],
    "speed": 80
  },
  "Furret": {
    "spDef": 55,
    "types": [
      "NORMAL"
    ],
    "spAtk": 45,
    "def": 64,
    "hp": 85,
    "quickMoves": [
      "Quick Attack",
      "Sucker Punch"
    ],
    "atk": 76,
    "chargeMoves": [
      "Hyper Beam",
      "Brick Break",
      "Dig"
    ],
    "speed": 90
  },
  "Girafarig": {
    "spDef": 65,
    "types": [
      "NORMAL",
      "PSYCHIC"
    ],
    "spAtk": 90,
    "def": 65,
    "hp": 70,
    "quickMoves": [
      "Confusion",
      "Tackle"
    ],
    "atk": 80,
    "chargeMoves": [
      "Psychic",
      "Thunderbolt",
      "Mirror Coat"
    ],
    "speed": 85
  },
  "Dugtrio": {
    "spDef": 70,
    "types": [
      "GROUND"
    ],
    "spAtk": 50,
    "def": 50,
    "hp": 35,
    "quickMoves": [
      "Sucker Punch",
      "Mud Slap",
      "Mud Shot"
    ],
    "atk": 100,
    "chargeMoves": [
      "Stone Edge",
      "Earthquake",
      "Mud Bomb"
    ],
    "speed": 120
  },
  "Glalie": {
    "spDef": 80,
    "types": [
      "ICE"
    ],
    "spAtk": 80,
    "def": 80,
    "hp": 80,
    "quickMoves": [
      "Frost Breath",
      "Ice Shard"
    ],
    "atk": 80,
    "chargeMoves": [
      "Avalanche",
      "Shadow Ball",
      "Gyro Ball"
    ],
    "speed": 80
  },
  "Steelix": {
    "spDef": 65,
    "types": [
      "STEEL",
      "GROUND"
    ],
    "spAtk": 55,
    "def": 200,
    "hp": 75,
    "quickMoves": [
      "Iron Tail",
      "Dragon Tail"
    ],
    "atk": 85,
    "chargeMoves": [
      "Earthquake",
      "Heavy Slam",
      "Crunch"
    ],
    "speed": 30
  },
  "Politoed": {
    "spDef": 100,
    "types": [
      "WATER"
    ],
    "spAtk": 90,
    "def": 75,
    "hp": 90,
    "quickMoves": [
      "Bubble",
      "Mud Shot"
    ],
    "atk": 75,
    "chargeMoves": [
      "Hydro Pump",
      "Surf",
      "Blizzard",
      "Earthquake"
    ],
    "speed": 70
  },
  "Lucario": {
    "spDef": 70,
    "types": [
      "STEEL",
      "FIGHTING"
    ],
    "spAtk": 115,
    "def": 70,
    "hp": 70,
    "quickMoves": [
      "Counter",
      "Bullet Punch"
    ],
    "atk": 110,
    "chargeMoves": [
      "Flash Cannon",
      "Shadow Ball",
      "Close Combat"
    ],
    "speed": 90
  },
  "Cresselia": {
    "spDef": 130,
    "types": [
      "PSYCHIC"
    ],
    "spAtk": 75,
    "def": 120,
    "hp": 120,
    "quickMoves": [
      "Psycho Cut",
      "Confusion"
    ],
    "atk": 70,
    "chargeMoves": [
      "Aurora Beam",
      "Moonblast",
      "Future Sight"
    ],
    "speed": 85
  },
  "Magmortar": {
    "spDef": 95,
    "types": [
      "FIRE"
    ],
    "spAtk": 125,
    "def": 67,
    "hp": 75,
    "quickMoves": [
      "Fire Spin",
      "Karate Chop"
    ],
    "atk": 95,
    "chargeMoves": [
      "Brick Break",
      "Fire Punch",
      "Fire Blast"
    ],
    "speed": 83
  },
  "Forretress": {
    "spDef": 60,
    "types": [
      "BUG",
      "STEEL"
    ],
    "spAtk": 60,
    "def": 140,
    "hp": 75,
    "quickMoves": [
      "Struggle Bug",
      "Bug Bite"
    ],
    "atk": 90,
    "chargeMoves": [
      "Heavy Slam",
      "Earthquake",
      "Rock Tomb"
    ],
    "speed": 40
  },
  "Lumineon": {
    "spDef": 86,
    "types": [
      "WATER"
    ],
    "spAtk": 69,
    "def": 76,
    "hp": 69,
    "quickMoves": [
      "Waterfall",
      "Water Gun"
    ],
    "atk": 69,
    "chargeMoves": [
      "Water Pulse",
      "Blizzard",
      "Silver Wind"
    ],
    "speed": 91
  },
  "Mr Mime": {
    "spDef": 120,
    "types": [
      "PSYCHIC",
      "FAIRY"
    ],
    "spAtk": 100,
    "def": 64,
    "hp": 40,
    "quickMoves": [
      "Confusion",
      "Zen Headbutt"
    ],
    "atk": 45,
    "chargeMoves": [
      "Psychic",
      "Shadow Ball",
      "Psybeam"
    ],
    "speed": 90
  },
  "Machamp": {
    "spDef": 85,
    "types": [
      "FIGHTING"
    ],
    "spAtk": 65,
    "def": 80,
    "hp": 90,
    "quickMoves": [
      "Counter",
      "Karate Chop",
      "Bullet Punch"
    ],
    "atk": 130,
    "chargeMoves": [
      "Close Combat",
      "Stone Edge",
      "Dynamic Punch",
      "Cross Chop",
      "Heavy Slam",
      "Submission"
    ],
    "speed": 55
  },
  "Gardevoir": {
    "spDef": 115,
    "types": [
      "PSYCHIC",
      "FAIRY"
    ],
    "spAtk": 125,
    "def": 65,
    "hp": 68,
    "quickMoves": [
      "Confusion",
      "Charge Beam"
    ],
    "atk": 65,
    "chargeMoves": [
      "Psychic",
      "Dazzling Gleam",
      "Shadow Ball"
    ],
    "speed": 80
  },
  "Palkia": {
    "spDef": 120,
    "types": [
      "DRAGON",
      "WATER"
    ],
    "spAtk": 150,
    "def": 100,
    "hp": 90,
    "quickMoves": [
      "Dragon Breath",
      "Dragon Tail"
    ],
    "atk": 120,
    "chargeMoves": [
      "Draco Meteor",
      "Fire Blast",
      "Hydro Pump"
    ],
    "speed": 100
  },
  "Swampert": {
    "spDef": 90,
    "types": [
      "WATER",
      "GROUND"
    ],
    "spAtk": 85,
    "def": 90,
    "hp": 100,
    "quickMoves": [
      "Water Gun",
      "Mud Shot"
    ],
    "atk": 110,
    "chargeMoves": [
      "Surf",
      "Earthquake",
      "Sludge Wave"
    ],
    "speed": 60
  },
  "Ursaring": {
    "spDef": 75,
    "types": [
      "NORMAL"
    ],
    "spAtk": 75,
    "def": 75,
    "hp": 90,
    "quickMoves": [
      "Counter",
      "Metal Claw"
    ],
    "atk": 130,
    "chargeMoves": [
      "Hyper Beam",
      "Close Combat",
      "Play Rough"
    ],
    "speed": 55
  },
  "Rapidash": {
    "spDef": 80,
    "types": [
      "FIRE"
    ],
    "spAtk": 80,
    "def": 70,
    "hp": 65,
    "quickMoves": [
      "Fire Spin",
      "Ember",
      "Low Kick"
    ],
    "atk": 100,
    "chargeMoves": [
      "Fire Blast",
      "Heat Wave",
      "Drill Run"
    ],
    "speed": 105
  },
  "Yanmega": {
    "spDef": 56,
    "types": [
      "BUG",
      "FLYING"
    ],
    "spAtk": 116,
    "def": 86,
    "hp": 86,
    "quickMoves": [
      "Bug Bite",
      "Wing Attack"
    ],
    "atk": 76,
    "chargeMoves": [
      "Ancient Power",
      "Aerial Ace",
      "Bug Buzz"
    ],
    "speed": 95
  },
  "Azelf": {
    "spDef": 70,
    "types": [
      "PSYCHIC"
    ],
    "spAtk": 125,
    "def": 70,
    "hp": 75,
    "quickMoves": [
      "Confusion",
      "Extrasensory"
    ],
    "atk": 125,
    "chargeMoves": [
      "Future Sight",
      "Swift",
      "Fire Blast"
    ],
    "speed": 115
  },
  "Rampardos": {
    "spDef": 50,
    "types": [
      "ROCK"
    ],
    "spAtk": 65,
    "def": 60,
    "hp": 97,
    "quickMoves": [
      "Zen Headbutt",
      "Smack Down"
    ],
    "atk": 165,
    "chargeMoves": [
      "Rock Slide",
      "Outrage",
      "Flamethrower"
    ],
    "speed": 58
  },
  "Poliwrath": {
    "spDef": 90,
    "types": [
      "WATER",
      "FIGHTING"
    ],
    "spAtk": 70,
    "def": 95,
    "hp": 90,
    "quickMoves": [
      "Rock Smash",
      "Bubble",
      "Mud Shot"
    ],
    "atk": 95,
    "chargeMoves": [
      "Hydro Pump",
      "Dynamic Punch",
      "Submission",
      "Ice Punch"
    ],
    "speed": 70
  },
  "Froslass": {
    "spDef": 70,
    "types": [
      "ICE",
      "GHOST"
    ],
    "spAtk": 80,
    "def": 70,
    "hp": 70,
    "quickMoves": [
      "Powder Snow",
      "Hex"
    ],
    "atk": 80,
    "chargeMoves": [
      "Avalanche",
      "Crunch",
      "Shadow Ball"
    ],
    "speed": 110
  },
  "Omastar": {
    "spDef": 70,
    "types": [
      "WATER",
      "ROCK"
    ],
    "spAtk": 115,
    "def": 125,
    "hp": 70,
    "quickMoves": [
      "Rock Throw",
      "Water Gun",
      "Mud Shot"
    ],
    "atk": 60,
    "chargeMoves": [
      "Hydro Pump",
      "Rock Slide",
      "Rock Blast",
      "Ancient Power"
    ],
    "speed": 55
  },
  "Registeel": {
    "spDef": 150,
    "types": [
      "STEEL"
    ],
    "spAtk": 75,
    "def": 150,
    "hp": 80,
    "quickMoves": [
      "Metal Claw",
      "Rock Smash"
    ],
    "atk": 75,
    "chargeMoves": [
      "Flash Cannon",
      "Focus Blast",
      "Hyper Beam"
    ],
    "speed": 50
  },
  "Absol": {
    "spDef": 60,
    "types": [
      "DARK"
    ],
    "spAtk": 75,
    "def": 60,
    "hp": 65,
    "quickMoves": [
      "Snarl",
      "Psycho Cut"
    ],
    "atk": 130,
    "chargeMoves": [
      "Thunder",
      "Megahorn",
      "Dark Pulse"
    ],
    "speed": 75
  },
  "Exeggutor": {
    "spDef": 75,
    "types": [
      "GRASS",
      "PSYCHIC"
    ],
    "spAtk": 125,
    "def": 85,
    "hp": 95,
    "quickMoves": [
      "Confusion",
      "Zen Headbutt",
      "Extrasensory",
      "Bullet Seed"
    ],
    "atk": 95,
    "chargeMoves": [
      "Solarbeam",
      "Psychic",
      "Seed Bomb"
    ],
    "speed": 55
  },
  "Alolan Raticate": {
    "spDef": 80,
    "types": [
      "DARK",
      "NORMAL"
    ],
    "spAtk": 40,
    "def": 70,
    "hp": 75,
    "quickMoves": [
      "Bite",
      "Quick Attack"
    ],
    "atk": 71,
    "chargeMoves": [
      "Hyper Beam",
      "Hyper Fang",
      "Crunch"
    ],
    "speed": 77
  },
  "Clefable": {
    "spDef": 90,
    "types": [
      "FAIRY"
    ],
    "spAtk": 95,
    "def": 73,
    "hp": 95,
    "quickMoves": [
      "Pound",
      "Zen Headbutt",
      "Charge Beam"
    ],
    "atk": 70,
    "chargeMoves": [
      "Moonblast",
      "Psychic",
      "Dazzling Gleam"
    ],
    "speed": 60
  },
  "Blaziken": {
    "spDef": 70,
    "types": [
      "FIRE",
      "FIGHTING"
    ],
    "spAtk": 110,
    "def": 70,
    "hp": 80,
    "quickMoves": [
      "Fire Spin",
      "Counter"
    ],
    "atk": 120,
    "chargeMoves": [
      "Focus Blast",
      "Overheat",
      "Brave Bird",
      "Stone Edge"
    ],
    "speed": 80
  },
  "Slowking": {
    "spDef": 110,
    "types": [
      "WATER",
      "PSYCHIC"
    ],
    "spAtk": 100,
    "def": 80,
    "hp": 95,
    "quickMoves": [
      "Confusion",
      "Water Gun"
    ],
    "atk": 75,
    "chargeMoves": [
      "Psychic",
      "Blizzard",
      "Fire Blast"
    ],
    "speed": 30
  },
  "Alolan Muk": {
    "spDef": 100,
    "types": [
      "POISON",
      "DARK"
    ],
    "spAtk": 65,
    "def": 75,
    "hp": 105,
    "quickMoves": [
      "Posion Jab",
      "Bite"
    ],
    "atk": 105,
    "chargeMoves": [
      "Gunk Shot",
      "Sludge Wave",
      "Dark Pulse"
    ],
    "speed": 50
  },
  "Ho-Oh": {
    "spDef": 154,
    "types": [
      "FIRE",
      "FLYING"
    ],
    "spAtk": 110,
    "def": 90,
    "hp": 106,
    "quickMoves": [
      "Steel Wing",
      "Extrasensory"
    ],
    "atk": 130,
    "chargeMoves": [
      "Brave Bird",
      "Fire Blast",
      "Solarbeam"
    ],
    "speed": 90
  },
  "Golduck": {
    "spDef": 80,
    "types": [
      "WATER"
    ],
    "spAtk": 95,
    "def": 78,
    "hp": 80,
    "quickMoves": [
      "Confusion",
      "Water Gun"
    ],
    "atk": 82,
    "chargeMoves": [
      "Hydro Pump",
      "Psychic",
      "Ice Beam"
    ],
    "speed": 85
  },
  "Feraligatr": {
    "spDef": 83,
    "types": [
      "WATER"
    ],
    "spAtk": 79,
    "def": 100,
    "hp": 85,
    "quickMoves": [
      "Waterfall",
      "Water Gun",
      "Bite"
    ],
    "atk": 105,
    "chargeMoves": [
      "Hydro Pump",
      "Ice Beam",
      "Crunch"
    ],
    "speed": 78
  },
  "Pachirisu": {
    "spDef": 90,
    "types": [
      "ELECTRIC"
    ],
    "spAtk": 45,
    "def": 70,
    "hp": 60,
    "quickMoves": [
      "Spark",
      "Volt Switch"
    ],
    "atk": 45,
    "chargeMoves": [
      "Thunder",
      "Thunderbolt",
      "Thunder Punch"
    ],
    "speed": 95
  },
  "Weezing": {
    "spDef": 70,
    "types": [
      "POISON"
    ],
    "spAtk": 85,
    "def": 120,
    "hp": 65,
    "quickMoves": [
      "Acid",
      "Infestation",
      "Tackle"
    ],
    "atk": 90,
    "chargeMoves": [
      "Sludge Bomb",
      "Shadow Ball",
      "Dark Pulse"
    ],
    "speed": 60
  },
  "Masquerain": {
    "spDef": 82,
    "types": [
      "BUG",
      "FLYING"
    ],
    "spAtk": 100,
    "def": 62,
    "hp": 70,
    "quickMoves": [
      "Air Slash",
      "Infestation"
    ],
    "atk": 60,
    "chargeMoves": [
      "Air Cutter",
      "Silver Wind",
      "Ominous Wind"
    ],
    "speed": 80
  },
  "Mamoswine": {
    "spDef": 60,
    "types": [
      "GROUND",
      "ICE"
    ],
    "spAtk": 70,
    "def": 80,
    "hp": 110,
    "quickMoves": [
      "Mud Slap",
      "Powder Snow"
    ],
    "atk": 130,
    "chargeMoves": [
      "Avalanche",
      "Bulldoze",
      "Stone Edge"
    ],
    "speed": 80
  },
  "Pelipper": {
    "spDef": 70,
    "types": [
      "WATER",
      "FLYING"
    ],
    "spAtk": 95,
    "def": 100,
    "hp": 60,
    "quickMoves": [
      "Wing Attack",
      "Water Gun"
    ],
    "atk": 50,
    "chargeMoves": [
      "Hurricane",
      "Hydro Pump",
      "Blizzard"
    ],
    "speed": 65
  },
  "Relicanth": {
    "spDef": 65,
    "types": [
      "WATER",
      "ROCK"
    ],
    "spAtk": 45,
    "def": 130,
    "hp": 100,
    "quickMoves": [
      "Water Gun",
      "Zen Headbutt"
    ],
    "atk": 90,
    "chargeMoves": [
      "Hydro Pump",
      "Aqua Tail",
      "Ancient Power"
    ],
    "speed": 55
  },
  "Alolan Golem": {
    "spDef": 65,
    "types": [
      "ELECTRIC",
      "ROCK"
    ],
    "spAtk": 55,
    "def": 130,
    "hp": 80,
    "quickMoves": [
      "Rock Throw",
      "Volt Switch"
    ],
    "atk": 120,
    "chargeMoves": [
      "Stone Edge",
      "Wild Charge",
      "Rock Blast"
    ],
    "speed": 45
  },
  "Snowy Castform": {
    "spDef": 70,
    "types": [
      "ICE"
    ],
    "spAtk": 70,
    "def": 70,
    "hp": 70,
    "quickMoves": [
      "Tackle",
      "Powder Snow"
    ],
    "atk": 70,
    "chargeMoves": [
      "Blizzard",
      "Weather Ball Ice",
      "Ice Beam"
    ],
    "speed": 70
  },
  "Zangoose": {
    "spDef": 60,
    "types": [
      "NORMAL"
    ],
    "spAtk": 60,
    "def": 60,
    "hp": 73,
    "quickMoves": [
      "Shadow Claw",
      "Fury Cutter"
    ],
    "atk": 115,
    "chargeMoves": [
      "Close Combat",
      "Night Slash",
      "Dig"
    ],
    "speed": 90
  },
  "Dustox": {
    "spDef": 90,
    "types": [
      "BUG"
    ],
    "spAtk": 50,
    "def": 70,
    "hp": 60,
    "quickMoves": [
      "Confusion",
      "Struggle Bug"
    ],
    "atk": 50,
    "chargeMoves": [
      "Sludge Bomb",
      "Bug Buzz",
      "Silver Wind"
    ],
    "speed": 65
  },
  "Arcanine": {
    "spDef": 80,
    "types": [
      "FIRE"
    ],
    "spAtk": 100,
    "def": 80,
    "hp": 90,
    "quickMoves": [
      "Fire Fang",
      "Bite",
      "Snarl"
    ],
    "atk": 110,
    "chargeMoves": [
      "Fire Blast",
      "Flamethrower",
      "Wild Charge",
      "Bulldoze",
      "Crunch"
    ],
    "speed": 95
  },
  "Stantler": {
    "spDef": 65,
    "types": [
      "NORMAL"
    ],
    "spAtk": 85,
    "def": 62,
    "hp": 73,
    "quickMoves": [
      "Tackle",
      "Zen Headbutt"
    ],
    "atk": 95,
    "chargeMoves": [
      "Megahorn",
      "Stomp",
      "Wild Charge"
    ],
    "speed": 85
  },
  "Beautifly": {
    "spDef": 50,
    "types": [
      "BUG",
      "FLYING"
    ],
    "spAtk": 100,
    "def": 50,
    "hp": 60,
    "quickMoves": [
      "Struggle Bug",
      "Infestation"
    ],
    "atk": 70,
    "chargeMoves": [
      "Bug Buzz",
      "Air Cutter",
      "Silver Wind"
    ],
    "speed": 65
  },
  "Cherrim": {
    "spDef": 78,
    "types": [
      "GRASS"
    ],
    "spAtk": 87,
    "def": 70,
    "hp": 70,
    "quickMoves": [
      "Razor Leaf",
      "Bullet Seed"
    ],
    "atk": 60,
    "chargeMoves": [
      "Power Whip",
      "Hyper Beam",
      "Solarbeam"
    ],
    "speed": 85
  },
  "Crobat": {
    "spDef": 80,
    "types": [
      "POISON",
      "FLYING"
    ],
    "spAtk": 70,
    "def": 80,
    "hp": 85,
    "quickMoves": [
      "Air Slash",
      "Bite"
    ],
    "atk": 90,
    "chargeMoves": [
      "Sludge Bomb",
      "Shadow Ball",
      "Air Cutter"
    ],
    "speed": 130
  },
  "Rayquaza": {
    "spDef": 90,
    "types": [
      "DRAGON",
      "FLYING"
    ],
    "spAtk": 150,
    "def": 90,
    "hp": 105,
    "quickMoves": [
      "Dragon Tail",
      "Air Slash"
    ],
    "atk": 150,
    "chargeMoves": [
      "Outrage",
      "Aerial Ace",
      "Ancient Power"
    ],
    "speed": 95
  },
  "Ninetails": {
    "spDef": 100,
    "types": [
      "FIRE"
    ],
    "spAtk": 81,
    "def": 75,
    "hp": 73,
    "quickMoves": [
      "Fire Spin",
      "Ember",
      "Feint Attack"
    ],
    "atk": 76,
    "chargeMoves": [
      "Overheat",
      "Fire Blast",
      "Flamethrower",
      "Heat Wave",
      "Solarbeam"
    ],
    "speed": 100
  },
  "Kingdra": {
    "spDef": 95,
    "types": [
      "WATER",
      "DRAGON"
    ],
    "spAtk": 95,
    "def": 95,
    "hp": 75,
    "quickMoves": [
      "Waterfall",
      "Dragon Breath",
      "Water Gun"
    ],
    "atk": 95,
    "chargeMoves": [
      "Hydro Pump",
      "Blizzard",
      "Outrage"
    ],
    "speed": 85
  },
  "Electrode": {
    "spDef": 80,
    "types": [
      "ELECTRIC"
    ],
    "spAtk": 80,
    "def": 70,
    "hp": 60,
    "quickMoves": [
      "Tackle",
      "Volt Switch",
      "Spark"
    ],
    "atk": 50,
    "chargeMoves": [
      "Hyper Beam",
      "Thunderbolt",
      "Discharge"
    ],
    "speed": 150
  },
  "Houndoom": {
    "spDef": 80,
    "types": [
      "DARK",
      "FIRE"
    ],
    "spAtk": 110,
    "def": 50,
    "hp": 75,
    "quickMoves": [
      "Fire Fang",
      "Snarl"
    ],
    "atk": 90,
    "chargeMoves": [
      "Foul Play",
      "Fire Blast",
      "Crunch"
    ],
    "speed": 95
  },
  "Manectric": {
    "spDef": 60,
    "types": [
      "ELECTRIC"
    ],
    "spAtk": 105,
    "def": 60,
    "hp": 70,
    "quickMoves": [
      "Snarl",
      "Charge Beam"
    ],
    "atk": 75,
    "chargeMoves": [
      "Thunder",
      "Wild Charge",
      "Flame Burst"
    ],
    "speed": 105
  },
  "Heatran": {
    "spDef": 106,
    "types": [
      "FIRE",
      "STEEL"
    ],
    "spAtk": 130,
    "def": 106,
    "hp": 91,
    "quickMoves": [
      "Fire Spin",
      "Bug Bite"
    ],
    "atk": 90,
    "chargeMoves": [
      "Fire Blast",
      "Iron Head",
      "Stone Edge"
    ],
    "speed": 77
  },
  "Entei": {
    "spDef": 75,
    "types": [
      "FIRE"
    ],
    "spAtk": 90,
    "def": 85,
    "hp": 115,
    "quickMoves": [
      "Fire Fang",
      "Fire Spin"
    ],
    "atk": 115,
    "chargeMoves": [
      "Overheat",
      "Fire Blast",
      "Flamethrower"
    ],
    "speed": 100
  },
  "Drapion": {
    "spDef": 75,
    "types": [
      "POISON",
      "DARK"
    ],
    "spAtk": 60,
    "def": 110,
    "hp": 70,
    "quickMoves": [
      "Poison Sting",
      "Infestation"
    ],
    "atk": 90,
    "chargeMoves": [
      "Crunch",
      "Aqua Tail",
      "Sludge Bomb"
    ],
    "speed": 95
  },
  "Azumarill": {
    "spDef": 80,
    "types": [
      "WATER",
      "FAIRY"
    ],
    "spAtk": 60,
    "def": 80,
    "hp": 100,
    "quickMoves": [
      "Bubble",
      "Rock Smash"
    ],
    "atk": 50,
    "chargeMoves": [
      "Hydro Pump",
      "Play Rough",
      "Ice Beam"
    ],
    "speed": 50
  },
  "Starmie": {
    "spDef": 85,
    "types": [
      "WATER",
      "PSYCHIC"
    ],
    "spAtk": 100,
    "def": 85,
    "hp": 60,
    "quickMoves": [
      "Water Gun",
      "Tackle",
      "Quick Attack",
      "Hidden Power"
    ],
    "atk": 75,
    "chargeMoves": [
      "Hydro Pump",
      "Psychic",
      "Power Gem",
      "Psybeam"
    ],
    "speed": 115
  },
  "Gyarados": {
    "spDef": 100,
    "types": [
      "WATER",
      "FLYING"
    ],
    "spAtk": 60,
    "def": 79,
    "hp": 95,
    "quickMoves": [
      "Waterfall",
      "Dragon Tail",
      "Dragon Breath",
      "Bite"
    ],
    "atk": 125,
    "chargeMoves": [
      "Hydro Pump",
      "Outrage",
      "Dragon Pulse",
      "Crunch",
      "Twister"
    ],
    "speed": 81
  },
  "Hariyama": {
    "spDef": 60,
    "types": [
      "FIGHTING"
    ],
    "spAtk": 40,
    "def": 60,
    "hp": 144,
    "quickMoves": [
      "Counter",
      "Bullet Punch"
    ],
    "atk": 120,
    "chargeMoves": [
      "Close Combat",
      "Dynamic Punch",
      "Heavy Slam"
    ],
    "speed": 50
  },
  "Alolan Persian": {
    "spDef": 65,
    "types": [
      "DARK"
    ],
    "spAtk": 75,
    "def": 60,
    "hp": 65,
    "quickMoves": [
      "Feint Attack",
      "Scratch"
    ],
    "atk": 60,
    "chargeMoves": [
      "Foul Play",
      "Dark Pulse",
      "Play Rough"
    ],
    "speed": 115
  },
  "Nidoqueen": {
    "spDef": 85,
    "types": [
      "POISON",
      "GROUND"
    ],
    "spAtk": 75,
    "def": 87,
    "hp": 90,
    "quickMoves": [
      "Poison Jab",
      "Bite"
    ],
    "atk": 92,
    "chargeMoves": [
      "Stone Edge",
      "Sludge Wave",
      "Earthquake"
    ],
    "speed": 76
  },
  "Manaphy": {
    "spDef": 100,
    "types": [
      "WATER"
    ],
    "spAtk": 100,
    "def": 100,
    "hp": 100,
    "quickMoves": [
      "Waterfall",
      "Bubble"
    ],
    "atk": 100,
    "chargeMoves": [
      "Bubblebeam",
      "Psychic",
      "Surf"
    ],
    "speed": 100
  },
  "Seaking": {
    "spDef": 80,
    "types": [
      "WATER"
    ],
    "spAtk": 65,
    "def": 65,
    "hp": 80,
    "quickMoves": [
      "Waterfall",
      "Poison Jab",
      "Peck"
    ],
    "atk": 92,
    "chargeMoves": [
      "Megahorn",
      "Drill Run",
      "Ice Beam",
      "Water Pulse",
      "Icy Wind"
    ],
    "speed": 68
  },
  "Hitmontop": {
    "spDef": 110,
    "types": [
      "FIGHTING"
    ],
    "spAtk": 35,
    "def": 95,
    "hp": 50,
    "quickMoves": [
      "Counter",
      "Rock Smash"
    ],
    "atk": 95,
    "chargeMoves": [
      "Close Combat",
      "Stone Edge",
      "Gyro Ball"
    ],
    "speed": 70
  },
  "Infernape": {
    "spDef": 71,
    "types": [
      "FIRE",
      "FIGHTING"
    ],
    "spAtk": 104,
    "def": 71,
    "hp": 76,
    "quickMoves": [
      "Fire Spin",
      "Rock Smash"
    ],
    "atk": 104,
    "chargeMoves": [
      "Solarbeam",
      "Flamethrower",
      "Close Combat"
    ],
    "speed": 108
  },
  "Flareon": {
    "spDef": 110,
    "types": [
      "FIRE"
    ],
    "spAtk": 95,
    "def": 60,
    "hp": 65,
    "quickMoves": [
      "Fire Spin",
      "Ember"
    ],
    "atk": 130,
    "chargeMoves": [
      "Overheat",
      "Fire Blast",
      "Heat Wave",
      "Flamethrower",
      "Last Resort"
    ],
    "speed": 65
  },
  "Sudowoodo": {
    "spDef": 65,
    "types": [
      "ROCK"
    ],
    "spAtk": 30,
    "def": 115,
    "hp": 70,
    "quickMoves": [
      "Rock Throw",
      "Counter"
    ],
    "atk": 100,
    "chargeMoves": [
      "Stone Edge",
      "Rock Slide",
      "Earthquake"
    ],
    "speed": 30
  },
  "Garchomp": {
    "spDef": 85,
    "types": [
      "DRAGON",
      "GROUND"
    ],
    "spAtk": 80,
    "def": 95,
    "hp": 108,
    "quickMoves": [
      "Dragon Tail",
      "Mud Shot"
    ],
    "atk": 130,
    "chargeMoves": [
      "Outrage",
      "Earthquake",
      "Fire Blast"
    ],
    "speed": 102
  },
  "Mesprit": {
    "spDef": 105,
    "types": [
      "PSYCHIC"
    ],
    "spAtk": 105,
    "def": 105,
    "hp": 80,
    "quickMoves": [
      "Confusion",
      "Extrasensory"
    ],
    "atk": 105,
    "chargeMoves": [
      "Future Sight",
      "Swift",
      "Blizzard"
    ],
    "speed": 80
  },
  "Unown": {
    "spDef": 48,
    "types": [
      "PSYCHIC"
    ],
    "spAtk": 72,
    "def": 48,
    "hp": 48,
    "quickMoves": [
      "Hidden Power"
    ],
    "atk": 72,
    "chargeMoves": [
      "Struggle"
    ],
    "speed": 48
  },
  "Grumpig": {
    "spDef": 110,
    "types": [
      "PSYCHIC"
    ],
    "spAtk": 90,
    "def": 65,
    "hp": 80,
    "quickMoves": [
      "Extrasensory",
      "Charge Beam"
    ],
    "atk": 45,
    "chargeMoves": [
      "Psychic",
      "Shadow Ball",
      "Mirror Coat"
    ],
    "speed": 80
  },
  "Gastrodon": {
    "spDef": 82,
    "types": [
      "WATER",
      "GROUND"
    ],
    "spAtk": 92,
    "def": 68,
    "hp": 111,
    "quickMoves": [
      "Mud Slap",
      "Hidden Power"
    ],
    "atk": 83,
    "chargeMoves": [
      "Water Pulse",
      "Earthquake",
      "Body Slam"
    ],
    "speed": 39
  },
  "Kricketune": {
    "spDef": 51,
    "types": [
      "BUG"
    ],
    "spAtk": 55,
    "def": 51,
    "hp": 77,
    "quickMoves": [
      "Struggle Bug",
      "Fury Cutter"
    ],
    "atk": 85,
    "chargeMoves": [
      "Bug Buzz",
      "X Scissor",
      "Aerial Ace"
    ],
    "speed": 65
  },
  "Flygon": {
    "spDef": 80,
    "types": [
      "DRAGON",
      "GROUND"
    ],
    "spAtk": 80,
    "def": 80,
    "hp": 80,
    "quickMoves": [
      "Dragon Tail",
      "Mud Shot"
    ],
    "atk": 100,
    "chargeMoves": [
      "Stone Edge",
      "Earthquake",
      "Dragon Claw"
    ],
    "speed": 100
  },
  "Wobbuffet": {
    "spDef": 58,
    "types": [
      "PSYCHIC"
    ],
    "spAtk": 33,
    "def": 58,
    "hp": 190,
    "quickMoves": [
      "Counter",
      "Splash"
    ],
    "atk": 33,
    "chargeMoves": [
      "Mirror Coat"
    ],
    "speed": 33
  },
  "Banette": {
    "spDef": 63,
    "types": [
      "GHOST"
    ],
    "spAtk": 83,
    "def": 65,
    "hp": 64,
    "quickMoves": [
      "Shadow Claw",
      "Hex"
    ],
    "atk": 115,
    "chargeMoves": [
      "Thunder",
      "Shadow Ball",
      "Dazzling Gleam"
    ],
    "speed": 65
  },
  "Bellossom": {
    "spDef": 100,
    "types": [
      "GRASS"
    ],
    "spAtk": 90,
    "def": 95,
    "hp": 75,
    "quickMoves": [
      "Razor Leaf",
      "Acid"
    ],
    "atk": 80,
    "chargeMoves": [
      "Petal Blizzard",
      "Leaf Blade",
      "Dazzling Gleam"
    ],
    "speed": 50
  },
  "Tyranitar": {
    "spDef": 100,
    "types": [
      "ROCK",
      "DARK"
    ],
    "spAtk": 95,
    "def": 110,
    "hp": 100,
    "quickMoves": [
      "Iron Tail",
      "Bite",
      "Smack Down"
    ],
    "atk": 134,
    "chargeMoves": [
      "Stone Edge",
      "Fire Blast",
      "Crunch"
    ],
    "speed": 61
  },
  "Cloyster": {
    "spDef": 45,
    "types": [
      "WATER",
      "ICE"
    ],
    "spAtk": 85,
    "def": 180,
    "hp": 50,
    "quickMoves": [
      "Frost Breath",
      "Ice Shard"
    ],
    "atk": 95,
    "chargeMoves": [
      "Blizzard",
      "Hydro Pump",
      "Avalanche",
      "Aurora Beam",
      "Icy Wind"
    ],
    "speed": 70
  },
  "Chimecho": {
    "spDef": 90,
    "types": [
      "PSYCHIC"
    ],
    "spAtk": 95,
    "def": 80,
    "hp": 75,
    "quickMoves": [
      "Extrasensory",
      "Astonish"
    ],
    "atk": 50,
    "chargeMoves": [
      "Shadow Ball",
      "Psyshock",
      "Energy Ball"
    ],
    "speed": 65
  },
  "Hippowdon": {
    "spDef": 72,
    "types": [
      "GROUND"
    ],
    "spAtk": 68,
    "def": 118,
    "hp": 108,
    "quickMoves": [
      "Fire Fang",
      "Bite"
    ],
    "atk": 112,
    "chargeMoves": [
      "Earthquake",
      "Stone Edge",
      "Body Slam"
    ],
    "speed": 47
  },
  "Solrock": {
    "spDef": 65,
    "types": [
      "ROCK",
      "PSYCHIC"
    ],
    "spAtk": 55,
    "def": 85,
    "hp": 90,
    "quickMoves": [
      "Rock Throw",
      "Confusion"
    ],
    "atk": 95,
    "chargeMoves": [
      "Psychic",
      "Solarbeam",
      "Rock Slide"
    ],
    "speed": 70
  },
  "Charizard": {
    "spDef": 85,
    "types": [
      "FIRE",
      "FLYING"
    ],
    "spAtk": 109,
    "def": 78,
    "hp": 78,
    "quickMoves": [
      "Fire Spin",
      "Air Slash",
      "Ember",
      "Wing Attack"
    ],
    "atk": 84,
    "chargeMoves": [
      "Overheat",
      "Fire Blast",
      "Flamethrower",
      "Dragon Claw",
      "Blast Burn"
    ],
    "speed": 100
  },
  "Vespiqueen": {
    "spDef": 102,
    "types": [
      "BUG",
      "FLYING"
    ],
    "spAtk": 80,
    "def": 102,
    "hp": 70,
    "quickMoves": [
      "Bug Bite",
      "Poison Sting"
    ],
    "atk": 80,
    "chargeMoves": [
      "Bug Buzz",
      "Power Gem",
      "X Scissor"
    ],
    "speed": 40
  },
  "Slaking": {
    "spDef": 65,
    "types": [
      "NORMAL"
    ],
    "spAtk": 95,
    "def": 100,
    "hp": 150,
    "quickMoves": [
      "Yawn"
    ],
    "atk": 160,
    "chargeMoves": [
      "Hyper Beam",
      "Earthquake",
      "Play Rough"
    ],
    "speed": 100
  },
  "Carnivine": {
    "spDef": 72,
    "types": [
      "GRASS"
    ],
    "spAtk": 90,
    "def": 72,
    "hp": 74,
    "quickMoves": [
      "Bite",
      "Vine Whip"
    ],
    "atk": 100,
    "chargeMoves": [
      "Power Whip",
      "Energy Ball",
      "Crunch"
    ],
    "speed": 46
  },
  "Mothim": {
    "spDef": 50,
    "types": [
      "BUG",
      "FLYING"
    ],
    "spAtk": 94,
    "def": 50,
    "hp": 70,
    "quickMoves": [
      "Air Slash",
      "Bug Bite"
    ],
    "atk": 94,
    "chargeMoves": [
      "Psybeam",
      "Aerial Ace",
      "Bug Buzz"
    ],
    "speed": 66
  },
  "Giratina": {
    "spDef": 120,
    "types": [
      "GHOST",
      "DRAGON"
    ],
    "spAtk": 100,
    "def": 120,
    "hp": 150,
    "quickMoves": [
      "Dragon Breath",
      "Shadow Claw"
    ],
    "atk": 100,
    "chargeMoves": [
      "Dragon Claw",
      "Ancient Power",
      "Shadow Sneak"
    ],
    "speed": 90
  },
  "Umbreon": {
    "spDef": 130,
    "types": [
      "DARK"
    ],
    "spAtk": 60,
    "def": 110,
    "hp": 95,
    "quickMoves": [
      "Snarl",
      "Feint Attack"
    ],
    "atk": 65,
    "chargeMoves": [
      "Foul Play",
      "Dark Pulse",
      "Last Resort"
    ],
    "speed": 65
  },
  "Lopunny": {
    "spDef": 96,
    "types": [
      "NORMAL"
    ],
    "spAtk": 54,
    "def": 83,
    "hp": 65,
    "quickMoves": [
      "Pound",
      "Low Kick"
    ],
    "atk": 76,
    "chargeMoves": [
      "Fire Punch",
      "Hyper Beam",
      "Focus Blast"
    ],
    "speed": 105
  },
  "Octillery": {
    "spDef": 75,
    "types": [
      "WATER"
    ],
    "spAtk": 105,
    "def": 75,
    "hp": 75,
    "quickMoves": [
      "Water Gun",
      "Mud Shot"
    ],
    "atk": 105,
    "chargeMoves": [
      "Gunk Shot",
      "Water Pulse",
      "Aurora Beam"
    ],
    "speed": 45
  },
  "Drifblim": {
    "spDef": 54,
    "types": [
      "GHOST",
      "FLYING"
    ],
    "spAtk": 90,
    "def": 44,
    "hp": 150,
    "quickMoves": [
      "Hex",
      "Astonish"
    ],
    "atk": 80,
    "chargeMoves": [
      "Ominous Wind",
      "Icy Wind",
      "Shadow Ball"
    ],
    "speed": 80
  },
  "Leafeon": {
    "spDef": 65,
    "types": [
      "GRASS"
    ],
    "spAtk": 60,
    "def": 130,
    "hp": 65,
    "quickMoves": [
      "Razor Leaf",
      "Quick Attack"
    ],
    "atk": 110,
    "chargeMoves": [
      "Solarbeam",
      "Leaf Blade",
      "Energy Ball"
    ],
    "speed": 95
  },
  "Mewtwo": {
    "spDef": 90,
    "types": [
      "PSYCHIC"
    ],
    "spAtk": 154,
    "def": 90,
    "hp": 106,
    "quickMoves": [
      "Confusion",
      "Psycho Cut"
    ],
    "atk": 110,
    "chargeMoves": [
      "Psychic",
      "Hyper Beam",
      "Focus Blast",
      "Shadow Ball"
    ],
    "speed": 130
  },
  "Raichu": {
    "spDef": 80,
    "types": [
      "ELECTRIC"
    ],
    "spAtk": 90,
    "def": 55,
    "hp": 60,
    "quickMoves": [
      "Thunder Shock",
      "Spark",
      "Volt Switch"
    ],
    "atk": 90,
    "chargeMoves": [
      "Thunder",
      "Wild Charge",
      "Thunder Punch",
      "Brick Break"
    ],
    "speed": 110
  },
  "Porygon-Z": {
    "spDef": 75,
    "types": [
      "NORMAL"
    ],
    "spAtk": 135,
    "def": 70,
    "hp": 85,
    "quickMoves": [
      "Hidden Power",
      "Charge Beam"
    ],
    "atk": 80,
    "chargeMoves": [
      "Solarbeam",
      "Hyper Beam",
      "Zap Cannon"
    ],
    "speed": 90
  },
  "Kangaskhan": {
    "spDef": 80,
    "types": [
      "NORMAL"
    ],
    "spAtk": 40,
    "def": 80,
    "hp": 105,
    "quickMoves": [
      "Low Kick",
      "Mud Slap"
    ],
    "atk": 95,
    "chargeMoves": [
      "Stomp",
      "Earthquake",
      "Outrage",
      "Brick Break"
    ],
    "speed": 90
  },
  "Noctowl": {
    "spDef": 96,
    "types": [
      "NORMAL",
      "FLYING"
    ],
    "spAtk": 86,
    "def": 50,
    "hp": 100,
    "quickMoves": [
      "Wing Attack",
      "Extrasensory"
    ],
    "atk": 50,
    "chargeMoves": [
      "Sky Attack",
      "Psychic",
      "Night Shade"
    ],
    "speed": 70
  },
  "Dodrio": {
    "spDef": 60,
    "types": [
      "NORMAL",
      "FLYING"
    ],
    "spAtk": 60,
    "def": 70,
    "hp": 60,
    "quickMoves": [
      "Steel Wing",
      "Feint Attack"
    ],
    "atk": 110,
    "chargeMoves": [
      "Brave Bird",
      "Drill Peck",
      "Air Cutter",
      "Aerial Ace"
    ],
    "speed": 110
  },
  "Tropius": {
    "spDef": 87,
    "types": [
      "GRASS",
      "FLYING"
    ],
    "spAtk": 72,
    "def": 83,
    "hp": 99,
    "quickMoves": [
      "Razor Leaf",
      "Air Slash"
    ],
    "atk": 68,
    "chargeMoves": [
      "Leaf Blade",
      "Stomp",
      "Aerial Ace"
    ],
    "speed": 51
  },
  "Rainy Castform": {
    "spDef": 70,
    "types": [
      "WATER"
    ],
    "spAtk": 70,
    "def": 70,
    "hp": 70,
    "quickMoves": [
      "Water Gun",
      "Tackle"
    ],
    "atk": 70,
    "chargeMoves": [
      "Hydro Pump",
      "Weather Ball Water",
      "Thunder"
    ],
    "speed": 70
  },
  "Sunny Castform": {
    "spDef": 70,
    "types": [
      "FIRE"
    ],
    "spAtk": 70,
    "def": 70,
    "hp": 70,
    "quickMoves": [
      "Ember",
      "Tackle"
    ],
    "atk": 70,
    "chargeMoves": [
      "Weather Ball Fire",
      "Fire Blast",
      "Solarbeam"
    ],
    "speed": 70
  },
  "Marowak": {
    "spDef": 80,
    "types": [
      "GROUND"
    ],
    "spAtk": 50,
    "def": 110,
    "hp": 60,
    "quickMoves": [
      "Mud Slap",
      "Rock Smash"
    ],
    "atk": 80,
    "chargeMoves": [
      "Earthquake",
      "Bone Club",
      "Dig"
    ],
    "speed": 45
  },
  "Corsola": {
    "spDef": 95,
    "types": [
      "WATER",
      "ROCK"
    ],
    "spAtk": 65,
    "def": 95,
    "hp": 65,
    "quickMoves": [
      "Bubble",
      "Tackle"
    ],
    "atk": 55,
    "chargeMoves": [
      "Power Gem",
      "Bubble Beam",
      "Rock Blast"
    ],
    "speed": 35
  },
  "Sunflora": {
    "spDef": 85,
    "types": [
      "GRASS"
    ],
    "spAtk": 105,
    "def": 55,
    "hp": 75,
    "quickMoves": [
      "Razor Leaf",
      "Bullet Seed"
    ],
    "atk": 75,
    "chargeMoves": [
      "Petal Blizzard",
      "Solarbeam",
      "Sludge Bomb"
    ],
    "speed": 30
  },
  "Lugia": {
    "spDef": 154,
    "types": [
      "FLYING",
      "PSYCHIC"
    ],
    "spAtk": 90,
    "def": 130,
    "hp": 106,
    "quickMoves": [
      "Dragon Tail",
      "Extrasensory"
    ],
    "atk": 90,
    "chargeMoves": [
      "Future Sight",
      "Sky Attack",
      "Hydro Pump"
    ],
    "speed": 110
  },
  "Latios": {
    "spDef": 110,
    "types": [
      "DRAGON",
      "PSYCHIC"
    ],
    "spAtk": 130,
    "def": 80,
    "hp": 80,
    "quickMoves": [
      "Dragon Breath",
      "Zen Headbutt"
    ],
    "atk": 90,
    "chargeMoves": [
      "Psychic",
      "Solarbeam",
      "Dragon Claw"
    ],
    "speed": 110
  },
  "Celebi": {
    "spDef": 100,
    "types": [
      "GRASS",
      "PSYCHIC"
    ],
    "spAtk": 100,
    "def": 100,
    "hp": 100,
    "quickMoves": [
      "Confusion",
      "Charge Beam"
    ],
    "atk": 100,
    "chargeMoves": [
      "Psychic",
      "Hyper Beam",
      "Dazzling Gleam"
    ],
    "speed": 100
  },
  "Raticate": {
    "spDef": 70,
    "types": [
      "NORMAL"
    ],
    "spAtk": 50,
    "def": 60,
    "hp": 55,
    "quickMoves": [
      "Quick Attack",
      "Bite"
    ],
    "atk": 81,
    "chargeMoves": [
      "Hyper Beam",
      "Hyper Fang",
      "Dig"
    ],
    "speed": 97
  },
  "Primeape": {
    "spDef": 70,
    "types": [
      "FIGHTING"
    ],
    "spAtk": 60,
    "def": 60,
    "hp": 65,
    "quickMoves": [
      "Counter",
      "Karate Chop",
      "Low Kick"
    ],
    "atk": 105,
    "chargeMoves": [
      "Close Combat",
      "Cross Chop",
      "Low Sweep",
      "Night Slash"
    ],
    "speed": 95
  },
  "Armaldo": {
    "spDef": 80,
    "types": [
      "ROCK",
      "BUG"
    ],
    "spAtk": 70,
    "def": 100,
    "hp": 75,
    "quickMoves": [
      "Struggle Bug",
      "Fury Cutter"
    ],
    "atk": 125,
    "chargeMoves": [
      "Cross Poison",
      "Water Pulse",
      "Rock Blast"
    ],
    "speed": 45
  },
  "Slowbro": {
    "spDef": 80,
    "types": [
      "WATER",
      "PSYCHIC"
    ],
    "spAtk": 100,
    "def": 110,
    "hp": 95,
    "quickMoves": [
      "Confusion",
      "Water Gun"
    ],
    "atk": 75,
    "chargeMoves": [
      "Psychic",
      "Ice Beam",
      "Water Pulse"
    ],
    "speed": 30
  },
  "Metagross": {
    "spDef": 90,
    "types": [
      "STEEL",
      "PSYCHIC"
    ],
    "spAtk": 95,
    "def": 130,
    "hp": 80,
    "quickMoves": [
      "Zen Headbutt",
      "Bullet Punch"
    ],
    "atk": 135,
    "chargeMoves": [
      "Meteor Mash",
      "Flash Cannon",
      "Psychic",
      "Earthquake"
    ],
    "speed": 70
  },
  "Alolan Ninetails": {
    "spDef": 100,
    "types": [
      "ICE",
      "FAIRY"
    ],
    "spAtk": 81,
    "def": 75,
    "hp": 73,
    "quickMoves": [
      "Feint Attack",
      "Powder Snow"
    ],
    "atk": 67,
    "chargeMoves": [
      "Blizzard",
      "Dazzling Gleam",
      "Ice Beam"
    ],
    "speed": 109
  },
  "Donphan": {
    "spDef": 60,
    "types": [
      "GROUND"
    ],
    "spAtk": 60,
    "def": 120,
    "hp": 90,
    "quickMoves": [
      "Counter",
      "Tackle"
    ],
    "atk": 120,
    "chargeMoves": [
      "Earthquake",
      "Heavy Slam",
      "Play Rough"
    ],
    "speed": 50
  },
  "Medicham": {
    "spDef": 75,
    "types": [
      "PSYCHIC",
      "FIGHTING"
    ],
    "spAtk": 60,
    "def": 75,
    "hp": 60,
    "quickMoves": [
      "Counter",
      "Psycho Cut"
    ],
    "atk": 60,
    "chargeMoves": [
      "Psychic",
      "Dynamic Punch",
      "Ice Punch"
    ],
    "speed": 80
  },
  "Torkoal": {
    "spDef": 70,
    "types": [
      "FIRE"
    ],
    "spAtk": 85,
    "def": 140,
    "hp": 70,
    "quickMoves": [
      "Fire Spin",
      "Ember"
    ],
    "atk": 85,
    "chargeMoves": [
      "Overheat",
      "Solarbeam",
      "Earthquake"
    ],
    "speed": 20
  },
  "Deoxys": {
    "spDef": 50,
    "types": [
      "PSYCHIC"
    ],
    "spAtk": 150,
    "def": 50,
    "hp": 50,
    "quickMoves": [
      "Zen Headbutt",
      "Charge Beam"
    ],
    "atk": 150,
    "chargeMoves": [
      "Hyper Beam",
      "Thunderbolt",
      "Psycho Boost"
    ],
    "speed": 150
  },
  "Roserade": {
    "spDef": 105,
    "types": [
      "GRASS",
      "POISON"
    ],
    "spAtk": 125,
    "def": 65,
    "hp": 60,
    "quickMoves": [
      "Poison Jab",
      "Razor Leaf"
    ],
    "atk": 70,
    "chargeMoves": [
      "Solarbeam",
      "Sludge Bomb",
      "Dazzling Gleam"
    ],
    "speed": 90
  },
  "Blastoise": {
    "spDef": 105,
    "types": [
      "WATER"
    ],
    "spAtk": 85,
    "def": 100,
    "hp": 79,
    "quickMoves": [
      "Bite",
      "Water Gun"
    ],
    "atk": 83,
    "chargeMoves": [
      "Flash Cannon",
      "Hydro Pump",
      "Ice Beam",
      "Hydro Cannon"
    ],
    "speed": 78
  },
  "Whiscash": {
    "spDef": 71,
    "types": [
      "WATER",
      "GROUND"
    ],
    "spAtk": 76,
    "def": 73,
    "hp": 110,
    "quickMoves": [
      "Water Gun",
      "Mud Shot"
    ],
    "atk": 78,
    "chargeMoves": [
      "Blizzard",
      "Mud Bomb",
      "Water Pulse"
    ],
    "speed": 60
  },
  "Arceus": {
    "spDef": 120,
    "types": [
      "NORMAL"
    ],
    "spAtk": 120,
    "def": 120,
    "hp": 120,
    "quickMoves": [
      "Iron Tail",
      "Shadow Claw"
    ],
    "atk": 120,
    "chargeMoves": [
      "Future Sight",
      "Hyper Beam",
      "Outrage"
    ],
    "speed": 120
  },
  "Magcargo": {
    "spDef": 80,
    "types": [
      "FIRE",
      "ROCK"
    ],
    "spAtk": 90,
    "def": 120,
    "hp": 60,
    "quickMoves": [
      "Rock Throw",
      "Ember"
    ],
    "atk": 50,
    "chargeMoves": [
      "Stone Edge",
      "Overheat",
      "Heat Wave"
    ],
    "speed": 30
  },
  "Uxie": {
    "spDef": 130,
    "types": [
      "PSYCHIC"
    ],
    "spAtk": 75,
    "def": 130,
    "hp": 75,
    "quickMoves": [
      "Confusion",
      "Extrasensory"
    ],
    "atk": 75,
    "chargeMoves": [
      "Future Sight",
      "Swift",
      "Thunder"
    ],
    "speed": 95
  },
  "Pinsir": {
    "spDef": 70,
    "types": [
      "BUG"
    ],
    "spAtk": 55,
    "def": 100,
    "hp": 65,
    "quickMoves": [
      "Rock Smash",
      "Bug Bite",
      "Fury Cutter"
    ],
    "atk": 125,
    "chargeMoves": [
      "Close Combat",
      "X Scissor",
      "Submission",
      "Vice Grip"
    ],
    "speed": 85
  },
  "Weavile": {
    "spDef": 85,
    "types": [
      "ICE",
      "DARK"
    ],
    "spAtk": 45,
    "def": 65,
    "hp": 70,
    "quickMoves": [
      "Ice Shard",
      "Feint Attack"
    ],
    "atk": 120,
    "chargeMoves": [
      "Avalanche",
      "Focus Blast",
      "Foul Play"
    ],
    "speed": 125
  },
  "Spiritomb": {
    "spDef": 108,
    "types": [
      "GHOST",
      "DARK"
    ],
    "spAtk": 92,
    "def": 108,
    "hp": 50,
    "quickMoves": [
      "Feint Attack",
      "Sucker Punch"
    ],
    "atk": 92,
    "chargeMoves": [
      "Shadow Sneak",
      "Ominous Wind",
      "Shadow Ball"
    ],
    "speed": 35
  },
  "Claydol": {
    "spDef": 120,
    "types": [
      "GROUND",
      "PSYCHIC"
    ],
    "spAtk": 70,
    "def": 105,
    "hp": 60,
    "quickMoves": [
      "Confusion",
      "Extrasensory"
    ],
    "atk": 70,
    "chargeMoves": [
      "Psychic",
      "Earthquake",
      "Gyro Ball"
    ],
    "speed": 75
  },
  "Gorebyss": {
    "spDef": 75,
    "types": [
      "WATER"
    ],
    "spAtk": 114,
    "def": 105,
    "hp": 55,
    "quickMoves": [
      "Confusion",
      "Water Gun"
    ],
    "atk": 84,
    "chargeMoves": [
      "Psychic",
      "Water Pulse",
      "Draining Kiss"
    ],
    "speed": 52
  },
  "Delcatty": {
    "spDef": 55,
    "types": [
      "NORMAL"
    ],
    "spAtk": 55,
    "def": 65,
    "hp": 70,
    "quickMoves": [
      "Zen Headbutt",
      "Feint Attack"
    ],
    "atk": 65,
    "chargeMoves": [
      "Wild Charge",
      "Play Rough",
      "Disarming Voice"
    ],
    "speed": 90
  },
  "Latias": {
    "spDef": 130,
    "types": [
      "DRAGON",
      "PSYCHIC"
    ],
    "spAtk": 110,
    "def": 90,
    "hp": 80,
    "quickMoves": [
      "Dragon Breath",
      "Zen Headbutt"
    ],
    "atk": 80,
    "chargeMoves": [
      "Psychic",
      "Thunder",
      "Outrage"
    ],
    "speed": 110
  },
  "Gengar": {
    "spDef": 75,
    "types": [
      "GHOST",
      "POISON"
    ],
    "spAtk": 130,
    "def": 60,
    "hp": 60,
    "quickMoves": [
      "Shadow Claw",
      "Hex",
      "Sucker Punch"
    ],
    "atk": 65,
    "chargeMoves": [
      "Sludge Wave",
      "Sludge Bomb",
      "Shadow Ball",
      "Focus Blast",
      "Dark Pulse"
    ],
    "speed": 110
  },
  "Altaria": {
    "spDef": 105,
    "types": [
      "DRAGON",
      "FLYING"
    ],
    "spAtk": 70,
    "def": 90,
    "hp": 75,
    "quickMoves": [
      "Dragon Breath",
      "Peck"
    ],
    "atk": 70,
    "chargeMoves": [
      "Sky Attack",
      "Dragon Pulse",
      "Dazzling Gleam"
    ],
    "speed": 50
  },
  "Moltres": {
    "spDef": 85,
    "types": [
      "FIRE",
      "FLYING"
    ],
    "spAtk": 125,
    "def": 90,
    "hp": 90,
    "quickMoves": [
      "Fire Spin",
      "Ember"
    ],
    "atk": 100,
    "chargeMoves": [
      "Overheat",
      "Fire Blast",
      "Flamethrower",
      "Heat Wave"
    ],
    "speed": 90
  },
  "Persian": {
    "spDef": 65,
    "types": [
      "NORMAL"
    ],
    "spAtk": 65,
    "def": 60,
    "hp": 65,
    "quickMoves": [
      "Scratch",
      "Feint Attack"
    ],
    "atk": 70,
    "chargeMoves": [
      "Foul Play",
      "Play Rough",
      "Power Gem",
      "Night Slash"
    ],
    "speed": 115
  },
  "Togekiss": {
    "spDef": 115,
    "types": [
      "FAIRY",
      "FLYING"
    ],
    "spAtk": 120,
    "def": 95,
    "hp": 85,
    "quickMoves": [
      "Air Slash",
      "Hidden Power"
    ],
    "atk": 50,
    "chargeMoves": [
      "Ancient Power",
      "Dazzling Gleam",
      "Aerial Ace"
    ],
    "speed": 80
  },
  "Hypno": {
    "spDef": 115,
    "types": [
      "PSYCHIC"
    ],
    "spAtk": 73,
    "def": 70,
    "hp": 85,
    "quickMoves": [
      "Confusion",
      "Zen Headbutt"
    ],
    "atk": 73,
    "chargeMoves": [
      "Future Sight",
      "Psychic",
      "Focus Blast",
      "Shadow Ball",
      "Psyshock"
    ],
    "speed": 67
  },
  "Floatzel": {
    "spDef": 50,
    "types": [
      "WATER"
    ],
    "spAtk": 85,
    "def": 55,
    "hp": 85,
    "quickMoves": [
      "Water Gun",
      "Waterfall"
    ],
    "atk": 105,
    "chargeMoves": [
      "Aqua Jet",
      "Hydro Pump",
      "Swift"
    ],
    "speed": 115
  },
  "Victreebel": {
    "spDef": 70,
    "types": [
      "GRASS",
      "POISON"
    ],
    "spAtk": 100,
    "def": 65,
    "hp": 80,
    "quickMoves": [
      "Razor Leaf",
      "Acid"
    ],
    "atk": 105,
    "chargeMoves": [
      "Solarbeam",
      "Sludge Bomb",
      "Leaf Blade"
    ],
    "speed": 70
  },
  "Qwilfish": {
    "spDef": 55,
    "types": [
      "WATER"
    ],
    "spAtk": 55,
    "def": 85,
    "hp": 65,
    "quickMoves": [
      "Water Gun",
      "Poison Sting"
    ],
    "atk": 95,
    "chargeMoves": [
      "Sludge Wave",
      "Aqua Tail",
      "Ice Beam"
    ],
    "speed": 85
  },
  "Crawdaunt": {
    "spDef": 55,
    "types": [
      "WATER",
      "DARK"
    ],
    "spAtk": 90,
    "def": 85,
    "hp": 63,
    "quickMoves": [
      "Waterfall",
      "Snarl"
    ],
    "atk": 120,
    "chargeMoves": [
      "Bubble Beam",
      "Night Slash",
      "Vice Grip"
    ],
    "speed": 55
  },
  "Lanturn": {
    "spDef": 76,
    "types": [
      "WATER",
      "ELECTRIC"
    ],
    "spAtk": 76,
    "def": 58,
    "hp": 125,
    "quickMoves": [
      "Water Gun",
      "Charge Beam"
    ],
    "atk": 58,
    "chargeMoves": [
      "Thunder",
      "Hydro Pump",
      "Thunderbolt"
    ],
    "speed": 67
  },
  "Castform": {
    "spDef": 70,
    "types": [
      "NORMAL"
    ],
    "spAtk": 70,
    "def": 70,
    "hp": 70,
    "quickMoves": [
      "Tackle",
      "Hex"
    ],
    "atk": 70,
    "chargeMoves": [
      "Hurricane",
      "Weather Ball Fire",
      "Energy Ball"
    ],
    "speed": 70
  },
  "Jynx": {
    "spDef": 95,
    "types": [
      "ICE",
      "PSYCHIC"
    ],
    "spAtk": 115,
    "def": 35,
    "hp": 65,
    "quickMoves": [
      "Confusion",
      "Frost Breath",
      "Pound"
    ],
    "atk": 50,
    "chargeMoves": [
      "Avalanche",
      "Ice Punch",
      "Psyshock",
      "Draining Kiss"
    ],
    "speed": 95
  },
  "Skuntank": {
    "spDef": 61,
    "types": [
      "POISON",
      "DARK"
    ],
    "spAtk": 71,
    "def": 67,
    "hp": 103,
    "quickMoves": [
      "Poison Jab",
      "Bite"
    ],
    "atk": 93,
    "chargeMoves": [
      "Crunch",
      "Flamethrower",
      "Sludge Bomb"
    ],
    "speed": 84
  },
  "Chatot": {
    "spDef": 42,
    "types": [
      "NORMAL",
      "FLYING"
    ],
    "spAtk": 92,
    "def": 45,
    "hp": 76,
    "quickMoves": [
      "Peck",
      "Steel Wing"
    ],
    "atk": 65,
    "chargeMoves": [
      "Night Shade",
      "Sky Attack",
      "Heat Wave"
    ],
    "speed": 91
  },
  "Rotom": {
    "spDef": 77,
    "types": [
      "GHOST",
      "ELECTRIC"
    ],
    "spAtk": 95,
    "def": 77,
    "hp": 50,
    "quickMoves": [
      "Tackle",
      "Thunder Shock"
    ],
    "atk": 50,
    "chargeMoves": [
      "Ominous Wind",
      "Thunderbolt",
      "Thunder"
    ],
    "speed": 91
  },
  "Xatu": {
    "spDef": 70,
    "types": [
      "PSYCHIC",
      "FLYING"
    ],
    "spAtk": 95,
    "def": 70,
    "hp": 65,
    "quickMoves": [
      "Air Slash",
      "Feint Attack"
    ],
    "atk": 75,
    "chargeMoves": [
      "Future Sight",
      "Aerial Ace",
      "Ominous Wind"
    ],
    "speed": 95
  },
  "Shedinja": {
    "spDef": 30,
    "types": [
      "BUG",
      "GHOST"
    ],
    "spAtk": 30,
    "def": 45,
    "hp": 1,
    "quickMoves": [
      "Struggle Bug",
      "Bite"
    ],
    "atk": 90,
    "chargeMoves": [
      "Aerial Ace",
      "Dig",
      "Shadow Sneak"
    ],
    "speed": 40
  },
  "Toxicroak": {
    "spDef": 65,
    "types": [
      "POISON",
      "FIGHTING"
    ],
    "spAtk": 86,
    "def": 65,
    "hp": 83,
    "quickMoves": [
      "Poison Jab",
      "Counter"
    ],
    "atk": 106,
    "chargeMoves": [
      "Dynamic Punch",
      "Mud Bomb",
      "Sludge Bomb"
    ],
    "speed": 85
  },
  "Rhyperior": {
    "spDef": 55,
    "types": [
      "ROCK",
      "GROUND"
    ],
    "spAtk": 55,
    "def": 130,
    "hp": 115,
    "quickMoves": [
      "Mud Slap",
      "Smack Down"
    ],
    "atk": 140,
    "chargeMoves": [
      "Surf",
      "Earthquake",
      "Stone Edge"
    ],
    "speed": 40
  },
  "Salamence": {
    "spDef": 80,
    "types": [
      "DRAGON",
      "FLYING"
    ],
    "spAtk": 110,
    "def": 80,
    "hp": 95,
    "quickMoves": [
      "Dragon Tail",
      "Fire Fang"
    ],
    "atk": 135,
    "chargeMoves": [
      "Draco Meteor",
      "Hydro Pump",
      "Fire Blast"
    ],
    "speed": 100
  },
  "Mismagius": {
    "spDef": 105,
    "types": [
      "GHOST"
    ],
    "spAtk": 105,
    "def": 60,
    "hp": 60,
    "quickMoves": [
      "Sucker Punch",
      "Hex"
    ],
    "atk": 60,
    "chargeMoves": [
      "Shadow Ball",
      "Dark Pulse",
      "Dazzling Gleam"
    ],
    "speed": 105
  },
  "Ludicolo": {
    "spDef": 100,
    "types": [
      "GRASS",
      "WATER"
    ],
    "spAtk": 90,
    "def": 70,
    "hp": 80,
    "quickMoves": [
      "Razor Leaf",
      "Bubble"
    ],
    "atk": 70,
    "chargeMoves": [
      "Hydro Pump",
      "Solarbeam",
      "Blizzard"
    ],
    "speed": 70
  },
  "Delibird": {
    "spDef": 45,
    "types": [
      "ICE",
      "FLYING"
    ],
    "spAtk": 65,
    "def": 45,
    "hp": 45,
    "quickMoves": [
      "Ice Shard",
      "Quick Attack"
    ],
    "atk": 55,
    "chargeMoves": [
      "Ice Punch",
      "Aerial Ace",
      "Icy Wind"
    ],
    "speed": 75
  },
  "Vileplume": {
    "spDef": 90,
    "types": [
      "GRASS",
      "POISON"
    ],
    "spAtk": 110,
    "def": 85,
    "hp": 75,
    "quickMoves": [
      "Razor Leaf",
      "Acid"
    ],
    "atk": 80,
    "chargeMoves": [
      "Petal Blizzard",
      "Solarbeam",
      "Moonblast"
    ],
    "speed": 50
  },
  "Blissey": {
    "spDef": 135,
    "types": [
      "NORMAL"
    ],
    "spAtk": 75,
    "def": 10,
    "hp": 255,
    "quickMoves": [
      "Pound",
      "Zen Headbutt"
    ],
    "atk": 10,
    "chargeMoves": [
      "Hyper Beam",
      "Psychic",
      "Dazzling Gleam"
    ],
    "speed": 55
  },
  "Lickitung": {
    "spDef": 75,
    "types": [
      "NORMAL"
    ],
    "spAtk": 60,
    "def": 75,
    "hp": 90,
    "quickMoves": [
      "Zen Headbutt",
      "Lick"
    ],
    "atk": 55,
    "chargeMoves": [
      "Hyper Beam",
      "Stomp",
      "Power Whip"
    ],
    "speed": 30
  },
  "Tentacruel": {
    "spDef": 120,
    "types": [
      "WATER",
      "POISON"
    ],
    "spAtk": 80,
    "def": 65,
    "hp": 80,
    "quickMoves": [
      "Poison Jab",
      "Acid"
    ],
    "atk": 70,
    "chargeMoves": [
      "Blizzard",
      "Hydro Pump",
      "Sludge Wave"
    ],
    "speed": 100
  },
  "Tangrowth": {
    "spDef": 50,
    "types": [
      "GRASS"
    ],
    "spAtk": 110,
    "def": 125,
    "hp": 100,
    "quickMoves": [
      "Vine Whip",
      "Infestation"
    ],
    "atk": 100,
    "chargeMoves": [
      "Ancient Power",
      "Sludge Bomb",
      "Solarbeam"
    ],
    "speed": 50
  },
  "Electivire": {
    "spDef": 85,
    "types": [
      "ELECTRIC"
    ],
    "spAtk": 95,
    "def": 67,
    "hp": 75,
    "quickMoves": [
      "Thunder Shock",
      "Low Kick"
    ],
    "atk": 123,
    "chargeMoves": [
      "Thunder Punch",
      "Wild Charge",
      "Thunder"
    ],
    "speed": 95
  },
  "Empoleon": {
    "spDef": 101,
    "types": [
      "WATER",
      "STEEL"
    ],
    "spAtk": 111,
    "def": 88,
    "hp": 84,
    "quickMoves": [
      "Waterfall",
      "Metal Claw"
    ],
    "atk": 86,
    "chargeMoves": [
      "Hydro Pump",
      "Blizzard",
      "Flash Cannon"
    ],
    "speed": 60
  },
  "Milotic": {
    "spDef": 125,
    "types": [
      "WATER"
    ],
    "spAtk": 100,
    "def": 79,
    "hp": 95,
    "quickMoves": [
      "Dragon Tail",
      "Water Gun",
      "Waterfall"
    ],
    "atk": 60,
    "chargeMoves": [
      "Hyper Beam",
      "Blizzard",
      "Surf"
    ],
    "speed": 81
  },
  "Heracross": {
    "spDef": 95,
    "types": [
      "BUG",
      "FIGHTING"
    ],
    "spAtk": 40,
    "def": 75,
    "hp": 80,
    "quickMoves": [
      "Counter",
      "Struggle Bug"
    ],
    "atk": 125,
    "chargeMoves": [
      "Close Combat",
      "Megahorn",
      "Earthquake"
    ],
    "speed": 85
  },
  "Alolan Marowak": {
    "spDef": 80,
    "types": [
      "GHOST",
      "FIRE"
    ],
    "spAtk": 50,
    "def": 110,
    "hp": 60,
    "quickMoves": [
      "Rock Smash",
      "Hex"
    ],
    "atk": 80,
    "chargeMoves": [
      "Shadow Ball",
      "Fire Blast",
      "Bone Club"
    ],
    "speed": 45
  },
  "Zapdos": {
    "spDef": 90,
    "types": [
      "ELECTRIC",
      "FLYING"
    ],
    "spAtk": 125,
    "def": 85,
    "hp": 90,
    "quickMoves": [
      "Thunder Shock",
      "Charge Beam"
    ],
    "atk": 90,
    "chargeMoves": [
      "Thunder",
      "Zap Cannon",
      "Thunderbolt",
      "Discharge"
    ],
    "speed": 100
  },
  "Luxray": {
    "spDef": 79,
    "types": [
      "ELECTRIC"
    ],
    "spAtk": 95,
    "def": 79,
    "hp": 80,
    "quickMoves": [
      "Spark",
      "Snarl"
    ],
    "atk": 120,
    "chargeMoves": [
      "Hyper Beam",
      "Wild Charge",
      "Crunch"
    ],
    "speed": 70
  },
  "Swalot": {
    "spDef": 83,
    "types": [
      "POISON"
    ],
    "spAtk": 73,
    "def": 83,
    "hp": 100,
    "quickMoves": [
      "Rock Smash",
      "Infestation"
    ],
    "atk": 73,
    "chargeMoves": [
      "Gunk Shot",
      "Sludge Bomb",
      "Ice Beam"
    ],
    "speed": 55
  },
  "Wailord": {
    "spDef": 45,
    "types": [
      "WATER"
    ],
    "spAtk": 90,
    "def": 45,
    "hp": 170,
    "quickMoves": [
      "Water Gun",
      "Zen Headbutt"
    ],
    "atk": 90,
    "chargeMoves": [
      "Surf",
      "Blizzard",
      "Hyper Beam"
    ],
    "speed": 60
  },
  "Wigglytuff": {
    "spDef": 50,
    "types": [
      "NORMAL",
      "FAIRY"
    ],
    "spAtk": 85,
    "def": 45,
    "hp": 140,
    "quickMoves": [
      "Pound",
      "Feint Attack"
    ],
    "atk": 70,
    "chargeMoves": [
      "Hyper Beam",
      "Play Rough",
      "Dazzling Gleam"
    ],
    "speed": 45
  },
  "Mawile": {
    "spDef": 55,
    "types": [
      "STEEL",
      "FAIRY"
    ],
    "spAtk": 55,
    "def": 85,
    "hp": 50,
    "quickMoves": [
      "Bite",
      "Astonish"
    ],
    "atk": 85,
    "chargeMoves": [
      "Play Rough",
      "Iron Head",
      "Vice Grip"
    ],
    "speed": 50
  },
  "Ariados": {
    "spDef": 70,
    "types": [
      "BUG",
      "POISON"
    ],
    "spAtk": 60,
    "def": 70,
    "hp": 70,
    "quickMoves": [
      "Infestation",
      "Poison Sting"
    ],
    "atk": 90,
    "chargeMoves": [
      "Megahorn",
      "Cross Poison",
      "Shadow Sneak"
    ],
    "speed": 40
  },
  "Sceptile": {
    "spDef": 85,
    "types": [
      "GRASS"
    ],
    "spAtk": 105,
    "def": 65,
    "hp": 70,
    "quickMoves": [
      "Bullet Seed",
      "Fury Cutter"
    ],
    "atk": 85,
    "chargeMoves": [
      "Leaf Blade",
      "Earthquake",
      "Aerial Ace"
    ],
    "speed": 120
  },
  "Miltank": {
    "spDef": 70,
    "types": [
      "NORMAL"
    ],
    "spAtk": 40,
    "def": 105,
    "hp": 95,
    "quickMoves": [
      "Tackle",
      "Zen Headbutt"
    ],
    "atk": 80,
    "chargeMoves": [
      "Stomp",
      "Body Slam",
      "Gyro Ball"
    ],
    "speed": 100
  },
  "Hitmonlee": {
    "spDef": 110,
    "types": [
      "FIGHTING"
    ],
    "spAtk": 35,
    "def": 53,
    "hp": 50,
    "quickMoves": [
      "Rock Smash",
      "Low Kick"
    ],
    "atk": 120,
    "chargeMoves": [
      "Close Combat",
      "Stone Edge",
      "Stomp",
      "Brick Break",
      "Low Sweep"
    ],
    "speed": 87
  },
  "Kabutops": {
    "spDef": 70,
    "types": [
      "ROCK",
      "WATER"
    ],
    "spAtk": 65,
    "def": 105,
    "hp": 60,
    "quickMoves": [
      "Rock Smash",
      "Fury Cutter",
      "Mud Shot"
    ],
    "atk": 115,
    "chargeMoves": [
      "Stone Edge",
      "Water Pulse",
      "Ancient Power"
    ],
    "speed": 80
  },
  "Deoxys Attack Form": {
    "spDef": 20,
    "types": [
      "PSYCHIC"
    ],
    "spAtk": 180,
    "def": 20,
    "hp": 50,
    "quickMoves": [
      "Zen Headbutt",
      "Poison Jab"
    ],
    "atk": 180,
    "chargeMoves": [
      "Zap Cannon",
      "Dark Pulse",
      "Psycho Boost"
    ],
    "speed": 150
  },
  "Dialga": {
    "spDef": 100,
    "types": [
      "DRAGON",
      "STEEL"
    ],
    "spAtk": 150,
    "def": 120,
    "hp": 100,
    "quickMoves": [
      "Dragon Breath",
      "Metal Claw"
    ],
    "atk": 120,
    "chargeMoves": [
      "Draco Meteor",
      "Iron Head",
      "Thunder"
    ],
    "speed": 90
  },
  "Aggron": {
    "spDef": 60,
    "types": [
      "STEEL",
      "ROCK"
    ],
    "spAtk": 60,
    "def": 180,
    "hp": 70,
    "quickMoves": [
      "Iron Tail",
      "Dragon Tail"
    ],
    "atk": 110,
    "chargeMoves": [
      "Stone Edge",
      "Thunder",
      "Heavy Slam"
    ],
    "speed": 50
  },
  "Venusaur": {
    "spDef": 100,
    "types": [
      "GRASS",
      "POISON"
    ],
    "spAtk": 100,
    "def": 83,
    "hp": 80,
    "quickMoves": [
      "Razor Leaf",
      "Vine Whip"
    ],
    "atk": 82,
    "chargeMoves": [
      "Petal Blizzard",
      "Solarbeam",
      "Sludge Bomb",
      "Frenzy Plant"
    ],
    "speed": 80
  },
  "Spinda": {
    "spDef": 60,
    "types": [
      "NORMAL"
    ],
    "spAtk": 60,
    "def": 60,
    "hp": 60,
    "quickMoves": [
      "Sucker Punch",
      "Psycho Cut"
    ],
    "atk": 60,
    "chargeMoves": [
      "Dig",
      "Rock Tomb",
      "Icy Wind"
    ],
    "speed": 60
  },
  "Muk": {
    "spDef": 100,
    "types": [
      "POISON"
    ],
    "spAtk": 65,
    "def": 75,
    "hp": 105,
    "quickMoves": [
      "Poison Jab",
      "Acid",
      "Lick",
      "Infestation"
    ],
    "atk": 105,
    "chargeMoves": [
      "Gunk Shot",
      "Sludge Wave",
      "Dark Pulse"
    ],
    "speed": 50
  },
  "Articuno": {
    "spDef": 125,
    "types": [
      "ICE",
      "FLYING"
    ],
    "spAtk": 95,
    "def": 100,
    "hp": 90,
    "quickMoves": [
      "Frost Breath"
    ],
    "atk": 85,
    "chargeMoves": [
      "Blizzard",
      "Ice Beam",
      "Icy Wind"
    ],
    "speed": 85
  },
  "Dewgong": {
    "spDef": 95,
    "types": [
      "WATER",
      "ICE"
    ],
    "spAtk": 70,
    "def": 80,
    "hp": 90,
    "quickMoves": [
      "Iron Tail",
      "Frost Breath",
      "Ice Shard"
    ],
    "atk": 70,
    "chargeMoves": [
      "Blizzard",
      "Water Pulse",
      "Aurora Beam",
      "Icy Wind",
      "Aqua Jet"
    ],
    "speed": 70
  },
  "Tauros": {
    "spDef": 70,
    "types": [
      "NORMAL"
    ],
    "spAtk": 40,
    "def": 95,
    "hp": 75,
    "quickMoves": [
      "Tackle",
      "Zen Headbutt"
    ],
    "atk": 100,
    "chargeMoves": [
      "Earthquake",
      "Iron Head",
      "Horn Attack"
    ],
    "speed": 110
  },
  "Quagsire": {
    "spDef": 65,
    "types": [
      "WATER",
      "GROUND"
    ],
    "spAtk": 65,
    "def": 85,
    "hp": 95,
    "quickMoves": [
      "Water Gun",
      "Mud Shot"
    ],
    "atk": 85,
    "chargeMoves": [
      "Stone Edge",
      "Earthquake",
      "Sludge Bomb"
    ],
    "speed": 35
  },
  "Luvdisc": {
    "spDef": 65,
    "types": [
      "WATER"
    ],
    "spAtk": 40,
    "def": 55,
    "hp": 43,
    "quickMoves": [
      "Water Gun",
      "Splash"
    ],
    "atk": 30,
    "chargeMoves": [
      "Water Pulse",
      "Draining Kiss",
      "Aqua Jet"
    ],
    "speed": 97
  },
  "Probopass": {
    "spDef": 150,
    "types": [
      "ROCK",
      "STEEL"
    ],
    "spAtk": 75,
    "def": 145,
    "hp": 60,
    "quickMoves": [
      "Rock Throw",
      "Spark"
    ],
    "atk": 55,
    "chargeMoves": [
      "Magnet Bomb",
      "Rock Slide",
      "Thunderbolt"
    ],
    "speed": 40
  },
  "Skarmory": {
    "spDef": 70,
    "types": [
      "STEEL",
      "FLYING"
    ],
    "spAtk": 40,
    "def": 140,
    "hp": 65,
    "quickMoves": [
      "Steel Wing",
      "Air Slash"
    ],
    "atk": 80,
    "chargeMoves": [
      "Brave Bird",
      "Flash Cannon",
      "Sky Attack"
    ],
    "speed": 70
  },
  "Dusknoir": {
    "spDef": 135,
    "types": [
      "GHOST"
    ],
    "spAtk": 65,
    "def": 135,
    "hp": 45,
    "quickMoves": [
      "Hex",
      "Astonish"
    ],
    "atk": 100,
    "chargeMoves": [
      "Ominous Wind",
      "Psychic",
      "Dark Pulse"
    ],
    "speed": 45
  },
  "Walrein": {
    "spDef": 90,
    "types": [
      "WATER",
      "ICE"
    ],
    "spAtk": 95,
    "def": 90,
    "hp": 110,
    "quickMoves": [
      "Waterfall",
      "Frost Breath"
    ],
    "atk": 80,
    "chargeMoves": [
      "Blizzard",
      "Earthquake",
      "Water Pulse"
    ],
    "speed": 65
  },
  "Breloom": {
    "spDef": 60,
    "types": [
      "GRASS",
      "FIGHTING"
    ],
    "spAtk": 60,
    "def": 80,
    "hp": 60,
    "quickMoves": [
      "Counter",
      "Bullet Seed"
    ],
    "atk": 130,
    "chargeMoves": [
      "Dynamic Punch",
      "Sludge Bomb",
      "Seed Bomb"
    ],
    "speed": 70
  },
  "Kecleon": {
    "spDef": 120,
    "types": [
      "NORMAL"
    ],
    "spAtk": 60,
    "def": 70,
    "hp": 60,
    "quickMoves": [
      "Lick",
      "Sucker Punch"
    ],
    "atk": 90,
    "chargeMoves": [
      "Thunder",
      "Foul Play",
      "Flamethrower",
      "Ice Beam",
      "Aerial Ace",
      "Shadow Sneak"
    ],
    "speed": 40
  },
  "Cacturne": {
    "spDef": 60,
    "types": [
      "GRASS",
      "DARK"
    ],
    "spAtk": 115,
    "def": 60,
    "hp": 70,
    "quickMoves": [
      "Sucker Punch",
      "Poison Jab"
    ],
    "atk": 115,
    "chargeMoves": [
      "Grass Knot",
      "Dynamic Punch",
      "Dark Pulse"
    ],
    "speed": 55
  },
  "Illumise": {
    "spDef": 85,
    "types": [
      "BUG"
    ],
    "spAtk": 73,
    "def": 75,
    "hp": 65,
    "quickMoves": [
      "Struggle Bug",
      "Tackle"
    ],
    "atk": 47,
    "chargeMoves": [
      "Dazzling Gleam",
      "Bug Buzz",
      "Silver Wind"
    ],
    "speed": 85
  },
  "Mew": {
    "spDef": 100,
    "types": [
      "PSYCHIC"
    ],
    "spAtk": 100,
    "def": 100,
    "hp": 100,
    "quickMoves": [
      "Pound"
    ],
    "atk": 100,
    "chargeMoves": [
      "Psychic",
      "Thunder",
      "Blizzard",
      "Hyper Beam",
      "Focus Blast",
      "Hurricane",
      "Solarbeam",
      "Moonblast",
      "Fire Blast",
      "Earthquake",
      "Dragon Pulse"
    ],
    "speed": 100
  },
  "Alakazam": {
    "spDef": 95,
    "types": [
      "PSYCHIC"
    ],
    "spAtk": 135,
    "def": 45,
    "hp": 55,
    "quickMoves": [
      "Confusion",
      "Psycho Cut"
    ],
    "atk": 50,
    "chargeMoves": [
      "Future Sight",
      "Psychic",
      "Focus Blast",
      "Shadow Ball",
      "Dazzling Gleam"
    ],
    "speed": 120
  },
  "Nidoking": {
    "spDef": 75,
    "types": [
      "POISON",
      "GROUND"
    ],
    "spAtk": 85,
    "def": 77,
    "hp": 81,
    "quickMoves": [
      "Iron Tail",
      "Poison Jab",
      "Fury Cutter"
    ],
    "atk": 102,
    "chargeMoves": [
      "Megahorn",
      "Sludge Wave",
      "Earthquake"
    ],
    "speed": 85
  },
  "Sandslash": {
    "spDef": 55,
    "types": [
      "GROUND"
    ],
    "spAtk": 45,
    "def": 110,
    "hp": 75,
    "quickMoves": [
      "Metal Claw",
      "Mud Shot"
    ],
    "atk": 100,
    "chargeMoves": [
      "Earthquake",
      "Bulldoze",
      "Rock Tomb"
    ],
    "speed": 65
  },
  "Farfetchd": {
    "spDef": 62,
    "types": [
      "NORMAL",
      "FLYING"
    ],
    "spAtk": 58,
    "def": 55,
    "hp": 52,
    "quickMoves": [
      "Air Slash",
      "Cut",
      "Fury Cutter"
    ],
    "atk": 90,
    "chargeMoves": [
      "Leaf Blade",
      "Air Cutter",
      "Aerial Ace"
    ],
    "speed": 60
  },
  "Groudon": {
    "spDef": 90,
    "types": [
      "GROUND"
    ],
    "spAtk": 100,
    "def": 140,
    "hp": 100,
    "quickMoves": [
      "Dragon Tail",
      "Mud Shot"
    ],
    "atk": 150,
    "chargeMoves": [
      "Earthquake",
      "Solarbeam",
      "Fire Blast"
    ],
    "speed": 90
  },
  "Beedrill": {
    "spDef": 80,
    "types": [
      "BUG",
      "POISON"
    ],
    "spAtk": 45,
    "def": 40,
    "hp": 65,
    "quickMoves": [
      "Poison Jab",
      "Bug Bite",
      "Infestation"
    ],
    "atk": 90,
    "chargeMoves": [
      "Sludge Bomb",
      "X Scissor",
      "Aerial Ace"
    ],
    "speed": 75
  },
  "Cradily": {
    "spDef": 107,
    "types": [
      "GRASS",
      "ROCK"
    ],
    "spAtk": 81,
    "def": 97,
    "hp": 86,
    "quickMoves": [
      "Acid",
      "Infestation"
    ],
    "atk": 81,
    "chargeMoves": [
      "Stone Edge",
      "Grass Knot",
      "Bulldoze"
    ],
    "speed": 43
  },
  "Lickilicky": {
    "spDef": 95,
    "types": [
      "NORMAL"
    ],
    "spAtk": 80,
    "def": 95,
    "hp": 110,
    "quickMoves": [
      "Lick",
      "Zen Headbutt"
    ],
    "atk": 85,
    "chargeMoves": [
      "Hyper Beam",
      "Earthquake",
      "Solarbeam"
    ],
    "speed": 50
  },
  "Ninjask": {
    "spDef": 50,
    "types": [
      "BUG",
      "FLYING"
    ],
    "spAtk": 50,
    "def": 45,
    "hp": 61,
    "quickMoves": [
      "Metal Claw",
      "Fury Cutter"
    ],
    "atk": 90,
    "chargeMoves": [
      "Shadow Ball",
      "Bug Buzz",
      "Aerial Ace"
    ],
    "speed": 160
  },
  "Ambipom": {
    "spDef": 66,
    "types": [
      "NORMAL"
    ],
    "spAtk": 60,
    "def": 66,
    "hp": 75,
    "quickMoves": [
      "Scratch",
      "Astonish"
    ],
    "atk": 100,
    "chargeMoves": [
      "Low Sweep",
      "Hyper Beam",
      "Aerial Ace"
    ],
    "speed": 115
  },
  "Magnezone": {
    "spDef": 90,
    "types": [
      "ELECTRIC",
      "STEEL"
    ],
    "spAtk": 130,
    "def": 115,
    "hp": 70,
    "quickMoves": [
      "Spark",
      "Charge Beam"
    ],
    "atk": 70,
    "chargeMoves": [
      "Zap Cannon",
      "Wild Charge",
      "Flash Cannon"
    ],
    "speed": 60
  },
  "Dunsparce": {
    "spDef": 65,
    "types": [
      "NORMAL"
    ],
    "spAtk": 65,
    "def": 70,
    "hp": 100,
    "quickMoves": [
      "Bite",
      "Astonish"
    ],
    "atk": 70,
    "chargeMoves": [
      "Rock Slide",
      "Drill Run",
      "Dig"
    ],
    "speed": 45
  },
  "Typlosion": {
    "spDef": 85,
    "types": [
      "FIRE"
    ],
    "spAtk": 109,
    "def": 78,
    "hp": 78,
    "quickMoves": [
      "Shadow Claw",
      "Ember"
    ],
    "atk": 84,
    "chargeMoves": [
      "Overheat",
      "Fire Blast",
      "Solarbeam",
      "Blast Burn"
    ],
    "speed": 100
  },
  "Lunatone": {
    "spDef": 85,
    "types": [
      "ROCK",
      "PSYCHIC"
    ],
    "spAtk": 95,
    "def": 65,
    "hp": 90,
    "quickMoves": [
      "Rock Throw",
      "Confusion"
    ],
    "atk": 55,
    "chargeMoves": [
      "Psychic",
      "Rock Slide",
      "Moonblast"
    ],
    "speed": 70
  },
  "Kingler": {
    "spDef": 50,
    "types": [
      "WATER"
    ],
    "spAtk": 50,
    "def": 115,
    "hp": 55,
    "quickMoves": [
      "Bubble",
      "Metal Claw",
      "Mud Shot"
    ],
    "atk": 130,
    "chargeMoves": [
      "X Scissor",
      "Water Pulse",
      "Vice Grip"
    ],
    "speed": 75
  },
  "Darkrai": {
    "spDef": 90,
    "types": [
      "DARK"
    ],
    "spAtk": 135,
    "def": 90,
    "hp": 70,
    "quickMoves": [
      "Snarl",
      "Feint Attack"
    ],
    "atk": 90,
    "chargeMoves": [
      "Focus Blast",
      "Shadow Ball",
      "Dark Pulse"
    ],
    "speed": 125
  },
  "Hitmonchan": {
    "spDef": 110,
    "types": [
      "FIGHTING"
    ],
    "spAtk": 35,
    "def": 70,
    "hp": 50,
    "quickMoves": [
      "Counter",
      "Rock Smash",
      "Bullet Punch"
    ],
    "atk": 105,
    "chargeMoves": [
      "Close Combat",
      "Brick Break",
      "Ice Punch",
      "Thunder Punch",
      "Fire Punch"
    ],
    "speed": 76
  },
  "Ledian": {
    "spDef": 110,
    "types": [
      "BUG",
      "FLYING"
    ],
    "spAtk": 55,
    "def": 50,
    "hp": 55,
    "quickMoves": [
      "Bug Bite",
      "Struggle Bug"
    ],
    "atk": 35,
    "chargeMoves": [
      "Bug Buzz",
      "Aerial Ace",
      "Silver Wind"
    ],
    "speed": 85
  },
  "Alolan Sandslash": {
    "spDef": 65,
    "types": [
      "ICE",
      "STEEL"
    ],
    "spAtk": 25,
    "def": 120,
    "hp": 75,
    "quickMoves": [
      "Metal Claw",
      "Powder Snow"
    ],
    "atk": 100,
    "chargeMoves": [
      "Blizzard",
      "Gyro Ball",
      "Night Slash"
    ],
    "speed": 65
  },
  "Torterra": {
    "spDef": 85,
    "types": [
      "GRASS",
      "GROUND"
    ],
    "spAtk": 75,
    "def": 105,
    "hp": 95,
    "quickMoves": [
      "Bite",
      "Razor Leaf"
    ],
    "atk": 109,
    "chargeMoves": [
      "Stone Edge",
      "Solarbeam",
      "Earthquake"
    ],
    "speed": 56
  },
  "Bibarel": {
    "spDef": 60,
    "types": [
      "NORMAL",
      "WATER"
    ],
    "spAtk": 55,
    "def": 60,
    "hp": 79,
    "quickMoves": [
      "Water Gun",
      "Take Down"
    ],
    "atk": 85,
    "chargeMoves": [
      "Hyper Fang",
      "Hyper Beam",
      "Surf"
    ],
    "speed": 71
  },
  "Smeargle": {
    "spDef": 45,
    "types": [
      "NORMAL"
    ],
    "spAtk": 20,
    "def": 35,
    "hp": 55,
    "quickMoves": [
      "Tackle"
    ],
    "atk": 20,
    "chargeMoves": [
      "Struggle"
    ],
    "speed": 75
  },
  "Aerodactyl": {
    "spDef": 75,
    "types": [
      "ROCK",
      "FLYING"
    ],
    "spAtk": 60,
    "def": 65,
    "hp": 80,
    "quickMoves": [
      "Steel Wing",
      "Bite"
    ],
    "atk": 105,
    "chargeMoves": [
      "Hyper Beam",
      "Iron Head",
      "Ancient Power"
    ],
    "speed": 130
  },
  "Gallade": {
    "spDef": 115,
    "types": [
      "PSYCHIC",
      "FIGHTING"
    ],
    "spAtk": 65,
    "def": 65,
    "hp": 68,
    "quickMoves": [
      "Confusion",
      "Low Kick"
    ],
    "atk": 125,
    "chargeMoves": [
      "Close Combat",
      "Psychic",
      "Leaf Blade"
    ],
    "speed": 80
  },
  "Regirock": {
    "spDef": 100,
    "types": [
      "ROCK"
    ],
    "spAtk": 50,
    "def": 200,
    "hp": 80,
    "quickMoves": [
      "Rock Throw",
      "Rock Smash"
    ],
    "atk": 100,
    "chargeMoves": [
      "Stone Edge",
      "Focus Blast",
      "Zap Cannon"
    ],
    "speed": 50
  },
  "Parasect": {
    "spDef": 80,
    "types": [
      "GRASS",
      "BUG"
    ],
    "spAtk": 60,
    "def": 80,
    "hp": 60,
    "quickMoves": [
      "Struggle Bug",
      "Bug Bite",
      "Fury Cutter"
    ],
    "atk": 95,
    "chargeMoves": [
      "Solarbeam",
      "X Scissor",
      "Cross Poison"
    ],
    "speed": 30
  },
  "Butterfree": {
    "spDef": 80,
    "types": [
      "BUG",
      "FLYING"
    ],
    "spAtk": 90,
    "def": 50,
    "hp": 60,
    "quickMoves": [
      "Bug Bite",
      "Confusion",
      "Struggle Bug"
    ],
    "atk": 45,
    "chargeMoves": [
      "Psychic",
      "Signal Beam",
      "Bug Buzz"
    ],
    "speed": 70
  },
  "Camerupt": {
    "spDef": 75,
    "types": [
      "FIRE",
      "GROUND"
    ],
    "spAtk": 105,
    "def": 70,
    "hp": 70,
    "quickMoves": [
      "Rock Smash",
      "Ember"
    ],
    "atk": 100,
    "chargeMoves": [
      "Overheat",
      "Earthquake",
      "Solarbeam"
    ],
    "speed": 40
  },
  "Snorlax": {
    "spDef": 110,
    "types": [
      "NORMAL"
    ],
    "spAtk": 65,
    "def": 65,
    "hp": 160,
    "quickMoves": [
      "Lick",
      "Zen Headbutt"
    ],
    "atk": 110,
    "chargeMoves": [
      "Hyper Beam",
      "Heavy Slam",
      "Earthquake",
      "Body Slam"
    ],
    "speed": 30
  },
  "Honchkrow": {
    "spDef": 52,
    "types": [
      "DARK",
      "FLYING"
    ],
    "spAtk": 105,
    "def": 52,
    "hp": 100,
    "quickMoves": [
      "Peck",
      "Snarl"
    ],
    "atk": 125,
    "chargeMoves": [
      "Brave Bird",
      "Psychic",
      "Dark Pulse"
    ],
    "speed": 71
  },
  "Lapras": {
    "spDef": 95,
    "types": [
      "WATER",
      "ICE"
    ],
    "spAtk": 85,
    "def": 80,
    "hp": 130,
    "quickMoves": [
      "Frost Breath",
      "Ice Shard",
      "Water Gun"
    ],
    "atk": 85,
    "chargeMoves": [
      "Blizzard",
      "Hydro Pump",
      "Surf",
      "Ice Beam",
      "Dragon Pulse"
    ],
    "speed": 60
  },
  "Deoxys Speed Form": {
    "spDef": 90,
    "types": [
      "PSYCHIC"
    ],
    "spAtk": 95,
    "def": 90,
    "hp": 50,
    "quickMoves": [
      "Zen Headbutt",
      "Charge Beam"
    ],
    "atk": 95,
    "chargeMoves": [
      "Zap Cannon",
      "Swift",
      "Psycho Boost"
    ],
    "speed": 180
  },
  "Seviper": {
    "spDef": 60,
    "types": [
      "POISON"
    ],
    "spAtk": 100,
    "def": 60,
    "hp": 73,
    "quickMoves": [
      "Poison Jab",
      "Iron Tail"
    ],
    "atk": 100,
    "chargeMoves": [
      "Poison Fang",
      "Crunch",
      "Wrap"
    ],
    "speed": 65
  },
  "Meganium": {
    "spDef": 100,
    "types": [
      "GRASS"
    ],
    "spAtk": 83,
    "def": 100,
    "hp": 80,
    "quickMoves": [
      "Razor Leaf",
      "Vine Whip"
    ],
    "atk": 82,
    "chargeMoves": [
      "Petal Blizzard",
      "Solarbeam",
      "Earthquake",
      "Frenzy Plant"
    ],
    "speed": 80
  },
  "Jumpluff": {
    "spDef": 95,
    "types": [
      "GRASS",
      "FLYING"
    ],
    "spAtk": 55,
    "def": 70,
    "hp": 75,
    "quickMoves": [
      "Bullet Seed",
      "Infestation"
    ],
    "atk": 55,
    "chargeMoves": [
      "Solarbeam",
      "Dazzling Gleam",
      "Energy Ball"
    ],
    "speed": 110
  },
  "Pidgeot": {
    "spDef": 70,
    "types": [
      "NORMAL",
      "FLYING"
    ],
    "spAtk": 70,
    "def": 75,
    "hp": 83,
    "quickMoves": [
      "Steel Wing",
      "Air Slash",
      "Wing Attack"
    ],
    "atk": 80,
    "chargeMoves": [
      "Brave Bird",
      "Hurricane",
      "Air Cutter",
      "Aerial Ace"
    ],
    "speed": 101
  },
  "Exploud": {
    "spDef": 73,
    "types": [
      "NORMAL"
    ],
    "spAtk": 91,
    "def": 64,
    "hp": 104,
    "quickMoves": [
      "Bite",
      "Astonish"
    ],
    "atk": 91,
    "chargeMoves": [
      "Fire Blast",
      "Crunch",
      "Disarming Voice"
    ],
    "speed": 68
  }
};

export default POKEMON_DATA
