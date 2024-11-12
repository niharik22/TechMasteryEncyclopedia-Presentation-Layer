import { Box } from "@mui/material";
import BarChartDynamic from "../../../components/BarChartDynamic";
import useSessionCache from "../../../hooks/useSessionCache";
import { mockToolsData } from "../../../data/mockData";
import apiClient from "../../../api/apiClient";
import endpoints from "../../../api/endpoints";

const fetchLibrariesData = async () => {
  return mockToolsData; // Use mock data for libraries
};

const ToolsDynamic = () => {
  const data = useSessionCache("librariesData", fetchLibrariesData);

  if (!data) return <p>Loading...</p>;

  return (
    <Box height="30vh" flex="1" minWidth="48%">
      <BarChartDynamic data={mockToolsData} type="tools" />
    </Box>
  );
};

export default ToolsDynamic;
