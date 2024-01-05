import { API } from "../../api/api";
import { getMain } from "./main-reducer";
const SET_IS_AUTH = "SET_IS_AUTH";

let initialState = {
    isAuth: false
}

export const setAuth = (isAuth) => ({ type: SET_IS_AUTH, isAuth: isAuth });

//через dispatch из контейнера в reducer передается action и обновляется state
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_AUTH:
            return { ...state, isAuth: action.isAuth };
        default:
            return state;
    };
};

export const setMain = () => {
    return (dispatch) => {
        dispatch(getMain());
    };
};

export const setAuthData = (formData) => {
    return (dispatch) => {
        API.setAuth(formData.username, formData.password)
            .then(data => {
                if (data.status === "OK") {
                    dispatch(setAuth(true));
                    dispatch(setMain());
                }
            });
    };
};

export const logout = () => {
    return (dispatch) => {
        API.setLogout()
            .then(data => {
                dispatch(setAuth(false));
            });
    };
};

export default loginReducer;