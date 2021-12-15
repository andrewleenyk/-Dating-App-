import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './PostDetail.css'

export default function PostDetail({ allPosts, removePost, currentUser}) {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (allPosts.length) {
      const onePost = allPosts.find((post) => post.id === Number(id));
      setPost(onePost)
    }
  }, [allPosts, id])

  return (
      <div className="post-details">
        {
          post &&
          <div className="card">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h3>{post.author}</h3>

            {currentUser?.id === post.user_id && (
              <>
              <Link to={`/posts/${post.id}/edit`}>
                <button>Update</button>
              </Link>
              <Link to={`/posts`}>
                <button onClick={() => removePost(post.id)}>Delete</button>
              </Link>
              </>
            )}

          </div>
        }
      </div>
  )
}
