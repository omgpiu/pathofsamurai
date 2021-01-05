import React from 'react';
import '../../App.css';
import st from './Nav.module.css';
import {NavLink} from 'react-router-dom';
import {
    DIALOGS_PATH,
    MUSIC_PATH,
    NEWS_PATH,
    PROFILE_PATH,
    SETTINGS_PATH,
    USERS_PATH
} from '../common/routes/Routes';

function Nav() {
    return (
        <nav className={st.appNav}>

            <div className={st.item}>
                <NavLink to={PROFILE_PATH} activeClassName={st.active}>Profile</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to={DIALOGS_PATH} activeClassName={st.active}>Messages</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to={NEWS_PATH} activeClassName={st.active}>News</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to={MUSIC_PATH} activeClassName={st.active}>Music</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to={SETTINGS_PATH} activeClassName={st.active}>Settings</NavLink>
            </div>
            <div className={st.item}>
                <NavLink to={USERS_PATH} activeClassName={st.active}>Users</NavLink>
            </div>
            {/*<div>*/}
            {/*    <NavLink to={PAGE_NOT_FOUND_PATH} activeClassName={st.active}>404</NavLink>*/}
            {/*</div>*/}

        </nav>
    );

}


export default Nav;