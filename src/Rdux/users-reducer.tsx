import {v1} from 'uuid';
import {ActionType} from './State';
import {Dispatch} from 'react';
import {getUsersAPI, startFollowUserAPI, startUnfollowUserAPI} from '../API/api';


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
            id: v1(),
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
    followingInProgress: [] as Array<string>
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
            return {...state, users: action.users};
        case 'SET_PAGE':
            return {...state, currentPage: action.currentPage};
        case  'SET_TOTAL_USER_COUNT':
            return {...state, totalUsersCount: action.count};
        case 'TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            };
// let stateUsers = [...state.users];
// let newUsers: any = action.users.map((user: userType) => {
//     return [...stateUsers, user];
// });
// return {...state, users: newUsers}; решение вопроса двумерного массива
        default:
            return state;
    }
};


export const followUser = (userId: string): followACType => ({type: FOLLOW, userId});
export const unfollowUser = (userId: string): unfollowACType => ({type: UNFOLLOW, userId});
export const setUsers = (users: Array<userType>): setUsersACType => ({type: SET_USERS, users});
export const setPage = (currentPage: number): setPageACType => ({type: SET_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountACType => ({
    type: SET_TOTAL_USER_COUNT,
    count: totalUsersCount
});
export const toggleIsFetching = (isFetching: boolean): isFetchingTypeAC => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching: boolean,userId:string): isFollowingProgressAC => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleIsFetching(true));
    getUsersAPI(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
};
export const followTC = (userId:string) => (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleFollowingProgress(true,userId));
    startFollowUserAPI(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(followUser(userId));
        }
        dispatch(toggleFollowingProgress(false,userId));
    });
};
export const unfollowTC = (userId:string) => (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleFollowingProgress(true,userId));
    startUnfollowUserAPI(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(unfollowUser(userId));
        }
        dispatch(toggleFollowingProgress(false,userId));
        });
};



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
export type  setPageACType = {
    type: typeof SET_PAGE
    currentPage: number
}
export type setTotalUsersCountACType = {
    type: typeof SET_TOTAL_USER_COUNT
    count: number
}
export type locationUsersType = {
    country: string
    city: string
}
export type isFetchingTypeAC = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean

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
export type isFollowingProgressAC = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId:string
}

export type usersPageType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    count: number
    isFetching: boolean
    followingInProgress: Array<string>
}






export default usersReducer;