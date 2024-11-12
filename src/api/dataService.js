import apiClient from "./apiClient";
import endpoints from "./endpoints";

// Fetch languages data
export const fetchLanguages = async () => {
  try {
    const response = await apiClient.get(endpoints.getLanguages);
    return response.data;
  } catch (error) {
    console.error("Error fetching languages:", error);
    throw error;
  }
};

// Fetch work modes data
export const fetchWorkModes = async () => {
  try {
    const response = await apiClient.get(endpoints.getWorkModes);
    return response.data;
  } catch (error) {
    console.error("Error fetching work modes:", error);
    throw error;
  }
};

// Fetch tech trends data
export const fetchTechTrends = async () => {
  try {
    const response = await apiClient.get(endpoints.getTechTrends);
    return response.data;
  } catch (error) {
    console.error("Error fetching tech trends:", error);
    throw error;
  }
};

// Add more service functions as needed
