// src/hooks/useSessionCache.js
import { useState, useEffect } from "react";

const useSessionCache = (key, fetchData) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Check if data is available in sessionStorage
    const cachedData = sessionStorage.getItem(key);
    if (cachedData) {
      setData(JSON.parse(cachedData));
    } else {
      // Fetch data from the API if not in cache
      fetchData().then((fetchedData) => {
        setData(fetchedData);
        sessionStorage.setItem(key, JSON.stringify(fetchedData)); // Save to sessionStorage
      });
    }
  }, [key, fetchData]);

  return data;
};

export default useSessionCache;
