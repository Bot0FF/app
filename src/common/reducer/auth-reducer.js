import { API_AUTH } from './../../api/api_auth';
const SET_AUTH_DATA = "SET_AUTH_DATA";
const SET_LOGOUT = "SET_LOGOUT";
const SET_APP_INITIALIZE = "SET_APP_INITIALIZE";

let initialState = {
    status: 0,
    isAuth: false,
    initialize: false
}


export const setAuthData = (data) => ({ type: SET_AUTH_DATA, data: data });
export const setInitialize = (data) => ({ type: SET_APP_INITIALIZE, data: data });
export const setLogout = () => ({ type: SET_LOGOUT });

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                status: action.data.status,
                isAuth: true
            };
        case SET_LOGOUT:
            return {
                ...state,
                status: 0,
                isAuth: false,
            };
        case SET_APP_INITIALIZE:
            return {
                ...state,
                initialize: true
            };
        default:
            return state;
    };
};

export const initializeApp = () => (dispatch) => {
    let dispatchResult = dispatch(checkAuth());
    Promise.all([dispatchResult])
        .then(() => {
            dispatch(setInitialize());
        });
};

export const checkAuth = () => (dispatch) => {
    return API_AUTH.checkAuth()
        .then(data => {
            if (data.status === 1) {
                dispatch(setAuthData(data));
            }
            else {
                //dispatch(logout());
            }
        });
};

export const setAuth = (formData) => (dispatch) => {
    return API_AUTH.setAuth(formData.username, formData.password)
        .then(data => {
            if (data.status === 1) {
                dispatch(setAuthData(data));
            }
            else {
                //dispatch(logout());
            }
        });
};

export const logout = () => (dispatch) => {
    return API_AUTH.setLogout()
        .then(() => {
            dispatch(setLogout());
        });
};

export default authReducer;