import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import GoodsDataReducer from "./GoodsData_reducer.js";
import BlogPageDataReducer from "./BlogData_reducer.js";
import thunkMiddleware from 'redux-thunk';
import AppReducer from "./App_reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let reducers = combineReducers({
    GoodsData: GoodsDataReducer,
    BlogData: BlogPageDataReducer,
    AppData: AppReducer
});
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.store = store;
export default store;