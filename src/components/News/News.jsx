import React from 'react';
import s from './News.module.css';
import Post from './oneNew/oneNew';
import { sendNewsCreater, updateNewNewsBodyCreater } from '../../redux/news-reducer';



const News = (props) => {

  let state = props.newsPage;

  let postsElements = state.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

  let newNewsBody = state.newPostText;

  let onSendMessageClick = () =>{
    props.sendNews();
  }
  let onNewMessageChange = (elem) =>{
    let body = elem.target.value;
    props.updateNewNewsBody(body);
  }

  return (<div>
    <figure class={s.caption_border}>
      <img src="https://facenewss.ru/wp-content/uploads/2021/08/novosti.jpg" />
      <figcaption>Первые новости</figcaption>
    </figure>

    <body>
      <textarea onChange={ onNewMessageChange } value={newNewsBody}></textarea>
    </body>

      <div><button className={s.form_button} onClick={ onSendMessageClick }>Add post</button></div>
      
      <div className={s.News_id}>{postsElements}</div>
    </div>

  )
}
export default News;