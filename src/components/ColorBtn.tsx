import { FC, PropsWithChildren, useContext, useMemo } from "react";
import { Path2Name, RouterLinkContext } from "../route/RouterLinkProvider";
import _ from 'lodash';
interface Props {
    colorClass?: string,
    path2name: Path2Name
}
export const ColorBtn: FC<PropsWithChildren<Props>> = ({ children, colorClass, path2name }) => {
    const { navs } = useContext(RouterLinkContext)
    const can_i_colorfull = useMemo(() => {
        return _.isEqual(navs, path2name)
    }, [navs])
    return (
        <button className={`${can_i_colorfull ? colorClass ?? 'active-btn' : ''}`}>
            {children}
        </button>
    )
}