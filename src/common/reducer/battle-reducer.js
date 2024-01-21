import { API } from '../../api/api';
const SET_BATTLE_STATE = "SET_BATTLE_STATE";
const SET_STATUS_NOT_FOUND = "SET_STATUS_NOT_FOUND";
const SET_STATUS_VICTORY = "SET_STATUS_VICTORY";

let initialState = {
    player: {},
    fight: {},
    teamOne: [],
    teamTwo: [],
    info: "",
    status: null,
    isAuth: false
}

let getTeamOne = (player, units) => {
    let teamOne = [];
    if(player._teamType == 1) {
        teamOne.push(player);
    }
    if (units.lenght != 0) {
        units.forEach(unit => unit._teamType === 1 ? teamOne.push(unit) : null);
    }
    return teamOne;
}

let getTeamTwo = (player, units) => {
    let teamTwo = [];
    if(player._teamType == 2) {
        teamTwo.push(player);
    }
    if (units.lenght != 0) {
        units.forEach(unit => unit._teamType === 2 ? teamTwo.push(unit) : null);
    }
    return teamTwo;
}


//экшены, которые будет вызывать контейнер, при взаимодействии с UI
export const setBattleState = (data) => ({ type: SET_BATTLE_STATE, data: data });
export const setStatusNotFound = (data) => ({ type: SET_STATUS_NOT_FOUND, data: data });
export const setStatusVictory = (data) => ({ type: SET_STATUS_VICTORY, data: data });

//через dispatch из контейнера в reducer передается action и обновляется state
const battleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BATTLE_STATE:
            return {
                ...state,
                player: action.data.player,
                fight: action.data.fight,
                teamOne: getTeamOne(action.data.player, action.data.fight.units),
                teamTwo: getTeamTwo(action.data.player, action.data.fight.units),
                info: action.data.info,
                status: action.data.status,
                isAuth: true
            };
        case SET_STATUS_NOT_FOUND:
            return {
                ...state,
                status: action.data.status,
                info: action.data.info
            };
        case SET_STATUS_VICTORY:
            return {
                ...state,             
                status: action.data.status
            };
        default:
            return state;
    };
};

export const setRefreshFightState = () => (dispatch) => {
    return API.getFightRefresh()
        .then(data => {
            if (data.status === 1) {
                dispatch(setBattleState(data));
            }
            else if (data.status == 2) {
                dispatch(setStatusVictory(data));
            }
            else {
                dispatch(setStatusNotFound(data));
            }
        });
};

export const setCurrentHit = (abilityId, targetId) => (dispatch) => {
    return API.setHit(abilityId, targetId)
        .then(data => {
            if (data.status === 1) {
                dispatch(setBattleState(data));
            }
        });
};

export default battleReducer;