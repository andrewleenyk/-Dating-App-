import React, { useState } from 'react'


export default function PostCreate({ createPost }) {
  const [formData, setFormData] = useState({
    title: "",
    body: ""
  });
  const { title, body } = formData;
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
      <div className="form-container">
        <form onSubmit={(e) => {
          e.preventDefault()
          createPost(formData);
        }}>
          <h3>Create a post</h3>
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
      </div>
  )
}
