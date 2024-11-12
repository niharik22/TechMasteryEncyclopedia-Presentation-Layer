import { Box, IconButton, Typography, useTheme, Divider } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import ContactMailTwoToneIcon from "@mui/icons-material/ContactMailTwoTone";

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
          <a href="YOUR_URL_HERE" className="banner-link">
            <MenuBookTwoToneIcon
              sx={{ color: colors.greenAccent[500], marginRight: 1 }}
            />
            <Typography variant="h2" className="banner-text">
              Tech Mastery Encyclopedia
            </Typography>
          </a>

          {/* NAVIGATION LINKS */}
          <Box className="navigation-links" display="flex" gap={3}>
            <Typography
              variant="h4"
              component="a"
              href="/dashboard"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Dashboard
            </Typography>
            <Typography
              variant="h4"
              component="a"
              href="https://github.com/niharik22/TechMasteryEncyclopedia"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Project Repository
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
            component={Link}
            to="/contact"
            style={{ color: "inherit" }}
          >
            <ContactMailTwoToneIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Divider Below Topbar */}
      <Divider />
    </>
  );
};

export default Topbar;
