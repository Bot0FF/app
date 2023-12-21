import authReducer from "./reducer/auth-reducer";
import mainReducer from "./reducer/main-reducer";
import mailReducer from "./reducer/mail-reducer";
import libraryReducer from "./reducer/library-reducer";
import playersReducer from "./reducer/players-reducer";
import { combineReducers, legacy_createStore as createStore } from "redux";

//добавляем reducers
let reducers = combineReducers({
    auth: authReducer,
    mainPage: mainReducer,
    mailPage: mailReducer,
    libraryPage: libraryReducer,
    playersPage: playersReducer
});

//создаем store с данными 
export const store = createStore(reducers);