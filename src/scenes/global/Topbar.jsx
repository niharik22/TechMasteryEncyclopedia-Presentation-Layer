import { Box, IconButton, Typography, useTheme, Divider } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <>
      <Box
        className="topbar"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        {/* LEFT SIDE: BANNER AND NAVIGATION */}
        <Box display="flex" alignItems="center" gap={4} flex={1}>
          {/* BANNER */}
          <Box component="a" href="/" className="banner-link">
            <MenuBookTwoToneIcon
              sx={{ color: colors.greenAccent[500], marginRight: 1 }}
            />
            <Typography variant="h2" className="banner-text">
              Tech Mastery Encyclopedia
            </Typography>
          </Box>
        </Box>

        {/* RIGHT SIDE: ICONS */}
        <Box className="icon-buttons" display="flex" gap={2}>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>

          <IconButton
            onClick={() =>
              window.open(
                "https://niharik22.github.io/Portfolioa/",
                "_blank"
              )
            }
          >
            <PersonOutlineIcon />
          </IconButton>

          <IconButton
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/niharik-kalpam/",
                "_blank"
              )
            }
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open(
                "https://github.com/niharik22/TechMasteryEncyclopedia",
                "_blank"
              )
            }
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Divider Below Topbar */}
      <Divider />
    </>
  );
};

export default Topbar;
