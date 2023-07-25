import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './JobPostCss.css'

const BASEURL = 'http://localhost:5000/api'; // Replace with your actual BASEURL

const JobList = () => {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    // Fetch all job posting data from the backend API
    axios.get(`${BASEURL}/jobPostings`)
      .then((response) => {
        setJobData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching job postings:', error);
      });
  }, []);

  return (
    <div className="job-list">
      <h1>Job/ Internships</h1>
      {jobData.map((job) => (
        <div key={job._id} className="job-card">
          <h2>{job.title}</h2>
          <p><strong>Company Name:</strong> {job.companyName}</p>
          <p><strong>Description:</strong> {job.description}</p>
          <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
            <button>Apply</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default JobList;
