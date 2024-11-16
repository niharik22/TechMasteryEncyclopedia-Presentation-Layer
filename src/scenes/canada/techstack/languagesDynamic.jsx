import { Box } from "@mui/material";
import BarChartDynamic from "../../../components/BarChartDynamic";


const LanguagesDynamic = ({ data }) => {

  if (!data) return <p>Loading...</p>;

  return (
    <Box height="30vh" flex="1" minWidth="48%">
      <BarChartDynamic data={data} type="languages" />
    </Box>
  );
};

export default LanguagesDynamic;
