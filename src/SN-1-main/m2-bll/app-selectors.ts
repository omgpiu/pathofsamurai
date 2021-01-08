import {AppRootStateType} from './redux-store';

export const getIsInitialized = (state: AppRootStateType): boolean => {
    return state.app.isInitialized
};
