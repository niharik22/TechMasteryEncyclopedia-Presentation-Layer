import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import MapIcon from "@mui/icons-material/Map";
import "./home.css"; // Import the CSS file

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      className="home-container"
      style={{
        backgroundColor: colors.primary[400],
        color: colors.grey[100],
        paddingTop: "10px",
        paddingBottom: "10px", 
      }}
    >
      {/* Main Heading */}
      <Typography
        variant="h2"
        className="home-heading"
        sx={{ marginTop: "10px", marginBottom: "5px" }} 
      >
       Stay Ahead in a Rapidly Changing World
      </Typography>

      {/* Subtext */}
      <Typography
        variant="h5"
        className="home-subtext"
        sx={{ marginBottom: "15px" }} // Reduced margin to bring the subtext closer
      >
        To stay relevant, you need to know the skills that matter. 
        Discover insights that empower you to grow and seize new opportunities with confidence.
      </Typography>

      <Button
        variant="contained"
        className="home-button"
        sx={{
          backgroundColor: colors.greenAccent[400],
          color: "#fff",
          "&:hover": {
            backgroundColor: colors.greenAccent[600],
          },
          marginBottom: "30px", // Adjusted margin for better spacing
        }}
      >
        Start Learning
      </Button>

      <Box className="cards-container" sx={{ gap: "15px" }}> {/* Reduced gap between cards */}
        {/* Card 1 */}
        <Box className="card" style={{ backgroundColor: colors.primary[400] }}>
          <BarChartIcon className="icon" style={{ color: colors.greenAccent[400] }} />
          <Typography variant="h6" className="card-title" sx={{ marginBottom: "5px" }}>
            Tech Trends
          </Typography>
          <Typography variant="body2" className="card-text">
            Stay updated with the latest technology trends and insights.
          </Typography>
        </Box>

        {/* Card 2 - Work Culture */}
        <Box className="card" style={{ backgroundColor: colors.primary[400] }}>
          <PieChartIcon className="icon" style={{ color: colors.greenAccent[400] }} />
          <Typography variant="h6" className="card-title" sx={{ marginBottom: "5px" }}>
            Work Culture
          </Typography>
          <Typography variant="body2" className="card-text">
            Learn about modern workplace practices and culture.
          </Typography>
        </Box>

        {/* Card 3 - Job Market */}
        <Box className="card" style={{ backgroundColor: colors.primary[400] }}>
          <MapIcon className="icon" style={{ color: colors.greenAccent[400] }} />
          <Typography variant="h6" className="card-title" sx={{ marginBottom: "5px" }}>
            Job Market
          </Typography>
          <Typography variant="body2" className="card-text">
            Navigate the tech job market with confidence.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
