import { FluentDismiss24Regular } from "./icons/Close";
import { FluentMaximize28Regular } from "./icons/Maximize";
import { FluentMinimize24Regular } from "./icons/Minimize";
import Logo from "../assets/logo.ico";
import { appWindow } from '@tauri-apps/api/window';
import { MyNavlink } from "./MyNavLink";
import { useContext } from "react";
import { RouterLinkContext } from "../route/RouterLinkProvider";
export function MyHeader() {
    const { navs } = useContext(RouterLinkContext)

    return (
        <div data-tauri-drag-region className="h-14 flex justify-between items-center border-b pl-8 pr-4">
            <div className="logo flex">
                <img src={Logo} alt="Logo" className="mr-8 h-[32px]" />
                <nav className="navs flex gap-6 items-center">
                    {
                        navs && Object.keys(navs).map((path) => {
                            return <MyNavlink key={path} to={path}>{navs[path]}</MyNavlink>
                        })
                    }
                </nav>
            </div>
            <div className="options flex flex-row gap-1">
                <div>
                    <FluentMinimize24Regular fontSize={20} className="bg-hover" onClick={() => appWindow.minimize()} />
                </div>
                <div>
                    <FluentMaximize28Regular fontSize={20} className="bg-hover" onClick={() => appWindow.maximize()} />
                </div>
                <div >
                    <FluentDismiss24Regular fontSize={20} className="bg-hover" />
                </div>
            </div>
        </div>
    )
}