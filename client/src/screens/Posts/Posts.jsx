import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import './Posts.css'

export default function Posts({ allPosts, currentUser}) {
return (
        <div className="card-list">
            {allPosts.map(post => (
                <Link to={`/posts/${post.id}`}>
                <img src={post.thumbnail} />

                </Link> 
            ))}
            <Link to="/posts/new"><button>create a post</button></Link>

            
        </div>


)
}
<div className="hover-cards">
                                        <span className="text">
                                          <h3 className="card-title">{card.title}</h3>
                                          <div className="row">
                                              <div className="col">
                                                <img className="eth" src={eth} alt="eth"/>
                                              </div>
                                              <div className="col">
                                                <h3>{card.price}</h3>
                                              </div>
                                          </div>
                                        </span>
                                      </div>