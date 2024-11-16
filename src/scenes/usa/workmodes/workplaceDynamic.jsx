import React, { useEffect, useState } from 'react';
import { Box } from "@mui/material";
import PieChartDynamic from "../../../components/PieChartDynamic";
import { fetchWorkModes } from "../../../api/dataService";

const WorkPlace = ({ selectedRole, selectedState }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the work modes data
        const fetchedData = await fetchWorkModes({
          country: "United States",
          role: selectedRole,
          state: selectedState,
        });

        // Transform the data into the required format for PieChartDynamic
        if (fetchedData && fetchedData.workplace) {
          const transformedData = fetchedData.workplace.map((item) => ({
            id: item.id,
            label: item.label,
            value: item.value,
          }));
          setData(transformedData);
        } else {
          setData([]); // Set an empty array if no data is available
        }
      } catch (error) {
        console.error("Failed to fetch workplace data:", error);
      }
    };

    fetchData();
  }, [selectedRole, selectedState]);

  return (
    <Box height="50vh" flex="1" minWidth="48%">
      <PieChartDynamic
        data={data}  // Using the transformed data
        title="Work Modes Distribution"
      />
    </Box>
  );
};

export default WorkPlace;
