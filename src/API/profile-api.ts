import {APIResponseType, NewProfileType, PhotosType} from '../Types/Types';
import {instance} from './instance-api';


export const profileAPI = {
    getProfile(userId: number | null) {
        return instance.get<NewProfileType>(`profile/` + userId).then(res => res.data);
    },
    getStatus(userId: number | null) {
        return instance.get<string>(`profile/status/` + userId).then(res => res.data);
    },
    updateStatus(status: string) {

        return instance.put<APIResponseType>(`profile/status`, {status: status}).then(res => res.data);
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put<APIResponseType<SavePhotosResponseType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data);
    },
    saveProfile(formData: NewProfileType) {
        return instance.put<APIResponseType>(`profile`, formData).then(res => res.data);
    }
};

type SavePhotosResponseType = {
    photos: PhotosType
}



