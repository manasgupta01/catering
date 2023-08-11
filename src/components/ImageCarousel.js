
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  const images = [
		"https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
		"https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001",
		"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg",
		// Add more image URLs as needed
  ];
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <Carousel
          autoPlay
          interval={5000} // 5 seconds
          showThumbs={false}
          showStatus={false}
          infiniteLoop
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image} alt={`Slide ${index}`} className="carousel-image" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarousel;