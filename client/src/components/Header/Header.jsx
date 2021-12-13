import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to='/'>
        <h1>blog App</h1>
      </Link>

      <div className='nav-links'>
        <Link to='/posts'>posts</Link>
      </div>
      <hr />
    </header>
    
  )
}
