import Algorithm from './Algorithm'
import {POKEMON_LIST} from "app/data/Database";

class PvPAlgorithm extends Algorithm {
  name = "pvp";

  compute(pokemon, quickMove, chargeMove, typeEffectiveness) {
    const dps = this.calcPvPMoveDps(pokemon, quickMove, chargeMove, typeEffectiveness);
    return dps * Math.sqrt(pokemon.getDefense()) * Math.sqrt(pokemon.getStamina());
  }
}

const inst = new PvPAlgorithm();
inst.rank(POKEMON_LIST);
export default inst
