const SET_NEWS = "SET_NEWS";

let initialState = {
    news: [
        {id: 1, imgLink: "Новость 1", description: "Ссылка на новость 1"},
        {id: 2, imgLink: "Новость 2", description: "Ссылка на новость 2"},
    ]
}

//экшены, которые будет вызывать контейнер, при взаимодействии с UI
export const setNews = (news) => ({ type: SET_NEWS, news: news });

//через dispatch из контейнера в reducer передается action и обновляется state
const greetingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            if (!action.news) {
                return { ...state };
            }
            return { ...state, news: action.news };
        default:
            return state;
    };
};

export const getGreeting = () => (dispatch) => {
    return dispatch(setNews());
}

export default greetingReducer;