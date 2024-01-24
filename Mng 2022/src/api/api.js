import * as axios from "axios";
import { useEffect, useState } from "react";
import {load} from 'redux-localstorage-simple';


const instance = axios.create({
    baseURL: 'https://video.knightdomservers.com/',
    headers:  {
        'Accept': "application/json",
        'Authorization': `Bearer ${load({namespace: "token"})}`
    }
});


export const authAPI = {
    async ALLcategories() {
        try {
            let allcategories = await instance.get(`content/categories`);
            return allcategories;
        } catch (error) {
            return error.response;
        }
    },
    async me() {
        try {
            let auth = await instance.get(`/api/user`);
            return auth;
        } catch (error) {
            return error.response;
        }
    },
    async  Setleng() {
        try {
            let res = await instance.get(`/api/localization`);
            return res;
        } catch (error) {
            return error.response;
        }
    },
    async  SetSELECTORS() {
        try {
            let res = await instance.get(`/api/availableSettings`);
            return res;
        } catch (error) {
            return error.response;
        }
    },
    async  login(data) {
        try {
            let res = await instance.post(`/api/auth/signin`, data);
            if(res.data.token){
                let s = res.data.token;
                instance.defaults.headers.Authorization = `Bearer ${s}`;
            }
            return res;
        } catch (error) {
            return error.response;
        }
    },
    async postuserdata(data) {
        try {
            let auth = await instance.post(`/api/user`, data);
            return auth;
        } catch (error) {
            return error.response;
        }
    },
    async logout() {
        try {
            let auth = await instance.post(`/api/auth/signout`);
            return auth;
        } catch (error) {
            return error.response;
        }
    },
    async signup(username, email, type) {
        try {
            let obj = {
                username: username,
                email: email,
                type: type
            }
            let reg = await instance.post(`/api/auth/signup`, obj);
            if(reg.data.token){
                let s = reg.data.token;
                instance.defaults.headers.Authorization = `Bearer ${s}`;
            }
            return reg;
        } catch (error) {
            return error.response;
        }
    }
}

