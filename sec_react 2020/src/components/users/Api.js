import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "fa719772-b24e-4ef6-9c60-7967252f265b"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});
export const UserAPI ={
    getUsers(currentPage =1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&cout=${pageSize}`,
            {

            }, {}).then(response => response.data);
    },
    Follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    Unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
    },
    getStatus(userId) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/`+ userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    },
    authrequire() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}


