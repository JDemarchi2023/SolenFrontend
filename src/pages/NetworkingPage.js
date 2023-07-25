import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NetworkingPageCss.css'
import Header from '../components/Header';

const BASEURL = 'http://localhost:5000'; // Replace with your actual BASEURL

const NetworkingPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch all registered users from the backend API
    axios.get(`${BASEURL}/api/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <>
    <Header/>
    <div className="networking-page">
      <h1>Connect with you Peers</h1>
      <br/>
      <div className="user-list">
        {users.map((user) => (
          <div key={user._id} className="user-card">
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Roll Number:</strong> {user.rollNumber}</p>
            <p><strong>Course:</strong> {user.course}</p>
            <p><strong>Year:</strong> {user.year}</p>
            <p><strong>Personal Email:</strong> {user.personalEmail}</p>
            <p><strong>Career Interests:</strong> {user.careerInterests}</p>
            <p><strong>Preferred Job Location:</strong> {user.preferredJobLocation}</p>
          </div>
        ))}
      </div>
    </div>
    </>);
};

export default NetworkingPage;
