import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import BrandSelect from './components/ui/select/BrandSelect';
import './styles/App.css';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'A JavaScript', body: 'ZZZZZ'},
        {id: 2, title: 'Z Java', body: 'A: AAAAAA 2'},
        {id: 4, title: 'Ruby', body: 'C: Description'},
        {id: 5, title: 'Python', body: 'X: DDDDDDD'},
        {id: 6, title: 'Apex', body: 'Z: Description'},
    ]);
    const [selectedSort, setSelectedSort] = useState('');
    const [reversedSort, setReversedSort] = useState('');

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }
    const removePost = (post) => {
        setPosts(posts.filter(e => e.id !== post.id))
    }
    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setReversedSort('ASC');
        setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])));
    }
    const sortDirection = (order) => {
        setReversedSort(order);
        if(order ==='desc' && selectedSort){
            setPosts([...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort])).reverse());          
        } else if(order ==='asc' && selectedSort){
            setPosts([...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort])));
        }
    }

    return (
        <div>
            <PostForm create={createPost}/>
            <hr style={{margin: '15px'}} />
            <div>
                <BrandSelect 
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Sort options" 
                    options={[
                        {value: 'title', name: 'Name'},
                        {value: 'body', name: 'Description'},
                    ]}
                />
                <BrandSelect 
                    value={reversedSort}
                    onChange={sortDirection}
                    defaultValue="Sort direction" 
                    options={[
                        {value: 'asc', name: 'A-Z'},
                        {value: 'desc', name: 'Z-A'},
                    ]}
                />
            </div>
            {posts.length
                ?
                <PostList remove={removePost} posts={posts} title="List title"/>
                :
                <h1 style={{textAlign: 'center'}}>
                    Post list is empty!
                </h1>
            }
        </div>
    );
}

export default App;
