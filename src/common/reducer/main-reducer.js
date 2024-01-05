import { API } from './../../api/api';
const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    player: {},
    enemies: [],
    players: [],
    content: "",
    status: null,
    isAuth: false
}

//экшены, которые будет вызывать контейнер, при взаимодействии с UI
export const setState = (state) => ({ type: SET_USER_DATA, state: state });

//через dispatch из контейнера в reducer передается action и обновляется state
const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.state, isAuth: true };
        default:
            return state;
    };
};

export const getMain = () => (dispatch) => {
    return API.getMain()
        .then(data => {
            if (data.status === "OK") {
                dispatch(setState(data));
            }
        });
};

export const movePlayer = (direction) => {
    return (dispatch) => {
        API.getMove(direction)
            .then(data => {
                if (data.status === "OK") {
                    dispatch(setState(data));
                }
            });
    };
};

export default mainReducer;