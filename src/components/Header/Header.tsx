import React from 'react';
import logoNew from '../../photo/logo.png';
import st from './Header.module.css';
import {NavLink} from 'react-router-dom';


function Header(props: any) {



    return (
        <header className={st.appHeader}>

            <img src={logoNew} alt="newLogo"/>
            <div className={st.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logoutTC}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );

}


export default Header;