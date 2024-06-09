import React from "react";
import ReactDOM from "react-dom/client";
import {ThemeProvider} from "@emotion/react";
import {createTheme} from "@mui/material";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";
import App from "./App.jsx";
import Quiz from "./components/Quiz.jsx";

const theme = createTheme({
  typography: {
    fontFamily: ['"Open Sans"', "Helvetica", "Arial", "sans-serif"].join(","),
    h5: {
      fontFamily: "Open Sans",
      color: "#1FE5F1",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 300,
      lineHeight: "normal",
      letterSpacing: "0.9px",
      textTransform: "uppercase",
    },
    h1: {
      fontFamily: "Earth Orbiter Bold",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.80)",
      fontSize: "19px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "26px",
    },
    h3: {
      fontFamily: "Earth Orbiter",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.80)",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "22px",
      textTransform: "uppercase",
      color: "#E4BF62",
    },
  },
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#E4BF62",
    },
    info: {
      main: "#1FE5F1",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
