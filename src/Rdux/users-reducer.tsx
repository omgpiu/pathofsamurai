
import {v1} from 'uuid';
import {ActionType} from './State';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

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

export type usersPageType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    count:number
    isFetching:boolean
}


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
    isFetching: false
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
            return  {...state, totalUsersCount: action.count}
        case 'TOGGLE_IS_FETCHING':
            return {...state,isFetching: action.isFetching}
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
export const setPage = (currentPage:number): setPageACType => ({type: SET_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount:number): setTotalUsersCountACType => ({type: SET_TOTAL_USER_COUNT, count:totalUsersCount});
export const toggleIsFetching = (isFetching:boolean): isFetchingTypeAC => ({type: TOGGLE_IS_FETCHING, isFetching});



export default usersReducer;