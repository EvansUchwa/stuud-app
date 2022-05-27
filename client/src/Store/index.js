import { combineReducers } from "redux";
import { createStore } from "redux";
import { authReducer } from "./reducers/authReducers";
import { axiosReducer } from "./reducers/axiosReducer";
import { modalReducer } from "./reducers/modalReducer";
import { loadReducer } from "./reducers/loadReducer";

const store = createStore(combineReducers(
    {
        auth: authReducer, axiosDefault: axiosReducer,
        modal: modalReducer, load: loadReducer
    }
),
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__())

// store.subscribe(() => console.log(store.getState()))
export default store;