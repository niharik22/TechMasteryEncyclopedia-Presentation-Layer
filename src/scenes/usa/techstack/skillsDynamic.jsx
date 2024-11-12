import { Box } from "@mui/material";
import BarChartDynamic from "../../../components/BarChartDynamic";
import useSessionCache from "../../../hooks/useSessionCache";
import { mockSkillsData } from "../../../data/mockData";
import apiClient from "../../../api/apiClient";
import endpoints from "../../../api/endpoints";

const fetchSkillsData = async () => {
  return mockSkillsData; // Use mock data for libraries
};

const SkillsDynamic = () => {
  const data = useSessionCache("skillsData", fetchSkillsData);

  if (!data) return <p>Loading...</p>;

  return (
    <Box height="30vh" flex="1" minWidth="48%">
      <BarChartDynamic data={mockSkillsData} type="skills" />
    </Box>
  );
};

export default SkillsDynamic;
