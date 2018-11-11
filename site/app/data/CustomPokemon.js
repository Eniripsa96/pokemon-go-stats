import {MOVES_MAP} from "app/data/Database";
import POKEMON_DATA from "app/config/pokemon";
import Pokemon from "app/data/Pokemon";

class CustomPokemon {
  constructor() {
    this.data = JSON.parse(localStorage.getItem("pokes") || "[]");
    this.data.sort(this.compare);
  }

  add(pokemon) {
    this.data.push(pokemon);
    this.data.sort(this.compare);
    this.save();
  }

  update(pokemon) {
    const target = this.data.find(poke => poke.nickname === pokemon.nickname);
    Object.assign(target, pokemon);
    this.save();
  }

  save() {
    localStorage.setItem("pokes", JSON.stringify(this.data));
  }

  compare(a, b) {
    return a.nickname < b.nickname ? -1 : a.nickname > b.nickname ? 1 : 0;
  }

  transform(species) {
    let data = this.data;
    if (species) data = this.data.filter(poke => poke.name === species);

    return data.map(this.mapPokemon);
  }

  mapPokemon(customPoke) {
    const config = POKEMON_DATA[customPoke.name];
    const result = new Pokemon(customPoke.name, config, MOVES_MAP);
    result.nickname = customPoke.nickname;
    result.atkIv = customPoke.atkIv;
    result.defIv = customPoke.defIv;
    result.staIv = customPoke.staIv;
    result.quickMoves = [MOVES_MAP[customPoke.quickMove]];
    result.chargeMoves = [MOVES_MAP[customPoke.chargeMove]];
    return result;
  }
}


const inst = new CustomPokemon();
export default inst
