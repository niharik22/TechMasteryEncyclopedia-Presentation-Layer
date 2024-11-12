import axios from "axios";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "https://your-api-url.com",
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor (if needed for authorization)
apiClient.interceptors.request.use(
  (config) => {
    // You can add tokens or other headers here
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor (for global error handling)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default apiClient;
