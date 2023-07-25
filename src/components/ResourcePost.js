import React, { useState } from 'react';
import axios from 'axios';
import './ResourcePostCss.css'

const BASEURL = 'http://localhost:5000/api'; // Replace with your actual BASEURL

const ResourcePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new FormData to send the file along with other data
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('file', file);

    // Send the resource data to the backend API
    axios.post(`${BASEURL}/resourcePosts`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(() => {
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error('Error posting resource:', error);
      });
  };

  return (
    <div className="resource-post-container">
      <h1>Post a Resource </h1>
      {isSubmitted ? (
        <div className="success-message">
          <h2>Resource Posted Successfully!</h2>
          <button onClick={() => setIsSubmitted(false)}>Post Another Resource</button>
        </div>
      ) : (
        <form className="resource-form" onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <label>File (Image/PDF):</label>
          <input
            type="file"
            onChange={handleFileChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ResourcePost;
