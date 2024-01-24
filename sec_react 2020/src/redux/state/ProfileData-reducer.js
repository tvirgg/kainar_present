import {UserAPI} from "../../components/users/Api";


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
      else {
        return state;
      }
}
export const setProfilePage =(userId)=> async (dispatch) => {
    let response = await UserAPI.getProfile(userId);
            dispatch(setProfile(response.data));
        }
export const setStatus = (status) => { return {type: 'Get_status', status}}

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
export const setProfile= (profile) =>({
    type: 'setProfile', profile})

export default ProfileDataReducer;
