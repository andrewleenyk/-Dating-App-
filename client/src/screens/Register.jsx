import { useState } from 'react';

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    profile_pic: '',
    bio: '',
    interests: ['hello','non']
  });
  const { username, email, password, profile_pic, bio, interests } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}
    >
      <h3>Register</h3>
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type='text'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        profile_pic:
        <input
          type='text'
          name='profile_pic'
          value={profile_pic}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        bio:
        <input
          type='text'
          name='bio'
          value={bio}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        interests:
        <input
          type='text'
          name='interests'
          value={interests}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}
