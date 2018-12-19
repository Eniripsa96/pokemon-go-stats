import React from 'react';
import Card, {CardContent} from 'material-ui/Card';
import ListInput from "app/components/input/ListInput";
import CPAlgorithm from "pages/stats/CPAlgorithm";
import DefenseAlgorithm from "pages/stats/DefenseAlgorithm";
import DPSAlgorithm from "pages/stats/DPSAlgorithm";
import EffectivenessAlgorithm from "pages/stats/EffectivenessAlgorithm";
import {POKEMON_LIST} from "app/data/Database";
import TYPE_TABLE from "app/data/types";
import {Button} from "material-ui";
import CPEfficiencyAlgorithm from "pages/stats/CPEfficiencyAlgorithm";
import PvPAlgorithm, {pvp1500, pvp2500, pvpAll} from "pages/stats/PvPAlgorithm";

const ALGORITHMS = {
  CP: CPAlgorithm,
  Defense: DefenseAlgorithm,
  DPS: DPSAlgorithm,
  Effectiveness: EffectivenessAlgorithm,
  'CP Efficiency': CPEfficiencyAlgorithm,
  'PvP Great': pvp1500,
  'PvP Ultra': pvp2500,
  'PvP Master': pvpAll
};

const BOOLS = ['True', 'False'];
const OPPONENTS = ['N/A', ...POKEMON_LIST.map(poke => poke.name).sort()];
const TYPES = ['All', ...Object.keys(TYPE_TABLE).sort()];

class PokemonSidebar extends React.Component {
  state = {
    algorithmKey: 'Effectiveness',
    algorithm: EffectivenessAlgorithm
  };

  render() {
    const {algorithmKey} = this.state;
    const {legends, custom, opponent, type, pokemon, setLegendaries, setCustom, setOpponent, setType, clearPokemon} = this.props;
    return <Card>
      <CardContent>
        <h2>Options</h2>
        <ListInput
          value={algorithmKey}
          options={Object.keys(ALGORITHMS)}
          label={"Algorithm"}
          onChange={this.changeAlgorithm}/>
        <ListInput
          value={legends}
          options={BOOLS}
          label={"Legendaries"}
          onChange={setLegendaries}/>
        <ListInput
          value={custom}
          options={BOOLS}
          label={"Show Own Pokemon"}
          onChange={setCustom}/>
        <ListInput
          value={opponent}
          options={OPPONENTS}
          label={"Opponent"}
          onChange={setOpponent}/>
        <ListInput
          value={type}
          options={TYPES}
          label="Type"
          onChange={setType}/>

        {pokemon ? <Button variant="raised" color="primary" onClick={clearPokemon}>View All</Button> : null}
      </CardContent>
    </Card>
  }

  changeAlgorithm = (e) => {
    this.setState({
      algorithm: ALGORITHMS[e.target.value],
      algorithmKey: e.target.value
    }, () => this.props.setAlgorithm(this.state.algorithm));
  }
}

export default PokemonSidebar;
