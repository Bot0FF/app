const SET_USER_DATA = "SET_USER_DATA";
const SET_IS_HANDLING = "SET_IS_HANDLING";

let initialState = {
    player: {},
    enemies: [],
    players: [],
    content: "",
    status: null,
    isHandling: false
}

//экшены, которые будет вызывать контейнер, при взаимодействии с UI
export const setState = (state) => ({ type: SET_USER_DATA, state: state });
export const setIsHandling = (isHandling) => ({ type: SET_IS_HANDLING, isHandling: isHandling });

//через dispatch из контейнера в reducer передается action и обновляется state
const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.state };
        case SET_IS_HANDLING:
              return { ...state, isHandling: action.isHandling };
        default:
            return state;
    };
};

export default mainReducer;