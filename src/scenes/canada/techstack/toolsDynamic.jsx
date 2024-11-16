import { Box } from "@mui/material";
import BarChartDynamic from "../../../components/BarChartDynamic";


const ToolsDynamic = ({ data }) => {
  return (
    <Box height="30vh" flex="1" minWidth="48%">
      <BarChartDynamic data={data} type="tools" />
    </Box>
  );
};

export default ToolsDynamic;
