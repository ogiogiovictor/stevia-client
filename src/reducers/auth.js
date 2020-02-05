import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT
} from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    role: null,
    loading: true,
    user: null
}

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                role: payload.role.name,
                loading: false,
                user: payload
            }
        case REGISTER_SUCCESS:
            (window.location.href = '/success');
            return {
                ...state,
                ...payload,
                isAuthenticated: false,
                role: null,
                loading: false
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.auth_token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                role: payload.role.name,
                loading: false
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                ...payload,
                isAuthenticated: false,
                role: null,
                loading: false
            }

        default:
            return state 
    }
}