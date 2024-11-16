import { Box } from "@mui/material";
import Header from "../../../components/Header";
import Role from "../../../components/Role";
import State from "../../../components/Region";
import EducationDynamic from "./educationDynamic";
import WorkPlaceDynamic from "./workplaceDynamic";
import React, { useState } from 'react';

const WorkModesCanada = () => {
  const [role, setRole] = useState("Software Engineer");  // Default role
  const [state, setState] = useState("All");  // Default state

  return (
    <Box m="20px" width="98%">
      <Box display="flex" alignItems="center" justifyContent="space-between" mb="20px">
        <Header title="Top Work Modes & Degrees" />
        <Box display="flex" gap="20px">
          <Role onRoleChange={setRole} />
          <State onStateChange={setState} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-around" flexWrap="wrap" gap="30px">
        <EducationDynamic selectedRole={role} selectedState={state} />
        <WorkPlaceDynamic selectedRole={role} selectedState={state} />
      </Box>
    </Box>
  );
};

export default WorkModesCanada;
