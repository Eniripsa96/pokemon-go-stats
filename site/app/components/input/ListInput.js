import React from 'react';
import {MenuItem} from 'material-ui/Menu';
import {InputLabel} from 'material-ui/Input';
import Select from 'material-ui/Select';
import {FormControl} from 'material-ui/Form';

const ListInput = ({value, options, label, name, error, disabled, onChange}) => (
  <FormControl className="input list">
    <InputLabel htmlFor={label}>{label}</InputLabel>
    <Select
      name={name}
      disabled={disabled}
      id={label}
      onChange={onChange}
      value={value}>
      {options.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
    </Select>
  </FormControl>
);

export default ListInput; 
