import { Box } from "@mui/material";
import BarChartDynamic from "../../../components/BarChartDynamic";
import Header from "../../../components/Header";


const SkillsDynamic = ({ data }) => {
  // const cachedData = useSessionCache("skillsData", data);

  if (!data) return <p>Loading...</p>;

  return (
    <Box height="50vh" flex="1" minWidth="48%">
      <Header subtitle="Top Skills" />
      <BarChartDynamic data={data} type="skills" />
    </Box>
  );
};

export default SkillsDynamic;
