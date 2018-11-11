import React from 'react';

import Ranks from './Ranks'
import withStyle from 'app/style';
import CPAlgorithm from "pages/stats/CPAlgorithm";
import DefenseAlgorithm from "pages/stats/DefenseAlgorithm";
import DPSAlgorithm from "pages/stats/DPSAlgorithm";
import EffectivenessAlgorithm from "pages/stats/EffectivenessAlgorithm";
import {Card, CardContent} from "material-ui";
import {POKEMON_LIST} from "app/data/Database";
import CustomPokemon from "app/data/CustomPokemon";

const ALGORITHMS = [CPAlgorithm, DefenseAlgorithm, DPSAlgorithm, EffectivenessAlgorithm].reduce((result, algorithm) => {
    result[algorithm.name] = algorithm;
    return result;
}, { });

class PokeResult extends React.Component {
  componentWillMount() {
    const algorithm = ALGORITHMS[this.props.match.params.algorithm];
    const list = [
      ...POKEMON_LIST,
      ...CustomPokemon.transform()
    ];
    algorithm.rank(list);
  }

  render() {
    const { pokemon, algorithm } = this.props.match.params;
    return <div id="home">
      <aside>
        <Card>
          <CardContent>
            <h2>{pokemon}</h2>
          </CardContent>
        </Card>
      </aside>
      <main>
        <Ranks
          algorithm={ALGORITHMS[algorithm]}
          pokemon={pokemon}/>
      </main>
    </div>
  }
}

export default withStyle(PokeResult);
