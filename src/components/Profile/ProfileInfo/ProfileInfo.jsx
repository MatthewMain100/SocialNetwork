import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
  <div>
    <img src='https://fb.ru/misc/i/gallery/85035/3248623.jpg' />
    <div className={s.descriptionBlock}> Ava + description</div>
  </div>
)
}
export default ProfileInfo;