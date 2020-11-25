import {ActionType, LoginParamsType, ThunkType} from '../Types/Types';
import {Dispatch} from 'react';
import {AuthAPI} from '../API/auth-api';
import {ThunkDispatch} from 'redux-thunk';
import {AppRootStateType} from './redux-store';
//refactor
const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const CONFIRM_USER_DATA = 'samurai-network/auth/CONFIRM_USER_DATA';

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
    {type: CONFIRM_USER_DATA, isCorrect} as const);


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
        // dispatch(formikHelpers.setFieldError())
        dispatch(confirmUserData(false));
    }


};
export const logoutTC = () => async (dispatch: Dispatch<ActionType>) => {
    const response = await AuthAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }


};
export type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export type confirmUserDataType = ReturnType<typeof confirmUserData>


export default authReducer;