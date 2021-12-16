import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import './Posts.css'

export default function Posts({ allPosts, currentUser}) {
return (
        <div className="card-list">
            {allPosts.map(post => (
                <Link className="card-div" to={`/posts/${post.id}`}>
                <img className="image" src={post.thumbnail} />
                <div className="hover-cards">
                    <span className="text">
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
            <Link to="/posts/new"><button>create a post</button></Link>

            
        </div>


)
}
