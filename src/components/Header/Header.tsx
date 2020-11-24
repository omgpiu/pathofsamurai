import React from 'react';
import logoNew from '../../photo/logo.png';
import st from './Header.module.css';
import {NavLink} from 'react-router-dom';


const Header: React.FC<HeaderType> = (props) => {
    const {isAuth, login, logoutTC} = props;


    return (
        <header className={st.appHeader}>

            <img src={logoNew} alt="newLogo"/>
            <div className={st.loginBlock}>
                {isAuth
                    ? <div>{login} - <button onClick={logoutTC}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );

};

export default Header;
type HeaderType = {
    isAuth: boolean
    logoutTC: () => void
    login: string | null
}