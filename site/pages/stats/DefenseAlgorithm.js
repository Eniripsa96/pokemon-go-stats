import Algorithm from './Algorithm'
import {POKEMON_LIST} from "app/data/Database";

class DefenseAlgorithm extends Algorithm {
  name = "defense";

  compute(pokemon, quickMove, chargeMove, typeEffectiveness = { }) {
    const quickEffectiveness = typeEffectiveness[quickMove.type] || 1;
    const chargeEffectiveness = typeEffectiveness[chargeMove.type] || 1;
    const moveRating = quickMove.pow * 8 * quickEffectiveness
      + chargeMove.pow * (chargeMove.bars * 0.5 + 0.5) * chargeEffectiveness;
    return moveRating * pokemon.getAttack() * pokemon.getDefense() * pokemon.getStamina()
  }
}

const inst = new DefenseAlgorithm();
inst.rank(POKEMON_LIST);
export default inst
