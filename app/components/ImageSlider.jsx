import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../styles/Slider.css'; 

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  const images = [
    'require("../images/image1.jpg")',
    'require("../images/image2.jpg")',
    'require("../images/image3.jpg")',
    'require("../images/image4.jpg")',
  ];

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <p>Current Slide: {currentSlide + 1}</p>
      </div>
    </div>
  );
};

export default ImageSlider;
