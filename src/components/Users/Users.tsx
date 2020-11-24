import React from 'react';
import {userType} from '../../Rdux/Types';
import Paginator from '../common/Paginator/Paginator';
import User from './User';


export type PropsUsersType = {
    users: Array<userType>
    // followUser: (userId: string) => void
    // unfollowUser: (userId: string) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void


}

function Users(props: PropsUsersType) {

    return (

        <div>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} pageSize={props.pageSize}
                       totalUsersCount={props.totalUsersCount}/>
            {props.users.map((user: userType) => <User
                unfollowTC={props.unfollowTC}
                followTC={props.followTC}
                followingInProgress={props.followingInProgress}
                user={user}
                key={user.id}/>)}

        </div>);
}


export default Users;
