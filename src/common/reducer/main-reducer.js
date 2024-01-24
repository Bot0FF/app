import { API } from '../../api/api';
const SET_MAIN_STATE = "SET_MAIN_STATE";
const SET_ERROR = "SET_ERROR";

let initialState = {
    player: {},
    location: {},
    enemies: [],
    players: [],
    info: "",
    status: 0,
    initialise: false
}

export const setMainState = (data) => ({ type: SET_MAIN_STATE, data: data });
export const setError = (data) => ({ type: SET_ERROR, data: data });

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAIN_STATE:
            return {
                ...state,
                player: action.data.player,
                location: action.data.location,
                enemies: action.data.enemies,
                players: action.data.players,
                info: action.data.info,
                status: action.data.status
            };
        case SET_ERROR:
            return {
                ...state,
                info: action.data.info,
                status: action.data.status
            };
        default:
            return state;
    };
};

export const getMain = () => (dispatch) => {
    return API.getMain()
        .then(data => {
            if (data.status === 1) {
                dispatch(setMainState(data));
            }
            else if (data.status === 2) {
                dispatch(setError(data));
            }
        });
};

export const movePlayer = (direction) => (dispatch) => {
    return API.getMove(direction)
        .then(data => {
            if (data.status === 1) {
                dispatch(setMainState(data));
            }
            else if (data.status === 2) {
                dispatch(setError(data));
            }
        });
};

export default mainReducer;