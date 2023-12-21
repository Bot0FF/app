import { action } from "mobx";

const SET_USER_DATA = "SET_USER_DATA";
const SET_USERNAME = "SET_USERNAME";
const SET_PASSWORD = "SET_PASSWORD";

let initialState = {
    player: null,
    username: "",
    password: "",
}

//экшены, которые будет вызывать контейнер, при взаимодействии с UI
export const setAuthUserData = (player) => ({ type: SET_USER_DATA, player: player });
export const setUsername = (username) => ({ type: SET_USERNAME, username });
export const setPassword = (password) => ({ type: SET_PASSWORD, password });

//через dispatch из контейнера в reducer передается action и обновляется state
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, player: action.player };
        case SET_USERNAME:
            return { ...state, username: action.username };
        case SET_PASSWORD:
            return { ...state, password: action.password };
        default:
            return state;
    };
};

export default authReducer;