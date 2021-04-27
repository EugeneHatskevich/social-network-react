import React from "react"
import {addMessageActionCreator, updateTextMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let onSendMessageClick = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onNewMessageChange = (text) => {
        props.store.dispatch(updateTextMessageActionCreator(text))
    }

    return (
        <Dialogs updateTextMessage={onNewMessageChange}
                 addMessageActionCreator={onSendMessageClick}
                 dialogsPage={props.store.getState().dialogsPage}/>
    )
}

export default DialogsContainer