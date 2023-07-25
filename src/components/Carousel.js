import React, { useState, useEffect } from 'react';
import './CarouselCss.css'; // Import the CSS file for styling


 

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Auto advance the carousel every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <button className="prev-button" onClick={handlePrev}>&#8249;</button>
      <img className="carousel-image" src={images[currentIndex]} alt={`Image ${currentIndex}`} />
      <button className="next-button" onClick={handleNext}>&#8250;</button>
    </div>
  );
};

export default Carousel;
