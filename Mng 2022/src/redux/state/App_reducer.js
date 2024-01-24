import {LOCALES} from "../../components/i18n";
import {authAPI} from "../../api/api";
import {SetCurrentDATA} from "./Profile_reducer";
import React from "react";
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const GLOBAL_MENU = 'GLOBAL_MENU';
const SET_LANGUAGE = 'SET_LANGUAGE';
const SET_BLOCK = 'SET_BLOCK';
const SET_REGISTER = 'SET_REGISTER';
const SET_REGISTRETIONFORM = 'SET_REGISTRETIONFORM';
const SET_REGISTRETIONMODELFORM = 'SET_REGISTRETIONMODELFORM';
const SET_REGISTRETIONSTUDIOFORM = 'SET_REGISTRETIONSTUDIOFORM';
const SET_LOGINFORM = 'SET_LOGINFORM';
const SET_LOGINEROR = 'SET_LOGINEROR';
const SET_SIGNUPEROR = 'SET_SIGNUPEROR';
const SET_SIGNUPERORCLEAR = 'SET_SIGNUPERORCLEAR';
const SET_ISAITH = 'SET_ISAITH';
const SET_ISRENDER = 'SET_ISRENDER';
const SET_SET_REGISTER = 'SET_SET_REGISTER';
const SET_SET_SELECTORS = 'SET_SET_SELECTORS';
const SET_RECOVERYFORM = 'SET_RECOVERYFORM';
const SET_CATEGORIES = 'SET_CATEGORIES';
let initialState = {
    initialized: false,
    categories: [{},{}],
    mode: 1,
    globalmenumode: false,
    language: LOCALES.RUSSIAN,
    languages: [],
    blockscren: false,
    registermenu: true,
    registrationForm: false,
    registrationmodelForm: false,
    registrationStudioForm: false,
    loginForm: false,
    logineror: '',
    signuperor:{
        email: '',
        username: ''
    },
    isauth: false,
    isrender: false,
    appText: {},
    selectorsmass:{

    },
    recoveryform: false
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: action.statement
            }
        case SET_CATEGORIES:
            let r = action.statment;
            return {
                ...state,
                categories: r
            }
        case SET_RECOVERYFORM:
            return {
                ...state,
                recoveryform: action.statement
            }
        case SET_SET_SELECTORS:
            return {
                ...state,
                selectorsmass: action.statement
            }
        case SET_SET_REGISTER:
            return {
                ...state,
                appText: action.statement
            }
        case SET_REGISTER:
            return {
                ...state,
                registermenu: action.statement
            }
        case SET_REGISTRETIONMODELFORM:
            return {
                ...state,
                registrationmodelForm: action.statement
            }

        case SET_REGISTRETIONSTUDIOFORM:
            let clearsignuperorstudio = {
                email: '',
                username: ''
            }
            return {
                ...state,
                registrationStudioForm: action.statement,
                signuperor: clearsignuperorstudio
            }
        case SET_REGISTRETIONFORM:
            let clearsignuperor = {
                email: '',
                username: ''
            }
            return {
                ...state,
                registrationForm: action.statement,
                signuperor: clearsignuperor
            }
        case GLOBAL_MENU:
            return {
                ...state,
                globalmenumode: action.statement
            }
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.statement
            }
        case SET_ISRENDER:
            if(action.statement){

            }else{

            }
            return {
                ...state,
                isrender: action.statement
            }
        case SET_BLOCK:
            return {
                ...state,
                blockscren: action.statement
            }
        case SET_LOGINFORM:
            return {
                ...state,
                loginForm: action.statement
            }
        case SET_LOGINEROR:
            return {
                ...state,
                logineror: action.statement
            }
        case SET_ISAITH:
            return {
                ...state,
                isauth: action.statement
            }
        case SET_SIGNUPEROR:
            let signuperor = {
                    email: '',
                    username: ''
            }
            if (action.statement.username){
                signuperor.username = action.statement.username[0];
            }
            if (action.statement.email){
                signuperor.email = action.statement.email[0];
            }
            return {
                ...state,
                signuperor: signuperor
            }
        case SET_SIGNUPERORCLEAR:
            if (action.statement === 'email'){
                let signuperorct = {
                    email: '',
                }
                signuperorct = Object.assign(state.signuperor, signuperorct);
                return {
                    ...state,
                    signuperor: signuperorct
                }
            }else{
                let signuperorca = {
                    username: '',
                }
                signuperorca = Object.assign(state.signuperor, signuperorca);
                return {
                    ...state,
                    signuperor: signuperorca
                }
            }
        default:
            return state;
    }
}

