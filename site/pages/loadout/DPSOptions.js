import React, {Component} from 'react';
import Card, {CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Tooltip from 'material-ui/Tooltip';

import BooleanInput from 'app/components/input/BooleanInput';
import ListInput from 'app/components/input/ListInput';

const TYPES = [
  'None',
  'Alloy',
  'Cloned',
  'Ferrite',
  'Flesh',
  'Fossil',
  'Infested',
  'Infested Flesh',
  'Machine',
  'Proto',
  'Robotic',
  'Shield',
  'Sinew'
];

const Options = {
  armorType: TYPES,
  healthType: TYPES
};

const Details = {
  headShots: {label: 'Head Shots', info: 'Whether or not to assume you are hitting head shots', melee: false},
  statusProcks: {label: 'Status Procks', info: 'Whether or not to compute status prock damage'},
  viral: {label: 'Viral', info: 'Whether or not to weigh viral into the equation (doubles shot damage when procked)'},
  channeling: {label: 'Channeling', info: 'Whether or not you are channeling with Melee attacks', melee: true},
  enemyType: {
    label: 'Armor Type',
    info: 'The type of armor the enemy you are fighting has. Choose none for general DPS.'
  },
  armorType: {
    label: 'Armor Type',
    info: 'The type of armor the enemy you are fighting has. Choose none for general DPS.'
  },
  healthType: {
    label: 'Health Type',
    info: 'The type of health the enemy you are fighting has. Choose none for general DPS.'
  },
  armorReduction: {
    label: 'Armor Reduction',
    info: 'Percentage of armor shred to assume. Oberon or Corrosive Projection can achieve 100% easily.'
  },
  meleeCombo: {
    label: 'Avg. Melee Combo',
    info: 'Number of consecutive hits before your melee combo resets (without combo duration increase',
    melee: true
  },
  meleeComboScale: {
    label: 'Melee Combo Scale',
    info: 'Number of extra combo hits done on average per second of combo duration extension',
    melee: true
  },
  berserkerCrit: {
    label: 'Berserker Crit',
    info: 'Minimum crit percentage to optimally use berserker (3 stacks constantly)',
    melee: true
  },
  sniperCombo: {label: 'Sniper Combo', info: 'Expected average hits in a row with a sniper rifle', melee: false},
  //seconds: { label: 'Seconds', info: 'Expected average time spent killing an enemy' },
  conditionOverloadBase: {
    label: 'Condition Overload Base',
    info: 'How many different statuses are normally applied by your warframe',
    melee: true
  },
  conditionOverloadScale: {
    label: 'Condition Overload Scale',
    info: 'How many status to assume would be applied with 100% status chance',
    melee: true
  }
};

class DPSOptions extends Component {
  constructor(props) {
    super(props);

    this.defaults = this.state = {
      headShots: false,
      statusProcks: true,
      viral: true,
      channeling: true,
      armorType: 'None',
      healthType: 'None',
      armorReduction: 100,
      meleeCombo: 25,
      meleeComboScale: 5,
      berserkerCrit: 15,
      sniperCombo: 10,
      seconds: 60,
      conditionOverloadBase: 0,
      conditionOverloadScale: 3
    };
  }

  componentDidMount() {
    this.props.generate(this.defaults);
  }

  onChange = (event) => {
    const {target: {name, value}} = event;
    const error = isNaN(value) && !isNaN(this.defaults[name]) ? 'Must be a number' : null;
    this.setState({[name]: value, [name + '-error']: error, warning: null});
  };

  handleReset = () => {
    this.setState(this.defaults);
  };

  handleSubmit = () => {
    if (Object.keys(this.state).find(key => this.state[key] && key.endsWith('-error'))) {
      this.setState({warning: 'Form is not filled out properly'});
    } else {
      this.props.generate(this.state);
    }
  };

  render() {
    return (
      <Card>
        <CardContent>
          <div className="options">
            {this.renderOptions()}
          </div>

          <div className="button-group">
            <Button
              variant="raised"
              onClick={this.handleSubmit}
              color="primary">Generate</Button>
            <Button
              onClick={this.handleReset}
              color="secondary">Reset</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  renderOptions() {
    return Object.keys(this.state).map(key => {
      if (!Details[key] || Details[key].melee !== undefined && Details[key].melee !== this.props.weapon.isMelee()) {
        return null;
      } else if (this.state[key] === undefined) {
        return null;
      }

      const props = {
        name: key,
        label: Details[key].label,
        value: this.state[key],
        error: this.state[key + '-error'],
        helperText: this.state[key + '-error'],
        onChange: this.onChange
      };
      const original = this.defaults[key];
      if (original === true || original === false) {
        return this.withTooltip(key, <BooleanInput {...props} />);
      } else if (Options[key]) {
        return this.withTooltip(key, <ListInput {...props} options={Options[key]}/>);
      } else {
        return this.withTooltip(key, <TextField {...props} />);
      }
    });
  }

  withTooltip(key, element) {
    return <Tooltip title={Details[key].info} key={key}>
      {element}
    </Tooltip>
  }
}

export default DPSOptions;
