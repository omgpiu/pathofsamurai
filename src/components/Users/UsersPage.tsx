import React from 'react';
import PreLoader from '../common/preLoader/preLoader';
import {useSelector} from 'react-redux';
import {getIsFetching} from '../../Rdux/users-selectors';
import {AppRootStateType} from '../../Rdux/redux-store';
import {Users} from './Users';

type UserPageType = {}
export const UsersPage: React.FC<UserPageType> = () => {

    const isFetching = useSelector<AppRootStateType, boolean>(getIsFetching);
    return <div>
        {isFetching ? <PreLoader/> : null}
        <Users
        />;
    </div>;
};

