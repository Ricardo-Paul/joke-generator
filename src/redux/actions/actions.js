import axios from 'axios'


import { SET_ERROR, SET_AUTHENTICATED, SET_UNAUTHENTICATED, LOGOUT } from "./action-types";

export const setError = (payload) => {
    return { type: SET_ERROR, payload };
}

export const setAuthenticated = () => {
    return { type: SET_AUTHENTICATED }
}

export const setUnAuthenticated = () => {
    return { type: SET_UNAUTHENTICATED }
}

export const handleLogOut = (props) => {
    axios.delete('/sessions',{
        headers:{
            Authorization: localStorage.getItem('auth_token')
        }
    })
    localStorage.removeItem('auth_token')
    // props.history.push("/")
    window.location.href = '/'
    return {type: LOGOUT}
}