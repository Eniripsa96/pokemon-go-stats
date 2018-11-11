import Algorithm from './Algorithm'
import {POKEMON_LIST} from "app/data/Database";

class DPSAlgorithm extends Algorithm {
  name = "dps";

  compute(pokemon, quickMove, chargeMove, typeEffectiveness) {
    const moveDps = this.calcMoveDps(pokemon, quickMove, chargeMove, typeEffectiveness);
    return pokemon.getAttack() * moveDps
  }
}

const inst = new DPSAlgorithm();
inst.rank(POKEMON_LIST);
export default inst
