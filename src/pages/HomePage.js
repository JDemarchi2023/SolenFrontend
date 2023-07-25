import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel';
import AboutUs from '../components/AboutUs';

const images = [ 
  'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg',
  "https://cdn.pixabay.com/photo/2017/06/26/13/16/mentor-2443788_1280.jpg",
  'https://cdn.pixabay.com/photo/2017/09/02/11/04/adult-education-2706977_1280.jpg'
  // Add more image URLs as needed
];

const HomePage = () => {
  return (
    <>
    <Header/>
    <Carousel images={images} />
    <AboutUs/>
    </> )
}

export default HomePage