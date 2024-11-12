// Import necessary modules
import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import canadaMapJson from "./canadaGeoJson.json";
import { mapCanadaData } from "./canadaMapper"; // Import the mapper
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import {mockCanadaData as originalData}  from "../../data/mockData"

// Load Highcharts modules
require("highcharts/modules/exporting")(Highcharts);

const CanadaMap = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [mapData, setMapData] = useState(null);

  // Convert backend data to Highcharts format
  const mockCanadaData = mapCanadaData(originalData);

  // Set the map data on component mount
  useEffect(() => {
    setMapData(canadaMapJson);
  }, []);

  // Highcharts options
  const options = {
    chart: {
      map: mapData,
      backgroundColor: colors.primary[400] // Light beige background color
    },
    title: {
      text: ""
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "top"
      }
    },
    colorAxis: {
      min: 0,
      stops: [
        [0, '#f1eef6'],    // Light color for the lowest values
        [0.2, '#bdc9e1'],
        [0.4, '#74a9cf'],
        [0.6, '#2b8cbe'],
        [0.8, '#045a8d'],  // Dark color for higher values
        [1, '#023858']     // Darkest color for the highest values
      ],
      labels: {
        style: {
          color: colors.grey[200]
        }
      }
    },
    series: [
      {
        data: mockCanadaData,
        name: "Jobs",
        states: {
          hover: {
            color: "#BADA55"
          }
        },
        dataLabels: {
          enabled: false,
          format: "{point.name}"
        }
      }
    ]
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
