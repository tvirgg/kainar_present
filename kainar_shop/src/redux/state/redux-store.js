import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import GoodsDataReducer from "./GoodsData_reducer.js";
import BlogPageDataReducer from "./BlogData_reducer.js";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let reducers = combineReducers({
    GoodsData: GoodsDataReducer,
    BlogData: BlogPageDataReducer
});
let store = createStore(reducers, composeEnhancers(applyMiddleware()));
window.store = store;
export default store;