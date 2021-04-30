import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/users-reducer";
import axios from "axios"
import React from "react"
import {User} from "./Users"
import {Preloader} from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toogleIsFetching(true)
        axios.get(`http://127.0.0.1:5000/api/users?pageNumber=${this.props.currentPage}&pageSize=${this.props.pageSize}`).then(response => {
            this.props.toogleIsFetching(false)
            this.props.setUsers(response.data.users)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (page) => {
        this.props.toogleIsFetching(true)
        this.props.setCurrentPage(page)
        axios.get(`http://127.0.0.1:5000/api/users?pageNumber=${page}&pageSize=${this.props.pageSize}`).then(response => {
            this.props.toogleIsFetching(false)
            this.props.setUsers(response.data.users)
        })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <User totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      onPageChanged={this.onPageChanged}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            axios.put('http://127.0.0.1:5000/api/users/update', {userId: userId, follow: true}).then(response => {
                console.log("Success")
            })
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            axios.put('http://127.0.0.1:5000/api/users/update', {userId: userId, follow: false}).then(response => {
                console.log("Success")
            })
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toogleIsFetching: (fetching) => {
            dispatch(setFetchingAC(fetching))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)