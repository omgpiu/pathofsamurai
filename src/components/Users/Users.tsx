import React, {useCallback, useEffect} from 'react';
import {userType} from '../../Types/Types';
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';
import {FilterType, followTC, getUsersTC, unfollowTC} from '../../Rdux/users-reducer';
import {UserSearchForm} from './User/UserSearchForm';
import {useDispatch, useSelector} from 'react-redux';
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
    const totalUsersCount = useSelector(getTotalUsers);
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const followingInProgress = useSelector(getFollowingInProgress);
    const users = useSelector(getUsers);
    const filter = useSelector(getUsersFilter);

    useEffect(() => {
        dispatch(getUsersTC(currentPage, pageSize, filter));
    }, []);

    const onPageChanged = useCallback((pageNumber: number) => {
        dispatch(getUsersTC(pageNumber, pageSize, filter));
        console.log('onPageChanged')
    }, [dispatch]);

    const onFilterChanged = useCallback((filter: FilterType) => {
        dispatch(getUsersTC(1, pageSize, filter));
        console.log('onFilterChanged')
    }, [dispatch]);

    const follow = useCallback((userId: number) => {
        dispatch(followTC(userId));
        console.log('follow')
    }, [dispatch]);

    const unfollow = useCallback((userId: number) => {
        dispatch(unfollowTC(userId));
        console.log('unfollow')
    }, [dispatch]);

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


