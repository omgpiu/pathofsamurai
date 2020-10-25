import React from 'react';
import {userType} from '../../Rdux/users-reducer';
import Users from './Users';
import PreLoader from './preLoader';


export type PropsType = {
    users: Array<userType>

    toggleFollowingProgress: (isFetching: boolean,userId:string) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setPage: (currentPage: number) => void
    isFetching: boolean
    getUsersTC: (currentPage: number, pageSize: number) => void
    followingInProgress:[]
    followTC: (userId:string)=>void
    unfollowTC:(userId:string)=>void

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
                   // followUser={this.props.followUser}
                   pageSize={this.props.pageSize}
                   // unfollowUser={this.props.unfollowUser}
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
