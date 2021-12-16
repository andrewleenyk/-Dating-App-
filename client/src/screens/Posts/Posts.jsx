import React from 'react';
import { Link } from 'react-router-dom';
import './Posts.css'

export default function Posts({ allPosts, currentUser}) {

const isLoggedIn = () => {
    if (currentUser) {
        console.log('h')
        return <Link to="/posts/new"><button>create a post</button></Link>;
    }
}
return (
        <div className="card-list">
            {allPosts.map(post => (
                <Link className="card-div" to={`/posts/${post.id}`}>
                <img className="image" src={post.thumbnail} />
                <div className="hover-cards">
                    <span className="title-card">
                        <h3 className="card-title">{post.title}</h3>
                        <div className="row">
                            <div className="col">
                            <h3>{post.author}</h3>
                            </div>
                        </div>
                    </span>
                </div>
                </Link> 
            ))}
            {isLoggedIn}

        </div>


)
}
