import React from 'react';
import {userType} from '../../Rdux/users-reducer';
import axios from 'axios';
import Users from './Users';

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

}

class UsersAPIComponent extends React.Component<PropsType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);

            });
    };

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      users={this.props.users}
                      currentPage={this.props.currentPage}
                      followUser={this.props.followUser}
                      pageSize={this.props.pageSize}
                      unfollowUser={this.props.unfollowUser}
                      onPageChanged = {this.onPageChanged}


        />;
    }
}


export default UsersAPIComponent;
