import React from 'react';
import PreLoader from '../common/preLoader/preLoader';
import {useSelector} from 'react-redux';
import {getIsFetching} from '../../Rdux/users-selectors';
import {Users} from './Users';
import {withAuthRedirect} from '../../HOC/WithAuthRedirect';

type UserPageType = {}
const UsersPage: React.FC<UserPageType> = () => {

    const isFetching = useSelector(getIsFetching);
    return <div>
        {isFetching ? <PreLoader/> : null}
        <Users/>;
    </div>;
};
export default withAuthRedirect(UsersPage)
