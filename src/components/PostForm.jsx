import React,{useState} from 'react';
import BrandButton from './ui/button/BrandButton';
import BrandInput from './ui/input/BrandInput';

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        if(post.title && post.body){
            create(newPost);
        }
        setPost({title: '', body: ''});
    }
    return (
        <div>
            <form>
                <BrandInput 
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    placeholder="Post name"
                    type="text" 
                />
                <BrandInput 
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    placeholder="Post description" 
                    type="text"
                />
                <BrandButton onClick={addNewPost}>Create post</BrandButton>
            </form>
        </div>
    );
}

export default PostForm;
