import React from 'react';
import { Link } from 'react-router-dom';
import './Posts.css'

export default function Posts({ allPosts, currentUser}) {

return (
    <div>
            <div className="card-list">
            {allPosts.map(post => (
                <Link key={`${post.id}`} className="card-div" to={`/posts/${post.id}`}>
                <img className="image" src={post.thumbnail} alt="Not Available" />
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
        </div>
{currentUser ? (<Link to="/posts/new"><button>create a post</button></Link>) : (<></>)}
    </div>
)
}
