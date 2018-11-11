import React from 'react';
import ListInput from './ListInput';

const OPTIONS = ['True', 'False'];

class BooleanInput extends React.Component {
  render() {
    const {value, label, name, error, disabled} = this.props;
    return <ListInput
      value={value ? OPTIONS[0] : OPTIONS[1]}
      options={OPTIONS}
      label={label}
      name={name}
      error={error}
      disabled={disabled}
      onChange={this.onChange}/>;
  }

  onChange = ({target: {value}}) => {
    const result = value === 'True';
    const {name, onChange} = this.props;
    onChange({target: {name, value: result}}, result);
  };
}

export default BooleanInput;
