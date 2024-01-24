import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import AppReducer from "./App_reducer";
import {save} from 'redux-localstorage-simple';
import BroadcastReducer from "./Broadcast_reducer";
import ProfileReducer from "./Profile_reducer";
import Broadcast_list_Reducer from "./Broadcast_list_reducer";
import authReducer from "./Auth-reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let reducers = combineReducers({
    AppData: AppReducer,
    BroadcastData: BroadcastReducer,
    ProfileData: ProfileReducer,
    Broadcast_listData: Broadcast_list_Reducer,
    AuthData: authReducer,
    form: formReducer
});
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware, save({namespace: 'APP'}))));
window.store = store;
export default store;
