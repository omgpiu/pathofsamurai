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
    id: string
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={st.message}>{props.title}</div>
    )
}


function Dialogs() {

    let dialogsData = [
        {id: v1(), name: 'Artem'},
        {id: v1(), name: 'Vova'},
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Masha'},
        {id: v1(), name: 'Egor'}
    ]


    let messageData = [
        {id: v1(), title: 'Hello'},
        {id: v1(), title: 'My name'},
        {id: v1(), title: 'My name is'},
        {id: v1(), title: 'My name is Sasha'}
    ]


    return (

        <div className={st.dialogsWrapper}>

            <div className={st.dialogs}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={st.messages}>
                <Message title={messageData[0].title} id={messageData[0].id}/>
                <Message title={messageData[1].title} id={messageData[1].id}/>
                <Message title={messageData[2].title} id={messageData[2].id}/>
                <Message title={messageData[3].title} id={messageData[3].id}/>
            </div>


        </div>
    )
}


export default Dialogs