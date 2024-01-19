import { API } from '../../api/api';
const SET_STATE = "SET_STATE";
const SET_LOGOUT = "SET_LOGOUT";

let initialState = {
    player: {},
    location: {},
    fight: {},
    info: "",
    status: 0,
    isAuth: false
}

//экшены, которые будет вызывать контейнер, при взаимодействии с UI
export const setState = (data) => ({ type: SET_STATE, data: data });
export const setLogout = () => ({ type: SET_LOGOUT });

//через dispatch из контейнера в reducer передается action и обновляется state
const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATE:
            return {
                ...state,
                player: action.data.player,
                location: action.data.location,
                fight: action.data.fight,
                info: action.data.info,
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
            if (data.status === 1) {
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
            if (data.status === 1) {
                dispatch(setState(data));
            }
        });
};

export const movePlayer = (direction) => (dispatch) => {
    return API.getMove(direction)
        .then(data => {
            if (data.status === 1) {
                dispatch(setState(data));
            }
        });
};

export const setFightState = (targetId) => (dispatch) => {
    return API.getAttack(targetId)
        .then(data => {
            if (data.status === 1) {
                dispatch(setState(data));
            }
        });
};

export const setRefreshFightState = () => (dispatch) => {
    return API.getFightRefresh()
        .then(data => {
            if (data.status === 1) {
                dispatch(setState(data));
            }
        });
};

export default mainReducer;