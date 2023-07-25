import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RegisterPageCss.css';

const BASE_URL = 'http://localhost:5000'; // Replace with your actual backend base URL

const Register = () => {
  const initialFormData = {
    name: '',
    rollNumber: '',
    course: '',
    year: '',
    email: '',
    personalEmail: '',
    careerInterests: '',
    password: '',
    preferredJobLocation: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isJobPosted, setIsJobPosted] = useState(false);

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
      // Send formData to the backend to register the user
      await axios.post(`${BASE_URL}/api/register`, formData);
      // Optionally, you can show a success message or perform other actions after successful registration

      // Clear the form data after successful registration
      setFormData(initialFormData);

      // Set the isJobPosted state to true to show the success message
      setIsJobPosted(true);

      // Redirect to the login page after successful registration using navigate function
      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error and show appropriate message to the user
    }
  };

  return (
    <div className="register-form">
    <h1>Register</h1>
    <br/>
    <br/>
      {isJobPosted ? (
        <div>
          <h2>Job Posted Successfully!</h2>
          <p>Thank you for posting the job.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="rollNumber">Roll Number:</label>
            <input type="text" id="rollNumber" name="rollNumber" value={formData.rollNumber} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="course">Course:</label>
            <input type="text" id="course" name="course" value={formData.course} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="year">Year:</label>
            <input type="text" id="year" name="year" value={formData.year} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="personalEmail">Personal Email:</label>
            <input type="email" id="personalEmail" name="personalEmail" value={formData.personalEmail} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="careerInterests">Career Interests:</label>
            <input type="text" id="careerInterests" name="careerInterests" value={formData.careerInterests} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="preferredJobLocation">Preferred Job Location:</label>
            <input type="text" id="preferredJobLocation" name="preferredJobLocation" value={formData.preferredJobLocation} onChange={handleChange} />
          </div>
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
};

export default Register;
