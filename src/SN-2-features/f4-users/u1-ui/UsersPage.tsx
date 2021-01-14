import React from 'react';
import {useSelector} from 'react-redux';
import {Users} from './Users';
import {getIsFetching} from '../u2-bll/users-selectors';
import PreLoader from '../../../SN-3-common/preLoader/preLoader';
import {withAuthRedirect} from '../../../HOC/WithAuthRedirect';

type UserPageType = {}
const UsersPage: React.FC<UserPageType> = () => {

    const isFetching = useSelector(getIsFetching);
    return <>
        {isFetching ? <PreLoader/> : null}
        <Users/>
    </>
};
export default withAuthRedirect(UsersPage)
