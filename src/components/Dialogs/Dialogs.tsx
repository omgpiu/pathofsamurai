import React from 'react';
import st from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {v1} from "uuid";


type DialogsItemType = {
    name: string
    id: string
}
const DialogItem: React.FC<DialogsItemType> = (props) => {
    let path = '/dialogs/1' + props.id;
    return (
        <div className={st.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


type MessageType = {
    title: string
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={st.message}>{props.title}</div>
    )
}


function Dialogs() {
    return (

        <div className={st.dialogsWrapper}>

            <div className={st.dialogs}>
                <DialogItem name={'Artem'} id={v1()}/>
                <DialogItem name={'Vova'} id={v1()}/>
                <DialogItem name={'Dima'} id={v1()}/>
                <DialogItem name={'Masha'} id={v1()}/>
                <DialogItem name={'Egor'} id={v1()}/>


            </div>
            <div className={st.messages}>
                <Message title={'Hello'}/>
                <Message title={'My name'}/>
                <Message title={'My name is'}/>
                <Message title={'My name is Sasha'}/>

            </div>


        </div>
    )
}


export default Dialogs