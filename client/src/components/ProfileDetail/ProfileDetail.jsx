import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileDetail.css'

export default function ProfileDetail({ allPosts, currentUser}) {
return (
        <div className="profile-detail">

            <img className="profile-pic" src={currentUser.profile_pic}></img>
            <h1 className="username">{currentUser.username}</h1>
            <h3 className="bio">{currentUser.bio}</h3>
            <h1>Nodes: </h1>
                {allPosts.map(post => {
                    if (post.user_id === currentUser?.id) {
                        return <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    }
                })}
        </div>


)
}