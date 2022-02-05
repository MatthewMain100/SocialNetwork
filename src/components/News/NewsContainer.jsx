import React from 'react';
import News from './News';
import {sendNewsCreater, updateNewNewsBodyCreater} from '../../redux/news-reducer';
import {connect} from 'react-redux';


let mapStateToProps=(state)=>{
  return{
      newsPage: state.newsPage
  }
}

let mapDispatchToProps=(dispatch)=>{
  return{
      updateNewNewsBody: ()=>{
          dispatch(sendNewsCreater());
      },
      sendNews: (body)=>{
          dispatch(updateNewNewsBodyCreater(body));
      }
  }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps) (News)

export default NewsContainer;