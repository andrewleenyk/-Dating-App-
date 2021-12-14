import React from 'react';
import { Link } from 'react-router-dom';


export default function ProfileDetail({ allPosts, currentUser}) {
return (
        <div className="card-list">
        <h1>{currentUser.profile_pic}</h1>
            <img src={currentUser.profile_pic}></img>
            <h1>{currentUser.username}</h1>
            <h1>{currentUser.bio}</h1>
            <h1>{currentUser.interests}</h1>
            <Link to="/posts/new"><button>create a post</button></Link>
        </div>


)
}