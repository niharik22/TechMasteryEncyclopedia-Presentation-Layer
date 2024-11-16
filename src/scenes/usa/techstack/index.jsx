import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Header from "../../../components/Header";
import Role from "../../../components/Role";
import State from "../../../components/Region";
import LanguagesDynamic from "./languagesDynamic";
import LibrariesDynamic from "./librariesDynamic";
import ToolsDynamic from "./toolsDynamic";
import SkillsDynamic from "./skillsDynamic";
import { fetchTechTrends } from "../../../api/dataService";

const TechStackUSA = () => {
  const [role, setRole] = useState("Software Engineer"); // Default role
  const [state, setState] = useState("All"); // Default state
  const [techStackData, setTechStackData] = useState({
    languages: [],
    libraries: [],
    tools: [],
    skills: [],
  });

  // Fetch and transform data when role or state changes, with caching logic
  useEffect(() => {
    const fetchData = async () => {
      const cacheKey = `usa-techstack-${role}-${state}`;
      const cachedData = sessionStorage.getItem(cacheKey);

      if (cachedData) {
        // Use cached data if available and valid
        setTechStackData(JSON.parse(cachedData));
      } else {
        try {
          // Fetch the data from the API if not cached
          const response = await fetchTechTrends({
            country: "United States",
            role,
            state,
          });

          if (response) {
            // Helper function to transform API data to the required format
            const transformData = (items, key) => {
              return items.map((item) => {
                switch (key) {
                  case "languages":
                    return {
                      languages: item.language,
                      percentage: item.percentage,
                    };
                  case "libraries":
                    return {
                      libraries: item.library,
                      percentage: item.percentage,
                    };
                  case "tools":
                    return { tools: item.tool, percentage: item.percentage };
                  case "skills":
                    return { skills: item.skill, percentage: item.percentage };
                  default:
                    return {};
                }
              });
            };

            // Transform and set data
            const transformedData = {
              languages: transformData(response.languages, "languages"),
              libraries: transformData(response.libraries, "libraries"),
              tools: transformData(response.tools, "tools"),
              skills: transformData(response.skills, "skills"),
            };

            // Set the transformed data
            setTechStackData(transformedData);

            // Cache the data in sessionStorage
            sessionStorage.setItem(cacheKey, JSON.stringify(transformedData));
          }
        } catch (error) {
          console.error("Failed to fetch tech stack data:", error);
        }
      }
    };

    fetchData();
  }, [role, state]);

  return (
    <Box
      m="10px"
      width="100%"
      maxWidth="100%"
      paddingLeft={{ xs: "5px", md: "10px" }}
      paddingRight={{ xs: "5px", md: "10px" }}
      transition="padding-left 0.3s, padding-right 0.3s"
    >
      {/* Header Section */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb="10px"
      >
        <Header title="Tech Stack in Demand" />
        <Box display="flex" gap="10px">
          <Role onRoleChange={setRole} />
          <State onStateChange={setState} />
        </Box>
      </Box>

      {/* Data Visualization Section */}
      <Box
        display="flex"
        flexDirection="column"
        gap="10px" // Reduced gap for a more compact layout
        overflowY="auto"
        padding="5px"
      >
        {techStackData.languages && techStackData.languages.length > 0 && (
          <Box flex="1" minHeight="250px" height="auto">
            <LanguagesDynamic data={techStackData.languages} />
          </Box>
        )}
        {techStackData.tools && techStackData.tools.length > 0 && (
          <Box flex="1" minHeight="250px" height="auto">
            <ToolsDynamic data={techStackData.tools} />
          </Box>
        )}
        {techStackData.libraries && techStackData.libraries.length > 0 && (
          <Box flex="1" minHeight="250px" height="auto">
            <LibrariesDynamic data={techStackData.libraries} />
          </Box>
        )}
        {techStackData.skills && techStackData.skills.length > 0 && (
          <Box flex="1" minHeight="250px" height="auto">
            <SkillsDynamic data={techStackData.skills} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TechStackUSA;
