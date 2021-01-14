import {AuthAPI} from '../l3-dal/auth-api';
import {LoginParamsType, ResultCodeForCaptcha, ResultCodesEnum} from '../../../Types/api-types';
import {securityAPI} from '../l3-dal/security-api';
import {BaseThunkType, InferActionsTypes} from '../../../Types/Types';


const initialState = {
    userId: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
    error: ''

};

const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'AUTH/SET_USER_DATA':
            return {
                ...state, ...action.payload
            };
        case  'AUTH/SET_ERROR' :
            return {
                ...state,
                ...action.payload

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
    setError: (error: string) => (
        {type: 'AUTH/SET_ERROR', payload: {error}} as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => (
        {type: 'AUTH/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}} as const),

};
export const getAuthUserDataTC = (): ThunkType => async (dispatch) => {
    try {
        const meData = await AuthAPI.me();
        if (meData.resultCode === ResultCodesEnum.Success) {
            let {id, email, login} = meData.data;
            dispatch(authActions.setAuthUserData(id, email, login, true));
        }
    } catch (e) {
        console.log('Some error with getAuthUserDataTC');
    }

};
export const loginTC = (data: LoginParamsType): ThunkType => async (dispatch) => {
    try {
        const loginData = await AuthAPI.login(data);
        switch (loginData.resultCode) {
            case  ResultCodesEnum.Success:
                await dispatch(getAuthUserDataTC());
                break;
            case ResultCodeForCaptcha.CaptchaRequired:
                await dispatch(getCaptchaUrl());
                break;
            case  ResultCodesEnum.Error:
                console.log('error');
                dispatch(authActions.setError(loginData.messages[0]));


        }
    } catch (error) {

        dispatch(authActions.setError(error.message));
    }

};
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    try {
        const captchaData = await securityAPI.getCaptchaUrl();
        const captchaUrl = captchaData.data.url;
        dispatch(authActions.getCaptchaUrlSuccess(captchaUrl));
    } catch (e) {
        console.log('Some error with getCaptchaUrl');
    }


};
export const logoutTC = (): ThunkType => async (dispatch) => {
    try {
        const logoutData = await AuthAPI.logout();
        if (logoutData.resultCode === 0) {
            dispatch(authActions.setAuthUserData(null, null, null, false));
        }
    } catch (e) {
        console.log('Some error with logoutTC');
    }

};

type  InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof authActions>
type ThunkType = BaseThunkType<ActionsType>


export default authReducer;
