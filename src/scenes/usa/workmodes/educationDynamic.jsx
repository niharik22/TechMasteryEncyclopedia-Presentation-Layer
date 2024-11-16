import React, { useEffect, useState } from 'react';
import { Box } from "@mui/material";
import PieChartDynamic from "../../../components/PieChartDynamic";
import { fetchEducation } from "../../../api/dataService"; 

const Education = ({ selectedRole, selectedState }) => {
  const [data, setData] = useState([]);

  // Fetch education data when the component mounts or when selectedRole or selectedState changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the education data
        const fetchedData = await fetchEducation({
          country: "United States",
          role: selectedRole,
          state: selectedState,
        });

        // Transform the data into the required format for PieChartDynamic
        if (fetchedData && fetchedData.education) {
          const transformedData = fetchedData.education.map((item) => ({
            id: item.id,
            label: item.label,
            value: item.value,
          }));
          setData(transformedData);
        } else {
          setData([]); // Set an empty array if no data is available
        }
      } catch (error) {
        console.error("Failed to fetch education data:", error);
      }
    };

    fetchData();
  }, [selectedRole, selectedState]);

  return (
    <Box height="50vh" flex="1" minWidth="48%">
      <PieChartDynamic
        data={data}  // Use the transformed data here
        title="Education Levels Distribution"
      />
    </Box>
  );
};

export default Education;
