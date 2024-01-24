import { API } from '../../api/api';
const SET_AUTH = "SET_AUTH";
const SET_LOGOUT = "SET_LOGOUT";

let initialState = {
    status: 0,
    isAuth: false
}

export const setAuthData = (data) => ({ type: SET_AUTH, data: data });
export const setLogout = () => ({ type: SET_LOGOUT });

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                status: action.data.status,
                isAuth: true
            };
        case SET_LOGOUT:
            return {
                ...state,
                status: 0,
                isAuth: false
            };
        default:
            return state;
    };
};

export const setAuth = (formData) => (dispatch) => {
    return API.setAuth(formData.username, formData.password)
        .then(data => {
            if (data.status === 1) {
                dispatch(setAuthData(data));
            }
        });
};

export const checkAuth = () => (dispatch) => {
    return API.checkAuth()
        .then(data => {
            if (data.status === 1) {
                dispatch(setAuthData(data));
            }
        });
};

export const logout = () => (dispatch) => {
    return API.setLogout()
        .then(() => {
            dispatch(setLogout());
        });
};

export default authReducer;