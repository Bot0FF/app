const SET_USERNAME = "SET_USERNAME";
const SET_EMAIL = "SET_EMAIL";
const SET_PASSWORD = "SET_PASSWORD";
const SET_IS_AUTH = "SET_IS_AUTH";

let initialState = {
    username: "",
    email: "",
    password: "",
    isAuth: false
}

export const setUsername = (username) => ({ type: SET_USERNAME, username });
export const setEmail = (email) => ({ type: SET_EMAIL, email });
export const setPassword = (password) => ({ type: SET_PASSWORD, password });
export const setIsAuth = (isAuth) => ({ type: SET_IS_AUTH, isAuth });

//через dispatch из контейнера в reducer передается action и обновляется state
const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERNAME:
            return { ...state, username: action.username };
        case SET_EMAIL:
            return { ...state, email: action.email };
        case SET_PASSWORD:
            return { ...state, password: action.password };
        case SET_IS_AUTH:
            return { ...state, isAuth: action.isAuth };
        default:
            return state;
    };
};

export default registerReducer;