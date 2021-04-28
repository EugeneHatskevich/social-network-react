import React from "react"
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {

    let postsElements = props.postsData.map((post) => {
        return (
            <Post key={post.id} message={post.message} like={post.likesCount}/>
        )
    })

    let newPostElement = React.createRef()

    const addPost = () => {
        props.addPost()
    }

    let changeText = () => {
        let text = newPostElement.current.value
        props.changeText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={changeText} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts