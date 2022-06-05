import { combineReducers, compose } from "redux";
import { createStore, applyMiddleware } from "redux";
import { authReducer } from "./reducers/authReducers";
import { axiosReducer } from "./reducers/axiosReducer";
import { modalReducer } from "./reducers/modalReducer";
import { loadReducer } from "./reducers/loadReducer";
import { toastReducer } from "./reducers/toastReducer";
import thunk from "redux-thunk"


// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;


const store = createStore(combineReducers(
    {
        auth: authReducer, axiosDefault: axiosReducer,
        modal: modalReducer, load: loadReducer,
        toaster: toastReducer
    }
), composeEnhancers(applyMiddleware(thunk)))
// store.subscribe(() => console.log(store.getState()))
export default store;