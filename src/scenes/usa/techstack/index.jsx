import { Box } from "@mui/material";
import Header from "../../../components/Header";
import Role from "../../../components/Role";
import State from "../../../components/Region";
import LanguagesDynamic from "./languagesDynamic";
import LibrariesDynamic from "./librariesDynamic";
import ToolsDynamic from "./toolsDynamic";
import SkillsDynamic from "./skillsDynamic";
import React, { useState, useEffect } from 'react';
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

  // Fetch and transform data when role or state changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTechTrends({
          country: "United States",
          role,
          state,
        });

        if (response) {
          // Transform API data to the required format
          const transformData = (items, key) => {
            switch (key) {
              case "languages":
                return items.map(item => ({
                  languages: item.language,
                  percentage: item.percentage,
                }));
              case "libraries":
                return items.map(item => ({
                  libraries: item.library,
                  percentage: item.percentage,
                }));
              case "tools":
                return items.map(item => ({
                  tools: item.tool,
                  percentage: item.percentage,
                }));
              case "skills":
                return items.map(item => ({
                  skills: item.skill,
                  percentage: item.percentage,
                }));
              default:
                return [];
            }
          };

          setTechStackData({
            languages: transformData(response.languages, "languages"),
            libraries: transformData(response.libraries, "libraries"),
            tools: transformData(response.tools, "tools"),
            skills: transformData(response.skills, "skills"),
          });
        }
      } catch (error) {
        console.error("Failed to fetch tech stack data:", error);
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
        <LibrariesDynamic data={techStackData.libraries} />
        <LanguagesDynamic data={techStackData.languages} />
        <ToolsDynamic data={techStackData.tools} />
        <SkillsDynamic data={techStackData.skills} />
      </Box>
    </Box>
  );
};

export default TechStackUSA;
