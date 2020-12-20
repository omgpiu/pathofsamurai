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

const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
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
        if (loginData.resultCode === ResultCodesEnum.Success) {
            dispatch(getAuthUserDataTC());
            dispatch(authActions.confirmUserData(true));
        } else {
            if (loginData.resultCode === ResultCodeForCaptcha.CaptchaRequired) {
                dispatch(getCaptchaUrl());
            }
            // dispatch(formikHelpers.setFieldError())
            dispatch(authActions.confirmUserData(false));
        }
    } catch (e) {
        console.log('Some error with loginTC');
    }

};
export const getCaptchaUrl = ():ThunkType  => async (dispatch) => {
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
type ThunkType  = BaseThunkType<ActionsType>


export default authReducer;
