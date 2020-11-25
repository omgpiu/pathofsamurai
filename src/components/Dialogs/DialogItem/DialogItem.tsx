import React from 'react';
import st from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {DialogItemType} from '../../../Types/Types';


const DialogItem: React.FC<DialogItemType> = (props) => {
    const {id, name} = props;
    const path = '/dialogs/1' + id;
    return (
        <div className={st.dialog}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
};


export default DialogItem;