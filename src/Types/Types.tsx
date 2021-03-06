import {ThunkAction} from 'redux-thunk';
import {Action} from 'redux';
import {AppRootStateType} from '../SN-1-main/m2-bll/redux-store';


export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type NewProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type userType = {
    id: number
    name: string
    location: locationUsersType
    status: string
    followed: boolean
    photoUrl: string
    photos: PhotosType
}

export type locationUsersType = {
    country: string
    city: string
}
export type DialogItemType = {
    name: string
    id: string
}
export type MessageType = {
    message: string
    id: string
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type DialogsPageType = {
    messageData: Array<MessageType>
    dialogsData: Array<DialogItemType>
    newMessageText: string
}

export type isAuthType = {
    isAuth: boolean
}

//API types


export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppRootStateType, unknown, A>

