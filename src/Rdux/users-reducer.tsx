import {v1} from 'uuid';
import {ActionType} from './State';
import {Dispatch} from 'react';
import {usersAPI} from '../API/users-api';


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [
        {
            id: Number(v1()),
            name: '',
            location: {
                country: '',
                city: '',
            },
            status: '',
            followed: true,
            photos: {
                small: '',
                large: ''
            },
            photoUrl: ''
        },
    ],
    pageSize: 5,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
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
        case SET_USERS:
            return {...state, users: action.users};
        case SET_PAGE:
            return {...state, currentPage: action.currentPage};
        case  SET_TOTAL_USER_COUNT:
            return {...state, totalUsersCount: action.count};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };

        default:
            return state;
    }
};


export const followUser = (userId: number) => ({type: FOLLOW, userId} as const);
export const unfollowUser = (userId: number) => ({type: UNFOLLOW, userId} as const);
export const setUsers = (users: Array<userType>) => ({type: SET_USERS, users} as const);
export const setPage = (currentPage: number) => ({type: SET_PAGE, currentPage} as const);
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USER_COUNT,
    count: totalUsersCount
} as const);
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const);
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const);

export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.data.items));
            dispatch(setTotalUsersCount(data.data.totalCount));
        });
};
export const followTC = (userId: number) => (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.startFollowUsers(userId).then(data => {
        if (data.data.resultCode === 0) {
            dispatch(followUser(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    });
};
export const unfollowTC = (userId: number) => (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.startUnfollowUsers(userId).then(data => {
        if (data.data.resultCode === 0) {
            dispatch(unfollowUser(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    });
};


export type followACType = ReturnType<typeof followUser>
export type unfollowACType = ReturnType<typeof unfollowUser>
export type  setUsersACType = ReturnType<typeof setUsers>
export type  setPageACType = ReturnType<typeof setPage>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export type isFetchingTypeAC = ReturnType<typeof toggleIsFetching>
export type isFollowingProgressAC = ReturnType<typeof toggleFollowingProgress>


export type locationUsersType = {
    country: string
    city: string
}


export type userType = {
    id: number
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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    count: number
    isFetching: boolean
    followingInProgress: Array<number>
}


export default usersReducer;