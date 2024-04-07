import { FC, PropsWithChildren, createContext, useState } from "react";
import { basicPath2name } from "./config";

export type Path2Name = Record<string, string>
interface RouterLinkContextType {
    navs: Path2Name,
    set_navs: (path2name: Record<string, string>) => void,
}
export const RouterLinkContext = createContext<RouterLinkContextType>({
    navs: {},
    set_navs: (nav: Record<string, string>) => { },
})

export const RouterLinkProvider: FC<PropsWithChildren> = ({ children }) => {
    const [navs, set_navs] = useState(basicPath2name)
    return (
        <RouterLinkContext.Provider value={{ navs, set_navs }} >
            {children}
        </RouterLinkContext.Provider >
    )
}


