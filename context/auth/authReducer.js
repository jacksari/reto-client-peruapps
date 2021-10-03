import {
    REGISTRO_USUARIO,
    REGISTRO_USUARIO_ERROR,
    REGISTRO_USUARIO_EXITOSO,
    USUARIO_AUTENTICADO,
    RESET_AUTH_MESSAGE,
    LOGIN_USUARIO,
    LOGIN_USUARIO_EXITOSO,
    LOGIN_USUARIO_ERROR,
    OBTENER_USUARIO,
    CERRAR_SESION,
    OBTENER_USUARIO_EXITO, OBTENER_USUARIO_ERROR
} from "../types";

const authReducer = (state,action) => {
    switch (action.type) {
        case CERRAR_SESION:
            return {
                ...state,
                token: null,
                autenticado: false,
                usuario: null,
                loading: false
            }
        case OBTENER_USUARIO_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                autenticado: false
            }
        case OBTENER_USUARIO_EXITO:
            return {
                ...state,
                usuario: action.payload,
                loading: false,
                autenticado: true
            }
        case OBTENER_USUARIO:
            return {
                ...state,
                loading:true
            }
        case LOGIN_USUARIO_EXITOSO:
            localStorage.setItem('token',action.payload);
            return {
                ...state,
                token: action.payload,
                loading: false,
                autenticado: true,
            }
        case RESET_AUTH_MESSAGE:
            return {
                ...state,
                mensaje: null
            }
        case REGISTRO_USUARIO_ERROR:
        case LOGIN_USUARIO_ERROR:
            return {
                ...state,
                loading: false,
                mensaje: action.payload,
                error: true
            }
        case REGISTRO_USUARIO_EXITOSO:
            return {
                ...state,
                token: action.payload,
                loading: false,
                mensaje: 'Registro exitoso'
            }
        case REGISTRO_USUARIO:
        case LOGIN_USUARIO:
            return {
                ...state,
                loading: true
            }
        case USUARIO_AUTENTICADO:
            return {
                ...state,
                usuario: action.payload
            }

        default:
            return state;
    }
}

export default authReducer;
