import { Box } from "@mui/material";
import BarChartDynamic from "../../../components/BarChartDynamic";
import useSessionCache from "../../../hooks/useSessionCache";


const SkillsDynamic = ({ data }) => {
  // const cachedData = useSessionCache("skillsData", data);

  return (
    <Box height="30vh" flex="1" minWidth="48%">
      <BarChartDynamic data={data} type="skills" />
    </Box>
  );
};

export default SkillsDynamic;
