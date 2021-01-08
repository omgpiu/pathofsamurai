import React from 'react';
import st from './Header.module.css';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {Button} from 'antd';
import {getIsAuth} from '../../SN-2-features/f2-profile/p2-bll/profile-selectors';
import {logoutTC} from '../../SN-2-features/f1-login/l2-bll/auth-reducer';
import {getLogin} from '../../SN-2-features/f1-login/l2-bll/auth-selectors';
import {SIGN_IN_PATH} from '../routes/Routes';

type PropsType = {}
export const HeaderM: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch()
    const isAuth = useSelector(getIsAuth)
    const login = useSelector(getLogin)

    const logout = () => {
        dispatch(logoutTC())
    }

    return (
        <div className={st.loginBlock}>
            {isAuth
                ? <>{login} - <Button type="primary"   onClick={logout}>Log out</Button></>
                : <Link to={SIGN_IN_PATH}>Login</Link>}
        </div>
    );

}

