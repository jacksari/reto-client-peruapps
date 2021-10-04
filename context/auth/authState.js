import React, { useReducer } from 'react';
import authContext from "./authContext";
import authReducer from "./authReducer";
import {
    USUARIO_AUTENTICADO,
    REGISTRO_USUARIO,
    REGISTRO_USUARIO_ERROR,
    REGISTRO_USUARIO_EXITOSO,
    RESET_AUTH_MESSAGE,
    LOGIN_USUARIO,
    LOGIN_USUARIO_EXITOSO,
    LOGIN_USUARIO_ERROR,
    OBTENER_USUARIO, CERRAR_SESION, OBTENER_USUARIO_EXITO,
    OBTENER_USUARIO_ERROR
} from "../types";
import clienteAxios from "../../config/axios";
import {useRouter} from "next/router";
import tokenAuth from "../../config/tokenAuth";


const AuthState = ({children}) => {

    const router = useRouter();

    // Definir state inicial
    const initialState = {
        token: typeof window !== 'undefined' ? localStorage.getItem('token'): '',
        autenticado: false,
        usuario: null,
        mensaje: null,
        loading: false,
        error: false
    }

    // Definir el reducer
    const [state, dispatch] = useReducer(authReducer, initialState);

    // Crear usuarios
    const register = async (datos, page) => {
        console.log(page)
        dispatch({
            type: REGISTRO_USUARIO
        })
        try {
            const resp = await clienteAxios.post('/api/v1/user', datos);
            console.log(resp.data)
            if(page === 'user'){
                router.push('/dashboard')
            }

        }catch (e){
            console.log(e.response.data)
            dispatch({
                type: REGISTRO_USUARIO_ERROR,
                payload: e.response.data.error.message
            })

        }
        setTimeout(()=>{
            dispatch({
                type: RESET_AUTH_MESSAGE
            })
        },4000)
    }

    // Login usuarios
    const login = async (datos) => {
        dispatch({
            type: LOGIN_USUARIO
        })
        try {
            const resp = await clienteAxios.post('/api/v1/auth/login', datos);
            console.log(resp.data)
            dispatch({
                type: LOGIN_USUARIO_EXITOSO,
                payload: resp.data.token
            })
            await usuarioAutenticado()
            router.push('/dashboard')

        }catch (e){
            //console.log(e.response.data)
            dispatch({
                type: LOGIN_USUARIO_ERROR,
                payload: e.response.data.msg
            })

        }
        setTimeout(()=>{
            dispatch({
                type: RESET_AUTH_MESSAGE
            })
        },4000)

    }

    // Usuario autenticado
    const usuarioAutenticado = async () => {
        //console.log('autenticando')
        const token = localStorage.getItem('token');
        dispatch({
            type: OBTENER_USUARIO,
        })
        if(token){
            tokenAuth(token)
        }

        try {
            const resp = await clienteAxios('/api/v1/auth/user');
            console.log(resp)
            dispatch({
                type: OBTENER_USUARIO_EXITO,
                payload: resp.data.user
            })
        }catch (e){
            //console.log(e.response)
            localStorage.removeItem('token')
            dispatch({
                type: OBTENER_USUARIO_ERROR
            })
        }
    }
    // Cerrar sesión
    const logout = () => {
        dispatch({
            type: CERRAR_SESION
        })
        localStorage.removeItem('token')
        router.push('/')
    }



    return (
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                loading: state.loading,
                error: state.error,
                usuarioAutenticado,
                register,
                login,
                logout
            }}
        >
            {children}
        </authContext.Provider>
    )
}

export default AuthState;
