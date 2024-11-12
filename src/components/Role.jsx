import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Role() {
  // Set initial state to 10 to select "Software Engineer" by default
  const [role, setRole] = React.useState(10);

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Role</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={role}
        label="Role"
        onChange={handleChange}
      >
        <MenuItem value={10}>Software Engineer</MenuItem>
        <MenuItem value={20}>Data Analyst</MenuItem>
        <MenuItem value={30}>Data Scientist</MenuItem>
      </Select>
    </FormControl>
  );
}
