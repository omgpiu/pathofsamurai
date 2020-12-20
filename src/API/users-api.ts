import {instance} from './instance-api';
import {APIResponseType, userType} from '../Types/Types';


export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<ResponseItemsType>(`users?page=${currentPage}&count=${pageSize}`);
    },
    startUnfollowUsers(id: number) {
        return instance.delete(`follow/${id}`) as Promise<APIResponseType>;
    },
    startFollowUsers(id: number) {
        return instance.post<APIResponseType>(`follow/${id}`, {}).then(res => res.data);
    }

};


type ResponseItemsType = {
    items: Array<userType>
    totalCount: number
    error: string | null
}
