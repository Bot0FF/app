import { combineReducers, legacy_createStore as createStore } from "redux";
import mailReducer from "./reducer/mail-reducer";

let reducers = combineReducers({
    mailPage: mailReducer
});

//создаем store с данными почты user и методами работы с почтой 
export const mailStore = createStore(reducers);