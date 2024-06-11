import {ThemeProvider, createTheme} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import getLPTheme from "./components/landing-page/getLPTheme";
import {Box} from "@mui/material";
import AppAppBar from "./components/landing-page/components/AppAppBar";
import {Outlet} from "react-router-dom";
import Hero from "./components/landing-page/components/Hero";
import tlo from "./assets/tlo.png";

export default function App() {
  const LPtheme = createTheme(getLPTheme("dark"));

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <Box className="app-container">
        <AppAppBar />
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}
