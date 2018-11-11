import React from 'react';
import {Card, CardContent} from "material-ui";
import {FormControl, FormGroup, FormLabel,} from 'material-ui/Form';

import ListInput from 'app/components/input/ListInput';
import Toggle from 'app/components/input/Toggle';
import withStyle from 'app/style';
import {MOD_LIST, Type} from "app/data/Mod";
import {isModEnabled, setModEnabled} from "app/data/ModSettings";

const OPTIONS = [...Object.keys(Type)];

class ModManager extends React.Component {
  state = {
    weapon: Object.keys(Type)[0]
  };

  render() {
    const type = Type[this.state.weapon];
    const mods = MOD_LIST
      .filter(mod => mod.type === type || type === Type.ALL)
      .map(mod => mod.name)
      .sort();

    return <div id="mod">
      <aside>
        <Card>
          <CardContent className="options">
            <h2>Weapon Type</h2>
            <ListInput
              value={this.state.weapon}
              options={OPTIONS}
              label={"Mod Type"}
              onChange={this.changeType}/>
          </CardContent>
        </Card>
      </aside>

      <main>
        <Card>
          <CardContent>
            <FormControl>
              <FormLabel component="legend">Enable/Disable Mods</FormLabel>
              <FormGroup>
                {mods.map(name => <Toggle key={name} label={name} value={isModEnabled(name)}
                                          onChange={this.toggleMod}/>)}
              </FormGroup>
            </FormControl>
          </CardContent>
        </Card>
      </main>
    </div>;
  }

  changeType = ({target: {value}}) => {
    this.setState({weapon: value});
  };

  toggleMod = ({target: {value}}, toggled) => {
    setModEnabled(value, toggled);
    this.forceUpdate();
  };
}

export default withStyle(ModManager);
