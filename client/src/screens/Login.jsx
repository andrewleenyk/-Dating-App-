import { useState } from 'react';
import './Login.css';
export default function Login(props) {
const [formData, setFormData] = useState({
    username: '',
    password: '',
});
const { username, password } = formData;
const { handleLogin } = props;

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
    ...prevState,
    [name]: value,
    }));
};

return (
    <div className="login-box">
            <h2>Login</h2>
        <form >
        <div class="user-box">

            <input
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
            />
                    <label>
            Username:
        </label>
        <br />

            <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            />
                    <label>
            Password:
        </label>
        </div>

        <a onClick={(e)=> {
        e.preventDefault();
        handleLogin(formData);
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
