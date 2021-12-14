import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PostEdit({ updatePost, allPosts}) {
  const [formData, setFormData] = useState({
    title: "",
    body: ""
  });
  const { title, body } = formData;

  const { id } = useParams();


  useEffect(() => {
    const prefillFormData = () => {
      const onePost = allPosts.find(post => {
        return post.id === Number(id);
      })
      const { title, body } = onePost;
      setFormData({ title, body });
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
      <div className="form-container">
        <form onSubmit={(e) => {
          e.preventDefault()
          updatePost(id, formData);
        }}>
          <h3>Update Post</h3>
          <label>Title:
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
            />
          </label>
          <label>Body:          
            <input
              type="text"
              name="body"
              value={body}
              onChange={handleChange}
            />
            </label>
          <button>Submit</button>
        </form>
        
        <h1>good test</h1>

            
      </div>
  )
}
