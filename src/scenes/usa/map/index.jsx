import { Box } from "@mui/material";
import Header from "../../../components/Header";
import MapUSAChart from "../../usaMap";

const MapUSA = () => {
  return (
    <Box m="20px" width="95%">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb="20px"
      >
        <Header title="Jobs spread across states" />
      </Box>
      <MapUSAChart />
    </Box>
  );
};

export default MapUSA;
