import { combineReducers } from "redux";
import { createStore } from "redux";
import { authReducer } from "./reducers/authReducers";
import { axiosReducer } from "./reducers/axiosReducer";

const store = createStore(combineReducers(
    { auth: authReducer, axiosDefault: axiosReducer }
),
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__())

// store.subscribe(() => console.log(store.getState()))
export default store;