import {BaseThunkType, InferActionsTypes, LoginParamsType} from '../Types/Types';
import {AuthAPI, ResultCodeForCaptcha, ResultCodesEnum} from '../API/auth-api';
import {securityAPI} from '../API/security-api';


const initialState = {
    userId: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
    isCorrect: true

};
type  InitialStateType = typeof initialState
const authReducer = (state: InitialStateType = initialState, action: authActionsType): InitialStateType => {

    switch (action.type) {
        case 'AUTH/SET_USER_DATA':
            return {
                ...state, ...action.payload
            };
        case 'AUTH/CONFIRM_USER_DATA' :
            return {
                ...state,
                isCorrect: action.isCorrect
            };
        case 'AUTH/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
};
export const authActions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'AUTH/SET_USER_DATA', payload: {
            userId, email, login, isAuth
        }
    } as const),
    confirmUserData: (isCorrect: boolean) => (
        {type: 'AUTH/CONFIRM_USER_DATA', isCorrect} as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => (
        {type: 'AUTH/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}} as const)
};


export const getAuthUserDataTC = (): BaseThunkType => async (dispatch) => {

    const meData = await AuthAPI.me();
    if (meData.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = meData.data;
        dispatch(authActions.setAuthUserData(id, email, login, true));
    }

};
export const loginTC = (data: LoginParamsType): BaseThunkType => async (dispatch) => {
    const response = await AuthAPI.login(data);
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserDataTC());
        dispatch(authActions.confirmUserData(true));
    } else {
        if (response.data.resultCode === ResultCodeForCaptcha.CaptchaRequired) {
            dispatch(getCaptchaUrl());
        }
        // dispatch(formikHelpers.setFieldError())
        dispatch(authActions.confirmUserData(false));
    }


};
export const getCaptchaUrl = (): BaseThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(authActions.getCaptchaUrlSuccess(captchaUrl));
};
export const logoutTC = (): BaseThunkType => async (dispatch) => {
    const response = await AuthAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(authActions.setAuthUserData(null, null, null, false));
    }
};


export type authActionsType = InferActionsTypes<typeof authActions>


export default authReducer;
