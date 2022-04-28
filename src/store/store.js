import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import weatherReducer from "./reducers/weatherReducers";

const rootReducer = combineReducers({ weather: weatherReducer });
export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
