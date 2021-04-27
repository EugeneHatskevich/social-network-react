import React from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateTextMessageActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let messagesElements = props.data.messageData.map((message) => {
        return (
            <div>
                <Message message={message.message}/>
            </div>
        )
    })
    let dialogsElements = props.data.dialogData.map((elem) => {
        return (
            <DialogItem name={elem.name} id={elem.id} avatar={elem.avatar}/>
        )
    })
    let newMessageText = props.data.newMessageText

    let onSendMessageClick = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onNewMessageChange = (e) => {
        let text = e.target.value
        props.dispatch(updateTextMessageActionCreator(text))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageText}
                                  onChange={onNewMessageChange}
                                  placeholder='Enter your message'/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs