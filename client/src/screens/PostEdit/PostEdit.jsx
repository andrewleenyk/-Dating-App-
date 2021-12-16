import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function PostEdit({ updatePost, allPosts}) {
  const [formData, setFormData] = useState({
    title: "",
    thumbnail: "",
    body: ""
  });
  const { title, thumbnail, body } = formData;

  const { id } = useParams();


  useEffect(() => {
    const prefillFormData = () => {
      const onePost = allPosts.find(post => {
        return post.id === Number(id);
      })
      const { title, thumbnail, body } = onePost;
      setFormData({ title, thumbnail, body });
    }
    if (allPosts.length) {
      prefillFormData()
    }
  }, [allPosts, id])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="login-box" id="register-box">
    <h2 className="form-title">Update Node</h2>
    <form >
    
    <div class="user-box">
    
    <input
    id="input"
    type='text'
    name='title'
    value={title}
    onChange={handleChange}
    />
        <label id='login-label'>
    Title:
    </label>
    </div>
    
    <div class="user-box">
    <input
    id="input"
    type='text'
    name='thumbnail'
    value={thumbnail}
    onChange={handleChange}
    />
        <label id='login-label'>
    Thumbnail (url):
    </label>
    </div>
    
    <div class="user-box">
    <textarea 
    id="input"
    type='text'
    name='body'
    rows="8"
    value={body}
    onChange={handleChange}
    />
        <label id='login-label'>
    Body:
    </label>
    </div>

    <Link to='/posts' onClick={(e) => {
    e.preventDefault()
    updatePost(id, formData);
    }}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    Create
    </Link>
    </form>
    </div>
  )
}
