import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ResourcePostsListCss.css'; // Import the CSS file for styling

const BASEURL = 'http://localhost:5000/api'; // Replace with your actual BASEURL

const ResourcePostsList = () => {
  const [resourcePosts, setResourcePosts] = useState([]);

  useEffect(() => {
    // Fetch all resource posts from the backend API
    axios.get(`${BASEURL}/resourcePosts`)
      .then((response) => {
        setResourcePosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching resource posts:', error);
      });
  }, []);

  return (
    <div className="resource-posts-list-container"> {/* Added className */}
      <h1>Resource's</h1>
      {resourcePosts.map((post) => (
        <div key={post._id} className="resource-post">
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>Category: {post.category}</p>
          {post.filePath && (
            <a href={`${BASEURL}/${post.filePath}`} target="_blank" rel="noopener noreferrer">
              View File
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default ResourcePostsList;
