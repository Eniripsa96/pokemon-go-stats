import React from 'react';

import './PokemonEntry.scss'

class PokemonEntry extends React.Component {
  render() {
    const {result, index, algorithm} = this.props;
    return <div
      className={`poke-entry ${result.display !== result.pokemon ? 'custom-entry' : 'standard-entry'}`}
      onClick={result.quickMove ? null : this.onClick}>

      <span className="poke-index">
        {index}
      </span>
      <span className="poke-rating">
        {result.max ? `${result.min} - ${result.max}` : result.rank}%
      </span>
      <span className="pokemon">
        {result.display}
      </span>
      {result.quickMove
        ? [
          <span className="poke-move" key="quick">
            {result.quickMove}
          </span>,
          <span className="poke-move" key="charge">
            {result.chargeMove}
          </span>
        ]
        : null}
    </div>
  }

  onClick = () => {
    this.props.setPokemon(this.props.result.pokemon);
  }
}

export default PokemonEntry
