import React from 'react';
import PostItem from './PostItem';
import '../styles/PostList.css';

function PostList({posts, remove, title}) {

    return (
        <div>
            <h1 className="post-header">{title}</h1>
            {posts.map((post, index) => (
                <PostItem key={post.id} post={post} remove={remove} number={index +1} />
            ))}
        </div>
    );
}
export default PostList;
