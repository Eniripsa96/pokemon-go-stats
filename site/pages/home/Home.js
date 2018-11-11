import React from 'react';

import PokemonSidebar from '../loadout/PokemonSidebar';
import Ranks from './Ranks'
import withStyle from 'app/style';

import './home.scss';
import EffectivenessAlgorithm from "pages/stats/EffectivenessAlgorithm";
import {POKEMON_LIST, POKEMON_MAP} from "app/data/Database";
import CustomPokemon from "app/data/CustomPokemon";
import TYPE_TABLE from "app/data/types";

class Home extends React.Component {
  state = {
    algorithm: EffectivenessAlgorithm,
    legendaries: 'False',
    custom: 'True',
    opponent: 'N/A',
    type: 'All',
    pokemon: null
  };

  componentWillMount() {
    this.updateRanks(this.state.algorithm);
  }

  render() {
    const { algorithm, legendaries, custom, opponent, type, pokemon } = this.state;
    return <div id="home">
      <aside>
        <PokemonSidebar
          legends={legendaries}
          setLegendaries={this.setLegendaries}
          setAlgorithm={this.setAlgorithm}
          custom={custom}
          pokemon={pokemon}
          setCustom={this.setCustom}
          opponent={opponent}
          setOpponent={this.setOpponent}
          type={type}
          setType={this.setType}
          clearPokemon={this.clearPokemon}/>
      </aside>

      <main>
        <Ranks
          algorithm={algorithm}
          legendaries={legendaries}
          type={type}
          pokemon={pokemon}
          setPokemon={this.setPokemon}/>
      </main>
    </div>
  }

  setAlgorithm = (algorithm) => {
    this.updateRanks(algorithm);
    this.setState({ algorithm });
  };

  setLegendaries = (e) => {
    this.setState({ legendaries: e.target.value });
  };

  setCustom = (e) => {
    this.setState({ custom: e.target.value }, () => {
      this.updateRanks(this.state.algorithm);
      this.forceUpdate();
    });
  };

  setOpponent = (e) => {
    this.setState({ opponent: e.target.value }, () => {
      this.updateRanks(this.state.algorithm);
      this.forceUpdate();
    });
  };

  setType = (e) => {
    this.setState({ type: e.target.value });
  };

  setPokemon = (poke) => {
      this.setState({ pokemon: poke });
  };

  clearPokemon = () => {
    this.setState({ pokemon: null });
  };

  /**
   * @param {Algorithm} algorithm
   */
  updateRanks(algorithm) {
    const custom = this.state.custom === 'True';
    const list = custom ? [
      ...POKEMON_LIST,
      ...CustomPokemon.transform()
    ] : POKEMON_LIST;
    algorithm.rank(list, this.buildEffectiveness());
  }

  buildEffectiveness() {
    const opponent = POKEMON_MAP[this.state.opponent];
    if (!opponent) return { };

    const effectiveness = { };
    opponent.types.forEach(type => {
      const matchups = TYPE_TABLE[type];
      Object.keys(matchups).forEach(matchup => {
        const current = effectiveness[matchup] || 1;
        effectiveness[matchup] = current * matchups[matchup];
      });
    });
    return effectiveness;
  }
}

export default withStyle(Home);
