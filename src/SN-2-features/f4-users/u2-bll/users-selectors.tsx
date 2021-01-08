import {createSelector} from 'reselect';
import {FilterType} from './users-reducer';
import {AppRootStateType} from '../../../SN-1-main/m2-bll/redux-store';
import {userType} from '../../../Types/Types';


const getUsersSelector = (state: AppRootStateType) => {
    return state.usersPage.users;
};

export const getUsers = createSelector(getUsersSelector, (users):Array<userType> => {
    return users.filter(u => true);
}); // пример

export const getPageSize = (state: AppRootStateType): number => {
    return state.usersPage.pageSize;
};

export const getTotalUsers = (state: AppRootStateType): number => {
    return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state: AppRootStateType): number => {
    return state.usersPage.currentPage;
};

export const getIsFetching = (state: AppRootStateType): boolean => {
    return state.usersPage.isFetching;
};
export const getFollowingInProgress = (state: AppRootStateType): Array<number> => {
    return state.usersPage.followingInProgress;
};
export const getUsersFilter = (state: AppRootStateType): FilterType => {
    return state.usersPage.filter;
};

