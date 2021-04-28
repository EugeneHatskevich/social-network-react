import React from "react"
import {addMessageActionCreator, updateTextMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                let onSendMessageClick = () => {
                    store.dispatch(addMessageActionCreator())
                }

                let onNewMessageChange = (text) => {
                    store.dispatch(updateTextMessageActionCreator(text))
                }
                return (
                    <Dialogs updateTextMessage={onNewMessageChange}
                             addMessageActionCreator={onSendMessageClick}
                             dialogsPage={store.getState().dialogsPage}/>
                )
            }
        }

        </StoreContext.Consumer>
    )
}

export default DialogsContainer