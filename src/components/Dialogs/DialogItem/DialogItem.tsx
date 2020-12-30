import React from 'react';
import st from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type PropsType = {
    id: string
    name: string
}
const DialogItem: React.FC<PropsType> = ({id, name}) => {

    const path = '/dialogs/1' + id;
    return (
        <div className={st.dialog}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
};


export default DialogItem;
