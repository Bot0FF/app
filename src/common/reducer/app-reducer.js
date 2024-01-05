import { getMain } from "./main-reducer";
const SET_INITIALIZE = "SET_INITIALIZE";

let initialState = {
    initialize: false
}

export const setInitialized = () => ({ type: SET_INITIALIZE });

//через dispatch из контейнера в reducer передается action и обновляется state
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZE:
            return { ...state, initialize: true };
        default:
            return state;
    };
};

export const initializeApp = () => {
    return (dispatch) => {
        let dispatchResult = dispatch(getMain());
        Promise.all([dispatchResult])
            .then(() => {
                dispatch(setInitialized());
            });
    };
};

export default appReducer;