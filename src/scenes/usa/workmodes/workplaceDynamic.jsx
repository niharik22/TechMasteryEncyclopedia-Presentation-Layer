import React, { useEffect, useState } from 'react';
import { Box } from "@mui/material";
import PieChartDynamic from "../../../components/PieChartDynamic";
import { fetchWorkModes } from "../../../api/dataService";

const WorkPlace = ({ selectedRole, selectedState }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Create a unique cache key using role and state
      const cacheKey = `usa-workplace-${selectedRole}-${selectedState}`;
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
        // Fetch the work modes data from the API if no valid cached data is available
        const fetchedData = await fetchWorkModes({
          country: "United States",
          role: selectedRole,
          state: selectedState,
        });

        // Transform and cache the data if it's valid
        if (fetchedData && Array.isArray(fetchedData.workplace)) {
          const transformedData = fetchedData.workplace
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
        console.error("Failed to fetch workplace data:", error);
      }
    };

    fetchData();
  }, [selectedRole, selectedState]);

  // Only render the PieChartDynamic component if there is data
  if (!data || data.length === 0) {
    return null; // Do not render anything if data is empty
  }

  return (
    <Box height="50vh" flex="1" minWidth="48%">
      <PieChartDynamic
        data={data} // Using the transformed data
        title="Work Modes Distribution"
      />
    </Box>
  );
};

export default WorkPlace;
