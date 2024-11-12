import { Box } from "@mui/material";
import Header from "../../../components/Header";
import CanadaMap from "../../canadaMap"; 

const MapCanada = () => {
  return (
    <Box m="20px" width="98%">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb="20px"
      >
        <Header title="Jobs spread across province" />
      </Box>
      <CanadaMap />
    </Box>
  );
};

export default MapCanada;
