import Algorithm from './Algorithm'
import {POKEMON_LIST} from "app/data/Database";

const MAX_CPM = 0.79030001;

class PvPAlgorithm extends Algorithm {
  name = "pvp";

  constructor(maxCp) {
    super();
    this.maxCp = maxCp;
  }

  compute(pokemon, quickMove, chargeMove, typeEffectiveness) {
    const dps = this.calcPvPMoveDps(pokemon, quickMove, chargeMove, typeEffectiveness);
    const cp = pokemon.getAttack() * Math.sqrt(pokemon.getDefense()) * Math.sqrt(pokemon.getStamina()) * MAX_CPM * MAX_CPM * 0.1 | 0;
    const cpM = Math.min(1, this.maxCp / cp);
    return cpM * pokemon.getAttack() * pokemon.getDefense() * pokemon.getStamina() * dps;
  }
}

export const pvp1500 = new PvPAlgorithm(1500);
export const pvp2500 = new PvPAlgorithm(2500);
export const pvpAll = new PvPAlgorithm(15000);
