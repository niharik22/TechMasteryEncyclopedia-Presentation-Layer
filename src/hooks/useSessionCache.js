// src/hooks/useSessionCache.js
import { useState, useEffect } from "react";

const useSessionCache = (key, data) => {
  const [cachedData, setCachedData] = useState(null);

  useEffect(() => {
    // Check if data is available in sessionStorage
    const sessionData = sessionStorage.getItem(key);
    if (sessionData) {
      setCachedData(JSON.parse(sessionData));
    } else {
      // If no sessionData, use provided data and cache it
      if (data) {
        setCachedData(data);
        sessionStorage.setItem(key, JSON.stringify(data)); // Save to sessionStorage
      }
    }
  }, [key, data]);

  return cachedData;
};

export default useSessionCache;
