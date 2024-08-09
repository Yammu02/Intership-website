import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';

export default function Signup() {
  const [data, setData] = useState({ username: '', email: '', password: '', roletype: '' });
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevstate) => ({ ...prevstate, [name]: value }));
  };

  const handleSubmit = () => {
    setShow(true);
    const userData = {
      username: data.username,
      email: data.email,
      password: data.password,
      roletype: 'student',
    };

    axios.post('http://localhost:8000/form', userData)
      .then((res) => {
        setData({ username: '', email: '', password: '', roletype: '' });
        alert('Registration successful');
        console.log(res.data);
      })
      .catch((err) => {
        console.error('Error during registration:', err);
        alert('Error during registration. Please try again later.');
      });
  };

  return (
    <div className="signup-container">
      <center>
        <form className="signup-form">
          <h1 class="signh1">Sign-up</h1>
          <label>User-Name:</label>
          <input
            type="text"
            className="custom-input"
            name="username"
            placeholder="username"
            value={data.username}
            onChange={handleChange}
            required
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            className="custom-input"
            name="password"
            placeholder="password"
            value={data.password}
            onChange={handleChange}
            required
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            className="custom-input"
            name="email"
            placeholder="email"
            value={data.email}
            onChange={handleChange}
            required
          />
          <br />
          <h3>Do you have an account?<a className="custom-link" href="Login">Login</a></h3>
          <button type="button" className="custom-button" onClick={handleSubmit}>Submit</button>
          <button type="reset" className="custom-button">Reset</button>
        </form>
      </center>
    </div>
  );
}





