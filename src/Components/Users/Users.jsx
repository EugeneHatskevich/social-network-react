import React from "react";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/image/img_1.png'

export const Users = (props) => {

    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }
    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img className={s.image} src={user.photos.small != null ? user.photos.small : userPhoto}
                                 alt='avatar'/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => props.unFollow(user.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(user.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {user.name}
                            </div>
                            <div>
                                {user.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {'u.location.city'}
                            </div>
                            <div>
                                {'u.location.country'}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}
