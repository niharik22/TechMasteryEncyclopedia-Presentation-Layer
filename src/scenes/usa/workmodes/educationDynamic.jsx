import { Box } from "@mui/material";
import PieChartDynamic from "../../../components/PieChartDynamic";
import { mockEducationData } from "../../../data/mockData";

const Education = () => {
  return (
    <Box height="50vh" flex="1" minWidth="48%">
      <PieChartDynamic
        data={mockEducationData}
        title="Education Levels Distribution"
      />
    </Box>
  );
};

export default Education;
