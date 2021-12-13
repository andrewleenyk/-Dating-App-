import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

import Layout from '../../Layouts/Layout';

export default function PostDetail(props) {
  const [post, setPost] = useState(null);
  const { allPosts, removePost } = props;
  const { id } = useParams();

  useEffect(() => {
    if (allPosts.length) {
      const onePost = allPosts.find((post) => post.id === Number(id));
      setPost(onePost)
    }
  }, [allPosts, id])

  return (
    <Layout>
      <div className="post-details">
        {
          post &&
          <div className="card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}/edit`}><button>Update</button></Link>
            <button onClick={() => removePost(post.id)}>Release</button>
          </div>
        }
      </div>
    </Layout>
  )
}
