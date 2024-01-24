import greetingReducer from "./reducer/greeting-reducer";
import mainReducer from "./reducer/main-reducer";
import registerReducer from './reducer/register-reducer';
import appReducer from "./reducer/app-reducer";
import fightReducer from "./reducer/fight-reducer";
import authReducer from './reducer/auth-reducer';
import { thunk as thunkMidleware } from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";

//добавляем reducers
let reducers = combineReducers({
    authState: authReducer,
    app: appReducer,
    greetingPage: greetingReducer,
    registerPage: registerReducer,
    mainState: mainReducer,
    fightState: fightReducer,
    form: formReducer
});

//создаем store с данными 
export const store = createStore(reducers, applyMiddleware(thunkMidleware));