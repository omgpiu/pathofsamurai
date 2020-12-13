import {ActionType, LoginParamsType, ThunkType} from '../Types/Types';
import {Dispatch} from 'react';
import {AuthAPI} from '../API/auth-api';
import {ThunkDispatch} from 'redux-thunk';
import {AppRootStateType} from './redux-store';
import {securityAPI} from '../API/security-api';
//refactor
const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';
const CONFIRM_USER_DATA = 'samurai-network/auth/CONFIRM_USER_DATA';

let initialState = {

    userId: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
    isCorrect: true

};
type  InitialStateType = typeof initialState
const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.payload
            };
        case CONFIRM_USER_DATA :
            return {
                ...state,
                isCorrect: action.isCorrect
            };
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
};

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA, payload: {
        userId, email, login, isAuth
    }
} as const);
export const confirmUserData = (isCorrect: boolean) => (
    {type: CONFIRM_USER_DATA, isCorrect} as const);
export const getCaptchaUrlSuccess = (captchaUrl: string) => (
    {type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}} as const);


export const getAuthUserDataTC = () => async (dispatch: Dispatch<ActionType>) => {

    const response = await AuthAPI.me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }

};

export const loginTC = (data: LoginParamsType): ThunkType => async (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionType>) => {
    const response = await AuthAPI.login(data);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataTC());
        dispatch(confirmUserData(true));
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        // dispatch(formikHelpers.setFieldError())
        dispatch(confirmUserData(false));
    }


};
export const getCaptchaUrl = (): ThunkType => async (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionType>) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));


};


export const logoutTC = () => async (dispatch: Dispatch<ActionType>) => {
    const response = await AuthAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }


};
export type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export type confirmUserDataType = ReturnType<typeof confirmUserData>
export type getCaptchaUrlSuccess = ReturnType<typeof getCaptchaUrlSuccess>


export default authReducer;
