import axios from 'axios';
import {LoginParamsType,ResponseType} from '../Types/Types';


export const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '78abceff-cb7c-4815-8b56-016c67d0625d'
    }
});


export const AuthAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login (data:LoginParamsType) {
        return instance.post<ResponseType<{ userId: number }>>('auth/login',data)
    },
    logout () {
        return instance.delete<ResponseType<{ userId: number }>>('auth/login')
    }
};



