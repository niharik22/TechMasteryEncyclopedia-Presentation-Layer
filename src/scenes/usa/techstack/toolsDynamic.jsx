import { Box } from "@mui/material";
import BarChartDynamic from "../../../components/BarChartDynamic";
import Header from "../../../components/Header";

const ToolsDynamic = ({ data }) => {
  // const cachedData = useSessionCache("toolsData", data);

  return (
    <Box height="50vh" flex="1" minWidth="48%">
      <Header subtitle="Top Tools" />
      <BarChartDynamic data={data} type="tools" />
    </Box>
  );
};

export default ToolsDynamic;
