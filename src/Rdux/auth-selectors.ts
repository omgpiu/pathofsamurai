import {AppRootStateType} from './redux-store';

export const getLogin = (state: AppRootStateType): string | null => {
    return state.auth.login;
};

