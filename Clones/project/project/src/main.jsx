import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import WatchAudio from "./pages/WatchAudio";
import TvSmartHome from "./pages/TvSmartHome";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "watch-audio",
        element: <WatchAudio />,
      },
      {
        path: "tv-smarthome",
        element: <TvSmartHome/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
