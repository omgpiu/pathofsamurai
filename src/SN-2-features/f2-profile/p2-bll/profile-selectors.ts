import {AppRootStateType} from '../../../SN-1-main/m2-bll/redux-store';
import {NewProfileType, PostType} from '../../../Types/Types';


export const getPostData = (state: AppRootStateType): PostType[] => {
    return state.profilePage.postData;
};
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
export const getCaptcha = (state: AppRootStateType): string | null => {
    return state.auth.captchaUrl
}
