import Register from "./pages/RegisterPage";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/LoginPage";
import JobListing from "./pages/JobListing";
import HomePage from './pages/HomePage'
import ResumeBuilder from "./pages/ResumeBuilder";
import NetworkingPage from "./pages/NetworkingPage";
import ResourcePage from "./pages/ResourcePage"; 
 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/" element={<Register />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/Joblisting" element={<JobListing />} /> 
        <Route path="/networking-platform" element={<NetworkingPage />} /> 
        <Route path="/resume-builder" element={<ResumeBuilder />} /> 
        <Route path="/resource-library" element={<ResourcePage />} />  
 
        </Routes>
    </Router>
  );
}
export default App;