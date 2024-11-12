import { Box } from "@mui/material";
import Header from "../../../components/Header";
import Role from "../../../components/Role";
import State from "../../../components/Region";
import Education from "./education";
import WorkPlace from "./workplace";

const WorkModesUSA = () => {
  return (
    <Box m="20px" width="98%">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb="20px"
      >
        <Header title="Top Work Modes & Degrees" />
        <Box display="flex" gap="20px">
          <Role />
          <State />
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-around"
        flexWrap="wrap"
        gap="30px"
      >
        <WorkPlace />

        <Education />
      </Box>
    </Box>
  );
};

export default WorkModesUSA;
