import {ActionType, ThunkType} from './State';
import {Dispatch} from 'react';
import {AuthAPI} from '../API/auth-api';
import {ThunkDispatch} from 'redux-thunk';
import {AppRootStateType} from './redux-store';


const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    data: {
        userId: null,
        email: null,
        login: null,
    },
    isAuth: false,
};
type  InitialStateType = typeof initialState
const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,

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

export const getAuthUserDataTC = () => (dispatch: Dispatch<ActionType>) => {
    AuthAPI.me().then(res => {
        if (res.data.resultCode === 0) {
            let {id, email, login} = res.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
};
//Разобраться с диспатчем санки
export const loginTC = (data: any): ThunkType => (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionType>) => {
    AuthAPI.login(data)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserDataTC());

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


export default authReducer;