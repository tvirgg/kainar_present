import {createStore, combineReducers, applyMiddleware} from "redux"
import PostsDataReducer from './PostsData-reducer.js';
import DialogsDataReducer from './DialogsData_reducer.js';
import UsersReducer from './Users-reducer.js';
import Auth_reducer from "./Auth_reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";
import ProfileDataReducer from "./ProfileData-reducer";
let reducers = combineReducers({
    PostsData: PostsDataReducer,
    DialogsData: DialogsDataReducer,
    UsersData: UsersReducer,
    AuthData: Auth_reducer,
    ProfileData: ProfileDataReducer,
    form: formReducer,
    app: appReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;