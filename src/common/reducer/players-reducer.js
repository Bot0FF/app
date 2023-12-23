import { API } from "../../api/api";
const SET_STATE = "SET_STATE";
const SET_PLAYER_PROFILE = "SET_PLAYER_PROFILE";

let initialState = {
    player: {},
    players: [],
    content: "",
}

//экшены, которые будет вызывать контейнер, при взаимодействии с UI
export const setState = (state) => ({ type: SET_STATE, state });
export const getPlayerProfile = (player) => ({ type: SET_PLAYER_PROFILE, player });

//через dispatch из контейнера в reducer передается action и обновляется state
const playersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATE:
            return { ...action.state };
        case SET_PLAYER_PROFILE:
            return { ...state, player: action.player, players: [] };
        default:
            return state;
    };
};

export const listPlayers = () => {
    return (dispatch) => {
        API.getPlayers()
        .then(data => {
            if (data.status === "OK") {
                dispatch(setState(data));
            }
        });
    };
};

export const playerProfile = (name) => {
    return (dispatch) => {
        API.getProfile(name)
        .then(data => {
            if (data.status === "OK") {
                dispatch(getPlayerProfile(data.player));
            }
        });
    };
};

export default playersReducer;