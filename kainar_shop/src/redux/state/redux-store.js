import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import GoodsDataReducer from "./GoodsData_reducer.js";
import ProfilePageDataReducer from "./ProfileGoodsData_reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let reducers = combineReducers({
    GoodsData: GoodsDataReducer,
    ProfilePageData: ProfilePageDataReducer
});
let store = createStore(reducers, composeEnhancers(applyMiddleware()));
window.store = store;
export default store;