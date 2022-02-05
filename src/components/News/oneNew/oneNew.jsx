import React from 'react';
import s from './oneNew.module.css'
const Post = (props) => {
  return (
    <div className={s.News_id}>
      <div>
      {/* <img src='https://img0.liveinternet.ru/images/attach/c/4/78/642/78642974_tochka.jpg' /> */}
      {props.message}
      </div>
      <div> Likes: {props.likesCount}</div>
    </div>
  )
}
export default Post;