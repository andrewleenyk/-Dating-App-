import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card/Card';

export default function Posts({ allPosts, currentUser}) {
return (
        <div className="card-list">
            {allPosts.map(post => (
            <React.Fragment key={post.id}>
                <Link to={`/posts/${post.id}`}>
                <Card
                    title={post.title}
                    body={post.body}
                />
                </Link> 
            </React.Fragment>
            ))}
            <Link to="/posts/new"><button>create a post</button></Link>
        </div>


)
}