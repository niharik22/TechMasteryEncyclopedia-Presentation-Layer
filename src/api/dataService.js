import apiClient from "./apiClient";
import endpoints from "./endpoints";

// Fetch operation data by sending a JSON payload
export const fetchTechTrends = async (requestData) => {
  try {
    const response = await apiClient.post(endpoints.getTechTrends, requestData);
    return response.data;
  } catch (error) {
    console.error("Error fetching tech trends:", error);
    throw error;
  }
};

// Fetch work modes data by sending a JSON payload
export const fetchWorkModes = async (requestData) => {
  try {
    const response = await apiClient.post(endpoints.getWorkModes, requestData);
    return response.data;
  } catch (error) {
    console.error("Error fetching work modes:", error);
    throw error;
  }
};

// Fetch tech education data by sending a JSON payload
export const fetchEducation = async (requestData) => {
  try {
    const response = await apiClient.post(endpoints.getEducation, requestData);
    return response.data;
  } catch (error) {
    console.error("Error fetching education data:", error);
    throw error;
  }
};

// Fetch tech trends data (country-specific details) by sending a JSON payload
export const fetchCountryDetails = async (requestData) => {
  try {
    const response = await apiClient.post(endpoints.getMaps, requestData);
    return response.data;
  } catch (error) {
    console.error("Error fetching country details:", error);
    throw error;
  }
};

// Fetch roles by sending a JSON payload
export const fetchRoles = async (requestData) => {
  try {
    const response = await apiClient.post(endpoints.getRoles, requestData);
    return response.data;
  } catch (error) {
    console.error("Error fetching tech trends:", error);
    throw error;
  }
};
