import axios from 'axios';


const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '78abceff-cb7c-4815-8b56-016c67d0625d'
    }
});

export const profileAPI = {

    getProfile(userId: number) {

        return instance.get(`profile/` + userId);

    },
    getStatus(userId: number) {

        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status: string) {

        return instance.put(`profile/status`, {status: status});
    }
    //status- server needs this key

};



