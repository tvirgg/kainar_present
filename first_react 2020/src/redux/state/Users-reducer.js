import {getUsers, UserAPI} from "../../components/users/Api";
import {updateObjectInArray} from "../../utils/object-helpers";

let initialstate = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    curentPage: 1,
    isFetcing: true,
    followingInProgress: []
};
export const r = (a) =>{
    console.log(a);
}
const UsersReducer = (state = initialstate, action) => {
    if (action.type === 'follow') {
        return {
            ...state,
            users: updateObjectInArray(state.users, action.userID, "id", {followed: true} )
        }
    } else if (action.type === 'unfollow') {
        return {
            ...state,
            users: updateObjectInArray(state.users, action.userID, "id", {followed: false} )
        }
    }else if (action.type === 'following_InProgress') {
    return {
        ...state,
        followingInProgress: action.isFetcing
            ? [...state.followingInProgress, action.userID]
            : state.followingInProgress.filter(id => id != action.userID)}
    }else if (action.type === 'set_user') {
        return {
            ...state, users: action.users }
    } else if (action.type === 'set_TotalCount') {
        return {...state, totalUsersCount: action.totalCount}
    }else if (action.type === 'set_curentPage') {
        return {...state, curentPage: action.curentPage}
    }else if (action.type === 'togle_fetch') {
        return {...state, isFetcing : action.isFetcing}
    }else {
        return state;
    }
};
export const fallowSEC = (userID) => {
    return {
        type: 'follow',
        userID
    }
};

export const unfallowSEC = (userID) => {
    return {
        type: 'unfollow',
        userID
    }
};
export const toggleisFetcing = (isFetcing) => ({type: 'togle_fetch', isFetcing });
export const setuser = (users) => ({type: 'set_user', users});
export const togglefollowingInProgress = (isFetcing, userID) => ({type: 'following_InProgress', isFetcing, userID});
export const SetCurrentPage = (p) =>({type: 'set_curentPage', curentPage: p});
export const setTotalCount = (TotalCount) =>({type: 'set_TotalCount', totalCount: TotalCount});

export const getUsersC = (curentPage, pageSize) => {
    return async (dispatch) => {
    dispatch(toggleisFetcing(true));
       let data =  await UserAPI.getUsers(curentPage, pageSize);
        dispatch(toggleisFetcing(false));
        dispatch(SetCurrentPage(curentPage));
        dispatch(setuser(data.items));
        dispatch(setTotalCount(data.totalCount)
)};
};

const followUnfollowFlow = async (dispatch, UId, apiMethod, actionCreator) => {
    dispatch(togglefollowingInProgress(true, UId));
    let response = await apiMethod(UId);
    if (response.data.resultCode == 0) {
        dispatch(actionCreator(UId));
    }
    dispatch(togglefollowingInProgress(false, UId));
}
export const fallow = (UId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, UId, UserAPI.Follow.bind(UId), fallowSEC);
    }}
    export const unfallow = (userId) => {
        return async (dispatch) => {
            followUnfollowFlow(dispatch, userId, UserAPI.Unfollow.bind(userId), unfallowSEC);
        }
    }


export default UsersReducer;
