import React from 'react';
import { Link } from 'react-router-dom';


export default function ProfileDetail({ allPosts, currentUser}) {
return (
        <div className="card-list">

            <img src={currentUser.profile_pic}></img>
            <h1>{currentUser.username}</h1>
            <h1>{currentUser.bio}</h1>
            <section>
                {currentUser.interests.map(interest => (
                    <h5>{interest}</h5>
                ))}
            </section>
        </div>


)
}