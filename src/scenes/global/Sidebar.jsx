import { useState } from "react";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import Flag from "react-flagkit";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <MenuItem
        active={selected === title}
        onClick={() => setSelected(title)}
        icon={icon}
        style={{ color: colors.greenAccent[500] }}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    </Link>
  );
};

const SideTogglebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Home");

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar
        collapsed={isCollapsed}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: colors.primary[400],
            color: colors.grey[100],
            height: "100%",
          },
        }}
      >
        <Menu
          menuItemStyles={{
            root: {
              color: colors.grey[100],
            },
            button: ({ active }) => ({
              backgroundColor: active ? colors.primary[400] : "transparent",
              "&:hover": {
                backgroundColor: colors.primary[500],
                color: colors.greenAccent[400],
              },
            }),
            label: {
              color: colors.grey[300],
            },
            subMenuContent: {
              backgroundColor: colors.primary[400],
              borderRadius: "5px",
              margin: "5px 0",
            },
          }}
        >
          {/* MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h4" color={colors.grey[100]}>
                  Dashboard
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box
            paddingLeft={isCollapsed ? undefined : "10%"}
            display="flex"
            flexDirection="column"
            gap="15px"
          >
            <Item
              title="Home"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <SubMenu label="United States" icon={<Flag country="US" />}>
              <Item
                title="Tech Stack"
                to="usa/techstack"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Workplace & Study"
                to="usa/workmode"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Jobs Map"
                to="usa/map"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
            <SubMenu label="Canada" icon={<Flag country="CA" />}>
            <Item
                title="Tech Stack"
                to="canada/techstack"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Workplace & Study"
                to="canada/workmode"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Jobs Map"
                to="canada/map"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideTogglebar;
