import POKEMON_DATA from '../config/pokemon'
import MOVES_DATA from '../config/moves'
import Pokemon from "app/data/Pokemon";
import Move from "app/data/Move";

export const MOVES_LIST = Object.keys(MOVES_DATA).map(key => new Move(key, MOVES_DATA[key]));
export const MOVES_MAP = MOVES_LIST.reduce((result, move) => {
  result[move.name] = move;
  return result;
}, { });

export const POKEMON_LIST = Object.keys(POKEMON_DATA).map(key => new Pokemon(key, POKEMON_DATA[key], MOVES_MAP));
export const POKEMON_MAP = POKEMON_LIST.reduce((result, poke) => {
  result[poke.name] = poke;
  return result;
}, { });
