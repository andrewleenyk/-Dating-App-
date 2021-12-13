import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../Layouts/Layout';

export default function PostEdit(props) {
  const [formData, setFormData] = useState({
    title: "",
    body: ""
  });
  const { title, body } = formData;
  const { updatePost, allPosts } = props;
  const { id } = useParams();
console.log(updatePost)
console.log(allPosts)
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
    const { title, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [title]: value,
    }));
  }

  return (
    <Layout>
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
              defaultValue={title}
              onChange={handleChange}
            />
          </label>
          <label>Body:          
            <input
              type="text"
              name="body"
              defaultValue={body}
              onChange={handleChange}
            />
            </label>
          <button>Submit</button>
        </form>
      </div>
    </Layout>
  )
}
