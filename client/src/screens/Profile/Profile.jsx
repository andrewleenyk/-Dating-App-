import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDetail from '../../components/ProfileDetail/ProfileDetail';
import '../Login/Login.css'
import './Profile.css'
export default function Profile({ allPosts, currentUser}) {
return (
        <div className="profile-card">
            <ProfileDetail
            allPosts={allPosts}
            currentUser={currentUser}
            />
            <div className="create-box">
            <Link to="/posts/new">

      Create</Link>
            </div>

        </div>


)
}