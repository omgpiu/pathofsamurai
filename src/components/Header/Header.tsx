import React, {useCallback} from 'react';
import logoNew from '../../photo/logo.png';
import st from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getIsAuth} from '../Profile/profile-selectors';
import {getLogin} from './header-selectors';
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
    // return (
    //     <div className={st.appHeader}>
    //         <img src={logoNew} alt="newLogo"/>
    //         <div className={st.loginBlock}>
    //             {isAuth
    //                 ? <div>{login} - <button onClick={logout}>Log out</button></div>
    //                 : <NavLink to={SIGN_IN_PATH}>Login</NavLink>}
    //         </div>
    //     </div>
    // );
    return (
        <div className={st.loginBlock}>
            {isAuth
                ? <div>{login} - <Button type="primary" onClick={logout}>Log out</Button></div>
                : <NavLink to={SIGN_IN_PATH}>Login</NavLink>}
        </div>
    );

}

