import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {

  return <div className={s.content}>
    <h1 className={s.AppHeader}>Main content </h1>
    <ProfileInfo/>
    <MyPostsContainer />
    </div>
}
    export default Profile;