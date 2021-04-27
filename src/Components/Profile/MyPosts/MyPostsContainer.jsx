import React from "react"
import {addPostActionCreator, changeTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let changeText = (text) => {
        props.store.dispatch(changeTextActionCreator(text))
    }

    return (
        <MyPosts changeText={changeText}
                 addPost={addPost}
                 postsData={props.store.getState().profilePage.postsData}
        newPostText={props.store.getState().profilePage.newPostText}/>
    )

}

export default MyPostsContainer