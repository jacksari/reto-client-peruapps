import React, { useReducer } from 'react';
import {
    GET_USUARIOS

} from "../types";
import clienteAxios from "../../config/axios";
import {useRouter} from "next/router";
import tokenAuth from "../../config/tokenAuth";
import userReducer from "./userReducer";
import userContext from "./userContext";


const UserState = ({children}) => {

    const router = useRouter();

    // Definir state inicial
    const initialState = {
        usuarios: [],
        searchUser: '',
        page: 1,
        limit: 10,
        totalPages: [],
        nextPage: null,
        prevPage: null,
        loadingUser: false,
        uploadImg: null,
        uploadImgError: false,
        loadingUploadImg: false,
        message: null,
        userSelect: null
    }

    // Definir el reducer
    const [state, dispatch] = useReducer(userReducer, initialState);

    const getUsuarios = async () => {
        const token = localStorage.getItem('token');
        if(token){
            tokenAuth(token)
        }
        try {
            const resp = await clienteAxios(`/api/v1/user?limit=${state.limit}&page=${state.page}`);
            //console.log(resp.data.users)
            dispatch({
                type: GET_USUARIOS,
                payload: resp.data
            })

        }catch (e){
            console.log(e.response)

        }
    }




    return (
        <userContext.Provider
            value={{
                usuarios: state.usuarios,
                searchUser: state.searchUser,
                page: state.page,
                loadingUser: state.loadingUser,
                totalPages:state.totalPages,
                nextPage: state.nextPage,
                prevPage: state.prevPage,
                uploadImg: state.uploadImg,
                uploadImgError: state.uploadImgError,
                loadingUploadImg: state.loadingUploadImg,
                message: state.message,
                userSelect: state.userSelect,
                getUsuarios,
            }}
        >
            {children}
        </userContext.Provider>
    )
}

export default UserState;
