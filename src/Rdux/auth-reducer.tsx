import {ActionType} from './State';

const SET_USER_DATA = 'SET_USER_DATA';


export type setAuthUserDataType = {
    type: typeof SET_USER_DATA
    data: {
        userId: number | null
        email: string | null
        login: string | null

    }
    isAuth: boolean


}


let initialState = {
    data: {
        userId: null,
        email: null,
        login: null,
    },
    isAuth: false
};

type StateProfile = typeof initialState
const authReducer = (state: StateProfile = initialState, action: ActionType): StateProfile => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataType => ({
    type: SET_USER_DATA, data: {
        userId, email, login
    }, isAuth
});


export default authReducer;