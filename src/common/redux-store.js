import mainReducer from "./reducer/main-reducer";
import mailReducer from "./reducer/mail-reducer";
import libraryReducer from "./reducer/library-reducer";
import { combineReducers, legacy_createStore as createStore } from "redux";

//добавляем reducers
let reducers = combineReducers({
    mainPage: mainReducer,
    mailPage: mailReducer,
    libraryPage: libraryReducer
});

//создаем store с данными 
export const store = createStore(reducers);