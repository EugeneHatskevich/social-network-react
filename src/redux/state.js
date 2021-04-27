const ADD_POST = 'ADD-POST'
const CHANGE_TEXT = 'CHANGE-TEXT'

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
            messageData: {
                myMessage: [
                    {id: 1, message: 'Hi!'},
                    {id: 3, message: 'How are you?'}
                ],
                friendMessage: [
                    {id: 2, message: 'Hello)'},
                    {id: 4, message: 'I am fine)))'}
                ]
            }
        },
        sidebar: {}

    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._subscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._subscriber()
        } else if (action.type === CHANGE_TEXT) {
            this._state.profilePage.newPostText = action.postMessage
            this._subscriber()
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const changeTextActionCreator = (text) => {
    return {
        type: CHANGE_TEXT,
        postMessage: text
    }
}
