import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from "react-router-dom";

import Topbar from "./scenes/global/Topbar";
import SideTogglebar from "./scenes/global/Sidebar";
import Home from "./scenes/home"
import TechStackUSA from "./scenes/usa/techstack/";
import WorkModesUSA from "./scenes/usa/workmodes/";
import TechStackCanada from "./scenes/canada/techstack/";
import WorkModesCanada from "./scenes/canada/workmodes/";
import MapUSA from "./scenes/usa/map";
import CanadaMap from "./scenes/canada/map";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ display: "flex", height: "100vh" }}>
          <SideTogglebar />
          <main style={{ flex: 1, overflowY: "auto" }}>
            <Topbar />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="usa/techstack" element={<TechStackUSA />} />
              <Route path="usa/workmode" element={<WorkModesUSA />} />
              <Route path="usa/map" element={<MapUSA />} />
              <Route path="canada/techstack" element={<TechStackCanada />} />
              <Route path="canada/workmode" element={<WorkModesCanada />} />
              <Route path="canada/map" element={<CanadaMap />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
