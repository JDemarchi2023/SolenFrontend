import React, { useState } from 'react';
import axios from 'axios';

const BASEURL = 'http://localhost:5000/api'; // Replace with your actual BASEURL

const JobPost = () => {
  const [companyName, setCompanyName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [applyLink, setApplyLink] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Data to be sent to the backend
    const jobData = {
      companyName,
      title,
      description,
      applyLink,
    };

    // Send the job data to the backend API
    axios.post(`${BASEURL}/postJob`, jobData)
      .then(() => {
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error('Error posting job:', error);
      });
  };

  return (
    <div className="job-post-container">
      <h1>Job Post Form</h1>
      {isSubmitted ? (
        <div className="success-message">
          <h2>Job Posted Successfully!</h2>
          <p>Thank you for posting the job.</p>
        </div>
      ) : (
        <form className="job-form" onSubmit={handleSubmit}>
          <label>Company Name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
          <label>Job Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label>Job Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <label>Apply Link:</label>
          <input
            type="text"
            value={applyLink}
            onChange={(e) => setApplyLink(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default JobPost;
