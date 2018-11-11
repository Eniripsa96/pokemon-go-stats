import React from 'react';
import Card, {CardContent} from 'material-ui/Card';
import PokemonEntry from "pages/home/PokemonEntry";

class Ranks extends React.Component {
  render() {
    const {algorithm, legendaries, pokemon, type, setPokemon} = this.props;
    const tiers = pokemon
      ? algorithm.resultsByPokemon[pokemon]
      : type && type !== 'All'
        ? legendaries === 'True'
          ? algorithm.rangesByType[type]
          : algorithm.nonLegendRangesByType[type]
        : legendaries === 'True'
          ? algorithm.ranges
          : algorithm.nonLegendRanges;

    return <Card>
      <CardContent>
        <PokemonEntry
          index="Rank"
          result={pokemon
            ? {rank: 'Rating - ', pokemon: 'Pokemon', display: 'Pokemon', quickMove: 'Quick Move', chargeMove: 'ChargeMove' }
            : {rank: 'Rating - ', pokemon: 'Pokemon', display: 'Pokemon' }}/>
        {tiers.map((range, i) => (
          <PokemonEntry index={i + 1} result={range} algorithm={algorithm.name} key={i} setPokemon={setPokemon}/>
        ))}
      </CardContent>
    </Card>
  }
}

export default Ranks
