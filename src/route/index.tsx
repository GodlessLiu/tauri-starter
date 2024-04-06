import { Layout } from "../Layout";
import Home from "../views/Home";
import { Recommand } from "../views/Recommand";
import { RouteObject, createBrowserRouter } from "react-router-dom";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/app1",
                element: <Recommand />,
            }],
    },
]

export const path2name: Record<string, string> = {
    "/": "首页",
    "/app1": "推荐",
}

export const router = createBrowserRouter(routes);