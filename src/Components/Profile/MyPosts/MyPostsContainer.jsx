import React from "react"
import {addPostActionCreator, changeTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let changeText = (text) => {
                    store.dispatch(changeTextActionCreator(text))
                }
                return (
                    <MyPosts changeText={changeText}
                             addPost={addPost}
                             postsData={store.getState().profilePage.postsData}
                             newPostText={store.getState().profilePage.newPostText}/>
                )
            }
        }
        </StoreContext.Consumer>
    )

}

export default MyPostsContainer