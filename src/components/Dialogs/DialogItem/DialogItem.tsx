import React from 'react';
import st from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {DialogItemType} from '../../../Rdux/Types';






const DialogItem: React.FC<DialogItemType> = (props) => {
    let path = '/dialogs/1' + props.id;
    return (
        <div className={st.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};


export default DialogItem;