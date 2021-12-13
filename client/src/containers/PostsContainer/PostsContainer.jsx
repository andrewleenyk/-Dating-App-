import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { getAllPosts} from '../../services/posts';
import Posts from '../../screens/Posts/Posts'


function PostsContainer() {
    console.log('hj')
    const [allPosts, setAllPosts] = useState([]);
    const history = useHistory();

    useEffect(() => {
    fetchPosts();
    }, [])

    const fetchPosts = async () => {
    console.log('hj')
    const posts = await getAllPosts();
    setAllPosts(posts);
    } 
    /*
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
    */
   console.log('hello')
   console.log(allPosts)

    return (
    <>
        <Switch>
        <Route path='/posts'>
            <Posts
            allPosts={allPosts}
            />
        </Route>
        </Switch>
    </>
    )
}

export default PostsContainer;