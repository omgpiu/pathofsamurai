import {instance} from './instance-api';
import {
    APIResponseType,
    LoginParamsType,
    LoginResponseDataType,
    MeResponseDataType,
    ResultCodeForCaptcha,
    ResultCodesEnum
} from './api-types';


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


