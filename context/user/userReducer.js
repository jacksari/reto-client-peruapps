import {
    GET_USUARIOS, SELECT_USER,

} from "../types";

const userReducer = (state,action) => {
    switch (action.type) {

        case SELECT_USER:
            return {
                ...state,
                userSelect: action.payload
            }
        case GET_USUARIOS:
            console.log(action)
            let pages = []
            for (let i = 0 ; i<action.payload.totalPages;i++){
                pages.push(i + 1)
            }
            return {
                ...state,
                usuarios: action.payload.users,
                totalPages: pages,
                nextPage: action.payload.nextPage,
                prevPage: action.payload.prevPage,
            }
        default:
            return state;
    }
}

export default userReducer;
