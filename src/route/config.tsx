import { Layout } from "../Layout";
import Home from "../views/Home";
import { Recommand } from "../views/Recommand";
import { RouteObject } from "react-router-dom";
import { Settings } from "../views/Settings";
import { Path2Name } from "./RouterLinkProvider";
import { Test } from "../views/Test";

export const routes: RouteObject[] = [
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
            },
            {
                path: "/setting",
                element: <Settings />
            },
            {
                path: '/test',
                element: <Test />
            }
        ],
    },
]
// key的值必须是 routes 里面path的值
export const basicPath2name: Path2Name = {
    "/": "home",
    "/app1": "推荐",
}

export const settingPath2name: Path2Name = {
    "/setting": "设置"
}

