import React from "react";
import s from './Users.module.css'

export const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    status: 'Hello, world!',
                    name: 'Eugene',
                    location: {city: 'Minsk', country: 'Belarus'},
                    followed: false,
                    avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
                },
                {
                    id: 2,
                    status: 'I am not bad)',
                    name: 'Tanya',
                    location: {city: 'Minsk', country: 'Belarus'},
                    followed: false,
                    avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
                },
                {
                    id: 3,
                    status: 'We are all mad here',
                    name: 'Mickey',
                    location: {city: 'Minsk', country: 'Belarus'},
                    followed: true,
                    avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
                },
                {
                    id: 4,
                    status: 'Crazy frog',
                    name: 'FrogMan',
                    location: {city: 'Minsk', country: 'Belarus'},
                    followed: false,
                    avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
                },
                {
                    id: 5,
                    status: 'Mars!',
                    name: 'Elon',
                    location: {city: 'Minsk', country: 'Belarus'},
                    followed: true,
                    avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
                }
            ]
        )
    }
    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img className={s.image} src={user.avatar} alt='avatar'/>
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
                                {user.location.city}
                            </div>
                            <div>
                                {user.location.country}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}
