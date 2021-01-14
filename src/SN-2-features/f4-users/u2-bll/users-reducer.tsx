import {Dispatch} from 'redux';
import {BaseThunkType, InferActionsTypes, userType} from '../../../Types/Types';
import {updateObjectInArray} from '../../../utils/object-helpers/object-helpers';
import {usersAPI} from '../u3-dal/users-api';
import {APIResponseType, ResultCodesEnum} from '../../../Types/api-types';


const initialState = {
    users: [] as Array<userType>,
    pageSize: 5,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
    filter: {
        term: '',
        friend: null as null | boolean
    }
};


const usersReducer = (state: StateProfile = initialState, action: ActionType): StateProfile => {

    switch (action.type) {
        case 'USERS/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            };
        case 'USERS/UNFOLLOW':
            return {
                ...state, users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            };
        case 'USERS/SET_USERS':
            return {...state, users: action.users};
        case 'USERS/SET_PAGE':
            return {...state, currentPage: action.currentPage};
        case  'USERS/SET_TOTAL_USER_COUNT':
            return {...state, totalUsersCount: action.count};
        case 'USERS/TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching};
        case 'USERS/TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        case 'USERS/SET_FILTER': {
            return {
                ...state,
                filter: action.payload
            }
        }
        default:
            return state;
    }
};
export const usersAction = {
    followUser: (userId: number) => ({type: 'USERS/FOLLOW', userId} as const),
    unfollowUser: (userId: number) => ({type: 'USERS/UNFOLLOW', userId} as const),
    setUsers: (users: Array<userType>) => ({type: 'USERS/SET_USERS', users} as const),
    setPage: (currentPage: number) => ({type: 'USERS/SET_PAGE', currentPage} as const),
    setFilter: (filter: FilterType) => ({type: 'USERS/SET_FILTER', payload: filter} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({
        type: 'USERS/SET_TOTAL_USER_COUNT',
        count: totalUsersCount
    } as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'USERS/TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: 'USERS/TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userId
    } as const)
};
export const getUsersTC = (currentPage: number, pageSize: number, filter: FilterType): ThunkType => async (dispatch) => {
    try {
        dispatch(usersAction.toggleIsFetching(true));
        dispatch(usersAction.setPage(currentPage));
        dispatch(usersAction.setFilter(filter))

        const data = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend);
        dispatch(usersAction.toggleIsFetching(false));
        dispatch(usersAction.setUsers(data.data.items));
        dispatch(usersAction.setTotalUsersCount(data.data.totalCount));
    } catch (e) {
        console.log('Error with getUsersTC');
    }
};

const _followUnfollowFlow = async (dispatch: Dispatch<ActionType>,
                                   userId: number,
                                   apiMethod: (userId: number) => Promise<APIResponseType>,
                                   actionCreator: (userId: number) => ActionType) => {
    try {
        dispatch(usersAction.toggleFollowingProgress(true, userId));
        // dispatch(actionCreator(userId))
        const data = await apiMethod(userId);


        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(actionCreator(userId));
        }
        dispatch(usersAction.toggleFollowingProgress(false, userId));
    } catch (e) {
        console.log('Error with _followUnfollowFlow ');
    }
}
export const followTC = (userId: number): ThunkType => async (dispatch) => {
    try {
        let apiMethod = usersAPI.startFollowUsers.bind(usersAPI);
        await _followUnfollowFlow(dispatch, userId, apiMethod, usersAction.followUser);
    } catch (e) {
        console.log('Error with followTC');
    }
};
export const unfollowTC = (userId: number): ThunkType => async (dispatch) => {
    try {
        let apiMethod = usersAPI.startUnfollowUsers.bind(usersAPI);
        await _followUnfollowFlow(dispatch, userId, apiMethod, usersAction.unfollowUser);
    } catch (e) {
        console.log('Error with unfollowTC');
    }
};

export type StateProfile = typeof initialState
type ActionType = InferActionsTypes<typeof usersAction>
type ThunkType = BaseThunkType<ActionType>
export type FilterType = typeof initialState.filter

export default usersReducer;
