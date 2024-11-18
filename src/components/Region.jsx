import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// Updated to accept `country` as a prop
export default function State({ country, onStateChange }) {
  const [state, setState] = React.useState("All");

  // States for United States and Canada
  const statesUSA = ["All", "CA", "TX", "IL"];
  const statesCanada = ["All", "ON", "BC", "QC"];

  // Determine which states to display based on the country
  const states = country === "Canada" ? statesCanada : statesUSA;

  const handleChange = (event) => {
    setState(event.target.value);
    onStateChange(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="state-select-label">State</InputLabel>
      <Select
        labelId="state-select-label"
        id="state-select"
        value={state}
        label="State"
        onChange={handleChange}
      >
        {states.map((stateOption) => (
          <MenuItem key={stateOption} value={stateOption}>
            {stateOption}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
