import { API } from '../../api/api';
const SET_FIGHT_STATE = "SET_FIGHT_STATE";
const SET_FIGHT_MISTAKE = "SET_FIGHT_MISTAKE";
const SET_FIGHT_ABILITY = "SET_FIGHT_ABILITY";
const SET_FIGHT_INITIALIZE = "SET_FIGHT_INITIALIZE";

let initialState = {
    player: {},
    teamOne: [],
    teamTwo: [],
    ability: [],
    resultRound: "",
    countRound: 0,
    endRoundTimer: 0,
    info: "",
    status: 0,
    initialize: false
}

export const setFightState = (data) => ({ type: SET_FIGHT_STATE, data: data });
export const setFightAbility = (data) => ({ type: SET_FIGHT_ABILITY, data: data });
export const setFightInitialize = () => ({ type: SET_FIGHT_INITIALIZE });
export const setFightMistake = (data) => ({ type: SET_FIGHT_MISTAKE, data: data });

const fightReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FIGHT_STATE:
            return {
                ...state,
                player: action.data.player,
                teamOne: action.data.teamOne,
                teamTwo: action.data.teamTwo,
                resultRound: action.data.resultRound,
                countRound: action.data.countRound,
                endRoundTimer: action.data.endRoundTimer,
                info: action.data.info,
                status: action.data.status
            };
        case SET_FIGHT_ABILITY:
            return {
                ...state,
                ability: action.data
            };
        case SET_FIGHT_INITIALIZE:
            return {
                ...state,
                initialize: true
            };
        case SET_FIGHT_MISTAKE:
            return {
                ...state,
                info: action.data.info,
                status: action.data.status
            };
        default:
            return state;
    };
};

export const loadRound = () => (dispatch) => {
    let dispatchFigth = dispatch(getFightState());
    let dispatchAbility = dispatch(getAbility());
    Promise.all([dispatchFigth, dispatchAbility])
        .then(() => {
            dispatch(setFightInitialize());
        });
};

export const getFightState = () => (dispatch) => {
    return API.getFightRefresh()
        .then(data => {
            if (data.status === 1) {
                dispatch(setFightState(data));
            }
            else {
                dispatch(setFightMistake(data));
            }
        });
};

export const getAbility = () => (dispatch) => {
    return API.getAbility()
        .then(data => {
            dispatch(setFightAbility(data));
        });
};

export const setCurrentHit = (abilityId, targetId) => (dispatch) => {
    return API.setHit(abilityId, targetId)
        .then(data => {
            if (data.status === 1) {
                dispatch(setFightState(data));
            }
            else {
                dispatch(setFightMistake(data));
            }
        });
};

export default fightReducer;