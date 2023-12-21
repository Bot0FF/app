const SET_STATE = "SET_STATE";
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
export const toogleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

//через dispatch из контейнера в reducer передается action и обновляется state
const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATE:
            return { ...action.state };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        default:
            return state;
    };
};

export default mainReducer;