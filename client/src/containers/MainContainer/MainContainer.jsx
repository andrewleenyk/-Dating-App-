import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { getAllPosts, postPost, putPost, deletePost} from '../../services/posts';
import Posts from '../../screens/Posts/Posts'
import Profile from '../../screens/Profile/Profile'
import PostDetail from '../../screens/PostDetail/PostDetail';
import PostCreate from '../../screens/PostCreate/PostCreate';
import PostEdit from '../../screens/PostEdit/PostEdit';
import Home from '../../screens/Home/Home';
import About from '../../screens/About/About';

function MainContainer({ currentUser }) {
    const [allPosts, setAllPosts] = useState([]);
    const history = useHistory();

    useEffect(() => {
    fetchPosts();
    }, [])

    const fetchPosts = async () => {
    const posts = await getAllPosts();
    setAllPosts(posts);
    } 

    const createPost = async (postData) => {
    const newPost = await postPost(postData);
    setAllPosts(prevState => ([
        ...prevState,
        newPost
    ]));
    history.push('/posts');
    }

    const updatePost = async (id, postData) => {
    const updatedPost = await putPost(id, postData);
    setAllPosts(prevState => prevState.map(post => {
        return post.id === Number(id) ? updatedPost : post
        })
    )
    history.push('/posts');
    }


    const removePost = async (id) => {
    await deletePost(id);
    setAllPosts(prevState => prevState.filter(post => post.id !== id));
    history.push('/posts');
    }

    return (
    <>
        <Switch>
        <Route path='/posts/new'>
        <PostCreate
            createPost={createPost}
            currentUser={currentUser}
        />
        </Route>
        <Route path='/posts/:id/edit'>
        <PostEdit
            updatePost={updatePost}
            allPosts={allPosts}
        />
        </Route>
        <Route path='/posts/:id'>
        <PostDetail
            allPosts={allPosts}
            currentUser={currentUser}
            removePost={removePost}
        />
        </Route>
        <Route path='/posts'>
            <Posts
            allPosts={allPosts}
            currentUser={currentUser}
            />
        </Route>
        <Route path='/profile'>
            <Profile
            allPosts={allPosts}
            currentUser={currentUser}
            />
        </Route>
        <Route path='/about'>
            <About/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
        </Switch>
    </>
    )
}

export default MainContainer;