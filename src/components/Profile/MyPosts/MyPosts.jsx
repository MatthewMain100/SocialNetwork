import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreater, updateNewPostTextActionCreater}from '../../../redux/profile-reducer';


const MyPosts = (props) => {

  let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

  let newPostElement = React.createRef();

  let onAddPost=()=>{
    props.addPost();
  }

  let onPostChange=()=>{
    let text=newPostElement.current.value;
    props.updateNewPostText(text);
  }
  

  return (
    <div> My posts:
      <div>
        <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText}> </textarea>
        <div>
          <button className={s.form_button} onClick={ onAddPost }>Add post</button>
        </div>
      </div>

      <div className={s.posts}>
        New posts:

        {postsElements}

      </div>
    </div>
  )
}
export default MyPosts;