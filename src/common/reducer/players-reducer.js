const SET_STATE = "SET_STATE";
const SET_PLAYER_PROFILE = "SET_PLAYER_PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    player: {},
    players: [],
    content: "",
    isFetching: true
}

//экшены, которые будет вызывать контейнер, при взаимодействии с UI
export const setState = (state) => ({ type: SET_STATE, state });
export const setPlayerProfile = (player) => ({ type: SET_PLAYER_PROFILE, player });
export const toogleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

//через dispatch из контейнера в reducer передается action и обновляется state
const playersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATE:
            return { ...action.state };
        case SET_PLAYER_PROFILE:
            return { ...state, player: action.player, players: [] };
        case TOGGLE_IS_FETCHING:
            return { ...state, player: action.player }
        default:
            return state;
    };
};

export default playersReducer;