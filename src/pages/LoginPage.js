import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginPageCss.css'

const BASE_URL = 'http://localhost:5000'; // Replace with your actual backend base URL

const Login = () => {
  const initialFormData = {
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send formData to the backend for login authentication
      const response = await axios.post(`${BASE_URL}/api/login`, formData);

      // Handle successful login, store the user details in local storage
      localStorage.setItem('userDetails', JSON.stringify(response.data.user)); // Assuming the response contains a 'user' object with user details

      // Redirect to home page after successful login
      navigate('/home'); // Replace '/home' with the URL of your home page component
    } catch (error) {
      console.error('Error during login:', error.response);
      setLoginError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        {loginError && <p className="error-msg">{loginError}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
