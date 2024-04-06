import { FC, PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

interface MyNavlinkProps {
    to: string
}

export const MyNavlink: FC<PropsWithChildren<MyNavlinkProps>> = ({ children, to }) => {
    return <NavLink to={to} className="nav-link border-animation" style={({ isActive }) => {
        return {
            color: isActive ? "#ff6699" : "black",
            borderBottom: isActive ? "3px solid #ff6699" : "3px solid transparent",
        };
    }}>
        {children}
    </NavLink>
}