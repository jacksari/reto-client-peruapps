import React from 'react';
import Layout from "../../components/layout/Layout";
import CreateUser from "../../components/user/CreateUser";

function Create(props) {
    return (
        <Layout
            title="Cuéntanos sobre ti"
            description="Esta información lo podrán ver las demás personas."
        >
            <div className="create-user">
                <CreateUser/>
            </div>
        </Layout>
    );
}

export default Create;
