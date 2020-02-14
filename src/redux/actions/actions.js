import { SET_ERROR, SET_AUTHENTICATED, SET_UNAUTHENTICATED } from "./action-types";

export const setError = (payload) => {
    return { type: SET_ERROR, payload };
}

export const setAuthenticated = () => {
    return { type: SET_AUTHENTICATED }
}

export const setUnAuthenticated = () => {
    return { type: SET_UNAUTHENTICATED }
}

