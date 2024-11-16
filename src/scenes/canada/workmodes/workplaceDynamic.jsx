import React, { useEffect, useState } from 'react';
import { Box } from "@mui/material";
import PieChartDynamic from "../../../components/PieChartDynamic";
import { fetchWorkModes } from "../../../api/dataService";

const WorkPlace = ({ selectedRole, selectedState }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Create a unique cache key using role and state
      const cacheKey = `canada-workplace-${selectedRole}-${selectedState}`;
      const cachedData = sessionStorage.getItem(cacheKey);

      if (cachedData) {
        // Use cached data if available
        setData(JSON.parse(cachedData));
      } else {
        // Fetch data from the API if not cached
        try {
          const fetchedData = await fetchWorkModes({
            country: "Canada",
            role: selectedRole,
            state: selectedState,
          });

          // Transform and cache the data
          if (fetchedData && fetchedData.workplace) {
            const transformedData = fetchedData.workplace.map((item) => ({
              id: item.id,
              label: item.label,
              value: item.value,
            }));

            // Set the transformed data
            setData(transformedData);

            // Cache the data in sessionStorage
            sessionStorage.setItem(cacheKey, JSON.stringify(transformedData));
          } else {
            setData([]); // Set an empty array if no data is available
          }
        } catch (error) {
          console.error("Failed to fetch workplace data:", error);
        }
      }
    };

    fetchData();
  }, [selectedRole, selectedState]);

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
