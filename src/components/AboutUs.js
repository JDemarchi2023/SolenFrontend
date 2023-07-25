import React from 'react';
import './AboutUs.css'; // Import the CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <p className="about-us-introduction">
        Welcome to our Career Development App! We are a passionate team of career experts and technologists
        dedicated to empowering students and job seekers to reach their full potential and achieve their
        career goals. With years of experience in the industry, we understand the challenges and hurdles
        faced by individuals in today's competitive job market. Our mission is to provide a comprehensive
        platform that offers a wide range of resources and tools to support your career journey, whether
        you're just starting out or looking for new opportunities to grow.
      </p>
      <div className="contact-details">
        <p>
          Email: <a href="mailto:contact@careerapp.com">contact@careerapp.com</a>
        </p>
        <p>Phone: +00000000000</p>
      </div>
      <div className="services-offered">
        <h3>Services Offered</h3>
        <ul>
          <li>
            <strong>Resource Materials:</strong> Access a wealth of study materials, career guides, and
            industry-specific resources. Our platform is curated to provide the latest and most relevant
            information to help you stay ahead in your field.
          </li>
          <li>
            <strong>Peer Details:</strong> Connect with like-minded individuals in your field. Our networking
            feature allows you to build valuable connections, collaborate on projects, and exchange ideas
            with professionals and students who share your career interests.
          </li>
          <li>
            <strong>Resume Builder:</strong> Create a professional and effective resume to impress employers.
            Our intuitive resume builder tool guides you through the process, highlighting your skills and
            accomplishments to showcase your potential to prospective employers.
          </li>
          <li>
            <strong>Job/Internship Portal:</strong> Discover a wide range of job and internship opportunities
            tailored to your career interests. Our portal connects you with top employers looking for talented
            candidates like you.
          </li>
        </ul>
      </div>
      <div className="footer"> 
      </div>
    </div>
  );
};

export default AboutUs;
