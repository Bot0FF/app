import { API_HOME } from '../../api/api_home';
const SET_UNIT_INVENTORY_STATE = "SET_UNIT_INVENTORY_STATE";
const SET_HOME_INVENTORY_STATE = "SET_HOME_INVENTORY_STATE";
const SET_HOME_INFO = "SET_HOME_INFO";

let initialState = {
    player: {},
    thingsUnit: [],
    thingsHome: [],
    info: "",
    status: 0
}

export const setUnitInventoryState = (data) => ({ type: SET_UNIT_INVENTORY_STATE, data: data });
export const setHomeInventoryState = (data) => ({ type: SET_HOME_INVENTORY_STATE, data: data });
export const setHomeInfo = (data) => ({ type: SET_HOME_INFO, data: data });

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_UNIT_INVENTORY_STATE:
            return {
                ...state,
                player: action.data.player,
                thingsUnit: action.data.things,
                info: action.data.info,
                status: action.data.status
            };
        case SET_HOME_INVENTORY_STATE:
            return {
                ...state,
                player: action.data.player,
                thingsHome: action.data.things,
                info: action.data.info,
                status: action.data.status
            };
        case SET_HOME_INFO:
            return {
                ...state,
                info: action.data.info,
                status: action.data.status
            };
        default:
            return state;
    };
};

//страница инвентаря
export const getUnitInventory = () => (dispatch) => {
    return API_HOME.getUnitInventory()
        .then(data => {
            if (data.status === 1) {
                dispatch(setUnitInventoryState(data));
            }
            else {
                dispatch(setHomeInfo(data));
            }
        });
};

//оставить предмет на складе
export const keepHomeThing = (thingId) => (dispatch) => {
    return API_HOME.keepHomeThing(thingId)
        .then(data => {
            if (data.status === 1) {
                dispatch(setUnitInventoryState(data));
            }
            else {
                dispatch(setHomeInfo(data));
            }
        });
};

//забрать предмет со склада
export const takeHomeThing = (thingId) => (dispatch) => {
    return API_HOME.takeHomeThing(thingId)
        .then(data => {
            if (data.status === 1) {
                dispatch(setHomeInventoryState(data));
            }
            else {
                dispatch(setHomeInfo(data));
            }
        });
};

//-------для админа---------


export default homeReducer;