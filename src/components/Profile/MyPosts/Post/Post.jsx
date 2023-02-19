import React from 'react';
import s from './Post.module.css';

const Post = (props) => { 
  return (
          <div className={s.item}>
            <div>
                 <img src="https://www.w3schools.com/howto/img_avatar.png"  alt="avatar"/>
                    {props.message}
            </div>
            <div>Like: {props.like}</div>
          </div>
     )
}

export default Post;