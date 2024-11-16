import { Box } from "@mui/material";
import BarChartDynamic from "../../../components/BarChartDynamic";
import Header from "../../../components/Header";

const LibrariesDynamic = ({ data }) => {
  // const cachedData = useSessionCache("librariesData", data);

  return (
    <Box height="50vh" flex="1" minWidth="48%">
      <Header subtitle="Top Libraries" />
      <BarChartDynamic data={data} type="libraries" />
    </Box>
  );
};

export default LibrariesDynamic;
