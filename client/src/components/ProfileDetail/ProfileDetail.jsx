import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ProfileDetail({ allPosts, currentUser}) {
return (
        <div className="card-list">

            <img src={currentUser.profile_pic}></img>
            <h1>{currentUser.username}</h1>
            <h1>{currentUser.bio}</h1>

                {allPosts.map(post => {
                    if (post.user_id === currentUser?.id) {
                        return <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    }
                })}

            <section>
                {currentUser.interests.map(interest => (
                    <h5>{interest}</h5>
                ))}
            </section>
        </div>


)
}