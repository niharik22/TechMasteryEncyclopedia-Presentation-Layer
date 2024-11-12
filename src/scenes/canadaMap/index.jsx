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
        [0, '#DEEBAE'],  // Light beige
        [0.2, '#A4D6AD'], // Light greenish
        [0.4, '#37AFAB'], // Teal
        [0.6, '#547C84'], // Muted blue
        [0.8, '#CEBF93'], // Soft beige
        [1, '#a69d70']    // Dark beige/brown
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
