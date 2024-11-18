import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { fetchRoles } from "../api/dataService"; // Import the fetchRoles function

// Prop `onRoleChange` to allow the parent component to pass a callback function
export default function Role({ onRoleChange }) {
  const [role, setRole] = useState(""); // Initialize role as an empty string
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    // Fetch and cache roles for Canada and the United States on initial load
    const fetchAndCacheRoles = async () => {
      const cacheKey = "rolesData";
      const cachedRoles = sessionStorage.getItem(cacheKey);

      if (cachedRoles) {
        // Use cached data if available
        const parsedRoles = JSON.parse(cachedRoles);
        setRoles(parsedRoles);
        setRole(parsedRoles[0] || ""); // Set the first role as the default if available
      } else {
        try {
          // Fetch roles for Canada and the United States
          const [canadaRoles, usaRoles] = await Promise.all([
            fetchRoles({ country: "Canada" }),
            fetchRoles({ country: "United States" }),
          ]);

          // Combine and set roles
          const allRoles = [
            ...(canadaRoles?.roles || []),
            ...(usaRoles?.roles || []),
          ];

          // Remove duplicates and set the roles
          const uniqueRoles = Array.from(new Set(allRoles));
          setRoles(uniqueRoles);
          setRole(uniqueRoles[0] || ""); // Set the first role as the default if available

          // Cache the data in sessionStorage
          sessionStorage.setItem(cacheKey, JSON.stringify(uniqueRoles));
        } catch (error) {
          console.error("Failed to fetch roles:", error);
        }
      }
    };

    fetchAndCacheRoles();
  }, []);

  const handleChange = (event) => {
    setRole(event.target.value);
    onRoleChange(event.target.value); // Call the callback function passed by the parent component
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
        {roles.map((roleItem, index) => (
          <MenuItem key={index} value={roleItem}>
            {roleItem}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
