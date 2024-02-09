import { API_MAIN } from './../../api/api_main';
const SET_MAIN_STATE = "SET_MAIN_STATE";
const SET_MAIN_AIS = "SET_MAIN_AIS";
const SET_MAIN_UNITS = "SET_MAIN_UNITS";
const SET_MAIN_THINGS = "SET_MAIN_THINGS";
const SET_MAIN_INFO = "SET_MAIN_INFO";
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
export const setAisData = (data) => ({ type: SET_MAIN_AIS, data: data });
export const setUnitsData = (data) => ({ type: SET_MAIN_UNITS, data: data });
export const setThingsData = (data) => ({ type: SET_MAIN_THINGS, data: data });
export const setMainInfo = (data) => ({ type: SET_MAIN_INFO, data: data });
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
        case SET_MAIN_AIS:
            return {
                ...state,
                ais: action.data
            };
        case SET_MAIN_UNITS:
            return {
                ...state,
                units: action.data
            };
        case SET_MAIN_THINGS:
            return {
                ...state,
                things: action.data
            };
        case SET_MAIN_FIGHT:
            return {
                ...state,
                player: action.data.player,
                info: action.data.info,
                status: action.data.status
            };
        case SET_MAIN_INFO:
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
    return API_MAIN.getMain()
        .then(data => {
            if (data.status === 1) {
                dispatch(setMainState(data));
            }
            else {
                dispatch(setMainInfo(data));
            }
        });
};

export const getLocationAis = () => (dispatch) => {
    return API_MAIN.getLocationAis()
        .then(data => {
            dispatch(setAisData(data));
        });
};

export const getLocationUnits = () => (dispatch) => {
    return API_MAIN.getLocationUnits()
        .then(data => {
            dispatch(setUnitsData(data));
        });
};

export const getLocationThings = () => (dispatch) => {
    return API_MAIN.getLocationThings()
        .then(data => {
            dispatch(setThingsData(data));
        });
};

export const takeLocationThing = (thingId) => (dispatch) => {
    return API_MAIN.takeLocationThing(thingId)
        .then(data => {
            dispatch(setMainInfo(data));
            dispatch(getLocationThings(data));
        });
};

export const movePlayer = (direction) => (dispatch) => {
    return API_MAIN.getMove(direction)
        .then(data => {
            if (data.status === 1) {
                dispatch(setMainState(data));
            }
            else {
                dispatch(setMainInfo(data));
            }
        });
};


export const setFight = (targetId) => (dispatch) => {
    return API_MAIN.getAttack(targetId)
        .then(data => {
            if (data.status === 1) {
                dispatch(setMainFight(data));
            }
            else {
                dispatch(setMainInfo(data));
            }
        });
};

export default mainReducer;