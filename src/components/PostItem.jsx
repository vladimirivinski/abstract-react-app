import React from 'react';
import '../styles/PostItem.css';
import BrandButton from './ui/button/BrandButton';

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <BrandButton onClick={() => props.remove(props.post)}>
                    Delete
                </BrandButton>
            </div>
        </div>
    );
}

export default PostItem;