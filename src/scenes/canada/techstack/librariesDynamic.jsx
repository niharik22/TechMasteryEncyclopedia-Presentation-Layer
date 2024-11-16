import { Box } from "@mui/material";
import BarChartDynamic from "../../../components/BarChartDynamic";



const LibrariesDynamic = ({ data }) => {
  return (
    <Box height="30vh" flex="1" minWidth="48%">
      <BarChartDynamic data={data} type="libraries" />
    </Box>
  );
};

export default LibrariesDynamic;
