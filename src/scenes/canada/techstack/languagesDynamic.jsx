import { Box } from "@mui/material";
import BarChartDynamic from "../../../components/BarChartDynamic";
import Header from "../../../components/Header";

const LanguagesDynamic = ({ data }) => {

  if (!data) return <p>Loading...</p>;

  return (
    <Box height="50vh" flex="1" minWidth="48%">
      <Header subtitle="Top Languages" />
      <BarChartDynamic data={data} type="languages" />
    </Box>
  );
};

export default LanguagesDynamic;
