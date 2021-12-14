import { Link } from 'react-router-dom';

export default function Layout({ currentUser, handleLogout, children }) {
  return (
    <div>
      <header>
      <Link to='/'>blog app</Link>
      <Link to='/'>about</Link>

            <Link to='/posts'>posts</Link>
        
        {currentUser ? (
          <div>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div> 
        ) : (
          <>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </>

        )}

      </header>
      <br/>
      {children}
    </div>
  );
}

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

				<li><a href="#" class="three-d">
					Services
					<span class="three"><span class="front">Services</span><span class="back">Services</span></span>
				</a></li>
				<li><a href="#" class="three-d">
					Products
					<span class="three"><span class="front">Products</span><span class="back">Products</span></span>
				</a></li>
        </ul>