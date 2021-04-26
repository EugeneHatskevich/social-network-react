import {rerenderEntireTree} from "../render";

let state = {

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
            {name: 'Eugene', id: '1', avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'},
            {name: 'Tanya', id: '2', avatar: 'https://avt-11.foto.mail.ru/community/humorkiller/_avatar180?1386690737'}
        ],
        messageData: {
            myMessage:[
                {id:1, message:'Hi!'},
                {id:3, message: 'How are you?'}
            ],
            friendMessage:[
                {id:2, message: 'Hello)'},
                {id:4, message: 'I am fine)))'}
            ]
        }
    },
    sidebar: {}

}

export let addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let changeNewPostText = (postMessage) => {
    state.profilePage.newPostText = postMessage
    rerenderEntireTree(state)
}

export default state