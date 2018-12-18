import {POKEMON_MAP} from "app/data/Database";

export const LEGENDARIES = [
  "Giratina", "Dialga", "Palkia", "Kyogre", "Arceus", "Rayquaza", "Groudon",
  "Ho-Oh", "Regigigas", "Lugia", "Mewtwo", "Heatran", "Regirock", "Jirachi",
  "Regice", "Cresselia", "Latias", "Entei", "Manaphy", "Latios", "Moltres",
  "Raikou", "Zapdos", "Mesprit", "Celebi", "Articuno", "Suicune", "Registeel",
  "Mew", "Uxie", "Darkrai", "Azelf", "Deoxys Defense Form", "Deoxys Attack Form",
  "Deoxys Speed Form", "Deoxys"
];

class Algorithm {
  constructor() {
    this.resultsByPokemon = {};
    this.ranges = [];
    this.rangesByType = {};
    this.nonLegendRanges = [];
    this.nonLegendRangesByType = {};
    this.percentage = true;
  }

  rank(pokemonList, typeEffectiveness) {
    this.resultsByPokemon = {};
    this.ranges = [];
    this.rangesByType = {};
    this.nonLegendRanges = [];
    this.nonLegendRangesByType = {};

    pokemonList.forEach(pokemon => {
      const pokemonResults = [];

      const range = {
        pokemon: pokemon.name,
        display: pokemon.nickname || pokemon.name,
        min: Number.MAX_VALUE,
        max: Number.MIN_VALUE
      };

      pokemon.quickMoves.forEach(quickMove => {
        pokemon.chargeMoves.forEach(chargeMove => {
          const rankResult = {
            pokemon: pokemon.name,
            display: pokemon.nickname || pokemon.name,
            quickMove: quickMove.name,
            chargeMove: chargeMove.name
          };
          pokemonResults.push(rankResult);

          const value = this.compute(pokemon, quickMove, chargeMove, typeEffectiveness);
          rankResult.rank = value;

          range.min = Math.min(range.min, value);
          range.max = Math.max(range.max, value);
        });
      });

      this.resultsByPokemon[pokemon.name] = this.resultsByPokemon[pokemon.name] || [];
      pokemonResults.forEach(result => this.resultsByPokemon[pokemon.name].push(result));
      this.ranges.push(range);
    });

    this.rangesByType = this.ranges.reduce((result, range) => {
      POKEMON_MAP[range.pokemon].types.forEach(type => {
        result[type] = result[type] || [];
        result[type].push(this.copy(range));
      });
      return result;
    }, { });

    this.nonLegendRanges = this.copyAll(this.ranges).filter(result => !LEGENDARIES.includes(result.pokemon));
    this.nonLegendRangesByType = this.nonLegendRanges.reduce((result, range) => {
      POKEMON_MAP[range.pokemon].types.forEach(type => {
        result[type] = result[type] || [];
        result[type].push(this.copy(range));
      });
      return result;
    }, { });

    this.finalizeRanges(this.ranges);
    this.finalizeRanges(this.nonLegendRanges);
    Object.keys(this.resultsByPokemon).forEach(pokemon => this.finalizeResults(this.resultsByPokemon[pokemon]));
    Object.keys(this.rangesByType).forEach(type => this.finalizeRanges(this.rangesByType[type]));
    Object.keys(this.nonLegendRangesByType).forEach(type => this.finalizeRanges(this.nonLegendRangesByType[type]));
  }

  copy(result) {
    return { ...result };
  }

  copyAll(results) {
    return results.map(this.copy);
  }

  finalizeResults(resultList) {
    resultList.sort((a, b) => {
      return b.rank - a.rank
    });
    if (this.percentage) {
      const m = 100 / resultList[0].rank;
      resultList.forEach(result => result.rank = Math.round(result.rank * m * 10) / 10);
    }
  }

  finalizeRanges(ranges) {
    ranges.sort((a, b) => {
      if (b.max - a.max !== 0) return b.max - a.max;
      return b.min - a.min;
    });
    if (this.percentage) {
      const m = 100 / ranges[0].max;
      ranges.forEach(range => {
        range.max = Math.round(range.max * m);
        range.min = Math.round(range.min * m);
      });
    }
  }

  /**
   * @return {Number} rank
   */
  compute(pokemon, quickMove, chargeMove, typeEffectiveness) {
  }

  calcMoveDps(pokemon, quickMove, chargeMove, typeEffectiveness = {}) {
    const quickStab = pokemon.types.includes(quickMove.type) ? 1.25 : 1;
    const chargeStab = pokemon.types.includes(chargeMove.type) ? 1.25 : 1;

    const quickEffectiveness = typeEffectiveness[quickMove.type] || 1;
    const chargeEffectiveness = typeEffectiveness[chargeMove.type] || 1;

    const quickDps = 1000 * quickMove.pow * quickStab * quickEffectiveness / quickMove.ms;
    const quickTime = 100 / quickMove.eps;

    return (quickDps * quickTime + chargeStab * chargeEffectiveness * chargeMove.pow * chargeMove.bars)
      / (quickTime + (chargeMove.ms / 1000) * chargeMove.bars);
  }

  calcPvPMoveDps(pokemon, quickMove, chargeMove, typeEffectiveness = { }) {
    const quickStab = pokemon.types.includes(quickMove.type) ? 1.2 : 1;
    const chargeStab = pokemon.types.includes(chargeMove.type) ? 1.2 : 1;

    const quickEffectiveness = typeEffectiveness[quickMove.type] || 1;
    const chargeEffectiveness = typeEffectiveness[chargeMove.type] || 1;

    const quickDps = quickStab * quickMove.pvpPower * 2 / quickMove.pvpTurns;
    const chargeUses = quickMove.pvpEnergy * 2 / (chargeMove.pvpEnergy * quickMove.pvpTurns);

    return (quickDps + chargeStab * chargeMove.pow * chargeUses);
  }
}

export default Algorithm
