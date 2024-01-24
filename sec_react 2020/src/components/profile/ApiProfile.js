import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "fa719772-b24e-4ef6-9c60-7967252f265b"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const ProfileAPI ={

}


