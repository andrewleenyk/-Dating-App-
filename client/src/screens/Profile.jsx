import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDetail from '../components/ProfileDetail/ProfileDetail';

export default function Profile({ allPosts, currentUser}) {
return (
        <div className="card-list">
            <ProfileDetail
            allPosts={allPosts}
            currentUser={currentUser}

            />
            <Link to="/posts/new"><button>create a post</button></Link>
        </div>


)
}