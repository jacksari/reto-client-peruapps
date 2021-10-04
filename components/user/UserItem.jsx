import React, { useContext } from 'react';
import userContext from "../../context/user/userContext";

function UserItem({user}) {
    const { name, lastname, role, img, email } = user
    const { selectUser } = useContext(userContext)
    return (
        <div className="user-item">
            <img src={img} alt=""/>
            <h2 className="title">{ name }</h2>
            <h3 className="profession">{ email }</h3>
            <p className={role === 'admin_role' ? 'role admin': 'role user'}>{ role === 'admin_role' ? 'ADMIN' : 'USER' }</p>
            <button className="btn" onClick={() => selectUser(user)}>
                <i className="fas fa-plus-circle"/>
                Ver más
            </button>
        </div>
    );
}

export default UserItem;
