import React, { useContext, useEffect, useState } from 'react';
import Head from "next/head";
import Sidebar from "./Sidebar";
import Header from "./Header";
import authContext from "../../context/auth/authContext";
import LoadingPage from "./LoadingPage";
import { useRouter } from "next/router";

function Layout({children, title, description}) {
    const { usuarioAutenticado, autenticado, token } = useContext(authContext)
    const [view, setView] = useState(false);
    const router = useRouter();
    useEffect(() => {
        if(!autenticado && token){
            usuarioAutenticado()
            console.log('autenticando 123')
            setView(true)
        }
    }, []);
    useEffect(() => {
        if(!autenticado && !token){
            setTimeout(()=>{
                router.push('/')
            }, 1000)
        } else {
            setView(true)
        }
        setTimeout(()=>{


        }, 1000)
    }, []);

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                      integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                      crossOrigin="anonymous"
                />
            </Head>
            {
                view ? <main className="page-dashboard">
                    <Sidebar/>
                    <div className="content">
                        <Header title={title} description={description}/>
                        <div className="pages">
                            {
                                children
                            }
                        </div>
                    </div>


                </main> :
                    <LoadingPage/>
            }
        </>
    );
}

export default Layout;
