// utils/stateKeyMapping.js

// Mapping of state abbreviations to their Highcharts keys
const stateKeyMapping = {
    "AL": "us-al",
    "AK": "us-ak",
    "AZ": "us-az",
    "AR": "us-ar",
    "CA": "us-ca",
    "CO": "us-co",
    "CT": "us-ct",
    "DE": "us-de",
    "FL": "us-fl",
    "GA": "us-ga",
    "HI": "us-hi",
    "ID": "us-id",
    "IL": "us-il",
    "IN": "us-in",
    "IA": "us-ia",
    "KS": "us-ks",
    "KY": "us-ky",
    "LA": "us-la",
    "ME": "us-me",
    "MD": "us-md",
    "MA": "us-ma",
    "MI": "us-mi",
    "MN": "us-mn",
    "MS": "us-ms",
    "MO": "us-mo",
    "MT": "us-mt",
    "NE": "us-ne",
    "NV": "us-nv",
    "NH": "us-nh",
    "NJ": "us-nj",
    "NM": "us-nm",
    "NY": "us-ny",
    "NC": "us-nc",
    "ND": "us-nd",
    "OH": "us-oh",
    "OK": "us-ok",
    "OR": "us-or",
    "PA": "us-pa",
    "RI": "us-ri",
    "SC": "us-sc",
    "SD": "us-sd",
    "TN": "us-tn",
    "TX": "us-tx",
    "UT": "us-ut",
    "VT": "us-vt",
    "VA": "us-va",
    "WA": "us-wa",
    "WV": "us-wv",
    "WI": "us-wi",
    "WY": "us-wy"
  };
  
  // Function to get Highcharts key by state abbreviation
  export const getStateKey = (stateAbbr) => stateKeyMapping[stateAbbr] || null;
  
  export default stateKeyMapping;
  