import {UserAPI, UserAPI as API} from "../../components/users/Api";
import {setProfile} from "./PostsData-reducer";
import {stopSubmit} from "redux-form";
let initialstate = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null // if null, then captcha is not required
}
const Auth_reducer = (state = initialstate, action) =>{

    if (action.type === 'Get_user_data' || action.type === 'Get_captcha_url'){
      return {
          ...state,
          ...action.payload
      }}
      else {
        return state;
      }
}

export const Setuserdata = (id, email, login, isAuth) =>{
  return{
      type: 'Get_user_data', payload: {id, email, login, isAuth}
  }
}
export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: 'Get_captcha_url', payload: {captchaUrl}
});
export const setrequire = () => async (dispatch) => {
    let response = await UserAPI.authrequire();
            if(response.data.resultCode === 0){
                let {id, email, login} = response.data.data;
                dispatch(Setuserdata(id, email, login, true));
            }
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await API.login(email, password, rememberMe, captcha);
            if (response.data.resultCode === 0) {

                dispatch(setrequire())
            }
            else{
                if (response.data.resultCode === 10){
                    dispatch(getCaptchaUrl());
                }
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: message}));
            }
}
    export const logout = () => async (dispatch) => {
        let response = await API.logout();
                if (response.data.resultCode === 0) {
                    dispatch(Setuserdata(null, null, null, false));
                }

}
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await API.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}
export default Auth_reducer;
