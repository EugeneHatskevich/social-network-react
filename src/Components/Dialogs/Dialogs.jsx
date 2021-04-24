import React from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.data.dialogData.map((elem) => {
        return (
            <DialogItem name={elem.name} id={elem.id} avatar={elem.avatar}/>
        )
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <Message message={props.data.messageData}/>
            </div>
        </div>
    )
}

export default Dialogs