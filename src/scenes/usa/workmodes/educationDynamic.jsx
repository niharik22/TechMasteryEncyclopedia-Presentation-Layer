import React, { useEffect, useState } from 'react';
import { Box } from "@mui/material";
import PieChartDynamic from "../../../components/PieChartDynamic";
import { fetchEducation } from "../../../api/dataService"; 

const Education = ({ selectedRole, selectedState }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Create a unique cache key using the role and state
      const cacheKey = `usa-education-${selectedRole}-${selectedState}`;
      const cachedData = sessionStorage.getItem(cacheKey);

      if (cachedData) {
        // Use cached data if available and valid
        const parsedData = JSON.parse(cachedData);
        if (Array.isArray(parsedData) && parsedData.length > 0) {
          setData(parsedData);
          return;
        }
      }

      try {
        // Fetch the education data from the API if no valid cached data is available
        const fetchedData = await fetchEducation({
          country: "United States",
          role: selectedRole,
          state: selectedState,
        });

        // Transform and cache the data if it's valid
        if (fetchedData && Array.isArray(fetchedData.education)) {
          const transformedData = fetchedData.education
            .filter(item => item && item.label && item.value !== null) // Filter out null or invalid values
            .map(item => ({
              id: item.id,
              label: item.label,
              value: item.value,
            }));

          // Set the transformed data in state
          setData(transformedData);

          // Cache the data in sessionStorage
          sessionStorage.setItem(cacheKey, JSON.stringify(transformedData));
        } else {
          setData([]); // Set an empty array if no valid data is available
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
        data={data} // Use the transformed data here
        title="Education Levels Distribution"
      />
    </Box>
  );
};

export default Education;
