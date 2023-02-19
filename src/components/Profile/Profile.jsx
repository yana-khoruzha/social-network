import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
       <div>
         <div className={s.content}>
           <div><img src="https://plos.org/wp-content/uploads/2020/07/abstract-image_color-tone.jpg"/></div>
         </div>
         <MyPosts/>
       </div>
       
    );
}

export default Profile;