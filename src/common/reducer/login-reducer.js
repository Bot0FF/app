import { API } from "../../api/api";
const SET_IS_AUTH = "SET_IS_AUTH";

let initialState = {
    isAuth: false
}

export const setIsAuth = (isAuth) => ({ type: SET_IS_AUTH, isAuth });

//через dispatch из контейнера в reducer передается action и обновляется state
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_AUTH:
            return { ...state, isAuth: action.isAuth };
        default:
            return state;
    };
};

export const setAuth = (formData) => {
    return (dispatch) => {
        API.setAuth(formData.username, formData.password)
        .then(data => {
            if (data.status === "OK") {
                dispatch(setIsAuth(true));
            }
            else {
                dispatch(setIsAuth(false));
            }
        });
    };
};

export default loginReducer;