import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserDetailsCss.css'; // Import the CSS file for styling

const BASEURL = 'http://localhost:5000/api'; // Replace with your actual BASEURL

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    // Get the email from local storage
    const storedUserDetails = localStorage.getItem('userDetails');
    if (storedUserDetails) {
      const userDetails = JSON.parse(storedUserDetails);
      // Fetch the user details from the backend API using email
      axios.get(`${BASEURL}/userDetails/${userDetails.email}`)
        .then((response) => {
          setUserDetails(response.data);
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, []);

  return (
    <div className="user-details-container">
      <h1>User Details</h1>
      <div className="user-details">
        <p><strong>Name:</strong> {userDetails.name}</p>
        <p><strong>Roll Number:</strong> {userDetails.rollNumber}</p>
        <p><strong>Course:</strong> {userDetails.course}</p>
        <p><strong>Year:</strong> {userDetails.year}</p>
        <p><strong>Email:</strong> {userDetails.email}</p>
        <p><strong>Personal Email:</strong> {userDetails.personalEmail}</p>
        <p><strong>Career Interests:</strong> {userDetails.careerInterests}</p>
        <p><strong>Preferred Job Location:</strong> {userDetails.preferredJobLocation}</p>
      </div>
    </div>
  );
};

export default UserDetails;
