import React from "react";
import s from "./Message.module.css";

const Message = (props) => {

    let myMessagesElements = props.message.myMessage.map((message) => {
        return (
            <div className={s.myMessage}>
                {message.message}
            </div>
        )
    })
    let friendMessagesElements = props.message.friendMessage.map((message) => {
        return (
            <div className={s.friendMessage}>
                {message.message}
            </div>
        )
    })

    let newMessage = React.createRef()

    let sendMessage = () => {
        let textMessage = newMessage.current.value

        alert(textMessage)
    }

    return (
        <div>
            <div className={s.message}>
                <div>
                    {myMessagesElements}
                </div>
                <div>
                    {friendMessagesElements}
                </div>
            </div>
            <div className={s.textarea}>
                <textarea ref={newMessage}/>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Message