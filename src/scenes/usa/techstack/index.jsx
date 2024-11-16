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
    <Box m="20px" width="98%">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb="20px"
      >
        <Header title="Tech Stack in Demand" />
        <Box display="flex" gap="20px">
          <Role onRoleChange={setRole} />
          <State onStateChange={setState} />
        </Box>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        gap="10px"
      >
        {techStackData.languages && techStackData.languages.length > 0 && (
          <LanguagesDynamic data={techStackData.languages} />
        )}
        {techStackData.tools && techStackData.tools.length > 0 && (
          <ToolsDynamic data={techStackData.tools} />
        )}
        {techStackData.libraries && techStackData.libraries.length > 0 && (
          <LibrariesDynamic data={techStackData.libraries} />
        )}
        {techStackData.skills && techStackData.skills.length > 0 && (
          <SkillsDynamic data={techStackData.skills} />
        )}
      </Box>
    </Box>
  );
};

export default TechStackUSA;
