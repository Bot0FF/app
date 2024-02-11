import { API_FIGHT } from './../../api/api_fight';
const SET_FIGHT_STATE = "SET_FIGHT_STATE";
const SET_FIGHT_MISTAKE = "SET_FIGHT_MISTAKE";

let initialState = {
    player: {},
    teamOne: [],
    teamTwo: [],
    ability: [],
    resultRound: "",
    countRound: 0,
    endRoundTimer: 0,
    info: "",
    status: 0
}

export const setFightState = (data) => ({ type: SET_FIGHT_STATE, data: data });
export const setFightMistake = (data) => ({ type: SET_FIGHT_MISTAKE, data: data });

const fightReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FIGHT_STATE:
            return {
                ...state,
                player: action.data.player,
                teamOne: action.data.teamOne,
                teamTwo: action.data.teamTwo,
                ability: action.data.ability,
                resultRound: action.data.resultRound,
                countRound: action.data.countRound,
                endRoundTimer: action.data.endRoundTimer,
                info: action.data.info,
                status: action.data.status
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

//информация о сражении
export const getFightState = () => (dispatch) => {
    return API_FIGHT.getFightRefresh()
        .then(data => {
            if (data.status === 1) {
                dispatch(setFightState(data));
            }
            else {
                dispatch(setFightMistake(data));
            }
        });
};

//перемещение по линии сражения
export const setMove = (direction) => (dispatch) => {
    return API_FIGHT.setMove(direction)
        .then(data => {
            if (data.status === 1) {
                dispatch(setFightState(data));
            }
            else {
                dispatch(setFightMistake(data));
            }
        });
};

//удар оружием
export const setHitWeapon = (targetId) => (dispatch) => {
    return API_FIGHT.setHitWeapon(targetId)
        .then(data => {
            if (data.status === 1) {
                dispatch(setFightState(data));
            }
            else {
                dispatch(setFightMistake(data));
            }
        });
};

//применение умения
export const setHitAbility = (abilityId, targetId) => (dispatch) => {
    return API_FIGHT.setHitAbility(abilityId, targetId)
        .then(data => {
            if (data.status === 1) {
                dispatch(setFightState(data));
            }
            else {
                dispatch(setFightMistake(data));
            }
        });
};

//завершение хода
export const setActionEnd = () => (dispatch) => {
    return API_FIGHT.setActionEnd()
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