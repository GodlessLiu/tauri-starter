import { MyHeader } from "./components/Header";
import { Outlet } from "react-router-dom";
export const Layout = () => {
    return (
        <div id="app" className="flex flex-row">
            <div data-tauri-drag-region className="w-16 h-screen pt-14 px-2 shadow-xl flex flex-col gap-2">

            </div>
            <div className="flex-1">
                <MyHeader />
                <div className=" pl-8 pt-2">
                    <Outlet />
                </div>
            </div>
        </div>

    );
}