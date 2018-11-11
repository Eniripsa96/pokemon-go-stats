import React from 'react';
import withStyle from 'app/style';
import CustomPokemon from "app/data/CustomPokemon";
import {Button, Card, CardContent, TextField} from "material-ui";
import ListInput from "app/components/input/ListInput";
import {POKEMON_MAP} from "app/data/Database";

import './PokemonEditor.scss'

class PokemonEditor extends React.Component {
  state = {
    poke: CustomPokemon.data[0],
    creating: false
  };

  render() {
    const {poke} = this.state;
    return <div id="home">
      <aside>
        <Card>
          <CardContent>
            <h2>Your Pokemon</h2>
            {CustomPokemon.data.map((poke, i) =>
              <div className="custom-poke" onClick={() => this.select(poke)} key={i}>
                {poke.nickname}
              </div>
            )}
            <Button variant="raised" color="primary" onClick={this.createPokemon}>
              New Pokemon
            </Button>
          </CardContent>
        </Card>
      </aside>

      <main>
        {poke ? this.createForm() : null}
      </main>
    </div>
  }

  createForm() {
    const {poke, creating} = this.state;
    return <Card>
      <CardContent>
        <ListInput
          value={poke.name}
          options={Object.keys(POKEMON_MAP).sort()}
          label="Species"
          name="name"
          onChange={this.onChangeSpecies}
          disabled={!creating}/>
        <TextField
          className="input"
          value={poke.nickname}
          label="Name"
          name="nickname"
          onChange={this.onChange}
          disabled={!creating}/>
        <TextField
          className="input"
          value={poke.atkIv}
          label="Attack IV"
          name="atkIv"
          onChange={this.onChangeInt}/>
        <TextField
          className="input"
          value={poke.defIv}
          label="Defense IV"
          name="defIv"
          onChange={this.onChangeInt}/>
        <TextField
          className="input"
          value={poke.staIv}
          label="Stamina IV"
          name="staIv"
          onChange={this.onChangeInt}/>
        <ListInput
          value={poke.quickMove}
          options={POKEMON_MAP[poke.name].quickMoves.map(move => move.name)}
          label="Quick Move"
          name="quickMove"
          onChange={this.onChange}/>
        <ListInput
          value={poke.chargeMove}
          options={POKEMON_MAP[poke.name].chargeMoves.map(move => move.name)}
          label="Charge Move"
          name="chargeMove"
          onChange={this.onChange}/>

        {creating
          ? <Button variant="raised" color="primary" onClick={this.finish}>Create</Button>
          : <Button variant="raised" color="primary" onClick={this.save}>Save</Button>}
      </CardContent>
    </Card>
  }

  createPokemon = () => {
    const newPoke = {
      name: 'Aggron',
      nickname: 'Da Beast',
      atkIv: 15,
      defIv: 15,
      staIv: 15,
      quickMove: 'Iron Tail',
      chargeMove: 'Heavy Slam'
    };

    this.setState({poke: newPoke, creating: true});
  };

  select = (poke) => {
    this.setState({poke, creating: false});
  };

  onChange = (e) => {
    const {name, value} = e.target;
    this.setState(({poke}) => ({poke: {...poke, [name]: value}}));
  };

  onChangeSpecies = (e) => {
    const {poke} = this.state;
    const species = e.target.value;
    const allowed = POKEMON_MAP[species];
    const adjusted = {
      ...poke,
      name: species,
      quickMove: allowed.quickMoves[0].name,
      chargeMove: allowed.chargeMoves[0].name
    };
    this.setState({poke: adjusted});
  };

  onChangeInt = (e) => {
    const {poke} = this.state;
    try {
      const iv = Math.max(0, Math.min(15, parseInt(e.target.value)));
      this.setState({poke: {...poke, [e.target.name]: iv}});
    } catch (e) {
      this.setState({poke: {...poke, [e.target.name]: 0}});
    }
  };

  save = () => {
    CustomPokemon.update(this.state.poke);
  };

  finish = () => {
    CustomPokemon.add(this.state.poke);
    this.forceUpdate();
  };
}

export default withStyle(PokemonEditor);
