import React from 'react';
import logoNew from "../../photo/logo.png";
import st from './Header.module.css'


function Header() {
    return (
        <header className={st.appHeader}>
            <img src={logoNew}  alt="newLogo"/>
        </header>
    )

}


export default Header;