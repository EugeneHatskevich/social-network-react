import React from "react"
import s from './Users.module.css'
import userPhoto from '../../assets/image/img_1.png'

export const User = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(page => {
                    return <span className={props.currentPage === page && s.selectedName}
                                 onClick={(e) => props.onPageChanged(page)}>{page}</span>
                })}
            </div>
            {
                props.users.map(user => <div key={user._id}>
                    <span>
                        <div>
                            <img className={s.image} src={userPhoto}
                                 alt='avatar'/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => props.unFollow(user._id)}>Unfollow</button>
                                : <button onClick={() => props.follow(user._id)}>Follow</button>}
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
