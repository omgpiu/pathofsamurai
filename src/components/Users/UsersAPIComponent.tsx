import React from 'react';
import {userType} from '../../Rdux/users-reducer';
import Users from './Users';
import PreLoader from './preLoader';
import {getUsersAPI} from '../../API/api';


export type PropsType = {
    users: Array<userType>
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
    setUsers: any
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setPage: (currentPage: number) => void
    setTotalUsersCount: any
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void

}

class UsersAPIComponent extends React.Component<PropsType> {


    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUsersAPI(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setPage(pageNumber);
        this.props.toggleIsFetching(true);
        getUsersAPI(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    };

    render() {

        return <>
            {this.props.isFetching ? <PreLoader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   followUser={this.props.followUser}
                   pageSize={this.props.pageSize}
                   unfollowUser={this.props.unfollowUser}
                   onPageChanged={this.onPageChanged}
            />;
        </>;
    }
}


export default UsersAPIComponent;
