import {profileAPI} from './profile-api';
import {instance} from './instance-api';


export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`);
    },
    getProfile(userId: number | null) {
        return profileAPI.getProfile(userId);
    },
    startUnfollowUsers(id: number) {
        return instance.delete(`follow/${id}`);

    },
    startFollowUsers(id: number) {
        return instance.post(`follow/${id}`, {});

    }

};



