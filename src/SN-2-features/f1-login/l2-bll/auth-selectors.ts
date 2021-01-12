import {AppRootStateType} from '../../../SN-1-main/m2-bll/redux-store';


export const getLogin = (state: AppRootStateType): string | null => {
    return state.auth.login;
};
export const getError = (state: AppRootStateType): string => {
    return state.auth.error;
};
