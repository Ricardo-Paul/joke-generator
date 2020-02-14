import { SET_ERROR, SET_AUTHENTICATED, SET_UNAUTHENTICATED } from "./actions/action-types"


const initialState = {
    authenticated: true,
    loading: false,
    error: ""
}

export const uiReducer = (state = initialState, action) => {

    if(action.type === SET_ERROR ){
        state.error = action.payload
    }

    if(action.type === SET_AUTHENTICATED ){
        state.authenticated = true
    }

    if(action.type === SET_UNAUTHENTICATED){
        state.authenticated = false
    }
    return state 
}
