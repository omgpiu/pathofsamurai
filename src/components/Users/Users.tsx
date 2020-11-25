import React from 'react';
import {userType} from '../../Types/Types';
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
    // toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void


}

const Users: React.FC<PropsUsersType> = (props) => {

    const {currentPage, onPageChanged, pageSize, totalUsersCount, unfollowTC, followTC, followingInProgress, users} = props;


    return (

        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize}
                       totalUsersCount={totalUsersCount}/>
            {users.map((user: userType) => <User
                unfollowTC={unfollowTC}
                followTC={followTC}
                followingInProgress={followingInProgress}
                user={user}
                key={user.id}/>)}

        </div>);
};


export default Users;
