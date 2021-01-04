import React from 'react';
import {userType} from '../../Types/Types';
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';
import {FilterType} from '../../Rdux/users-reducer';
import {UserSearchForm} from './User/UserSearchForm';


export type PropsUsersType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void

    followingInProgress: Array<number>
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
    onFilterChanged: (filter: FilterType) => void


}

const Users: React.FC<PropsUsersType> = ({
                                             currentPage,
                                             onPageChanged,
                                             pageSize,
                                             totalUsersCount,
                                             unfollowTC,
                                             followTC,
                                             followingInProgress,
                                             users,
                                             onFilterChanged
                                         }) => {
    return (
        <div>
            <UserSearchForm onFilterChanged={onFilterChanged}/>
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
