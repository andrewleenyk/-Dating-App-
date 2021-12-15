import React, { useState } from 'react'


export default function PostCreate({ createPost, currentUser }) {
  const [formData, setFormData] = useState({
    title: "",
    thumbnail: "",
    body: "",
    author: currentUser.username

  });
  const { title, thumbnail, body} = formData;
  console.log(formData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }
  console.log(formData)

  return (
    <div className="login-box" id="register-box">
    <h2 className="form-title">Create Node</h2>
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
    Bio:
    </label>
    </div>
    
    <a onClick={(e) => {
    e.preventDefault()
    createPost(formData)
    }}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Create
    </a>
    </form>
    </div>
  )
}

