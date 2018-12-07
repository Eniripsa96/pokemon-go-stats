import Algorithm from './Algorithm'
import {POKEMON_LIST} from "app/data/Database";

class CPEfficiencyAlgorithm extends Algorithm {
  name = "effectiveness";

  compute(pokemon, quickMove, chargeMove, typeEffectiveness) {
    const dps = this.calcMoveDps(pokemon, quickMove, chargeMove, typeEffectiveness);
    return dps * Math.sqrt(pokemon.getDefense()) * Math.sqrt(pokemon.getStamina());
  }
}

const inst = new CPEfficiencyAlgorithm();
inst.rank(POKEMON_LIST);
export default inst
