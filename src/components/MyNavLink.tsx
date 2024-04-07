import { FC, PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

interface MyNavlinkProps {
    to: string
}

export const MyNavlink: FC<PropsWithChildren<MyNavlinkProps>> = ({ children, to }) => {
    return <NavLink to={to} className={({ isActive }) => {
        return isActive ? 'active-btn border-primary border-b-4 pb-1' : 'border-b-4 border-transparent pb-1'
    }}>
        {children}
    </NavLink>
}