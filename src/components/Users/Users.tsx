import React, {useEffect} from 'react';
import {userType} from '../../Types/Types';
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';
import {FilterType, followTC, getUsersTC, unfollowTC} from '../../Rdux/users-reducer';
import {UserSearchForm} from './User/UserSearchForm';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../Rdux/redux-store';
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsers,
    getUsers,
    getUsersFilter
} from '../../Rdux/users-selectors';


type PropsType = {}

export const Users: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch();
    const totalUsersCount = useSelector<AppRootStateType, number>(getTotalUsers);
    const currentPage = useSelector<AppRootStateType, number>(getCurrentPage);
    const pageSize = useSelector<AppRootStateType, number>(getPageSize);
    const followingInProgress = useSelector<AppRootStateType, Array<number>>(getFollowingInProgress);
    const users = useSelector<AppRootStateType, Array<userType>>(getUsers);
    const filter = useSelector<AppRootStateType, FilterType>(getUsersFilter);

    useEffect(() => {
        dispatch(getUsersTC(currentPage, pageSize, filter));
    }, []);
    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsersTC(pageNumber, pageSize, filter));
    };
    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsersTC(1, pageSize, filter));
    };

    const follow = (userId: number) => {
        dispatch(followTC(userId));

    };
    const unfollow = (userId: number) => {
        dispatch(unfollowTC(userId));

    };
    return (
        <div>
            <UserSearchForm onFilterChanged={onFilterChanged}/>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize}
                       totalUsersCount={totalUsersCount}/>
            {users.map((user: userType) => <User
                unfollowTC={unfollow}
                followTC={follow}
                followingInProgress={followingInProgress}
                user={user}
                key={user.id}/>)}

        </div>);
};


