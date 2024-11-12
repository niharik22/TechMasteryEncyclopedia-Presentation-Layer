// Import necessary libraries
import React from 'react';
import Highcharts from 'highcharts/highmaps';
import HighchartsReact from 'highcharts-react-official';
import mapDataUSA from '@highcharts/map-collection/countries/us/us-all.geo.json';
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { getStateKey } from './stateKeyMapping'; // Import the helper
import {mockUSAData}  from "../../data/mockData"


// Transform the provided data into a format compatible with Highcharts
const data = mockUSAData.map(item => [
  getStateKey(item.State), // Use the helper function to get the key
  item.percentage
]);

const MapUSAChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Highcharts configuration
  const options = {
    chart: {
      map: mapDataUSA,
      backgroundColor: colors.primary[400]
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
    colorAxis: {
      min: 0,
      stops: [
        [0, '#DEEBAE'],
        [0.2, '#A4D6AD'],
        [0.4, '#37AFAB'],
        [0.6, '#547C84'],
        [0.8, '#CEBF93'],
        [1, '#a69d70']
      ],
      labels: {
        style: {
          color: colors.grey[200]
        }
      }
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
