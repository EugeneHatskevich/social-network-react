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

    return (
        <div className={s.message}>
            <div >
                {myMessagesElements}
            </div>
            <div >
                {friendMessagesElements}
            </div>
        </div>
    )
}

export default Message