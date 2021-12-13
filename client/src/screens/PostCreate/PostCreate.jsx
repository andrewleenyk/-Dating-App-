import React, { useState } from 'react'
import Layout from '../../Layouts/Layout';

export default function PostCreate(props) {
  const [formData, setFormData] = useState({
    title: "",
    body: ""
  });
  const { title, body } = formData;
  const { createPost } = props;

  const handleChange = (e) => {
    const { title, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [title]: value
    }));
  }

  return (
    <Layout>
      <div className="form-container">
        <form onSubmit={(e) => {
          e.preventDefault()
          createPost(formData);
        }}>
          <h3>Create a post</h3>
          <label>Title:
            <input
              type="text"
              name="name"
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
      </div>
    </Layout>
  )
}
