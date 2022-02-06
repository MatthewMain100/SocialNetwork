import React from "react";
import { connect } from "react-redux";
import Photos from "./Photos"
import { followAC, unfollowAC, setUsersAC, onLikeAC } from '../../redux/photos-reducer';

let mapStateToProps=(state)=>{
    return{
        users : state.usersPage.users,
    }
}

let mapDispatchToProps =(dispatch)=>{
    return{
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        onLike: (userId) => {
            dispatch(onLikeAC(userId))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Photos) ;

