import React from 'react';
import {FormControlLabel,} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';

class Toggle extends React.Component {
  render() {
    const {name, label, value, onChange} = this.props;
    return <FormControlLabel
      className="input toggle"
      label={label}
      control={
        <Checkbox
          checked={value}
          onChange={onChange}
          value={name || label}/>
      }/>
  }
}

export default Toggle;
