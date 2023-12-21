const SET_NEWS = "SET_NEWS";
const SET_IS_AUTH = "SET_IS_AUTH";

let initialState = {
    news: [
        {id: 1, imgLink: "Ссылка на изображение", description: "Описание новости"}
    ],
    isAuth: false
}

//экшены, которые будет вызывать контейнер, при взаимодействии с UI
export const setNews = (news) => ({ type: SET_NEWS });
export const setIsAuth = (isAuth) => ({ type: SET_IS_AUTH, isAuth: isAuth });

//через dispatch из контейнера в reducer передается action и обновляется state
const greetingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            if(!action.news) {
                return { ...state };
            }
            return { ...state, news: action.news };
        case SET_IS_AUTH:
            return { ...state, isAuth: action.isAuth}
        default:
            return state;
    };
};

export default greetingReducer;