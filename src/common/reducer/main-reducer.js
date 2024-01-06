import { API } from '../../api/api';
const SET_USER_DATA = "SET_USER_DATA";
const SET_LOGOUT = "SET_LOGOUT";

let initialState = {
    player: {},
    enemies: [],
    players: [],
    content: "",
    status: "",
    isAuth: false
}

//экшены, которые будет вызывать контейнер, при взаимодействии с UI
export const setState = (data) => ({ type: SET_USER_DATA, data: data });
export const setLogout = () => ({ type: SET_LOGOUT });

//через dispatch из контейнера в reducer передается action и обновляется state
const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                player: action.data.player,
                enemies: action.data.enemies,
                players: action.data.player,
                content: action.data.content,
                status: action.data.status,
                isAuth: true
            };
        case SET_LOGOUT:
            return { ...state, ...initialState };
        default:
            return state;
    };
};

export const setAuthData = (formData) => (dispatch) => {
    return API.setAuth(formData.username, formData.password)
        .then(data => {
            if (data.status === "OK") {
                dispatch(setState(data));
            }
        });
};

export const logout = () => (dispatch) => {
    return API.setLogout()
        .then(() => {
            dispatch(setLogout());
        });
};

export const getMain = () => (dispatch) => {
    return API.getMain()
        .then(data => {
            if (data.status === "OK") {
                dispatch(setState(data));
            }
        });
};

export const movePlayer = (direction) => (dispatch) => {
    return API.getMove(direction)
        .then(data => {
            if (data.status === "OK") {
                dispatch(setState(data));
            }
        });
};

export default mainReducer;