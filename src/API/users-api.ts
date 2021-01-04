import {instance} from './instance-api';
import {userType} from '../Types/Types';
import {APIResponseType} from './api-types';


export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<ResponseItemsType>(`users?page=${currentPage}&count=${pageSize}`);
    },
    startFollowUsers(userId: number) {
        return instance.post<APIResponseType>(`follow/${userId}`).then(res => res.data);
    },
    startUnfollowUsers(userId: number) {
        return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<APIResponseType>;
    },


};


type ResponseItemsType = {
    items: Array<userType>
    totalCount: number
    error: string | null
}
