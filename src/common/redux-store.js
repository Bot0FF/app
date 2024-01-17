import greetingReducer from "./reducer/greeting-reducer";
import mainReducer from "./reducer/main-reducer";
import registerReducer from './reducer/register-reducer';
import { thunk as thunkMidleware } from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import appReducer from "./reducer/app-reducer";

//добавляем reducers
let reducers = combineReducers({
    app: appReducer,
    greetingPage: greetingReducer,
    registerPage: registerReducer,
    mainState: mainReducer,
    form: formReducer
});

//создаем store с данными 
export const store = createStore(reducers, applyMiddleware(thunkMidleware));