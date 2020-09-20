import React from 'react';
import axios from 'axios';


const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '78abceff-cb7c-4815-8b56-016c67d0625d'
    }
});

export const getUsersAPI = (currentPage: number = 1, pageSize: number = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);

};


export const getAuthAPI = () => {
    return instance.get(`auth/me`).then(response => response.data);

};

export const getProfileAPI = (userId: number) => {
    return instance.get(`profile/` + userId)
        .then(response => response.data);

};


export const startUnfollowUserAPI = (id: string) => {

    return instance.delete(`follow/${id}`)
        .then(response => response.data);

};

export const startFollowUserAPI = (id: string) => {
    return instance.post(`follow/${id}`, {})
        .then(response => response.data);


};


