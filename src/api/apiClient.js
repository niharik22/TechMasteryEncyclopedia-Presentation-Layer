import axios from "axios";

// Function to encode credentials
const encodeCredentials = (username, password) => {
  return `Basic ${btoa(`${username}:${password}`)}`;
};

// Create an Axios instance
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor for Basic Auth and logging
apiClient.interceptors.request.use(
  (config) => {
    // const username = process.env.REACT_APP_API_USERNAME;
    // const password = process.env.REACT_APP_API_PASSWORD;
    const username = "niharik";
    const password = "niharik@22";

    if (username && password) {
      config.headers.Authorization = encodeCredentials(username, password);
    }

    // Log the request details
    console.log(`Sending request to ${config.url}:`, config);
    
    return config;
  },
  (error) => {
    // Log request error
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor for global error handling and logging
apiClient.interceptors.response.use(
  (response) => {
    // Log the response details
    console.log(`Received response from ${response.config.url}:`, response);
    return response;
  },
  (error) => {
    // Handle and log errors globally
    console.error("Response error from " + (error.response?.config.url || 'URL unknown') + ":", error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
