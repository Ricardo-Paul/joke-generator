import { SET_ERROR, SET_AUTHENTICATED, SET_UNAUTHENTICATED, LOGOUT } from "./actions/action-types"


const initialState = {
    authenticated: false,
    loading: false,
    error: ""
}

export const uiReducer = (state = initialState, action) => {

    switch(action.type){
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            }

        case LOGOUT:
            return {
                ...state,
                authenticated: false
            }

        default:
            return state;
    }


}
