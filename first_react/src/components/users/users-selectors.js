export const userSelect = (state) =>{
   return  state.UsersData.users;
}
export const pageSizeSelect = (state) =>{
    return  state.UsersData.pageSize;
}
export const totalUsersCountSelect = (state) =>{
    return  state.UsersData.totalUsersCount;
}
export const curentPageSelect = (state) =>{
    return  state.UsersData.curentPage;
}
export const isFetcingSelect = (state) =>{
    return  state.UsersData.isFetcing;
}
export const followingInProgresSelect = (state) =>{
    return  state.UsersData.followingInProgress;
}
