import { API } from '../../api/api';
const SET_MAIN_STATE = "SET_MAIN_STATE";
const SET_MAIN_MISTAKE = "SET_MAIN_MISTAKE";
const SET_MAIN_FIGHT = "SET_MAIN_FIGHT";

let initialState = {
    playerId: {},
    location: {},
    enemies: [],
    players: [],
    info: "",
    status: 0
}

export const setMainState = (data) => ({ type: SET_MAIN_STATE, data: data });
export const setMainMistake = (data) => ({ type: SET_MAIN_MISTAKE, data: data });
export const setMainFight = (data) => ({ type: SET_MAIN_FIGHT, data: data });

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
        case SET_MAIN_MISTAKE:
            return {
                ...state,
                info: action.data.info,
                status: action.data.status
            };
        case SET_MAIN_FIGHT:
            return {
                ...state,
                player: action.data.player,
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
            else {
                dispatch(setMainMistake(data));
            }
        });
};

export const movePlayer = (direction) => (dispatch) => {
    return API.getMove(direction)
        .then(data => {
            if (data.status === 1) {
                dispatch(setMainState(data));
            }
            else {
                dispatch(setMainMistake(data));
            }
        });
};


export const setFight = (targetId) => (dispatch) => {
    return API.getAttack(targetId)
        .then(data => {
            if (data.status === 1) {
                dispatch(setMainFight(data));
            }
            else {
                dispatch(setMainMistake(data));
            }
        });
};

export default mainReducer;