import React from "react"
import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.data.postsData}
                     addPost={props.addPost}
                     newPostText={props.data.newPostText}
                     changeNewPostText={props.changeNewPostText}/>
        </div>
    )
}

export default Profile