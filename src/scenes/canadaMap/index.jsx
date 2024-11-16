// Import necessary modules
import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import canadaMapJson from "./canadaGeoJson.json";
import { mapCanadaData } from "./canadaMapper"; // Import the mapper
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { fetchCountryDetails } from "../../api/dataService"; // Import your API fetch function

// Load Highcharts modules
require("highcharts/modules/exporting")(Highcharts);

const CanadaMap = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [mapData, setMapData] = useState(null);
  const [apiData, setApiData] = useState([]);

  // Function to transform API data into the desired format
  const transformData = (data) => {
    return data.states.map((item) => ({
      State: item.state,
      percentage: item.percentage,
    }));
  };

  // Fetch data from the API and set the transformed data with caching
  useEffect(() => {
    const fetchData = async () => {
      const cacheKey = "canadaMapData";
      const cachedData = sessionStorage.getItem(cacheKey);

      if (cachedData) {
        // Use cached data if available
        setApiData(JSON.parse(cachedData));
      } else {
        try {
          // Make the API request with the required parameter
          const response = await fetchCountryDetails({ country: "Canada" });
          const transformedData = transformData(response); // Transform the API data

          // Set and cache the transformed data
          setApiData(transformedData);
          sessionStorage.setItem(cacheKey, JSON.stringify(transformedData));
        } catch (error) {
          console.error("Failed to fetch data from the API:", error);
        }
      }
    };

    fetchData();
  }, []);

  // Convert transformed data to Highcharts format
  const mockCanadaData = mapCanadaData(apiData);

  // Set the map data on component mount
  useEffect(() => {
    setMapData(canadaMapJson);
  }, []);

  // Highcharts options
  const options = {
    chart: {
      map: mapData,
      backgroundColor: colors.primary[400], // Light beige background color
    },
    title: {
      text: "",
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "top",
      },
    },
    accessibility: {
      enabled: false, // Disable accessibility to remove the warning
    },
    colorAxis: {
      min: 0, // Start at 0
      stops: [
        [0, "#2b83ba"], // Deep blue for the lowest values (0%)
        [0.05, "#4c9fd9"], // Blue for very low values (5%)
        [0.1, "#80bff2"], // Light blue (10%)
        [0.2, "#a6d96a"], // Green for low values (20%)
        [0.3, "#d9ef8b"], // Yellow-green (30%)
        [0.4, "#f7e482"], // Bright yellow (40%)
        [0.6, "#fdae61"], // Orange (60%)
        [0.8, "#f46d43"], // Dark orange (80%)
        [1, "#d73027"], // Deep red for the highest values (100%)
      ],
      labels: {
        style: {
          color: "#444444", // Neutral text color for visibility on both light and dark backgrounds
        },
      },
    },
    series: [
      {
        data: mockCanadaData,
        name: "Jobs",
        states: {
          hover: {
            color: "#BADA55",
          },
        },
        dataLabels: {
          enabled: false,
          format: "{point.name}",
        },
      },
    ],
  };

  // Render the map component
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
      {mapData ? (
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"mapChart"}
          options={options}
          containerProps={{ id: "container" }}
        />
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default CanadaMap;
