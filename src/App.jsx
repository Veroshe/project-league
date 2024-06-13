import {ThemeProvider, createTheme} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import getLPTheme from "./components/landing-page/getLPTheme";
import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";

export default function App() {
  const LPtheme = createTheme(getLPTheme("dark"));

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <Box className="app-container">
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}
