import React from "react"
// import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New posts
            </div>
            <div>
                <Post message='Hello, how are you?' like='15' />
                <Post message='I studying a React)))' like='20' />
            </div>
        </div>
    )
}

export default MyPosts