export const SET_ISRENDERAC = (statement) => ({type: SET_ISRENDER, statement : statement});
export const SET_REGISTRETIONSTUDIOFORMAC = (statement) => ({type: SET_REGISTRETIONSTUDIOFORM, statement : statement});
export const SET_ISAUTHAC = (statement) => ({type: SET_ISAITH, statement : statement});
export const SET_SIGNUPERORAC = (statement) => ({type: SET_SIGNUPEROR, statement : statement});
export const SET_LOGINERORAC = (statement) => ({type: SET_LOGINEROR, statement : statement});
export const Setglobalmenu = (statement) => ({type: GLOBAL_MENU, statement : statement});
export const Setlenguage= (statement) => ({type: SET_LANGUAGE, statement : statement});
export const Setblock= (statement) => ({type: SET_BLOCK, statement : statement});
export const SetLOGINblock= (statement) => ({type: SET_LOGINFORM, statement : statement});
export const Setregistrationblock= (statement) => ({type: SET_REGISTRETIONFORM, statement : statement});
export const SetregistrationMODELblock= (statement) => ({type: SET_REGISTRETIONMODELFORM, statement : statement});
export const Setregister = (statement) => ({type: SET_REGISTER, statement : statement});
export const SET_SET_REGISTERAC = (statement) => ({type: SET_SET_REGISTER, statement : statement});
export const SET_SET_SELECTORSAC = (statement) => ({type: SET_SET_SELECTORS, statement : statement});
export const SET_CATEGORIESAC = (statment) => ({type: SET_CATEGORIES, statment : statment})




export const GetAll = () =>  async (dispatch) =>{
    dispatch(SET_ISRENDERAC(false));
    let response = await Promise.all([dispatch(isAUTHAC()), dispatch(GetCategories())]);
    if (response) {
        dispatch(SET_ISRENDERAC(true));
    }else {
        console.log('промисы не удались');
    }
}
export const GetCategories = () =>  async (dispatch) =>{
    dispatch(SET_ISRENDERAC(false));
    let response = await authAPI.ALLcategories();
    if (response){
        dispatch(SET_CATEGORIESAC(response.data));
    }else {
        console.log('Categories eror');
    }
    dispatch(SET_ISRENDERAC(true));
}
export const GetSelectors = () => async (dispatch) => {
    let response = await authAPI.SetSELECTORS();
    if (response) {
        dispatch(SET_SET_SELECTORSAC(response.data));
    }else {
        console.log('Erorr of len');
    }
}
export const LOADLENG = () => async (dispatch) => {
    let response = await authAPI.Setleng();
    if (response) {
        dispatch(SET_SET_REGISTERAC(response.data));
    }else {
        console.log('Erorr of len');
    }
}
export const isAUTHAC = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response) {
        if(response.statusText === "OK"){
            await dispatch(SetCurrentDATA(response.data));
            dispatch(SET_ISAUTHAC(true));
        }else{
            dispatch(SET_ISAUTHAC(false));
        }
    }else {
        console.log('eror');

    }
}
export const setlocalstorage = (some) => {
    localStorage.setItem('token', some);
}
export const loginAC = (some) => async (dispatch) => {
    dispatch(SET_LOGINERORAC(""));
    let response = await authAPI.login(some);
    if (response && response.data && response.data.token) {
        dispatch(SetCurrentDATA(response.data));
        dispatch(SetLOGINblock(false));
        setlocalstorage(JSON.stringify(response.data.token));
        dispatch(SET_ISAUTHAC(true));
    }else {
        dispatch(SET_LOGINERORAC(response.data.message));
    }
}

export const LOGOUTAC = () => async (dispatch) => {
        localStorage.removeItem('token');
    dispatch(SET_ISAUTHAC(false));
}

export const signupAC = (data) => async (dispatch) => {
        dispatch(SetCurrentDATA(data));
        dispatch(SetLOGINblock(false));
        setlocalstorage(JSON.stringify(data.token));
        dispatch(SET_ISAUTHAC(true));
}

// export const signupAC = (some) => async (dispatch) => {
//     let response = await authAPI.signup(some.username, some.email, some.type);
//     if (response.data.token) {
//         localStorage.setItem('token', JSON.stringify(response.data.token));
//         dispatch(SetCurrentDATA(response.data.user));
//         if (some.type == 'member'){
//             dispatch(Setregistrationblock(false));
//         }else if (some.type == 'model'){
//             dispatch(SetregistrationMODELblock(false));
//         }else if (some.type == 'studio'){
//             dispatch(SET_REGISTRETIONSTUDIOFORMAC(false));
//         }
//         dispatch(SET_ISAUTHAC(true));
//     }else {
//         dispatch(SET_SIGNUPERORAC(response.data.errors));
// }
// }


export default AppReducer;
