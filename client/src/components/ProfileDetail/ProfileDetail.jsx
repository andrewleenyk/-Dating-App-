import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileDetail.css'

export default function ProfileDetail({ allPosts, currentUser}) {
return (
        <div className="profile-detail">

            <img className="profile-pic" src={currentUser.profile_pic} alt="profile-pic"></img>
            <h1 className="username">{currentUser.username}</h1>
            <h3 className="bio">{currentUser.bio}</h3>
            <h1>Nodes: </h1>
            <div className="profile-nodes">
                    {/*
                                {allPosts.map(post => (
                                            <div>
                                            {post.user_id === currentUser?.id ? (<Link className="profile-nodes" key={`profile-${post.title}dsss`} to={`/posts/${post.id}`}>{post.title}</Link>) : ( <></> )}
                                            </div>
                                        ))}
                    */}
                    {
                        allPosts.filter(post=>post.user_id === currentUser?.id).map(post=> (
                            <Link className="profile-nodes" key={`${post.title}`} to={`/posts/${post.id}`}>{post.title}</Link>
                            ))
                    }
                    </div>

        </div>


)
}