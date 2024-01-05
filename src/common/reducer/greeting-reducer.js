import { API } from "../../api/api";
const SET_NEWS = "SET_NEWS";

let initialState = {
    news: [
        { id: 1, imgLink: "Ссылка на изображение 1", description: "Описание новости 1" },
        { id: 2, imgLink: "Ссылка на изображение 2", description: "Описание новости 2" }
    ]
}

//экшены, которые будет вызывать контейнер, при взаимодействии с UI
export const setNews = () => ({ type: SET_NEWS });

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

//TODO добавить загрузку новостей
export const getGreeting = () => {
    return (dispatch) => {
        API.getGreeting()
            .then(data => {
                dispatch(setNews());
            });
    }
}

export default greetingReducer;