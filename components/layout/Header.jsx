import React, { useContext, useState } from 'react';
import authContext from "../../context/auth/authContext";
import Link from "next/link";

function Header({title, description}) {
    const { usuario, logout } = useContext(authContext)
    const [sidebar, setSidebar] = useState(false);
    return (
        <div className="header">
            <div className="info">
                <h2>{ title }</h2>
                <h4>{ description }</h4>
            </div>
            <div className="user">
                <div className="menu">
                    <i onClick={()=>setSidebar(!sidebar)} className="fas fa-bars"/>
                    <p>Menú</p>
                </div>
                <div className={sidebar ? 'sidebar-mobile active' : 'sidebar-mobile'}>
                    <Link href="/dashboard">
                        <a>1. Home</a>
                    </Link>
                    <Link href="/dashboard/create">
                        <a>2. Crear usuario</a>
                    </Link>
                    <button onClick={logout} className="btn">Logout</button>
                </div>
                <div className="name">
                    <p className="user">{ usuario ? usuario.name : '' }</p>
                    <p className="email">{ usuario ? usuario.email : '' }</p>
                </div>
                <img src={usuario ? usuario.img : ''} alt=""/>
            </div>
        </div>
    );
}

export default Header;
