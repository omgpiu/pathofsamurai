import React from 'react';
import st from './Header.module.css';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getIsAuth} from '../Profile/profile-selectors';
import {getLogin} from '../../Rdux/auth-selectors';
import {logoutTC} from '../../Rdux/auth-reducer';
import {SIGN_IN_PATH} from '../common/routes/Routes';
import {Button} from 'antd';

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

