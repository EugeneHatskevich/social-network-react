import React from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let messagesElements = props.dialogsPage.messageData.map((message) => {
        return (
            <div>
                <Message key={message.id} message={message.message} />
            </div>
        )
    })
    let dialogsElements = props.dialogsPage.dialogData.map((elem) => {
        return (
            <DialogItem key={elem.id} name={elem.name} id={elem.id} avatar={elem.avatar} />
        )
    })
    let newMessageText = props.dialogsPage.newMessageText

    let onSendMessageClick = () => {
        props.addMessageActionCreator()
    }

    let onNewMessageChange = (e) => {
        let text = e.target.value
        props.updateTextMessage(text)
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