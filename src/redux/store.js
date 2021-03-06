import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

export let store = {
    _subscriber() {
        console.log('No subscriber')
    },
    _state: {

        profilePage: {
            postsData: [
                {id: 1, message: 'Hello, how are you?', likesCount: 20},
                {id: 2, message: 'I studying a React)))', likesCount: 12},
                {id: 3, message: 'We are happy!', likesCount: 50}
            ],
            newPostText: ''
        },
        dialogsPage: {
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

    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._subscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._subscriber()
    }
}





window.store = store