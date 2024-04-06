import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import {
  RouterProvider
} from "react-router-dom";
import { router } from "./route";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
