import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// Add a prop `onStateChange` to allow the parent component to pass a callback function
export default function State({ onStateChange }) {
  // Set initial state to 'All' to select by default
  const [state, setState] = React.useState("All");

  const handleChange = (event) => {
    setState(event.target.value);
    // Call the callback function passed by the parent component
    onStateChange(event.target.value);
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
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="TX">TX</MenuItem>
        <MenuItem value="CA">CA</MenuItem>
      </Select>
    </FormControl>
  );
}
