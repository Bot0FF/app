const SET_USER_DATA = "SET_USER_DATA";
const SET_USERNAME = "SET_USERNAME";
const SET_PASSWORD = "SET_PASSWORD";

let initialState = {
    username: "",
    password: "",
}

//экшены, которые будет вызывать контейнер, при взаимодействии с UI
export const setAuthUserData = (username) => ({ type: SET_USER_DATA, username });
export const setUsername = (username) => ({ type: SET_USERNAME, username });
export const setPassword = (password) => ({ type: SET_PASSWORD, password });

//через dispatch из контейнера в reducer передается action и обновляется state
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            console.log(state)
            return { ...state, username: action.username };
        case SET_USERNAME:
            return { ...state, username: action.username };
        case SET_PASSWORD:
            return { ...state, password: action.password };
        default:
            return state;
    };
};

export default authReducer;