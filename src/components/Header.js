import React from "react";
import "./HeaderCss.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";
// import Register from "../pages/RegisterPage";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container"> 
        <h1 className="logo-text">Career Development App</h1>
      </div>
      <div className="links-container">
        <ul className="nav-links">
                   <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/resume-builder">Resume builder</Link>
          </li>
          <li>
            <Link to="/Joblisting">Job-listing</Link>
          </li>
          <li>
            <Link to="/networking-platform">Networking platform</Link>
          </li>
          <li>
            <Link to="/resource-library">Resource Library</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
//
export default Header;
