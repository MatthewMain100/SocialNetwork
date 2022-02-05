import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <div>
      <img src='https://i.pinimg.com/originals/af/0f/87/af0f87adf7fc87a6050f03d25ebf991d.jpg' />
      {props.message}
      </div>
      <div>Likes: {props.likesCount}</div>
    </div>
  )
}
export default Post;