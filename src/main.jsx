import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";
import App from "./App.jsx";
import Quiz from "./components/Quiz.jsx";

const router = createBrowserRouter([
  {
    path: "/app",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/app",
        element: <LandingPage />,
      },
      {
        path: "/app/quiz",
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
