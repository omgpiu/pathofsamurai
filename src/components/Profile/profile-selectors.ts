import {AppRootStateType} from '../../Rdux/redux-store';
import {NewProfileType} from '../../Types/Types';


export const getProfile = (state: AppRootStateType): NewProfileType | null => {
    return state.profilePage.profile
}
export const getStatus = (state: AppRootStateType): string => {
    return state.profilePage.status
}
export const getIsAuth = (state: AppRootStateType): boolean => {
    return state.auth.isAuth
}
export const getUserId = (state: AppRootStateType): number | null => {
    return state.auth.userId
}
