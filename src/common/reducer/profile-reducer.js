import { API_MAIN } from '../../api/api_main';
const SET_PROFILE_STATE = "SET_PROFILE_STATE";
const SET_PROFILE_THINGS = "SET_PROFILE_THINGS";
const SET_PROFILE_INFO = "SET_PROFILE_INFO";

let initialState = {
    player: {},
    things: [],
    info: "",
    status: 0
}

export const setProfileState = (data) => ({ type: SET_PROFILE_STATE, data: data });
export const setProfileThings = (data) => ({ type: SET_PROFILE_THINGS, data: data });
export const setProfileInfo = (data) => ({ type: SET_PROFILE_INFO, data: data });

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_STATE:
            return {
                ...state,
                player: action.data.player,
                info: action.data.info,
                status: action.data.status
            };
        case SET_PROFILE_THINGS:
            return {
                ...state,
                things: action.data
            };
        case SET_PROFILE_INFO:
            return {
                ...state,
                info: action.data.info,
                status: action.data.status
            };
        default:
            return state;
    };
};

export const getProfile = () => (dispatch) => {
    return API_MAIN.getMain()
        .then(data => {
            if (data.status === 1) {
                dispatch(setProfileState(data));
            }
            else {
                dispatch(setProfileInfo(data));
            }
        });
};

export const getThings = () => (dispatch) => {
    return API_MAIN.getInventoryThings()
        .then(data => {
            dispatch(setProfileThings(data));
        });
};

export const removeInventoryThing = (thingId) => (dispatch) => {
    return API_MAIN.removeInventoryThing(thingId)
        .then(data => {
            dispatch(setProfileInfo(data));
            dispatch(getThings());
        });
};

export const putOnInventoryThing = (thingId) => (dispatch) => {
    return API_MAIN.putOnInventoryThing(thingId)
        .then(data => {
            dispatch(setProfileInfo(data));
            dispatch(getThings());
        });
};

export const takeOffInventoryThing = (thingId) => (dispatch) => {
    return API_MAIN.takeOffInventoryThing(thingId)
        .then(data => {
            dispatch(setProfileInfo(data));
            dispatch(getThings());
        });
};

export default profileReducer;