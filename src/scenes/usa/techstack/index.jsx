import { Box } from "@mui/material";
import Header from "../../../components/Header";
import Role from "../../../components/Role";
import State from "../../../components/Region";
import LanguagesDynamic from "./languagesDynamic";
import LibrariesDynamic from "./librariesDynamic";
import ToolsDynamic from "./toolsDynamic";
import SkillsDynamic from "./skillsDynamic";

const TechStackUSA = () => {
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
          <Role />
          <State />
        </Box>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        gap="10px"
      >
        <LibrariesDynamic />
        <LanguagesDynamic />
        <ToolsDynamic />
        <SkillsDynamic />
      </Box>
    </Box>
  );
};

export default TechStackUSA;
