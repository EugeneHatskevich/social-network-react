const ADD_POST = 'ADD-POST'
const CHANGE_TEXT = 'CHANGE-TEXT'

let initialState = {
        postsData: [
            {id: 1, message: 'Hello, how are you?', likesCount: 20},
            {id: 2, message: 'I studying a React)))', likesCount: 12},
            {id: 3, message: 'We are happy!', likesCount: 50}
        ],
        newPostText: ''
    }

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state
        case CHANGE_TEXT:
            state.newPostText = action.postMessage
            return state
        default:
            return state
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