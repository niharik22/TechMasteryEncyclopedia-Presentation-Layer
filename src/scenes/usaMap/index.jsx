// Import necessary libraries
import React from 'react';
import Highcharts from 'highcharts/highmaps';
import HighchartsReact from 'highcharts-react-official';
import mapDataUSA from '@highcharts/map-collection/countries/us/us-all.geo.json';
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

// Mapping state names to their Highcharts keys
const stateKeyMapping = {
  "Alabama": "us-al",
  "Alaska": "us-ak",
  "Arizona": "us-az",
  "Arkansas": "us-ar",
  "California": "us-ca",
  "Colorado": "us-co",
  "Connecticut": "us-ct",
  "Delaware": "us-de",
  "Florida": "us-fl",
  "Georgia": "us-ga",
  "Hawaii": "us-hi",
  "Idaho": "us-id",
  "Illinois": "us-il",
  "Indiana": "us-in",
  "Iowa": "us-ia",
  "Kansas": "us-ks",
  "Kentucky": "us-ky",
  "Louisiana": "us-la",
  "Maine": "us-me",
  "Maryland": "us-md",
  "Massachusetts": "us-ma",
  "Michigan": "us-mi",
  "Minnesota": "us-mn",
  "Mississippi": "us-ms",
  "Missouri": "us-mo",
  "Montana": "us-mt",
  "Nebraska": "us-ne",
  "Nevada": "us-nv",
  "New Hampshire": "us-nh",
  "New Jersey": "us-nj",
  "New Mexico": "us-nm",
  "New York": "us-ny",
  "North Carolina": "us-nc",
  "North Dakota": "us-nd",
  "Ohio": "us-oh",
  "Oklahoma": "us-ok",
  "Oregon": "us-or",
  "Pennsylvania": "us-pa",
  "Rhode Island": "us-ri",
  "South Carolina": "us-sc",
  "South Dakota": "us-sd",
  "Tennessee": "us-tn",
  "Texas": "us-tx",
  "Utah": "us-ut",
  "Vermont": "us-vt",
  "Virginia": "us-va",
  "Washington": "us-wa",
  "West Virginia": "us-wv",
  "Wisconsin": "us-wi",
  "Wyoming": "us-wy"
};

// Provided data
const colorData = [
  { "State": "Alabama", "percentage": 5.37},
  { "State": "Alaska", "percentage": 1.15},
  { "State": "Arizona", "percentage": 0.77},
  { "State": "Arkansas", "percentage": 4.99},
  { "State": "California", "percentage": 1.93},
  { "State": "Colorado", "percentage": 1.56},
  { "State": "Connecticut", "percentage": 4.35},
  { "State": "Delaware", "percentage": 4.01},
  { "State": "Florida", "percentage": 3.63},
  { "State": "Georgia", "percentage": 4.16},
  { "State": "Hawaii", "percentage": 5.94},
  { "State": "Idaho", "percentage": 1.75},
  { "State": "Illinois", "percentage": 3.79},
  { "State": "Indiana", "percentage": 3.94},
  { "State": "Iowa", "percentage": 3.25},
  { "State": "Kansas", "percentage": 3.00},
  { "State": "Kentucky", "percentage": 4.61},
  { "State": "Louisiana", "percentage": 5.22},
  { "State": "Maine", "percentage": 3.49},
  { "State": "Maryland", "percentage": 3.93},
  { "State": "Massachusetts", "percentage": 4.06},
  { "State": "Michigan", "percentage": 2.62},
  { "State": "Minnesota", "percentage": 2.19},
  { "State": "Mississippi", "percentage": 5.77},
  { "State": "Missouri", "percentage": 4.12},
  { "State": "Montana", "percentage": 1.51},
  { "State": "Nebraska", "percentage": 2.60},
  { "State": "Nevada", "percentage": 0.96},
  { "State": "New Hampshire", "percentage": 3.54},
  { "State": "New Jersey", "percentage": 4.13},
  { "State": "New Mexico", "percentage": 0.82},
  { "State": "New York", "percentage": 3.41},
  { "State": "North Carolina", "percentage": 4.14},
  { "State": "North Dakota", "percentage": 1.50},
  { "State": "Ohio", "percentage": 3.53},
  { "State": "Oklahoma", "percentage": 3.84},
  { "State": "Oregon", "percentage": 2.33},
  { "State": "Pennsylvania", "percentage": 3.67},
  { "State": "Rhode Island", "percentage": 4.23},
  { "State": "South Carolina", "percentage": 3.83},
  { "State": "South Dakota", "percentage": 2.17},
  { "State": "Tennessee", "percentage": 5.15},
  { "State": "Texas", "percentage": 2.50},
  { "State": "Utah", "percentage": 1.16},
  { "State": "Vermont", "percentage": 3.40},
  { "State": "Virginia", "percentage": 3.91},
  { "State": "Washington", "percentage": 2.90},
  { "State": "West Virginia", "percentage": 4.06},
  { "State": "Wisconsin", "percentage": 2.73},
  { "State": "Wyoming", "percentage": 1.42}
];

// Transform the provided data into a format compatible with Highcharts
const data = colorData.map(item => [
  stateKeyMapping[item.State],
  item.percentage
]);

const MapUSA = () => {

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
        // [0, '#EFEFFF'], // Low
        // [0.5, '#FFC107'], // Moderate
        // [1, '#FF5722'], // High
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

export default MapUSA;