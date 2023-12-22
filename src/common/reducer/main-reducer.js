const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    player: {},
    enemies: [],
    players: [],
    content: "",
    httpStatus: null,
}

//экшены, которые будет вызывать контейнер, при взаимодействии с UI
export const setState = (state) => ({ type: SET_USER_DATA, state });

//через dispatch из контейнера в reducer передается action и обновляется state
const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.state };
        default:
            return state;
    };
};

export default mainReducer;