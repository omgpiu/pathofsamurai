import React from 'react';
import {userType} from '../../Rdux/users-reducer';
import axios from 'axios';
import Users from './Users';
import preLoader from './preLoader';
import PreLoader from './preLoader';

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
    isFetching:boolean
    toggleIsFetching:( isFetching:boolean)=>void

}

class UsersAPIComponent extends React.Component<PropsType> {


    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);

            });
    };

    render() {
        return <>
            {this.props.isFetching ? <PreLoader/>:null}
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
