import { Box } from "@mui/material";
import BarChartDynamic from "../../../components/BarChartDynamic";
import useSessionCache from "../../../hooks/useSessionCache";
import apiClient from "../../../api/apiClient";
import endpoints from "../../../api/endpoints";

import { mockLangData as originalData } from "../../../data/mockData";

const fetchLanguagesData = async () => {
  // const response = await apiClient.get(endpoints.getLanguages);
  // return response.data;
  return originalData
};

const LanguagesDynamic = () => {
  const data = useSessionCache("languagesData", fetchLanguagesData);

  if (!data) return <p>Loading...</p>;

  return (
    <Box height="30vh" flex="1" minWidth="48%">
      <BarChartDynamic data={originalData} type="languages" />
    </Box>
  );
};

export default LanguagesDynamic;
