import React from 'react';
import axios from 'axios';


const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '78abceff-cb7c-4815-8b56-016c67d0625d'
    }
});

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)

    },
    startUnfollowUsers(id: string) {
        return instance.delete(`follow/${id}`)

    },
    startFollowUsers(id: string) {
        return instance.post(`follow/${id}`, {})

    }

};


export const AuthAPI =  {
    me() {
        return instance.get(`auth/me`)
    }


};


