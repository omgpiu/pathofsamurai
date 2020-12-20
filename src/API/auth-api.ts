import {LoginParamsType} from '../Types/Types';
import {instance} from './instance-api';


export const AuthAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data);
    },
    login(data: LoginParamsType) {
        return instance.post<APIResponseType<LoginResponseDataType, ResultCodesEnum | ResultCodeForCaptcha>>('auth/login', data).then(res => res.data);
    },
    logout() {
        return instance.delete<APIResponseType<{ userId: number }>>('auth/login').then(res => res.data);
    }
};

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,

}

export enum ResultCodeForCaptcha {

    CaptchaRequired = 10
}

type MeResponseDataType = {
    id: number
    email: string
    login: string
}
type LoginResponseDataType = {
    userId: number
}
