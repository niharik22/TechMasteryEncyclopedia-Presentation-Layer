import { Box } from "@mui/material";
import BarChartDynamic from "../../../components/BarChartDynamic";
import useSessionCache from "../../../hooks/useSessionCache";


const ToolsDynamic = ({ data }) => {
  // const cachedData = useSessionCache("toolsData", data);

  return (
    <Box height="30vh" flex="1" minWidth="48%">
      <BarChartDynamic data={data} type="tools" />
    </Box>
  );
};

export default ToolsDynamic;
