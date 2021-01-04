import UsersAPIComponent from './UsersAPIComponent';
import {userType} from '../../Types/Types';
import {connect} from 'react-redux';
import {FilterType, followTC, getUsersTC, unfollowTC} from '../../Rdux/users-reducer';
import {compose} from 'redux';
import React from 'react';
import {AppRootStateType} from '../../Rdux/redux-store';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsers,
    getUsers, getUsersFilter,
} from '../../Rdux/users-selectors';


type MapStatePropsType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    getUsersTC: (currentPage: number, pageSize: number, filter: FilterType) => void
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsers(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getUsersFilter(state)

    };
};

export default compose<React.FunctionComponent>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppRootStateType>(mapStateToProps, {
        getUsersTC,
        followTC,
        unfollowTC
    })
)(UsersAPIComponent);
