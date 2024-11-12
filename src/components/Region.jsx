import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function State() {
  // Set initial state to 10 to select "All" by default
  const [state, setState] = React.useState(10);

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">State</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={state}
        label="State"
        onChange={handleChange}
      >
        <MenuItem value={10}>All</MenuItem>
        <MenuItem value={20}>NY</MenuItem>
        <MenuItem value={30}>CA</MenuItem>
      </Select>
    </FormControl>
  );
}
