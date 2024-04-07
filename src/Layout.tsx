import { MyHeader } from "./components/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { FluentSettings24Regular } from "./components/icons/Sitting";
import { useContext, useEffect } from "react";
import { RouterLinkContext } from "./route/RouterLinkProvider";
import { ColorBtn } from "./components/ColorBtn";
import { basicPath2name, settingPath2name } from "./route/config";
import { FluentHome24Regular } from "./components/icons/Home";
export const Layout = () => {
    const { set_navs } = useContext(RouterLinkContext)
    const navigate = useNavigate();
    function onClick() {
        set_navs(settingPath2name);
        navigate("/setting");
    }
    /* 禁用浏览器默认行为
        右键
        ctrl + R 刷新
    */
    useEffect(() => {
        function preventDefault(e: Event) {
            e.preventDefault()
        }
        function preventKeydownCtrlR(event: KeyboardEvent) {
            // 检查是否是 Ctrl + R
            if (event.ctrlKey && event.key === 'r') {
                // 阻止事件的默认行为和进一步传播
                event.preventDefault();
                event.stopPropagation();
            }
        }
        window.addEventListener("contextmenu", preventDefault)
        window.addEventListener('keydown', preventKeydownCtrlR);
        return () => {
            removeEventListener("contextmenu", preventDefault)
            removeEventListener('keydown', preventKeydownCtrlR);
        }
    }, [])
    return (
        <div id="app" className="flex flex-row" >
            <div data-tauri-drag-region className="w-16 h-screen pb-8 px-2 shadow-xl items-center flex flex-col justify-between gap-2">
                <div className="pt-4 flex flex-col text-center justify-center">
                    <ColorBtn path2name={basicPath2name} >
                        <div onClick={() => {
                            set_navs(basicPath2name)
                            navigate("/")
                        }}>
                            <FluentHome24Regular fontSize={24} className="mx-auto" />
                            首页
                        </div>
                    </ColorBtn>
                </div>
                <div className="options">
                    <ColorBtn path2name={settingPath2name}>
                        <FluentSettings24Regular fontSize={28} onClick={onClick} />
                    </ColorBtn>
                </div>
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