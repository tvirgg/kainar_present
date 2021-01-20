import {UserAPI} from "../../components/users/Api";
import {stopSubmit} from "redux-form";


let initialstate = {
  profile: null,
    status: ''
}
const ProfileDataReducer = (state = initialstate, action) =>{
    if (action.type === 'setProfile'){
      return{
        ...state,
        profile: action.profile
      }
    }
    else if (action.type === 'Get_status'){
        return{
            ...state,
            status: action.status
        }
    }
    else if (action.type === 'Set_Up_photo'){
        return{
            ...state,
            profile: {...state.profile,  photos: action.photos}
        }
    }
      else {
        return state;
      }
}
export const setProfilePage =(userId)=> async (dispatch) => {
    let response = await UserAPI.getProfile(userId);
            dispatch(setProfile(response.data));
        }
export const setStatus = (status) => { return {type: 'Get_status', status}}
export const setUpphoto = (photos) => { return {type: 'Set_Up_photo', photos}}

export const getStatus = (userId) => async (dispatch) => {
    let response = await UserAPI.getStatus(userId)
            dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await UserAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await UserAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(setUpphoto(response.data.data.photos));
    }
}
export const SaveProfile = (profile) => async (dispatch, getState) => {
    const userID = getState().AuthData.id;
    const  response = await UserAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(setProfilePage(userID));
    }else{
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("edit_profile_data", {_error: message}));
        return Promise.reject(response.data.messages[0]);
    }
}
export const setProfile= (profile) =>({
    type: 'setProfile', profile})

export default ProfileDataReducer;
