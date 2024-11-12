import { Box } from "@mui/material";
import PieChartDynamic from "../../../components/PieChartDynamic";
import { mockWorkPlaceData} from "../../../data/mockData";

const WorkPlace = () => {
  return (
    <Box height="50vh" flex="1" minWidth="48%">
      <PieChartDynamic
        data={mockWorkPlaceData}
        title="Work Modes Distribution"
      />
    </Box>
  );
};

export default WorkPlace;
