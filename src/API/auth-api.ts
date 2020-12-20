import {APIResponseType, LoginParamsType, ResultCodeForCaptcha, ResultCodesEnum} from '../Types/Types';
import {instance} from './instance-api';


export const AuthAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data);
    },
    login(data: LoginParamsType) {
        return instance.post<APIResponseType<LoginResponseDataType, ResultCodesEnum | ResultCodeForCaptcha>>('auth/login', data).then(res => res.data);
    },
    logout() {
        return instance.delete<APIResponseType<LoginResponseDataType>>('auth/login').then(res => res.data);
    }
};


type MeResponseDataType = {
    id: number
    email: string
    login: string
}
type LoginResponseDataType = {
    userId: number
}
