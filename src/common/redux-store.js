import { combineReducers, legacy_createStore as createStore } from "redux";
import mailReducer from "./reducer/mail-reducer";
import libraryReducer from "./reducer/library-reducer";

//добавляем reducers
let reducers = combineReducers({
    mailPage: mailReducer,
    libraryPage: libraryReducer
});

//создаем store с данными 
export const store = createStore(reducers);