import {ActionType} from './State';
import {Dispatch} from 'react';
import {AuthAPI, LoginParamsType} from '../API/auth-api';


const SET_USER_DATA = 'SET_USER_DATA';
// const SET_IS_LOGGED_IN = 'login/SET-IS-LOGGED-IN';

let initialState = {
    data: {
        userId: null,
        email: null,
        login: null,
    },
    isAuth: false,
    isLoggedIn: false
};


type  InitialStateType = typeof initialState
const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            };
        // case SET_IS_LOGGED_IN:
        //     return {...state, isLoggedIn: action.value};
        default:
            return state;
    }
};

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataType => ({
    type: SET_USER_DATA, payload: {
        userId, email, login
    }, isAuth
});


// export const setIsLoggedInAC = (value: boolean) =>
//     ({type: SET_IS_LOGGED_IN, value} as const);
//Разобраться с диспатчем санки
export const getAuthUserDataTC = () => (dispatch: Dispatch<ActionType>) => {
    AuthAPI.me().then(res => {

        if (res.data.resultCode === 0) {

            let {id, email, login} = res.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
};

export const loginTC = (data: any) => (dispatch: Dispatch<any>) => {

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
export type setAuthUserDataType = {
    type: typeof SET_USER_DATA
    payload: {
        userId: number | null
        email: string | null
        login: string | null
    }
    isAuth: boolean
}


export default authReducer;