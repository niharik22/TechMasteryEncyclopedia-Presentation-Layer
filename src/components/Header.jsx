import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="10px"> {/* Reduced margin bottom from 30px to 10px */}
      <Typography
        variant="h4"
        color={colors.grey[200]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={colors.grey[200]}
        sx={{ textAlign: "center" }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
