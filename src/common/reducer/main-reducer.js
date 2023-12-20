const SET_STATE = "SET_STATE";
const SET_MOVE_UP = "SET_MOVE_UP";
const SET_MOVE_LEFT = "SET_MOVE_LEFT";
const SET_MOVE_RIGHT = "SET_MOVE_RIGHT";
const SET_MOVE_DOWN = "SET_MOVE_DOWN";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


let initialState = {
    player: {},
    enemies: [],
    players: [],
    content: "",
    httpStatus: "",
    isFetching: true
}

//экшены, которые будет вызывать контейнер, при взаимодействии с UI
export const setState = (state) => ({ type: SET_STATE, state });
export const setMoveUp = (player) => ({ type: SET_MOVE_UP, player });
export const setMoveLeft = (player) => ({ type: SET_MOVE_LEFT, player });
export const setMoveRight = (player) => ({ type: SET_MOVE_RIGHT, player });
export const setMoveDown = (player) => ({ type: SET_MOVE_DOWN, player });
export const toogleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

//через dispatch из контейнера в reducer передается action и обновляется state
const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATE:
            return { ...action.state };
        case SET_MOVE_UP:
            return { ...state };
        case SET_MOVE_LEFT:
            return { ...state };
        case SET_MOVE_RIGHT:
            return { ...state };
        case SET_MOVE_DOWN:
            return { ...state };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        default:
            return state;
    };
};

export default mainReducer;