// Import necessary libraries
import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highmaps';
import HighchartsReact from 'highcharts-react-official';
import mapDataUSA from '@highcharts/map-collection/countries/us/us-all.geo.json';
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { fetchCountryDetails } from "../../api/dataService"; // Import the API function
import { getStateKey } from './stateKeyMapping'; // Import the helper function

// Load Highcharts modules
require("highcharts/modules/exporting")(Highcharts);

const MapUSAChart = () => {
  const [data, setData] = useState([]); // State to hold the map data
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Fetch data from the API with caching
  useEffect(() => {
    const fetchData = async () => {
      const cacheKey = "usaMapData";
      const cachedData = sessionStorage.getItem(cacheKey);

      if (cachedData) {
        // Use cached data if available
        setData(JSON.parse(cachedData));
      } else {
        try {
          const response = await fetchCountryDetails({ country: "United States" });

          // Transform the data into the required format for Highcharts
          if (response && response.states) {
            const transformedData = response.states.map(item => {
              return [
                getStateKey(item.state), // Use the helper function to get the state key
                item.percentage,
              ];
            });

            // Set the transformed data and cache it
            setData(transformedData);
            sessionStorage.setItem(cacheKey, JSON.stringify(transformedData));
          }
        } catch (error) {
          console.error("Failed to fetch country details:", error);
        }
      }
    };

    fetchData();
  }, []);

  // Highcharts configuration
  const options = {
    chart: {
      map: mapDataUSA,
      backgroundColor: colors.primary[400],
    },
    title: {
      text: '',
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'top',
      },
    },
    accessibility: {
      enabled: false, // Disable accessibility to remove the warning
    },
    colorAxis: {
      min: 0,
      stops: [
        [0, '#2b83ba'],  // Deep blue for the lowest values (0%)
        [0.05, '#4c9fd9'], // Blue (0.5%)
        [0.1, '#80bff2'],  // Light blue (1%)
        [0.15, '#a6d96a'], // Light green (1.5%)
        [0.2, '#d9ef8b'],  // Yellow-green (2%)
        [0.3, '#f7e482'],  // Bright yellow (3%)
        [0.4, '#fdbb58'],  // Yellow-orange (4%)
        [0.5, '#fdae61'],  // Orange (5%)
        [0.7, '#f46d43'],  // Dark orange (7%)
        [1, '#d73027'],    // Deep red for the highest values (20%)
      ],
      labels: {
        style: {
          color: '#ffffff', // White text color for visibility on dark backgrounds
        },
      },
    },
    series: [
      {
        data: data,
        mapData: mapDataUSA,
        name: 'Percentage',
        states: {
          hover: {
            color: '#BADA55',
          },
        },
        dataLabels: {
          enabled: false,
          format: '{point.name}',
        },
      },
    ],
  };

  return (
    <div>
      <style>
        {`
          #container {
            height: 450px;
            min-width: 310px;
            max-width: 950px;
            margin: 0 auto;
          }
        `}
      </style>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'mapChart'}
        options={options}
        containerProps={{ id: "container" }}
      />
    </div>
  );
};

export default MapUSAChart;
