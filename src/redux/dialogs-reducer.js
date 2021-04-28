const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogData: [
        {
            name: 'Eugene',
            id: '1',
            avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
        },
        {
            name: 'Tanya',
            id: '2',
            avatar: 'https://avt-11.foto.mail.ru/community/humorkiller/_avatar180?1386690737'
        }
    ],
    messageData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Good, and you?'},
        {id: 4, message: 'Not bad!'}
    ],
    newMessageText: '',
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        }
        case SEND_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessageText
            }
            return {
                ...state,
                newMessageText: '',
                messageData: [...state.messageData, newMessage]
            }
        }
        default:
            return state
    }
}

export const updateTextMessageActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text
    }
}

export const addMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}