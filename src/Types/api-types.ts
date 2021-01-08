export type MeResponseDataType = {
    id: number
    email: string
    login: string
}
export type LoginResponseDataType = {
    userId: number
}
export type LoginParamsType = {
    email?: string | undefined
    password?: string | undefined
    rememberMe?: boolean | undefined
    captcha?: null | string
}
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
