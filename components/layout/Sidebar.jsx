import React, {useContext} from 'react';
import SidebarLink from "./SidebarLink";
import authContext from "../../context/auth/authContext";

function Sidebar() {
    const { logout } = useContext(authContext)
    return (
        <div className="sidebar">
            <h2>PACHA.Q.TEC</h2>
            <div className="links">

                <SidebarLink
                    title="Home"
                    url="/dashboard"
                >
                    <i className="fas fa-home"/>
                </SidebarLink>
                <SidebarLink
                    title="Crear usuario"
                    url="/dashboard/create"
                >
                    <i className="fas fa-home"/>
                </SidebarLink>
            </div>
            <div className="sidebar-footer">
                <button onClick={logout} className="link ">
                    <i className="far fa-trash-alt"/>
                    <p>Salir</p>
                </button>
            </div>
        </div>
    );
}

export default Sidebar;
