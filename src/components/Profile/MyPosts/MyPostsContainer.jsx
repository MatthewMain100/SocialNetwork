import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreater, updateNewPostTextActionCreater}from '../../../redux/profile-reducer';
import {connect} from 'react-redux';


let mapStateToProps =(state)=>{
  return{
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps=(dispatch)=>{
  return{
    updateNewPostText: (text)=>{
      let action = updateNewPostTextActionCreater(text);
      dispatch(action)
    },
    addPost: ()=>{
      dispatch(addPostActionCreater())
    }
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;