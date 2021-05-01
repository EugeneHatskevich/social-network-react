const ADD_POST = 'ADD-POST'
const CHANGE_TEXT = 'CHANGE-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    postsData: [
        {id: 1, message: 'Hello, how are you?', likesCount: 20},
        {id: 2, message: 'I studying a React)))', likesCount: 12},
        {id: 3, message: 'We are happy!', likesCount: 50}
    ],
    newPostText: '',
    profile: null
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        }
        case CHANGE_TEXT: {
            return {
                ...state,
                newPostText: action.postMessage
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
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
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}