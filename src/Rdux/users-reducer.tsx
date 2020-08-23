import React from 'react';
import {v1} from 'uuid';
import {ActionType} from './State';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type followACType = {
    type: typeof FOLLOW
    userId: string
}
export type unfollowACType = {
    type: typeof UNFOLLOW
    userId: string
}
export type  setUsersACType = {
    type: typeof SET_USERS
    users: Array<userType>
}

export type locationUsersType = {
    country: string
    city: string
}
export type userType = {
    id: string
    name: string
    location: locationUsersType
    status: string
    followed: boolean
    photoUrl: string
    photos: {
        small: string
        large: string
    }
}

export type usersPageType = {
    users: Array<userType>
} // Проверить с тех.поддержкой как сделать правильней


let initialState = {
    users: [
        {
            id: v1(),
            name: 'Nikola',
            location: {
                country: 'Russia',
                city: 'St.Peterburg',
            },
            status: 'I\'m looking for an IT job',
            followed: true,
            photos: {
                small: 'null',
                large: ''
            },
            photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/1873797/pub_5cdb288dd0418e00b317c23e_5cdb289014882500b3e2f97c/scale_1200'
        },
    ]
};

type StateProfile = typeof initialState
const usersReducer = (state: StateProfile = initialState, action: ActionType): StateProfile => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                }),

            };
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                }),

            };
        case 'SET_USERS':
            return {...state, users: [...state.users, ...action.users]};

// let stateUsers = [...state.users];
// let newUsers: any = action.users.map((user: userType) => {
//     return [...stateUsers, user];
// });
// return {...state, users: newUsers}; решение вопроса двумерного массива

        default:
            return state;
    }


};

export const followAC = (userId: string): followACType => ({type: FOLLOW, userId});
export const unfollowAC = (userId: string): unfollowACType => ({type: UNFOLLOW, userId});
export const setUsersAC = (users: Array<userType>): setUsersACType => ({type: SET_USERS, users});


export default usersReducer;