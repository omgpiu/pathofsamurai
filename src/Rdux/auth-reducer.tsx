import {ActionType, LoginParamsType, ThunkType} from './Types';
import {Dispatch} from 'react';
import {AuthAPI} from '../API/auth-api';
import {ThunkDispatch} from 'redux-thunk';
import {AppRootStateType} from './redux-store';
import {FormikHelpers} from 'formik';

const SET_USER_DATA = 'SET_USER_DATA';
const CONFIRM_USER_DATA = 'CONFIRM_USER_DATA';

let initialState = {
    data: {
        userId: null as null | number,
        email: null as null | string,
        login: null as null | string,
        isAuth: false,
    },
    isCorrect: true

};
type  InitialStateType = typeof initialState
const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, data: action.payload,
            };
        case CONFIRM_USER_DATA :
            return {
                ...state,
                isCorrect: action.isCorrect
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

    {
        type: CONFIRM_USER_DATA, isCorrect
    } as const);


export const getAuthUserDataTC = () => (dispatch: Dispatch<ActionType>) => {

    return AuthAPI.me().then(res => {
        if (res.data.resultCode === 0) {
            let {id, email, login} = res.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
};

export const loginTC = (data: LoginParamsType): ThunkType => (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionType>) => {


    AuthAPI.login(data)
        .then(res => {

            if (res.data.resultCode === 0) {
                dispatch(getAuthUserDataTC());
                dispatch(confirmUserData(true));
            } else {
                    // dispatch(formikHelpers.setFieldError())
                dispatch(confirmUserData(false));
            }


        });
};
export const logoutTC = () => (dispatch: Dispatch<ActionType>) => {

    AuthAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });

};
export type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export type confirmUserDataType = ReturnType<typeof confirmUserData>


export default authReducer;