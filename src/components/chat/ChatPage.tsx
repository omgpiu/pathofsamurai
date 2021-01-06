import React, {useEffect, useState} from 'react';

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
type PropsType = {}
const ChatPage: React.FC<PropsType> = (props) => {
    return (<div>
        <Chat/>
    </div>)
}
export default ChatPage

type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}
export const Chat: React.FC<any> = (props) => {


    return (<div>
            <Messages/>
            <AddMessageForm/>
        </div>
    )

}
export const Messages: React.FC<any> = (props) => {
    // const messages: any = [1, 2, 3, 4];
    const [messages, setMessages] = useState<Array<ChatMessageType>>([])
    useEffect(() => {
        ws.addEventListener('message', (e) => {
            setMessages(JSON.parse(e.data))
        })
    }, [])

    return (<div style={{height: '400px', overflow: 'auto'}}>
            {messages.map((m, index) =>
                <Message key={index} message={m}/>
            )}
        </div>
    )

}
export const AddMessageForm: React.FC<any> = (props) => {
    return (<div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Send</button>
            </div>

        </div>
    )

}
export const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {


    return (<div>

            <img src={message.photo} alt="logo"/> <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </div>
    )

}