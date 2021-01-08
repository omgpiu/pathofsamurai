import {instance} from '../../../SN-1-main/m3-dal/instance-api';
import {APIResponseType} from '../../../Types/api-types';
import {userType} from '../../../Types/Types';

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10, term: string = '', friend: null | boolean = null) {
        return instance.get<ResponseItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` +
            (friend === null ? '' : `&friend=${friend}`));
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
