import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import TextScramble from './TextScramble/TextScramble';
export default function Nav({ currentUser, handleLogout }) {
  return (
    <div className="Nav-div">
          <h1 data-shadow='dang!' className="Nav-title">
        Daily Node
      </h1>

      <TextScramble />

<ul class="nav-menu">
				<li>
        <Link to='/' className="three-d">
					Home
            <span className="three">
              <span className="front">Home</span>
              <span className="back">Home</span>
            </span>
				  </Link>
        </li>

        <li>
        <Link to='/' className="three-d">
					About
            <span className="three">
              <span className="front">About</span>
              <span className="back">About</span>
            </span>
				  </Link>
        </li>

        <li>
        <Link to='/posts' className="three-d">
					Posts
            <span className="three">
              <span className="front">Posts</span>
              <span className="back">Posts</span>
            </span>
				  </Link>
        </li>

        {currentUser ? (

          <li>
<Link to='/' className="three-d" >{currentUser.username}
              <span className="three">
                <span className="front">{currentUser.username}</span>
                <span className="back">{currentUser.username}</span>
              </span>
              </Link>
					<ul className="drop-menu">
						<li><Link to='/profile' className="three-d" >
								Profile
								<span className="three"><span className="front">Profile</span><span class="back">Profile</span></span>
                </Link></li>
							<li><Link to='/' className="three-d" onClick={handleLogout}>Logout
              <span className="three">
                <span className="front">Logout</span>
                <span className="back">Logout</span>
              </span>
              </Link></li>

					</ul>
				</li>
        ) : (
          <>
            <li>
            <Link to='/login' className="three-d">
            Login
              <span className="three">
                <span className="front">Login</span>
                <span className="back">Login</span>
              </span>
            </Link>
            </li>

            <li>
            <Link to='/register' className="three-d">
            Register
              <span className="three">
                <span className="front">Register</span>
                <span className="back">Register</span>
              </span>
            </Link>
            </li>
        </>
        )}
        </ul>
    </div>
    
  )
}
