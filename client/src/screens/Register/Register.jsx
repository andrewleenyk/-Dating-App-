import { useState } from 'react';
import './Register.css'


export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    profile_pic: '',
    bio: ''
  });
  const { username, email, password, profile_pic, bio } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="login-box" id="register-box">
          <h2 className="form-title">Register</h2>
    <form >

    <div class="user-box">

      <input
      id="input"
      type='text'
      name='username'
      value={username}
      onChange={handleChange}
      />
              <label id='login-label'>
      Username:
      </label>
      </div>

      <div class="user-box">
      <input
      id="input"
      type='text'
      name='email'
      value={email}
      onChange={handleChange}
      />
              <label id='login-label'>
      Email:
      </label>
      </div>

      <div class="user-box">
      <input
      type='password'
      name='password'
      value={password}
      onChange={handleChange}
      />
              <label id='login-label'>
      Password:
      </label>
      </div>

      <div class="user-box">
      <input
      id="input"
      type='text'
      name='profile_pic'
      value={profile_pic}
      onChange={handleChange}
      />
              <label id='login-label'>
      Profile Pic:
      </label>
      </div>

      <div class="user-box">
      <textarea 
      id="input"
      type='text'
      name='bio'
      rows="6"
      value={bio}
      onChange={handleChange}
      />
              <label id='login-label'>
      Bio:
      </label>
      </div>

      <a onClick={(e)=> {
        e.preventDefault();
        handleRegister(formData);
        }}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
    </form>
    </div>
  );
}
