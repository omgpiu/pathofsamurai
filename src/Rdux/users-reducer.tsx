import {ActionType, userType} from '../Types/Types';
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
    users: [] as Array<userType>,
    pageSize: 10,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
};

type StateProfile = typeof initialState
const usersReducer = (state: StateProfile = initialState, action: ActionType): StateProfile => {

    switch (action.type) {
        case FOLLOW:
            // return {
            //     ...state, users: updateObjectInArray(state.users,action.userId,'id',{followed:true})
            //
            //
            // };

            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                }),

            };

        case UNFOLLOW:
            // return {
            //     ...state, users: updateObjectInArray(state.users,action.userId,'id',{followed:false})
            //
            //
            // };
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

//actions
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

//thunks
export const getUsersTC = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleIsFetching(true));
    dispatch(setPage(currentPage));
    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.data.items));
    dispatch(setTotalUsersCount(data.data.totalCount));

};

const followUnfollowFlow = async (dispatch: Dispatch<ActionType>, userId: number, apiMethod: (userId: number) => any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    const data = await apiMethod(userId);
    if (data.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
};
export const followTC = (userId: number) => async (dispatch: Dispatch<ActionType>) => {
    let apiMethod = usersAPI.startFollowUsers.bind(usersAPI);
    await followUnfollowFlow(dispatch, userId, apiMethod, followUser);
};
export const unfollowTC = (userId: number) => async (dispatch: Dispatch<ActionType>) => {
    let apiMethod = usersAPI.startUnfollowUsers.bind(usersAPI);
    await followUnfollowFlow(dispatch, userId, apiMethod, unfollowUser);


};

export type followACType = ReturnType<typeof followUser>
export type unfollowACType = ReturnType<typeof unfollowUser>
export type  setUsersACType = ReturnType<typeof setUsers>
export type  setPageACType = ReturnType<typeof setPage>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export type isFetchingTypeAC = ReturnType<typeof toggleIsFetching>
export type isFollowingProgressAC = ReturnType<typeof toggleFollowingProgress>


export default usersReducer;