const SET_PLAYER = "SET_PLAYER";
const SET_MOVE_UP = "SET_MOVE_UP";
const SET_MOVE_LEFT = "SET_MOVE_LEFT";
const SET_MOVE_RIGHT = "SET_MOVE_RIGHT";
const SET_MOVE_DOWN = "SET_MOVE_DOWN";


let initialState = {
    player: {
        id: 0,
        name: "",
        locationType: "",
        hp: 0,
        mana: 0,
        posX: 0,
        posY: 0
    }
}

//экшены, которые будет вызывать контейнер, при взаимодействии с UI
export const setPlayerAC = (player) => ({ type: SET_PLAYER, player });
export const setMoveUpAC = (player) => ({ type: SET_MOVE_UP, player });
export const setMoveLeftAC = (player) => ({ type: SET_MOVE_LEFT, player });
export const setMoveRightAC = (player) => ({ type: SET_MOVE_RIGHT, player });
export const setMoveDownAC = (player) => ({ type: SET_MOVE_DOWN, player });


//через dispatch из контейнера в reducer передается action и обновляется state
const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLAYER:
            return { ...state, player: action.player };
        case SET_MOVE_UP:
            return { ...state };
        case SET_MOVE_LEFT:
            return { ...state };
        case SET_MOVE_RIGHT:
            return { ...state };
        case SET_MOVE_DOWN:
            return { ...state };
        default:
            return state;
    };
};

export default mainReducer;