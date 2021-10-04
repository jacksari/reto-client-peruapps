import React, { useContext, useEffect } from 'react';
import Layout from "../../components/layout/Layout";
import UserItem from "../../components/user/UserItem";
import userContext from "../../context/user/userContext";
import ModalUserView from "../../components/user/ModalUserView";

function Index() {
    const { getUsuarios, usuarios, userSelect, selectUser } = useContext(userContext)
    useEffect(() => {
        getUsuarios()
    }, []);

    return (
        <Layout
            title="Lista de usuarios"
            description="Esta información lo podrán ver las demás personas."
        >
            <div className="list-users">
                {
                    usuarios.map((user,index) => (
                        <UserItem user={user} key={index}/>
                    ))
                }
            </div>
            <ModalUserView/>
        </Layout>

    );
}

export default Index;
