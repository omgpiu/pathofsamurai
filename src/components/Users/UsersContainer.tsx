import UsersAPIComponent from './UsersAPIComponent';
import {userType} from '../../Rdux/Types';
import {connect} from 'react-redux';
import {followTC, getUsersTC, setPage, toggleFollowingProgress, unfollowTC} from '../../Rdux/users-reducer';
import {withAuthRedirect} from '../../HOC/WithAuthRedirect';
import {compose} from 'redux';
import React from 'react';
import {AppRootStateType} from '../../Rdux/redux-store';
import {
    getCurrentPage,
    getPageSize,
    getTotalUsers,
    getUsers,
    getIsFetching,
    getFollowingInProgress
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

    setPage: (currentPage: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
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
        followingInProgress: getFollowingInProgress(state)

    };
};

//RootStateType поменял в двух местах


export default compose <React.FunctionComponent>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppRootStateType>(mapStateToProps, {
            setPage,
            getUsersTC,
            toggleFollowingProgress,
            followTC,
            unfollowTC
        })
    )(UsersAPIComponent)