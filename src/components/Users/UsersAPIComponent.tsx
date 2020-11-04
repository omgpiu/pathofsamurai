import React from 'react';

import Users from './Users';
import PreLoader from './preLoader';
import {userType} from '../../Rdux/Types';


export type PropsType = {
    users: Array<userType>
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setPage: (currentPage: number) => void
    isFetching: boolean
    getUsersTC: (currentPage: number, pageSize: number) => void
    followingInProgress: Array<number>
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void

}

class UsersAPIComponent extends React.Component<PropsType> {


    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize);
    };

    render() {

        return <>
            {this.props.isFetching ? <PreLoader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
                   followTC={this.props.followTC}
                   unfollowTC={this.props.unfollowTC}

            />;
        </>;
    }
}


export default UsersAPIComponent;
