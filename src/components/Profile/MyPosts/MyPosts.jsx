import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
          my posts
          <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Add post</button>
            <button>Remove</button>
          </div>
          <div className="{s.posts}">
            <Post message="Hello" like='1'/>
            <Post message="This is my first post" like='5'/>
          </div>
        </div>
    );
}

export default MyPosts;