import React from 'react';
import '../../App.module.css';
import st from './Nav.module.css';
import {NavLink} from 'react-router-dom';

function Nav() {
    return (
        <nav className={st.appNav}>

            <div className={st.item}>
                <NavLink to='/profile' activeClassName={st.active}>Profile</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to='/dialogs' activeClassName={st.active}>Messages</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to='/news' activeClassName={st.active}>News</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to='/music' activeClassName={st.active}>Music</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to='/settings' activeClassName={st.active}>Settings</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to='/users' activeClassName={st.active}>Users</NavLink>
            </div>


        </nav>
    );

}


export default Nav;