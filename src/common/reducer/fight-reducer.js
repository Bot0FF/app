import { API } from '../../api/api';
const SET_FIGHT_STATE = "SET_FIGHT_STATE";
const SET_ERROR = "SET_ERROR";

let initialState = {
    player: {},
    fight: {},
    teamOne: [],
    teamTwo: [],
    info: "",
    status: 0
}

export const setFightState = (data) => ({ type: SET_FIGHT_STATE, data: data });
export const setError = (data) => ({ type: SET_ERROR, data: data });

const fightReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FIGHT_STATE:
            return {
                ...state,
                player: action.data.player,
                fight: action.data.fight,
                teamOne: action.data.teamOne,
                teamTwo: action.data.teamTwo,
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

export const setFight = (targetId) => (dispatch) => {
    return API.getAttack(targetId)
    .then(data => {
        if (data.status === 1) {
            dispatch(setFightState(data));
        }
        else if (data.status === 2) {
            dispatch(setError(data));
        }
    });
};

export const refreshFightState = () => (dispatch) => {
    return API.getFightRefresh()
        .then(data => {
            if (data.status === 1) {
                dispatch(setFightState(data));
            }
            else if (data.status === 2) {
                dispatch(setError(data));
            }
        });
};

export const setCurrentHit = (abilityId, targetId) => (dispatch) => {
    return API.setHit(abilityId, targetId)
        .then(data => {
            if (data.status === 1) {
                dispatch(setFightState(data));
            }
            else if (data.status === 2) {
                dispatch(setError(data));
            }
        });
};

export default fightReducer;