import React from 'react';
import Layout from "../components/layout/Layout";
import Link from "next/link";

function NotFound(props) {
    return (
        <Layout>
            <h1>Página no encontrada</h1>
            <Link href="/dashboard">
                <a className="btn">Volver al dashboard</a>
            </Link>
        </Layout>
    );
}

export default NotFound;
