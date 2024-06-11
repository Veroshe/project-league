import React from "react";
import ReactDOM from "react-dom/client";
import {createHashRouter, RouterProvider} from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";
import App from "./App.jsx";
import Quiz from "./components/Quiz.jsx";

const router = createHashRouter([
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
        path: "quiz",
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
