import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// Prop `onRoleChange` to allow the parent component to pass a callback function
export default function Role({ onRoleChange }) {
  // Set initial state to 'Software Engineer' to select by default
  const [role, setRole] = React.useState("Software Engineer");

  const handleChange = (event) => {
    setRole(event.target.value);
    // Call the callback function passed by the parent component
    onRoleChange(event.target.value);
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
        <MenuItem value="Software Engineer">Software Engineer</MenuItem>
        <MenuItem value="Data Analyst">Data Analyst</MenuItem>
        <MenuItem value="Data Engineer">Data Engineer</MenuItem>
      </Select>
    </FormControl>
  );
}
