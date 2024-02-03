import { API } from '../../api/api';
const SET_MAIN_STATE = "SET_MAIN_STATE";
const SET_AIS = "SET_AIS";
const SET_UNITS = "SET_UNITS";
const SET_THINGS = "SET_THINGS";
const SET_MAIN_MISTAKE = "SET_MAIN_MISTAKE";
const SET_MAIN_FIGHT = "SET_MAIN_FIGHT";

let initialState = {
    player: {},
    location: {},
    aisSize: 0,
    ais: [],
    unitsSize: 0,
    units: [],
    thingsSize: 0,
    things: [],
    info: "",
    status: 0
}

export const setMainState = (data) => ({ type: SET_MAIN_STATE, data: data });
export const setAisData = (data) => ({ type: SET_AIS, data: data });
export const setUnitsData = (data) => ({ type: SET_UNITS, data: data });
export const setThingsData = (data) => ({ type: SET_THINGS, data: data });
export const setMainMistake = (data) => ({ type: SET_MAIN_MISTAKE, data: data });
export const setMainFight = (data) => ({ type: SET_MAIN_FIGHT, data: data });

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAIN_STATE:
            return {
                ...state,
                player: action.data.player,
                location: action.data.location,
                aisSize: action.data.ais,
                unitsSize: action.data.units,
                thingsSize: action.data.things,
                info: action.data.info,
                status: action.data.status
            };
        case SET_AIS:
            return {
                ...state,
                ais: action.data
            };
        case SET_UNITS:
            return {
                ...state,
                ais: action.data
            };
        case SET_THINGS:
            return {
                ...state,
                ais: action.data
            };
        case SET_MAIN_FIGHT:
            return {
                ...state,
                player: action.data.player,
                info: action.data.info,
                status: action.data.status
            };
        case SET_MAIN_MISTAKE:
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
            else {
                dispatch(setMainMistake(data));
            }
        });
};

export const getAis = () => (dispatch) => {
    return API.getAis()
        .then(data => {
            dispatch(setAisData(data));
        });
};

export const getUnits = () => (dispatch) => {
    return API.getUnits()
        .then(data => {
            dispatch(setUnitsData(data));
        });
};

export const getThings = () => (dispatch) => {
    return API.getThings()
        .then(data => {
            dispatch(setThingsData(data));
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