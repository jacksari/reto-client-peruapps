import React, {useContext} from 'react';
import userContext from "../../context/user/userContext";
import fechaFunction from "../../config/fecha";


function ModalUserView() {
    const { userSelect, selectUser } = useContext(userContext)
    return (
        <div className={userSelect ? 'modal-container active': 'modal-container'}>
            <div className="section-center">
                <div className="box">
                    <div className="header">
                        <p>PERFIL</p>
                        <i onClick={()=>selectUser(null)} className="fas fa-times"/>
                    </div>
                    <div className="body">
                        <div className="container-img">
                            <img src={userSelect ? userSelect.img : ''} alt=""/>

                        </div>
                        <p className="name">
                            <i className="far fa-user"/>
                            <span>{ userSelect ? userSelect.name : '' }</span>
                        </p>
                        <p className="email">
                            <i className="far fa-envelope"/>
                            <span>{ userSelect ? userSelect.email : '' }</span>
                        </p>
                        <p className="place">
                            <i className="fas fa-map-marker-alt"/>
                            { userSelect && userSelect.place === "1" ? <span>Miraflores</span> : null}
                            { userSelect && userSelect.place === "2" ? <span>La Molina</span> : null}
                            { userSelect && userSelect.place === "3" ? <span>San Isidro</span> : null}
                        </p>
                        <p className="phone">
                            <i className="fas fa-phone"/>
                            <span>{ userSelect ? userSelect.phone : '' }</span>
                        </p>
                        <p className="birthday">
                            <i className="far fa-calendar-alt"/>
                            <span>{ userSelect ? fechaFunction(userSelect.birthday) : '' }</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalUserView;
