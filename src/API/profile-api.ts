import {NewProfileType} from '../Types/Types';
import {instance} from './instance-api';


export const profileAPI = {

    getProfile(userId: number | null) {
        return instance.get<NewProfileType>(`profile/` + userId);
    },
    getStatus(userId: number | null) {

        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status: string) {

        return instance.put(`profile/status`, {status: status});
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(formData: NewProfileType) {
        return instance.put(`profile`, formData);
    }


};



