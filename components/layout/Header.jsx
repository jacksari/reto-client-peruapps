import React, { useContext } from 'react';
import authContext from "../../context/auth/authContext";

function Header({title, description}) {
    const { usuario } = useContext(authContext)
    return (
        <div className="header">
            <div className="info">
                <h2>{ title }</h2>
                <h4>{ description }</h4>
            </div>
            <div className="user">
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
