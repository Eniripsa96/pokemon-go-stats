import Algorithm from './Algorithm'
import {POKEMON_LIST} from "app/data/Database";

class EffectivenessAlgorithm extends Algorithm {
  name = "effectiveness";

  compute(pokemon, quickMove, chargeMove, typeEffectiveness) {
    const dps = this.calcMoveDps(pokemon, quickMove, chargeMove, typeEffectiveness);
    return dps * pokemon.getAttack() * pokemon.getDefense() * pokemon.getStamina();
  }
}

const inst = new EffectivenessAlgorithm();
inst.rank(POKEMON_LIST);
export default inst
