import React, {useCallback, useEffect} from 'react';
import User from './User/User';
import {UserSearchForm} from './User/UserSearchForm';
import {useDispatch, useSelector} from 'react-redux';

import {useHistory} from 'react-router-dom';
import * as queryString from 'querystring';
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsers,
    getUsers,
    getUsersFilter
} from '../u2-bll/users-selectors';
import {FilterType, followTC, getUsersTC, unfollowTC} from '../u2-bll/users-reducer';
import Paginator from '../../../SN-3-common/Paginator/Paginator';
import {userType} from '../../../Types/Types';


type PropsType = {}
type QueryParamsType = { term?: string; page?: string; friend?: string }
export const Users: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch();
    const totalUsersCount = useSelector(getTotalUsers);
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const followingInProgress = useSelector(getFollowingInProgress);
    const users = useSelector(getUsers);
    const filter = useSelector(getUsersFilter);

    const history = useHistory()
    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType
        let actualPage = currentPage
        let actualFilter = filter
        if (!!parsed.page) actualPage = Number(parsed.page)
        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}
        switch (parsed.friend) {
            case 'null':
                actualFilter = {...actualFilter, friend: null}
                break;
            case 'true':
                actualFilter = {...actualFilter, friend: true}
                break;
            case 'false':
                actualFilter = {...actualFilter, friend: false}
                break;
        }

        dispatch(getUsersTC(actualPage, pageSize, actualFilter))
    }, [])
    useEffect(() => {
        const query: QueryParamsType = {}
        if (!!filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)
        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])

    const onPageChanged = useCallback((pageNumber: number) => {
        dispatch(getUsersTC(pageNumber, pageSize, filter));
    }, [dispatch]);

    const onFilterChanged = useCallback((filter: FilterType) => {
        dispatch(getUsersTC(1, pageSize, filter));
    }, [dispatch]);

    const follow = useCallback((userId: number) => {
        dispatch(followTC(userId));
    }, [dispatch]);

    const unfollow = useCallback((userId: number) => {
        dispatch(unfollowTC(userId));
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


