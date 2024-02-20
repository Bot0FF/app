import { API_PROFILE } from '../../api/api_profile';
const SET_PROFILE_STATE = "SET_PROFILE_STATE";
const SET_PROFILE_INFO = "SET_PROFILE_INFO";

let initialState = {
    player: {},
    unitSkill: {},
    things: [],
    abilities: [],
    info: "",
    status: 0
}

export const setProfileState = (data) => ({ type: SET_PROFILE_STATE, data: data });
export const setProfileInfo = (data) => ({ type: SET_PROFILE_INFO, data: data });

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_STATE:
            return {
                ...state,
                player: action.data.player,
                unitSkill: action.data.unitSkill,
                things: action.data.things,
                abilities: action.data.abilities,
                info: action.data.info,
                status: action.data.status
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

//страница профиля со всеми характеристиками
export const getProfile = () => (dispatch) => {
    return API_PROFILE.getProfile()
        .then(data => {
            if (data.status === 1) {
                dispatch(setProfileState(data));
            }
            else {
                dispatch(setProfileInfo(data));
            }
        });
};

//страница инвентаря
export const getUnitInventory = () => (dispatch) => {
    return API_PROFILE.getUnitInventory()
        .then(data => {
            if (data.status === 1) {
                dispatch(setProfileState(data));
            }
            else {
                dispatch(setProfileInfo(data));
            }
        });
};

//выбросить предмет из инвентаря
export const removeInventoryThing = (thingId) => (dispatch) => {
    return API_PROFILE.removeInventoryThing(thingId)
        .then(data => {
            if (data.status === 1) {
                dispatch(setProfileState(data));
            }
            else {
                dispatch(setProfileInfo(data));
            }
        });
};

//надеть вещь
export const putOnInventoryThing = (thingId) => (dispatch) => {
    return API_PROFILE.putOnInventoryThing(thingId)
        .then(data => {
            if (data.status === 1) {
                dispatch(setProfileState(data));
            }
            else {
                dispatch(setProfileInfo(data));
            }
        });
};

//снять вещь
export const takeOffInventoryThing = (thingId) => (dispatch) => {
    return API_PROFILE.takeOffInventoryThing(thingId)
        .then(data => {
            if (data.status === 1) {
                dispatch(setProfileState(data));
            }
            else {
                dispatch(setProfileInfo(data));
            }
        });
};

//повысить аттрибут
export const setUpAttribute = (attribute) => (dispatch) => {
    return API_PROFILE.setUpAttribute(attribute)
        .then(data => {
            if (data.status === 1) {
                dispatch(setProfileState(data));
            }
            else {
                dispatch(setProfileInfo(data));
            }
        });
};

//понизить аттрибут
export const setDownAttribute = (attribute) => (dispatch) => {
    return API_PROFILE.setDownAttribute(attribute)
        .then(data => {
            if (data.status === 1) {
                dispatch(setProfileState(data));
            }
            else {
                dispatch(setProfileInfo(data));
            }
        });
};

//все умения unit
export const getAllAbilities = () => (dispatch) => {
    return API_PROFILE.getAllAbilities()
        .then(data => {
            if (data.status === 1) {
                dispatch(setProfileState(data));
            }
            else {
                dispatch(setProfileInfo(data));
            }
        });
};

//-------для админа---------
//сгенерировать предмет в инвентарь
export const addThingToInventory = (thingId) => (dispatch) => {
    return API_PROFILE.addThingToInventory(thingId)
        .then(data => {
            if (data.status === 1) {
                dispatch(setProfileState(data));
            }
            else {
                dispatch(setProfileInfo(data));
            }
        });
};

//удалить предмет из БД
export const removeThingFromDB = (thingId) => (dispatch) => {
    return API_PROFILE.removeThingFromDB(thingId)
        .then(data => {
            if (data.status === 1) {
                dispatch(setProfileState(data));
            }
            else {
                dispatch(setProfileInfo(data));
            }
        });
};

export default profileReducer;