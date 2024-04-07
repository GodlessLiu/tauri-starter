import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import {
  RouterProvider
} from "react-router-dom";
import { router } from "./route";
import React from "react";
import { RouterLinkProvider } from "./route/RouterLinkProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterLinkProvider>
      <RouterProvider router={router} />
    </RouterLinkProvider>
  </React.StrictMode>

);
