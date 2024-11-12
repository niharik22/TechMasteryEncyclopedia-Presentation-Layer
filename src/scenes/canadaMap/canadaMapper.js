// utils/canadaMapper.js

// Mapping of province abbreviations to Highcharts keys
const provinceKeyMapping = {
    "AB": "ca-ab", // Alberta
    "BC": "ca-bc", // British Columbia
    "MB": "ca-mb", // Manitoba
    "NB": "ca-nb", // New Brunswick
    "NL": "ca-nl", // Newfoundland and Labrador
    "NT": "ca-nt", // Northwest Territories
    "NS": "ca-ns", // Nova Scotia
    "NU": "ca-nu", // Nunavut
    "ON": "ca-on", // Ontario
    "PE": "ca-pe", // Prince Edward Island
    "QC": "ca-qc", // Quebec
    "SK": "ca-sk", // Saskatchewan
    "YT": "ca-yt"  // Yukon
  };
  
  // Function to map backend data to Highcharts format
  export const mapCanadaData = (backendData) => {
    return backendData.map(item => {
      const key = provinceKeyMapping[item.State];
      return key ? [key, item.percentage] : null;
    }).filter(entry => entry !== null); // Filter out any null values
  };
  
  export default provinceKeyMapping;
  