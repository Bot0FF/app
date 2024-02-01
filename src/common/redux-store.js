import greetingReducer from "./reducer/greeting-reducer";
import mainReducer from "./reducer/main-reducer";
import registerReducer from './reducer/register-reducer';
import fightReducer from "./reducer/fight-reducer";
import authReducer from './reducer/auth-reducer';
import { thunk as thunkMidleware } from "redux-thunk";
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";

//добавляем reducers
let reducers = combineReducers({
    authState: authReducer,
    greetingPage: greetingReducer,
    registerPage: registerReducer,
    mainState: mainReducer,
    fightState: fightReducer
});

//создаем store с данными 
export const store = createStore(reducers, applyMiddleware(thunkMidleware));