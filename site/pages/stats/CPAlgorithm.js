import Algorithm from './Algorithm'
import {POKEMON_LIST} from "app/data/Database";

const MAX_CPM = 0.79030001;

class CPAlgorithm extends Algorithm {
  name = "cp";

  constructor() {
    super();
    this.percentage = false;
  }

  compute(pokemon) {
    return pokemon.getAttack() * Math.sqrt(pokemon.getDefense()) * Math.sqrt(pokemon.getStamina()) * MAX_CPM * MAX_CPM * 0.1 | 0
  }
}

const inst = new CPAlgorithm();
inst.rank(POKEMON_LIST);
export default inst
